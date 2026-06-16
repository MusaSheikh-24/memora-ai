'use client';
import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';

interface UIContextType {
    // Global Command Center (⌘K)
    commandOpen: boolean;
    openCommand: () => void;
    closeCommand: () => void;
    toggleCommand: () => void;

    // Persistent AI Copilot (⌘J)
    copilotOpen: boolean;
    openCopilot: () => void;
    closeCopilot: () => void;
    toggleCopilot: () => void;

    // Seed text passed into Copilot when launched from a contextual action
    copilotSeed: string | null;
    askCopilot: (prompt: string) => void;
}

const UIContext = createContext<UIContextType | undefined>(undefined);

export function UIProvider({ children }: { children: ReactNode }) {
    const [commandOpen, setCommandOpen] = useState(false);
    const [copilotOpen, setCopilotOpen] = useState(false);
    const [copilotSeed, setCopilotSeed] = useState<string | null>(null);

    const openCommand = useCallback(() => setCommandOpen(true), []);
    const closeCommand = useCallback(() => setCommandOpen(false), []);
    const toggleCommand = useCallback(() => setCommandOpen((v) => !v), []);

    const openCopilot = useCallback(() => setCopilotOpen(true), []);
    const closeCopilot = useCallback(() => setCopilotOpen(false), []);
    const toggleCopilot = useCallback(() => setCopilotOpen((v) => !v), []);

    const askCopilot = useCallback((prompt: string) => {
        setCopilotSeed(prompt);
        setCopilotOpen(true);
        setCommandOpen(false);
    }, []);

    // Global keyboard shortcuts: ⌘K / Ctrl+K (command), ⌘J / Ctrl+J (copilot)
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const meta = e.metaKey || e.ctrlKey;
            if (meta && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                setCommandOpen((v) => !v);
            }
            if (meta && e.key.toLowerCase() === 'j') {
                e.preventDefault();
                setCopilotOpen((v) => !v);
            }
            if (e.key === 'Escape') {
                setCommandOpen(false);
            }
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, []);

    return (
        <UIContext.Provider
            value={{
                commandOpen,
                openCommand,
                closeCommand,
                toggleCommand,
                copilotOpen,
                openCopilot,
                closeCopilot,
                toggleCopilot,
                copilotSeed,
                askCopilot,
            }}
        >
            {children}
        </UIContext.Provider>
    );
}

export function useUI() {
    const context = useContext(UIContext);
    if (!context) throw new Error('useUI must be used within UIProvider');
    return context;
}
