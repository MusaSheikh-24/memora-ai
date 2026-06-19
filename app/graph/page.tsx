'use client';
import { useState } from 'react';
import TopBar from '@/components/topbar';
import GraphRightPanel from '@/components/right-panels/GraphRightPanel';

const filterTabs = [
    { label: 'All', value: 'all', icon: '🌐' },
    { label: 'Companies', value: 'company', icon: '🏢' },
    { label: 'People', value: 'person', icon: '👥' },
    { label: 'Contracts', value: 'contract', icon: '📄' },
    { label: 'Meetings', value: 'meeting', icon: '📅' },
];

// Graph nodes data
const graphNodes = [
    { id: 1, label: 'Your Company', type: 'company', icon: '🏬', color: 'teal', x: 50, y: 50 },
    { id: 2, label: 'ABC Company', type: 'company', icon: '🏢', color: 'orange', x: 25, y: 30 },
    { id: 3, label: 'Apple Inc', type: 'company', icon: '🍎', color: 'red', x: 75, y: 25 },
    { id: 4, label: 'Ali Khan', type: 'person', icon: '👤', color: 'orange', x: 20, y: 65 },
    { id: 5, label: 'Sarah R.', type: 'person', icon: '👤', color: 'pink', x: 80, y: 70 },
    { id: 6, label: 'MSA 2024', type: 'contract', icon: '📄', color: 'teal', x: 40, y: 15 },
    { id: 7, label: 'Proposal Q4', type: 'contract', icon: '📊', color: 'orange', x: 65, y: 40 },
    { id: 8, label: 'Q1 Meeting', type: 'meeting', icon: '📅', color: 'teal', x: 30, y: 85 },
    { id: 9, label: 'INV-45871', type: 'contract', icon: '📄', color: 'teal', x: 55, y: 85 },
];

// Connections between nodes
const connections = [
    { from: 1, to: 2 },
    { from: 1, to: 3 },
    { from: 1, to: 4 },
    { from: 1, to: 5 },
    { from: 1, to: 6 },
    { from: 1, to: 7 },
    { from: 1, to: 8 },
    { from: 1, to: 9 },
    { from: 2, to: 6 },
    { from: 3, to: 7 },
    { from: 4, to: 8 },
    { from: 5, to: 9 },
    { from: 2, to: 4 },
    { from: 3, to: 5 },
];

const colorMap: Record<string, string> = {
    teal: 'bg-gradient-to-br from-teal-50 to-teal-100 border-teal-400 text-teal-700 shadow-teal-200/50',
    orange: 'bg-gradient-to-br from-orange-50 to-orange-100 border-orange-400 text-orange-700 shadow-orange-200/50',
    red: 'bg-gradient-to-br from-red-50 to-red-100 border-red-400 text-red-700 shadow-red-200/50',
    pink: 'bg-gradient-to-br from-pink-50 to-pink-100 border-pink-400 text-pink-700 shadow-pink-200/50',
};

const labelColorMap: Record<string, string> = {
    teal: 'text-teal-700',
    orange: 'text-orange-700',
    red: 'text-red-700',
    pink: 'text-pink-700',
};

const statsCards = [
    { label: 'Companies', value: '47', icon: '🏢', color: 'text-gray-900', barColor: 'bg-gradient-to-r from-teal-500 to-teal-600', bgColor: 'bg-teal-50' },
    { label: 'People', value: '132', icon: '👥', color: 'text-teal-600', barColor: 'bg-gradient-to-r from-teal-400 to-teal-500', bgColor: 'bg-teal-50' },
    { label: 'Contracts', value: '89', icon: '📄', color: 'text-orange-500', barColor: 'bg-gradient-to-r from-orange-400 to-orange-500', bgColor: 'bg-orange-50' },
    { label: 'Connections', value: '1.2K', icon: '🔗', color: 'text-pink-500', barColor: 'bg-gradient-to-r from-pink-400 to-pink-500', bgColor: 'bg-pink-50' },
];

