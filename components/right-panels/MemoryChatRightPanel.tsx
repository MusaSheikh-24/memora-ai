export default function MemoryChatRightPanel() {
    return (
        <aside className="w-80 bg-white border-l border-gray-200 h-screen flex flex-col shrink-0 overflow-hidden">
            {/* Header */}
            <div className="px-5 py-3 border-b border-gray-100 shrink-0">
                <div className="flex items-center gap-2 text-teal-700 font-semibold text-sm">
                    <span>✦</span> Here's what I found
                </div>
            </div>

            {/* Content - Fixed, No Scroll */}
            <div className="flex-1 px-5 py-4 overflow-hidden">
                {/* Empty State Message */}
                <div className="mb-8">
                    <p className="text-sm text-gray-400 text-center py-8">
                        Ask a question to see results here
                    </p>
                </div>

                {/* Sources */}
                <div>
                    <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2.5">Sources</h3>
                    <div className="space-y-1.5">
                        <div className="flex items-center justify-between py-1.5 border-b border-gray-100 last:border-0 cursor-pointer">
                            <span className="text-[13px] text-gray-700 flex items-center gap-2">
                                <span className="text-gray-400 text-sm">📄</span> Documents
                            </span>
                            <span className="bg-teal-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">24</span>
                        </div>
                        <div className="flex items-center justify-between py-1.5 border-b border-gray-100 last:border-0 cursor-pointer">
                            <span className="text-[13px] text-gray-700 flex items-center gap-2">
                                <span className="text-gray-400 text-sm">📧</span> Emails
                            </span>
                            <span className="bg-gray-200 text-gray-700 text-[10px] font-bold px-2 py-0.5 rounded-full">12</span>
                        </div>
                        <div className="flex items-center justify-between py-1.5 border-b border-gray-100 last:border-0 cursor-pointer">
                            <span className="text-[13px] text-gray-700 flex items-center gap-2">
                                <span className="text-gray-400 text-sm">📅</span> Meetings
                            </span>
                            <span className="bg-gray-200 text-gray-700 text-[10px] font-bold px-2 py-0.5 rounded-full">3</span>
                        </div>
                        <div className="flex items-center justify-between py-1.5 cursor-pointer">
                            <span className="text-[13px] text-gray-700 flex items-center gap-2">
                                <span className="text-gray-400 text-sm">📝</span> Notes
                            </span>
                            <span className="bg-gray-200 text-gray-700 text-[10px] font-bold px-2 py-0.5 rounded-full">7</span>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}