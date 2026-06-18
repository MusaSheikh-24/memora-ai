'use client';
import Icon from '../icon';

export default function CompaniesRightPanel() {
    const topCompanies = [
        { name: 'ABC Corp', revenue: '$2.4M', growth: '+23%' },
        { name: 'Enterprise', revenue: '$3.1M', growth: '+18%' },
        { name: 'TechCorp', revenue: '$1.8M', growth: '+15%' },
    ];

    const quickFilters = [
        { label: 'High Health', value: '80%+', icon: 'sparkles' },
        { label: 'New This Month', value: '24', icon: 'plus' },
        { label: 'Needs Attention', value: '12', icon: 'alert' },
    ];

    return (
        <aside className="w-80 bg-white border-l border-gray-200 h-screen overflow-hidden shrink-0">
            <div className="p-3.5 space-y-3.5">
                {/* Header */}
                <div className="flex items-center gap-2.5 pb-3 border-b border-gray-100">
                    <div className="w-9 h-9 rounded-lg bg-teal-600 flex items-center justify-center">
                        <Icon name="building" size={16} className="text-white" />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-sm font-bold text-gray-900">Companies</h2>
                        <p className="text-[10px] text-gray-500">Portfolio insights</p>
                    </div>
                    <button className="w-7 h-7 rounded-md hover:bg-gray-100 flex items-center justify-center transition">
                        <Icon name="more" size={14} className="text-gray-500" />
                    </button>
                </div>

                {/* Portfolio Score */}
                <div className="bg-linear-to-br from-teal-600 to-teal-700 rounded-xl p-3.5 text-white">
                    <div className="flex items-center justify-between mb-2">
                        <div>
                            <p className="text-[10px] text-teal-100 font-medium">Portfolio Health</p>
                            <p className="text-2xl font-bold">87%</p>
                        </div>
                        <div className="w-10 h-10 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20">
                            <Icon name="sparkles" size={18} className="text-white" />
                        </div>
                    </div>
                    <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full w-[87%] bg-white rounded-full" />
                    </div>
                    <div className="flex justify-between mt-2 text-[9px] text-teal-100">
                        <span>+5% this month</span>
                        <span>Excellent</span>
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
                                    <span className="text-[10px] font-medium text-gray-700 group-hover:text-teal-700">{filter.label}</span>
                                </div>
                                <span className="text-[10px] font-bold text-teal-600 bg-teal-50 group-hover:bg-teal-100 px-1.5 py-0.5 rounded transition">
                                    {filter.value}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Top Performers */}
                <div>
                    <h3 className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-2">Top Performers</h3>
                    <div className="space-y-1.5">
                        {topCompanies.map((company, index) => (
                            <div key={index} className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-gray-50 transition cursor-pointer">
                                <div className="w-6 h-6 rounded-md bg-linear-to-br from-teal-100 to-teal-50 flex items-center justify-center shrink-0 text-[9px] font-bold text-teal-600">
                                    {index + 1}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-[10px] font-semibold text-gray-800 leading-tight truncate">{company.name}</p>
                                    <p className="text-[9px] text-gray-500">{company.revenue}</p>
                                </div>
                                <span className="text-[9px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded">
                                    {company.growth}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* AI Insight */}
                <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                    <div className="flex items-start gap-2">
                        <div className="w-6 h-6 rounded-md bg-teal-100 flex items-center justify-center shrink-0">
                            <Icon name="sparkles" size={11} className="text-teal-600" />
                        </div>
                        <div className="flex-1">
                            <p className="text-[10px] font-semibold text-gray-900 mb-0.5">AI Insight</p>
                            <p className="text-[9px] text-gray-600 leading-relaxed">
                                3 companies need follow-up this week
                            </p>
                            <button className="text-[9px] text-teal-600 font-semibold mt-1 hover:text-teal-700">
                                View Details →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}