'use client';
import { useState } from 'react';
import Link from 'next/link';
import UpgradeModal from '../UpgradeModel';
import Icon from '@/components/icon';

export default function HomeRightPanel() {
    const [showUpgradeModal, setShowUpgradeModal] = useState(false);

    return (
        <>
            <aside className="w-80 bg-white border-l border-gray-100 h-screen flex flex-col shrink-0 overflow-hidden">
                {/* Header */}
                <div className="px-4 py-3 border-b border-gray-100 shrink-0">
                    <div className="flex items-center gap-1.5 text-teal-700 font-semibold text-[13px]">
                        <Icon name="sparkles" size={13} strokeWidth={2} /> Here's what I found
                    </div>
                </div>

                {/* Content - Scrollable */}
                <div className="flex-1 px-3 py-2 overflow-y-auto flex flex-col">

                    {/* Recent Activity */}
                    <div className="mb-3 shrink-0">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">Recent Activity</h3>
                            <button className="text-[10px] text-teal-600 font-medium hover:text-teal-700 cursor-pointer">View all</button>
                        </div>
                        <div className="space-y-1">
                            {[
                                { icon: 'file', color: 'text-red-400', title: 'INV-45871.pdf', sub: 'Jan 12, 2024', badge: '$4,850', badgeColor: 'text-teal-600' },
                                { icon: 'mail', color: 'text-blue-400', title: 'Re: Invoice Updates', sub: 'Jan 10, 2024', badge: 'Email', badgeColor: 'text-teal-700 bg-teal-50' },
                                { icon: 'mic', color: 'text-orange-400', title: 'ABC Monthly Review', sub: 'Jan 08, 2024', badge: 'Meeting', badgeColor: 'text-teal-700 bg-teal-50' },
                            ].map((a) => (
                                <div key={a.title} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg cursor-pointer hover:bg-teal-50/50 transition">
                                    <div className="flex items-center gap-2">
                                        <span className={`${a.color} shrink-0`}><Icon name={a.icon as import('@/components/icon').IconName} size={13} /></span>
                                        <div>
                                            <div className="text-[11px] font-semibold text-gray-900">{a.title}</div>
                                            <div className="text-[9px] text-gray-400">{a.sub}</div>
                                        </div>
                                    </div>
                                    <div className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${a.badgeColor}`}>{a.badge}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sources */}
                    <div className="mb-3 shrink-0">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">Sources</h3>
                        </div>
                        <div className="space-y-0.5">
                            {[
                                { icon: 'file', label: 'Documents', count: '24' },
                                { icon: 'mail', label: 'Emails', count: '12' },
                                { icon: 'calendar', label: 'Meetings', count: '3' },
                                { icon: 'note', label: 'Notes', count: '7' },
                            ].map((s) => (
                                <div key={s.label} className="flex items-center justify-between py-1.5 px-1 border-b border-gray-50 last:border-0 cursor-pointer group">
                                    <span className="text-[12px] text-gray-600 flex items-center gap-2">
                                        <span className="text-gray-300 group-hover:text-teal-500 transition">
                                            <Icon name={s.icon as import('@/components/icon').IconName} size={12} />
                                        </span>
                                        {s.label}
                                    </span>
                                    <span className="bg-gray-100 text-gray-500 text-[10px] font-semibold px-1.5 py-0.5 rounded">{s.count}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Alerts */}
                    <div className="mb-3 shrink-0">
                        <h3 className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest mb-2">Alerts</h3>
                        <div className="p-2.5 bg-amber-50 border border-amber-100 rounded-lg cursor-pointer hover:bg-amber-100/70 transition">
                            <div className="flex items-start gap-2">
                                <span className="text-amber-500 mt-0.5 shrink-0"><Icon name="alert" size={13} /></span>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between gap-1 mb-0.5">
                                        <div className="text-[11px] font-semibold text-gray-900">Contract expiring soon</div>
                                        <span className="text-[9px] font-semibold text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded shrink-0">Urgent</span>
                                    </div>
                                    <div className="text-[10px] text-gray-500">ABC Company · 18 days left</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Company Smart Graph */}
                    <div className="mb-3 shrink-0">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">Company Graph</h3>
                            <Link href="/graph" className="text-[10px] text-teal-600 font-medium hover:text-teal-700 cursor-pointer flex items-center gap-0.5">
                                Open <Icon name="arrow-up-right" size={10} />
                            </Link>
                        </div>
                        <Link
                            href="/graph"
                            className="block rounded-lg border border-gray-100 bg-linear-to-br from-teal-50/40 to-white p-2 hover:border-teal-200 transition group"
                        >
                            <svg viewBox="0 0 260 140" className="w-full h-27.5">
                                <g stroke="#e2e8f0" strokeWidth="1.5">
                                    <line x1="130" y1="70" x2="44" y2="28" />
                                    <line x1="130" y1="70" x2="216" y2="28" />
                                    <line x1="130" y1="70" x2="40" y2="112" />
                                    <line x1="130" y1="70" x2="220" y2="112" />
                                    <line x1="130" y1="70" x2="130" y2="125" />
                                </g>
                                <circle cx="130" cy="70" r="17" fill="none" stroke="#14b8a6" strokeWidth="1.5" opacity="0.4">
                                    <animate attributeName="r" values="17;28;17" dur="3s" repeatCount="indefinite" />
                                    <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite" />
                                </circle>
                                {[
                                    { cx: 44, cy: 28, label: 'Docs' },
                                    { cx: 216, cy: 28, label: 'Invoices' },
                                    { cx: 40, cy: 112, label: 'Meets' },
                                    { cx: 220, cy: 112, label: 'People' },
                                    { cx: 130, cy: 125, label: 'Email' },
                                ].map((n) => (
                                    <g key={n.label}>
                                        <circle cx={n.cx} cy={n.cy} r="12" fill="#fff" stroke="#ccfbf1" strokeWidth="1.5" />
                                        <text x={n.cx} y={n.cy + 3} textAnchor="middle" fontSize="7" fill="#6b7280" fontWeight="600">{n.label}</text>
                                    </g>
                                ))}
                                <circle cx="130" cy="70" r="16" fill="#0d9488" />
                                <text x="130" y="74" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#fff">ABC</text>
                            </svg>
                            <div className="flex items-center justify-between mt-1 px-0.5">
                                <span className="text-[11px] font-semibold text-gray-800">ABC Company</span>
                                <span className="text-[10px] text-gray-400 group-hover:text-teal-600 transition">12 nodes · explore →</span>
                            </div>
                        </Link>
                    </div>

                    {/* Upgrade Card */}
                    <div className="mt-auto pt-2 shrink-0">
                        <div className="p-3 bg-linear-to-br from-teal-50 to-emerald-50 border border-teal-100 rounded-xl">
                            <div className="flex items-center gap-2 mb-1.5">
                                <div className="w-6 h-6 bg-teal-600 rounded-lg flex items-center justify-center text-white">
                                    <Icon name="sparkles" size={12} strokeWidth={2} />
                                </div>
                                <div className="text-[12px] font-bold text-gray-900">SyncOps Pro</div>
                            </div>
                            <div className="text-[11px] text-gray-500 mb-2 leading-relaxed">Unlock AI insights, automations and more.</div>
                            <button
                                onClick={() => setShowUpgradeModal(true)}
                                className="w-full bg-teal-600 text-white font-semibold text-[11px] py-1.5 rounded-lg hover:bg-teal-700 transition cursor-pointer"
                            >
                                Upgrade Now
                            </button>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Upgrade Modal */}
            <UpgradeModal
                isOpen={showUpgradeModal}
                onClose={() => setShowUpgradeModal(false)}
            />
        </>
    );
}