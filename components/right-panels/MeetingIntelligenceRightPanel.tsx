'use client';
import Icon from '../icon';

export default function MeetingIntelligenceRightPanel() {
    const liveMeetings = [
        { title: 'Team Standup', time: 'Live now', participants: 8 },
    ];

    const upcomingToday = [
        { title: 'Q4 Strategy', time: '2:00 PM', in: '45 min' },
        { title: 'Client Demo', time: '4:00 PM', in: '2h 45m' },
    ];

    const todayStats = [
        { label: 'Meetings', value: '3' },
        { label: 'Hours', value: '4.5h' },
        { label: 'Tasks', value: '12' },
    ];

    return (
        <aside className="w-80 bg-white border-l border-gray-200 h-screen overflow-hidden shrink-0">
            <div className="px-4 py-3 space-y-3.5">
                {/* Header */}
                <div className="flex items-center gap-2.5 pb-3 border-b border-gray-100">
                    <div className="w-8 h-8 rounded-xl bg-teal-600 flex items-center justify-center shadow-md">
                        <Icon name="mic" size={16} className="text-white" />
                    </div>
                    <div>
                        <h2 className="text-sm font-bold text-gray-900">Meeting Hub</h2>
                        <p className="text-[10px] text-gray-500">Today's overview</p>
                    </div>
                </div>

                {/* Live Meeting Alert */}
                {liveMeetings.length > 0 && (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-3">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                            <span className="text-xs font-bold text-red-700">Live Now</span>
                        </div>
                        <p className="text-xs font-semibold text-gray-900 mb-1">{liveMeetings[0].title}</p>
                        <p className="text-[10px] text-gray-600">{liveMeetings[0].participants} participants</p>
                        <button className="mt-2 w-full py-1.5 bg-red-600 hover:bg-red-700 text-white text-[10px] font-semibold rounded transition">
                            Join Meeting
                        </button>
                    </div>
                )}

                {/* Today's Stats - 3 columns */}
                <div className="grid grid-cols-3 gap-1.5">
                    {todayStats.map((stat, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-2 text-center">
                            <p className="text-sm font-bold text-gray-900">{stat.value}</p>
                            <p className="text-[8px] text-gray-500 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Upcoming Today */}
                <div>
                    <h3 className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Upcoming Today</h3>
                    <div className="space-y-1.5">
                        {upcomingToday.map((meeting, index) => (
                            <div key={index} className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition cursor-pointer">
                                <div className="w-7 h-7 rounded-lg bg-teal-100 flex items-center justify-center shrink-0">
                                    <Icon name="calendar" size={12} className="text-teal-600" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-[10px] font-semibold text-gray-800 leading-tight truncate">{meeting.title}</p>
                                    <p className="text-[9px] text-gray-500">{meeting.time} • {meeting.in}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* AI Meeting Assistant */}
                <div className="bg-teal-600 rounded-xl p-3 text-white shadow-lg">
                    <div className="flex items-center gap-2 mb-2">
                        <Icon name="sparkles" size={12} className="text-teal-100" />
                        <h3 className="text-xs font-bold">AI Assistant</h3>
                    </div>
                    <p className="text-[10px] text-teal-50 mb-2 leading-relaxed">
                        Get instant summaries & action items
                    </p>
                    <button className="w-full py-1.5 bg-white/15 hover:bg-white/25 rounded-lg text-[10px] font-semibold transition backdrop-blur-sm border border-white/20">
                        Analyze Meeting
                    </button>
                </div>

                {/* Quick Note */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3">
                    <div className="flex items-start gap-2">
                        <Icon name="note" size={12} className="text-yellow-600 mt-0.5" />
                        <div>
                            <p className="text-[10px] font-semibold text-gray-900 mb-1">Prep Reminder</p>
                            <p className="text-[9px] text-gray-600">Review Q4 metrics before 2 PM meeting</p>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}