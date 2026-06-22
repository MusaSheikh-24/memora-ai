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
        typeColor: 'bg-teal-50 text-teal-700 border-teal-200',
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
        typeColor: 'bg-blue-50 text-blue-700 border-blue-200',
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
        typeColor: 'bg-orange-50 text-orange-700 border-orange-200',
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
        typeColor: 'bg-purple-50 text-purple-700 border-purple-200',
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
        typeColor: 'bg-pink-50 text-pink-700 border-pink-200',
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
        typeColor: 'bg-green-50 text-green-700 border-green-200',
        icon: '',
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
        typeColor: 'bg-amber-50 text-amber-700 border-amber-200',
        icon: '📝',
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
        typeColor: 'bg-teal-50 text-teal-700 border-teal-200',
        icon: '',
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
        icon: '',
        isExpanded: true,
        children: [
            { id: 'project-a', name: 'Project A - Website Redesign', count: 128, icon: '📁' },
            { id: 'project-b', name: 'Project B - Mobile App', count: 76, icon: '📁' },
            { id: 'project-c', name: 'Project C - ERP Migration', count: 34, icon: '📁' },
        ]
    },
    { id: 'apple', name: 'Apple Inc.', count: 156, icon: '' },
    { id: 'microsoft', name: 'Microsoft', count: 98, icon: '💻' },
    { id: 'techflow', name: 'TechFlow Solutions', count: 64, icon: '⚡' },
];

const mySpacesItems: ExplorerItem[] = [
    { id: 'finance', name: 'Finance Department', count: 42, icon: '💰' },
    { id: 'legal', name: 'Legal Department', count: 37, icon: '⚖️' },
    { id: 'hr', name: 'HR Department', count: 28, icon: '👥' },
    { id: 'operations', name: 'Operations', count: 19, icon: '️' },
    { id: 'ceo', name: 'CEO Documents', count: 12, icon: '👔' },
];

const collectionsItems: ExplorerItem[] = [
    { id: 'audit', name: '2026 Audit', count: 24, icon: '' },
    { id: 'contracts', name: 'Important Contracts', count: 18, icon: '📑' },
    { id: 'tax', name: 'Tax Documents', count: 16, icon: '📋' },
];

