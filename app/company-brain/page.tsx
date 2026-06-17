'use client';
import { useState } from 'react';
import TopBar from '@/components/topbar';
import CompanyBrainRightPanel from '@/components/right-panels/CompanyBrainRightPanel';
import Icon from '@/components/icon';

export default function CompanyBrain() {
    const [searchQuery, setSearchQuery] = useState('');

    const knowledgeCategories = [
        { icon: 'file', title: 'Company Documents', count: '1,247 files', description: 'Policies & procedures', color: 'teal' },
        { icon: 'more', title: 'Team Knowledge', count: '34 members', description: 'Expertise & insights', color: 'blue' },
        { icon: 'search', title: 'Business Intelligence', count: '156 reports', description: 'Analytics & metrics', color: 'purple' },
        { icon: 'message', title: 'Communication', count: '8,432 msgs', description: 'Meetings & emails', color: 'orange' },
    ];

    const recentInsights = [
        { icon: 'sparkles', title: 'Q4 Revenue Projection', type: 'Financial', time: '2h ago', summary: 'Revenue projected to increase by 23%' },
        { icon: 'alert', title: 'Contract Renewal Alert', type: 'Important', time: '5h ago', summary: 'ABC Corp expires in 18 days' },
        { icon: 'file', title: 'New Policy Document', type: 'HR Update', time: '1d ago', summary: 'Remote work policy updated' },
    ];

    const quickStats = [
        { label: 'Knowledge Items', value: '9,847', change: '+12%', positive: true },
        { label: 'Active Searches', value: '234', change: '+5%', positive: true },
        { label: 'AI Confidence', value: '94%', change: '+2%', positive: true },
    ];

    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">
            <div className="flex-1 flex flex-col overflow-hidden">
                <TopBar />

                <div className="flex-1 overflow-y-auto">
                    <div className="max-w-7xl mx-auto px-8 py-8">
                        {/* Header */}
                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-xl bg-linear-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-lg">
                                    <Icon name="sparkles" size={20} className="text-white" />
                                </div>
                                <div>
                                    <h1 className="text-3xl font-bold text-gray-900">Company Brain</h1>
                                    <p className="text-gray-500 text-sm mt-0.5">AI-powered organizational intelligence</p>
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                            {quickStats.map((stat, index) => (
                                <div key={index} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                    <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-2">{stat.label}</p>
                                    <div className="flex items-end justify-between">
                                        <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
                                        <span className={`text-xs font-semibold px-2 py-1 rounded-lg ${stat.positive ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                                            {stat.change}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Main Content */}
                            <div className="lg:col-span-2 space-y-6">
                                {/* Categories */}
                                <div>
                                    <h2 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <Icon name="folder" size={18} className="text-teal-600" />
                                        Knowledge Categories
                                    </h2>
                                    <div className="grid grid-cols-2 gap-4">
                                        {knowledgeCategories.map((category, index) => (
                                            <div key={index} className="bg-white rounded-xl p-5 border border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all cursor-pointer group">
                                                <div className="flex items-start gap-3">
                                                    <div className={`w-10 h-10 rounded-lg bg-${category.color}-50 flex items-center justify-center shrink-0 group-hover:bg-${category.color}-100 transition-colors`}>
                                                        <Icon name={category.icon as any} size={18} className={`text-${category.color}-600`} />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h3 className="font-semibold text-gray-900 text-sm mb-1">{category.title}</h3>
                                                        <p className="text-xs text-teal-600 font-medium mb-1">{category.count}</p>
                                                        <p className="text-xs text-gray-500">{category.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Recent Insights */}
                                <div>
                                    <h2 className="text-base font-bold text-gray-900 mb-4 flex items-center gap-2">
                                        <Icon name="sparkles" size={18} className="text-teal-600" />
                                        Recent Insights
                                    </h2>
                                    <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100 shadow-sm">
                                        {recentInsights.map((insight, index) => (
                                            <div key={index} className="p-5 hover:bg-gray-50 transition cursor-pointer group">
                                                <div className="flex items-start gap-3">
                                                    <div className="w-9 h-9 rounded-lg bg-teal-50 flex items-center justify-center shrink-0 group-hover:bg-teal-100 transition-colors">
                                                        <Icon name={insight.icon as any} size={16} className="text-teal-600" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-center gap-2 mb-1">
                                                            <h3 className="font-semibold text-gray-900 text-sm">{insight.title}</h3>
                                                            <span className="text-xs px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full font-medium">{insight.type}</span>
                                                        </div>
                                                        <p className="text-xs text-gray-600 mb-2">{insight.summary}</p>
                                                        <p className="text-xs text-gray-400">{insight.time}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Inline Sidebar */}
                            <div className="space-y-5">
                                {/* AI Assistant */}
                                <div className="bg-linear-to-br from-teal-600 to-teal-700 rounded-xl p-5 text-white shadow-lg">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Icon name="sparkles" size={16} className="text-teal-100" />
                                        <h3 className="font-bold text-base">AI Assistant</h3>
                                    </div>
                                    <p className="text-sm text-teal-50 mb-4">Ask anything about your company</p>
                                    <button className="w-full py-2.5 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-semibold transition backdrop-blur-sm border border-white/20">
                                        Start Chat
                                    </button>
                                </div>

                                {/* Popular Searches */}
                                <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                                    <h3 className="font-bold text-gray-900 mb-4 text-sm flex items-center gap-2">
                                        <Icon name="search" size={16} className="text-teal-600" />
                                        Popular Searches
                                    </h3>
                                    <div className="space-y-3">
                                        {['Q4 Reports', 'Employee Handbook', 'Client Contracts'].map((search, index) => (
                                            <div key={index} className="flex items-center gap-3 text-sm text-gray-600 hover:text-teal-700 cursor-pointer group">
                                                <div className="w-7 h-7 rounded-lg bg-gray-50 group-hover:bg-teal-50 flex items-center justify-center transition-colors">
                                                    <Icon name="search" size={12} className="text-gray-400 group-hover:text-teal-600" />
                                                </div>
                                                <span className="font-medium">{search}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Health Score */}
                                <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                                    <h3 className="font-bold text-gray-900 mb-4 text-sm flex items-center gap-2">
                                        <Icon name="sparkles" size={16} className="text-teal-600" />
                                        Knowledge Health
                                    </h3>
                                    <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                                        <span className="text-3xl font-bold text-teal-600">87%</span>
                                        <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">Overall Score</span>
                                    </div>
                                    <div className="space-y-4">
                                        <div>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-xs text-gray-600 font-medium">Accuracy</span>
                                                <span className="text-xs font-bold text-gray-900">94%</span>
                                            </div>
                                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                                <div className="h-full w-[94%] bg-linear-to-r from-teal-500 to-teal-600 rounded-full" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-2">
                                                <span className="text-xs text-gray-600 font-medium">Freshness</span>
                                                <span className="text-xs font-bold text-gray-900">76%</span>
                                            </div>
                                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                                <div className="h-full w-[76%] bg-linear-to-r from-blue-500 to-blue-600 rounded-full" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CompanyBrainRightPanel />
        </div>
    );
}