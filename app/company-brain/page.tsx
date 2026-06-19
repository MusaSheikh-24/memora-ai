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
        { label: 'Knowledge Items', value: '9,847', change: '+12%', positive: true, icon: 'file' },
        { label: 'Active Searches', value: '234', change: '+5%', positive: true, icon: 'search' },
        { label: 'AI Confidence', value: '94%', change: '+2%', positive: true, icon: 'sparkles' },
    ];

    const colorStyles: Record<string, { bg: string; iconBg: string; text: string; hoverBg: string }> = {
        teal: { bg: 'bg-teal-50', iconBg: 'bg-teal-100', text: 'text-teal-600', hoverBg: 'group-hover:bg-teal-100' },
        blue: { bg: 'bg-blue-50', iconBg: 'bg-blue-100', text: 'text-blue-600', hoverBg: 'group-hover:bg-blue-100' },
        purple: { bg: 'bg-purple-50', iconBg: 'bg-purple-100', text: 'text-purple-600', hoverBg: 'group-hover:bg-purple-100' },
        orange: { bg: 'bg-orange-50', iconBg: 'bg-orange-100', text: 'text-orange-600', hoverBg: 'group-hover:bg-orange-100' },
    };

    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">
            <div className="flex-1 flex flex-col overflow-hidden">
                <TopBar />

                <div className="flex-1 overflow-y-auto">
                    <div className="max-w-7xl mx-auto px-6 py-6 space-y-5">
                        {/* Header */}
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 rounded-lg bg-linear-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-md shadow-teal-500/30">
                                    <Icon name="sparkles" size={18} className="text-white" />
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold text-gray-900">Company Brain</h1>
                                    <p className="text-gray-500 text-xs mt-0.5">AI-powered organizational intelligence</p>
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4">
                            {quickStats.map((stat, index) => (
                                <div key={index} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="w-9 h-9 rounded-lg bg-teal-50 flex items-center justify-center group-hover:bg-teal-100 transition-colors">
                                            <Icon name={stat.icon as any} size={16} className="text-teal-600" />
                                        </div>
                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-0.5 ${stat.positive ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                                            <span className="text-[9px]">{stat.positive ? '↑' : '↓'}</span>
                                            {stat.change}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-0.5">{stat.value}</h3>
                                    <p className="text-gray-500 text-[10px] font-medium uppercase tracking-wider">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                            {/* Main Content */}
                            <div className="lg:col-span-2 space-y-5">
                                {/* Categories */}
                                <div>
                                    <h2 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                                        <Icon name="folder" size={16} className="text-teal-600" />
                                        Knowledge Categories
                                    </h2>
                                    <div className="grid grid-cols-2 gap-3">
                                        {knowledgeCategories.map((category, index) => {
                                            const colors = colorStyles[category.color];
                                            return (
                                                <div key={index} className="bg-white rounded-xl p-4 border border-gray-200 hover:border-teal-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
                                                    <div className="flex items-start gap-2.5">
                                                        <div className={`w-9 h-9 rounded-lg ${colors.bg} flex items-center justify-center shrink-0 ${colors.hoverBg} transition-colors`}>
                                                            <Icon name={category.icon as any} size={16} className={colors.text} />
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <h3 className="font-semibold text-gray-900 text-xs mb-0.5 group-hover:text-teal-700 transition-colors">{category.title}</h3>
                                                            <p className={`text-[10px] ${colors.text} font-semibold mb-0.5`}>{category.count}</p>
                                                            <p className="text-[10px] text-gray-500">{category.description}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Recent Insights */}
                                <div>
                                    <h2 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                                        <Icon name="sparkles" size={16} className="text-teal-600" />
                                        Recent Insights
                                    </h2>
                                    <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100 shadow-sm overflow-hidden">
                                        {recentInsights.map((insight, index) => (
                                            <div key={index} className="p-4 hover:bg-teal-50/30 transition-all duration-200 cursor-pointer group">
                                                <div className="flex items-start gap-2.5">
                                                    <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center shrink-0 group-hover:bg-teal-100 transition-colors">
                                                        <Icon name={insight.icon as any} size={14} className="text-teal-600" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-center gap-2 mb-1">
                                                            <h3 className="font-semibold text-gray-900 text-xs group-hover:text-teal-700 transition-colors">{insight.title}</h3>
                                                            <span className="text-[10px] px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full font-medium">{insight.type}</span>
                                                        </div>
                                                        <p className="text-[10px] text-gray-600 mb-1 leading-relaxed">{insight.summary}</p>
                                                        <p className="text-[9px] text-gray-400 font-medium">{insight.time}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Inline Sidebar */}
                            <div className="space-y-4">
                                {/* AI Assistant */}
                                <div className="bg-linear-to-br from-teal-600 to-teal-700 rounded-xl p-4 text-white shadow-md shadow-teal-500/30 hover:shadow-lg transition-shadow duration-200 cursor-pointer">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-7 h-7 rounded-md bg-white/20 flex items-center justify-center backdrop-blur-sm">
                                            <Icon name="sparkles" size={14} className="text-white" />
                                        </div>
                                        <h3 className="font-bold text-xs">AI Assistant</h3>
                                    </div>
                                    <p className="text-[10px] text-teal-50 mb-3 leading-relaxed">Ask anything about your company</p>
                                    <button className="w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg text-[10px] font-bold transition-all duration-200 backdrop-blur-sm border border-white/20 hover:border-white/30 cursor-pointer">
                                        Start Chat
                                    </button>
                                </div>

                                {/* Popular Searches */}
                                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-gray-900 mb-3 text-xs flex items-center gap-1.5">
                                        <Icon name="search" size={14} className="text-teal-600" />
                                        Popular Searches
                                    </h3>
                                    <div className="space-y-1.5">
                                        {['Q4 Reports', 'Employee Handbook', 'Client Contracts'].map((search, index) => (
                                            <div key={index} className="flex items-center gap-2.5 text-xs text-gray-600 hover:text-teal-700 cursor-pointer group p-2 -mx-2 rounded-lg hover:bg-teal-50/50 transition-all">
                                                <div className="w-7 h-7 rounded-md bg-gray-50 group-hover:bg-teal-100 flex items-center justify-center transition-colors">
                                                    <Icon name="search" size={12} className="text-gray-400 group-hover:text-teal-600 transition-colors" />
                                                </div>
                                                <span className="font-medium text-[10px]">{search}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Health Score */}
                                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-gray-900 mb-3 text-xs flex items-center gap-1.5">
                                        <Icon name="sparkles" size={14} className="text-teal-600" />
                                        Knowledge Health
                                    </h3>
                                    <div className="flex items-center justify-between mb-3 pb-3 border-b border-gray-100">
                                        <span className="text-2xl font-bold bg-linear-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">87%</span>
                                        <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Overall Score</span>
                                    </div>
                                    <div className="space-y-3">
                                        <div>
                                            <div className="flex justify-between mb-1.5">
                                                <span className="text-[10px] text-gray-600 font-medium">Accuracy</span>
                                                <span className="text-[10px] font-bold text-gray-900">94%</span>
                                            </div>
                                            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                                <div className="h-full w-[94%] bg-linear-to-r from-teal-500 to-teal-600 rounded-full transition-all duration-500" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-1.5">
                                                <span className="text-[10px] text-gray-600 font-medium">Freshness</span>
                                                <span className="text-[10px] font-bold text-gray-900">76%</span>
                                            </div>
                                            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                                <div className="h-full w-[76%] bg-linear-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500" />
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