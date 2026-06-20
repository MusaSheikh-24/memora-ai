'use client';
import { useState } from 'react';
import TopBar from '@/components/topbar';
import AutomationsRightPanel from '@/components/right-panels/AutomationsRightPanel';
import Icon from '@/components/icon';

// Sample automation data
const automationsData = [
    {
        id: 1,
        name: 'Invoice Auto-Index',
        description: 'Automatically index and categorize incoming invoices from email attachments.',
        trigger: 'Webhook',
        triggerIcon: '⚡',
        status: 'Active',
        lastRun: '2 min ago',
        runsCount: 1247,
        successRate: '99.2%',
        createdBy: 'Ali Khan',
        category: 'Finance',
    },
    {
        id: 2,
        name: 'Weekly Report Generator',
        description: 'Generate and email a summary report of all activities every Monday at 9 AM.',
        trigger: 'Schedule',
        triggerIcon: '📅',
        status: 'Active',
        lastRun: '3 days ago',
        runsCount: 52,
        successRate: '100%',
        createdBy: 'Sarah R.',
        category: 'Reports',
    },
    {
        id: 3,
        name: 'Contract Reminder',
        description: 'Send reminder emails 7 days before any contract renewal date.',
        trigger: 'Time-based',
        triggerIcon: '⏰',
        status: 'Active',
        lastRun: '1 hour ago',
        runsCount: 89,
        successRate: '97.8%',
        createdBy: 'Mike T.',
        category: 'Legal',
    },
    {
        id: 4,
        name: 'New User Onboarding',
        description: 'Trigger welcome email and setup tasks when a new user is added to workspace.',
        trigger: 'Event',
        triggerIcon: '👥',
        status: 'Paused',
        lastRun: '2 weeks ago',
        runsCount: 34,
        successRate: '94.1%',
        createdBy: 'Ali Khan',
        category: 'HR',
    },
    {
        id: 5,
        name: 'Invoice Search Indexer',
        description: 'Rebuild search index for all invoices when new documents are uploaded.',
        trigger: 'Webhook',
        triggerIcon: '🔍',
        status: 'Active',
        lastRun: '15 min ago',
        runsCount: 892,
        successRate: '99.8%',
        createdBy: 'Sarah R.',
        category: 'Finance',
    },
    {
        id: 6,
        name: 'Monthly Archive',
        description: 'Archive completed projects and old invoices older than 90 days.',
        trigger: 'Schedule',
        triggerIcon: '📅',
        status: 'Draft',
        lastRun: 'Never',
        runsCount: 0,
        successRate: '—',
        createdBy: 'Mike T.',
        category: 'Admin',
    },
    {
        id: 7,
        name: 'Approval Workflow',
        description: 'Route invoices above $5,000 to manager for approval before processing.',
        trigger: 'Event',
        triggerIcon: '👥',
        status: 'Active',
        lastRun: '5 hours ago',
        runsCount: 156,
        successRate: '98.5%',
        createdBy: 'Ali Khan',
        category: 'Finance',
    },
    {
        id: 8,
        name: 'Slack Notification Bot',
        description: 'Post key events (invoices, contracts) to the #finance Slack channel.',
        trigger: 'Webhook',
        triggerIcon: '🔔',
        status: 'Failed',
        lastRun: '1 hour ago',
        runsCount: 423,
        successRate: '89.3%',
        createdBy: 'Sarah R.',
        category: 'Communication',
    },
];

const filterTabs = [
    { label: 'All', value: 'all', icon: '⚡' },
    { label: 'Active', value: 'Active', icon: '✅' },
    { label: 'Paused', value: 'Paused', icon: '⏸️' },
    { label: 'Draft', value: 'Draft', icon: '📝' },
    { label: 'Failed', value: 'Failed', icon: '⚠️' },
];

const categoryFilter = ['All Categories', 'Finance', 'Reports', 'Legal', 'HR', 'Admin', 'Communication'];

