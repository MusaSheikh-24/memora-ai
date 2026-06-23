import { ReactNode } from 'react';

export type IconName =
    | 'home' | 'message' | 'folder' | 'calendar' | 'graph' | 'bell'
    | 'sparkles' | 'trending-up' | 'globe' | 'mic' | 'building' | 'users'
    | 'kanban' | 'check-square' | 'zap' | 'grid' | 'settings' | 'search'
    | 'sun' | 'moon' | 'send' | 'eye' | 'more' | 'plus' | 'mail' | 'note'
    | 'alert' | 'file' | 'contract' | 'receipt' | 'arrow-up-right' | 'voice'
    | 'chevron-right' | 'chevron-down' | 'network' | 'chart' | 'phone' | 'tag'
    | 'clock' | 'activity' | 'download' | 'shield' | 'lock' | 'info'
    | 'sidebar' | 'close' | 'menu';  // ✅ Ye 3 icons add karo

const PATHS: Record<IconName, ReactNode> = {
    home: (<><path d="m3 10.5 9-7 9 7" /><path d="M5 9.5V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5" /><path d="M9.5 21v-6h5v6" /></>),
    message: (<path d="M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H9l-4 4v-4H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />),
    folder: (<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />),
    calendar: (<><rect x="3.5" y="4.5" width="17" height="16" rx="2" /><path d="M3.5 9h17" /><path d="M8 2.5v4" /><path d="M16 2.5v4" /></>),
    graph: (<><circle cx="12" cy="5" r="2.2" /><circle cx="5.5" cy="18" r="2.2" /><circle cx="18.5" cy="18" r="2.2" /><path d="M11 7 6.5 16" /><path d="M13 7l4.5 9" /></>),
    bell: (<><path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z" /><path d="M10 19a2 2 0 0 0 4 0" /></>),
    sparkles: (<><path d="M12 3.2l1.7 4.6 4.6 1.7-4.6 1.7L12 15.8l-1.7-4.6L5.7 9.5l4.6-1.7Z" /><path d="M18.5 14.5l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8Z" /></>),
    'trending-up': (<><path d="M3 17 9 11l4 4 8-8" /><path d="M16 7h5v5" /></>),
    globe: (<><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a15 15 0 0 1 0 18" /><path d="M12 3a15 15 0 0 0 0 18" /></>),
    mic: (<><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M6 11a6 6 0 0 0 12 0" /><path d="M12 17v4" /><path d="M9 21h6" /></>),
    building: (<><path d="M4 21V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16" /><path d="M14 10h5a1 1 0 0 1 1 1v10" /><path d="M3 21h18" /><path d="M7.5 8h0M10.5 8h0M7.5 12h0M10.5 12h0M7.5 16h0M10.5 16h0" /></>),
    users: (<><path d="M16 19v-1a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v1" /><circle cx="9" cy="8" r="3" /><path d="M22 19v-1a4 4 0 0 0-3-3.85" /><path d="M15.5 5.15a4 4 0 0 1 0 7.7" /></>),
    kanban: (<><rect x="3.5" y="4.5" width="4.5" height="15" rx="1" /><rect x="9.75" y="4.5" width="4.5" height="9.5" rx="1" /><rect x="16" y="4.5" width="4.5" height="12" rx="1" /></>),
    'check-square': (<><rect x="4" y="4" width="16" height="16" rx="2.5" /><path d="M8 12l3 3 5-6" /></>),
    zap: (<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />),
    grid: (<><rect x="4" y="4" width="7" height="7" rx="1.5" /><rect x="13" y="4" width="7" height="7" rx="1.5" /><rect x="4" y="13" width="7" height="7" rx="1.5" /><rect x="13" y="13" width="7" height="7" rx="1.5" /></>),
    settings: (<><path d="M4 6h9" /><path d="M17 6h3" /><path d="M4 12h3" /><path d="M11 12h9" /><path d="M4 18h7" /><path d="M15 18h5" /><circle cx="15" cy="6" r="2" /><circle cx="9" cy="12" r="2" /><circle cx="13" cy="18" r="2" /></>),
    search: (<><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></>),
    sun: (<><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.4 1.4M17.6 17.6 19 19M19 5l-1.4 1.4M6.4 17.6 5 19" /></>),
    moon: (<path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.5 6.5 0 0 0 9.8 9.8Z" />),
    send: (<><path d="M22 2 11 13" /><path d="M22 2 15 22l-4-9-9-4Z" /></>),
    eye: (<><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></>),
    more: (<><circle cx="12" cy="5" r="1.4" fill="currentColor" stroke="none" /><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" /><circle cx="12" cy="19" r="1.4" fill="currentColor" stroke="none" /></>),
    plus: (<><path d="M12 5v14" /><path d="M5 12h14" /></>),
    mail: (<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>),
    note: (<><path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8Z" /><path d="M14 3v5h5" /></>),
    alert: (<><path d="M12 3.5 21 19a1 1 0 0 1-.9 1.5H3.9A1 1 0 0 1 3 19L12 3.5Z" /><path d="M12 9.5v4.5" /><path d="M12 17.5h0" /></>),
    file: (<><path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8Z" /><path d="M14 3v5h5" /><path d="M9 13h6M9 17h4" /></>),
    contract: (<><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 3v4h6V3" /><path d="M8 12h8M8 16h5" /></>),
    receipt: (<><path d="M5 3h14a1 1 0 0 1 1 1v17l-2.5-1.6L15 21l-3-1.6L9 21l-2.5-1.6L4 21V4a1 1 0 0 1 1-1Z" /><path d="M8 8h8M8 12h8M8 16h5" /></>),
    'arrow-up-right': (<><path d="M7 17 17 7" /><path d="M9 7h8v8" /></>),
    voice: (<><path d="M3 12v0M7 8v8M11 5v14M15 9v6M19 11v2" /></>),
    'chevron-right': (<path d="m9 18 6-6-6-6" />),
    'chevron-down': (<path d="m6 9 6 6 6-6" />),
    phone: (<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-1.1 2.18L7.17 12a12.6 12.6 0 0 0 6.65 6.65l1.67-1.67a2 2 0 0 1 2.18-1.1 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />),
    network: (<><circle cx="12" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="18" r="3" /><path d="M9.6 8.4 7.4 15.6" /><path d="m14.4 8.4 2.2 7.2" /><path d="M6 18h12" /></>),
    chart: (<><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></>),
    tag: (<path d="M12.5 17.5 17 13l-4.5-4.5a2.4 2.4 0 0 0-3.4 0L2 14V5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2Z" />),
    clock: (<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></>),
    activity: (<><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></>),
    download: (<><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><path d="m7 10 5 5 5-5" /><path d="M12 15V3" /></>),
    shield: (<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></>),
    lock: (<><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>),
    info: (<><circle cx="12" cy="12" r="9" /><path d="M12 8v4" /><path d="M12 16h.01" /></>),

    // ✅ Naye icons add karo:
    sidebar: (<><path d="M3 3h18v18H3z" /><path d="M9 3v18" /></>),
    close: (<><path d="M18 6 6 18" /><path d="m6 6 12 12" /></>),
    menu: (<><path d="M4 12h16" /><path d="M4 6h16" /><path d="M4 18h16" /></>),
};

interface IconProps {
    name: IconName;
    size?: number;
    className?: string;
    strokeWidth?: number;
}

export default function Icon({ name, size = 18, className = '', strokeWidth = 1.75 }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            aria-hidden="true"
        >
            {PATHS[name]}
        </svg>
    );
}