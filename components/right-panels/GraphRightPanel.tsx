'use client';
import Icon from '../icon';

export default function GraphRightPanel() {
    return (
        <aside className="w-80 bg-white border-l border-gray-200 h-screen flex flex-col shrink-0 overflow-hidden">
            {/* Header */}
            <div className="px-4 py-3 border-b border-gray-100 shrink-0">
                <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-teal-600 rounded-lg flex items-center justify-center">
                        <Icon name="graph" size={14} className="text-white" />
                    </div>
                    <div>
                        <h2 className="text-xs font-bold text-gray-900">Graph Stats</h2>
                        <p className="text-[10px] text-gray-500">Network overview</p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden">
                <div className="p-4 space-y-4">
                    {/* Most Connected Section */}
                    <div>
                        <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                            <Icon name="users" size={10} className="text-teal-600" />
                            Most Connected
                        </h3>
                        <div className="space-y-1.5">
                            {/* ABC Company */}
                            <div className="p-2.5 bg-teal-50/60 rounded-lg border border-teal-100 cursor-pointer hover:bg-teal-50 transition">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center text-orange-600 text-sm">
                                        🏭
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-xs font-semibold text-gray-900 truncate">ABC Company</div>
                                        <div className="text-[10px] text-gray-500">48 connections</div>
                                    </div>
                                </div>
                            </div>

                            {/* Apple Inc */}
                            <div className="p-2.5 bg-teal-50/60 rounded-lg border border-teal-100 cursor-pointer hover:bg-teal-50 transition">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center text-red-600 text-sm">
                                        🍎
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-xs font-semibold text-gray-900 truncate">Apple Inc</div>
                                        <div className="text-[10px] text-gray-500">32 connections</div>
                                    </div>
                                </div>
                            </div>

                            {/* Ali Khan */}
                            <div className="p-2.5 bg-teal-50/60 rounded-lg border border-teal-100 cursor-pointer hover:bg-teal-50 transition">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center text-gray-600 text-sm">
                                        👤
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="text-xs font-semibold text-gray-900 truncate">Ali Khan</div>
                                        <div className="text-[10px] text-gray-500">27 connections</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Graph Info */}
                    <div>
                        <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                            <Icon name="info" size={10} className="text-teal-600" />
                            Graph Info
                        </h3>
                        <div className="bg-linear-to-br from-teal-50 to-emerald-50 rounded-lg border border-teal-100 p-3">
                            <div className="flex items-center justify-between py-1.5 border-b border-teal-100/50">
                                <span className="text-[10px] text-gray-600">Total Nodes</span>
                                <span className="text-[10px] font-bold text-teal-600">268</span>
                            </div>
                            <div className="flex items-center justify-between py-1.5 border-b border-teal-100/50">
                                <span className="text-[10px] text-gray-600">Total Edges</span>
                                <span className="text-[10px] font-bold text-teal-600">1.2K</span>
                            </div>
                            <div className="flex items-center justify-between py-1.5">
                                <span className="text-[10px] text-gray-600">Density</span>
                                <span className="text-[10px] font-bold text-teal-600">0.67</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="pt-3 border-t border-gray-100">
                        <button className="w-full py-2 bg-teal-600 text-white rounded-lg text-xs font-semibold hover:bg-teal-700 transition flex items-center justify-center gap-1.5 shadow-sm">
                            <Icon name="plus" size={12} strokeWidth={2.5} />
                            Add New Node
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    );
}