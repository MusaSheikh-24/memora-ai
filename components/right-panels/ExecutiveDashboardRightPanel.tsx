'use client';
import Icon from '../icon';

export default function ExecutiveDashboardRightPanel() {
    const quickStats = [
        { label: 'Revenue', value: '$2.4M', icon: 'file', change: '+18%', color: 'teal' },
        { label: 'Projects', value: '47', icon: 'folder', change: '+8', color: 'blue' },
        { label: 'Team', value: '234', icon: 'message', change: '+12', color: 'purple' },
    ];

    const recentUpdates = [
        { icon: 'sparkles', label: 'Q4 target achieved', time: '2d ago', type: 'success', value: '+23%' },
        { icon: 'message', label: 'New client onboarded', time: '5d ago', type: 'success', value: '$120K' },
        { icon: 'file', label: 'Product v2.0 launched', time: '1w ago', type: 'info', value: 'v2.0' },
    ];

    const performanceIndicators = [
        { label: 'Growth Rate', value: 94, color: 'teal' },
        { label: 'Efficiency', value: 87, color: 'blue' },
        { label: 'Satisfaction', value: 96, color: 'purple' },
    ];

    return (
        <aside className="w-80 bg-white border-l border-gray-200 h-screen overflow-hidden shrink-0">
            <div className="px-4 py-4 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-2.5 pb-3 border-b border-gray-100">
                    <div className="w-8 h-8 rounded-xl bg-linear-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-lg shadow-teal-200">
                        <Icon name="sparkles" size={16} className="text-white" />
                    </div>
                    <div>
                        <h2 className="text-sm font-bold text-gray-900">Executive Dashboard</h2>
                        <p className="text-[10px] text-gray-500 font-medium">Real-time insights</p>
                    </div>
                </div>

                {/* Quick Stats - Compact Cards */}
                <div>
                    <h3 className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2.5">Key Metrics</h3>
                    <div className="space-y-2">
                        {quickStats.map((stat, index) => (
                            <div key={index} className="group p-2.5 bg-linear-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:border-teal-200 hover:shadow-md transition-all cursor-pointer">
                                <div className="flex items-center justify-between mb-1.5">
                                    <div className="flex items-center gap-2">
                                        <div className={`w-7 h-7 rounded-lg bg-${stat.color}-50 group-hover:bg-${stat.color}-100 flex items-center justify-center transition-colors`}>
                                            <Icon name={stat.icon as any} size={13} className={`text-${stat.color}-600`} />
                                        </div>
                                        <span className="text-[10px] font-semibold text-gray-600">{stat.label}</span>
                                    </div>
                                    <span className="text-[9px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded-md">{stat.change}</span>
                                </div>
                                <div className="flex items-end justify-between">
                                    <span className="text-lg font-bold text-gray-900">{stat.value}</span>
                                    <div className="w-16 h-1 bg-gray-100 rounded-full overflow-hidden">
                                        <div className={`h-full w-2/3 bg-linear-to-r from-${stat.color}-500 to-${stat.color}-600 rounded-full`} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Performance Indicators */}
                <div className="bg-linear-to-br from-gray-50 to-white rounded-xl p-3 border border-gray-100">
                    <h3 className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2.5">Performance</h3>
                    <div className="space-y-2">
                        {performanceIndicators.map((indicator, index) => (
                            <div key={index} className="space-y-1">
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-medium text-gray-600">{indicator.label}</span>
                                    <span className="text-xs font-bold text-gray-900">{indicator.value}%</span>
                                </div>
                                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className={`h-full bg-linear-to-r from-${indicator.color}-500 to-${indicator.color}-600 rounded-full transition-all duration-700`}
                                        style={{ width: `${indicator.value}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Updates */}
                <div className="flex-1 overflow-hidden">
                    <h3 className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2.5">Recent Updates</h3>
                    <div className="space-y-2">
                        {recentUpdates.map((update, index) => (
                            <div key={index} className="group flex items-start gap-2.5 p-2 rounded-xl hover:bg-gray-50 transition-all cursor-pointer border border-transparent hover:border-gray-100">
                                <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-all group-hover:scale-110 ${update.type === 'success' ? 'bg-green-50 group-hover:bg-green-100' : 'bg-blue-50 group-hover:bg-blue-100'
                                    }`}>
                                    <Icon
                                        name={update.icon as any}
                                        size={11}
                                        className={update.type === 'success' ? 'text-green-600' : 'text-blue-600'}
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-[10px] font-bold text-gray-800 leading-tight group-hover:text-teal-700 transition">{update.label}</p>
                                    <div className="flex items-center gap-2 mt-0.5">
                                        <span className="text-[9px] text-gray-400 font-medium">{update.time}</span>
                                        <span className="text-[9px] font-bold text-teal-600 bg-teal-50 px-1 rounded">{update.value}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Action Button */}
                <button className="w-full py-2 bg-linear-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white rounded-xl text-xs font-bold shadow-lg shadow-teal-200 hover:shadow-xl hover:shadow-teal-300 transition-all cursor-pointer group">
                    <span className="flex items-center justify-center gap-1.5">
                        <Icon name="file" size={12} className="group-hover:scale-110 transition-transform" />
                        Generate Report
                    </span>
                </button>
            </div>
        </aside>
    );
}