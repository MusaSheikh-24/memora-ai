'use client';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useUI } from '@/components/context/UIContext';
import Icon from '@/components/icon';

interface ContextActions {
    label: string; // human label for the current context
    actions: string[]; // contextual AI actions (the "AI Actions Layer")
}

// Maps each route to its contextual AI actions + page label.
// This is the per-page "AI Actions Layer" surfaced inside the Copilot.
const CONTEXT_MAP: Record<string, ContextActions> = {
    '/': { label: 'Home Dashboard', actions: ['Summarize my day', 'Draft executive brief', 'Surface top risks'] },
    '/memory-chat': { label: 'Memory Chat', actions: ['Summarize this thread', 'Show sources used', 'Suggest follow-ups'] },
    '/documents': { label: 'Documents', actions: ['Summarize', 'Find risks', 'Draft renewal'] },
    '/timeline': { label: 'Timeline', actions: ['Summarize this period', 'Create timeline entry', 'Spot gaps'] },
    '/graph': { label: 'Memory Graph', actions: ['Explain connections', 'Find weakest links', 'Spot opportunities'] },
    '/alerts': { label: 'Alerts', actions: ['Triage alerts', 'Draft follow-ups', 'Create reminders'] },
    '/settings': { label: 'Settings', actions: ['Explain a setting', 'Review permissions'] },
};

const DEFAULT_CONTEXT: ContextActions = {
    label: 'this page',
    actions: ['Summarize this page', 'Suggest next steps', 'Run an action'],
};

const SOURCES = [
    { icon: 'file', label: 'ABC Contract 2024.docx', meta: 'Document · pg 3' },
    { icon: 'mail', label: 'Re: Invoice Updates', meta: 'Email · Jan 10' },
    { icon: 'calendar', label: 'ABC Monthly Review', meta: 'Meeting · Jan 08' },
] as const;

