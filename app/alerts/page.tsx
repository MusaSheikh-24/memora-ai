'use client';
import { useState } from 'react';
import TopBar from '@/components/topbar';
import AlertsRightPanel from '@/components/right-panels/AlertsRightPanel';
import Icon from '@/components/icon';

const filterTabs = [
    { label: 'All', count: 5, value: 'all' },
    { label: 'Unread', count: 3, value: 'unread' },
    { label: 'Urgent', count: 1, value: 'urgent' },
];

const alertsData = [
    { id: 1, icon: '⚠️', iconBg: 'bg-amber-100', title: 'Contract Renewal: ABC Company', description: 'The Master Service Agreement expires in 18 days.', time: '2h ago', isNew: true, isUrgent: true, isUnread: true },
    { id: 2, icon: '📧', iconBg: 'bg-rose-50', title: 'Unanswered Email: Q2 Proposal', description: 'No reply in 8 days. Consider following up.', time: '1d ago', isNew: true, isUrgent: false, isUnread: true },
    { id: 3, icon: '💰', iconBg: 'bg-emerald-50', title: 'Invoice Overdue: INV-45773', description: '$6,150 from ABC Company is 14 days past due.', time: '2d ago', isNew: true, isUrgent: false, isUnread: true },
    { id: 4, icon: '✅', iconBg: 'bg-teal-100', title: 'Contract Signed: Apple MSA', description: 'Apple Inc. has countersigned the agreement.', time: '3d ago', isNew: false, isUrgent: false, isUnread: false },
    { id: 5, icon: '📅', iconBg: 'bg-blue-50', title: 'Meeting Scheduled: Q1 Review', description: 'Next Monday at 10:00 AM with ABC Company.', time: '4d ago', isNew: false, isUrgent: false, isUnread: false },
];

export default function AlertsPage() {
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredAlerts = alertsData.filter((alert) => {
        if (activeFilter === 'all') return true;
        if (activeFilter === 'unread') return alert.isUnread;
        if (activeFilter === 'urgent') return alert.isUrgent;
        return true;
    });

    return (
        <div className="flex h-screen overflow-hidden bg-gray-50">
            <main className="flex-1 flex flex-col overflow-hidden">
                <TopBar />

                <div className="flex-1 overflow-y-auto p-8">
                    <div className="mb-8">
                        <div className="flex items-center gap-2 mb-1">
                            <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center">
                                <Icon name="bell" size={20} className="text-white" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">Alerts</h1>
                                <p className="text-sm text-gray-500">3 unread alerts need attention</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-2 mb-6">
                        {filterTabs.map((tab) => (
                            <button
                                key={tab.value}
                                onClick={() => setActiveFilter(tab.value)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer border ${activeFilter === tab.value
                                    ? 'bg-teal-600 text-white border-teal-600'
                                    : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                                    }`}
                            >
                                {tab.label}
                                {tab.count !== undefined && (
                                    <span className={`ml-1.5 text-[10px] ${activeFilter === tab.value ? 'text-teal-100' : 'text-gray-500'}`}>
                                        ({tab.count})
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="space-y-2.5">
                        {filteredAlerts.map((alert) => (
                            <div
                                key={alert.id}
                                className={`bg-white border rounded-xl p-3.5 shadow-sm hover:shadow-md transition cursor-pointer ${alert.isUrgent
                                    ? 'border-l-4 border-l-amber-500 border-t-gray-200 border-r-gray-200 border-b-gray-200'
                                    : 'border-gray-200'
                                    } ${alert.isUnread ? 'bg-linear-to-r from-teal-50/50 to-white' : ''}`}
                            >
                                <div className="flex items-start gap-3">
                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-lg shrink-0 ${alert.iconBg}`}>
                                        {alert.icon}
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-0.5">
                                            <h3 className="text-sm font-semibold text-gray-900 truncate">{alert.title}</h3>
                                            {alert.isNew && (
                                                <span className="text-[9px] font-bold text-white bg-teal-600 px-1.5 py-0.5 rounded shrink-0">
                                                    NEW
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-xs text-gray-600 mb-1 line-clamp-1">{alert.description}</p>
                                        <span className="text-[10px] text-gray-400">{alert.time}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredAlerts.length === 0 && (
                        <div className="text-center py-12">
                            <div className="text-3xl mb-2">✅</div>
                            <h3 className="text-sm font-semibold text-gray-900 mb-1">All caught up!</h3>
                            <p className="text-xs text-gray-500">No alerts match your filter</p>
                        </div>
                    )}
                </div>
            </main>

            <AlertsRightPanel />
        </div>
    );
}