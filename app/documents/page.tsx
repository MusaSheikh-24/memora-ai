'use client';
import { useState } from 'react';
import TopBar from '@/components/topbar';
import DocumentsRightPanel from '@/components/right-panels/DocumentsRightPanel';

interface Document {
    id: number;
    name: string;
    subtitle: string;
    type: string;
    typeColor: string;
    icon: string;
    date: string;
    uploadedBy: string;
    initials: string;
    avatarColor: string;
    size: string;
}

interface FilterTab {
    label: string;
    count: number;
    value: string;
    icon: string;
}

interface ExplorerItem {
    id: string;
    name: string;
    count: number;
    icon?: string;
    children?: ExplorerItem[];
    isExpanded?: boolean;
}

// Table data
const tableData: Document[] = [
    {
        id: 1,
        name: 'INV-45871.pdf',
        subtitle: 'Invoice from ABC Company',
        type: 'Invoice',
        typeColor: 'bg-teal-100 text-teal-700',
        icon: '📄',
        date: 'Jan 12, 2024',
        uploadedBy: 'Ali Khan',
        initials: 'AK',
        avatarColor: 'bg-purple-600',
        size: '340 KB'
    },
    {
        id: 2,
        name: 'Website_Proposal_Q1.docx',
        subtitle: 'Project proposal document',
        type: 'Proposal',
        typeColor: 'bg-blue-100 text-blue-700',
        icon: '📄',
        date: 'Jan 11, 2024',
        uploadedBy: 'Sarah R.',
        initials: 'SR',
        avatarColor: 'bg-gray-600',
        size: '1.2 MB'
    },
    {
        id: 3,
        name: 'Contract_ABC_2024.pdf',
        subtitle: 'Master service agreement',
        type: 'Contract',
        typeColor: 'bg-orange-100 text-orange-700',
        icon: '📄',
        date: 'Jan 10, 2024',
        uploadedBy: 'Ali Khan',
        initials: 'AK',
        avatarColor: 'bg-purple-600',
        size: '2.4 MB'
    },
    {
        id: 4,
        name: 'Meeting_Jan10_2024.mp4',
        subtitle: 'Project kickoff meeting',
        type: 'Meeting',
        typeColor: 'bg-purple-100 text-purple-700',
        icon: '🎬',
        date: 'Jan 10, 2024',
        uploadedBy: 'Sarah R.',
        initials: 'SR',
        avatarColor: 'bg-gray-600',
        size: '85.6 MB'
    },
    {
        id: 5,
        name: 'Re: Project Update',
        subtitle: 'Email thread (28 messages)',
        type: 'Email',
        typeColor: 'bg-pink-100 text-pink-700',
        icon: '✉',
        date: 'Jan 09, 2024',
        uploadedBy: 'Mike T.',
        initials: 'MT',
        avatarColor: 'bg-gray-600',
        size: '—'
    },
    {
        id: 6,
        name: 'Q1_Budget.xlsx',
        subtitle: 'Project budget spreadsheet',
        type: 'Document',
        typeColor: 'bg-green-100 text-green-700',
        icon: '📊',
        date: 'Jan 08, 2024',
        uploadedBy: 'Ali Khan',
        initials: 'AK',
        avatarColor: 'bg-purple-600',
        size: '245 KB'
    },
    {
        id: 7,
        name: 'Client_Requirements.md',
        subtitle: 'Requirements and specifications',
        type: 'Note',
        typeColor: 'bg-amber-100 text-amber-700',
        icon: '',
        date: 'Jan 07, 2024',
        uploadedBy: 'Sarah R.',
        initials: 'SR',
        avatarColor: 'bg-gray-600',
        size: '18 KB'
    },
    {
        id: 8,
        name: 'Payment_Receipt_1234.pdf',
        subtitle: 'Payment receipt',
        type: 'Invoice',
        typeColor: 'bg-teal-100 text-teal-700',
        icon: '📄',
        date: 'Jan 05, 2024',
        uploadedBy: 'Mike T.',
        initials: 'MT',
        avatarColor: 'bg-gray-600',
        size: '120 KB'
    },
];

// Filter tabs
const filterTabs: FilterTab[] = [
    { label: 'All', count: 128, value: 'all', icon: '' },
    { label: 'Invoices', count: 42, value: 'Invoice', icon: '📄' },
    { label: 'Contracts', count: 18, value: 'Contract', icon: '📋' },
    { label: 'Meetings', count: 24, value: 'Meeting', icon: '' },
    { label: 'Emails', count: 28, value: 'Email', icon: '✉' },
    { label: 'Notes', count: 16, value: 'Note', icon: '📝' },
];

