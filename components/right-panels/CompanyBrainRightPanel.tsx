'use client';
import Icon from '../icon';

export default function CompanyBrainRightPanel() {
    const recentActivity = [
        { icon: 'sparkles', label: 'AI analyzed Q4 reports', time: '5m ago' },
        { icon: 'file', label: 'New policy added', time: '1h ago' },
        { icon: 'message', label: 'Team chat indexed', time: '3h ago' },
    ];

    const quickStats = [
        { label: 'Documents', value: '1,247', icon: 'file' },
        { label: 'Emails', value: '3,421', icon: 'message' },
        { label: 'Meetings', value: '156', icon: 'calendar' },
    ];

    return (
        <aside className="w-80 bg-white border-l border-gray-200 h-screen overflow-y-auto shrink-0">
            <div className="p-4 space-y-5">
                {/* Header */}
                <div className="flex items-center gap-2.5 pb-3 border-b border-gray-100">
                    <div className="w-9 h-9 rounded-xl bg-linear-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-md">
                        <Icon name="sparkles" size={16} className="text-white" />
                    </div>
                    <div>
                        <h2 className="text-sm font-bold text-gray-900">Company Brain</h2>
                        <p className="text-[10px] text-gray-500">AI-powered insights</p>
                    </div>
                </div>

                {/* Quick Stats */}
                <div>
                    <h3 className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2.5">Knowledge Sources</h3>
                    <div className="space-y-2">
                        {quickStats.map((stat, index) => (
                            <div key={index} className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg hover:bg-teal-50 transition cursor-pointer group">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-8 h-8 rounded-lg bg-white group-hover:bg-teal-100 flex items-center justify-center shadow-sm transition">
                                        <Icon name={stat.icon as any} size={14} className="text-gray-600 group-hover:text-teal-600" />
                                    </div>
                                    <span className="text-xs font-semibold text-gray-700">{stat.label}</span>
                                </div>
                                <span className="text-xs font-bold text-teal-600 bg-teal-50 group-hover:bg-teal-100 px-2 py-1 rounded-md transition">
                                    {stat.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Activity */}
                <div>
                    <h3 className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2.5">Recent Activity</h3>
                    <div className="space-y-2.5">
                        {recentActivity.map((activity, index) => (
                            <div key={index} className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-gray-50 transition cursor-pointer group">
                                <div className="w-7 h-7 rounded-lg bg-teal-50 group-hover:bg-teal-100 flex items-center justify-center shrink-0 mt-0.5 transition">
                                    <Icon name={activity.icon as any} size={11} className="text-teal-600" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-[10px] font-semibold text-gray-800 leading-tight">{activity.label}</p>
                                    <p className="text-[9px] text-gray-400 mt-0.5">{activity.time}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* AI Assistant CTA */}
                <div className="bg-linear-to-br from-teal-600 to-teal-700 rounded-xl p-3.5 text-white shadow-lg">
                    <div className="flex items-center gap-2 mb-2">
                        <Icon name="sparkles" size={13} className="text-teal-100" />
                        <h3 className="text-xs font-bold">AI Assistant</h3>
                    </div>
                    <p className="text-[10px] text-teal-50 mb-2.5 leading-relaxed">Ask anything about your company data</p>
                    <button className="w-full py-1.5 bg-white/15 hover:bg-white/25 rounded-lg text-[10px] font-semibold transition backdrop-blur-sm border border-white/20">
                        Start Conversation
                    </button>
                </div>
            </div>
        </aside>
    );
}