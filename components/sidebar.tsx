'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useUI } from '@/components/context/UIContext';
import { NAV_SECTIONS, NAV_FOOTER, NavItem } from '@/components/nav-data';
import Icon from '@/components/icon';

export default function Sidebar() {
    const pathname = usePathname();
    const { openCommand } = useUI();
    const isActive = (path: string) => pathname === path;

    const renderItem = (item: NavItem) => {
        const active = isActive(item.href);
        const baseClass = `group flex items-center justify-between px-2.5 py-2 rounded-lg text-[13px] transition-all ${active
            ? 'bg-teal-50 text-teal-700 font-semibold'
            : item.soon
                ? 'text-gray-400 cursor-default'
                : 'text-gray-500 hover:bg-gray-100 hover:text-gray-800 cursor-pointer'
            }`;

        const inner = (
            <>
                <div className="flex items-center gap-2.5 min-w-0">
                    <span className={`shrink-0 transition-colors ${active ? 'text-teal-600' : item.soon ? 'text-gray-300' : 'text-gray-400 group-hover:text-gray-600'
                        }`}>
                        <Icon name={item.icon} size={15} />
                    </span>
                    <span className="truncate">{item.label}</span>
                </div>
                {item.badge && !item.soon && (
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-bold shrink-0 ${active ? 'bg-teal-100 text-teal-700' : 'bg-gray-100 text-gray-500'
                        }`}>{item.badge}</span>
                )}
                {item.soon && (
                    <span className="text-[9px] text-gray-300 font-medium shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">soon</span>
                )}
            </>
        );

        if (item.soon) {
            return <div key={item.href} className={baseClass}>{inner}</div>;
        }
        return <Link key={item.href} href={item.href} className={baseClass}>{inner}</Link>;
    };

    return (
        <aside className="w-64 bg-white border-r border-gray-100 h-screen flex flex-col shrink-0 overflow-y-auto">
            {/* Logo */}
            <div className="flex items-center gap-2.5 px-4 pt-5 pb-3 shrink-0">
                <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center shrink-0">
                    <Icon name="sparkles" size={15} className="text-white" strokeWidth={2} />
                </div>
                <span className="text-[15px] font-bold text-gray-900 tracking-tight">SyncOps</span>
            </div>

            {/* New Chat Button */}
            <div className="px-3 mb-2 shrink-0">
                <Link
                    href="home"
                    className="w-full bg-teal-600 text-white rounded-lg py-2 text-[13px] font-semibold hover:bg-teal-700 active:bg-teal-800 transition flex items-center justify-center gap-1.5 shadow-sm"
                >
                    <Icon name="plus" size={14} strokeWidth={2.5} /> New Chat
                </Link>
            </div>

            {/* Global Command Center launcher (⌘K) */}
            <div className="px-3 mb-4 shrink-0">
                <button
                    onClick={openCommand}
                    className="w-full flex items-center justify-between px-2.5 py-1.5 border border-gray-100 rounded-lg text-[12px] text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition"
                >
                    <span className="flex items-center gap-2">
                        <Icon name="search" size={13} />
                        Search or run…
                    </span>
                    <kbd className="px-1.5 py-0.5 bg-gray-50 border border-gray-200 rounded text-[10px] font-medium text-gray-400">⌘K</kbd>
                </button>
            </div>

            {/* Primary Navigation — grouped IA */}
            <div className="flex-1 overflow-y-auto">
                {NAV_SECTIONS.map((section) => (
                    <div key={section.title} className="mb-3">
                        <div className="px-4 mb-1">
                            <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">{section.title}</span>
                        </div>
                        <nav className="flex flex-col gap-px px-2">
                            {section.items.map(renderItem)}
                        </nav>
                    </div>
                ))}

                {/* Footer nav (Settings) */}
                <div className="border-t border-gray-100 mt-2 pt-2 pb-1 px-2">
                    {NAV_FOOTER.map(renderItem)}
                </div>
            </div>

            {/* Recent Section */}
            <div className="border-t border-gray-100 px-3 pt-3 pb-2 shrink-0">
                <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-1.5 px-1.5">Recent</div>
                <div className="flex flex-col gap-px">
                    {[
                        { icon: 'search' as const, label: 'Show all invoices', time: 'Now' },
                        { icon: 'message' as const, label: 'What was discussed', time: 'Yesterday' },
                        { icon: 'file' as const, label: 'Find contract ABC', time: '2d ago' },
                        { icon: 'file' as const, label: 'Marketing proposal', time: '2d ago' },
                    ].map((r) => (
                        <div key={r.label} className="group flex items-center justify-between px-2 py-1.5 rounded-lg text-[12px] text-gray-500 hover:bg-gray-50 hover:text-gray-700 cursor-pointer transition">
                            <span className="truncate flex items-center gap-2">
                                <span className="text-gray-300 group-hover:text-gray-400 transition">
                                    <Icon name={r.icon} size={12} />
                                </span>
                                {r.label}
                            </span>
                            <span className="text-[10px] text-gray-300 ml-2 shrink-0">{r.time}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* User Profile at Bottom */}
            <div className="px-3 pb-3 shrink-0">
                <div className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg hover:bg-gray-50 cursor-pointer transition">
                    <div className="w-7 h-7 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-[11px] shrink-0">
                        AK
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="text-[13px] font-semibold text-gray-800 truncate leading-tight">Ali Khan</div>
                        <div className="text-[11px] text-gray-400 truncate">ali@syncops.com</div>
                    </div>
                    <Icon name="more" size={14} className="text-gray-300 shrink-0" />
                </div>
            </div>
        </aside>
    );
}