export default function AutomationsPage() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedCategory, setSelectedCategory] = useState('All Categories');
    const [searchQuery, setSearchQuery] = useState('');

    // Filter automations
    const filteredAutomations = automationsData.filter((auto) => {
        const matchesStatus = activeFilter === 'all' || auto.status === activeFilter;
        const matchesCategory =
            selectedCategory === 'All Categories' || auto.category === selectedCategory;
        const matchesSearch =
            searchQuery === '' ||
            auto.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            auto.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesStatus && matchesCategory && matchesSearch;
    });

    const getStatusStyles = (status: string) => {
        switch (status) {
            case 'Active':
                return 'bg-teal-100 text-teal-700';
            case 'Paused':
                return 'bg-orange-100 text-orange-700';
            case 'Draft':
                return 'bg-gray-100 text-gray-700';
            case 'Failed':
                return 'bg-red-100 text-red-700';
            default:
                return 'bg-gray-100 text-gray-700';
        }
    };

    return (
        <div className="flex h-screen overflow-hidden bg-gray-50">
            <main className="flex-1 flex flex-col overflow-hidden">
                <TopBar />

                <div className="flex-1 overflow-y-auto">
                    <div className="max-w-6xl mx-auto px-6 py-6">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-5">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-teal-600 flex items-center justify-center">
                                    <Icon name="zap" size={20} className="text-white" />
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold text-gray-900">Automations</h1>
                                    <p className="text-xs text-gray-500">Manage workflow automations</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center bg-white border border-gray-200 rounded-lg px-3 py-2 w-56">
                                    <Icon name="search" size={14} className="text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search automations..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="ml-2 text-xs bg-transparent outline-none flex-1"
                                    />
                                    {searchQuery && (
                                        <button
                                            onClick={() => setSearchQuery('')}
                                            className="text-gray-400 hover:text-gray-600 transition cursor-pointer"
                                        >
                                            <Icon name="plus" size={12} className="rotate-45" />
                                        </button>
                                    )}
                                </div>
                                <button className="px-3 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-xs font-semibold transition flex items-center gap-1.5 cursor-pointer">
                                    <Icon name="plus" size={14} />
                                    New Automation
                                </button>
                            </div>
                        </div>

                        {/* Stats Strip */}
                        <div className="grid grid-cols-3 gap-3 mb-5">
                            {[
                                { label: 'Total Automations', value: '24', sub: 'Across all categories' },
                                { label: 'Active', value: '17', sub: '72% success rate' },
                                { label: 'Failed (24h)', value: '2', sub: 'Need attention' },
                            ].map((stat, index) => (
                                <div key={index} className="bg-white rounded-lg p-3 border border-gray-200 flex items-center justify-between hover:shadow-md transition cursor-pointer group">
                                    <div>
                                        <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">{stat.label}</p>
                                        <p className="text-lg font-bold text-gray-900 mt-0.5 group-hover:text-teal-600 transition">{stat.value}</p>
                                        <p className="text-[10px] text-gray-400">{stat.sub}</p>
                                    </div>
                                    <div className="w-8 h-8 rounded-md bg-teal-50 group-hover:bg-teal-100 flex items-center justify-center transition">
                                        <Icon name="zap" size={14} className="text-teal-600" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Filter Tabs */}
                        <div className="mb-5">
                            <div className="flex gap-1">
                                {filterTabs.map((tab) => (
                                    <button
                                        key={tab.value}
                                        onClick={() => setActiveFilter(tab.value)}
                                        className={`px-3 py-1.5 rounded-md text-xs font-semibold transition capitalize cursor-pointer ${activeFilter === tab.value
                                            ? 'bg-teal-600 text-white'
                                            : 'text-gray-600 hover:bg-gray-100'
                                            }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                            <div className="mt-2 flex items-center gap-2 text-[10px] text-gray-500">
                                <Icon name="search" size={12} className="text-gray-400" />
                                Showing {filteredAutomations.length} automation{filteredAutomations.length !== 1 ? 's' : ''}
                            </div>
                        </div>

                        {/* Automations Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {filteredAutomations.map((auto) => (
                                <div
                                    key={auto.id}
                                    className="group bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-teal-200 transition-all cursor-pointer"
                                >
                                    <div className="flex items-start gap-3">
                                        {/* Icon */}
                                        <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-xl shrink-0 group-hover:bg-teal-100 transition-colors">
                                            {auto.triggerIcon}
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            {/* Header */}
                                            <div className="flex items-start justify-between gap-2 mb-1.5">
                                                <h3 className="text-xs font-bold text-gray-900 leading-tight group-hover:text-teal-600 transition">
                                                    {auto.name}
                                                </h3>
                                                <span
                                                    className={`text-[9px] px-1.5 py-0.5 rounded-md shrink-0 ${getStatusStyles(auto.status)}`}
                                                >
                                                    {auto.status}
                                                </span>
                                            </div>

                                            {/* Description */}
                                            <p className="text-xs text-gray-600 mb-2.5 leading-relaxed line-clamp-2">
                                                {auto.description}
                                            </p>

                                            {/* Meta Info */}
                                            <div className="flex items-center gap-3 text-[10px] text-gray-500 flex-wrap mb-2.5">
                                                <div className="flex items-center gap-1">
                                                    <Icon name="zap" size={10} className="text-gray-400" />
                                                    <span>{auto.trigger}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Icon name="clock" size={10} className="text-gray-400" />
                                                    <span>{auto.lastRun}</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <div className="w-4 h-4 rounded-full bg-teal-100 flex items-center justify-center text-[8px] font-bold text-teal-700">
                                                        {auto.createdBy.charAt(0)}
                                                    </div>
                                                    <span>{auto.createdBy}</span>
                                                </div>
                                            </div>

                                            {/* Stats Row */}
                                            <div className="pt-2.5 border-t border-gray-100 flex items-center gap-3">
                                                <div className="flex items-center gap-1">
                                                    <span className="text-[10px] text-gray-500">Runs:</span>
                                                    <span className="text-[10px] font-bold text-gray-900">
                                                        {auto.runsCount}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <span className="text-[10px] text-gray-500">Success:</span>
                                                    <span
                                                        className={`text-[10px] font-bold ${auto.successRate === '—'
                                                            ? 'text-gray-400'
                                                            : parseFloat(auto.successRate) >= 95
                                                                ? 'text-teal-600'
                                                                : parseFloat(auto.successRate) >= 90
                                                                    ? 'text-orange-600'
                                                                    : 'text-red-600'
                                                            }`}
                                                    >
                                                        {auto.successRate}
                                                    </span>
                                                </div>
                                                <div className="ml-auto">
                                                    <span className="text-[9px] font-medium text-teal-600 bg-teal-50 px-1.5 py-0.5 rounded">
                                                        {auto.category}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Empty State */}
                        {filteredAutomations.length === 0 && (
                            <div className="text-center py-16">
                                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3">
                                    <Icon name="zap" size={20} className="text-gray-400" />
                                </div>
                                <p className="text-xs font-semibold text-gray-900 mb-1">No automations found</p>
                                <p className="text-[10px] text-gray-500">Try adjusting your filters</p>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            {/* Right Panel */}
            <AutomationsRightPanel />
        </div>
    );
}