// Explorer data
const aiGeneratedItems: ExplorerItem[] = [
    {
        id: 'abc-company',
        name: 'ABC Company',
        count: 238,
        icon: '🏢',
        isExpanded: true,
        children: [
            { id: 'project-a', name: 'Project A - Website Redesign', count: 128, icon: '📁' },
            { id: 'project-b', name: 'Project B - Mobile App', count: 76, icon: '📁' },
            { id: 'project-c', name: 'Project C - ERP Migration', count: 34, icon: '📁' },
        ]
    },
    { id: 'apple', name: 'Apple Inc.', count: 156, icon: '🍎' },
    { id: 'microsoft', name: 'Microsoft', count: 98, icon: '💻' },
    { id: 'techflow', name: 'TechFlow Solutions', count: 64, icon: '⚡' },
];

const mySpacesItems: ExplorerItem[] = [
    { id: 'finance', name: 'Finance Department', count: 42, icon: '💰' },
    { id: 'legal', name: 'Legal Department', count: 37, icon: '⚖️' },
    { id: 'hr', name: 'HR Department', count: 28, icon: '👥' },
    { id: 'operations', name: 'Operations', count: 19, icon: '⚙️' },
    { id: 'ceo', name: 'CEO Documents', count: 12, icon: '👔' },
];

const collectionsItems: ExplorerItem[] = [
    { id: 'audit', name: '2026 Audit', count: 24, icon: '🔍' },
    { id: 'contracts', name: 'Important Contracts', count: 18, icon: '📑' },
    { id: 'tax', name: 'Tax Documents', count: 16, icon: '📋' },
];

