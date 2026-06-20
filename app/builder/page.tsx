'use client';
import { useState } from 'react';
import TopBar from '@/components/topbar';
import WorkspaceBuilderRightPanel from '@/components/right-panels/WorkspaceBuilderRightPanel';
import Icon from '@/components/icon';

const workspaceTemplates = [
    {
        id: 1,
        name: 'Sales Dashboard',
        description: 'Complete CRM workspace with pipeline tracking and analytics.',
        category: 'Sales',
        icon: '📊',
        components: 12,
        lastEdited: '2 hours ago',
        status: 'Active',
        team: 5,
    },
    {
        id: 2,
        name: 'HR Portal',
        description: 'Employee management, onboarding, and documentation hub.',
        category: 'HR',
        icon: '👥',
        components: 8,
        lastEdited: '1 day ago',
        status: 'In Progress',
        team: 3,
    },
    {
        id: 3,
        name: 'Finance Workspace',
        description: 'Invoice tracking, expense management, and reporting tools.',
        category: 'Finance',
        icon: '💰',
        components: 15,
        lastEdited: '3 days ago',
        status: 'Active',
        team: 4,
    },
    {
        id: 4,
        name: 'Marketing Hub',
        description: 'Campaign management, content calendar, and analytics dashboard.',
        category: 'Marketing',
        icon: '📣',
        components: 10,
        lastEdited: '1 week ago',
        status: 'Draft',
        team: 6,
    },
    {
        id: 5,
        name: 'Project Tracker',
        description: 'Task management, sprint planning, and team collaboration.',
        category: 'Operations',
        icon: '✅',
        components: 9,
        lastEdited: '2 weeks ago',
        status: 'Active',
        team: 8,
    },
    {
        id: 6,
        name: 'Knowledge Base',
        description: 'Documentation, SOPs, and company wiki structure.',
        category: 'Documentation',
        icon: '📚',
        components: 6,
        lastEdited: '3 weeks ago',
        status: 'Active',
        team: 2,
    },
];

const filterTabs = [
    { label: 'All', value: 'all', icon: '🏢' },
    { label: 'Active', value: 'Active', icon: '✅' },
    { label: 'In Progress', value: 'In Progress', icon: '⚡' },
    { label: 'Draft', value: 'Draft', icon: '📝' },
];

const categoryFilter = ['All Categories', 'Sales', 'HR', 'Finance', 'Marketing', 'Operations', 'Documentation'];

export default function WorkspaceBuilderPage() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedCategory, setSelectedCategory] = useState('All Categories');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredWorkspaces = workspaceTemplates.filter((workspace) => {
        const matchesFilter = activeFilter === 'all' || workspace.status === activeFilter;
        const matchesCategory =
            selectedCategory === 'All Categories' || workspace.category === selectedCategory;
        const matchesSearch =
            searchQuery === '' ||
            workspace.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            workspace.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesCategory && matchesSearch;
    });

    const getStatusStyles = (status: string) => {
        switch (status) {
            case 'Active':
                return 'bg-teal-100 text-teal-700';
            case 'In Progress':
                return 'bg-blue-100 text-blue-700';
            case 'Draft':
                return 'bg-gray-100 text-gray-700';
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
                                    <Icon name="grid" size={20} className="text-white" />
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold text-gray-900">Workspace Builder</h1>
                                    <p className="text-xs text-gray-500">Create and manage workspaces</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center bg-white border border-gray-200 rounded-lg px-3 py-2 w-56">
                                    <Icon name="search" size={14} className="text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search workspaces..."
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
                                    New Workspace
                                </button>
                            </div>
                        </div>

                        {/* Stats Strip */}
                        <div className="grid grid-cols-3 gap-3 mb-5">
                            {[
                                { label: 'Total Workspaces', value: '12', sub: 'Across all teams' },
                                { label: 'Active Builds', value: '3', sub: 'In progress' },
                                { label: 'Templates', value: '8', sub: 'Ready to use' },
                            ].map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg p-3 border border-gray-200 flex items-center justify-between hover:shadow-md transition cursor-pointer group"
                                >
                                    <div>
                                        <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">
                                            {stat.label}
                                        </p>
                                        <p className="text-lg font-bold text-gray-900 mt-0.5 group-hover:text-teal-600 transition">
                                            {stat.value}
                                        </p>
                                        <p className="text-[10px] text-gray-400">{stat.sub}</p>
                                    </div>
                                    <div className="w-8 h-8 rounded-md bg-teal-50 group-hover:bg-teal-100 flex items-center justify-center transition">
                                        <Icon name="grid" size={14} className="text-teal-600" />
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
                                Showing {filteredWorkspaces.length} workspace{filteredWorkspaces.length !== 1 ? 's' : ''}
                            </div>
                        </div>

                        {/* Workspaces Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {filteredWorkspaces.map((workspace) => (
                                <div
                                    key={workspace.id}
                                    className="group bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-teal-200 transition-all cursor-pointer"
                                >
                                    <div className="flex items-start gap-3">
                                        {/* Icon */}
                                        <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-xl shrink-0 group-hover:bg-teal-100 transition-colors">
                                            {workspace.icon}
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            {/* Header */}
                                            <div className="flex items-start justify-between gap-2 mb-1.5">
                                                <h3 className="text-xs font-bold text-gray-900 leading-tight group-hover:text-teal-600 transition">
                                                    {workspace.name}
                                                </h3>
                                                <span
                                                    className={`text-[9px] px-1.5 py-0.5 rounded-md shrink-0 ${getStatusStyles(
                                                        workspace.status
                                                    )}`}
                                                >
                                                    {workspace.status}
                                                </span>
                                            </div>

                                            {/* Description */}
                                            <p className="text-xs text-gray-600 mb-2.5 leading-relaxed line-clamp-2">
                                                {workspace.description}
                                            </p>

                                            {/* Meta Info */}
                                            <div className="flex items-center gap-3 text-[10px] text-gray-500 flex-wrap mb-2.5">
                                                <div className="flex items-center gap-1">
                                                    <Icon name="grid" size={10} className="text-gray-400" />
                                                    <span>{workspace.components} components</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Icon name="users" size={10} className="text-gray-400" />
                                                    <span>{workspace.team} members</span>
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <Icon name="clock" size={10} className="text-gray-400" />
                                                    <span>{workspace.lastEdited}</span>
                                                </div>
                                            </div>

                                            {/* Category & Actions */}
                                            <div className="pt-2.5 border-t border-gray-100 flex items-center gap-3">
                                                <span className="text-[9px] font-medium text-teal-600 bg-teal-50 px-1.5 py-0.5 rounded">
                                                    {workspace.category}
                                                </span>
                                                <div className="ml-auto flex items-center gap-1.5">
                                                    <button className="text-[10px] font-semibold text-gray-600 hover:text-teal-600 transition cursor-pointer">
                                                        Edit
                                                    </button>
                                                    <span className="text-gray-300">|</span>
                                                    <button className="text-[10px] font-semibold text-gray-600 hover:text-teal-600 transition cursor-pointer">
                                                        Preview
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Empty State */}
                        {filteredWorkspaces.length === 0 && (
                            <div className="text-center py-16">
                                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3">
                                    <Icon name="grid" size={20} className="text-gray-400" />
                                </div>
                                <p className="text-xs font-semibold text-gray-900 mb-1">No workspaces found</p>
                                <p className="text-[10px] text-gray-500">Try adjusting your filters</p>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            {/* Right Panel */}
            <WorkspaceBuilderRightPanel />
        </div>
    );
}