'use client';
import { usePathname } from 'next/navigation';
import { useUI } from '@/components/context/UIContext';
import CommandPalette from '@/components/command-palette/CommandPalette';
import AICopilot from '@/components/copilot/AICopilot';
import Icon from '@/components/icon';

// Mounts the system-level overlays that live on EVERY page:
// - Global Command Center (⌘K)
// - Persistent AI Copilot (⌘J) + floating launcher
export default function GlobalOverlays() {
    const { copilotOpen, openCopilot } = useUI();
    const pathname = usePathname();
    // Suppress the floating launcher on pages that are already full chat interfaces
    const hideFloatingLauncher = pathname === '/memory-chat';

    return (
        <>
            <CommandPalette />
            <AICopilot />

            {/* Floating Copilot launcher — hidden on chat pages and while panel is open */}
            {!copilotOpen && !hideFloatingLauncher && (
                <button
                    onClick={openCopilot}
                    aria-label="Open Copilot"
                    className="fixed bottom-6 right-6 z-30 flex items-center gap-1.5 bg-teal-600 text-white pl-3 pr-4 py-2.5 rounded-full shadow-lg shadow-teal-600/25 hover:bg-teal-700 active:bg-teal-800 transition group"
                >
                    <Icon name="sparkles" size={14} strokeWidth={2} />
                    <span className="text-[13px] font-semibold">Copilot</span>
                    <kbd className="ml-0.5 px-1.5 py-0.5 bg-white/20 rounded text-[10px] font-medium opacity-0 group-hover:opacity-100 transition">⌘J</kbd>
                </button>
            )}
        </>
    );
}
