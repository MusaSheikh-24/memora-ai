'use client';
import { useState } from 'react';
import TopBar from '@/components/topbar';
import SettingsRightPanel from '@/components/right-panels/SettingsRightPanel';

export default function SettingsPage() {
    const [smartSearch, setSmartSearch] = useState(true);
    const [autoOrganization, setAutoOrganization] = useState(true);
    const [memoryGraph, setMemoryGraph] = useState(true);
    const [smartAlerts, setSmartAlerts] = useState(true);
    const [twoFactor, setTwoFactor] = useState(true);

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
                            <span className="text-2xl">⚙️</span> Settings
                        </h1>
                        <p className="text-sm text-gray-500">Configure your SyncOps workspace</p>
                    </div>

                    {/* Profile Section */}
                    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm mb-6 overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-100">
                            <h2 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                                <span>👤</span> Profile
                            </h2>
                        </div>
                        <div className="divide-y divide-gray-100">
                            {/* User Profile */}
                            <div className="px-6 py-4 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-sm">
                                        AK
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-gray-900">Ali Khan</div>
                                        <div className="text-xs text-gray-500">ali.khan@company.com</div>
                                    </div>
                                </div>
                                <button className="px-4 py-2 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition cursor-pointer">
                                    Edit
                                </button>
                            </div>

                            {/* Company Name */}
                            <div className="px-6 py-4 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 text-sm">
                                        🏢
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold text-gray-900">Company Name</div>
                                        <div className="text-xs text-gray-500">Acme Corporation</div>
                                    </div>
                                </div>
                                <button className="px-4 py-2 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition cursor-pointer">
                                    Edit
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* AI Features Section */}
                    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm mb-6 overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-100">
                            <h2 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                                <span>🔧</span> AI Features
                            </h2>
                        </div>
                        <div className="divide-y divide-gray-100">
                            {/* Smart Search */}
                            <div className="px-6 py-4 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <span className="text-xl">🔍</span>
                                    <div>
                                        <div className="text-sm font-semibold text-gray-900">Smart Search</div>
                                        <div className="text-xs text-gray-500">AI-powered natural language search across all documents</div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSmartSearch(!smartSearch)}
                                    className={`w-12 h-6 rounded-full relative transition-colors cursor-pointer ${smartSearch ? 'bg-teal-600' : 'bg-gray-300'}`}
                                >
                                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${smartSearch ? 'right-1' : 'left-1'}`}></div>
                                </button>
                            </div>

                            {/* Auto Organization */}
                            <div className="px-6 py-4 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <span className="text-xl">📁</span>
                                    <div>
                                        <div className="text-sm font-semibold text-gray-900">Auto Organization</div>
                                        <div className="text-xs text-gray-500">Automatically categorize and tag new documents</div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setAutoOrganization(!autoOrganization)}
                                    className={`w-12 h-6 rounded-full relative transition-colors cursor-pointer ${autoOrganization ? 'bg-teal-600' : 'bg-gray-300'}`}
                                >
                                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${autoOrganization ? 'right-1' : 'left-1'}`}></div>
                                </button>
                            </div>

                            {/* Memory Graph */}
                            <div className="px-6 py-4 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <span className="text-xl">🧠</span>
                                    <div>
                                        <div className="text-sm font-semibold text-gray-900">Memory Graph</div>
                                        <div className="text-xs text-gray-500">Build relationship maps between entities</div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setMemoryGraph(!memoryGraph)}
                                    className={`w-12 h-6 rounded-full relative transition-colors cursor-pointer ${memoryGraph ? 'bg-teal-600' : 'bg-gray-300'}`}
                                >
                                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${memoryGraph ? 'right-1' : 'left-1'}`}></div>
                                </button>
                            </div>

                            {/* Smart Alerts */}
                            <div className="px-6 py-4 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <span className="text-xl">🔔</span>
                                    <div>
                                        <div className="text-sm font-semibold text-gray-900">Smart Alerts</div>
                                        <div className="text-xs text-gray-500">Get notified about important events and deadlines</div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSmartAlerts(!smartAlerts)}
                                    className={`w-12 h-6 rounded-full relative transition-colors cursor-pointer ${smartAlerts ? 'bg-teal-600' : 'bg-gray-300'}`}
                                >
                                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${smartAlerts ? 'right-1' : 'left-1'}`}></div>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Integrations Section */}
                    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm mb-6 overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-100">
                            <h2 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                                <span>🔗</span> Integrations
                            </h2>
                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-3 gap-4">
                                {/* Gmail */}
                                <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl cursor-pointer hover:border-teal-300 transition">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xl">📧</span>
                                        <div>
                                            <div className="text-sm font-semibold text-gray-900">Gmail</div>
                                            <div className="text-xs text-green-600">Connected</div>
                                        </div>
                                    </div>
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                </div>

                                {/* Google Drive */}
                                <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl cursor-pointer hover:border-teal-300 transition">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xl">📁</span>
                                        <div>
                                            <div className="text-sm font-semibold text-gray-900">Google Drive</div>
                                            <div className="text-xs text-green-600">Connected</div>
                                        </div>
                                    </div>
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                </div>

                                {/* Slack */}
                                <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl cursor-pointer hover:border-teal-300 transition">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xl">💬</span>
                                        <div>
                                            <div className="text-sm font-semibold text-gray-900">Slack</div>
                                            <div className="text-xs text-green-600">Connected</div>
                                        </div>
                                    </div>
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                </div>

                                {/* Notion */}
                                <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl cursor-pointer hover:border-teal-300 transition">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xl">📝</span>
                                        <div>
                                            <div className="text-sm font-semibold text-gray-900">Notion</div>
                                            <div className="text-xs text-gray-500">Available</div>
                                        </div>
                                    </div>
                                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                                </div>

                                {/* Salesforce */}
                                <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl cursor-pointer hover:border-teal-300 transition">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xl">📊</span>
                                        <div>
                                            <div className="text-sm font-semibold text-gray-900">Salesforce</div>
                                            <div className="text-xs text-gray-500">Available</div>
                                        </div>
                                    </div>
                                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                                </div>

                                {/* Outlook */}
                                <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-xl cursor-pointer hover:border-teal-300 transition">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xl">📅</span>
                                        <div>
                                            <div className="text-sm font-semibold text-gray-900">Outlook</div>
                                            <div className="text-xs text-gray-500">Available</div>
                                        </div>
                                    </div>
                                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Security Section */}
                    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm mb-6 overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-100">
                            <h2 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                                <span>🔒</span> Security
                            </h2>
                        </div>
                        <div className="divide-y divide-gray-100">
                            {/* Two-Factor Authentication */}
                            <div className="px-6 py-4 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <span className="text-xl">🔐</span>
                                    <div>
                                        <div className="text-sm font-semibold text-gray-900">Two-Factor Authentication</div>
                                        <div className="text-xs text-gray-500">Extra layer of account security</div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setTwoFactor(!twoFactor)}
                                    className={`w-12 h-6 rounded-full relative transition-colors cursor-pointer ${twoFactor ? 'bg-teal-600' : 'bg-gray-300'}`}
                                >
                                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${twoFactor ? 'right-1' : 'left-1'}`}></div>
                                </button>
                            </div>

                            {/* Change Password */}
                            <div className="px-6 py-4 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <span className="text-xl">🔑</span>
                                    <div>
                                        <div className="text-sm font-semibold text-gray-900">Change Password</div>
                                        <div className="text-xs text-gray-500">Last changed 45 days ago</div>
                                    </div>
                                </div>
                                <button className="px-4 py-2 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition cursor-pointer">
                                    Change
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Fixed Right Panel - Settings ka */}
            <SettingsRightPanel />
        </div>
    );
}