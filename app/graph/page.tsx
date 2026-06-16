'use client';
import { useState } from 'react';
import TopBar from '@/components/topbar';
import GraphRightPanel from '@/components/right-panels/GraphRightPanel';

const filterTabs = [
    { label: 'All', value: 'all' },
    { label: 'Companies', value: 'company' },
    { label: 'People', value: 'person' },
    { label: 'Contracts', value: 'contract' },
    { label: 'Meetings', value: 'meeting' },
];

// Graph nodes data
const graphNodes = [
    { id: 1, label: 'Your Company', type: 'company', icon: '🏬', color: 'teal', x: 50, y: 50 },
    { id: 2, label: 'ABC Company', type: 'company', icon: '', color: 'orange', x: 25, y: 30 },
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
    teal: 'bg-teal-100 border-teal-400 text-teal-700',
    orange: 'bg-orange-100 border-orange-400 text-orange-700',
    red: 'bg-red-100 border-red-400 text-red-700',
    pink: 'bg-pink-100 border-pink-400 text-pink-700',
};

const labelColorMap: Record<string, string> = {
    teal: 'text-teal-700',
    orange: 'text-orange-700',
    red: 'text-red-700',
    pink: 'text-pink-700',
};

const statsCards = [
    { label: 'Companies', value: '47', color: 'text-gray-900', barColor: 'bg-teal-600' },
    { label: 'People', value: '132', color: 'text-teal-600', barColor: 'bg-teal-500' },
    { label: 'Contracts', value: '89', color: 'text-orange-500', barColor: 'bg-orange-500' },
    { label: 'Connections', value: '1.2K', color: 'text-pink-500', barColor: 'bg-pink-500' },
];

export default function GraphPage() {
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredNodes = graphNodes.filter(
        (node) => activeFilter === 'all' || node.type === activeFilter
    );

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Main Content Area */}
            <main className="flex-1 flex flex-col overflow-hidden bg-gray-50">
                {/* Fixed TopBar */}
                <TopBar />

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-8">
                    {/* Header */}
                    <div className="mb-6">
                        <h1 className="text-3xl font-extrabold text-gray-900 mb-2 flex items-center gap-2">
                            <span className="text-2xl">🕸️</span> Memory Graph
                        </h1>
                        <p className="text-sm text-gray-500">
                            See how people, companies, contracts, and conversations connect
                        </p>
                    </div>

                    {/* Filter Tabs + Zoom */}
                    <div className="flex items-center justify-between mb-6 bg-white border border-gray-200 rounded-xl p-2">
                        <div className="flex gap-2">
                            {filterTabs.map((tab) => (
                                <button
                                    key={tab.value}
                                    onClick={() => setActiveFilter(tab.value)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition cursor-pointer ${activeFilter === tab.value
                                            ? 'bg-teal-600 text-white'
                                            : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                                        }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition cursor-pointer border border-gray-200">
                            <span>🔍</span> Zoom
                        </button>
                    </div>

                    {/* Graph Visualization */}
                    <div className="bg-teal-50/30 border border-teal-100 rounded-2xl p-8 mb-6 relative" style={{ height: '500px' }}>
                        {/* SVG Lines for connections */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
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
                                        stroke="#5eead4"
                                        strokeWidth="1.5"
                                        opacity="0.6"
                                    />
                                );
                            })}
                        </svg>

                        {/* Nodes */}
                        {filteredNodes.map((node) => (
                            <div
                                key={node.id}
                                className="absolute flex flex-col items-center cursor-pointer hover:scale-110 transition-transform"
                                style={{
                                    left: `${node.x}%`,
                                    top: `${node.y}%`,
                                    transform: 'translate(-50%, -50%)',
                                    zIndex: 2,
                                }}
                            >
                                <div
                                    className={`w-12 h-12 rounded-full border-2 flex items-center justify-center text-xl bg-white ${colorMap[node.color]}`}
                                >
                                    {node.icon}
                                </div>
                                <span className={`text-xs font-semibold mt-1 ${labelColorMap[node.color]}`}>
                                    {node.label}
                                </span>
                            </div>
                        ))}

                        {/* Empty State */}
                        {filteredNodes.length === 0 && (
                            <div className="flex items-center justify-center h-full">
                                <div className="text-center">
                                    <div className="text-4xl mb-3">🕸️</div>
                                    <p className="text-gray-500">No nodes found for this filter</p>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-4 gap-6">
                        {statsCards.map((stat, idx) => (
                            <div
                                key={idx}
                                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm cursor-pointer hover:shadow-md transition"
                            >
                                <div className={`text-3xl font-extrabold mb-1 ${stat.color}`}>{stat.value}</div>
                                <div className="text-sm text-gray-500 mb-3">{stat.label}</div>
                                <div className="w-full bg-gray-100 rounded-full h-1.5">
                                    <div className={`${stat.barColor} h-1.5 rounded-full w-3/4`}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            {/* Fixed Right Panel - Graph ka */}
            <GraphRightPanel />
        </div>
    );
}