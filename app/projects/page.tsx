'use client';
import { useState } from 'react';
import TopBar from '@/components/topbar';
import ProjectsRightPanel from '@/components/right-panels/ProjectsRightPanel';
import Icon from '@/components/icon';

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const stats = [
        { label: 'Total Projects', value: '124', sub: 'Across all teams' },
        { label: 'On Track', value: '89', sub: '72% completion rate' },
        { label: 'At Risk', value: '18', sub: 'Need attention' },
    ];

    const allProjects = [
        { id: 1, name: 'Website Redesign', client: 'ABC Corp', progress: 78, status: 'on-track', deadline: 'Dec 30', team: 6, tasks: 42, completed: 33, priority: 'high' },
        { id: 2, name: 'Mobile App v2.0', client: 'TechCorp', progress: 45, status: 'on-track', deadline: 'Jan 15', team: 8, tasks: 64, completed: 29, priority: 'high' },
        { id: 3, name: 'Data Migration', client: 'Global Solutions', progress: 92, status: 'on-track', deadline: 'Dec 20', team: 4, tasks: 28, completed: 26, priority: 'medium' },
        { id: 4, name: 'CRM Integration', client: 'Enterprise Sys', progress: 34, status: 'at-risk', deadline: 'Dec 25', team: 5, tasks: 36, completed: 12, priority: 'high' },
        { id: 5, name: 'Security Audit', client: 'Innovation Partners', progress: 61, status: 'on-track', deadline: 'Jan 5', team: 3, tasks: 18, completed: 11, priority: 'medium' },
        { id: 6, name: 'API Gateway', client: 'StartUp Hub', progress: 15, status: 'at-risk', deadline: 'Jan 20', team: 4, tasks: 52, completed: 8, priority: 'low' },
    ];

    // Filter logic
    const filteredProjects = allProjects.filter((project) => {
        const matchesFilter = activeFilter === 'all' || project.status === activeFilter;
        const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.client.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    const milestones = [
        { title: 'Website Redesign - QA Phase', date: 'Dec 22', status: 'upcoming' },
        { title: 'Data Migration - Final Review', date: 'Dec 18', status: 'today' },
        { title: 'CRM Integration - Sprint 3', date: 'Dec 24', status: 'upcoming' },
        { title: 'Mobile App - Beta Release', date: 'Jan 10', status: 'future' },
    ];

    const teamLoad = [
        { name: 'Design Team', active: 4, capacity: 85 },
        { name: 'Engineering', active: 6, capacity: 92 },
        { name: 'QA Team', active: 3, capacity: 68 },
        { name: 'DevOps', active: 2, capacity: 45 },
    ];

    const handleProjectClick = (projectName: string) => {
        console.log('Clicked project:', projectName);
    };

    const handleMilestoneClick = (milestoneTitle: string) => {
        console.log('Clicked milestone:', milestoneTitle);
    };

    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">
            <div className="flex-1 flex flex-col overflow-hidden">
                <TopBar />

                <div className="flex-1 overflow-y-auto">
                    <div className="max-w-7xl mx-auto px-6 py-6">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-5">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-teal-600 flex items-center justify-center">
                                    <Icon name="kanban" size={20} className="text-white" />
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold text-gray-900">Projects</h1>
                                    <p className="text-xs text-gray-500">124 active projects across teams</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center bg-white border border-gray-200 rounded-lg px-3 py-2 w-56">
                                    <Icon name="search" size={14} className="text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search projects..."
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
                                    New Project
                                </button>
                            </div>
                        </div>

                        {/* Stats Strip */}
                        <div className="grid grid-cols-3 gap-3 mb-5">
                            {stats.map((stat, index) => (
                                <div key={index} className="bg-white rounded-lg p-3 border border-gray-200 flex items-center justify-between hover:shadow-md transition cursor-pointer group">
                                    <div>
                                        <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">{stat.label}</p>
                                        <p className="text-lg font-bold text-gray-900 mt-0.5 group-hover:text-teal-600 transition">{stat.value}</p>
                                        <p className="text-[10px] text-gray-400">{stat.sub}</p>
                                    </div>
                                    <div className="w-8 h-8 rounded-md bg-teal-50 group-hover:bg-teal-100 flex items-center justify-center transition">
                                        <Icon name="kanban" size={14} className="text-teal-600" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                            {/* Main Content */}
                            <div className="lg:col-span-2 space-y-5">
                                {/* Project Overview Banner */}
                                <div className="bg-linear-to-br from-teal-600 to-teal-700 rounded-xl p-5 text-white cursor-pointer hover:shadow-xl transition">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-11 h-11 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20">
                                                <Icon name="graph" size={22} className="text-white" />
                                            </div>
                                            <div>
                                                <h2 className="font-bold text-base">Sprint Overview</h2>
                                                <p className="text-xs text-teal-100">Week 51 • Dec 16 - Dec 22</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 text-right">
                                            <div>
                                                <p className="text-2xl font-bold">72%</p>
                                                <p className="text-[10px] text-teal-100">Completion</p>
                                            </div>
                                            <div className="w-px h-10 bg-white/20" />
                                            <div>
                                                <p className="text-2xl font-bold">156</p>
                                                <p className="text-[10px] text-teal-100">Tasks Done</p>
                                            </div>
                                            <div className="w-px h-10 bg-white/20" />
                                            <div>
                                                <p className="text-2xl font-bold">12</p>
                                                <p className="text-[10px] text-teal-100">Overdue</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                                        <div className="h-full w-[72%] bg-white rounded-full" />
                                    </div>
                                    <div className="flex justify-between mt-2 text-[10px] text-teal-100">
                                        <span>62 of 86 tasks completed</span>
                                        <span>3 days remaining</span>
                                    </div>
                                </div>

                                {/* Projects List */}
                                <div className="bg-white rounded-xl border border-gray-200">
                                    <div className="p-3 border-b border-gray-100 flex items-center justify-between">
                                        <div className="flex gap-1">
                                            {['all', 'on-track', 'at-risk'].map((filter) => (
                                                <button
                                                    key={filter}
                                                    onClick={() => setActiveFilter(filter)}
                                                    className={`px-3 py-1.5 rounded-md text-xs font-semibold transition capitalize cursor-pointer ${activeFilter === filter
                                                        ? 'bg-teal-600 text-white'
                                                        : 'text-gray-600 hover:bg-gray-100'
                                                        }`}
                                                >
                                                    {filter === 'all' ? 'All Projects' : filter.replace('-', ' ')}
                                                </button>
                                            ))}
                                        </div>
                                        <span className="text-[10px] text-gray-500 font-medium">
                                            {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
                                        </span>
                                    </div>

                                    <div className="divide-y divide-gray-100">
                                        {filteredProjects.length > 0 ? (
                                            filteredProjects.map((project) => (
                                                <div
                                                    key={project.id}
                                                    onClick={() => handleProjectClick(project.name)}
                                                    className="p-3.5 hover:bg-gray-50 transition cursor-pointer group"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <div className={`w-1.5 h-10 rounded-full shrink-0 ${project.status === 'on-track' ? 'bg-teal-600' : 'bg-orange-500'
                                                            }`} />
                                                        <div className="flex-1 min-w-0">
                                                            <div className="flex items-center gap-2 mb-1">
                                                                <h3 className="font-semibold text-gray-900 text-xs truncate group-hover:text-teal-600 transition">
                                                                    {project.name}
                                                                </h3>
                                                                <span className={`text-[9px] px-1.5 py-0.5 rounded font-medium capitalize ${project.priority === 'high' ? 'bg-red-50 text-red-700' :
                                                                    project.priority === 'medium' ? 'bg-blue-50 text-blue-700' :
                                                                        'bg-gray-100 text-gray-600'
                                                                    }`}>
                                                                    {project.priority}
                                                                </span>
                                                            </div>
                                                            <div className="flex items-center gap-3 text-[10px] text-gray-500">
                                                                <span>{project.client}</span>
                                                                <span>•</span>
                                                                <span className="flex items-center gap-1">
                                                                    <Icon name="users" size={10} />
                                                                    {project.team}
                                                                </span>
                                                                <span>•</span>
                                                                <span>{project.completed}/{project.tasks} tasks</span>
                                                                <span>•</span>
                                                                <span className="flex items-center gap-1">
                                                                    <Icon name="calendar" size={10} />
                                                                    {project.deadline}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="text-right min-w-25">
                                                            <div className="flex items-center justify-end gap-2 mb-1">
                                                                <span className="text-xs font-bold text-gray-900">{project.progress}%</span>
                                                                <span className={`text-[9px] px-1.5 py-0.5 rounded font-medium capitalize ${project.status === 'on-track' ? 'bg-green-50 text-green-700' : 'bg-orange-50 text-orange-700'
                                                                    }`}>
                                                                    {project.status.replace('-', ' ')}
                                                                </span>
                                                            </div>
                                                            <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                                                <div
                                                                    className={`h-full rounded-full transition-all ${project.status === 'on-track' ? 'bg-teal-600' : 'bg-orange-500'
                                                                        }`}
                                                                    style={{ width: `${project.progress}%` }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="p-8 text-center">
                                                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3">
                                                    <Icon name="search" size={20} className="text-gray-400" />
                                                </div>
                                                <p className="text-sm font-semibold text-gray-900 mb-1">No projects found</p>
                                                <p className="text-xs text-gray-500">Try adjusting your search or filter</p>
                                            </div>
                                        )}
                                    </div>

                                    {filteredProjects.length > 0 && (
                                        <div className="p-3 border-t border-gray-100 text-center">
                                            <button className="text-xs text-teal-600 font-semibold hover:text-teal-700 cursor-pointer">
                                                View All Projects →
                                            </button>
                                        </div>
                                    )}
                                </div>

                                {/* Milestones & Team Load */}
                                <div className="grid grid-cols-2 gap-5">
                                    {/* Milestones */}
                                    <div className="bg-white rounded-xl border border-gray-200 p-4">
                                        <h3 className="font-bold text-gray-900 mb-3 text-xs flex items-center gap-2">
                                            <Icon name="calendar" size={14} className="text-teal-600" />
                                            Upcoming Milestones
                                        </h3>
                                        <div className="space-y-2.5">
                                            {milestones.map((milestone, index) => (
                                                <div
                                                    key={index}
                                                    onClick={() => handleMilestoneClick(milestone.title)}
                                                    className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-gray-50 transition cursor-pointer group"
                                                >
                                                    <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${milestone.status === 'today' ? 'bg-teal-600' : milestone.status === 'upcoming' ? 'bg-blue-500' : 'bg-gray-300'
                                                        }`} />
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-[10px] font-semibold text-gray-900 leading-tight truncate group-hover:text-teal-600 transition">
                                                            {milestone.title}
                                                        </p>
                                                        <p className="text-[9px] text-gray-500">{milestone.date}</p>
                                                    </div>
                                                    <span className={`text-[9px] px-1.5 py-0.5 rounded font-medium capitalize ${milestone.status === 'today' ? 'bg-teal-50 text-teal-700' : 'bg-gray-100 text-gray-600'
                                                        }`}>
                                                        {milestone.status}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Team Load */}
                                    <div className="bg-white rounded-xl border border-gray-200 p-4">
                                        <h3 className="font-bold text-gray-900 mb-3 text-xs flex items-center gap-2">
                                            <Icon name="users" size={14} className="text-teal-600" />
                                            Team Capacity
                                        </h3>
                                        <div className="space-y-3">
                                            {teamLoad.map((team, index) => (
                                                <div key={index} className="cursor-pointer group">
                                                    <div className="flex items-center justify-between mb-1">
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-[10px] font-medium text-gray-700 group-hover:text-teal-700 transition">
                                                                {team.name}
                                                            </span>
                                                            <span className="text-[9px] text-gray-400">{team.active} active</span>
                                                        </div>
                                                        <span className={`text-[10px] font-bold ${team.capacity > 85 ? 'text-red-600' : team.capacity > 60 ? 'text-teal-600' : 'text-blue-600'
                                                            }`}>
                                                            {team.capacity}%
                                                        </span>
                                                    </div>
                                                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                                        <div
                                                            className={`h-full rounded-full transition-all ${team.capacity > 85 ? 'bg-red-500' : team.capacity > 60 ? 'bg-teal-600' : 'bg-blue-500'
                                                                }`}
                                                            style={{ width: `${team.capacity}%` }}
                                                        />
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
                                <div className="bg-teal-600 rounded-xl p-4 text-white">
                                    <h3 className="font-bold text-xs mb-3 flex items-center gap-2">
                                        <Icon name="zap" size={14} />
                                        Quick Actions
                                    </h3>
                                    <div className="space-y-1.5">
                                        <button className="w-full py-2 bg-white/15 hover:bg-white/25 rounded-lg text-[10px] font-semibold transition backdrop-blur-sm text-left px-3 flex items-center gap-2 cursor-pointer">
                                            <Icon name="plus" size={12} />
                                            Create Project
                                        </button>
                                        <button className="w-full py-2 bg-white/15 hover:bg-white/25 rounded-lg text-[10px] font-semibold transition backdrop-blur-sm text-left px-3 flex items-center gap-2 cursor-pointer">
                                            <Icon name="check-square" size={12} />
                                            Add Task
                                        </button>
                                        <button className="w-full py-2 bg-white/15 hover:bg-white/25 rounded-lg text-[10px] font-semibold transition backdrop-blur-sm text-left px-3 flex items-center gap-2 cursor-pointer">
                                            <Icon name="graph" size={12} />
                                            Sprint Report
                                        </button>
                                    </div>
                                </div>

                                {/* Priority Breakdown */}
                                <div className="bg-white rounded-xl border border-gray-200 p-4">
                                    <h3 className="font-bold text-gray-900 mb-3 text-xs flex items-center gap-2">
                                        <Icon name="alert" size={14} className="text-teal-600" />
                                        Priority Breakdown
                                    </h3>
                                    <div className="space-y-2.5">
                                        {[
                                            { label: 'High Priority', count: 34, color: 'red', pct: 27 },
                                            { label: 'Medium Priority', count: 56, color: 'blue', pct: 45 },
                                            { label: 'Low Priority', count: 34, color: 'gray', pct: 28 },
                                        ].map((item, index) => (
                                            <div key={index} className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-gray-50 transition cursor-pointer group">
                                                <div className={`w-2 h-2 rounded-full bg-${item.color}-500`} />
                                                <span className="text-[10px] font-medium text-gray-700 flex-1 group-hover:text-teal-700 transition">
                                                    {item.label}
                                                </span>
                                                <span className="text-[10px] font-bold text-gray-900">{item.count}</span>
                                                <span className="text-[9px] text-gray-400 w-8 text-right">{item.pct}%</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Recent Activity */}
                                <div className="bg-white rounded-xl border border-gray-200 p-4">
                                    <h3 className="font-bold text-gray-900 mb-3 text-xs flex items-center gap-2">
                                        <Icon name="sparkles" size={14} className="text-teal-600" />
                                        Recent Activity
                                    </h3>
                                    <div className="space-y-2">
                                        {[
                                            { icon: 'check-square', text: 'Design review completed', time: '15m' },
                                            { icon: 'plus', text: 'New task added to API Gateway', time: '1h' },
                                            { icon: 'alert', text: 'CRM deadline approaching', time: '3h' },
                                            { icon: 'users', text: '2 members added to Mobile App', time: '5h' },
                                        ].map((activity, index) => (
                                            <div key={index} className="flex items-start gap-2 p-1.5 rounded hover:bg-gray-50 transition cursor-pointer group">
                                                <div className="w-6 h-6 rounded bg-teal-50 group-hover:bg-teal-100 flex items-center justify-center shrink-0 mt-0.5 transition">
                                                    <Icon name={activity.icon as any} size={10} className="text-teal-600" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-[10px] font-medium text-gray-800 leading-tight truncate group-hover:text-teal-700 transition">
                                                        {activity.text}
                                                    </p>
                                                    <p className="text-[9px] text-gray-400">{activity.time} ago</p>
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

            <ProjectsRightPanel />
        </div>
    );
}