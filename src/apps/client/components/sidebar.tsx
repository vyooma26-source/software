import { Home, FileText, Activity, User, Settings, LogOut, Bell } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SidebarIconOnly } from '@/core/components/sidebar/sidebar-icon-only';
import { SidebarNavItem } from '@/core/components/sidebar/sidebar-item';

export function ClientSidebar() {
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path: string) => location.pathname.includes(path);

    const topNav: SidebarNavItem[] = [
        {
            label: "Home",
            icon: Home,
            active: location.pathname === '/client' || location.pathname === '/client/dashboard',
            onClick: () => navigate('/client/dashboard')
        },
        {
            label: "Portfolio",
            icon: Activity,
            active: isActive('/client/portfolio') || isActive('/client/sites'),
            onClick: () => navigate('/client/portfolio')
        },
        {
            label: "Reports",
            icon: FileText,
            active: isActive('/client/reports'),
            onClick: () => navigate('/client/reports')
        },
        {
            label: "Profile",
            icon: User,
            active: isActive('/client/profile'),
            onClick: () => navigate('/client/profile')
        },
        {
            label: "Notifications",
            icon: Bell,
            active: isActive('/client/notifications'),
            onClick: () => navigate('/client/notifications')
        },
        {
            label: "Settings",
            icon: Settings,
            active: isActive('/client/settings'),
            onClick: () => navigate('/client/settings')
        }
    ];

    const bottomNav: SidebarNavItem[] = [
        {
            label: "Sign Out",
            icon: LogOut,
            variant: 'destructive',
            onClick: () => navigate('/')
        }
    ];

    return (
        <SidebarIconOnly
            logo={
                <div className="w-12 h-12 bg-gradient-to-br from-[#2d4a7c] to-[#1e3557] rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden group cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="w-6 h-6 bg-white rounded-lg relative z-10" />
                </div>
            }
            topNav={topNav}
            bottomNav={bottomNav}
        />
    );
}
