'use client';

import Icon from '../icon';

interface Document {
    id: number;
    name: string;
    subtitle?: string;
    type: string;
    date: string;
    uploadedBy: string;
    size: string;
}

interface DocumentsRightPanelProps {
    document?: Document | null;
}

export default function DocumentsRightPanel({ document }: DocumentsRightPanelProps) {
    return (
        <aside className="w-80 bg-white border-l border-gray-100 h-screen flex flex-col shrink-0 overflow-hidden">
            {/* Header */}
            <div className="px-5 py-3 border-b border-gray-100 shrink-0 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-red-100 rounded-lg flex items-center justify-center">
                        <Icon name="file" size={14} className="text-red-600" />
                    </div>
                    <div>
                        <div className="text-sm font-semibold text-gray-900">{document?.name || 'INV-45871.pdf'}</div>
                        <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-teal-100 text-teal-700">
                            {document?.type || 'Invoice'}
                        </span>
                    </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                    <Icon name="more" size={14} />
                </button>
            </div>

            {/* Document Preview */}
            <div className="flex-1 overflow-y-auto">
                <div className="p-5">
                    {/* Invoice Preview Card */}
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4">
                        <div className="bg-white rounded-lg p-4 border border-gray-100">
                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">INVOICE</div>
                            <div className="flex items-center justify-between mb-3">
                                <div>
                                    <div className="text-xs font-bold text-gray-900">ABC Company</div>
                                    <div className="text-[10px] text-gray-500">123 Business Ave</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-[10px] text-gray-500">Invoice No:</div>
                                    <div className="text-xs font-bold text-gray-900">INV-45871</div>
                                </div>
                            </div>
                            <div className="border-t border-gray-100 pt-2 mb-2">
                                <div className="flex items-center justify-between text-[10px]">
                                    <span className="text-gray-500">Description</span>
                                    <span className="text-gray-500">Amount</span>
                                </div>
                                <div className="flex items-center justify-between text-xs mt-1">
                                    <span className="text-gray-700">Website Redesign Services</span>
                                    <span className="font-semibold text-gray-900">$4,850.00</span>
                                </div>
                            </div>
                            <div className="border-t border-gray-100 pt-2 flex items-center justify-between">
                                <span className="text-xs font-bold text-gray-900">Total</span>
                                <span className="text-sm font-bold text-gray-900">$4,850.00</span>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 mb-5">
                        <button className="flex-1 py-2 bg-teal-600 text-white rounded-lg text-xs font-semibold hover:bg-teal-700 transition flex items-center justify-center gap-1.5">
                            <Icon name="file" size={12} />
                            Open
                        </button>
                        <button className="flex-1 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-xs font-semibold hover:bg-gray-50 transition flex items-center justify-center gap-1.5">
                            <Icon name="plus" size={12} />
                            Download
                        </button>
                        <button className="w-9 h-9 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-500 hover:bg-gray-50">
                            <Icon name="more" size={14} />
                        </button>
                    </div>

                    {/* Tabs */}
                    <div className="flex items-center gap-4 border-b border-gray-200 mb-4">
                        <button className="pb-2 text-xs font-semibold text-teal-700 border-b-2 border-teal-600">Details</button>
                        <button className="pb-2 text-xs font-medium text-gray-500 hover:text-gray-700">Related</button>
                    </div>

                    {/* Details */}
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">Type</span>
                            <span className="text-xs font-medium text-gray-900">{document?.type || 'Invoice'}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">Invoice Number</span>
                            <span className="text-xs font-medium text-gray-900">INV-45871</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">Amount</span>
                            <span className="text-xs font-bold text-gray-900">$4,850.00</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">Client</span>
                            <span className="text-xs font-medium text-gray-900">ABC Company</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">Project</span>
                            <span className="text-xs font-medium text-gray-900">Project A - Website Redesign</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">Status</span>
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-green-100 text-green-700">Paid</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">Uploaded By</span>
                            <span className="text-xs font-medium text-gray-900">{document?.uploadedBy || 'Ali Khan'}</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">Uploaded On</span>
                            <span className="text-xs font-medium text-gray-900">{document?.date || 'Jan 12, 2024'}, 10:30 AM</span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">Storage</span>
                            <span className="text-xs font-medium text-teal-600">53 / memora-prod / invoices / 2024 / INV-45871.pdf</span>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}