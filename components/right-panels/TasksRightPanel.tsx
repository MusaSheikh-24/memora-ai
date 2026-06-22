'use client';
import Icon from '../icon';

export default function TasksRightPanel() {
    const quickStats = [
        { label: 'To Do', value: '142', icon: 'check-square' },
        { label: 'Active', value: '86', icon: 'zap' },
        { label: 'Done', value: '56', icon: 'check-square' },
    ];

    const todaysFocus = [
        { title: 'Review Q4 reports', time: '2:00 PM', priority: 'high' },
        { title: 'Client presentation', time: '4:30 PM', priority: 'medium' },
        { title: 'Team standup notes', time: '5:00 PM', priority: 'low' },
    ];

    const quickFilters = [
        { label: 'High Priority', value: '34', icon: 'alert' },
        { label: 'Overdue', value: '12', icon: 'clock' },
        { label: 'My Tasks', value: '18', icon: 'users' },
    ];

    return (
        <aside className="w-80 bg-white border-l border-gray-200 h-screen overflow-hidden shrink-0">
            <div className="px-4 py-3 space-y-3.5">
                {/* Header */}
                <div className="flex items-center gap-2.5 pb-3 border-b border-gray-100">
                    <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center">
                        <Icon name="check-square" size={16} className="text-white" />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-sm font-bold text-gray-900">Tasks</h2>
                        <p className="text-[10px] text-gray-500">Daily focus</p>
                    </div>
                    <button className="w-7 h-7 rounded-md hover:bg-gray-100 flex items-center justify-center transition cursor-pointer">
                        <Icon name="more" size={14} className="text-gray-500" />
                    </button>
                </div>

                {/* Focus Score */}
                <div className="bg-linear-to-br from-teal-600 to-teal-700 rounded-xl p-3.5 text-white cursor-pointer hover:shadow-xl transition">
                    <div className="flex items-center justify-between mb-2">
                        <div>
                            <p className="text-[10px] text-teal-100 font-medium">Daily Completion</p>
                            <p className="text-2xl font-bold">68%</p>
                        </div>
                        <div className="w-10 h-10 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20">
                            <Icon name="sparkles" size={18} className="text-white" />
                        </div>
                    </div>
                    <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full w-[68%] bg-white rounded-full" />
                    </div>
                    <div className="flex justify-between mt-2 text-[9px] text-teal-100">
                        <span>42/62 tasks</span>
                        <span>Great pace!</span>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-1.5">
                    {quickStats.map((stat, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-2 text-center hover:bg-teal-50 transition cursor-pointer group">
                            <div className="w-6 h-6 mx-auto mb-1 rounded bg-white group-hover:bg-teal-100 flex items-center justify-center shadow-sm transition">
                                <Icon name={stat.icon as any} size={12} className="text-gray-600 group-hover:text-teal-600" />
                            </div>
                            <p className="text-xs font-bold text-gray-900 leading-tight group-hover:text-teal-600 transition">{stat.value}</p>
                            <p className="text-[8px] text-gray-500 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Today's Focus */}
                <div>
                    <h3 className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Today's Focus</h3>
                    <div className="space-y-1.5">
                        {todaysFocus.map((task, index) => (
                            <div key={index} className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-gray-50 transition cursor-pointer group">
                                <div className={`w-1.5 h-8 rounded-full shrink-0 ${task.priority === 'high' ? 'bg-red-500' : task.priority === 'medium' ? 'bg-blue-500' : 'bg-gray-300'
                                    }`} />
                                <div className="flex-1 min-w-0">
                                    <p className="text-[10px] font-semibold text-gray-800 leading-tight truncate group-hover:text-teal-600 transition">{task.title}</p>
                                    <p className="text-[9px] text-gray-500">{task.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Filters */}
                <div>
                    <h3 className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Quick Filters</h3>
                    <div className="space-y-1.5">
                        {quickFilters.map((filter, index) => (
                            <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-teal-50 transition cursor-pointer group">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-md bg-gray-50 group-hover:bg-teal-100 flex items-center justify-center transition">
                                        <Icon name={filter.icon as any} size={11} className="text-gray-600 group-hover:text-teal-600" />
                                    </div>
                                    <span className="text-[10px] font-medium text-gray-700 group-hover:text-teal-700 transition">{filter.label}</span>
                                </div>
                                <span className="text-[10px] font-bold text-teal-600 bg-teal-50 group-hover:bg-teal-100 px-1.5 py-0.5 rounded transition">
                                    {filter.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* AI Insight */}
                <div className="bg-gray-50 rounded-xl p-3 border border-gray-100 cursor-pointer hover:bg-teal-50 transition group">
                    <div className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-md bg-teal-100 group-hover:bg-teal-200 flex items-center justify-center shrink-0 transition">
                            <Icon name="sparkles" size={11} className="text-teal-600" />
                        </div>
                        <div className="flex-1">
                            <p className="text-[10px] font-semibold text-gray-900 mb-0.5">AI Insight</p>
                            <p className="text-[9px] text-gray-600 leading-relaxed">
                                You have 3 high-priority tasks due today
                            </p>
                            <button className="text-[9px] text-teal-600 font-semibold mt-1 hover:text-teal-700 transition">
                                View Details →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}