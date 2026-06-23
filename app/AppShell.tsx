'use client';
import { usePathname } from 'next/navigation';
import Sidebar from '@/components/sidebar';

export default function AppShell({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    if (pathname === '/' || pathname === '/signup' || pathname === '/login' || pathname === '/contact') {
        return <>{children}</>;
    }


    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                {children}
            </div>
        </div>
    );
}