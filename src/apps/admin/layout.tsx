import { Outlet, useLocation, Navigate } from "react-router-dom"
import { TopNav } from '@/core/components/top-nav';
import { AdminSidebar } from "./components/sidebar"

export default function AdminLayout() {
    const location = useLocation();

    // Role Isolation Guard (UI-only)
    if (!location.pathname.startsWith('/admin')) {
        return <Navigate to="/admin/dashboard" replace />;
    }

    return (
        <div className="theme-admin bg-background text-foreground min-h-screen flex font-sans">
            <AdminSidebar />
            <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
                <TopNav role="admin" />
                <main className="flex-1 overflow-auto p-8 bg-muted/20">
                    <div className="animate-page-fade">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
}
