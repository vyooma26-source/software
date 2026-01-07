import { Outlet, useNavigate } from 'react-router-dom';
import { ListTodo, Map, Settings, LogOut } from 'lucide-react';
import { SidebarIconOnly } from '@/core/components/sidebar/sidebar-icon-only';
import { SidebarNavItem } from '@/core/components/sidebar/sidebar-item';
import { OfflineIndicator } from '@/core/components/operational/offline-awareness';

export default function PilotLayout() {
    // Role Isolation Guard removed for consistency.

    return (
        <div className="theme-pilot bg-background text-foreground h-screen max-h-screen flex flex-col md:flex-row p-0 md:p-4 gap-0 md:gap-4 overflow-hidden font-mono transition-all selection:bg-primary/20">
            {/* Sidebar - Operational Icons */}
            <div className="hidden md:block h-full">
                <PilotSidebar />
            </div>

            {/* Operational Header for Mobile */}
            <header className="md:hidden h-16 border-b border-border bg-card flex items-center justify-between px-4 z-top-nav">
                <div className="w-8 h-8 bg-primary flex items-center justify-center font-bold text-primary-foreground border border-primary rounded-sm shadow-sm leading-none">P</div>
                <div className="flex gap-4">
                    <ListTodo className="text-primary" size={20} />
                    <Map size={20} />
                    <Settings size={20} />
                </div>
            </header>

            <main className="flex-1 flex flex-col h-full overflow-hidden relative bg-card/10 backdrop-blur-sm rounded-lg border border-border/50 shadow-inner">
                <div className="flex-1 overflow-y-auto overflow-x-hidden p-0 relative">
                    <div className="animate-page-fade h-full">
                        <Outlet />
                    </div>
                </div>
            </main>
            <OfflineIndicator />
        </div>
    );
}

function PilotSidebar() {
    const navigate = useNavigate();


    const isActive = (path: string) => location.pathname.includes(path);

    const topNav: SidebarNavItem[] = [
        {
            label: "Tasks",
            icon: ListTodo,
            active: isActive('/pilot/dashboard'),
            onClick: () => navigate('/pilot/dashboard')
        },
        {
            label: "Map",
            icon: Map,
            active: isActive('/pilot/map'),
            onClick: () => { }
        }
    ];

    const bottomNav: SidebarNavItem[] = [
        {
            label: "Config",
            icon: Settings,
            active: isActive('/pilot/settings'),
            onClick: () => { }
        },
        {
            label: "Exit",
            icon: LogOut,
            variant: 'destructive',
            onClick: () => navigate('/')
        }
    ];

    return (
        <SidebarIconOnly
            logo={
                <div className="w-10 h-10 bg-primary flex items-center justify-center font-bold text-primary-foreground border-2 border-primary rounded-md shadow-lg shadow-primary/20">
                    P
                </div>
            }
            topNav={topNav}
            bottomNav={bottomNav}
        />
    )
}

