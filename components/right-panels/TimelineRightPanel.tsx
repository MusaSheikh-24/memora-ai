export default function TimelineRightPanel() {
    return (
        <aside className="w-80 bg-white border-l border-gray-200 h-screen flex flex-col shrink-0 overflow-hidden">
            {/* Header */}
            <div className="px-5 py-3 border-b border-gray-100 shrink-0">
                <div className="flex items-center gap-2 text-gray-900 font-semibold text-sm">
                    <span>📅</span> Timeline Summary
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 px-5 py-4 overflow-y-auto">
                {/* This Week Section */}
                <div>
                    <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">
                        This Week
                    </h3>
                    <div className="space-y-2">
                        {/* 3 Invoices uploaded */}
                        <div className="p-3 bg-teal-50/60 rounded-xl border border-teal-100 cursor-pointer hover:bg-teal-50 transition">
                            <div className="flex items-center gap-2.5">
                                <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center text-teal-600 text-sm">
                                    📄
                                </div>
                                <div className="text-sm font-semibold text-gray-900">3 Invoices uploaded</div>
                            </div>
                        </div>

                        {/* 2 Meetings recorded */}
                        <div className="p-3 bg-teal-50/60 rounded-xl border border-teal-100 cursor-pointer hover:bg-teal-50 transition">
                            <div className="flex items-center gap-2.5">
                                <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center text-orange-600 text-sm">
                                    📅
                                </div>
                                <div className="text-sm font-semibold text-gray-900">2 Meetings recorded</div>
                            </div>
                        </div>

                        {/* 1 Email thread */}
                        <div className="p-3 bg-teal-50/60 rounded-xl border border-teal-100 cursor-pointer hover:bg-teal-50 transition">
                            <div className="flex items-center gap-2.5">
                                <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center text-blue-600 text-sm">
                                    📧
                                </div>
                                <div className="text-sm font-semibold text-gray-900">1 Email thread</div>
                            </div>
                        </div>

                        {/* 1 Document created */}
                        <div className="p-3 bg-teal-50/60 rounded-xl border border-teal-100 cursor-pointer hover:bg-teal-50 transition">
                            <div className="flex items-center gap-2.5">
                                <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center text-indigo-600 text-sm">
                                    📋
                                </div>
                                <div className="text-sm font-semibold text-gray-900">1 Document created</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}