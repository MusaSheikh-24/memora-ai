'use client';
import Icon from '../icon';

export default function WorkspaceBuilderRightPanel() {
    const stats = [
        { label: 'Total Workspaces', value: '12', change: '+2', icon: '🏢', color: 'teal' },
        { label: 'Active Builds', value: '3', change: 'Now', icon: '⚡', color: 'blue' },
        { label: 'Templates', value: '8', change: '+1', icon: '📋', color: 'purple' },
    ];

    const recentBuilds = [
        { name: 'Sales Dashboard', time: '2 min ago', status: 'Completed', color: 'teal' },
        { name: 'HR Portal', time: '15 min ago', status: 'In Progress', color: 'blue' },
        { name: 'Finance Workspace', time: '1 hour ago', status: 'Completed', color: 'teal' },
        { name: 'Marketing Hub', time: '3 hours ago', status: 'Draft', color: 'gray' },
    ];

    const templates = [
        { title: 'Project Management', type: 'Popular', icon: '📊' },
        { title: 'CRM Workspace', type: 'Business', icon: '👥' },
        { title: 'Documentation', type: 'Knowledge', icon: '📚' },
    ];

    const teamMembers = [
        { name: 'Ali Khan', role: 'Admin', active: true },
        { name: 'Sarah R.', role: 'Editor', active: true },
        { name: 'Mike T.', role: 'Viewer', active: false },
    ];

    return (
        <aside className="w-80 bg-white border-l border-gray-200 h-screen flex flex-col shrink-0 overflow-hidden">
            {/* Header */}
            <div className="px-4 py-3 border-b border-gray-100 shrink-0">
                <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                        <Icon name="grid" size={16} className="text-white" />
                    </div>
                    <div>
                        <h2 className="text-xs font-bold text-gray-900">Builder Summary</h2>
                        <p className="text-[10px] text-gray-500">Workspace overview</p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
                <div className="p-4 space-y-4">
                    {/* Stats Cards */}
                    <div className="space-y-2">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="bg-linear-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow cursor-pointer"
                            >
                                <div className="flex items-center justify-between mb-1.5">
                                    <span className="text-lg">{stat.icon}</span>
                                    <span className="text-[9px] font-semibold text-green-600 bg-green-50 px-1.5 py-0.5 rounded-full">
                                        {stat.change}
                                    </span>
                                </div>
                                <div className="text-lg font-bold text-gray-900 mb-0.5">{stat.value}</div>
                                <div className="text-[10px] text-gray-500">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Recent Builds */}
                    <div>
                        <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                            <Icon name="zap" size={10} className="text-teal-600" />
                            Recent Builds
                        </h3>
                        <div className="space-y-1.5">
                            {recentBuilds.map((build, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-2.5 p-2.5 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                                >
                                    <div className="w-8 h-8 rounded-md bg-teal-50 flex items-center justify-center shrink-0">
                                        <Icon name="grid" size={14} className="text-teal-600" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-xs font-medium text-gray-900">{build.name}</div>
                                        <div className="flex items-center gap-1.5 mt-0.5">
                                            <span
                                                className={`text-[8px] font-semibold px-1 py-0.5 rounded ${build.status === 'Completed'
                                                    ? 'bg-teal-100 text-teal-700'
                                                    : build.status === 'In Progress'
                                                        ? 'bg-blue-100 text-blue-700'
                                                        : 'bg-gray-100 text-gray-600'
                                                    }`}
                                            >
                                                {build.status}
                                            </span>
                                            <span className="text-[9px] text-gray-500">{build.time}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Templates */}
                    <div>
                        <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                            <Icon name="sparkles" size={10} className="text-teal-600" />
                            Templates
                        </h3>
                        <div className="space-y-1.5">
                            {templates.map((template, index) => (
                                <div
                                    key={index}
                                    className="p-2.5 bg-linear-to-br from-teal-50/50 to-white border border-teal-100 rounded-lg hover:shadow-md transition-all cursor-pointer"
                                >
                                    <div className="flex items-start gap-2">
                                        <div className="text-base">{template.icon}</div>
                                        <div className="flex-1 min-w-0">
                                            <div className="text-xs font-semibold text-gray-900 mb-0.5">
                                                {template.title}
                                            </div>
                                            <div className="text-[9px] font-medium text-teal-600">
                                                {template.type}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Team Members */}
                    <div>
                        <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                            <Icon name="users" size={10} className="text-teal-600" />
                            Team Members
                        </h3>
                        <div className="space-y-1.5">
                            {teamMembers.map((member, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-gray-50 transition cursor-pointer"
                                >
                                    <div className="w-7 h-7 rounded-full bg-teal-100 flex items-center justify-center text-[10px] font-bold text-teal-700 shrink-0">
                                        {member.name.charAt(0)}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-xs font-medium text-gray-900">{member.name}</div>
                                        <div className="text-[9px] text-gray-500">{member.role}</div>
                                    </div>
                                    <div className={`w-2 h-2 rounded-full ${member.active ? 'bg-green-500' : 'bg-gray-300'}`} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="pt-3 border-t border-gray-100 space-y-1.5">
                        <button className="w-full py-2 bg-teal-600 text-white rounded-lg text-[10px] font-semibold hover:bg-teal-700 transition-all flex items-center justify-center gap-1.5 shadow-sm">
                            <Icon name="plus" size={12} strokeWidth={2.5} />
                            New Workspace
                        </button>
                        <button className="w-full py-2 bg-white text-teal-700 border border-teal-200 rounded-lg text-[10px] font-semibold hover:bg-teal-50 transition-all flex items-center justify-center gap-1.5">
                            <Icon name="download" size={12} strokeWidth={2.5} />
                            Import Template
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    );
}