export default function DocumentsPage() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedDocs, setSelectedDocs] = useState<number[]>([]);
    const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set(['abc-company']));
    const [activeExplorerItem, setActiveExplorerItem] = useState('project-a');
    const [searchQuery, setSearchQuery] = useState('');

    // Filter documents based on active filter and search query
    const filteredTable = tableData.filter((doc: Document) => {
        const matchesType = activeFilter === 'all' || doc.type === activeFilter;
        const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            doc.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesType && matchesSearch;
    });

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
                    className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 ${isActive
                        ? 'bg-linear-to-r from-teal-50 to-teal-100/50 text-teal-700 shadow-sm border border-teal-200/50'
                        : 'hover:bg-gray-50 text-gray-700 hover:shadow-sm'
                        }`}
                    style={{ paddingLeft: `${paddingLeft}px` }}
                >
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                        {item.children && (
                            <span className={`text-xs transition-transform duration-200 ${isExpanded ? 'rotate-90' : ''}`}>
                                ▶
                            </span>
                        )}
                        <span className="text-sm">{item.icon}</span>
                        <span className="text-sm font-medium truncate">{item.name}</span>
                    </div>
                    <span className="text-xs text-gray-400 ml-2 font-medium">{item.count}</span>
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
        <div className="flex flex-col h-screen overflow-hidden bg-linear-to-br from-gray-50 to-gray-100/50">
            {/* Main Layout - 3 columns */}
            <div className="flex flex-1 overflow-hidden">
                {/* Left Section: Explorer + Documents (with TopBar above) */}
                <div className="flex flex-col flex-1 overflow-hidden min-w-0">
                    {/* TopBar - Only above Explorer and Documents */}
                    <TopBar />

                    {/* Explorer + Documents Row */}
                    <div className="flex flex-1 overflow-hidden">
                        {/* Explorer Sidebar */}
                        <aside className="w-64 bg-white border-r border-gray-200 flex flex-col overflow-hidden shrink-0 shadow-sm">
                            <div className="p-4 border-b border-gray-100 bg-linear-to-r from-gray-50 to-white">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-7 h-7 bg-linear-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center shadow-sm">
                                            <span className="text-white text-sm">📁</span>
                                        </div>
                                        <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Explorer</h2>
                                    </div>
                                    <button className="p-1.5 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors group">
                                        <span className="text-gray-500 group-hover:text-teal-600 text-sm">+</span>
                                    </button>
                                </div>
                            </div>

                            <div className="flex-1 overflow-y-auto p-3 space-y-6">
                                {/* AI Generated Section */}
                                <div>
                                    <div className="flex items-center gap-2 px-3 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        <div className="w-4 h-4 bg-linear-to-br from-teal-400 to-teal-600 rounded flex items-center justify-center">
                                            <span className="text-white text-[10px]">✨</span>
                                        </div>
                                        AI Generated
                                    </div>
                                    <div className="space-y-1">
                                        {aiGeneratedItems.map(item => renderExplorerItem(item))}
                                    </div>
                                </div>

                                {/* My Spaces Section */}
                                <div>
                                    <div className="flex items-center gap-2 px-3 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        <div className="w-4 h-4 bg-linear-to-br from-purple-400 to-purple-600 rounded flex items-center justify-center">
                                            <span className="text-white text-[10px]"></span>
                                        </div>
                                        My Spaces
                                    </div>
                                    <div className="space-y-1">
                                        {mySpacesItems.map(item => (
                                            <div
                                                key={item.id}
                                                onClick={() => setActiveExplorerItem(item.id)}
                                                className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 ${activeExplorerItem === item.id
                                                    ? 'bg-linear-to-r from-purple-50 to-purple-100/50 text-purple-700 shadow-sm border border-purple-200/50'
                                                    : 'hover:bg-gray-50 text-gray-700 hover:shadow-sm'
                                                    }`}
                                            >
                                                <div className="flex items-center gap-2">
                                                    <span className="text-sm">{item.icon}</span>
                                                    <span className="text-sm font-medium">{item.name}</span>
                                                </div>
                                                <span className="text-xs text-gray-400 font-medium">{item.count}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Collections Section */}
                                <div>
                                    <div className="flex items-center gap-2 px-3 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        <div className="w-4 h-4 bg-linear-to-br from-amber-400 to-amber-600 rounded flex items-center justify-center">
                                            <span className="text-white text-[10px]">⭐</span>
                                        </div>
                                        Collections
                                    </div>
                                    <div className="space-y-1">
                                        {collectionsItems.map(item => (
                                            <div
                                                key={item.id}
                                                onClick={() => setActiveExplorerItem(item.id)}
                                                className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 ${activeExplorerItem === item.id
                                                    ? 'bg-linear-to-r from-amber-50 to-amber-100/50 text-amber-700 shadow-sm border border-amber-200/50'
                                                    : 'hover:bg-gray-50 text-gray-700 hover:shadow-sm'
                                                    }`}
                                            >
                                                <div className="flex items-center gap-2">
                                                    <span className="text-sm">{item.icon}</span>
                                                    <span className="text-sm font-medium">{item.name}</span>
                                                </div>
                                                <span className="text-xs text-gray-400 font-medium">{item.count}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* Documents Content */}
                        <main className="flex-1 flex flex-col overflow-hidden min-w-0 bg-linear-to-br from-white to-gray-50/30">
                            <div className="flex-1 overflow-y-auto p-6">
                                {/* Header */}
                                <div className="mb-6">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-10 h-10 bg-linear-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/30">
                                            <span className="text-white text-lg">📁</span>
                                        </div>
                                        <div>
                                            <h1 className="text-2xl font-bold bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Documents</h1>
                                            <p className="text-xs text-gray-500 mt-0.5">All your company documents organized by AI and your spaces</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex items-center gap-3 mb-6">
                                    <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-xs font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:shadow-md cursor-pointer transition-all duration-200 group">
                                        <span className="text-gray-500 group-hover:text-teal-600 text-sm">📤</span>
                                        Upload Files
                                    </button>
                                    <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-xs font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 hover:shadow-md cursor-pointer transition-all duration-200 group">
                                        <span className="text-gray-500 group-hover:text-teal-600 text-sm">🔗</span>
                                        Connect Apps
                                    </button>
                                    <button className="flex items-center gap-2 px-4 py-2.5 bg-linear-to-r from-teal-600 to-teal-700 text-white rounded-lg text-xs font-semibold hover:from-teal-700 hover:to-teal-800 hover:shadow-lg hover:shadow-teal-500/30 cursor-pointer transition-all duration-200 group">
                                        <span className="text-white text-sm">+</span>
                                        New Space
                                    </button>
                                </div>

                                {/* Tabs & Search Row */}
                                <div className="flex items-center justify-between mb-6 gap-4">
                                    <div className="flex items-center gap-6 border-b border-gray-200 shrink-0">
                                        <button className="pb-3 text-sm font-semibold text-teal-600 border-b-2 border-teal-600 relative whitespace-nowrap">
                                            AI Organization
                                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-teal-500 to-teal-600 rounded-full" />
                                        </button>
                                        <button className="pb-3 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors whitespace-nowrap">
                                            My Spaces
                                        </button>
                                        <button className="pb-3 text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors whitespace-nowrap">
                                            Collections
                                        </button>
                                    </div>
                                    <div className="flex items-center gap-2 shrink-0">
                                        <div className="relative">
                                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span>
                                            <input
                                                type="text"
                                                placeholder="Search..."
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent w-40 transition-all"
                                            />
                                        </div>
                                        {/* <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg text-xs font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-300 cursor-pointer transition-all whitespace-nowrap">
                                            <span className="text-sm">🔽</span>
                                            Filters
                                        </button>
                                        <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1 border border-gray-200">
                                            <button className="p-2 bg-white rounded-md shadow-sm cursor-pointer border border-gray-200">
                                                <span className="text-teal-600 text-sm">⊞</span>
                                            </button>
                                            <button className="p-2 hover:bg-gray-200 rounded-md cursor-pointer transition-colors">
                                                <span className="text-gray-600 text-sm"></span>
                                            </button>
                                        </div> */}
                                    </div>
                                </div>

                                {/* Breadcrumb Navigation */}
                                <div className="flex items-center gap-2 text-xs mb-5 px-4 py-2.5 bg-linear-to-r from-gray-50 to-white rounded-lg border border-gray-200">
                                    <span className="text-gray-400">🏠</span>
                                    <span className="text-teal-600 font-semibold hover:text-teal-700 cursor-pointer transition-colors">AI Generated</span>
                                    <span className="text-gray-400">›</span>
                                    <span className="text-teal-600 font-semibold hover:text-teal-700 cursor-pointer transition-colors">ABC Company</span>
                                    <span className="text-gray-400">›</span>
                                    <span className="text-gray-900 font-bold truncate">Project A - Website Redesign</span>
                                </div>

                                {/* Filter Pills */}
                                <div className="flex items-center gap-2 mb-6 flex-wrap">
                                    {filterTabs.map((tab: FilterTab) => (
                                        <button
                                            key={tab.value}
                                            onClick={() => setActiveFilter(tab.value)}
                                            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-200 cursor-pointer border shadow-sm ${activeFilter === tab.value
                                                ? 'bg-linear-to-r from-teal-600 to-teal-700 text-white border-teal-600 shadow-md shadow-teal-500/30'
                                                : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:shadow-md'
                                                }`}
                                        >
                                            <span className={activeFilter === tab.value ? 'text-white' : 'text-gray-500'}>{tab.icon}</span>
                                            {tab.label}
                                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${activeFilter === tab.value
                                                ? 'bg-white/20 text-white'
                                                : 'bg-gray-100 text-gray-600'
                                                }`}>
                                                {tab.count}
                                            </span>
                                        </button>
                                    ))}
                                </div>

                                {/* Table */}
                                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg">
                                    <div className="overflow-x-hidden">
                                        <table className="w-full table-fixed">
                                            <colgroup>
                                                <col className="w-10" />
                                                <col className="w-auto" />
                                                <col className="w-24" />
                                                <col className="w-28" />
                                                <col className="w-10" />
                                            </colgroup>
                                            <thead>
                                                <tr className="border-b border-gray-200 bg-linear-to-r from-gray-50 to-gray-100/50">
                                                    <th className="text-left px-3 py-3 overflow-hidden">
                                                        <input
                                                            type="checkbox"
                                                            className="rounded cursor-pointer accent-teal-600"
                                                            checked={selectedDocs.length === filteredTable.length && filteredTable.length > 0}
                                                            onChange={toggleSelectAll}
                                                        />
                                                    </th>
                                                    <th className="text-left text-[10px] font-bold text-gray-600 uppercase tracking-wider px-3 py-3 overflow-hidden">Name</th>
                                                    <th className="text-left text-[10px] font-bold text-gray-600 uppercase tracking-wider px-3 py-3 overflow-hidden">Type</th>
                                                    <th className="text-left text-[10px] font-bold text-gray-600 uppercase tracking-wider px-3 py-3 overflow-hidden">Date</th>
                                                    <th className="px-3 py-3 overflow-hidden"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {filteredTable.map((doc: Document, index) => (
                                                    <tr
                                                        key={doc.id}
                                                        className={`border-b border-gray-100 hover:bg-linear-to-r hover:from-teal-50/50 hover:to-teal-100/30 transition-all duration-200 cursor-pointer group ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'
                                                            }`}
                                                    >
                                                        <td className="px-3 py-3 overflow-hidden">
                                                            <input
                                                                type="checkbox"
                                                                className="rounded cursor-pointer accent-teal-600"
                                                                checked={selectedDocs.includes(doc.id)}
                                                                onChange={() => toggleSelectDoc(doc.id)}
                                                                onClick={(e) => e.stopPropagation()}
                                                            />
                                                        </td>
                                                        <td className="px-3 py-3 overflow-hidden">
                                                            <div className="flex items-center gap-3 min-w-0">
                                                                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-linear-to-br from-red-50 to-red-100 border border-red-200/50 shadow-sm group-hover:shadow-md transition-all shrink-0">
                                                                    <span className="text-sm">{doc.icon}</span>
                                                                </div>
                                                                <div className="min-w-0 flex-1 overflow-hidden">
                                                                    <div className="text-xs font-semibold text-gray-900 truncate group-hover:text-teal-700 transition-colors">{doc.name}</div>
                                                                    <div className="text-[10px] text-gray-500 truncate mt-0.5">{doc.subtitle}</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-3 py-3 overflow-hidden">
                                                            <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-md border ${doc.typeColor} inline-block truncate max-w-full`}>
                                                                {doc.type}
                                                            </span>
                                                        </td>
                                                        <td className="px-3 py-3 text-xs text-gray-600 font-medium overflow-hidden truncate">{doc.date}</td>
                                                        <td className="px-3 py-3 overflow-hidden">
                                                            <button className="p-1.5 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors opacity-0 group-hover:opacity-100">
                                                                <span className="text-gray-400 text-sm">⋮</span>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* Pagination */}
                                    <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 bg-linear-to-r from-gray-50 to-white">
                                        <span className="text-xs text-gray-600 font-medium">Showing 1-{filteredTable.length} of {filteredTable.length} documents</span>
                                        <div className="flex items-center gap-1.5">
                                            <button className="w-7 h-7 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-white hover:border-gray-300 hover:shadow-sm cursor-pointer text-sm transition-all">
                                                ‹
                                            </button>
                                            <button className="w-7 h-7 flex items-center justify-center rounded-lg bg-linear-to-r from-teal-600 to-teal-700 text-white text-xs font-bold cursor-pointer shadow-md shadow-teal-500/30">
                                                1
                                            </button>
                                            <button className="w-7 h-7 flex items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:bg-white hover:border-gray-300 hover:shadow-sm cursor-pointer text-xs font-semibold transition-all">
                                                2
                                            </button>
                                            <button className="w-7 h-7 flex items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:bg-white hover:border-gray-300 hover:shadow-sm cursor-pointer text-xs font-semibold transition-all">
                                                3
                                            </button>
                                            <span className="px-2 text-gray-400 text-xs">...</span>
                                            <button className="w-7 h-7 flex items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:bg-white hover:border-gray-300 hover:shadow-sm cursor-pointer text-xs font-bold transition-all">
                                                16
                                            </button>
                                            <button className="w-7 h-7 flex items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-white hover:border-gray-300 hover:shadow-sm cursor-pointer text-sm transition-all">
                                                ›
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>

                {/* Right Panel */}
                <DocumentsRightPanel />
            </div>
        </div>
    );
}