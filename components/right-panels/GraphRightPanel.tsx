export default function GraphRightPanel() {
    return (
        <aside className="w-80 bg-white border-l border-gray-200 h-screen flex flex-col shrink-0 overflow-hidden">
            {/* Header */}
            <div className="px-5 py-3 border-b border-gray-100 shrink-0">
                <div className="flex items-center gap-2 text-gray-900 font-semibold text-sm">
                    <span>️</span> Graph Stats
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 px-5 py-4 overflow-y-auto">
                {/* Most Connected Section */}
                <div>
                    <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">
                        Most Connected
                    </h3>
                    <div className="space-y-2">
                        {/* ABC Company */}
                        <div className="p-3 bg-teal-50/60 rounded-xl border border-teal-100 cursor-pointer hover:bg-teal-50 transition">
                            <div className="flex items-center gap-2.5">
                                <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center text-orange-600 text-sm">
                                    🏭
                                </div>
                                <div className="flex-1">
                                    <div className="text-sm font-semibold text-gray-900">ABC Company</div>
                                    <div className="text-[11px] text-gray-500">48 connections</div>
                                </div>
                            </div>
                        </div>

                        {/* Apple Inc */}
                        <div className="p-3 bg-teal-50/60 rounded-xl border border-teal-100 cursor-pointer hover:bg-teal-50 transition">
                            <div className="flex items-center gap-2.5">
                                <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center text-red-600 text-sm">

                                </div>
                                <div className="flex-1">
                                    <div className="text-sm font-semibold text-gray-900">Apple Inc</div>
                                    <div className="text-[11px] text-gray-500">32 connections</div>
                                </div>
                            </div>
                        </div>

                        {/* Ali Khan */}
                        <div className="p-3 bg-teal-50/60 rounded-xl border border-teal-100 cursor-pointer hover:bg-teal-50 transition">
                            <div className="flex items-center gap-2.5">
                                <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center text-gray-600 text-sm">
                                    👤
                                </div>
                                <div className="flex-1">
                                    <div className="text-sm font-semibold text-gray-900">Ali Khan</div>
                                    <div className="text-[11px] text-gray-500">27 connections</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="mt-6">
                    <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">
                        Quick Actions
                    </h3>
                    <div className="space-y-2">
                        <button className="w-full bg-teal-600 text-white text-sm font-medium py-2.5 rounded-lg hover:bg-teal-700 transition cursor-pointer shadow-sm shadow-teal-200">
                            Add New Node
                        </button>
                        <button className="w-full bg-white border border-gray-200 text-gray-700 text-sm font-medium py-2.5 rounded-lg hover:bg-gray-50 transition cursor-pointer">
                            Export Graph
                        </button>
                    </div>
                </div>

                {/* Graph Info */}
                <div className="mt-6">
                    <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">
                        Graph Info
                    </h3>
                    <div className="bg-linear-to-br from-teal-50 to-emerald-50 rounded-xl border border-teal-100 p-4">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-xs text-gray-600">Total Nodes</span>
                            <span className="text-sm font-bold text-teal-600">268</span>
                        </div>
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-xs text-gray-600">Total Edges</span>
                            <span className="text-sm font-bold text-teal-600">1.2K</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-600">Density</span>
                            <span className="text-sm font-bold text-teal-600">0.67</span>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}