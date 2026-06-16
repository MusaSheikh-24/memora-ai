'use client';
import { usePathname } from 'next/navigation';
import Sidebar from '@/components/sidebar';

export default function AppShell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // ✅ Landing page par Sidebar NAHI dikhana
    if (pathname === '/') {
        return <>{children}</>;
    }

    // ✅ Baaki sab pages (dashboard, chat, etc.) par Sidebar DIKHAO
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                {children}
            </div>
        </div>
    );
}