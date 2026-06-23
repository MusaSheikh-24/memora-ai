'use client';
import { useState } from 'react';
import TopBar from '@/components/topbar';
import TimelineRightPanel from '@/components/right-panels/TimelineRightPanel';
import Icon from '@/components/icon';

// Sample timeline data
const timelineData = [
    {
        id: 1,
        date: 'TODAY, JAN 12, 2024',
        events: [
            {
                id: 1,
                type: 'Invoice',
                icon: '📄',
                title: 'Invoice INV-45871 uploaded',
                description: '$4,850 invoice from ABC Company automatically indexed and linked.',
                badge: 'Invoice',
                badgeColor: 'bg-teal-100 text-teal-700',
                time: '2:30 PM',
                user: 'Ali Khan',
            },
            {
                id: 2,
                type: 'Search',
                icon: '🔍',
                title: 'Search: "Show all invoices from ABC"',
                description: 'Ali searched and found 24 matching invoices in 0.3 seconds.',
                badge: 'Search',
                badgeColor: 'bg-blue-100 text-blue-700',
                time: '11:15 AM',
                user: 'Ali Khan',
            },
        ],
    },
    {
        id: 2,
        date: 'YESTERDAY, JAN 11, 2024',
        events: [
            {
                id: 3,
                type: 'Meeting',
                icon: '📅',
                title: 'ABC Monthly Review Meeting',
                description: '45 min meeting with 5 attendees. Key topics: Q2 roadmap, hiring plan.',
                badge: 'Meeting',
                badgeColor: 'bg-orange-100 text-orange-700',
                time: '3:00 PM',
                user: 'Sarah R.',
            },
            {
                id: 4,
                type: 'Email',
                icon: '📧',
                title: 'Email: Re: Invoice Updates',
                description: 'Thread with 8 messages regarding outstanding invoices from December.',
                badge: 'Email',
                badgeColor: 'bg-cyan-100 text-cyan-700',
                time: '9:45 AM',
                user: 'Mike T.',
            },
        ],
    },
    {
        id: 3,
        date: '3 DAYS AGO, JAN 09, 2024',
        events: [
            {
                id: 5,
                type: 'Contract',
                icon: '📄',
                title: 'Contract: Apple MSA signed',
                description: 'Master Service Agreement with Apple Inc. signed. Value: $240,000/year.',
                badge: 'Contract',
                badgeColor: 'bg-pink-100 text-pink-700',
                time: '4:20 PM',
                user: 'Ali Khan',
            },
            {
                id: 6,
                type: 'Document',
                icon: '📋',
                title: 'Employee Onboarding SOP created',
                description: 'New SOP document for employee onboarding process added to workspace.',
                badge: 'Document',
                badgeColor: 'bg-indigo-100 text-indigo-700',
                time: '10:30 AM',
                user: 'Sarah R.',
            },
        ],
    },
    {
        id: 4,
        date: 'JAN 05, 2024',
        events: [
            {
                id: 7,
                type: 'Invoice',
                icon: '📄',
                title: 'Invoice INV-45821 uploaded',
                description: '$3,200 invoice from ABC Company.',
                badge: 'Invoice',
                badgeColor: 'bg-teal-100 text-teal-700',
                time: '1:15 PM',
                user: 'Mike T.',
            },
        ],
    },
];

const filterTabs = [
    { label: 'All Events', value: 'all', icon: '📅' },
    { label: 'Contracts', value: 'Contract', icon: '📄' },
    { label: 'Invoices', value: 'Invoice', icon: '💰' },
    { label: 'Meetings', value: 'Meeting', icon: '👥' },
    { label: 'Emails', value: 'Email', icon: '✉' },
];

