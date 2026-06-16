'use client';
import { useState, useEffect, useMemo, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useUI } from '@/components/context/UIContext';
import { ALL_NAV_ITEMS } from '@/components/nav-data';
import Icon, { IconName } from '@/components/icon';

type CommandKind = 'ai' | 'create' | 'navigate' | 'search';

interface Command {
    id: string;
    label: string;
    hint?: string;
    icon: IconName;
    kind: CommandKind;
    keywords?: string[];
    soon?: boolean;
    run: () => void;
}

const KIND_LABEL: Record<CommandKind, string> = {
    ai: 'AI Actions',
    create: 'Create',
    navigate: 'Go to',
    search: 'Search',
};

const KIND_ORDER: CommandKind[] = ['ai', 'create', 'navigate', 'search'];

export default function CommandPalette() {
    const { commandOpen, closeCommand, askCopilot } = useUI();
    const router = useRouter();
    const [query, setQuery] = useState('');
    const [active, setActive] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const listRef = useRef<HTMLDivElement>(null);

    // Build the command set (single source of truth).
    const commands = useMemo<Command[]>(() => {
        const ai: Command[] = [
            {
                id: 'ai-summarize-company',
                label: 'Summarize a company',
                hint: 'Company Brain',
                icon: 'sparkles',
                kind: 'ai',
                keywords: ['summary', 'abc company', 'what happened'],
                run: () => askCopilot('Summarize everything about '),
            },
            {
                id: 'ai-run-action',
                label: 'Run an AI action on this page',
                hint: 'Copilot',
                icon: 'sparkles',
                kind: 'ai',
                keywords: ['summarize', 'extract', 'draft'],
                run: () => askCopilot('Run an action on the current page'),
            },
            {
                id: 'ai-ask',
                label: 'Ask anything about your company',
                hint: 'Memory Chat',
                icon: 'message',
                kind: 'ai',
                keywords: ['question', 'memory'],
                run: () => router.push('/memory-chat'),
            },
        ];

        const create: Command[] = [
            {
                id: 'create-task',
                label: 'Create task',
                icon: 'check-square',
                kind: 'create',
                keywords: ['todo', 'assign'],
                soon: true,
                run: () => askCopilot('Create a new task: '),
            },
            {
                id: 'create-workspace',
                label: 'Create workspace',
                hint: 'Workspace Builder',
                icon: 'grid',
                kind: 'create',
                keywords: ['project', 'folder'],
                soon: true,
                run: () => askCopilot('Create a workspace for '),
            },
            {
                id: 'create-automation',
                label: 'Create automation',
                icon: 'zap',
                kind: 'create',
                keywords: ['workflow', 'trigger'],
                soon: true,
                run: () => askCopilot('Build an automation that '),
            },
        ];

        const navigate: Command[] = ALL_NAV_ITEMS.map((n) => ({
            id: `nav-${n.href}`,
            label: n.label,
            hint: n.soon ? 'Soon' : undefined,
            icon: n.icon,
            kind: 'navigate' as const,
            keywords: n.keywords,
            soon: n.soon,
            run: () => {
                if (!n.soon) router.push(n.href);
            },
        }));

        return [...ai, ...create, ...navigate];
    }, [router, askCopilot]);

    // Filter by query.
    const filtered = useMemo(() => {
        const q = query.trim().toLowerCase();
        if (!q) return commands;
        return commands.filter((c) => {
            const haystack = [c.label, c.hint ?? '', ...(c.keywords ?? [])].join(' ').toLowerCase();
            return haystack.includes(q);
        });
    }, [commands, query]);

    // Group filtered commands by kind for display, preserving order.
    const grouped = useMemo(() => {
        return KIND_ORDER.map((kind) => ({
            kind,
            items: filtered.filter((c) => c.kind === kind),
        })).filter((g) => g.items.length > 0);
    }, [filtered]);

    // Flat list (matches visual order) for keyboard navigation.
    const flat = useMemo(() => grouped.flatMap((g) => g.items), [grouped]);

    // Reset + focus when opened.
    useEffect(() => {
        if (commandOpen) {
            setQuery('');
            setActive(0);
            const t = setTimeout(() => inputRef.current?.focus(), 0);
            return () => clearTimeout(t);
        }
    }, [commandOpen]);

    useEffect(() => {
        setActive(0);
    }, [query]);

    if (!commandOpen) return null;

    const choose = (cmd?: Command) => {
        if (!cmd) return;
        // Not-yet-built navigation destinations are a soft no-op (keep palette open).
        // "Create" actions still work even when soon, since they route into the Copilot.
        if (cmd.soon && cmd.kind !== 'create') return;
        cmd.run();
        closeCommand();
    };

    const onKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setActive((i) => Math.min(i + 1, flat.length - 1));
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setActive((i) => Math.max(i - 1, 0));
        } else if (e.key === 'Enter') {
            e.preventDefault();
            choose(flat[active]);
        }
    };

    let runningIndex = -1;

    return (
        <div
            className="fixed inset-0 z-[60] flex items-start justify-center pt-[12vh] px-4 bg-black/50 backdrop-blur-sm"
            onClick={closeCommand}
        >
            <div
                className="w-full max-w-2xl bg-white border border-gray-200 rounded-2xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Search input */}
                <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
                    <Icon name="search" size={16} className="text-gray-400 shrink-0" />
                    <input
                        ref={inputRef}
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={onKeyDown}
                        placeholder="Search anything, run an AI action, or jump to a page…"
                        className="flex-1 bg-transparent border-none outline-none text-base text-gray-800 placeholder-gray-400"
                    />
                    <kbd className="px-2 py-1 border border-gray-200 rounded-md text-[11px] font-semibold text-gray-500">ESC</kbd>
                </div>

                {/* Results */}
                <div ref={listRef} className="max-h-[52vh] overflow-y-auto py-2">
                    {flat.length === 0 ? (
                        <div className="px-5 py-12 text-center">
                            <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400 mx-auto mb-3"><Icon name="search" size={18} /></div>
                            <div className="text-sm font-semibold text-gray-700">No matches for “{query}”</div>
                            <button
                                onClick={() => { askCopilot(query); closeCommand(); }}
                                className="mt-3 text-sm text-teal-600 font-semibold hover:text-teal-700"
                            >
                                Ask Copilot instead →
                            </button>
                        </div>
                    ) : (
                        grouped.map((group) => (
                            <div key={group.kind} className="mb-1">
                                <div className="px-5 pt-2 pb-1 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                                    {KIND_LABEL[group.kind]}
                                </div>
                                {group.items.map((cmd) => {
                                    runningIndex += 1;
                                    const isActive = runningIndex === active;
                                    const idx = runningIndex;
                                    return (
                                        <button
                                            key={cmd.id}
                                            onMouseEnter={() => setActive(idx)}
                                            onClick={() => choose(cmd)}
                                            className={`w-full flex items-center gap-3 px-5 py-2.5 text-left transition ${isActive ? 'bg-teal-50' : 'hover:bg-gray-50'
                                                }`}
                                        >
                                            <span className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${cmd.kind === 'ai' ? 'bg-teal-50 text-teal-600' : 'bg-gray-100 text-gray-500'
                                                }`}>
                                                <Icon name={cmd.icon} size={15} />
                                            </span>
                                            <span className="flex-1 min-w-0">
                                                <span className="text-sm font-semibold text-gray-900 block truncate">{cmd.label}</span>
                                            </span>
                                            {cmd.hint && (
                                                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${cmd.soon ? 'bg-gray-100 text-gray-400' : 'bg-teal-100 text-teal-700'
                                                    }`}>
                                                    {cmd.hint}
                                                </span>
                                            )}
                                            {isActive && <span className="text-gray-300 text-xs shrink-0">↵</span>}
                                        </button>
                                    );
                                })}
                            </div>
                        ))
                    )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between px-5 py-2.5 border-t border-gray-100 bg-gray-50 text-[11px] text-gray-500">
                    <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded">↑</kbd><kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded">↓</kbd> navigate</span>
                        <span className="flex items-center gap-1"><kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded">↵</kbd> select</span>
                    </div>
                    <span className="flex items-center gap-1.5 font-semibold text-teal-600">✦ Memora Command Center</span>
                </div>
            </div>
        </div>
    );
}
