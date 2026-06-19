'use client';
import Icon from '../icon';

export default function TimelineRightPanel() {
    const stats = [
        { label: 'Total Events', value: '1,247', change: '+12%', icon: '📊', color: 'teal' },
        { label: 'This Week', value: '34', change: '+5', icon: '📅', color: 'blue' },
        { label: 'Active Users', value: '12', change: '+2', icon: '👥', color: 'purple' },
    ];

    const recentActivity = [
        { icon: '📄', label: 'Invoice uploaded', time: '2 min ago', color: 'teal' },
        { icon: '👥', label: 'Meeting completed', time: '1 hour ago', color: 'orange' },
        { icon: '📧', label: 'Email received', time: '3 hours ago', color: 'blue' },
        { icon: '📋', label: 'Contract signed', time: '5 hours ago', color: 'pink' },
    ];

    const upcomingEvents = [
        { title: 'Q1 Review Meeting', date: 'Tomorrow, 2:00 PM', type: 'Meeting', icon: '📅' },
        { title: 'Contract Renewal', date: 'Jan 15, 2024', type: 'Contract', icon: '📄' },
        { title: 'Team Standup', date: 'Jan 16, 2024', type: 'Meeting', icon: '👥' },
    ];

    return (
        <aside className="w-80 bg-white border-l border-gray-200 h-screen flex flex-col shrink-0 overflow-hidden">
            {/* Header */}
            <div className="px-5 py-4 border-b border-gray-100 shrink-0">
                <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
                        <Icon name="calendar" size={16} className="text-teal-600" />
                    </div>
                    <div>
                        <h2 className="text-sm font-bold text-gray-900">Timeline Summary</h2>
                        <p className="text-xs text-gray-500">Activity overview</p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
                <div className="p-5 space-y-6">
                    {/* Stats Cards */}
                    <div className="space-y-3">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="bg-linear-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow cursor-pointer"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-2xl">{stat.icon}</span>
                                    <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                                        {stat.change}
                                    </span>
                                </div>
                                <div className="text-2xl font-bold text-gray-900 mb-0.5">{stat.value}</div>
                                <div className="text-xs text-gray-500">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Recent Activity */}
                    <div>
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                            <Icon name="sparkles" size={12} className="text-teal-600" />
                            Recent Activity
                        </h3>
                        <div className="space-y-2">
                            {recentActivity.map((activity, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                                >
                                    <div className="text-xl">{activity.icon}</div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-sm font-medium text-gray-900">{activity.label}</div>
                                        <div className="text-xs text-gray-500">{activity.time}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Upcoming Events */}
                    <div>
                        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                            <Icon name="calendar" size={12} className="text-teal-600" />
                            Upcoming
                        </h3>
                        <div className="space-y-2">
                            {upcomingEvents.map((event, index) => (
                                <div
                                    key={index}
                                    className="p-3 bg-linear-to-br from-teal-50/50 to-white border border-teal-100 rounded-xl hover:shadow-md transition-all cursor-pointer"
                                >
                                    <div className="flex items-start gap-2.5">
                                        <div className="text-lg">{event.icon}</div>
                                        <div className="flex-1 min-w-0">
                                            <div className="text-sm font-semibold text-gray-900 mb-0.5">{event.title}</div>
                                            <div className="text-xs text-gray-500">{event.date}</div>
                                            <div className="text-[10px] font-medium text-teal-600 mt-1">{event.type}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="pt-4 border-t border-gray-100">
                        <button className="w-full py-2.5 bg-teal-600 text-white rounded-lg text-sm font-semibold hover:bg-teal-700 transition-all flex items-center justify-center gap-2 shadow-sm">
                            <Icon name="plus" size={14} strokeWidth={2.5} />
                            Add Event
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    );
}