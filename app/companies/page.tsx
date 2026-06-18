'use client';
import { useState } from 'react';
import TopBar from '@/components/topbar';
import CompaniesRightPanel from '@/components/right-panels/CompaniesRightPanel';
import Icon from '@/components/icon';

export default function Companies() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');

    const filters = [
        { id: 'all', label: 'All Companies', count: 482 },
        { id: 'active', label: 'Active', count: 347 },
        { id: 'prospect', label: 'Prospects', count: 98 },
        { id: 'inactive', label: 'Inactive', count: 37 },
    ];

    const featuredCompany = {
        name: 'ABC Corporation',
        industry: 'Technology',
        revenue: '$2.4M',
        growth: '+23%',
        employees: 245,
        health: 96,
        contacts: 12,
        projects: 8,
        lastActivity: '2h ago',
        description: 'Leading software development company specializing in enterprise solutions.',
    };

    const companies = [
        { name: 'ABC Corporation', industry: 'Technology', revenue: '$2.4M', health: 96, status: 'Active', trend: 'up', contacts: 12 },
        { name: 'TechCorp Industries', industry: 'Software', revenue: '$1.8M', health: 91, status: 'Active', trend: 'up', contacts: 8 },
        { name: 'Enterprise Systems', industry: 'Manufacturing', revenue: '$3.1M', health: 88, status: 'Active', trend: 'stable', contacts: 15 },
        { name: 'Global Solutions Ltd', industry: 'Consulting', revenue: '$1.2M', health: 84, status: 'Active', trend: 'stable', contacts: 10 },
        { name: 'Innovation Partners', industry: 'Finance', revenue: '$890K', health: 72, status: 'Prospect', trend: 'down', contacts: 6 },
        { name: 'StartUp Hub', industry: 'Technology', revenue: '$420K', health: 58, status: 'Prospect', trend: 'up', contacts: 4 },
    ];

    const industryTags = [
        { name: 'Technology', count: 142, color: 'teal' },
        { name: 'Finance', count: 98, color: 'blue' },
        { name: 'Consulting', count: 87, color: 'purple' },
        { name: 'Manufacturing', count: 76, color: 'orange' },
        { name: 'Healthcare', count: 79, color: 'green' },
    ];

    const metrics = [
        { label: 'Total Revenue', value: '$12.4M', sub: 'Across all companies' },
        { label: 'Avg Health Score', value: '87%', sub: 'Portfolio average' },
        { label: 'Total Contacts', value: '6,432', sub: 'Across companies' },
    ];

    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">
            <div className="flex-1 flex flex-col overflow-hidden">
                <TopBar />

                <div className="flex-1 overflow-y-auto">
                    <div className="max-w-7xl mx-auto px-6 py-6">
                        {/* Compact Header */}
                        <div className="flex items-center justify-between mb-5">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-teal-600 flex items-center justify-center">
                                    <Icon name="building" size={20} className="text-white" />
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold text-gray-900">Companies</h1>
                                    <p className="text-xs text-gray-500">482 companies in portfolio</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center bg-white border border-gray-200 rounded-lg px-3 py-2 w-64">
                                    <Icon name="search" size={14} className="text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search companies..."
                                        className="ml-2 text-xs bg-transparent outline-none flex-1"
                                    />
                                    <span className="text-[9px] text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">⌘K</span>
                                </div>
                                <button className="px-3 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-xs font-semibold transition flex items-center gap-1.5 cursor-pointer">
                                    <Icon name="plus" size={14} />
                                    Add Company
                                </button>
                            </div>
                        </div>

                        {/* Metrics Strip */}
                        <div className="grid grid-cols-3 gap-3 mb-5">
                            {metrics.map((metric, index) => (
                                <div key={index} className="bg-white rounded-lg p-3 border border-gray-200 flex items-center justify-between">
                                    <div>
                                        <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">{metric.label}</p>
                                        <p className="text-lg font-bold text-gray-900 mt-0.5">{metric.value}</p>
                                        <p className="text-[10px] text-gray-400">{metric.sub}</p>
                                    </div>
                                    <div className="w-8 h-8 rounded-md bg-teal-50 flex items-center justify-center">
                                        <Icon name="graph" size={14} className="text-teal-600" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                            {/* Main Content - 2/3 */}
                            <div className="lg:col-span-2 space-y-5">
                                {/* Featured Company Spotlight */}
                                <div className="bg-linear-to-br from-teal-600 to-teal-700 rounded-xl p-5 text-white">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20">
                                                <Icon name="building" size={24} className="text-white" />
                                            </div>
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <h2 className="font-bold text-base">{featuredCompany.name}</h2>
                                                    <span className="text-[9px] px-2 py-0.5 bg-white/20 rounded-full font-medium">Featured</span>
                                                </div>
                                                <p className="text-xs text-teal-100">{featuredCompany.industry} • {featuredCompany.employees} employees</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-2xl font-bold">{featuredCompany.health}%</p>
                                            <p className="text-[10px] text-teal-100">Health Score</p>
                                        </div>
                                    </div>

                                    <p className="text-xs text-teal-50 mb-4 leading-relaxed">{featuredCompany.description}</p>

                                    <div className="grid grid-cols-4 gap-3 mb-4">
                                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2.5 border border-white/10">
                                            <p className="text-[9px] text-teal-100 mb-0.5">Revenue</p>
                                            <p className="text-sm font-bold">{featuredCompany.revenue}</p>
                                            <p className="text-[9px] text-green-300 font-semibold">{featuredCompany.growth}</p>
                                        </div>
                                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2.5 border border-white/10">
                                            <p className="text-[9px] text-teal-100 mb-0.5">Contacts</p>
                                            <p className="text-sm font-bold">{featuredCompany.contacts}</p>
                                            <p className="text-[9px] text-teal-100">Active</p>
                                        </div>
                                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2.5 border border-white/10">
                                            <p className="text-[9px] text-teal-100 mb-0.5">Projects</p>
                                            <p className="text-sm font-bold">{featuredCompany.projects}</p>
                                            <p className="text-[9px] text-teal-100">Ongoing</p>
                                        </div>
                                        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2.5 border border-white/10">
                                            <p className="text-[9px] text-teal-100 mb-0.5">Last Active</p>
                                            <p className="text-sm font-bold">{featuredCompany.lastActivity}</p>
                                            <p className="text-[9px] text-teal-100">Recent</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-2">
                                        <button className="flex-1 py-2 bg-white text-teal-700 rounded-lg text-xs font-semibold hover:bg-teal-50 transition cursor-pointer">
                                            View Details
                                        </button>
                                        <button className="flex-1 py-2 bg-white/15 hover:bg-white/25 rounded-lg text-xs font-semibold transition backdrop-blur-sm border border-white/20 cursor-pointer">
                                            Add Contact
                                        </button>
                                    </div>
                                </div>

                                {/* Filters + List */}
                                <div className="bg-white rounded-xl border border-gray-200">
                                    {/* Filter Bar */}
                                    <div className="p-3 border-b border-gray-100 flex items-center justify-between">
                                        <div className="flex gap-1">
                                            {filters.map((filter) => (
                                                <button
                                                    key={filter.id}
                                                    onClick={() => setActiveFilter(filter.id)}
                                                    className={`px-3 py-1.5 rounded-md text-xs font-semibold transition flex items-center gap-1.5 cursor-pointer ${activeFilter === filter.id
                                                        ? 'bg-teal-600 text-white'
                                                        : 'text-gray-600 hover:bg-gray-100'
                                                        }`}
                                                >
                                                    {filter.label}
                                                    <span className={`text-[9px] px-1.5 py-0.5 rounded ${activeFilter === filter.id ? 'bg-white/20' : 'bg-gray-100'
                                                        }`}>
                                                        {filter.count}
                                                    </span>
                                                </button>
                                            ))}
                                        </div>
                                        <div className="flex gap-1 bg-gray-100 p-1 rounded-md">
                                            <button
                                                onClick={() => setViewMode('list')}
                                                className={`p-1.5 rounded transition cursor-pointer ${viewMode === 'list' ? 'bg-white shadow-sm' : ''}`}
                                            >
                                                <Icon name="grid" size={12} className="text-gray-600" />
                                            </button>
                                            <button
                                                onClick={() => setViewMode('grid')}
                                                className={`p-1.5 rounded transition cursor-pointer ${viewMode === 'grid' ? 'bg-white shadow-sm' : ''}`}
                                            >
                                                <Icon name="kanban" size={12} className="text-gray-600" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Company List */}
                                    <div className="divide-y divide-gray-100">
                                        {companies.map((company, index) => (
                                            <div key={index} className="p-3.5 hover:bg-gray-50 transition cursor-pointer">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-9 h-9 rounded-lg bg-linear-to-br from-teal-100 to-teal-50 flex items-center justify-center shrink-0">
                                                        <Icon name="building" size={16} className="text-teal-600" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-center gap-2 mb-0.5">
                                                            <h3 className="font-semibold text-gray-900 text-xs truncate">{company.name}</h3>
                                                            <span className={`text-[9px] px-1.5 py-0.5 rounded font-medium ${company.status === 'Active' ? 'bg-green-50 text-green-700' : 'bg-blue-50 text-blue-700'
                                                                }`}>
                                                                {company.status}
                                                            </span>
                                                        </div>
                                                        <p className="text-[10px] text-gray-500">{company.industry} • {company.contacts} contacts</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="text-xs font-bold text-gray-900">{company.revenue}</p>
                                                        <div className="flex items-center justify-end gap-1 mt-0.5">
                                                            <div className="w-12 h-1 bg-gray-100 rounded-full overflow-hidden">
                                                                <div
                                                                    className="h-full bg-teal-600 rounded-full"
                                                                    style={{ width: `${company.health}%` }}
                                                                />
                                                            </div>
                                                            <span className="text-[9px] font-semibold text-gray-700">{company.health}%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="p-3 border-t border-gray-100 text-center">
                                        <button className="text-xs text-teal-600 font-semibold hover:text-teal-700 cursor-pointer">
                                            View All 482 Companies →
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Inline Sidebar - 1/3 */}
                            <div className="space-y-4">
                                {/* Industry Distribution */}
                                <div className="bg-white rounded-xl border border-gray-200 p-4">
                                    <h3 className="font-bold text-gray-900 mb-3 text-xs flex items-center gap-2">
                                        <Icon name="graph" size={14} className="text-teal-600" />
                                        Industry Distribution
                                    </h3>
                                    <div className="space-y-2.5">
                                        {industryTags.map((industry, index) => (
                                            <div key={index} className="group cursor-pointer">
                                                <div className="flex items-center justify-between mb-1">
                                                    <div className="flex items-center gap-2">
                                                        <div className={`w-2 h-2 rounded-full bg-${industry.color}-500`} />
                                                        <span className="text-[10px] font-medium text-gray-700 group-hover:text-teal-700 transition">
                                                            {industry.name}
                                                        </span>
                                                    </div>
                                                    <span className="text-[10px] font-bold text-gray-900">{industry.count}</span>
                                                </div>
                                                <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                                                    <div
                                                        className={`h-full bg-${industry.color}-500 rounded-full transition-all`}
                                                        style={{ width: `${(industry.count / 142) * 100}%` }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Quick Actions */}
                                <div className="bg-teal-600 rounded-xl p-4 text-white">
                                    <h3 className="font-bold text-xs mb-3 flex items-center gap-2">
                                        <Icon name="zap" size={14} />
                                        Quick Actions
                                    </h3>
                                    <div className="space-y-1.5">
                                        <button className="w-full py-2 bg-white/15 hover:bg-white/25 rounded-lg text-[10px] font-semibold transition backdrop-blur-sm text-left px-3 flex items-center gap-2 cursor-pointer">
                                            <Icon name="file" size={12} />
                                            Import CSV
                                        </button>
                                        <button className="w-full py-2 bg-white/15 hover:bg-white/25 rounded-lg text-[10px] font-semibold transition backdrop-blur-sm text-left px-3 flex items-center gap-2 cursor-pointer">
                                            <Icon name="users" size={12} />
                                            Sync CRM
                                        </button>
                                        <button className="w-full py-2 bg-white/15 hover:bg-white/25 rounded-lg text-[10px] font-semibold transition backdrop-blur-sm text-left px-3 flex items-center gap-2 cursor-pointer">
                                            <Icon name="graph" size={12} />
                                            Generate Report
                                        </button>
                                    </div>
                                </div>

                                {/* Recent Updates */}
                                <div className="bg-white rounded-xl border border-gray-200 p-4">
                                    <h3 className="font-bold text-gray-900 mb-3 text-xs flex items-center gap-2">
                                        <Icon name="sparkles" size={14} className="text-teal-600" />
                                        Recent Updates
                                    </h3>
                                    <div className="space-y-2">
                                        {[
                                            { icon: 'plus', text: 'NextGen Solutions added', time: '15m' },
                                            { icon: 'trending-up', text: 'ABC Corp revenue updated', time: '2h' },
                                            { icon: 'users', text: 'TechCorp contact added', time: '4h' },
                                            { icon: 'alert', text: 'Innovation status changed', time: '6h' },
                                        ].map((update, index) => (
                                            <div key={index} className="flex items-start gap-2 p-1.5 rounded hover:bg-gray-50 transition cursor-pointer">
                                                <div className="w-6 h-6 rounded bg-teal-50 flex items-center justify-center shrink-0 mt-0.5">
                                                    <Icon name={update.icon as any} size={10} className="text-teal-600" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-[10px] font-medium text-gray-800 leading-tight truncate">{update.text}</p>
                                                    <p className="text-[9px] text-gray-400">{update.time} ago</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CompaniesRightPanel />
        </div>
    );
}