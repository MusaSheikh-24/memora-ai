'use client';
import { useState } from 'react';
import TopBar from '@/components/topbar';
import MeetingIntelligenceRightPanel from '@/components/right-panels/MeetingIntelligenceRightPanel';
import Icon from '@/components/icon';

export default function MeetingIntelligence() {
    const [activeTab, setActiveTab] = useState<'upcoming' | 'recent' | 'recordings'>('upcoming');

    const todayMeetings = [
        {
            id: 1,
            title: 'Q4 Strategy Review',
            time: '2:00 PM - 3:30 PM',
            attendees: 8,
            status: 'upcoming',
            type: 'internal',
            organizer: 'Sarah Johnson',
            agenda: 'Quarterly planning & goal setting'
        },
        {
            id: 2,
            title: 'Client Demo - ABC Corp',
            time: '4:00 PM - 5:00 PM',
            attendees: 5,
            status: 'upcoming',
            type: 'client',
            organizer: 'Mike Chen',
            agenda: 'Product demonstration & Q&A'
        },
    ];

    const recentMeetings = [
        {
            id: 3,
            title: 'Sprint Planning',
            date: 'Yesterday',
            duration: '2h 15m',
            attendees: 12,
            recording: true,
            transcript: true,
            actionItems: 8,
            sentiment: 'positive'
        },
        {
            id: 4,
            title: 'Board Meeting',
            date: 'Dec 15',
            duration: '1h 45m',
            attendees: 8,
            recording: true,
            transcript: true,
            actionItems: 6,
            sentiment: 'neutral'
        },
        {
            id: 5,
            title: 'Team Standup',
            date: 'Dec 15',
            duration: '15m',
            attendees: 10,
            recording: false,
            transcript: true,
            actionItems: 3,
            sentiment: 'positive'
        },
    ];

    const speakerAnalytics = [
        { name: 'Sarah Johnson', meetings: 12, talkTime: '68%', role: 'Product Manager' },
        { name: 'Mike Chen', meetings: 9, talkTime: '54%', role: 'Tech Lead' },
        { name: 'Lisa Park', meetings: 8, talkTime: '42%', role: 'Designer' },
        { name: 'David Kim', meetings: 7, talkTime: '38%', role: 'Engineer' },
    ];

    const meetingStats = [
        { label: 'This Week', value: '23', icon: 'calendar', change: '+4' },
        { label: 'Total Hours', value: '47h', icon: 'clock', change: '+12%' },
        { label: 'Action Items', value: '67', icon: 'check-square', change: '+8' },
        { label: 'Recordings', value: '18', icon: 'mic', change: '+3' },
    ];

    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">
            <div className="flex-1 flex flex-col overflow-hidden">
                <TopBar />

                <div className="flex-1 overflow-y-auto">
                    <div className="max-w-7xl mx-auto px-6 py-6 space-y-5">
                        {/* Header with Tabs */}
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-teal-600 flex items-center justify-center shadow-md shadow-teal-500/30">
                                        <Icon name="mic" size={18} className="text-white" />
                                    </div>
                                    <div>
                                        <h1 className="text-xl font-bold text-gray-900">Meeting Intelligence</h1>
                                        <p className="text-gray-500 text-[10px]">AI-powered meeting analytics & insights</p>
                                    </div>
                                </div>
                                <button className="px-3 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg font-semibold text-xs transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-md shadow-teal-500/30 hover:shadow-lg">
                                    <Icon name="plus" size={14} />
                                    New Meeting
                                </button>
                            </div>

                            {/* Tabs */}
                            <div className="flex gap-1 bg-white p-1 rounded-lg border border-gray-200 w-fit shadow-sm">
                                {(['upcoming', 'recent', 'recordings'] as const).map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-3 py-1.5 rounded-md text-[10px] font-semibold transition-all duration-200 cursor-pointer ${activeTab === tab
                                            ? 'bg-teal-600 text-white shadow-sm'
                                            : 'text-gray-600 hover:bg-gray-50'
                                            }`}
                                    >
                                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Stats Row */}
                        <div className="grid grid-cols-4 gap-4">
                            {meetingStats.map((stat, index) => (
                                <div key={index} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center group-hover:bg-teal-100 transition-colors">
                                            <Icon name={stat.icon as any} size={14} className="text-teal-600" />
                                        </div>
                                        <span className="text-[10px] font-semibold text-green-600 bg-green-50 px-1.5 py-0.5 rounded">
                                            {stat.change}
                                        </span>
                                    </div>
                                    <p className="text-lg font-bold text-gray-900">{stat.value}</p>
                                    <p className="text-[10px] text-gray-500 mt-0.5 font-medium">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                            {/* Main Content - 2/3 width */}
                            <div className="lg:col-span-2 space-y-5">
                                {activeTab === 'upcoming' && (
                                    <>
                                        {/* Today's Schedule */}
                                        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                                            <div className="p-4 border-b border-gray-100">
                                                <div className="flex items-center justify-between">
                                                    <h2 className="font-bold text-gray-900 flex items-center gap-2 text-xs">
                                                        <Icon name="calendar" size={14} className="text-teal-600" />
                                                        Today's Schedule
                                                    </h2>
                                                    <span className="text-[10px] text-gray-500 font-medium">{todayMeetings.length} meetings</span>
                                                </div>
                                            </div>
                                            <div className="divide-y divide-gray-100">
                                                {todayMeetings.map((meeting) => (
                                                    <div key={meeting.id} className="p-4 hover:bg-teal-50/30 transition-all duration-200 cursor-pointer group">
                                                        <div className="flex items-start gap-3">
                                                            <div className="flex flex-col items-center">
                                                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${meeting.type === 'client' ? 'bg-blue-50 group-hover:bg-blue-100' : 'bg-teal-50 group-hover:bg-teal-100'
                                                                    } transition-colors`}>
                                                                    <Icon name="calendar" size={16} className={
                                                                        meeting.type === 'client' ? 'text-blue-600' : 'text-teal-600'
                                                                    } />
                                                                </div>
                                                                <span className="text-[9px] font-semibold text-gray-600 mt-1">
                                                                    {meeting.time.split(' - ')[0]}
                                                                </span>
                                                            </div>
                                                            <div className="flex-1">
                                                                <h3 className="font-semibold text-gray-900 text-xs mb-0.5 group-hover:text-teal-700 transition-colors">{meeting.title}</h3>
                                                                <p className="text-[10px] text-gray-600 mb-1.5">{meeting.agenda}</p>
                                                                <div className="flex items-center gap-2 text-[10px] text-gray-500">
                                                                    <span className="flex items-center gap-1">
                                                                        <Icon name="users" size={10} />
                                                                        {meeting.attendees} attendees
                                                                    </span>
                                                                    <span>•</span>
                                                                    <span>{meeting.organizer}</span>
                                                                </div>
                                                            </div>
                                                            <button className="px-2.5 py-1.5 bg-teal-600 hover:bg-teal-700 text-white text-[10px] font-semibold rounded-lg transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md">
                                                                Join
                                                            </button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Meeting Efficiency */}
                                        <div className="bg-linear-to-br from-teal-600 to-teal-700 rounded-xl p-4 text-white shadow-lg shadow-teal-500/30 hover:shadow-xl transition-shadow duration-200">
                                            <div className="flex items-center justify-between mb-3">
                                                <h3 className="font-bold flex items-center gap-2 text-xs">
                                                    <Icon name="sparkles" size={14} />
                                                    Meeting Efficiency Score
                                                </h3>
                                                <span className="text-2xl font-bold">87%</span>
                                            </div>
                                            <div className="grid grid-cols-3 gap-3">
                                                <div>
                                                    <p className="text-teal-100 text-[10px] mb-1">On-Time Start</p>
                                                    <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                                                        <div className="h-full w-[89%] bg-white rounded-full transition-all duration-500" />
                                                    </div>
                                                    <p className="text-[10px] font-semibold mt-1">89%</p>
                                                </div>
                                                <div>
                                                    <p className="text-teal-100 text-[10px] mb-1">Action Completion</p>
                                                    <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                                                        <div className="h-full w-[87%] bg-white rounded-full transition-all duration-500" />
                                                    </div>
                                                    <p className="text-[10px] font-semibold mt-1">87%</p>
                                                </div>
                                                <div>
                                                    <p className="text-teal-100 text-[10px] mb-1">Follow-up Rate</p>
                                                    <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                                                        <div className="h-full w-[92%] bg-white rounded-full transition-all duration-500" />
                                                    </div>
                                                    <p className="text-[10px] font-semibold mt-1">92%</p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}

                                {activeTab === 'recent' && (
                                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                                        <div className="p-4 border-b border-gray-100">
                                            <h2 className="font-bold text-gray-900 flex items-center gap-2 text-xs">
                                                <Icon name="mic" size={14} className="text-teal-600" />
                                                Recent Meetings
                                            </h2>
                                        </div>
                                        <div className="divide-y divide-gray-100">
                                            {recentMeetings.map((meeting) => (
                                                <div key={meeting.id} className="p-4 hover:bg-teal-50/30 transition-all duration-200 cursor-pointer group">
                                                    <div className="flex items-start justify-between mb-2">
                                                        <div>
                                                            <h3 className="font-semibold text-gray-900 text-xs mb-0.5 group-hover:text-teal-700 transition-colors">{meeting.title}</h3>
                                                            <p className="text-[10px] text-gray-500">{meeting.date} • {meeting.duration}</p>
                                                        </div>
                                                        <div className="flex gap-1.5">
                                                            {meeting.recording && (
                                                                <span className="px-2 py-0.5 bg-teal-50 text-teal-700 text-[9px] font-semibold rounded">
                                                                    Recording
                                                                </span>
                                                            )}
                                                            {meeting.transcript && (
                                                                <span className="px-2 py-0.5 bg-blue-50 text-blue-700 text-[9px] font-semibold rounded">
                                                                    Transcript
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-3 text-[10px] text-gray-500">
                                                        <span className="flex items-center gap-1">
                                                            <Icon name="users" size={10} />
                                                            {meeting.attendees} attendees
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <Icon name="check-square" size={10} />
                                                            {meeting.actionItems} action items
                                                        </span>
                                                        <span className={`px-2 py-0.5 rounded-full text-[9px] font-medium ${meeting.sentiment === 'positive' ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-700'
                                                            }`}>
                                                            {meeting.sentiment}
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'recordings' && (
                                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 text-center">
                                        <div className="w-14 h-14 rounded-full bg-teal-50 flex items-center justify-center mx-auto mb-3">
                                            <Icon name="mic" size={24} className="text-teal-600" />
                                        </div>
                                        <h3 className="font-bold text-gray-900 mb-1 text-sm">Meeting Recordings</h3>
                                        <p className="text-xs text-gray-500 mb-4">Access all your recorded meetings</p>
                                        <button className="px-3 py-2 bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold rounded-lg transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md">
                                            View All Recordings
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Right Sidebar - Speaker Analytics */}
                            <div className="space-y-4">
                                {/* Top Speakers */}
                                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-gray-900 mb-3 text-xs flex items-center gap-1.5">
                                        <Icon name="users" size={14} className="text-teal-600" />
                                        Top Speakers This Week
                                    </h3>
                                    <div className="space-y-2.5">
                                        {speakerAnalytics.map((speaker, index) => (
                                            <div key={index} className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-teal-50/50 transition-all cursor-pointer group">
                                                <div className="w-7 h-7 rounded-full bg-teal-100 flex items-center justify-center text-[10px] font-bold text-teal-600 group-hover:bg-teal-200 transition-colors">
                                                    {index + 1}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-[10px] font-semibold text-gray-900 truncate group-hover:text-teal-700 transition-colors">{speaker.name}</p>
                                                    <p className="text-[9px] text-gray-500">{speaker.meetings} meetings</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-[10px] font-bold text-teal-600">{speaker.talkTime}</p>
                                                    <p className="text-[9px] text-gray-400">talk time</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Quick Actions */}
                                <div className="bg-linear-to-br from-teal-600 to-teal-700 rounded-xl p-4 text-white shadow-lg shadow-teal-500/30 hover:shadow-xl transition-shadow duration-200">
                                    <h3 className="font-bold text-xs mb-2.5 flex items-center gap-1.5">
                                        <div className="w-6 h-6 rounded-md bg-white/20 flex items-center justify-center backdrop-blur-sm">
                                            <Icon name="zap" size={12} />
                                        </div>
                                        Quick Actions
                                    </h3>
                                    <div className="space-y-1.5">
                                        <button className="w-full py-2 bg-white/15 hover:bg-white/25 rounded-lg text-[10px] font-semibold transition-all duration-200 backdrop-blur-sm text-left px-2.5 cursor-pointer border border-white/10 hover:border-white/20">
                                            Start Recording
                                        </button>
                                        <button className="w-full py-2 bg-white/15 hover:bg-white/25 rounded-lg text-[10px] font-semibold transition-all duration-200 backdrop-blur-sm text-left px-2.5 cursor-pointer border border-white/10 hover:border-white/20">
                                            Generate Summary
                                        </button>
                                        <button className="w-full py-2 bg-white/15 hover:bg-white/25 rounded-lg text-[10px] font-semibold transition-all duration-200 backdrop-blur-sm text-left px-2.5 cursor-pointer border border-white/10 hover:border-white/20">
                                            Extract Actions
                                        </button>
                                    </div>
                                </div>

                                {/* Meeting Types */}
                                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 hover:shadow-md transition-shadow">
                                    <h3 className="font-bold text-gray-900 mb-3 text-xs flex items-center gap-1.5">
                                        <Icon name="graph" size={14} className="text-teal-600" />
                                        Meeting Distribution
                                    </h3>
                                    <div className="space-y-2.5">
                                        {[
                                            { type: 'Internal', count: 32, percentage: 45 },
                                            { type: 'Client', count: 24, percentage: 34 },
                                            { type: 'External', count: 15, percentage: 21 },
                                        ].map((type, index) => (
                                            <div key={index}>
                                                <div className="flex justify-between mb-1">
                                                    <span className="text-[10px] text-gray-600 font-medium">{type.type}</span>
                                                    <span className="text-[10px] font-bold text-gray-900">{type.count}</span>
                                                </div>
                                                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                                    <div className="h-full bg-linear-to-r from-teal-500 to-teal-600 rounded-full transition-all duration-500" style={{ width: `${type.percentage}%` }} />
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

            <MeetingIntelligenceRightPanel />
        </div>
    );
}