'use client';
import Icon from '../icon';

export default function SettingsRightPanel() {
    return (
        <aside className="w-80 bg-white border-l border-gray-200 h-screen flex flex-col shrink-0 overflow-hidden">
            {/* Header */}
            <div className="px-4 py-3 border-b border-gray-100 shrink-0">
                <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-teal-600 rounded-lg flex items-center justify-center">
                        <Icon name="settings" size={14} className="text-white" />
                    </div>
                    <div>
                        <h2 className="text-xs font-bold text-gray-900">Quick Actions</h2>
                        <p className="text-[10px] text-gray-500">Manage settings</p>
                    </div>
                </div>
            </div>

            {/* Content - No Scroll */}
            <div className="flex-1 overflow-y-auto">
                <div className="p-4 space-y-5">
                    {/* Account Section */}
                    <div>
                        <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                            Account
                        </h3>
                        <div className="space-y-1.5">
                            {/* Edit Profile */}
                            <div className="p-2.5 bg-teal-50/60 rounded-lg border border-teal-100 cursor-pointer hover:bg-teal-50 transition">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center text-gray-600 text-sm">
                                        👤
                                    </div>
                                    <div className="text-xs font-semibold text-gray-900">Edit Profile</div>
                                </div>
                            </div>

                            {/* Change Password */}
                            <div className="p-2.5 bg-teal-50/60 rounded-lg border border-teal-100 cursor-pointer hover:bg-teal-50 transition">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center text-yellow-600 text-sm">
                                        🔑
                                    </div>
                                    <div className="text-xs font-semibold text-gray-900">Change Password</div>
                                </div>
                            </div>

                            {/* Manage Integrations */}
                            <div className="p-2.5 bg-teal-50/60 rounded-lg border border-teal-100 cursor-pointer hover:bg-teal-50 transition">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center text-teal-600 text-sm">
                                        🔗
                                    </div>
                                    <div className="text-xs font-semibold text-gray-900">Manage Integrations</div>
                                </div>
                            </div>

                            {/* Usage & Billing */}
                            <div className="p-2.5 bg-teal-50/60 rounded-lg border border-teal-100 cursor-pointer hover:bg-teal-50 transition">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center text-blue-600 text-sm">
                                        💳
                                    </div>
                                    <div className="text-xs font-semibold text-gray-900">Usage & Billing</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Storage Usage */}
                    <div>
                        <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                            Storage Usage
                        </h3>
                        <div className="bg-linear-to-br from-teal-50 to-emerald-50 rounded-lg border border-teal-100 p-3">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-[10px] text-gray-600">Used</span>
                                <span className="text-xs font-bold text-teal-600">812 GB</span>
                            </div>
                            <div className="w-full bg-white/60 rounded-full h-2 mb-2 border border-teal-100">
                                <div className="bg-linear-to-r from-teal-600 to-emerald-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] text-gray-600">Total</span>
                                <span className="text-xs font-bold text-teal-600">2 TBs</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="pt-3 border-t border-gray-100">
                        <button className="w-full py-2 bg-teal-600 text-white rounded-lg text-xs font-semibold hover:bg-teal-700 transition flex items-center justify-center gap-1.5 shadow-sm">
                            <Icon name="plus" size={12} strokeWidth={2.5} />
                            Add New Setting
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    );
}