'use client';
import { useState } from 'react';
import TopBar from '@/components/topbar';
import SettingsRightPanel from '@/components/right-panels/SettingsRightPanel';
import Icon from '@/components/icon';

export default function SettingsPage() {
    const [smartSearch, setSmartSearch] = useState(true);
    const [autoOrganization, setAutoOrganization] = useState(true);
    const [memoryGraph, setMemoryGraph] = useState(true);
    const [smartAlerts, setSmartAlerts] = useState(true);
    const [twoFactor, setTwoFactor] = useState(true);

    const ToggleSwitch = ({ value, onChange }: { value: boolean; onChange: () => void }) => (
        <button
            onClick={onChange}
            className={`w-10 h-5 rounded-full relative transition-colors cursor-pointer shrink-0 ${value ? 'bg-teal-600' : 'bg-gray-300'
                }`}
        >
            <div
                className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all shadow-sm ${value ? 'right-0.5' : 'left-0.5'
                    }`}
            />
        </button>
    );

    return (
        <div className="flex h-screen overflow-hidden">
            {/* Main Content Area */}
            <main className="flex-1 flex flex-col overflow-hidden bg-gray-50">
                {/* Fixed TopBar */}
                <TopBar />

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto">
                    <div className="max-w-5xl mx-auto px-6 py-6">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-5">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-teal-600 flex items-center justify-center">
                                    <Icon name="settings" size={20} className="text-white" />
                                </div>
                                <div>
                                    <h1 className="text-xl font-bold text-gray-900">Settings</h1>
                                    <p className="text-xs text-gray-500">Configure your SyncOps workspace</p>
                                </div>
                            </div>
                            <button className="px-3 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-xs font-semibold transition flex items-center gap-1.5 cursor-pointer">
                                <Icon name="plus" size={14} />
                                Save Changes
                            </button>
                        </div>

                        {/* Stats Strip */}
                        <div className="grid grid-cols-3 gap-3 mb-5">
                            {[
                                { label: 'Profile', value: 'Complete', sub: 'All info filled' },
                                { label: 'Integrations', value: '3', sub: 'Connected' },
                                { label: 'Security', value: 'Strong', sub: '2FA enabled' },
                            ].map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg p-3 border border-gray-200 flex items-center justify-between hover:shadow-md transition cursor-pointer group"
                                >
                                    <div>
                                        <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wider">
                                            {stat.label}
                                        </p>
                                        <p className="text-lg font-bold text-gray-900 mt-0.5 group-hover:text-teal-600 transition">
                                            {stat.value}
                                        </p>
                                        <p className="text-[10px] text-gray-400">{stat.sub}</p>
                                    </div>
                                    <div className="w-8 h-8 rounded-md bg-teal-50 group-hover:bg-teal-100 flex items-center justify-center transition">
                                        <Icon name="settings" size={14} className="text-teal-600" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Profile Section */}
                        <div className="bg-white border border-gray-200 rounded-xl shadow-sm mb-5 overflow-hidden">
                            <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-2">
                                <Icon name="users" size={14} className="text-teal-600" />
                                <h2 className="text-xs font-bold text-gray-900">Profile</h2>
                            </div>
                            <div className="divide-y divide-gray-100">
                                {/* User Profile */}
                                <div className="px-4 py-3.5 flex items-center justify-between hover:bg-gray-50 transition cursor-pointer group">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-[10px]">
                                            AK
                                        </div>
                                        <div>
                                            <div className="text-xs font-semibold text-gray-900 group-hover:text-teal-600 transition">
                                                Ali Khan
                                            </div>
                                            <div className="text-[10px] text-gray-500">ali.khan@company.com</div>
                                        </div>
                                    </div>
                                    <button className="px-3 py-1.5 text-[10px] font-semibold text-gray-700 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition cursor-pointer">
                                        Edit
                                    </button>
                                </div>

                                {/* Company Name */}
                                <div className="px-4 py-3.5 flex items-center justify-between hover:bg-gray-50 transition cursor-pointer group">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center">
                                            <Icon name="building" size={14} className="text-gray-600" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-semibold text-gray-900 group-hover:text-teal-600 transition">
                                                Company Name
                                            </div>
                                            <div className="text-[10px] text-gray-500">Acme Corporation</div>
                                        </div>
                                    </div>
                                    <button className="px-3 py-1.5 text-[10px] font-semibold text-gray-700 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition cursor-pointer">
                                        Edit
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* AI Features Section */}
                        <div className="bg-white border border-gray-200 rounded-xl shadow-sm mb-5 overflow-hidden">
                            <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-2">
                                <Icon name="sparkles" size={14} className="text-teal-600" />
                                <h2 className="text-xs font-bold text-gray-900">AI Features</h2>
                            </div>
                            <div className="divide-y divide-gray-100">
                                {/* Smart Search */}
                                <div className="px-4 py-3.5 flex items-center justify-between hover:bg-gray-50 transition">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 bg-teal-50 rounded-lg flex items-center justify-center">
                                            <Icon name="search" size={14} className="text-teal-600" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-semibold text-gray-900">Smart Search</div>
                                            <div className="text-[10px] text-gray-500">
                                                AI-powered natural language search across all documents
                                            </div>
                                        </div>
                                    </div>
                                    <ToggleSwitch value={smartSearch} onChange={() => setSmartSearch(!smartSearch)} />
                                </div>

                                {/* Auto Organization */}
                                <div className="px-4 py-3.5 flex items-center justify-between hover:bg-gray-50 transition">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 bg-teal-50 rounded-lg flex items-center justify-center">
                                            <Icon name="folder" size={14} className="text-teal-600" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-semibold text-gray-900">Auto Organization</div>
                                            <div className="text-[10px] text-gray-500">
                                                Automatically categorize and tag new documents
                                            </div>
                                        </div>
                                    </div>
                                    <ToggleSwitch
                                        value={autoOrganization}
                                        onChange={() => setAutoOrganization(!autoOrganization)}
                                    />
                                </div>

                                {/* Memory Graph */}
                                <div className="px-4 py-3.5 flex items-center justify-between hover:bg-gray-50 transition">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 bg-teal-50 rounded-lg flex items-center justify-center">
                                            <Icon name="network" size={14} className="text-teal-600" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-semibold text-gray-900">Memory Graph</div>
                                            <div className="text-[10px] text-gray-500">
                                                Build relationship maps between entities
                                            </div>
                                        </div>
                                    </div>
                                    <ToggleSwitch
                                        value={memoryGraph}
                                        onChange={() => setMemoryGraph(!memoryGraph)}
                                    />
                                </div>

                                {/* Smart Alerts */}
                                <div className="px-4 py-3.5 flex items-center justify-between hover:bg-gray-50 transition">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 bg-teal-50 rounded-lg flex items-center justify-center">
                                            <Icon name="bell" size={14} className="text-teal-600" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-semibold text-gray-900">Smart Alerts</div>
                                            <div className="text-[10px] text-gray-500">
                                                Get notified about important events and deadlines
                                            </div>
                                        </div>
                                    </div>
                                    <ToggleSwitch
                                        value={smartAlerts}
                                        onChange={() => setSmartAlerts(!smartAlerts)}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Integrations Section */}
                        <div className="bg-white border border-gray-200 rounded-xl shadow-sm mb-5 overflow-hidden">
                            <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-2">
                                <Icon name="globe" size={14} className="text-teal-600" />
                                <h2 className="text-xs font-bold text-gray-900">Integrations</h2>
                            </div>
                            <div className="p-4">
                                <div className="grid grid-cols-3 gap-3">
                                    {[
                                        { name: 'Gmail', status: 'Connected', icon: '', active: true },
                                        { name: 'Google Drive', status: 'Connected', icon: '📁', active: true },
                                        { name: 'Slack', status: 'Connected', icon: '💬', active: true },
                                        { name: 'Notion', status: 'Available', icon: '📝', active: false },
                                        { name: 'Salesforce', status: 'Available', icon: '📊', active: false },
                                        { name: 'Outlook', status: 'Available', icon: '📅', active: false },
                                    ].map((integration, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg cursor-pointer hover:border-teal-300 hover:shadow-sm transition group"
                                        >
                                            <div className="flex items-center gap-2 min-w-0">
                                                <div className="w-8 h-8 rounded-md bg-teal-50 flex items-center justify-center text-base shrink-0 group-hover:bg-teal-100 transition">
                                                    {integration.icon}
                                                </div>
                                                <div className="min-w-0">
                                                    <div className="text-xs font-semibold text-gray-900 truncate">
                                                        {integration.name}
                                                    </div>
                                                    <div
                                                        className={`text-[9px] ${integration.active ? 'text-green-600' : 'text-gray-500'
                                                            }`}
                                                    >
                                                        {integration.status}
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className={`w-1.5 h-1.5 rounded-full shrink-0 ml-1 ${integration.active ? 'bg-green-500' : 'bg-gray-300'
                                                    }`}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Security Section */}
                        <div className="bg-white border border-gray-200 rounded-xl shadow-sm mb-5 overflow-hidden">
                            <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-2">
                                <Icon name="alert" size={14} className="text-teal-600" />
                                <h2 className="text-xs font-bold text-gray-900">Security</h2>
                            </div>
                            <div className="divide-y divide-gray-100">
                                {/* Two-Factor Authentication */}
                                <div className="px-4 py-3.5 flex items-center justify-between hover:bg-gray-50 transition">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 bg-teal-50 rounded-lg flex items-center justify-center">
                                            <Icon name="shield" size={14} className="text-teal-600" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-semibold text-gray-900">
                                                Two-Factor Authentication
                                            </div>
                                            <div className="text-[10px] text-gray-500">
                                                Extra layer of account security
                                            </div>
                                        </div>
                                    </div>
                                    <ToggleSwitch value={twoFactor} onChange={() => setTwoFactor(!twoFactor)} />
                                </div>

                                {/* Change Password */}
                                <div className="px-4 py-3.5 flex items-center justify-between hover:bg-gray-50 transition">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 bg-teal-50 rounded-lg flex items-center justify-center">
                                            <Icon name="lock" size={14} className="text-teal-600" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-semibold text-gray-900">Change Password</div>
                                            <div className="text-[10px] text-gray-500">Last changed 45 days ago</div>
                                        </div>
                                    </div>
                                    <button className="px-3 py-1.5 text-[10px] font-semibold text-gray-700 bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition cursor-pointer">
                                        Change
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Fixed Right Panel */}
            <SettingsRightPanel />
        </div>
    );
}