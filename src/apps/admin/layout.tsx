import { Outlet } from "react-router-dom"
import { TopNav } from '@/core/components/top-nav';
import { AdminSidebar } from "./components/sidebar"

export default function AdminLayout() {
    // Role Isolation Guard removed as it interferes with logout and is handled by the router hierarchy.

    return (
        <div className="theme-admin bg-background text-foreground h-screen max-h-screen flex flex-col md:flex-row p-0 md:p-4 gap-0 md:gap-4 overflow-hidden font-sans transition-all selection:bg-primary/20">
            {/* Sidebar - Hidden on mobile or fixed on desktop */}
            <div className="hidden md:block h-full">
                <AdminSidebar />
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col h-full overflow-hidden relative">
                <TopNav role="admin" />
                <main className="flex-1 overflow-y-auto pt-4 relative bg-background/50 backdrop-blur-sm rounded-lg border border-border/50 shadow-sm">
                    <div className="animate-page-fade max-w-7xl mx-auto px-6 py-4">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
}
