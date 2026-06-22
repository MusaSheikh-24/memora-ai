'use client';
import Icon from '@/components/icon';

export default function AlertsRightPanel() {
    return (
        <aside className="w-80 bg-white border-l border-gray-200 h-screen flex flex-col shrink-0">
            <div className="px-4 py-3 border-b border-gray-100 shrink-0">
                <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-teal-600 rounded-lg flex items-center justify-center">
                        <Icon name="bell" size={14} className="text-white" />
                    </div>
                    <div>
                        <h2 className="text-xs font-bold text-gray-900">Alert Summary</h2>
                    </div>
                </div>
            </div>

            <div className="flex-1 p-4 space-y-4 overflow-hidden">
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-2">
                    <div className="bg-teal-50 rounded-lg p-2.5 border border-teal-100">
                        <div className="text-lg font-bold text-teal-600">5</div>
                        <div className="text-[10px] text-gray-600 font-medium">Total</div>
                    </div>
                    <div className="bg-amber-50 rounded-lg p-2.5 border border-amber-100">
                        <div className="text-lg font-bold text-amber-600">1</div>
                        <div className="text-[10px] text-gray-600 font-medium">Urgent</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-2.5 border border-blue-100">
                        <div className="text-lg font-bold text-blue-600">3</div>
                        <div className="text-[10px] text-gray-600 font-medium">Unread</div>
                    </div>
                    <div className="bg-emerald-50 rounded-lg p-2.5 border border-emerald-100">
                        <div className="text-lg font-bold text-emerald-600">2</div>
                        <div className="text-[10px] text-gray-600 font-medium">Resolved</div>
                    </div>
                </div>

                {/* Categories */}
                <div>
                    <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Categories</h3>
                    <div className="space-y-1.5">
                        <div className="flex items-center justify-between py-1.5">
                            <span className="text-xs text-gray-700">Contracts</span>
                            <span className="text-[10px] font-bold text-teal-600 bg-teal-50 px-2 py-0.5 rounded">2</span>
                        </div>
                        <div className="flex items-center justify-between py-1.5">
                            <span className="text-xs text-gray-700">Emails</span>
                            <span className="text-[10px] font-bold text-gray-600 bg-gray-100 px-2 py-0.5 rounded">1</span>
                        </div>
                        <div className="flex items-center justify-between py-1.5">
                            <span className="text-xs text-gray-700">Invoices</span>
                            <span className="text-[10px] font-bold text-gray-600 bg-gray-100 px-2 py-0.5 rounded">1</span>
                        </div>
                        <div className="flex items-center justify-between py-1.5">
                            <span className="text-xs text-gray-700">Meetings</span>
                            <span className="text-[10px] font-bold text-gray-600 bg-gray-100 px-2 py-0.5 rounded">1</span>
                        </div>
                    </div>
                </div>

                {/* Action Button */}
                <button className="w-full py-2 bg-teal-600 text-white rounded-lg text-xs font-semibold hover:bg-teal-700 transition flex items-center justify-center gap-1.5">
                    <Icon name="settings" size={12} />
                    Configure Alerts
                </button>
            </div>
        </aside>
    );
}