export default function AICopilot() {
    const { copilotOpen, closeCopilot, copilotSeed } = useUI();
    const pathname = usePathname();
    const ctx = CONTEXT_MAP[pathname] ?? DEFAULT_CONTEXT;
    const [input, setInput] = useState('');
    const [hasAnswer, setHasAnswer] = useState(false);
    const inputRef = useRef<HTMLTextAreaElement>(null);

    // When launched from a command/contextual action, seed the input.
    useEffect(() => {
        if (copilotOpen && copilotSeed) {
            setInput(copilotSeed);
            const t = setTimeout(() => inputRef.current?.focus(), 50);
            return () => clearTimeout(t);
        }
    }, [copilotOpen, copilotSeed]);

    if (!copilotOpen) return null;

    const send = () => {
        if (!input.trim()) return;
        setHasAnswer(true);
    };

    return (
        <>
            {/* Mobile backdrop only */}
            <div className="fixed inset-0 z-40 bg-black/40 md:hidden" onClick={closeCopilot} />

            <aside className="fixed right-0 top-0 z-50 h-screen w-full max-w-96 md:w-96 bg-white border-l border-gray-200 shadow-2xl flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 shrink-0">
                    <div className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-teal-600 rounded-lg flex items-center justify-center text-white">
                            <Icon name="sparkles" size={13} strokeWidth={2} />
                        </div>
                        <div>
                            <div className="text-[13px] font-bold text-gray-900 leading-tight">Copilot</div>
                            <div className="text-[10px] text-gray-400">{ctx.label}</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        <kbd className="px-1.5 py-0.5 border border-gray-100 rounded text-[10px] font-medium text-gray-400">⌘J</kbd>
                        <button onClick={closeCopilot} className="w-7 h-7 flex items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 transition">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
                        </button>
                    </div>
                </div>

                {/* Contextual AI actions (AI Actions Layer) */}
                <div className="px-4 py-3 border-b border-gray-100 shrink-0">
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Actions for {ctx.label}</div>
                    <div className="flex flex-wrap gap-1.5">
                        {ctx.actions.map((a) => (
                            <button
                                key={a}
                                onClick={() => { setInput(a); setHasAnswer(true); }}
                                className="px-2.5 py-1 bg-teal-50 text-teal-700 border border-teal-100 rounded-lg text-[11px] font-semibold hover:bg-teal-100 transition"
                            >
                                {a}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Conversation / body */}
                <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
                    {!hasAnswer ? (
                        // AI idle / empty state
                        <div className="h-full flex flex-col items-center justify-center text-center px-4">
                            <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-500 mb-3">
                                <Icon name="sparkles" size={22} strokeWidth={1.5} />
                            </div>
                            <div className="text-[13px] font-bold text-gray-900 mb-1">Ask about {ctx.label}</div>
                            <p className="text-xs text-gray-500 max-w-[15rem]">
                                I can summarize this page, run actions, pull sources, and suggest next steps — grounded in your company memory.
                            </p>
                        </div>
                    ) : (
                        <>
                            {/* User message */}
                            <div className="flex justify-end">
                                <div className="bg-teal-600 text-white text-sm rounded-2xl rounded-tr-sm px-3.5 py-2 max-w-[80%]">
                                    {input || 'Summarize this page'}
                                </div>
                            </div>

                            {/* AI answer */}
                            <div className="space-y-3">
                                <div className="bg-gray-50 border border-gray-100 rounded-2xl rounded-tl-sm px-3.5 py-3 text-sm text-gray-700 leading-relaxed">
                                    Based on your company memory, ABC Company is your most active account this month with
                                    <span className="font-semibold text-gray-900"> $128,540</span> in revenue. One contract expires in
                                    <span className="font-semibold text-gray-900"> 18 days</span> and two invoices are overdue.
                                </div>

                                {/* Source Attribution Layer */}
                                <div>
                                    <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5 flex items-center gap-1">
                                        <Icon name="folder" size={11} /> Sources
                                        <span className="bg-gray-100 text-gray-500 px-1.5 rounded text-[9px] ml-1">{SOURCES.length}</span>
                                    </div>
                                    <div className="space-y-1">
                                        {SOURCES.map((s) => (
                                            <div key={s.label} className="flex items-center gap-2 p-2 bg-white border border-gray-100 rounded-lg hover:border-teal-200 transition cursor-pointer group">
                                                <span className="text-gray-400 shrink-0"><Icon name={s.icon} size={13} /></span>
                                                <div className="min-w-0 flex-1">
                                                    <div className="text-[11px] font-semibold text-gray-900 truncate">{s.label}</div>
                                                    <div className="text-[9px] text-gray-400">{s.meta}</div>
                                                </div>
                                                <span className="text-gray-200 group-hover:text-teal-400 transition"><Icon name="arrow-up-right" size={11} /></span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Suggested next steps */}
                                <div>
                                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Suggested next steps</div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {['Draft renewal email', 'Create reminder', 'Notify account owner'].map((s) => (
                                            <button key={s} className="px-2.5 py-1 border border-gray-200 rounded-lg text-[11px] font-semibold text-gray-600 hover:bg-gray-50 transition">
                                                {s}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>

                {/* Composer */}
                <div className="px-3 py-3 border-t border-gray-100 shrink-0">
                    <div className="flex items-end gap-2 bg-gray-50 border border-gray-200 rounded-xl p-2 focus-within:border-teal-500">
                        <textarea
                            ref={inputRef}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    e.preventDefault();
                                    send();
                                }
                            }}
                            rows={1}
                            placeholder={`Ask about ${ctx.label}…`}
                            className="flex-1 bg-transparent border-none outline-none resize-none text-sm text-gray-700 placeholder-gray-400 max-h-24"
                        />
                        <button
                            onClick={send}
                            className="bg-teal-600 text-white w-8 h-8 rounded-lg flex items-center justify-center hover:bg-teal-700 transition shrink-0"
                        >
                            <Icon name="send" size={13} strokeWidth={2} />
                        </button>
                    </div>
                    <div className="text-[10px] text-gray-400 mt-1.5 text-center">Answers are grounded in your company memory · always cited</div>
                </div>
            </aside>
        </>
    );
}
