'use client';
import { useState, useEffect, useRef } from 'react';
import TopBar from '@/components/topbar';
import MemoryChatRightPanel from '@/components/right-panels/MemoryChatRightPanel';
import Icon from '@/components/icon';

interface Message {
    role: 'user' | 'ai';
    text: string;
}

const AI_STUB = 'Based on your company memory, here is what I found. ABC Company is your most active account with $128,540 in revenue this month. One contract expires in 18 days and two invoices are overdue totaling $4,850.';

export default function MemoryChatPage() {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);
    const bottomRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Pick up query forwarded from the Home hero input
    useEffect(() => {
        const stored = sessionStorage.getItem('memora_hero_query');
        if (stored) {
            sessionStorage.removeItem('memora_hero_query');
            sendMessage(stored);
        } else {
            inputRef.current?.focus();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Scroll to bottom whenever messages change
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const sendMessage = (text: string) => {
        const trimmed = text.trim();
        if (!trimmed) return;
        setMessages((prev) => [
            ...prev,
            { role: 'user', text: trimmed },
            { role: 'ai', text: AI_STUB },
        ]);
        setInput('');
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(input); }
    };

    const isEmpty = messages.length === 0;

    return (
        <div className="flex h-screen overflow-hidden">
            <main className="flex-1 flex flex-col overflow-hidden bg-gray-50">
                <TopBar />

                {/* Message area */}
                <div className="flex-1 overflow-y-auto px-8 py-6 flex flex-col">
                    {isEmpty ? (
                        /* Empty state */
                        <div className="flex-1 flex flex-col items-center justify-center text-center">
                            <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-500 mb-4">
                                <Icon name="sparkles" size={28} strokeWidth={1.5} />
                            </div>
                            <h1 className="text-2xl font-bold text-gray-900 mb-2">Memory Chat</h1>
                            <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
                                Ask anything about your company — documents, emails, meetings, contracts and more.
                            </p>
                            <div className="mt-6 flex flex-wrap gap-2 justify-center max-w-md">
                                {['Summarize my top clients', 'Show expiring contracts', 'What happened in last week\'s meetings?', 'Draft a renewal email'].map((s) => (
                                    <button
                                        key={s}
                                        onClick={() => sendMessage(s)}
                                        className="px-3 py-1.5 bg-white border border-gray-100 rounded-lg text-[12px] text-gray-600 font-medium hover:border-teal-200 hover:text-teal-700 hover:bg-teal-50 transition"
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="max-w-2xl w-full mx-auto flex flex-col gap-4">
                            {messages.map((msg, i) => (
                                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    {msg.role === 'ai' && (
                                        <div className="w-7 h-7 bg-teal-600 rounded-lg flex items-center justify-center text-white shrink-0 mr-2 mt-0.5">
                                            <Icon name="sparkles" size={13} strokeWidth={2} />
                                        </div>
                                    )}
                                    <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-[14px] leading-relaxed ${msg.role === 'user'
                                        ? 'bg-teal-600 text-white rounded-tr-sm'
                                        : 'bg-white border border-gray-100 text-gray-700 rounded-tl-sm shadow-sm'
                                        }`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            <div ref={bottomRef} />
                        </div>
                    )}
                </div>

                {/* Input bar — always pinned at bottom */}
                <div className="shrink-0 px-8 pb-6">
                    <div className="max-w-2xl mx-auto">
                        <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm flex items-center gap-3 focus-within:border-teal-400 focus-within:ring-2 focus-within:ring-teal-100 transition">
                            <Icon name="search" size={15} className="text-gray-300 shrink-0" />
                            <input
                                ref={inputRef}
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Ask anything about your company..."
                                className="flex-1 bg-transparent border-none outline-none text-[14px] text-gray-800 placeholder-gray-400"
                            />
                            <div className="flex items-center gap-1.5 shrink-0">
                                <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 transition">
                                    <Icon name="file" size={15} />
                                </button>
                                <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 transition">
                                    <Icon name="mic" size={15} />
                                </button>
                                <button
                                    onClick={() => sendMessage(input)}
                                    disabled={!input.trim()}
                                    className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center text-white hover:bg-teal-700 transition disabled:opacity-40 disabled:cursor-not-allowed"
                                >
                                    <Icon name="send" size={13} strokeWidth={2} />
                                </button>
                            </div>
                        </div>
                        <p className="text-center text-[11px] text-gray-400 mt-2">Answers grounded in your company memory · always cited</p>
                    </div>
                </div>
            </main>

            <MemoryChatRightPanel />
        </div>
    );
}