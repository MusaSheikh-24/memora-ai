'use client';
import { useState } from 'react';
import TopBar from '@/components/topbar';
import TimelineRightPanel from '@/components/right-panels/TimelineRightPanel';

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
                badgeColor: 'bg-teal-100 text-teal-600',
            },
            {
                id: 2,
                type: 'Search',
                icon: '🔍',
                title: 'Search: "Show all invoices from ABC"',
                description: 'Ali searched and found 24 matching invoices in 0.3 seconds.',
                badge: 'Search',
                badgeColor: 'bg-blue-100 text-blue-600',
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
                badgeColor: 'bg-orange-100 text-orange-600',
            },
            {
                id: 4,
                type: 'Email',
                icon: '📧',
                title: 'Email: Re: Invoice Updates',
                description: 'Thread with 8 messages regarding outstanding invoices from December.',
                badge: 'Email',
                badgeColor: 'bg-cyan-100 text-cyan-600',
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
                badgeColor: 'bg-pink-100 text-pink-600',
            },
            {
                id: 6,
                type: 'Document',
                icon: '📋',
                title: 'Employee Onboarding SOP created',
                description: 'New SOP document for employee onboarding process added to workspace.',
                badge: 'Document',
                badgeColor: 'bg-indigo-100 text-indigo-600',
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
                badgeColor: 'bg-teal-100 text-teal-600',
            },
        ],
    },
];

const filterTabs = [
    { label: 'All Events', value: 'all' },
    { label: 'Contracts', value: 'Contract' },
    { label: 'Invoices', value: 'Invoice' },
    { label: 'Meetings', value: 'Meeting' },
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
                            <span className="text-2xl">📅</span> Timeline
                        </h1>
                        <p className="text-sm text-gray-500">Your company's full history in chronological order</p>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex gap-2 mb-8">
                        {filterTabs.map((tab) => (
                            <button
                                key={tab.value}
                                onClick={() => setActiveFilter(tab.value)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition cursor-pointer ${activeFilter === tab.value
                                        ? 'bg-teal-600 text-white'
                                        : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-teal-200"></div>

                        {/* Timeline Sections */}
                        <div className="space-y-8">
                            {filteredTimeline.map((section) => (
                                <div key={section.id} className="relative">
                                    {/* Date Header with Dot */}
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-4 h-4 bg-teal-600 rounded-full border-4 border-teal-100 z-10"></div>
                                        <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                                            {section.date}
                                        </h2>
                                    </div>

                                    {/* Events */}
                                    <div className="ml-8 space-y-4">
                                        {section.events.map((event) => (
                                            <div
                                                key={event.id}
                                                className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition cursor-pointer"
                                            >
                                                {/* Event Header */}
                                                <div className="flex items-start gap-3 mb-2">
                                                    <span className="text-xl">{event.icon}</span>
                                                    <h3 className="text-sm font-bold text-gray-900">{event.title}</h3>
                                                </div>

                                                {/* Description */}
                                                <p className="text-xs text-gray-500 mb-3 ml-9">{event.description}</p>

                                                {/* Badge */}
                                                <div className="ml-9">
                                                    <span
                                                        className={`text-[10px] font-bold px-2 py-1 rounded ${event.badgeColor}`}
                                                    >
                                                        {event.badge}
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Empty State */}
                        {filteredTimeline.length === 0 && (
                            <div className="text-center py-12 ml-8">
                                <div className="text-4xl mb-3">📅</div>
                                <p className="text-gray-500">No events found for this filter</p>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            {/* Fixed Right Panel - Timeline ka */}
            <TimelineRightPanel />
        </div>
    );
}