export default function GraphPage() {
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredNodes = graphNodes.filter(
        (node) => activeFilter === 'all' || node.type === activeFilter
    );

    return (
        <div className="flex h-screen overflow-hidden bg-gray-50">
            {/* Main Content Area */}
            <main className="flex-1 flex flex-col overflow-hidden">
                {/* Fixed TopBar */}
                <TopBar />

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto">
                    <div className="max-w-7xl mx-auto p-8 space-y-6">
                        {/* Header */}
                        <div className="mb-8">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-lg shadow-teal-500/30">
                                    <span className="text-2xl">🕸️</span>
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold text-gray-900">
                                        Memory Graph
                                    </h1>
                                    <p className="text-sm text-gray-500 mt-0.5">
                                        Visualize how people, companies, contracts, and conversations connect
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Filter Tabs + Zoom */}
                        <div className="bg-white border border-gray-200 rounded-2xl p-2 shadow-sm flex items-center justify-between">
                            <div className="flex gap-1.5">
                                {filterTabs.map((tab) => (
                                    <button
                                        key={tab.value}
                                        onClick={() => setActiveFilter(tab.value)}
                                        className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer flex items-center gap-2 ${activeFilter === tab.value
                                            ? 'bg-linear-to-r from-teal-500 to-teal-600 text-white shadow-md shadow-teal-500/30 scale-105'
                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                            }`}
                                    >
                                        <span className="text-base">{tab.icon}</span>
                                        {tab.label}
                                    </button>
                                ))}
                            </div>
                            <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200 cursor-pointer border border-gray-200 hover:border-gray-300">
                                <span className="text-base">🔍</span>
                                Zoom
                            </button>
                        </div>

                        {/* Graph Visualization */}
                        <div className="bg-linear-to-br from-teal-50/50 via-white to-teal-50/30 border border-teal-100 rounded-3xl p-8 relative shadow-sm overflow-hidden" style={{ height: '550px' }}>
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-[0.03]" style={{
                                backgroundImage: `radial-gradient(circle, #0d9488 1px, transparent 1px)`,
                                backgroundSize: '24px 24px'
                            }}></div>

                            {/* SVG Lines for connections */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                                <defs>
                                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#5eead4" stopOpacity="0.4" />
                                        <stop offset="50%" stopColor="#5eead4" stopOpacity="0.8" />
                                        <stop offset="100%" stopColor="#5eead4" stopOpacity="0.4" />
                                    </linearGradient>
                                </defs>
                                {connections.map((conn, idx) => {
                                    const fromNode = graphNodes.find((n) => n.id === conn.from);
                                    const toNode = graphNodes.find((n) => n.id === conn.to);
                                    if (!fromNode || !toNode) return null;

                                    const fromVisible = filteredNodes.find((n) => n.id === conn.from);
                                    const toVisible = filteredNodes.find((n) => n.id === conn.to);
                                    if (!fromVisible || !toVisible) return null;

                                    return (
                                        <line
                                            key={idx}
                                            x1={`${fromNode.x}%`}
                                            y1={`${fromNode.y}%`}
                                            x2={`${toNode.x}%`}
                                            y2={`${toNode.y}%`}
                                            stroke="url(#lineGradient)"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        />
                                    );
                                })}
                            </svg>

                            {/* Nodes */}
                            {filteredNodes.map((node) => (
                                <div
                                    key={node.id}
                                    className="absolute flex flex-col items-center cursor-pointer group"
                                    style={{
                                        left: `${node.x}%`,
                                        top: `${node.y}%`,
                                        transform: 'translate(-50%, -50%)',
                                        zIndex: 2,
                                    }}
                                >
                                    <div
                                        className={`w-14 h-14 rounded-2xl border-2 flex items-center justify-center text-2xl bg-white shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl ${colorMap[node.color]}`}
                                    >
                                        {node.icon}
                                    </div>
                                    <div className="mt-2 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm border border-gray-100 opacity-90 group-hover:opacity-100 transition-opacity">
                                        <span className={`text-xs font-semibold whitespace-nowrap ${labelColorMap[node.color]}`}>
                                            {node.label}
                                        </span>
                                    </div>
                                </div>
                            ))}

                            {/* Empty State */}
                            {filteredNodes.length === 0 && (
                                <div className="flex items-center justify-center h-full relative z-10">
                                    <div className="text-center space-y-3">
                                        <div className="w-20 h-20 mx-auto rounded-full bg-gray-100 flex items-center justify-center">
                                            <span className="text-4xl">🕸️</span>
                                        </div>
                                        <div>
                                            <p className="text-gray-700 font-semibold">No nodes found</p>
                                            <p className="text-gray-500 text-sm mt-1">Try selecting a different filter</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Stats Cards */}
                        <div className="grid grid-cols-4 gap-5">
                            {statsCards.map((stat, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                                            {stat.icon}
                                        </div>
                                        <div className="text-right">
                                            <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
                                        </div>
                                    </div>
                                    <div className="text-sm font-medium text-gray-600 mb-3">{stat.label}</div>
                                    <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                                        <div className={`${stat.barColor} h-2 rounded-full w-3/4 transition-all duration-500`}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            {/* Fixed Right Panel - Graph ka */}
            <GraphRightPanel />
        </div>
    );
}