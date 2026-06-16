export default function SettingsRightPanel() {
    return (
        <aside className="w-80 bg-white border-l border-gray-200 h-screen flex flex-col shrink-0 overflow-hidden">
            {/* Header */}
            <div className="px-5 py-3 border-b border-gray-100 shrink-0">
                <div className="flex items-center gap-2 text-gray-900 font-semibold text-sm">
                    <span>️</span> Quick Actions
                </div>
            </div>

            {/* Content - No Scroll */}
            <div className="flex-1 px-5 py-4 overflow-hidden">
                {/* Account Section */}
                <div>
                    <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">
                        Account
                    </h3>
                    <div className="space-y-2">
                        {/* Edit Profile */}
                        <div className="p-3 bg-teal-50/60 rounded-xl border border-teal-100 cursor-pointer hover:bg-teal-50 transition">
                            <div className="flex items-center gap-2.5">
                                <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center text-gray-600 text-sm">
                                    👤
                                </div>
                                <div className="text-sm font-semibold text-gray-900">Edit Profile</div>
                            </div>
                        </div>

                        {/* Change Password */}
                        <div className="p-3 bg-teal-50/60 rounded-xl border border-teal-100 cursor-pointer hover:bg-teal-50 transition">
                            <div className="flex items-center gap-2.5">
                                <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center text-yellow-600 text-sm">
                                    🔑
                                </div>
                                <div className="text-sm font-semibold text-gray-900">Change Password</div>
                            </div>
                        </div>

                        {/* Manage Integrations */}
                        <div className="p-3 bg-teal-50/60 rounded-xl border border-teal-100 cursor-pointer hover:bg-teal-50 transition">
                            <div className="flex items-center gap-2.5">
                                <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center text-teal-600 text-sm">
                                    🔗
                                </div>
                                <div className="text-sm font-semibold text-gray-900">Manage Integrations</div>
                            </div>
                        </div>

                        {/* Usage & Billing */}
                        <div className="p-3 bg-teal-50/60 rounded-xl border border-teal-100 cursor-pointer hover:bg-teal-50 transition">
                            <div className="flex items-center gap-2.5">
                                <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center text-blue-600 text-sm">

                                </div>
                                <div className="text-sm font-semibold text-gray-900">Usage & Billing</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Storage Usage */}
                <div className="mt-6">
                    <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">
                        Storage Usage
                    </h3>
                    <div className="bg-linear-to-br from-teal-50 to-emerald-50 rounded-xl border border-teal-100 p-4">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-xs text-gray-600">Used</span>
                            <span className="text-sm font-bold text-teal-600">812 GB</span>
                        </div>
                        <div className="w-full bg-white/60 rounded-full h-2 mb-2 border border-teal-100">
                            <div className="bg-linear-to-r from-teal-600 to-emerald-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-600">Total</span>
                            <span className="text-sm font-bold text-teal-600">2 TBs</span>
                        </div>
                    </div>
                </div>

                {/* Plan Info */}
            </div>
        </aside>
    );
}