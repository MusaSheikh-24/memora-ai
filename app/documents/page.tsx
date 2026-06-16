'use client';
import { useState } from 'react';
import TopBar from '@/components/topbar';
import DocumentsRightPanel from '@/components/right-panels/DocumentsRightPanel';

// Table data matching the image
const tableData = [
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
        typeColor: 'bg-teal-100 text-teal-700',
        icon: '📄',
        date: 'Jan 05, 2024',
        uploadedBy: 'Mike T.',
        initials: 'MT',
        avatarColor: 'bg-gray-600',
        size: '120 KB'
    },
];

// Filter tabs with counts
const filterTabs = [
    { label: 'All', count: 128, value: 'all', icon: '📋' },
    { label: 'Invoices', count: 42, value: 'Invoice', icon: '📄' },
    { label: 'Contracts', count: 18, value: 'Contract', icon: '📋' },
    { label: 'Meetings', count: 24, value: 'Meeting', icon: '📅' },
    { label: 'Emails', count: 28, value: 'Email', icon: '✉' },
    { label: 'Notes', count: 16, value: 'Note', icon: '📝' },
];

export default function DocumentsPage() {
    const [activeFilter, setActiveFilter] = useState('all');
    const [selectedDocs, setSelectedDocs] = useState<number[]>([]);

    const filteredTable = tableData.filter(
        (doc) => activeFilter === 'all' || doc.type === activeFilter
    );

    const toggleSelectAll = () => {
        if (selectedDocs.length === filteredTable.length) {
            setSelectedDocs([]);
        } else {
            setSelectedDocs(filteredTable.map(doc => doc.id));
        }
    };

    const toggleSelectDoc = (id: number) => {
        if (selectedDocs.includes(id)) {
            setSelectedDocs(selectedDocs.filter(docId => docId !== id));
        } else {
            setSelectedDocs([...selectedDocs, id]);
        }
    };

    return (
        <div className="flex h-screen overflow-hidden">
            <main className="flex-1 flex flex-col overflow-hidden bg-gray-50">
                <TopBar />

                <div className="flex-1 overflow-y-auto p-6">
                    {/* Breadcrumb Navigation */}
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                        <span className="text-teal-600 font-medium hover:text-teal-700 cursor-pointer">AI Generated</span>
                        <span className="text-gray-400">›</span>
                        <span className="text-teal-600 font-medium hover:text-teal-700 cursor-pointer">ABC Company</span>
                        <span className="text-gray-400">›</span>
                        <span className="text-gray-900 font-semibold">Project A - Website Redesign</span>
                    </div>

                    {/* Filter Pills */}
                    <div className="flex items-center gap-2 mb-6 flex-wrap">
                        {filterTabs.map((tab) => (
                            <button
                                key={tab.value}
                                onClick={() => setActiveFilter(tab.value)}
                                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer border ${activeFilter === tab.value
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

                    {/* Table */}
                    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-100 bg-gray-50/50">
                                    <th className="text-left w-12 px-4 py-3">
                                        <input
                                            type="checkbox"
                                            className="rounded cursor-pointer"
                                            checked={selectedDocs.length === filteredTable.length && filteredTable.length > 0}
                                            onChange={toggleSelectAll}
                                        />
                                    </th>
                                    <th className="text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider px-4 py-3">Name</th>
                                    <th className="text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider px-4 py-3">Type</th>
                                    <th className="text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider px-4 py-3">Date</th>
                                    <th className="text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider px-4 py-3">Uploaded By</th>
                                    <th className="text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider px-4 py-3">Size</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredTable.map((doc) => (
                                    <tr
                                        key={doc.id}
                                        className="border-b border-gray-50 hover:bg-teal-50/30 transition cursor-pointer"
                                    >
                                        <td className="px-4 py-3">
                                            <input
                                                type="checkbox"
                                                className="rounded cursor-pointer"
                                                checked={selectedDocs.includes(doc.id)}
                                                onChange={() => toggleSelectDoc(doc.id)}
                                                onClick={(e) => e.stopPropagation()}
                                            />
                                        </td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold bg-red-100 text-red-600">
                                                    {doc.icon}
                                                </div>
                                                <div>
                                                    <div className="text-sm font-semibold text-gray-900">{doc.name}</div>
                                                    <div className="text-xs text-gray-500">{doc.subtitle}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3">
                                            <span className={`text-[11px] font-semibold px-2 py-1 rounded ${doc.typeColor}`}>
                                                {doc.type}
                                            </span>
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-600">{doc.date}</td>
                                        <td className="px-4 py-3">
                                            <div className="flex items-center gap-2">
                                                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-[10px] font-bold ${doc.avatarColor}`}>
                                                    {doc.initials}
                                                </div>
                                                <span className="text-sm text-gray-700">{doc.uploadedBy}</span>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-sm text-gray-600">{doc.size}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Pagination */}
                        <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100 bg-gray-50/30">
                            <span className="text-xs text-gray-500">Showing 1-8 of 128</span>
                            <div className="flex items-center gap-1">
                                <button className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-gray-400 hover:bg-gray-50 cursor-pointer text-xs">
                                    ‹
                                </button>
                                <button className="w-7 h-7 flex items-center justify-center rounded bg-teal-600 text-white text-xs font-semibold cursor-pointer">
                                    1
                                </button>
                                <button className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-gray-700 hover:bg-gray-50 cursor-pointer text-xs">
                                    2
                                </button>
                                <button className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-gray-700 hover:bg-gray-50 cursor-pointer text-xs">
                                    3
                                </button>
                                <span className="px-1 text-gray-400 text-xs">...</span>
                                <button className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-gray-700 hover:bg-gray-50 cursor-pointer text-xs font-semibold">
                                    16
                                </button>
                                <button className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-gray-400 hover:bg-gray-50 cursor-pointer text-xs">
                                    ›
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <DocumentsRightPanel />
        </div>
    );
}