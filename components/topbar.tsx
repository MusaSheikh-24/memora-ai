'use client';
import { useRouter } from 'next/navigation';
import { useTheme } from '@/components/context/ThemeContext';
import { useUI } from '@/components/context/UIContext';
import Icon from '@/components/icon';

export default function TopBar() {
    const router = useRouter();
    const { isDark, toggleTheme } = useTheme();
    const { openCommand, toggleCopilot } = useUI();

    return (
        <header className={`h-14 border-b flex items-center justify-between px-6 shrink-0 transition-colors ${
            isDark ? 'bg-[#0d1321] border-gray-800' : 'bg-white border-gray-100'
        }`}>
            {/* Search / Command Trigger */}
            <div className="flex-1 max-w-xl">
                <button
                    onClick={openCommand}
                    className={`group relative w-full text-left flex items-center gap-3 px-3.5 py-2 border rounded-lg text-[13px] transition-all ${
                        isDark
                            ? 'bg-[#111827] border-gray-800 text-gray-500 hover:border-gray-700'
                            : 'bg-gray-50 border-gray-100 text-gray-400 hover:border-gray-200 hover:bg-gray-50'
                    }`}
                >
                    <Icon name="search" size={14} className="text-gray-400 shrink-0" />
                    <span className="flex-1">Ask anything about your company...</span>
                    <kbd className={`px-2 py-0.5 border rounded text-[11px] font-medium ${
                        isDark ? 'bg-transparent border-gray-700 text-gray-600' : 'bg-white border-gray-200 text-gray-400'
                    }`}>⌘K</kbd>
                </button>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-1 ml-6">
                {/* Copilot Toggle */}
                <button
                    onClick={toggleCopilot}
                    title="Copilot  ⌘J"
                    className={`flex items-center gap-1.5 px-2.5 h-8 rounded-lg transition cursor-pointer text-[12px] font-semibold ${
                        isDark
                            ? 'bg-teal-600/20 text-teal-300 hover:bg-teal-600/30'
                            : 'bg-teal-50 text-teal-700 hover:bg-teal-100 border border-teal-100'
                    }`}
                >
                    <Icon name="sparkles" size={13} strokeWidth={2} /> Copilot
                </button>

                {/* Divider */}
                <div className={`w-px h-5 mx-1.5 ${ isDark ? 'bg-gray-800' : 'bg-gray-100' }`} />

                {/* Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    title="Toggle theme"
                    className={`w-8 h-8 flex items-center justify-center rounded-lg transition cursor-pointer ${
                        isDark ? 'text-gray-400 hover:bg-gray-800' : 'text-gray-500 hover:bg-gray-100'
                    }`}
                >
                    {isDark
                        ? <Icon name="moon" size={15} />
                        : <Icon name="sun" size={15} />}
                </button>

                {/* Notifications */}
                <button
                    onClick={() => router.push('/alerts')}
                    title="Alerts"
                    className={`relative w-8 h-8 flex items-center justify-center rounded-lg transition cursor-pointer ${
                        isDark ? 'text-gray-400 hover:bg-gray-800' : 'text-gray-500 hover:bg-gray-100'
                    }`}
                >
                    <Icon name="bell" size={15} />
                    <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-teal-500 rounded-full" />
                </button>

                {/* User Avatar */}
                <div className="w-7 h-7 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-[11px] cursor-pointer ml-1">
                    AK
                </div>
            </div>
        </header>
    );
}