import { Home, FileText, Activity, User, Settings, LogOut, Bell, Sun, Moon } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { cn } from '@/core/lib/utils'; // Assuming this util exists or use clsx/tailwind-merge

interface SidebarItemProps {
    icon: React.ReactNode;
    active: boolean;
    onClick: () => void;
    label?: string; // Add label for tooltip or accessibility if needed
}

function SidebarItem({ icon, active, onClick }: SidebarItemProps) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 mb-3",
                active
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-110"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/10"
            )}
        >
            {icon}
        </button>
    );
}

export function ClientSidebar({ theme, onToggleTheme }: { theme: 'light' | 'dark', onToggleTheme: () => void }) {
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname.includes(path);
    };

    return (
        <aside className="w-20 h-full bg-card rounded-lg flex flex-col items-center py-6 shadow-xl border border-border/50 z-50 transition-all">
            {/* Logo/Brand Placeholder */}
            <div className="w-12 h-12 bg-primary rounded-full mb-6 flex items-center justify-center shadow-lg shadow-primary/20">
                <div className="w-6 h-6 bg-white rounded-full" />
            </div>

            <nav className="flex-1 flex flex-col items-center w-full">
                <SidebarItem
                    icon={<Home size={24} />}
                    active={location.pathname === '/client' || location.pathname === '/client/dashboard'}
                    onClick={() => navigate('/client/dashboard')}
                />
                <SidebarItem
                    icon={<Activity size={24} />}
                    active={isActive('/client/portfolio') || isActive('/client/sites')}
                    onClick={() => navigate('/client/portfolio')}
                />
                <SidebarItem
                    icon={<FileText size={24} />}
                    active={isActive('/client/reports')}
                    onClick={() => navigate('/client/reports')}
                />
                <SidebarItem
                    icon={<Bell size={24} />}
                    active={isActive('/client/notifications')}
                    onClick={() => navigate('/client/notifications')}
                />
                <SidebarItem
                    icon={<User size={24} />}
                    active={isActive('/client/profile')}
                    onClick={() => navigate('/client/profile')}
                />
            </nav>

            <div className="mt-auto flex flex-col items-center w-full">
                <SidebarItem
                    icon={theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
                    active={false}
                    onClick={onToggleTheme}
                />
                <SidebarItem
                    icon={<Settings size={24} />}
                    active={isActive('/client/settings')}
                    onClick={() => navigate('/client/settings')}
                />
                <SidebarItem
                    icon={<LogOut size={24} />}
                    active={false}
                    onClick={() => navigate('/')}
                />
            </div>
        </aside>
    );
}
