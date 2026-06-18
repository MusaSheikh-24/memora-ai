// Single source of truth for Memora's Primary Navigation IA.
// Consumed by the Sidebar (primary nav) and the Command Center (⌘K).

import { IconName } from '@/components/icon';

export interface NavItem {
    label: string;
    href: string;
    icon: IconName;
    badge?: string;
    flagship?: boolean;
    soon?: boolean; // destination spec'd but route not yet built
    keywords?: string[];
}

export interface NavSection {
    title: string;
    items: NavItem[];
}

export const NAV_SECTIONS: NavSection[] = [
    {
        title: 'Workspace',
        items: [
            { label: 'Home', href: 'home', icon: 'home', keywords: ['dashboard', 'overview'] },
            { label: 'Memory Chat', href: '/memory-chat', icon: 'message', keywords: ['ask', 'ai', 'chat'] },
            { label: 'Documents', href: '/documents', icon: 'folder', badge: '847', keywords: ['files', 'contracts', 'invoices'] },
            { label: 'Timeline', href: '/timeline', icon: 'calendar', keywords: ['history', 'activity'] },
            { label: 'Graph', href: '/graph', icon: 'graph', keywords: ['memory graph', 'relationships', 'connections'] },
            { label: 'Alerts', href: '/alerts', icon: 'bell', badge: '3', keywords: ['notifications', 'reminders'] },
        ],
    },
    {
        title: 'Intelligence',
        items: [
            { label: 'Company Brain', href: '/company-brain', icon: 'sparkles', flagship: true, soon: false, keywords: ['ask company', 'crm', 'what happened'] },
            { label: 'Executive Dashboard', href: '/executive', icon: 'trending-up', soon: false, keywords: ['ceo', 'revenue', 'forecast', 'brief'] },
            { label: 'Relationship Intelligence', href: '/relationships', icon: 'globe', soon: false, keywords: ['heatmap', 'risk map', 'clients'] },
            { label: 'Meeting Intelligence', href: '/meetings', icon: 'mic', soon: false, keywords: ['transcript', 'action items', 'decisions'] },
        ],
    },
    {
        title: 'Records',
        items: [
            { label: 'Companies', href: '/companies', icon: 'building', soon: false, keywords: ['accounts', 'clients', 'company profile'] },
            { label: 'People', href: '/people', icon: 'users', soon: false, keywords: ['contacts', 'person profile'] },
            { label: 'Projects', href: '/projects', icon: 'kanban', soon: false, keywords: ['workspace', 'initiatives'] },
            { label: 'Tasks', href: '/tasks', icon: 'check-square', soon: false, keywords: ['to-do', 'board', 'kanban'] },
        ],
    },
    {
        title: 'Build',
        items: [
            { label: 'Automations', href: '/automations', icon: 'zap', soon: true, keywords: ['workflow', 'triggers', 'actions'] },
            { label: 'Workspace Builder', href: '/builder', icon: 'grid', soon: true, keywords: ['create workspace', 'generate'] },
        ],
    },
];

export const NAV_FOOTER: NavItem[] = [
    { label: 'Settings', href: '/settings', icon: 'settings', keywords: ['preferences', 'account', 'team'] },
];

export const ALL_NAV_ITEMS: NavItem[] = [
    ...NAV_SECTIONS.flatMap((s) => s.items),
    ...NAV_FOOTER,
];
