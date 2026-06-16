'use client';
import { useState } from 'react';
import TopBar from '@/components/topbar';
import AlertsRightPanel from '@/components/right-panels/AlertsRightPanel';

const filterTabs = [
    { label: 'All', count: 5, value: 'all' },
    { label: 'Unread', count: 3, value: 'unread' },
    { label: 'Urgent', value: 'urgent' },
];

const alertsData = [
    {
        id: 1,
        icon: '⚠️',
        iconBg: 'bg-yellow-100',
        title: 'Contract Renewal: ABC Company',
        description: 'The Master Service Agreement expires in 18 days. Review and renew to avoid service interruption.',
        time: '2 hours ago',
        isNew: true,
        isUrgent: true,
        isUnread: true,
    },
    {
        id: 2,
        icon: '📧',
        iconBg: 'bg-red-50',
        title: 'Unanswered Email: Q2 Proposal',
        description: 'Your proposal email to TechFlow Inc. has not received a reply in 8 days. Consider following up.',
        time: 'Yesterday',
        isNew: true,
        isUrgent: false,
        isUnread: true,
    },
    {
        id: 3,
        icon: '💰',
        iconBg: 'bg-green-50',
        title: 'Invoice Overdue: INV-45773',
        description: 'Invoice INV-45773 for $6,150 from ABC Company is 14 days past due.',
        time: '2 days ago',
        isNew: true,
        isUrgent: false,
        isUnread: true,
    },
    {
        id: 4,
        icon: '✅',
        iconBg: 'bg-green-100',
        title: 'Contract Signed: Apple MSA',
        description: 'Apple Inc. has countersigned the Master Service Agreement. All parties have executed the contract.',
        time: '3 days ago',
        isNew: false,
        isUrgent: false,
        isUnread: false,
    },
    {
        id: 5,
        icon: '📅',
        iconBg: 'bg-teal-50', // Changed from purple-50
        title: 'Meeting Scheduled: Q1 Review',
        description: 'Quarterly review meeting with ABC Company scheduled for next Monday at 10:00 AM.',
        time: '4 days ago',
        isNew: false,
        isUrgent: false,
        isUnread: false,
    },
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
        <div className="flex h-screen overflow-hidden">
            {/* Main Content Area */}
            <main className="flex-1 flex flex-col overflow-hidden bg-gray-50">
                {/* Fixed TopBar */}
                <TopBar />

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-8">
                    {/* Header */}
                    <div className="mb-6">
                        <h1 className="text-3xl font-extrabold text-gray-900 mb-2 flex items-center gap-2">
                            <span className="text-2xl">🔔</span> Alerts
                        </h1>
                        <p className="text-sm text-gray-500">3 unread alerts need your attention</p>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex gap-2 mb-6">
                        {filterTabs.map((tab) => (
                            <button
                                key={tab.value}
                                onClick={() => setActiveFilter(tab.value)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition cursor-pointer ${activeFilter === tab.value
                                        ? 'bg-teal-600 text-white' // Changed from purple
                                        : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                                    }`}
                            >
                                {tab.label}
                                {tab.count !== undefined && (
                                    <span className={`ml-1.5 text-xs ${activeFilter === tab.value ? 'text-teal-100' : 'text-gray-500'}`}>
                                        ({tab.count})
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Alerts List */}
                    <div className="space-y-3">
                        {filteredAlerts.map((alert) => (
                            <div
                                key={alert.id}
                                className={`bg-white border rounded-2xl p-5 shadow-sm hover:shadow-md transition cursor-pointer ${alert.isUrgent
                                        ? 'border-l-4 border-l-teal-500 border-t-gray-200 border-r-gray-200 border-b-gray-200' // Changed from purple
                                        : 'border-gray-200'
                                    }`}
                            >
                                <div className="flex items-start gap-4">
                                    {/* Icon */}
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${alert.iconBg}`}>
                                        {alert.icon}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="text-sm font-bold text-gray-900">{alert.title}</h3>
                                            {alert.isNew && (
                                                <span className="text-[10px] font-bold text-white bg-teal-600 px-2 py-0.5 rounded">
                                                    NEW
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-xs text-gray-500 mb-1">{alert.description}</p>
                                        <span className="text-[11px] text-gray-400">{alert.time}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Empty State */}
                    {filteredAlerts.length === 0 && (
                        <div className="text-center py-12">
                            <div className="text-6xl mb-4">✅</div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">All caught up!</h3>
                            <p className="text-sm text-gray-500">No alerts match your current filter</p>
                        </div>
                    )}
                </div>
            </main>

            {/* Fixed Right Panel - Alerts ka */}
            <AlertsRightPanel />
        </div>
    );
}