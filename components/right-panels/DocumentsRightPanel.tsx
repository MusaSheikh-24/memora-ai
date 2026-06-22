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
        <aside className="w-80 bg-white border-l border-gray-200 h-screen flex flex-col shrink-0">
            {/* Header */}
            <div className="px-4 py-3 border-b border-gray-100 shrink-0">
                <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2.5 flex-1 min-w-0">
                        <div className="w-7 h-7 bg-teal-600 rounded-lg flex items-center justify-center shrink-0">
                            <Icon name="file" size={14} className="text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="text-xs font-semibold text-gray-900 truncate">
                                {document?.name || 'INV-45871.pdf'}
                            </div>
                            <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-md bg-teal-50 text-teal-700 border border-teal-100">
                                {document?.type || 'Invoice'}
                            </span>
                        </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 p-1 hover:bg-gray-100 rounded transition-colors shrink-0">
                        <Icon name="more" size={14} />
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden">
                <div className="p-4 space-y-4">
                    {/* Invoice Preview */}
                    <div className="bg-linear-to-br from-gray-50 to-gray-100 rounded-lg p-3 border border-gray-200">
                        <div className="bg-white rounded-md p-3 border border-gray-200 shadow-sm">
                            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                                Invoice Preview
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-start justify-between">
                                    <div className="min-w-0">
                                        <div className="text-xs font-bold text-gray-900">ABC Company</div>
                                        <div className="text-[10px] text-gray-500">123 Business Ave</div>
                                    </div>
                                    <div className="text-right shrink-0">
                                        <div className="text-[10px] text-gray-500">Invoice No</div>
                                        <div className="text-xs font-bold text-gray-900">INV-45871</div>
                                    </div>
                                </div>
                                <div className="border-t border-gray-100 pt-2">
                                    <div className="flex items-center justify-between text-[10px]">
                                        <span className="text-gray-500">Website Redesign</span>
                                        <span className="font-semibold text-gray-900">$4,850</span>
                                    </div>
                                </div>
                                <div className="border-t border-gray-200 pt-2 flex items-center justify-between">
                                    <span className="text-xs font-bold text-gray-900">Total</span>
                                    <span className="text-sm font-bold text-teal-600">$4,850</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-2">
                        <button className="py-2 px-3 bg-linear-to-r from-teal-600 to-teal-700 text-white rounded-lg text-xs font-semibold hover:from-teal-700 hover:to-teal-800 transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-1.5">
                            <Icon name="file" size={12} />
                            Open
                        </button>
                        <button className="py-2 px-3 bg-white border border-gray-300 text-gray-700 rounded-lg text-xs font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all flex items-center justify-center gap-1.5">
                            <Icon name="plus" size={12} />
                            Download
                        </button>
                    </div>

                    {/* Details Section */}
                    <div className="space-y-2.5">
                        <div className="flex items-center justify-between py-1.5 border-b border-gray-100">
                            <span className="text-[10px] text-gray-500">Type</span>
                            <span className="text-[10px] font-medium text-gray-900">
                                {document?.type || 'Invoice'}
                            </span>
                        </div>
                        <div className="flex items-center justify-between py-1.5 border-b border-gray-100">
                            <span className="text-[10px] text-gray-500">Invoice Number</span>
                            <span className="text-[10px] font-semibold text-gray-900">INV-45871</span>
                        </div>
                        <div className="flex items-center justify-between py-1.5 border-b border-gray-100">
                            <span className="text-[10px] text-gray-500">Amount</span>
                            <span className="text-[10px] font-bold text-gray-900">$4,850.00</span>
                        </div>
                        <div className="flex items-center justify-between py-1.5 border-b border-gray-100">
                            <span className="text-[10px] text-gray-500">Client</span>
                            <span className="text-[10px] font-medium text-gray-900">ABC Company</span>
                        </div>
                        <div className="flex items-center justify-between py-1.5 border-b border-gray-100">
                            <span className="text-[10px] text-gray-500">Project</span>
                            <span className="text-[10px] font-medium text-gray-900 text-right max-w-[60%] truncate">
                                Website Redesign
                            </span>
                        </div>
                        <div className="flex items-center justify-between py-1.5 border-b border-gray-100">
                            <span className="text-[10px] text-gray-500">Status</span>
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-green-100 text-green-700 border border-green-200">
                                Paid
                            </span>
                        </div>
                        <div className="flex items-center justify-between py-1.5 border-b border-gray-100">
                            <span className="text-[10px] text-gray-500">Uploaded By</span>
                            <span className="text-[10px] font-medium text-gray-900">
                                {document?.uploadedBy || 'Ali Khan'}
                            </span>
                        </div>
                        <div className="flex items-center justify-between py-1.5 border-b border-gray-100">
                            <span className="text-[10px] text-gray-500">Uploaded On</span>
                            <span className="text-[10px] font-medium text-gray-900">
                                {document?.date || 'Jan 12, 2024'}
                            </span>
                        </div>
                        <div className="flex items-start justify-between py-1.5">
                            <span className="text-[10px] text-gray-500">Storage Path</span>
                            <span className="text-[10px] font-medium text-teal-600 text-right max-w-[60%] truncate">
                                53/memora-prod/invoices
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}