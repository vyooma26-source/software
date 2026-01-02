import { Outlet, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { cn } from '@/core/lib/utils';
import { ListTodo, Map, Settings, LogOut } from 'lucide-react';

export default function PilotLayout() {
    const location = useLocation();

    // Role Isolation Guard (UI-only)
    if (!location.pathname.startsWith('/pilot')) {
        return <Navigate to="/pilot/dashboard" replace />;
    }

    return (
        <div className="theme-pilot bg-background text-foreground min-h-screen flex font-mono overflow-hidden">
            {/* Pilot Sidebar - High Contrast */}
            <PilotSidebar />

            <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
                <div className="flex-1 overflow-y-auto overflow-x-hidden p-0 relative">
                    <div className="animate-page-fade h-full">
                        <Outlet />
                    </div>
                </div>
            </main>
        </div>
    );
}

function PilotSidebar() {
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path: string) => location.pathname.includes(path);

    return (
        <aside className="w-20 bg-card border-r border-border h-full flex flex-col items-center py-6 z-50">
            <div className="w-10 h-10 bg-primary mb-12 flex items-center justify-center font-bold text-black border-2 border-primary">
                P
            </div>

            <nav className="flex-1 flex flex-col gap-6 w-full items-center">
                <SidebarButton
                    icon={<ListTodo size={24} />}
                    active={isActive('/pilot/dashboard')}
                    onClick={() => navigate('/pilot/dashboard')}
                    label="Tasks"
                />
                <SidebarButton
                    icon={<Map size={24} />}
                    active={isActive('/pilot/map')} // Placeholder
                    onClick={() => { }}
                    label="Map"
                />
            </nav>

            <div className="mt-auto flex flex-col gap-6 w-full items-center mb-6">
                <SidebarButton
                    icon={<Settings size={24} />}
                    active={isActive('/pilot/settings')}
                    onClick={() => { }}
                    label="Config"
                />
                <SidebarButton
                    icon={<LogOut size={24} />}
                    active={false}
                    onClick={() => navigate('/')}
                    label="Exit"
                />
            </div>
        </aside>
    )
}

function SidebarButton({ icon, active, onClick }: any) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "p-3 rounded-md transition-all border-2 flex flex-col items-center justify-center w-14 h-14",
                active
                    ? "bg-primary text-black border-primary"
                    : "bg-transparent text-muted-foreground border-transparent hover:border-primary/50 hover:text-white"
            )}
        >
            {icon}
            {/* <span className="text-[9px] mt-1 font-bold uppercase">{label}</span> */}
        </button>
    )
}
