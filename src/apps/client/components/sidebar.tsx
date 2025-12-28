
import { Home, Briefcase, User, Settings, LogOut } from 'lucide-react';
import { cn } from "@/core/lib/utils";
import { useLocation, useNavigate } from 'react-router-dom';

interface SidebarItemProps {
    icon: React.ReactNode;
    active?: boolean;
    onClick?: () => void;
}

function SidebarItem({ icon, active, onClick }: SidebarItemProps) {
    return (
        <div
            onClick={onClick}
            className={cn(
                "relative flex items-center justify-center w-12 h-12 mb-4 rounded-full transition-all cursor-pointer group",
                active ? "bg-white text-black" : "text-gray-400 hover:text-white"
            )}
        >
            {/* Active Indicator (Pill Shape if needed, but using circular bg for high contrast simple look first) */}
            {icon}
            {active && (
                <div className="absolute -left-6 w-1 h-8 bg-white rounded-r-full" />
            )}
        </div>
    );
}

export function ClientSidebar() {
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname.includes(path);
    };

    return (
        <aside className="w-24 h-full bg-card flex flex-col items-center py-8 border-r border-border/10 rounded-r-[2rem]">
            {/* Logo/Brand Placeholder */}
            <div className="w-12 h-12 bg-white rounded-full mb-12 flex items-center justify-center">
                <div className="w-6 h-6 bg-black rounded-full" />
            </div>

            <nav className="flex-1 flex flex-col items-center w-full">
                <SidebarItem
                    icon={<Home size={24} />}
                    active={location.pathname === '/client' || location.pathname === '/client/dashboard'}
                    onClick={() => navigate('/client/dashboard')}
                />
                <SidebarItem
                    icon={<Briefcase size={24} />}
                    active={isActive('/client/portfolio')}
                    onClick={() => navigate('/client/portfolio')}
                />
                <SidebarItem
                    icon={<User size={24} />}
                    active={isActive('/client/profile')}
                    onClick={() => navigate('/client/profile')}
                />
            </nav>

            <div className="mt-auto flex flex-col items-center w-full">
                <SidebarItem
                    icon={<Settings size={24} />}
                    active={isActive('/client/settings')}
                    onClick={() => navigate('/client/settings')}
                />
                <SidebarItem
                    icon={<LogOut size={24} />}
                    onClick={() => navigate('/')}
                />
            </div>
        </aside>
    );
}

