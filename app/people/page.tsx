'use client';
import { useState } from 'react';
import TopBar from '@/components/topbar';
import PeopleRightPanel from '@/components/right-panels/PeoplesRightPanel';
import Icon from '@/components/icon';

export default function People() {
    const [activeDept, setActiveDept] = useState('all');

    const people = [
        { name: 'Sarah Johnson', role: 'VP of Sales', company: 'ABC Corporation', initials: 'SJ', health: 96, lastContact: '2h ago', status: 'Active' },
        { name: 'Mike Chen', role: 'CTO', company: 'TechCorp Industries', initials: 'MC', health: 91, lastContact: '5h ago', status: 'Active' },
        { name: 'Lisa Park', role: 'Head of Design', company: 'Global Solutions', initials: 'LP', health: 87, lastContact: '1d ago', status: 'Active' },
        { name: 'David Kim', role: 'CFO', company: 'Innovation Partners', initials: 'DK', health: 72, lastContact: '5d ago', status: 'Prospect' },
        { name: 'Emily Watson', role: 'CEO', company: 'StartUp Hub', initials: 'EW', health: 58, lastContact: '12d ago', status: 'Prospect' },
        { name: 'James Wilson', role: 'Product Manager', company: 'Enterprise Systems', initials: 'JW', health: 84, lastContact: '2d ago', status: 'Active' },
    ];

    const departments = [
        { name: 'Leadership', count: 42, color: 'teal' },
        { name: 'Sales', count: 128, color: 'blue' },
        { name: 'Engineering', count: 156, color: 'purple' },
        { name: 'Marketing', count: 89, color: 'orange' },
        { name: 'Operations', count: 67, color: 'green' },
    ];

    const stats = [
        { label: 'Total Contacts', value: '6,432', icon: 'users' },
        { label: 'Active People', value: '4,821', icon: 'check-square' },
        { label: 'Avg Health Score', value: '84%', icon: 'sparkles' },
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
                                    <Icon name="users" size={20} className="text-white" />
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold text-gray-900">People</h1>
                                    <p className="text-xs text-gray-500">6,432 contacts across your network</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center bg-white border border-gray-200 rounded-lg px-3 py-2 w-64">
                                    <Icon name="search" size={14} className="text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search people..."
                                        className="ml-2 text-xs bg-transparent outline-none flex-1"
                                    />
                                    <span className="text-[9px] text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded">⌘K</span>
                                </div>
                                <button className="px-3 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-xs font-semibold transition flex items-center gap-1.5">
                                    <Icon name="plus" size={14} />
                                    Add Person
                                </button>
                            </div>
                        </div>

                        {/* Stats Strip */}
                        <div className="grid grid-cols-3 gap-3 mb-5">
                            {stats.map((stat, index) => (
                                <div key={index} className="bg-white rounded-lg p-3 border border-gray-200 flex items-center justify-between">
                                    <div>
                                        <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">{stat.label}</p>
                                        <p className="text-lg font-bold text-gray-900 mt-0.5">{stat.value}</p>
                                    </div>
                                    <div className="w-8 h-8 rounded-md bg-teal-50 flex items-center justify-center">
                                        <Icon name={stat.icon as any} size={14} className="text-teal-600" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                            {/* Main Content */}
                            <div className="lg:col-span-2 space-y-5">
                                {/* People List */}
                                <div className="bg-white rounded-xl border border-gray-200">
                                    <div className="p-3 border-b border-gray-100 flex items-center justify-between">
                                        <div className="flex gap-1">
                                            {['all', 'active', 'prospect'].map((filter) => (
                                                <button
                                                    key={filter}
                                                    onClick={() => setActiveDept(filter)}
                                                    className={`px-3 py-1.5 rounded-md text-xs font-semibold transition ${activeDept === filter
                                                        ? 'bg-teal-600 text-white'
                                                        : 'text-gray-600 hover:bg-gray-100'
                                                        }`}
                                                >
                                                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                                                </button>
                                            ))}
                                        </div>
                                        <span className="text-[10px] text-gray-500 font-medium">{people.length} people</span>
                                    </div>

                                    <div className="divide-y divide-gray-100">
                                        {people.map((person, index) => (
                                            <div key={index} className="p-3.5 hover:bg-gray-50 transition cursor-pointer">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-teal-500 to-teal-600 flex items-center justify-center shrink-0 text-white text-xs font-bold">
                                                        {person.initials}
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <div className="flex items-center gap-2 mb-0.5">
                                                            <h3 className="font-semibold text-gray-900 text-xs truncate">{person.name}</h3>
                                                            <span className={`text-[9px] px-1.5 py-0.5 rounded font-medium ${person.status === 'Active' ? 'bg-green-50 text-green-700' : 'bg-blue-50 text-blue-700'
                                                                }`}>
                                                                {person.status}
                                                            </span>
                                                        </div>
                                                        <p className="text-[10px] text-gray-500">{person.role} • {person.company}</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="text-[10px] text-gray-400 mb-1">{person.lastContact}</p>
                                                        <div className="flex items-center gap-1.5">
                                                            <div className="w-12 h-1 bg-gray-100 rounded-full overflow-hidden">
                                                                <div
                                                                    className="h-full bg-teal-600 rounded-full"
                                                                    style={{ width: `${person.health}%` }}
                                                                />
                                                            </div>
                                                            <span className="text-[9px] font-semibold text-gray-700">{person.health}%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="p-3 border-t border-gray-100 text-center">
                                        <button className="text-xs text-teal-600 font-semibold hover:text-teal-700">
                                            View All 6,432 People →
                                        </button>
                                    </div>
                                </div>

                                {/* Department Breakdown + Recent Additions */}
                                <div className="grid grid-cols-2 gap-5">
                                    <div className="bg-white rounded-xl border border-gray-200 p-4">
                                        <h3 className="font-bold text-gray-900 mb-3 text-xs flex items-center gap-2">
                                            <Icon name="graph" size={14} className="text-teal-600" />
                                            By Department
                                        </h3>
                                        <div className="space-y-2.5">
                                            {departments.map((dept, index) => (
                                                <div key={index} className="group cursor-pointer">
                                                    <div className="flex items-center justify-between mb-1">
                                                        <div className="flex items-center gap-2">
                                                            <div className={`w-2 h-2 rounded-full bg-${dept.color}-500`} />
                                                            <span className="text-[10px] font-medium text-gray-700 group-hover:text-teal-700 transition">
                                                                {dept.name}
                                                            </span>
                                                        </div>
                                                        <span className="text-[10px] font-bold text-gray-900">{dept.count}</span>
                                                    </div>
                                                    <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
                                                        <div
                                                            className={`h-full bg-${dept.color}-500 rounded-full`}
                                                            style={{ width: `${(dept.count / 156) * 100}%` }}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-xl border border-gray-200 p-4">
                                        <h3 className="font-bold text-gray-900 mb-3 text-xs flex items-center gap-2">
                                            <Icon name="sparkles" size={14} className="text-teal-600" />
                                            Recent Additions
                                        </h3>
                                        <div className="space-y-2">
                                            {[
                                                { name: 'Anna Lee', role: 'Designer', time: '15m' },
                                                { name: 'Tom Harris', role: 'Engineer', time: '1h' },
                                                { name: 'Rachel Green', role: 'Manager', time: '3h' },
                                                { name: 'Chris Evans', role: 'Analyst', time: '5h' },
                                            ].map((person, index) => (
                                                <div key={index} className="flex items-start gap-2 p-1.5 rounded hover:bg-gray-50 transition cursor-pointer">
                                                    <div className="w-6 h-6 rounded-full bg-linear-to-br from-teal-100 to-teal-50 flex items-center justify-center shrink-0 text-[9px] font-bold text-teal-600">
                                                        {person.name.split(' ').map(n => n[0]).join('')}
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="text-[10px] font-medium text-gray-800 leading-tight truncate">{person.name}</p>
                                                        <p className="text-[9px] text-gray-500">{person.role} • {person.time} ago</p>
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
                                        <button className="w-full py-2 bg-white/15 hover:bg-white/25 rounded-lg text-[10px] font-semibold transition backdrop-blur-sm text-left px-3 flex items-center gap-2">
                                            <Icon name="file" size={12} />
                                            Import Contacts
                                        </button>
                                        <button className="w-full py-2 bg-white/15 hover:bg-white/25 rounded-lg text-[10px] font-semibold transition backdrop-blur-sm text-left px-3 flex items-center gap-2">
                                            <Icon name="users" size={12} />
                                            Sync Directory
                                        </button>
                                        <button className="w-full py-2 bg-white/15 hover:bg-white/25 rounded-lg text-[10px] font-semibold transition backdrop-blur-sm text-left px-3 flex items-center gap-2">
                                            <Icon name="graph" size={12} />
                                            Export List
                                        </button>
                                    </div>
                                </div>

                                {/* Top Contacts */}
                                <div className="bg-white rounded-xl border border-gray-200 p-4">
                                    <h3 className="font-bold text-gray-900 mb-3 text-xs flex items-center gap-2">
                                        <Icon name="trending-up" size={14} className="text-teal-600" />
                                        Top Contacts
                                    </h3>
                                    <div className="space-y-2">
                                        {people.slice(0, 4).map((person, index) => (
                                            <div key={index} className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-gray-50 transition cursor-pointer">
                                                <div className="w-6 h-6 rounded-md bg-linear-to-br from-teal-100 to-teal-50 flex items-center justify-center shrink-0 text-[9px] font-bold text-teal-600">
                                                    {index + 1}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-[10px] font-semibold text-gray-800 leading-tight truncate">{person.name}</p>
                                                    <p className="text-[9px] text-gray-500 truncate">{person.role}</p>
                                                </div>
                                                <span className="text-[9px] font-bold text-teal-600 bg-teal-50 px-1.5 py-0.5 rounded">
                                                    {person.health}%
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Contact Health */}
                                <div className="bg-white rounded-xl border border-gray-200 p-4">
                                    <h3 className="font-bold text-gray-900 mb-3 text-xs flex items-center gap-2">
                                        <Icon name="sparkles" size={14} className="text-teal-600" />
                                        Network Health
                                    </h3>
                                    <div className="flex items-center justify-between mb-3 pb-3 border-b border-gray-100">
                                        <span className="text-2xl font-bold text-teal-600">84%</span>
                                        <span className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">Overall</span>
                                    </div>
                                    <div className="space-y-2.5">
                                        <div>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-[10px] text-gray-600 font-medium">Active</span>
                                                <span className="text-[10px] font-bold text-gray-900">75%</span>
                                            </div>
                                            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                                <div className="h-full w-[75%] bg-linear-to-r from-teal-500 to-teal-600 rounded-full" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="flex justify-between mb-1">
                                                <span className="text-[10px] text-gray-600 font-medium">Needs Follow-up</span>
                                                <span className="text-[10px] font-bold text-gray-900">25%</span>
                                            </div>
                                            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                                <div className="h-full w-[25%] bg-linear-to-r from-orange-500 to-orange-600 rounded-full" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <PeopleRightPanel />
        </div>
    );
}