export default function DocumentsPage() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedDocs, setSelectedDocs] = useState<number[]>([]);
    const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set(['abc-company']));
    const [activeExplorerItem, setActiveExplorerItem] = useState('project-a');

    const filteredTable = tableData.filter(
        (doc: Document) => activeFilter === 'all' || doc.type === activeFilter
    );

    const toggleSelectAll = () => {
        if (selectedDocs.length === filteredTable.length) {
            setSelectedDocs([]);
        } else {
            setSelectedDocs(filteredTable.map((doc: Document) => doc.id));
        }
    };

    const toggleSelectDoc = (id: number) => {
        if (selectedDocs.includes(id)) {
            setSelectedDocs(selectedDocs.filter((docId: number) => docId !== id));
        } else {
            setSelectedDocs([...selectedDocs, id]);
        }
    };

    const toggleExpand = (id: string) => {
        const newExpanded = new Set(expandedItems);
        if (newExpanded.has(id)) {
            newExpanded.delete(id);
        } else {
            newExpanded.add(id);
        }
        setExpandedItems(newExpanded);
    };

    const renderExplorerItem = (item: ExplorerItem, level: number = 0) => {
        const isExpanded = expandedItems.has(item.id);
        const isActive = activeExplorerItem === item.id;
        const paddingLeft = level * 12 + 12;

        return (
            <div key={item.id}>
                <div
                    onClick={() => {
                        setActiveExplorerItem(item.id);
                        if (item.children) toggleExpand(item.id);
                    }}
                    className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-colors ${isActive ? 'bg-teal-50 text-teal-700' : 'hover:bg-gray-100 text-gray-700'}`}
                    style={{ paddingLeft: `${paddingLeft}px` }}
                >
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                        {item.children && (
                            <span className={`text-xs transition-transform ${isExpanded ? 'rotate-90' : ''}`}>
                                ▶
                            </span>
                        )}
                        <span className="text-sm">{item.icon}</span>
                        <span className="text-sm font-medium truncate">{item.name}</span>
                    </div>
                    <span className="text-xs text-gray-400 ml-2">{item.count}</span>
                </div>
                {item.children && isExpanded && (
                    <div className="mt-1">
                        {item.children.map(child => renderExplorerItem(child, level + 1))}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="flex flex-col h-screen overflow-hidden bg-gray-50">
            {/* Main Layout - 3 columns */}
            <div className="flex flex-1 overflow-hidden">
                {/* Left Section: Explorer + Documents (with TopBar above) */}
                <div className="flex flex-col flex-1 overflow-hidden">
                    {/* TopBar - Only above Explorer and Documents */}
                    <TopBar />

                    {/* Explorer + Documents Row */}
                    <div className="flex flex-1 overflow-hidden">
                        {/* Explorer Sidebar */}
                        <aside className="w-64 bg-white border-r border-gray-200 flex flex-col overflow-hidden shrink-0">
                            <div className="p-4 border-b border-gray-100">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Explorer</h2>
                                    <button className="p-1 hover:bg-gray-100 rounded cursor-pointer">
                                        <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="flex-1 overflow-y-auto p-3 space-y-6">
                                {/* AI Generated Section */}
                                <div>
                                    <div className="flex items-center gap-2 px-3 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        <svg className="w-3 h-3 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                        </svg>
                                        AI Generated
                                    </div>
                                    <div className="space-y-1">
                                        {aiGeneratedItems.map(item => renderExplorerItem(item))}
                                    </div>
                                </div>

                                {/* My Spaces Section */}
                                <div>
                                    <div className="flex items-center gap-2 px-3 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        <svg className="w-3 h-3 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                        </svg>
                                        My Spaces
                                    </div>
                                    <div className="space-y-1">
                                        {mySpacesItems.map(item => (
                                            <div
                                                key={item.id}
                                                onClick={() => setActiveExplorerItem(item.id)}
                                                className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-colors ${activeExplorerItem === item.id ? 'bg-purple-50 text-purple-700' : 'hover:bg-gray-100 text-gray-700'}`}
                                            >
                                                <div className="flex items-center gap-2">
                                                    <span className="text-sm">{item.icon}</span>
                                                    <span className="text-sm font-medium">{item.name}</span>
                                                </div>
                                                <span className="text-xs text-gray-400">{item.count}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Collections Section */}
                                <div>
                                    <div className="flex items-center gap-2 px-3 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        <svg className="w-3 h-3 text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                        Collections
                                    </div>
                                    <div className="space-y-1">
                                        {collectionsItems.map(item => (
                                            <div
                                                key={item.id}
                                                onClick={() => setActiveExplorerItem(item.id)}
                                                className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-colors ${activeExplorerItem === item.id ? 'bg-amber-50 text-amber-700' : 'hover:bg-gray-100 text-gray-700'}`}
                                            >
                                                <div className="flex items-center gap-2">
                                                    <span className="text-sm">{item.icon}</span>
                                                    <span className="text-sm font-medium">{item.name}</span>
                                                </div>
                                                <span className="text-xs text-gray-400">{item.count}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* Documents Content */}
                        <main className="flex-1 flex flex-col overflow-hidden min-w-0">
                            <div className="flex-1 overflow-y-auto p-5">
                                {/* Header */}
                                <div className="mb-5">
                                    <div className="flex items-center gap-2 mb-1">
                                        <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                        </svg>
                                        <h1 className="text-xl font-bold text-gray-900">Documents</h1>
                                    </div>
                                    <p className="text-xs text-gray-500">All your company documents organized by AI and your spaces</p>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex items-center gap-2 mb-5">
                                    <button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors">
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                        </svg>
                                        Upload Files
                                    </button>
                                    <button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors">
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                        </svg>
                                        Connect Apps
                                    </button>
                                    <button className="flex items-center gap-2 px-3 py-2 bg-teal-600 text-white rounded-lg text-xs font-medium hover:bg-teal-700 cursor-pointer transition-colors">
                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        </svg>
                                        New Space
                                    </button>
                                </div>

                                {/* Tabs */}
                                <div className="flex items-center justify-between mb-5">
                                    <div className="flex items-center gap-5 border-b border-gray-200">
                                        <button className="pb-2 text-xs font-semibold text-teal-600 border-b-2 border-teal-600">
                                            AI Organization
                                        </button>
                                        <button className="pb-2 text-xs font-medium text-gray-500 hover:text-gray-700">
                                            My Spaces
                                        </button>
                                        <button className="pb-2 text-xs font-medium text-gray-500 hover:text-gray-700">
                                            Collections
                                        </button>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="relative">
                                            <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                            </svg>
                                            <input
                                                type="text"
                                                placeholder="Search documents..."
                                                className="pl-8 pr-3 py-1.5 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-teal-500 w-52"
                                            />
                                        </div>
                                        <button className="flex items-center gap-1.5 px-2.5 py-1.5 border border-gray-200 rounded-lg text-xs font-medium text-gray-700 hover:bg-gray-50 cursor-pointer">
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                                            </svg>
                                            Filters
                                        </button>
                                        <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                                            <button className="p-1.5 bg-white rounded shadow-sm cursor-pointer">
                                                <svg className="w-3.5 h-3.5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                                </svg>
                                            </button>
                                            <button className="p-1.5 hover:bg-gray-200 rounded cursor-pointer">
                                                <svg className="w-3.5 h-3.5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Breadcrumb Navigation */}
                                <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-4">
                                    <span className="text-teal-600 font-medium hover:text-teal-700 cursor-pointer">AI Generated</span>
                                    <span className="text-gray-400">›</span>
                                    <span className="text-teal-600 font-medium hover:text-teal-700 cursor-pointer">ABC Company</span>
                                    <span className="text-gray-400">›</span>
                                    <span className="text-gray-900 font-semibold">Project A - Website Redesign</span>
                                </div>

                                {/* Filter Pills */}
                                <div className="flex items-center gap-2 mb-5 flex-wrap">
                                    {filterTabs.map((tab: FilterTab) => (
                                        <button
                                            key={tab.value}
                                            onClick={() => setActiveFilter(tab.value)}
                                            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer border ${activeFilter === tab.value
                                                ? 'bg-teal-600 text-white border-teal-600'
                                                : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                                                }`}
                                        >
                                            <span>{tab.icon}</span>
                                            {tab.label}
                                            <span className={`px-1.5 py-0.5 rounded-full text-[10px] ${activeFilter === tab.value ? 'bg-teal-500 text-white' : 'bg-gray-100 text-gray-600'
                                                }`}>
                                                {tab.count}
                                            </span>
                                        </button>
                                    ))}
                                </div>

                                {/* Table - Fixed layout to prevent horizontal scroll */}
                                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                                    <table className="w-full table-fixed">
                                        <colgroup>
                                            <col className="w-10" />
                                            <col className="w-auto" />
                                            <col className="w-24" />
                                            <col className="w-28" />
                                            <col className="w-10" />
                                        </colgroup>
                                        <thead>
                                            <tr className="border-b border-gray-100 bg-gray-50/50">
                                                <th className="text-left px-3 py-2.5">
                                                    <input
                                                        type="checkbox"
                                                        className="rounded cursor-pointer"
                                                        checked={selectedDocs.length === filteredTable.length && filteredTable.length > 0}
                                                        onChange={toggleSelectAll}
                                                    />
                                                </th>
                                                <th className="text-left text-[10px] font-bold text-gray-500 uppercase tracking-wider px-3 py-2.5">Name</th>
                                                <th className="text-left text-[10px] font-bold text-gray-500 uppercase tracking-wider px-3 py-2.5">Type</th>
                                                <th className="text-left text-[10px] font-bold text-gray-500 uppercase tracking-wider px-3 py-2.5">Date</th>
                                                <th className="px-3 py-2.5"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredTable.map((doc: Document) => (
                                                <tr
                                                    key={doc.id}
                                                    className="border-b border-gray-50 hover:bg-teal-50/30 transition cursor-pointer"
                                                >
                                                    <td className="px-3 py-2.5">
                                                        <input
                                                            type="checkbox"
                                                            className="rounded cursor-pointer"
                                                            checked={selectedDocs.includes(doc.id)}
                                                            onChange={() => toggleSelectDoc(doc.id)}
                                                            onClick={(e) => e.stopPropagation()}
                                                        />
                                                    </td>
                                                    <td className="px-3 py-2.5">
                                                        <div className="flex items-center gap-2.5">
                                                            <div className="w-7 h-7 rounded-lg flex items-center justify-center text-sm font-bold bg-red-100 text-red-600 shrink-0">
                                                                {doc.icon}
                                                            </div>
                                                            <div className="min-w-0">
                                                                <div className="text-xs font-semibold text-gray-900 truncate">{doc.name}</div>
                                                                <div className="text-[10px] text-gray-500 truncate">{doc.subtitle}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-3 py-2.5">
                                                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${doc.typeColor}`}>
                                                            {doc.type}
                                                        </span>
                                                    </td>
                                                    <td className="px-3 py-2.5 text-xs text-gray-600">{doc.date}</td>
                                                    <td className="px-3 py-2.5">
                                                        <button className="p-1 hover:bg-gray-100 rounded cursor-pointer">
                                                            <svg className="w-3.5 h-3.5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                                                            </svg>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                    {/* Pagination */}
                                    <div className="flex items-center justify-between px-3 py-2.5 border-t border-gray-100 bg-gray-50/30">
                                        <span className="text-[10px] text-gray-500">Showing 1-8 of 128</span>
                                        <div className="flex items-center gap-1">
                                            <button className="w-6 h-6 flex items-center justify-center rounded border border-gray-200 text-gray-400 hover:bg-gray-50 cursor-pointer text-xs">
                                                ‹
                                            </button>
                                            <button className="w-6 h-6 flex items-center justify-center rounded bg-teal-600 text-white text-xs font-semibold cursor-pointer">
                                                1
                                            </button>
                                            <button className="w-6 h-6 flex items-center justify-center rounded border border-gray-200 text-gray-700 hover:bg-gray-50 cursor-pointer text-xs">
                                                2
                                            </button>
                                            <button className="w-6 h-6 flex items-center justify-center rounded border border-gray-200 text-gray-700 hover:bg-gray-50 cursor-pointer text-xs">
                                                3
                                            </button>
                                            <span className="px-1 text-gray-400 text-xs">...</span>
                                            <button className="w-6 h-6 flex items-center justify-center rounded border border-gray-200 text-gray-700 hover:bg-gray-50 cursor-pointer text-xs font-semibold">
                                                16
                                            </button>
                                            <button className="w-6 h-6 flex items-center justify-center rounded border border-gray-200 text-gray-400 hover:bg-gray-50 cursor-pointer text-xs">
                                                ›
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>

                {/* Right Panel - Separate, no TopBar above */}
                <DocumentsRightPanel />
            </div>
        </div>
    );
}