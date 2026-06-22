'use client';
import Icon from '../icon';

export default function RelationshipIntelligenceRightPanel() {
    const quickStats = [
        { label: 'Contacts', value: '6,432', icon: 'users' },
        { label: 'Companies', value: '482', icon: 'building' },
        { label: 'Meetings', value: '234', icon: 'calendar' },
    ];

    const topContacts = [
        { name: 'Sarah Johnson', company: 'ABC Corp', strength: '96%' },
        { name: 'Mike Chen', company: 'TechCorp', strength: '91%' },
        { name: 'Lisa Park', company: 'Global Solutions', strength: '87%' },
        { name: 'David Kim', company: 'Innovation Partners', strength: '82%' },
    ];

    return (
        <aside className="w-80 bg-white border-l border-gray-200 h-screen overflow-hidden shrink-0">
            <div className="px-4 py-3 space-y-3.5">
                {/* Header */}
                <div className="flex items-center gap-2.5 pb-3 border-b border-gray-100">
                    <div className="w-8 h-8 rounded-xl bg-teal-600 flex items-center justify-center shadow-md">
                        <Icon name="network" size={16} className="text-white" />
                    </div>
                    <div>
                        <h2 className="text-sm font-bold text-gray-900">Relationship Intel</h2>
                        <p className="text-[10px] text-gray-500">Network analytics</p>
                    </div>
                </div>

                {/* Quick Stats - 3 columns */}
                <div className="grid grid-cols-3 gap-1.5">
                    {quickStats.map((stat, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-2 text-center hover:bg-teal-50 transition cursor-pointer group">
                            <div className="w-6 h-6 mx-auto mb-1 rounded bg-white group-hover:bg-teal-100 flex items-center justify-center shadow-sm transition">
                                <Icon name={stat.icon as any} size={12} className="text-gray-600 group-hover:text-teal-600" />
                            </div>
                            <p className="text-xs font-bold text-gray-900 leading-tight">{stat.value}</p>
                            <p className="text-[8px] text-gray-500 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Top Contacts */}
                <div>
                    <h3 className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Top Contacts</h3>
                    <div className="space-y-1.5">
                        {topContacts.map((contact, index) => (
                            <div key={index} className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-gray-50 transition cursor-pointer group">
                                <div className="w-7 h-7 rounded-lg bg-teal-100 flex items-center justify-center shrink-0">
                                    <Icon name="users" size={12} className="text-teal-600" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-[10px] font-semibold text-gray-800 leading-tight truncate">{contact.name}</p>
                                    <p className="text-[9px] text-gray-400 truncate">{contact.company}</p>
                                </div>
                                <span className="text-[9px] font-bold text-teal-600 bg-teal-50 px-1.5 py-0.5 rounded">{contact.strength}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* AI Assistant CTA */}
                <div className="bg-teal-600 rounded-xl p-3 text-white shadow-lg">
                    <div className="flex items-center gap-2 mb-2">
                        <Icon name="sparkles" size={12} className="text-teal-100" />
                        <h3 className="text-xs font-bold">Relationship AI</h3>
                    </div>
                    <p className="text-[10px] text-teal-50 mb-2 leading-relaxed">Ask about any contact or relationship</p>
                    <button className="w-full py-1.5 bg-white/15 hover:bg-white/25 rounded-lg text-[10px] font-semibold transition backdrop-blur-sm border border-white/20">
                        Start Chat
                    </button>
                </div>
            </div>
        </aside>
    );
}