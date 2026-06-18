'use client';
import { useState } from 'react';
import TopBar from '@/components/topbar';
import RelationshipIntelligenceRightPanel from '@/components/right-panels/RelationshipIntelligenceRightPanel';
import Icon from '@/components/icon';

export default function RelationshipIntelligence() {
    const [searchQuery, setSearchQuery] = useState('');

    const relationshipMetrics = [
        { icon: 'users', label: 'Total Contacts', value: '6,432', change: '+12%', trend: 'up' },
        { icon: 'building', label: 'Companies', value: '482', change: '+8%', trend: 'up' },
        { icon: 'network', label: 'Active Relationships', value: '1,247', change: '+15%', trend: 'up' },
        { icon: 'message', label: 'Engagements', value: '3,891', change: '+23%', trend: 'up' },
    ];

    const topRelationships = [
        { name: 'ABC Corporation', strength: 96, contacts: 12, lastContact: '2h ago', status: 'Strong' },
        { name: 'TechCorp Industries', strength: 91, contacts: 8, lastContact: '5h ago', status: 'Strong' },
        { name: 'Global Solutions Ltd', strength: 84, contacts: 15, lastContact: '1d ago', status: 'Good' },
        { name: 'Innovation Partners', strength: 72, contacts: 6, lastContact: '5d ago', status: 'Good' },
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

    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">
            <div className="flex-1 flex flex-col overflow-hidden">
                <TopBar />

                <div className="flex-1 overflow-y-auto">
                    <div className="max-w-7xl mx-auto px-6 py-6">
                        {/* Header */}
                        <div className="mb-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-11 h-11 rounded-xl bg-teal-600 flex items-center justify-center shadow-lg">
                                        <Icon name="network" size={22} className="text-white" />
                                    </div>
                                    <div>
                                        <h1 className="text-2xl font-bold text-gray-900">Relationship Intelligence</h1>
                                        <p className="text-gray-500 text-xs">AI-powered relationship & network analytics</p>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <button className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg font-semibold text-sm hover:border-teal-600 hover:text-teal-600 transition">
                                        Import
                                    </button>
                                    <button className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-semibold text-sm transition flex items-center gap-2">
                                        <Icon name="plus" size={16} />
                                        Add Contact
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Metrics */}
                        <div className="grid grid-cols-4 gap-3 mb-6">
                            {relationshipMetrics.map((metric, index) => (
                                <div key={index} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                                    <div className="flex items-center gap-2.5 mb-2">
                                        <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center">
                                            <Icon name={metric.icon as any} size={16} className="text-teal-600" />
                                        </div>
                                        <span className="text-xs font-medium text-gray-500">{metric.label}</span>
                                    </div>
                                    <div className="flex items-end justify-between">
                                        <span className="text-xl font-bold text-gray-900">{metric.value}</span>
                                        <span className="text-xs font-semibold text-green-600 bg-green-50 px-1.5 py-0.5 rounded">
                                            {metric.change}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Main Content */}
                            <div className="lg:col-span-2 space-y-5">
                                {/* Top Relationships */}
                                <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                                    <div className="p-4 border-b border-gray-100">
                                        <div className="flex items-center justify-between">
                                            <h2 className="font-bold text-gray-900 flex items-center gap-2">
                                                <Icon name="users" size={18} className="text-teal-600" />
                                                Top Relationships
                                            </h2>
                                            <button className="text-xs text-teal-600 font-semibold hover:text-teal-700">View All</button>
                                        </div>
                                    </div>
                                    <div className="divide-y divide-gray-100">
                                        {topRelationships.map((rel, index) => (
                                            <div key={index} className="p-4 hover:bg-gray-50 transition cursor-pointer">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 rounded-lg bg-teal-100 flex items-center justify-center">
                                                            <Icon name="building" size={18} className="text-teal-600" />
                                                        </div>
                                                        <div>
                                                            <h3 className="font-semibold text-gray-900 text-sm">{rel.name}</h3>
                                                            <p className="text-xs text-gray-500">{rel.contacts} contacts • {rel.lastContact}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <div className="text-right">
                                                            <div className="flex items-center gap-1.5">
                                                                <span className="text-sm font-bold text-gray-900">{rel.strength}%</span>
                                                            </div>
                                                            <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${rel.status === 'Strong' ? 'bg-green-50 text-green-700' : 'bg-blue-50 text-blue-700'
                                                                }`}>
                                                                {rel.status}
                                                            </span>
                                                        </div>
                                                        <div className="w-16 h-2 bg-gray-100 rounded-full overflow-hidden">
                                                            <div
                                                                className="h-full bg-teal-600 rounded-full"
                                                                style={{ width: `${rel.strength}%` }}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Recent Activity & Insights */}
                                <div className="grid grid-cols-2 gap-5">
                                    {/* Recent Activity */}
                                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                                        <div className="p-4 border-b border-gray-100">
                                            <h2 className="font-bold text-gray-900 flex items-center gap-2 text-sm">
                                                <Icon name="message" size={16} className="text-teal-600" />
                                                Recent Activity
                                            </h2>
                                        </div>
                                        <div className="p-3 space-y-2">
                                            {recentActivities.map((activity, index) => (
                                                <div key={index} className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-gray-50 transition cursor-pointer">
                                                    <div className="w-7 h-7 rounded-md bg-teal-50 flex items-center justify-center shrink-0">
                                                        <Icon name={activity.icon as any} size={12} className="text-teal-600" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-[10px] font-semibold text-gray-900">{activity.type}</p>
                                                        <p className="text-[10px] text-gray-500 truncate">{activity.target}</p>
                                                        <p className="text-[9px] text-gray-400 mt-0.5">{activity.time}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* AI Insights */}
                                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                                        <div className="p-4 border-b border-gray-100">
                                            <h2 className="font-bold text-gray-900 flex items-center gap-2 text-sm">
                                                <Icon name="sparkles" size={16} className="text-teal-600" />
                                                AI Insights
                                            </h2>
                                        </div>
                                        <div className="p-3 space-y-2">
                                            {insights.map((insight, index) => (
                                                <div key={index} className="p-2.5 rounded-lg bg-gray-50 hover:bg-teal-50 transition cursor-pointer">
                                                    <div className="flex items-start gap-2">
                                                        <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${insight.priority === 'high' ? 'bg-teal-600' : 'bg-blue-500'
                                                            }`} />
                                                        <div className="flex-1 min-w-0">
                                                            <h3 className="text-[10px] font-semibold text-gray-900 mb-0.5">{insight.title}</h3>
                                                            <p className="text-[10px] text-gray-600 mb-1">{insight.desc}</p>
                                                            <span className="text-[9px] text-gray-400">{insight.time}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Inline Sidebar */}
                            <div className="space-y-5">
                                {/* Quick Actions */}
                                <div className="bg-teal-600 rounded-xl p-4 text-white shadow-lg">
                                    <h3 className="font-bold text-sm mb-3 flex items-center gap-2">
                                        <Icon name="zap" size={16} />
                                        Quick Actions
                                    </h3>
                                    <div className="space-y-2">
                                        <button className="w-full py-2 bg-white/15 hover:bg-white/25 rounded-lg text-xs font-semibold transition backdrop-blur-sm text-left px-3">
                                            Schedule Follow-up
                                        </button>
                                        <button className="w-full py-2 bg-white/15 hover:bg-white/25 rounded-lg text-xs font-semibold transition backdrop-blur-sm text-left px-3">
                                            Import Contacts
                                        </button>
                                        <button className="w-full py-2 bg-white/15 hover:bg-white/25 rounded-lg text-xs font-semibold transition backdrop-blur-sm text-left px-3">
                                            Generate Report
                                        </button>
                                    </div>
                                </div>

                                {/* Relationship Health */}
                                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
                                    <h3 className="font-bold text-gray-900 mb-3 text-sm flex items-center gap-2">
                                        <Icon name="graph" size={16} className="text-teal-600" />
                                        Health Distribution
                                    </h3>
                                    <div className="space-y-3">
                                        <div>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-xs text-gray-600 font-medium">Strong (80%+)</span>
                                                <span className="text-xs font-bold text-gray-900">342</span>
                                            </div>
                                            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                                <div className="h-full w-[68%] bg-teal-600 rounded-full" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-xs text-gray-600 font-medium">Good (60-79%)</span>
                                                <span className="text-xs font-bold text-gray-900">189</span>
                                            </div>
                                            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                                <div className="h-full w-[42%] bg-blue-500 rounded-full" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-xs text-gray-600 font-medium">Needs Attention</span>
                                                <span className="text-xs font-bold text-gray-900">67</span>
                                            </div>
                                            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                                <div className="h-full w-[23%] bg-orange-500 rounded-full" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* This Week */}
                                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
                                    <h3 className="font-bold text-gray-900 mb-3 text-sm flex items-center gap-2">
                                        <Icon name="calendar" size={16} className="text-teal-600" />
                                        This Week
                                    </h3>
                                    <div className="space-y-2.5">
                                        <div className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-gray-50 transition cursor-pointer">
                                            <div className="w-7 h-7 rounded-md bg-teal-50 flex items-center justify-center">
                                                <Icon name="calendar" size={13} className="text-teal-600" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-[10px] font-semibold text-gray-900 truncate">Meeting - ABC Corp</p>
                                                <p className="text-[9px] text-gray-500">Tomorrow, 2:00 PM</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-gray-50 transition cursor-pointer">
                                            <div className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center">
                                                <Icon name="phone" size={13} className="text-blue-600" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-[10px] font-semibold text-gray-900 truncate">Call - TechCorp</p>
                                                <p className="text-[9px] text-gray-500">Friday, 10:00 AM</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-gray-50 transition cursor-pointer">
                                            <div className="w-7 h-7 rounded-md bg-purple-50 flex items-center justify-center">
                                                <Icon name="message" size={13} className="text-purple-600" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-[10px] font-semibold text-gray-900 truncate">Follow-up - Global</p>
                                                <p className="text-[9px] text-gray-500">Saturday, 3:00 PM</p>
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