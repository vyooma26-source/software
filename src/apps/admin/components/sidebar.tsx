import { LayoutDashboard, Radio, Server, Users, Settings, LogOut } from "lucide-react"
import { useNavigate, useLocation } from "react-router-dom"
import { SidebarExpanded } from "@/core/components/sidebar/sidebar-expanded"
import { SidebarNavItem } from "@/core/components/sidebar/sidebar-item"

const NAV_ITEMS = [
    { label: "Overview", icon: LayoutDashboard, path: "/admin/dashboard" },
    { label: "Live Operations", icon: Radio, path: "/admin/ops" },
    { label: "Assets", icon: Server, path: "/admin/assets" },
    { label: "Team", icon: Users, path: "/admin/users" },
]

export function AdminSidebar() {
    const navigate = useNavigate();
    const location = useLocation();

    const topNav: SidebarNavItem[] = NAV_ITEMS.map(item => ({
        ...item,
        active: location.pathname === item.path,
        onClick: () => navigate(item.path)
    }));

    const bottomNav: SidebarNavItem[] = [
        {
            label: "Settings",
            icon: Settings,
            active: location.pathname === '/admin/settings',
            onClick: () => navigate('/admin/settings')
        },
        {
            label: "Sign Out",
            icon: LogOut,
            variant: 'destructive',
            onClick: () => navigate('/')
        }
    ];

    return (
        <SidebarExpanded
            brandName="Vyooma"
            subText="Admin Console"
            logo={
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground shadow-sm font-bold text-xl">
                    V
                </div>
            }
            topNav={topNav}
            bottomNav={bottomNav}
        />
    )
}
