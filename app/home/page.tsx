'use client';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import TopBar from '@/components/topbar';
import HomeRightPanel from '@/components/right-panels/HomeRightPanel';
import Icon from '@/components/icon';

export default function Home() {
    const router = useRouter();
    const [query, setQuery] = useState('');
    const [attachedFiles, setAttachedFiles] = useState<string[]>([]);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files ?? []).map((f) => f.name);
        setAttachedFiles((prev) => [...new Set([...prev, ...files])]);
        e.target.value = '';
    };

    const removeFile = (name: string) =>
        setAttachedFiles((prev) => prev.filter((f) => f !== name));

    const handleSend = () => {
        if (!query.trim() && attachedFiles.length === 0) return;
        // Store the query so memory-chat can pick it up
        const prompt = attachedFiles.length > 0
            ? `${query || 'Analyze these documents'} [Files: ${attachedFiles.join(', ')}]`
            : query;
        sessionStorage.setItem('memora_hero_query', prompt);
        setQuery('');
        setAttachedFiles([]);
        // Navigate to chat — keeps the user in the right context
        router.push('/memory-chat');
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        const files = Array.from(e.dataTransfer.files).map((f) => f.name);
        setAttachedFiles((prev) => [...new Set([...prev, ...files])]);
    };
    return (
        <div className="flex h-screen">
            {/* Left: Main Content Area */}
            <main className="flex-1 flex flex-col overflow-hidden bg-gray-50">

                {/* ✅ TopBar Wapis Add Kar Diya */}
                <TopBar />

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-8">
                    {/* Greeting */}
                    <div className="mb-5">
                        <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-1">
                            Good evening, Ali
                        </h1>
                        <p className="text-gray-500">What would you like to know today?</p>
                    </div>

                    {/* Hero — Ask + Upload */}
                    <div
                        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                        onDragLeave={() => setIsDragging(false)}
                        onDrop={handleDrop}
                        className={`w-full bg-white rounded-xl shadow-sm mb-5 transition-all ${isDragging
                            ? 'border-2 border-dashed border-teal-400 shadow-md'
                            : 'border border-gray-100'
                            }`}
                    >
                        {/* Attached files */}
                        {attachedFiles.length > 0 && (
                            <div className="px-4 pt-3 flex flex-wrap gap-1.5">
                                {attachedFiles.map((f) => (
                                    <span key={f} className="flex items-center gap-1.5 px-2.5 py-1 bg-teal-50 border border-teal-100 rounded-lg text-[11px] text-teal-700 font-medium max-w-45">
                                        <Icon name="file" size={11} className="shrink-0" />
                                        <span className="truncate">{f}</span>
                                        <button
                                            onClick={() => removeFile(f)}
                                            className="ml-0.5 text-teal-400 hover:text-teal-700 shrink-0 transition leading-none"
                                        >
                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
                                        </button>
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Drop hint */}
                        {isDragging && (
                            <div className="px-4 pt-3 flex items-center gap-2 text-teal-600 text-[13px] font-medium">
                                <Icon name="folder" size={14} /> Drop files to attach them to your query
                            </div>
                        )}

                        {/* Textarea */}
                        <div className="px-4 pt-4 pb-1">
                            <textarea
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Ask anything about your company, or attach documents below..."
                                rows={2}
                                className="w-full resize-none outline-none text-[15px] text-gray-800 placeholder-gray-400 bg-transparent leading-relaxed"
                            />
                        </div>

                        {/* Action bar */}
                        <div className="flex items-center justify-between px-4 pb-3 pt-1">
                            <div className="flex items-center gap-1.5">
                                {/* Hidden file input */}
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    multiple
                                    className="hidden"
                                    onChange={handleFileSelect}
                                />
                                {/* Attach document */}
                                <button
                                    onClick={() => fileInputRef.current?.click()}
                                    title="Attach documents"
                                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-100 text-[12px] font-medium text-gray-500 hover:bg-teal-50 hover:border-teal-100 hover:text-teal-700 transition"
                                >
                                    <Icon name="file" size={12} className="text-gray-400" /> Document
                                </button>
                                {/* Voice */}
                                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-100 text-[12px] font-medium text-gray-500 hover:bg-gray-50 transition">
                                    <Icon name="mic" size={12} className="text-gray-400" /> Voice
                                </button>
                                {/* AI mode pill */}
                                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-teal-50 border border-teal-100 text-[12px] font-medium text-teal-700">
                                    <Icon name="sparkles" size={12} className="text-teal-500" /> AI Mode
                                </span>
                            </div>

                            <div className="flex items-center gap-2 shrink-0">
                                <span className="hidden sm:inline text-[11px] text-gray-300 font-medium">Enter to send</span>
                                <button
                                    onClick={handleSend}
                                    disabled={!query.trim() && attachedFiles.length === 0}
                                    className="w-9 h-9 bg-teal-600 rounded-xl flex items-center justify-center text-white shadow-sm shadow-teal-200/60 hover:bg-teal-700 active:bg-teal-800 transition disabled:opacity-40 disabled:cursor-not-allowed"
                                >
                                    <Icon name="send" size={14} strokeWidth={2} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Category Cards */}
                    <div className="grid grid-cols-5 gap-3 mb-6">
                        {([
                            { icon: 'file', label: 'Invoices', sub: 'Search & track' },
                            { icon: 'folder', label: 'Contracts', sub: 'View & manage' },
                            { icon: 'calendar', label: 'Meetings', sub: 'Recaps & notes' },
                            { icon: 'users', label: 'Clients', sub: 'All client data' },
                            { icon: 'kanban', label: 'Projects', sub: 'Status overview' },
                        ] as Array<{ icon: import('@/components/icon').IconName; label: string; sub: string }>).map((c) => (
                            <div key={c.label} className="bg-white border border-gray-100 rounded-xl p-4 hover:border-teal-100 hover:shadow-sm transition cursor-pointer flex items-center gap-3 group">
                                <div className="w-9 h-9 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600 group-hover:bg-teal-100 transition shrink-0">
                                    <Icon name={c.icon} size={16} />
                                </div>
                                <div>
                                    <div className="text-[13px] font-semibold text-gray-900">{c.label}</div>
                                    <div className="text-[11px] text-gray-400">{c.sub}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* AI Insights */}
                    <div className="mb-6">
                        <div className="flex items-center justify-between mb-3">
                            <h2 className="text-[15px] font-bold text-gray-900">AI Insights</h2>
                            <button className="text-[12px] text-teal-600 font-semibold hover:text-teal-700 cursor-pointer">View all</button>
                        </div>
                        <div className="grid grid-cols-4 gap-3">
                            <div className="bg-white border border-gray-100 rounded-xl p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-8 h-8 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600">
                                        <Icon name="trending-up" size={15} />
                                    </div>
                                    <span className="text-[12px] font-medium text-gray-500">Revenue</span>
                                </div>
                                <div className="text-xl font-bold text-gray-900 mb-0.5">$128,540</div>
                                <span className="text-[11px] font-semibold text-green-700 bg-green-50 px-1.5 py-0.5 rounded">↑ 12.5%</span>
                                <div className="text-[11px] text-gray-400 mt-1">vs last month</div>
                            </div>
                            <div className="bg-white border border-gray-100 rounded-xl p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center text-amber-500">
                                        <Icon name="alert" size={15} />
                                    </div>
                                    <span className="text-[12px] font-medium text-gray-500">Expiring</span>
                                </div>
                                <div className="text-xl font-bold text-gray-900 mb-0.5">3 contracts</div>
                                <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded">Urgent</span>
                                <div className="text-[11px] text-gray-400 mt-1">within 30 days</div>
                            </div>
                            <div className="bg-white border border-gray-100 rounded-xl p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-500">
                                        <Icon name="file" size={15} />
                                    </div>
                                    <span className="text-[12px] font-medium text-gray-500">Overdue</span>
                                </div>
                                <div className="text-xl font-bold text-gray-900 mb-0.5">2 invoices</div>
                                <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded">$4,850</span>
                                <div className="text-[11px] text-gray-400 mt-1">total outstanding</div>
                            </div>
                            <div className="bg-white border border-gray-100 rounded-xl p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center text-purple-500">
                                        <Icon name="users" size={15} />
                                    </div>
                                    <span className="text-[12px] font-medium text-gray-500">Top Client</span>
                                </div>
                                <div className="text-[15px] font-bold text-gray-900 mb-0.5">ABC Company</div>
                                <div className="text-[11px] text-gray-400 mt-1">Most active this month</div>
                            </div>
                        </div>
                    </div>

                    {/* Recent Documents Table */}
                    <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
                        <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-100">
                            <h2 className="text-[15px] font-bold text-gray-900">Recent Documents</h2>
                            <button className="text-[12px] text-teal-600 font-semibold hover:text-teal-700 cursor-pointer">View all</button>
                        </div>
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-50">
                                    <th className="text-left text-[10px] font-semibold text-gray-400 uppercase tracking-widest px-5 py-2.5">Name</th>
                                    <th className="text-left text-[10px] font-semibold text-gray-400 uppercase tracking-widest px-5 py-2.5">Type</th>
                                    <th className="text-left text-[10px] font-semibold text-gray-400 uppercase tracking-widest px-5 py-2.5">Source</th>
                                    <th className="text-left text-[10px] font-semibold text-gray-400 uppercase tracking-widest px-5 py-2.5">Updated</th>
                                    <th className="px-5 py-2.5" />
                                </tr>
                            </thead>
                            <tbody>
                                {([
                                    { name: 'INV-45871.pdf', type: 'Invoice', color: 'text-red-500', updated: 'Jan 12, 2024' },
                                    { name: 'ABC Contract 2024.docx', type: 'Contract', color: 'text-blue-500', updated: 'Jan 10, 2024' },
                                    { name: 'Q1 Financial Report.xlsx', type: 'Report', color: 'text-green-500', updated: 'Jan 08, 2024' },
                                ]).map((row, i, arr) => (
                                    <tr key={row.name} className={`hover:bg-gray-50 transition cursor-pointer group ${i < arr.length - 1 ? 'border-b border-gray-50' : ''}`}>
                                        <td className="px-5 py-3.5">
                                            <div className="flex items-center gap-2.5">
                                                <span className={`${row.color}`}><Icon name="file" size={14} /></span>
                                                <span className="text-[13px] font-medium text-gray-900">{row.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-5 py-3.5">
                                            <span className="text-[12px] text-gray-500">{row.type}</span>
                                        </td>
                                        <td className="px-5 py-3.5">
                                            <span className="text-[12px] text-gray-500">Documents</span>
                                        </td>
                                        <td className="px-5 py-3.5">
                                            <span className="text-[12px] text-gray-400">{row.updated}</span>
                                        </td>
                                        <td className="px-5 py-3.5">
                                            <div className="flex items-center gap-2 text-gray-300 opacity-0 group-hover:opacity-100 transition">
                                                <button className="hover:text-teal-600 transition"><Icon name="eye" size={13} /></button>
                                                <button className="hover:text-teal-600 transition"><Icon name="more" size={13} /></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>

            {/* Fixed Right Panel */}
            <HomeRightPanel />
        </div>
    );
}