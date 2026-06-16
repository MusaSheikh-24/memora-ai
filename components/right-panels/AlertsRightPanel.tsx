export default function AlertsRightPanel() {
    return (
        <aside className="w-80 bg-white border-l border-gray-200 h-screen flex flex-col shrink-0 overflow-hidden">
            {/* Header */}
            <div className="px-5 py-3 border-b border-gray-100 shrink-0">
                <div className="flex items-center gap-2 text-gray-900 font-semibold text-sm">
                    <span>🔔</span> Alert Summary
                </div>
            </div>

            {/* Content - No Scroll */}
            <div className="flex-1 px-5 py-4 overflow-hidden">
                {/* Action Needed Section */}
                <div className="mb-5">
                    <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2.5">
                        Action Needed
                    </h3>
                    <div className="p-3 bg-teal-50/60 rounded-xl border-l-4 border-l-teal-500 border-t-teal-100 border-r-teal-100 border-b-teal-100 cursor-pointer hover:bg-teal-50 transition">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center text-lg">
                                ⚠️
                            </div>
                            <div>
                                <div className="text-sm font-bold text-gray-900">3 urgent alerts</div>
                                <div className="text-[11px] text-gray-500">Review ASAP</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Alert Categories */}
                <div className="mb-5">
                    <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2.5">
                        By Category
                    </h3>
                    <div className="space-y-1.5">
                        <div className="flex items-center justify-between py-1.5 border-b border-gray-100 last:border-0 cursor-pointer">
                            <span className="text-[13px] text-gray-700 flex items-center gap-2">
                                <span className="text-gray-400 text-sm"></span> Contracts
                            </span>
                            <span className="bg-teal-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">2</span>
                        </div>
                        <div className="flex items-center justify-between py-1.5 border-b border-gray-100 last:border-0 cursor-pointer">
                            <span className="text-[13px] text-gray-700 flex items-center gap-2">
                                <span className="text-gray-400 text-sm">📧</span> Emails
                            </span>
                            <span className="bg-gray-400 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">1</span>
                        </div>
                        <div className="flex items-center justify-between py-1.5 border-b border-gray-100 last:border-0 cursor-pointer">
                            <span className="text-[13px] text-gray-700 flex items-center gap-2">
                                <span className="text-gray-400 text-sm">💰</span> Invoices
                            </span>
                            <span className="bg-gray-400 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">1</span>
                        </div>
                        <div className="flex items-center justify-between py-1.5 cursor-pointer">
                            <span className="text-[13px] text-gray-700 flex items-center gap-2">
                                <span className="text-gray-400 text-sm">📅</span> Meetings
                            </span>
                            <span className="bg-gray-400 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">1</span>
                        </div>
                    </div>
                </div>

                {/* This Week Stats */}
                <div>
                    <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2.5">
                        This Week
                    </h3>
                    <div className="bg-linear-to-br from-teal-50 to-emerald-50 rounded-xl border border-teal-100 p-3">
                        <div className="flex items-center justify-between mb-1.5">
                            <span className="text-xs text-gray-600">Total Alerts</span>
                            <span className="text-sm font-bold text-teal-600">12</span>
                        </div>
                        <div className="flex items-center justify-between mb-1.5">
                            <span className="text-xs text-gray-600">Resolved</span>
                            <span className="text-sm font-bold text-green-600">8</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-600">Pending</span>
                            <span className="text-sm font-bold text-orange-600">4</span>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}