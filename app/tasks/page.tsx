'use client';
import { useState } from 'react';
import TopBar from '@/components/topbar';
import TasksRightPanel from '@/components/right-panels/TasksRightPanel';
import Icon from '@/components/icon';

export default function Tasks() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const stats = [
        { label: 'Total Tasks', value: '284', sub: 'Across all projects' },
        { label: 'Completed Today', value: '42', sub: '15% of total' },
        { label: 'Overdue', value: '12', sub: 'Needs attention' },
    ];

    const allTasks = [
        { id: 1, title: 'Review Q4 financial reports', project: 'ABC Corp', dueDate: 'Today', priority: 'high', status: 'todo', assignee: 'SJ' },
        { id: 2, title: 'Update client presentation', project: 'TechCorp', dueDate: 'Today', priority: 'medium', status: 'in-progress', assignee: 'MC' },
        { id: 3, title: 'Schedule follow-up meeting', project: 'Global Solutions', dueDate: 'Tomorrow', priority: 'low', status: 'todo', assignee: 'LP' },
        { id: 4, title: 'Fix API authentication bug', project: 'API Gateway', dueDate: 'Yesterday', priority: 'high', status: 'in-progress', assignee: 'DK' },
        { id: 5, title: 'Draft marketing proposal', project: 'Innovation Partners', dueDate: 'Dec 22', priority: 'medium', status: 'todo', assignee: 'EW' },
        { id: 6, title: 'Onboard new team member', project: 'Internal', dueDate: 'Dec 20', priority: 'low', status: 'done', assignee: 'JW' },
    ];

    const filteredTasks = allTasks.filter((task) => {
        const matchesFilter = activeFilter === 'all' || task.status === activeFilter || (activeFilter === 'overdue' && task.dueDate === 'Yesterday');
        const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) || task.project.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    const taskDistribution = [
        { label: 'To Do', count: 142, color: 'gray', pct: 50 },
        { label: 'In Progress', count: 86, color: 'blue', pct: 30 },
        { label: 'Completed', count: 56, color: 'teal', pct: 20 },
    ];

    const teamWorkload = [
        { name: 'Sarah Johnson', tasks: 12, completed: 8 },
        { name: 'Mike Chen', tasks: 15, completed: 10 },
        { name: 'Lisa Park', tasks: 9, completed: 7 },
    ];

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
                                    <Icon name="check-square" size={20} className="text-white" />
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold text-gray-900">Tasks</h1>
                                    <p className="text-xs text-gray-500">284 tasks across your workspace</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center bg-white border border-gray-200 rounded-lg px-3 py-2 w-56">
                                    <Icon name="search" size={14} className="text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search tasks..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="ml-2 text-xs bg-transparent outline-none flex-1"
                                    />
                                    {searchQuery && (
                                        <button onClick={() => setSearchQuery('')} className="text-gray-400 hover:text-gray-600 transition cursor-pointer">
                                            <Icon name="plus" size={12} className="rotate-45" />
                                        </button>
                                    )}
                                </div>
                                <button className="px-3 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-xs font-semibold transition flex items-center gap-1.5 cursor-pointer">
                                    <Icon name="plus" size={14} />
                                    Add Task
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
                                        <Icon name="check-square" size={14} className="text-teal-600" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                            {/* Main Content */}
                            <div className="lg:col-span-2 space-y-5">
                                {/* Task Overview Banner */}
                                <div className="bg-linear-to-br from-teal-600 to-teal-700 rounded-xl p-5 text-white cursor-pointer hover:shadow-xl transition">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-11 h-11 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20">
                                                <Icon name="check-square" size={22} className="text-white" />
                                            </div>
                                            <div>
                                                <h2 className="font-bold text-base">Daily Focus</h2>
                                                <p className="text-xs text-teal-100">Dec 18 • Wednesday</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 text-right">
                                            <div>
                                                <p className="text-2xl font-bold">68%</p>
                                                <p className="text-[10px] text-teal-100">Completed</p>
                                            </div>
                                            <div className="w-px h-10 bg-white/20" />
                                            <div>
                                                <p className="text-2xl font-bold">18</p>
                                                <p className="text-[10px] text-teal-100">Pending</p>
                                            </div>
                                            <div className="w-px h-10 bg-white/20" />
                                            <div>
                                                <p className="text-2xl font-bold">4</p>
                                                <p className="text-[10px] text-teal-100">Overdue</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                                        <div className="h-full w-[68%] bg-white rounded-full" />
                                    </div>
                                    <div className="flex justify-between mt-2 text-[10px] text-teal-100">
                                        <span>42 of 62 tasks completed today</span>
                                        <span>Keep it up! 🚀</span>
                                    </div>
                                </div>

                                {/* Task List */}
                                <div className="bg-white rounded-xl border border-gray-200">
                                    <div className="p-3 border-b border-gray-100 flex items-center justify-between">
                                        <div className="flex gap-1">
                                            {['all', 'todo', 'in-progress', 'overdue'].map((filter) => (
                                                <button
                                                    key={filter}
                                                    onClick={() => setActiveFilter(filter)}
                                                    className={`px-3 py-1.5 rounded-md text-xs font-semibold transition capitalize cursor-pointer ${activeFilter === filter
                                                        ? 'bg-teal-600 text-white'
                                                        : 'text-gray-600 hover:bg-gray-100'
                                                        }`}
                                                >
                                                    {filter === 'all' ? 'All Tasks' : filter === 'todo' ? 'To Do' : filter === 'in-progress' ? 'In Progress' : 'Overdue'}
                                                </button>
                                            ))}
                                        </div>
                                        <span className="text-[10px] text-gray-500 font-medium">
                                            {filteredTasks.length} {filteredTasks.length === 1 ? 'task' : 'tasks'}
                                        </span>
                                    </div>

                                    <div className="divide-y divide-gray-100">
                                        {filteredTasks.length > 0 ? (
                                            filteredTasks.map((task) => (
                                                <div key={task.id} className="p-3.5 hover:bg-gray-50 transition cursor-pointer group flex items-center gap-3">
                                                    <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition ${task.status === 'done' ? 'bg-teal-600 border-teal-600' : 'border-gray-300 group-hover:border-teal-500'
                                                        }`}>
                                                        {task.status === 'done' && <Icon name="check-square" size={12} className="text-white" />}
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-center gap-2 mb-0.5">
                                                            <h3 className={`font-semibold text-xs truncate transition ${task.status === 'done' ? 'text-gray-400 line-through' : 'text-gray-900 group-hover:text-teal-600'}`}>
                                                                {task.title}
                                                            </h3>
                                                            <span className={`text-[9px] px-1.5 py-0.5 rounded font-medium capitalize ${task.priority === 'high' ? 'bg-red-50 text-red-700' :
                                                                task.priority === 'medium' ? 'bg-blue-50 text-blue-700' :
                                                                    'bg-gray-100 text-gray-600'
                                                                }`}>
                                                                {task.priority}
                                                            </span>
                                                        </div>
                                                        <div className="flex items-center gap-3 text-[10px] text-gray-500">
                                                            <span>{task.project}</span>
                                                            <span>•</span>
                                                            <span className={`flex items-center gap-1 ${task.dueDate === 'Yesterday' ? 'text-red-600 font-semibold' : ''}`}>
                                                                <Icon name="calendar" size={10} />
                                                                {task.dueDate}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="w-7 h-7 rounded-full bg-linear-to-br from-teal-500 to-teal-600 flex items-center justify-center text-[9px] font-bold text-white shrink-0">
                                                        {task.assignee}
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="p-8 text-center">
                                                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3">
                                                    <Icon name="search" size={20} className="text-gray-400" />
                                                </div>
                                                <p className="text-sm font-semibold text-gray-900 mb-1">No tasks found</p>
                                                <p className="text-xs text-gray-500">Try adjusting your search or filter</p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Distribution & Workload */}
                                <div className="grid grid-cols-2 gap-5">
                                    <div className="bg-white rounded-xl border border-gray-200 p-4">
                                        <h3 className="font-bold text-gray-900 mb-3 text-xs flex items-center gap-2">
                                            <Icon name="graph" size={14} className="text-teal-600" />
                                            Task Distribution
                                        </h3>
                                        <div className="space-y-2.5">
                                            {taskDistribution.map((item, index) => (
                                                <div key={index} className="cursor-pointer group">
                                                    <div className="flex items-center justify-between mb-1">
                                                        <div className="flex items-center gap-2">
                                                            <div className={`w-2 h-2 rounded-full bg-${item.color}-500`} />
                                                            <span className="text-[10px] font-medium text-gray-700 group-hover:text-teal-700 transition">{item.label}</span>
                                                        </div>
                                                        <span className="text-[10px] font-bold text-gray-900">{item.count}</span>
                                                    </div>
                                                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                                        <div className={`h-full bg-${item.color}-500 rounded-full transition-all`} style={{ width: `${item.pct}%` }} />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-xl border border-gray-200 p-4">
                                        <h3 className="font-bold text-gray-900 mb-3 text-xs flex items-center gap-2">
                                            <Icon name="users" size={14} className="text-teal-600" />
                                            Team Workload
                                        </h3>
                                        <div className="space-y-3">
                                            {teamWorkload.map((member, index) => (
                                                <div key={index} className="cursor-pointer group">
                                                    <div className="flex items-center justify-between mb-1">
                                                        <span className="text-[10px] font-medium text-gray-700 group-hover:text-teal-700 transition">{member.name}</span>
                                                        <span className="text-[10px] font-bold text-gray-900">{member.completed}/{member.tasks}</span>
                                                    </div>
                                                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                                        <div className="h-full bg-linear-to-r from-teal-500 to-teal-600 rounded-full transition-all" style={{ width: `${(member.completed / member.tasks) * 100}%` }} />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Inline Sidebar */}
                            <div className="space-y-4">
                                <div className="bg-teal-600 rounded-xl p-4 text-white">
                                    <h3 className="font-bold text-xs mb-3 flex items-center gap-2">
                                        <Icon name="zap" size={14} />
                                        Quick Actions
                                    </h3>
                                    <div className="space-y-1.5">
                                        <button className="w-full py-2 bg-white/15 hover:bg-white/25 rounded-lg text-[10px] font-semibold transition backdrop-blur-sm text-left px-3 flex items-center gap-2 cursor-pointer">
                                            <Icon name="plus" size={12} />
                                            Create Task
                                        </button>
                                        <button className="w-full py-2 bg-white/15 hover:bg-white/25 rounded-lg text-[10px] font-semibold transition backdrop-blur-sm text-left px-3 flex items-center gap-2 cursor-pointer">
                                            <Icon name="check-square" size={12} />
                                            Mark All Done
                                        </button>
                                        <button className="w-full py-2 bg-white/15 hover:bg-white/25 rounded-lg text-[10px] font-semibold transition backdrop-blur-sm text-left px-3 flex items-center gap-2 cursor-pointer">
                                            <Icon name="file" size={12} />
                                            Export CSV
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl border border-gray-200 p-4">
                                    <h3 className="font-bold text-gray-900 mb-3 text-xs flex items-center gap-2">
                                        <Icon name="alert" size={14} className="text-teal-600" />
                                        Priority Breakdown
                                    </h3>
                                    <div className="space-y-2.5">
                                        {[
                                            { label: 'High Priority', count: 34, color: 'red' },
                                            { label: 'Medium Priority', count: 112, color: 'blue' },
                                            { label: 'Low Priority', count: 138, color: 'gray' },
                                        ].map((item, index) => (
                                            <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition cursor-pointer group">
                                                <div className="flex items-center gap-2">
                                                    <div className={`w-2 h-2 rounded-full bg-${item.color}-500`} />
                                                    <span className="text-[10px] font-medium text-gray-700 group-hover:text-teal-700 transition">{item.label}</span>
                                                </div>
                                                <span className="text-[10px] font-bold text-gray-900">{item.count}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-white rounded-xl border border-gray-200 p-4">
                                    <h3 className="font-bold text-gray-900 mb-3 text-xs flex items-center gap-2">
                                        <Icon name="sparkles" size={14} className="text-teal-600" />
                                        Recent Activity
                                    </h3>
                                    <div className="space-y-2">
                                        {[
                                            { icon: 'check-square', text: 'API bug fixed by Mike', time: '10m' },
                                            { icon: 'plus', text: 'New task: Q4 Review', time: '1h' },
                                            { icon: 'alert', text: '2 tasks overdue', time: '3h' },
                                            { icon: 'users', text: 'Lisa completed 3 tasks', time: '5h' },
                                        ].map((activity, index) => (
                                            <div key={index} className="flex items-start gap-2 p-1.5 rounded hover:bg-gray-50 transition cursor-pointer group">
                                                <div className="w-6 h-6 rounded bg-teal-50 group-hover:bg-teal-100 flex items-center justify-center shrink-0 mt-0.5 transition">
                                                    <Icon name={activity.icon as any} size={10} className="text-teal-600" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-[10px] font-medium text-gray-800 leading-tight truncate group-hover:text-teal-700 transition">{activity.text}</p>
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

            <TasksRightPanel />
        </div>
    );
}