export default function TimelinePage() {
    const [activeFilter, setActiveFilter] = useState('all');

    // Filter events based on active filter
    const filteredTimeline = timelineData
        .map((section) => ({
            ...section,
            events: section.events.filter(
                (event) => activeFilter === 'all' || event.type === activeFilter
            ),
        }))
        .filter((section) => section.events.length > 0);

    const totalEvents = filteredTimeline.reduce((acc, section) => acc + section.events.length, 0);

    return (
        <div className="flex h-screen overflow-hidden bg-gray-50">
            <main className="flex-1 flex flex-col overflow-hidden">
                <TopBar />

                <div className="flex-1 overflow-y-auto">
                    <div className="max-w-5xl mx-auto p-8">
                        {/* Header */}
                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center">
                                    <Icon name="calendar" size={24} className="text-white" />
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold text-gray-900">Timeline</h1>
                                    <p className="text-sm text-gray-500">Your company's complete activity history</p>
                                </div>
                            </div>
                        </div>

                        {/* Filter Tabs */}
                        <div className="mb-8">
                            <div className="flex items-center gap-2 flex-wrap">
                                {filterTabs.map((tab) => (
                                    <button
                                        key={tab.value}
                                        onClick={() => setActiveFilter(tab.value)}
                                        className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer border ${activeFilter === tab.value
                                            ? 'bg-teal-600 text-white border-teal-600 shadow-sm'
                                            : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                                            }`}
                                    >
                                        <span>{tab.icon}</span>
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                            <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                                <Icon name="search" size={14} className="text-gray-400" />
                                Showing {totalEvents} event{totalEvents !== 1 ? 's' : ''}
                            </div>
                        </div>

                        {/* Timeline */}
                        <div className="relative">
                            {/* Vertical Line */}
                            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-linear-to-b from-teal-200 via-teal-300 to-transparent" />

                            {/* Timeline Sections */}
                            <div className="space-y-8">
                                {filteredTimeline.map((section) => (
                                    <div key={section.id} className="relative">
                                        {/* Date Header */}
                                        <div className="flex items-center gap-4 mb-5">
                                            <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-teal-200 z-10">
                                                <Icon name="calendar" size={18} className="text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <h2 className="text-sm font-bold text-gray-900">{section.date}</h2>
                                                <div className="h-0.5 w-32 bg-teal-200 rounded-full mt-1" />
                                            </div>
                                            <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                                {section.events.length} event{section.events.length !== 1 ? 's' : ''}
                                            </span>
                                        </div>

                                        {/* Events */}
                                        <div className="ml-16 space-y-4">
                                            {section.events.map((event, index) => (
                                                <div
                                                    key={event.id}
                                                    className="group bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-teal-200 transition-all cursor-pointer"
                                                    style={{
                                                        animationDelay: `${index * 100}ms`,
                                                    }}
                                                >
                                                    <div className="flex items-start gap-4">
                                                        {/* Icon */}
                                                        <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-xl shrink-0 group-hover:bg-teal-50 transition-colors">
                                                            {event.icon}
                                                        </div>

                                                        {/* Content */}
                                                        <div className="flex-1 min-w-0">
                                                            {/* Header */}
                                                            <div className="flex items-start justify-between gap-3 mb-2">
                                                                <h3 className="text-sm font-bold text-gray-900 leading-tight">
                                                                    {event.title}
                                                                </h3>
                                                                <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md shrink-0 ${event.badgeColor}`}>
                                                                    {event.badge}
                                                                </span>
                                                            </div>

                                                            {/* Description */}
                                                            <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                                                                {event.description}
                                                            </p>

                                                            {/* Meta Info */}
                                                            <div className="flex items-center gap-4 text-xs text-gray-500">
                                                                <div className="flex items-center gap-1.5">
                                                                    <Icon name="calendar" size={12} className="text-gray-400" />
                                                                    <span>{event.time}</span>
                                                                </div>
                                                                <div className="flex items-center gap-1.5">
                                                                    <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center text-[10px] font-bold text-teal-700">
                                                                        {event.user.charAt(0)}
                                                                    </div>
                                                                    <span>{event.user}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Empty State */}
                            {filteredTimeline.length === 0 && (
                                <div className="text-center py-16 ml-16">
                                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Icon name="calendar" size={32} className="text-gray-400" />
                                    </div>
                                    <h3 className="text-sm font-semibold text-gray-900 mb-1">No events found</h3>
                                    <p className="text-sm text-gray-500">Try selecting a different filter</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            {/* Right Panel */}
            <TimelineRightPanel />
        </div>
    );
}