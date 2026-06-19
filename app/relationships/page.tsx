'use client';
import { useState } from 'react';
import TopBar from '@/components/topbar';
import RelationshipIntelligenceRightPanel from '@/components/right-panels/RelationshipIntelligenceRightPanel';
import Icon from '@/components/icon';

const filterTabs = [
    { label: 'All', value: 'all', icon: 'network' },
    { label: 'Companies', value: 'company', icon: 'building' },
    { label: 'People', value: 'person', icon: 'users' },
    { label: 'Active', value: 'active', icon: 'zap' },
];

export default function RelationshipIntelligence() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeFilter, setActiveFilter] = useState('all');

    const relationshipMetrics = [
        { icon: 'users', label: 'Total Contacts', value: '6,432', change: '+12%', trend: 'up', color: 'teal' },
        { icon: 'building', label: 'Companies', value: '482', change: '+8%', trend: 'up', color: 'blue' },
        { icon: 'network', label: 'Active Relationships', value: '1,247', change: '+15%', trend: 'up', color: 'purple' },
        { icon: 'message', label: 'Engagements', value: '3,891', change: '+23%', trend: 'up', color: 'orange' },
    ];

    const topRelationships = [
        { name: 'ABC Corporation', type: 'company', strength: 96, contacts: 12, lastContact: '2h ago', status: 'Strong' },
        { name: 'TechCorp Industries', type: 'company', strength: 91, contacts: 8, lastContact: '5h ago', status: 'Strong' },
        { name: 'Global Solutions Ltd', type: 'company', strength: 84, contacts: 15, lastContact: '1d ago', status: 'Good' },
        { name: 'Innovation Partners', type: 'company', strength: 72, contacts: 6, lastContact: '5d ago', status: 'Good' },
        { name: 'Sarah Johnson', type: 'person', strength: 88, contacts: 1, lastContact: '15m ago', status: 'Strong' },
        { name: 'Mike Chen', type: 'person', strength: 79, contacts: 1, lastContact: '4h ago', status: 'Good' },
    ];

    const recentActivities = [
        { icon: 'mail', type: 'Email Sent', target: 'Sarah Johnson - ABC Corp', time: '15m ago' },
        { icon: 'calendar', type: 'Meeting', target: 'TechCorp Leadership Team', time: '2h ago' },
        { icon: 'phone', type: 'Call Completed', target: 'Mike Chen - Global Solutions', time: '4h ago' },
        { icon: 'message', type: 'Message', target: 'Innovation Partners Group', time: '6h ago' },
    ];

    const insights = [
        { title: 'Key Decision Maker Identified', desc: 'New CTO at TechCorp - Dr. Emily Watson', priority: 'high', time: '1h ago' },
        { title: 'Relationship Strengthening', desc: 'ABC Corp engagement up 34% this month', priority: 'medium', time: '3h ago' },
        { title: 'Follow-up Required', desc: '5 contacts need attention this week', priority: 'medium', time: '5h ago' },
    ];

    const filteredRelationships = topRelationships.filter((rel) => {
        const matchesFilter = activeFilter === 'all' || rel.type === activeFilter;
        const matchesSearch = searchQuery === '' || rel.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    const colorStyles: Record<string, { bg: string; text: string; hoverBg: string; gradient: string }> = {
        teal: { bg: 'bg-teal-50', text: 'text-teal-600', hoverBg: 'group-hover:bg-teal-100', gradient: 'from-teal-500 to-teal-600' },
        blue: { bg: 'bg-blue-50', text: 'text-blue-600', hoverBg: 'group-hover:bg-blue-100', gradient: 'from-blue-500 to-blue-600' },
        purple: { bg: 'bg-purple-50', text: 'text-purple-600', hoverBg: 'group-hover:bg-purple-100', gradient: 'from-purple-500 to-purple-600' },
        orange: { bg: 'bg-orange-50', text: 'text-orange-600', hoverBg: 'group-hover:bg-orange-100', gradient: 'from-orange-500 to-orange-600' },
    };

    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">
            <div className="flex-1 flex flex-col overflow-hidden">
                <TopBar />

                <div className="flex-1 overflow-y-auto">
                    <div className="max-w-7xl mx-auto px-6 py-6 space-y-5">
                        {/* Header */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-linear-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-md shadow-teal-500/30">
                                    <Icon name="network" size={18} className="text-white" />
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold text-gray-900">Relationship Intelligence</h1>
                                    <p className="text-gray-500 text-xs">AI-powered relationship & network analytics</p>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <button className="px-3 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg font-medium text-xs hover:border-teal-600 hover:text-teal-600 transition-all cursor-pointer hover:shadow-sm">
                                    Import
                                </button>
                                <button className="px-3 py-2 bg-linear-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white rounded-lg font-medium text-xs transition-all flex items-center gap-1.5 cursor-pointer shadow-md shadow-teal-500/30 hover:shadow-lg">
                                    <Icon name="plus" size={14} />
                                    Add Contact
                                </button>
                            </div>
                        </div>

                        {/* Search and Filter */}
                        <div className="bg-white border border-gray-200 rounded-xl p-1.5 shadow-sm">
                            <div className="flex items-center gap-3">
                                {/* Search */}
                                <div className="flex-1 relative">
                                    <div className="absolute left-2.5 top-1/2 -translate-y-1/2">
                                        <Icon name="search" size={14} className="text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Search relationships..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-9 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                                    />
                                </div>
                                {/* Filter Tabs */}
                                <div className="flex gap-1">
                                    {filterTabs.map((tab) => (
                                        <button
                                            key={tab.value}
                                            onClick={() => setActiveFilter(tab.value)}
                                            className={`px-3 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${activeFilter === tab.value
                                                    ? 'bg-linear-to-r from-teal-500 to-teal-600 text-white shadow-sm scale-105'
                                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                                }`}
                                        >
                                            <Icon name={tab.icon as any} size={14} />
                                            {tab.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Metrics */}
                        <div className="grid grid-cols-4 gap-4">
                            {relationshipMetrics.map((metric, index) => {
                                const colors = colorStyles[metric.color];
                                return (
                                    <div key={index} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
                                        <div className="flex items-start justify-between mb-3">
                                            <div className={`w-9 h-9 rounded-lg ${colors.bg} flex items-center justify-center ${colors.hoverBg} transition-colors`}>
                                                <Icon name={metric.icon as any} size={16} className={colors.text} />
                                            </div>
                                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded flex items-center gap-0.5 bg-green-50 text-green-700">
                                                <span>↑</span>
                                                {metric.change}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-0.5">{metric.value}</h3>
                                        <p className="text-gray-500 text-[10px] font-medium uppercase tracking-wider">{metric.label}</p>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                            {/* Main Content */}
                            <div className="lg:col-span-2 space-y-5">
                                {/* Top Relationships */}
                                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                                    <div className="p-4 border-b border-gray-100">
                                        <div className="flex items-center justify-between">
                                            <h2 className="font-semibold text-gray-900 flex items-center gap-2 text-sm">
                                                <Icon name="users" size={16} className="text-teal-600" />
                                                Top Relationships
                                            </h2>
                                            <button className="text-xs text-teal-600 font-medium hover:text-teal-700 cursor-pointer transition-colors">View All</button>
                                        </div>
                                    </div>
                                    <div className="divide-y divide-gray-100">
                                        {filteredRelationships.length > 0 ? (
                                            filteredRelationships.map((rel, index) => (
                                                <div key={index} className="p-4 hover:bg-teal-50/30 transition-all duration-200 cursor-pointer group">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-2.5">
                                                            <div className={`w-9 h-9 rounded-lg ${rel.type === 'company' ? 'bg-teal-50 group-hover:bg-teal-100' : 'bg-blue-50 group-hover:bg-blue-100'} flex items-center justify-center transition-colors`}>
                                                                <Icon name={rel.type === 'company' ? 'building' : 'users'} size={16} className={rel.type === 'company' ? 'text-teal-600' : 'text-blue-600'} />
                                                            </div>
                                                            <div>
                                                                <h3 className="font-semibold text-gray-900 text-xs group-hover:text-teal-700 transition-colors">{rel.name}</h3>
                                                                <p className="text-[10px] text-gray-500">{rel.contacts} contacts • {rel.lastContact}</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-3">
                                                            <div className="text-right">
                                                                <div className="flex items-center gap-1">
                                                                    <span className="text-xs font-bold text-gray-900">{rel.strength}%</span>
                                                                </div>
                                                                <span className={`text-[9px] px-2 py-0.5 rounded-full font-medium ${rel.status === 'Strong' ? 'bg-green-50 text-green-700' : 'bg-blue-50 text-blue-700'
                                                                    }`}>
                                                                    {rel.status}
                                                                </span>
                                                            </div>
                                                            <div className="w-16 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                                                <div
                                                                    className={`h-full rounded-full transition-all duration-500 ${rel.strength >= 90 ? 'bg-linear-to-r from-teal-500 to-teal-600' :
                                                                            rel.strength >= 75 ? 'bg-linear-to-r from-blue-500 to-blue-600' :
                                                                                'bg-linear-to-r from-orange-500 to-orange-600'
                                                                        }`}
                                                                    style={{ width: `${rel.strength}%` }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="p-8 text-center">
                                                <div className="w-12 h-12 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-2">
                                                    <Icon name="users" size={20} className="text-gray-400" />
                                                </div>
                                                <p className="text-gray-500 text-xs">No relationships found</p>
                                                <p className="text-gray-400 text-[10px] mt-0.5">Try adjusting your filters</p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Recent Activity & Insights */}
                                <div className="grid grid-cols-2 gap-4">
                                    {/* Recent Activity */}
                                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                                        <div className="p-4 border-b border-gray-100">
                                            <h2 className="font-semibold text-gray-900 flex items-center gap-2 text-xs">
                                                <Icon name="message" size={14} className="text-teal-600" />
                                                Recent Activity
                                            </h2>
                                        </div>
                                        <div className="p-2 space-y-1">
                                            {recentActivities.map((activity, index) => (
                                                <div key={index} className="flex items-start gap-2 p-2 rounded-lg hover:bg-teal-50/50 transition-all cursor-pointer group">
                                                    <div className="w-7 h-7 rounded-md bg-teal-50 group-hover:bg-teal-100 flex items-center justify-center shrink-0 transition-colors">
                                                        <Icon name={activity.icon as any} size={12} className="text-teal-600" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-[10px] font-semibold text-gray-900 group-hover:text-teal-700 transition-colors">{activity.type}</p>
                                                        <p className="text-[10px] text-gray-500 truncate">{activity.target}</p>
                                                        <p className="text-[9px] text-gray-400 mt-0.5 font-medium">{activity.time}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* AI Insights */}
                                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                                        <div className="p-4 border-b border-gray-100">
                                            <h2 className="font-semibold text-gray-900 flex items-center gap-2 text-xs">
                                                <Icon name="sparkles" size={14} className="text-teal-600" />
                                                AI Insights
                                            </h2>
                                        </div>
                                        <div className="p-2 space-y-1">
                                            {insights.map((insight, index) => (
                                                <div key={index} className="p-2 rounded-lg bg-gray-50 hover:bg-teal-50 transition-all cursor-pointer group">
                                                    <div className="flex items-start gap-1.5">
                                                        <div className={`w-1.5 h-1.5 rounded-full mt-1 shrink-0 ${insight.priority === 'high' ? 'bg-teal-600' : 'bg-blue-500'
                                                            }`} />
                                                        <div className="flex-1 min-w-0">
                                                            <h3 className="text-[10px] font-semibold text-gray-900 mb-0.5 group-hover:text-teal-700 transition-colors">{insight.title}</h3>
                                                            <p className="text-[10px] text-gray-600 mb-0.5 leading-tight">{insight.desc}</p>
                                                            <span className="text-[9px] text-gray-400 font-medium">{insight.time}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Inline Sidebar */}
                            <div className="space-y-4">
                                {/* Quick Actions */}
                                <div className="bg-linear-to-br from-teal-600 to-teal-700 rounded-xl p-4 text-white shadow-md shadow-teal-500/30 hover:shadow-lg transition-shadow duration-200">
                                    <h3 className="font-semibold text-xs mb-2.5 flex items-center gap-1.5">
                                        <div className="w-6 h-6 rounded-md bg-white/20 flex items-center justify-center backdrop-blur-sm">
                                            <Icon name="zap" size={12} />
                                        </div>
                                        Quick Actions
                                    </h3>
                                    <div className="space-y-1.5">
                                        <button className="w-full py-2 bg-white/15 hover:bg-white/25 rounded-lg text-[10px] font-semibold transition-all backdrop-blur-sm text-left px-2.5 cursor-pointer border border-white/10 hover:border-white/20">
                                            Schedule Follow-up
                                        </button>
                                        <button className="w-full py-2 bg-white/15 hover:bg-white/25 rounded-lg text-[10px] font-semibold transition-all backdrop-blur-sm text-left px-2.5 cursor-pointer border border-white/10 hover:border-white/20">
                                            Import Contacts
                                        </button>
                                        <button className="w-full py-2 bg-white/15 hover:bg-white/25 rounded-lg text-[10px] font-semibold transition-all backdrop-blur-sm text-left px-2.5 cursor-pointer border border-white/10 hover:border-white/20">
                                            Generate Report
                                        </button>
                                    </div>
                                </div>

                                {/* Relationship Health */}
                                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 hover:shadow-md transition-shadow">
                                    <h3 className="font-semibold text-gray-900 mb-3 text-xs flex items-center gap-1.5">
                                        <Icon name="graph" size={14} className="text-teal-600" />
                                        Health Distribution
                                    </h3>
                                    <div className="space-y-3">
                                        <div>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-[10px] text-gray-600 font-medium">Strong (80%+)</span>
                                                <span className="text-[10px] font-bold text-gray-900">342</span>
                                            </div>
                                            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                                <div className="h-full w-[68%] bg-linear-to-r from-teal-500 to-teal-600 rounded-full transition-all duration-500" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-[10px] text-gray-600 font-medium">Good (60-79%)</span>
                                                <span className="text-[10px] font-bold text-gray-900">189</span>
                                            </div>
                                            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                                <div className="h-full w-[42%] bg-linear-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-[10px] text-gray-600 font-medium">Needs Attention</span>
                                                <span className="text-[10px] font-bold text-gray-900">67</span>
                                            </div>
                                            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                                <div className="h-full w-[23%] bg-linear-to-r from-orange-500 to-orange-600 rounded-full transition-all duration-500" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* This Week */}
                                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 hover:shadow-md transition-shadow">
                                    <h3 className="font-semibold text-gray-900 mb-3 text-xs flex items-center gap-1.5">
                                        <Icon name="calendar" size={14} className="text-teal-600" />
                                        This Week
                                    </h3>
                                    <div className="space-y-1.5">
                                        <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-teal-50/50 transition-all cursor-pointer group">
                                            <div className="w-7 h-7 rounded-md bg-teal-50 group-hover:bg-teal-100 flex items-center justify-center transition-colors">
                                                <Icon name="calendar" size={12} className="text-teal-600" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-[10px] font-semibold text-gray-900 truncate group-hover:text-teal-700 transition-colors">Meeting - ABC Corp</p>
                                                <p className="text-[9px] text-gray-500 font-medium">Tomorrow, 2:00 PM</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-blue-50/50 transition-all cursor-pointer group">
                                            <div className="w-7 h-7 rounded-md bg-blue-50 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
                                                <Icon name="phone" size={12} className="text-blue-600" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-[10px] font-semibold text-gray-900 truncate group-hover:text-blue-700 transition-colors">Call - TechCorp</p>
                                                <p className="text-[9px] text-gray-500 font-medium">Friday, 10:00 AM</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-purple-50/50 transition-all cursor-pointer group">
                                            <div className="w-7 h-7 rounded-md bg-purple-50 group-hover:bg-purple-100 flex items-center justify-center transition-colors">
                                                <Icon name="message" size={12} className="text-purple-600" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-[10px] font-semibold text-gray-900 truncate group-hover:text-purple-700 transition-colors">Follow-up - Global</p>
                                                <p className="text-[9px] text-gray-500 font-medium">Saturday, 3:00 PM</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <RelationshipIntelligenceRightPanel />
        </div>
    );
}