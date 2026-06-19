'use client';
import { useState } from 'react';
import TopBar from '@/components/topbar';
import ExecutiveDashboardRightPanel from '@/components/right-panels/ExecutiveDashboardRightPanel';
import Icon from '@/components/icon';

export default function ExecutiveDashboard() {
    const [timeRange, setTimeRange] = useState('month');
    const [selectedDept, setSelectedDept] = useState('all');
    const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

    // Chart data based on time range
    const chartData: Record<string, { labels: string[]; values: number[]; prevValues: number[] }> = {
        week: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            values: [42, 48, 45, 52, 58, 55, 62],
            prevValues: [38, 42, 40, 45, 50, 48, 54],
        },
        month: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            values: [180, 220, 245, 285],
            prevValues: [160, 195, 210, 240],
        },
        quarter: {
            labels: ['Jan', 'Feb', 'Mar'],
            values: [620, 710, 840],
            prevValues: [540, 620, 720],
        },
        year: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            values: [180, 210, 240, 265, 290, 320, 345, 380, 410, 445, 480, 520],
            prevValues: [150, 175, 200, 220, 245, 270, 290, 320, 345, 375, 400, 435],
        },
    };

    const currentData = chartData[timeRange];

    // Department data with time range variations
    const departmentPerformance: Record<string, Array<{ id: string; name: string; progress: number; target: string; actual: string; color: string }>> = {
        week: [
            { id: 'sales', name: 'Sales', progress: 82, target: '$200K', actual: '$164K', color: 'teal' },
            { id: 'marketing', name: 'Marketing', progress: 68, target: '$100K', actual: '$68K', color: 'blue' },
            { id: 'engineering', name: 'Engineering', progress: 91, target: '3 projects', actual: '2.7 projects', color: 'purple' },
            { id: 'operations', name: 'Operations', progress: 64, target: '95% efficiency', actual: '60.8%', color: 'orange' },
        ],
        month: [
            { id: 'sales', name: 'Sales', progress: 87, target: '$800K', actual: '$696K', color: 'teal' },
            { id: 'marketing', name: 'Marketing', progress: 72, target: '$400K', actual: '$288K', color: 'blue' },
            { id: 'engineering', name: 'Engineering', progress: 94, target: '12 projects', actual: '11 projects', color: 'purple' },
            { id: 'operations', name: 'Operations', progress: 68, target: '95% efficiency', actual: '64.6%', color: 'orange' },
        ],
        quarter: [
            { id: 'sales', name: 'Sales', progress: 92, target: '$2.4M', actual: '$2.2M', color: 'teal' },
            { id: 'marketing', name: 'Marketing', progress: 78, target: '$1.2M', actual: '$936K', color: 'blue' },
            { id: 'engineering', name: 'Engineering', progress: 96, target: '36 projects', actual: '34 projects', color: 'purple' },
            { id: 'operations', name: 'Operations', progress: 74, target: '95% efficiency', actual: '70.3%', color: 'orange' },
        ],
        year: [
            { id: 'sales', name: 'Sales', progress: 95, target: '$9.6M', actual: '$9.1M', color: 'teal' },
            { id: 'marketing', name: 'Marketing', progress: 82, target: '$4.8M', actual: '$3.9M', color: 'blue' },
            { id: 'engineering', name: 'Engineering', progress: 98, target: '144 projects', actual: '141 projects', color: 'purple' },
            { id: 'operations', name: 'Operations', progress: 79, target: '95% efficiency', actual: '75%', color: 'orange' },
        ],
    };

    const currentDepartments = departmentPerformance[timeRange];

    // Key metrics with time range variations
    const keyMetrics: Record<string, Array<{ label: string; value: string; change: string; positive: boolean; icon: string; color: string }>> = {
        week: [
            { label: 'Weekly Revenue', value: '$58K', change: '+12%', positive: true, icon: 'file', color: 'teal' },
            { label: 'Active Projects', value: '12', change: '+3', positive: true, icon: 'folder', color: 'blue' },
            { label: 'Team Members', value: '234', change: '+2', positive: true, icon: 'message', color: 'purple' },
            { label: 'Client Satisfaction', value: '92%', change: '+1%', positive: true, icon: 'sparkles', color: 'orange' },
        ],
        month: [
            { label: 'Total Revenue', value: '$2.4M', change: '+18%', positive: true, icon: 'file', color: 'teal' },
            { label: 'Active Projects', value: '47', change: '+8', positive: true, icon: 'folder', color: 'blue' },
            { label: 'Team Members', value: '234', change: '+12', positive: true, icon: 'message', color: 'purple' },
            { label: 'Client Satisfaction', value: '94%', change: '+3%', positive: true, icon: 'sparkles', color: 'orange' },
        ],
        quarter: [
            { label: 'Quarterly Revenue', value: '$7.2M', change: '+24%', positive: true, icon: 'file', color: 'teal' },
            { label: 'Active Projects', value: '128', change: '+22', positive: true, icon: 'folder', color: 'blue' },
            { label: 'Team Members', value: '234', change: '+18', positive: true, icon: 'message', color: 'purple' },
            { label: 'Client Satisfaction', value: '95%', change: '+4%', positive: true, icon: 'sparkles', color: 'orange' },
        ],
        year: [
            { label: 'Annual Revenue', value: '$28.4M', change: '+32%', positive: true, icon: 'file', color: 'teal' },
            { label: 'Active Projects', value: '486', change: '+94', positive: true, icon: 'folder', color: 'blue' },
            { label: 'Team Members', value: '234', change: '+48', positive: true, icon: 'message', color: 'purple' },
            { label: 'Client Satisfaction', value: '96%', change: '+6%', positive: true, icon: 'sparkles', color: 'orange' },
        ],
    };

    const currentMetrics = keyMetrics[timeRange];

    const recentHighlights = [
        { icon: 'sparkles', title: 'Q4 Revenue Target Achieved', description: 'Exceeded target by 18%', time: '2 days ago', type: 'success' },
        { icon: 'message', title: 'New Enterprise Client Onboarded', description: 'ABC Corp - $120K annual contract', time: '5 days ago', type: 'success' },
        { icon: 'file', title: 'Product Launch Completed', description: 'Version 2.0 released successfully', time: '1 week ago', type: 'info' },
    ];

    const upcomingMilestones = [
        { title: 'Annual Review Meeting', date: 'Dec 28, 2024', priority: 'high' },
        { title: 'Q1 Planning Session', date: 'Jan 5, 2025', priority: 'medium' },
        { title: 'Board Presentation', date: 'Jan 15, 2025', priority: 'high' },
    ];

    const filteredDepartments = selectedDept === 'all'
        ? currentDepartments
        : currentDepartments.filter(dept => dept.id === selectedDept);

    // Chart calculations
    const chartWidth = 600;
    const chartHeight = 220;
    const padding = { top: 20, right: 20, bottom: 30, left: 40 };
    const innerWidth = chartWidth - padding.left - padding.right;
    const innerHeight = chartHeight - padding.top - padding.bottom;

    const allValues = [...currentData.values, ...currentData.prevValues];
    const maxValue = Math.max(...allValues) * 1.15;
    const minValue = 0;

    const getX = (index: number) => padding.left + (index / (currentData.labels.length - 1)) * innerWidth;
    const getY = (value: number) => padding.top + innerHeight - ((value - minValue) / (maxValue - minValue)) * innerHeight;

    // Generate path for line
    const generatePath = (values: number[]) => {
        return values.map((value, index) => {
            const x = getX(index);
            const y = getY(value);
            return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
        }).join(' ');
    };

    // Generate area path (for gradient fill)
    const generateAreaPath = (values: number[]) => {
        const linePath = values.map((value, index) => {
            const x = getX(index);
            const y = getY(value);
            return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
        }).join(' ');
        const lastX = getX(values.length - 1);
        const firstX = getX(0);
        const bottomY = padding.top + innerHeight;
        return `${linePath} L ${lastX} ${bottomY} L ${firstX} ${bottomY} Z`;
    };

    const yTicks = [0, 0.25, 0.5, 0.75, 1].map(t => minValue + t * (maxValue - minValue));

    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">
            <div className="flex-1 flex flex-col overflow-hidden">
                <TopBar />

                <div className="flex-1 overflow-y-auto">
                    <div className="max-w-7xl mx-auto px-6 py-6 space-y-5">
                        {/* Header */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-linear-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-md shadow-teal-500/30">
                                    <Icon name="sparkles" size={18} className="text-white" />
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold text-gray-900">Executive Dashboard</h1>
                                    <p className="text-gray-500 text-xs">High-level business intelligence & performance</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-gray-200 shadow-sm">
                                {['week', 'month', 'quarter', 'year'].map((range) => (
                                    <button
                                        key={range}
                                        onClick={() => setTimeRange(range)}
                                        className={`px-3 py-1.5 rounded-md text-[10px] font-semibold transition-all cursor-pointer ${timeRange === range
                                            ? 'bg-teal-600 text-white shadow-sm'
                                            : 'text-gray-600 hover:bg-gray-50'
                                            }`}
                                    >
                                        {range.charAt(0).toUpperCase() + range.slice(1)}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Key Metrics */}
                        <div className="grid grid-cols-4 gap-4">
                            {currentMetrics.map((metric, index) => (
                                <div key={index} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group">
                                    <div className="flex items-start justify-between mb-2">
                                        <div className={`w-9 h-9 rounded-lg bg-${metric.color}-50 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                            <Icon name={metric.icon as any} size={16} className={`text-${metric.color}-600`} />
                                        </div>
                                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${metric.positive ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                                            }`}>
                                            {metric.change}
                                        </span>
                                    </div>
                                    <p className="text-gray-500 text-[10px] font-semibold uppercase tracking-wider mb-0.5">{metric.label}</p>
                                    <h3 className="text-xl font-bold text-gray-900">{metric.value}</h3>
                                </div>
                            ))}
                        </div>

                        {/* Revenue Chart */}
                        <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <h2 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                                        <Icon name="file" size={16} className="text-teal-600" />
                                        Revenue Trend
                                    </h2>
                                    <p className="text-[10px] text-gray-500 mt-0.5">Current vs Previous Period</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-3 h-0.5 bg-teal-500 rounded-full" />
                                        <span className="text-[10px] text-gray-600 font-medium">Current</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-3 h-0.5 bg-gray-300 rounded-full" style={{ borderTop: '1px dashed' }} />
                                        <span className="text-[10px] text-gray-600 font-medium">Previous</span>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-56">
                                    <defs>
                                        <linearGradient id="tealGradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.3" />
                                            <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>

                                    {/* Grid lines */}
                                    {yTicks.map((tick, index) => (
                                        <g key={index}>
                                            <line
                                                x1={padding.left}
                                                y1={getY(tick)}
                                                x2={chartWidth - padding.right}
                                                y2={getY(tick)}
                                                stroke="#f3f4f6"
                                                strokeWidth="1"
                                            />
                                            <text
                                                x={padding.left - 8}
                                                y={getY(tick)}
                                                textAnchor="end"
                                                dominantBaseline="middle"
                                                className="text-[10px] fill-gray-400"
                                            >
                                                {Math.round(tick)}
                                            </text>
                                        </g>
                                    ))}

                                    {/* X-axis labels */}
                                    {currentData.labels.map((label, index) => (
                                        <text
                                            key={index}
                                            x={getX(index)}
                                            y={chartHeight - 8}
                                            textAnchor="middle"
                                            className="text-[10px] fill-gray-400"
                                        >
                                            {label}
                                        </text>
                                    ))}

                                    {/* Previous period line (dashed) */}
                                    <path
                                        d={generatePath(currentData.prevValues)}
                                        fill="none"
                                        stroke="#d1d5db"
                                        strokeWidth="2"
                                        strokeDasharray="4 4"
                                    />

                                    {/* Area fill */}
                                    <path
                                        d={generateAreaPath(currentData.values)}
                                        fill="url(#tealGradient)"
                                    />

                                    {/* Current period line */}
                                    <path
                                        d={generatePath(currentData.values)}
                                        fill="none"
                                        stroke="#14b8a6"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />

                                    {/* Data points */}
                                    {currentData.values.map((value, index) => (
                                        <g key={index}>
                                            <circle
                                                cx={getX(index)}
                                                cy={getY(value)}
                                                r={hoveredPoint === index ? 6 : 4}
                                                fill="#14b8a6"
                                                stroke="white"
                                                strokeWidth="2"
                                                className="cursor-pointer transition-all"
                                                onMouseEnter={() => setHoveredPoint(index)}
                                                onMouseLeave={() => setHoveredPoint(null)}
                                            />
                                            {hoveredPoint === index && (
                                                <g>
                                                    <rect
                                                        x={getX(index) - 30}
                                                        y={getY(value) - 32}
                                                        width="60"
                                                        height="24"
                                                        rx="6"
                                                        fill="#1f2937"
                                                    />
                                                    <text
                                                        x={getX(index)}
                                                        y={getY(value) - 16}
                                                        textAnchor="middle"
                                                        className="text-[10px] font-bold fill-white"
                                                    >
                                                        {value}K
                                                    </text>
                                                </g>
                                            )}
                                        </g>
                                    ))}
                                </svg>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                            {/* Main Content */}
                            <div className="lg:col-span-2 space-y-5">
                                {/* Department Performance */}
                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <h2 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                                            <Icon name="folder" size={16} className="text-teal-600" />
                                            Department Performance
                                        </h2>
                                        <div className="flex items-center gap-1.5">
                                            <button
                                                onClick={() => setSelectedDept('all')}
                                                className={`px-2.5 py-1 rounded-md text-[10px] font-semibold transition cursor-pointer ${selectedDept === 'all' ? 'bg-teal-600 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                                                    }`}
                                            >
                                                All
                                            </button>
                                            {['sales', 'marketing', 'engineering'].map(dept => (
                                                <button
                                                    key={dept}
                                                    onClick={() => setSelectedDept(dept)}
                                                    className={`px-2.5 py-1 rounded-md text-[10px] font-semibold transition cursor-pointer capitalize ${selectedDept === dept ? 'bg-teal-600 text-white' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                                                        }`}
                                                >
                                                    {dept}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                                        <div className="space-y-4">
                                            {filteredDepartments.map((dept, index) => (
                                                <div key={index} className="group cursor-pointer">
                                                    <div className="flex items-center justify-between mb-1.5">
                                                        <div className="flex items-center gap-2">
                                                            <h3 className="text-xs font-bold text-gray-900">{dept.name}</h3>
                                                            <span className="text-[10px] text-gray-500">Target: {dept.target}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-[10px] font-bold text-gray-900">{dept.actual}</span>
                                                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${dept.progress >= 80 ? 'bg-green-50 text-green-700' :
                                                                dept.progress >= 60 ? 'bg-yellow-50 text-yellow-700' :
                                                                    'bg-red-50 text-red-700'
                                                                }`}>
                                                                {dept.progress}%
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                                        <div
                                                            className={`h-full bg-linear-to-r from-${dept.color}-500 to-${dept.color}-600 rounded-full transition-all duration-700 group-hover:opacity-80`}
                                                            style={{ width: `${dept.progress}%` }}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Recent Highlights */}
                                <div>
                                    <h2 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                                        <Icon name="sparkles" size={16} className="text-teal-600" />
                                        Recent Highlights
                                    </h2>
                                    <div className="bg-white rounded-xl border border-gray-200 divide-y divide-gray-100 shadow-sm">
                                        {recentHighlights.map((highlight, index) => (
                                            <div key={index} className="p-4 hover:bg-gray-50 transition-all cursor-pointer group">
                                                <div className="flex items-start gap-2.5">
                                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform ${highlight.type === 'success' ? 'bg-green-50' : 'bg-blue-50'
                                                        }`}>
                                                        <Icon
                                                            name={highlight.icon as any}
                                                            size={14}
                                                            className={highlight.type === 'success' ? 'text-green-600' : 'text-blue-600'}
                                                        />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h3 className="font-bold text-gray-900 text-xs mb-0.5">{highlight.title}</h3>
                                                        <p className="text-[10px] text-gray-600 mb-1">{highlight.description}</p>
                                                        <p className="text-[9px] text-gray-400 font-medium">{highlight.time}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Upcoming Milestones */}
                                <div>
                                    <h2 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                                        <Icon name="calendar" size={16} className="text-teal-600" />
                                        Upcoming Milestones
                                    </h2>
                                    <div className="grid grid-cols-3 gap-3">
                                        {upcomingMilestones.map((milestone, index) => (
                                            <div key={index} className="bg-white rounded-xl p-3 border border-gray-200 hover:border-teal-400 hover:shadow-md transition-all cursor-pointer group">
                                                <div className={`w-2 h-2 rounded-full mb-2 ${milestone.priority === 'high' ? 'bg-red-500' : 'bg-yellow-500'
                                                    }`} />
                                                <h3 className="font-bold text-gray-900 text-[10px] mb-1 leading-tight">{milestone.title}</h3>
                                                <p className="text-[9px] text-gray-500 font-medium">{milestone.date}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Inline Sidebar */}
                            <div className="space-y-4">
                                {/* Executive Summary */}
                                <div className="bg-linear-to-br from-teal-600 to-teal-700 rounded-xl p-4 text-white shadow-md cursor-pointer hover:shadow-lg transition-shadow">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Icon name="sparkles" size={14} className="text-teal-100" />
                                        <h3 className="font-bold text-xs">Executive Summary</h3>
                                    </div>
                                    <p className="text-[10px] text-teal-50 mb-3 leading-relaxed">
                                        Strong performance across all departments. Revenue up 18% with excellent client satisfaction scores.
                                    </p>
                                    <button className="w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg text-[10px] font-bold transition backdrop-blur-sm border border-white/20 cursor-pointer">
                                        View Full Report
                                    </button>
                                </div>

                                {/* Key Alerts */}
                                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                                    <h3 className="font-bold text-gray-900 mb-3 text-xs flex items-center gap-1.5">
                                        <Icon name="alert" size={14} className="text-red-600" />
                                        Key Alerts
                                    </h3>
                                    <div className="space-y-2">
                                        {[
                                            { label: 'Contract renewal due', urgency: 'high', time: '18 days' },
                                            { label: 'Budget review needed', urgency: 'medium', time: '5 days' },
                                            { label: 'Team performance review', urgency: 'low', time: '2 weeks' },
                                        ].map((alert, index) => (
                                            <div key={index} className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-gray-50 transition cursor-pointer group">
                                                <div className={`w-2 h-2 rounded-full mt-1 shrink-0 ${alert.urgency === 'high' ? 'bg-red-500' :
                                                    alert.urgency === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                                                    }`} />
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-[10px] font-bold text-gray-800 group-hover:text-teal-700 transition">{alert.label}</p>
                                                    <p className="text-[9px] text-gray-400 mt-0.5 font-medium">{alert.time}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Quick Actions */}
                                <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
                                    <h3 className="font-bold text-gray-900 mb-3 text-xs flex items-center gap-1.5">
                                        <Icon name="more" size={14} className="text-teal-600" />
                                        Quick Actions
                                    </h3>
                                    <div className="space-y-1.5">
                                        {['Generate Report', 'Schedule Meeting', 'Review Budget'].map((action, index) => (
                                            <button key={index} className="w-full p-2.5 bg-gray-50 hover:bg-teal-50 border border-gray-200 hover:border-teal-300 rounded-lg transition-all text-left group cursor-pointer">
                                                <span className="text-[10px] font-bold text-gray-700 group-hover:text-teal-700">{action}</span>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ExecutiveDashboardRightPanel />
        </div>
    );
}