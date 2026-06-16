export default function DocumentsRightPanel() {
    return (
        <aside className="w-80 bg-white border-l border-gray-200 h-screen flex flex-col shrink-0 overflow-hidden">
            <div className="px-5 py-3 border-b border-gray-100 shrink-0">
                <div className="flex items-center gap-2 text-gray-900 font-semibold text-sm">
                    <span>📁</span> Storage Overview
                </div>
            </div>

            <div className="flex-1 px-5 py-4 overflow-y-auto">
                <div className="mb-6">
                    <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">
                        By Type
                    </h3>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between p-2.5 bg-red-50 rounded-lg cursor-pointer hover:bg-red-100 transition">
                            <span className="text-sm text-gray-700 flex items-center gap-2">
                                <span>📄</span> PDFs
                            </span>
                            <span className="text-sm font-bold text-red-600">412</span>
                        </div>

                        <div className="flex items-center justify-between p-2.5 bg-blue-50 rounded-lg cursor-pointer hover:bg-blue-100 transition">
                            <span className="text-sm text-gray-700 flex items-center gap-2">
                                <span>📧</span> Emails
                            </span>
                            <span className="text-sm font-bold text-blue-600">281</span>
                        </div>

                        <div className="flex items-center justify-between p-2.5 bg-orange-50 rounded-lg cursor-pointer hover:bg-orange-100 transition">
                            <span className="text-sm text-gray-700 flex items-center gap-2">
                                <span>📅</span> Meetings
                            </span>
                            <span className="text-sm font-bold text-orange-600">94</span>
                        </div>

                        <div className="flex items-center justify-between p-2.5 bg-teal-50 rounded-lg cursor-pointer hover:bg-teal-100 transition">
                            <span className="text-sm text-gray-700 flex items-center gap-2">
                                <span>📋</span> Docs
                            </span>
                            <span className="text-sm font-bold text-teal-600">60</span>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">
                        Recent Uploads
                    </h3>
                    <div className="space-y-2">
                        <div className="p-3 bg-teal-50/60 rounded-xl border border-teal-100 cursor-pointer hover:bg-teal-50 transition">
                            <div className="flex items-center gap-2.5">
                                <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center text-teal-600 text-sm">
                                    📄
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-gray-900">INV-45871.pdf</div>
                                    <div className="text-[11px] text-gray-500">Just now</div>
                                </div>
                            </div>
                        </div>

                        <div className="p-3 bg-teal-50/60 rounded-xl border border-teal-100 cursor-pointer hover:bg-teal-50 transition">
                            <div className="flex items-center gap-2.5">
                                <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center text-teal-600 text-sm">
                                    📄
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-gray-900">ABC MSA 2024.pdf</div>
                                    <div className="text-[11px] text-gray-500">2 hours ago</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}