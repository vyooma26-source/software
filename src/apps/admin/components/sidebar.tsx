import { LayoutDashboard, Radio, Server, Users, Settings, LogOut } from "lucide-react"
import { useNavigate, useLocation } from "react-router-dom"
import { cn } from "@/core/lib/utils"

const NAV_ITEMS = [
    { label: "Overview", icon: LayoutDashboard, path: "/admin/dashboard" },
    { label: "Live Operations", icon: Radio, path: "/admin/ops" },
    { label: "Assets", icon: Server, path: "/admin/assets" },
    { label: "Team", icon: Users, path: "/admin/users" },
]

export function AdminSidebar() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <aside className="w-64 bg-slate-950 text-white flex flex-col h-screen border-r border-slate-800">
            <div className="p-6">
                <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">V</div>
                    <span>Vyooma</span>
                </div>
                <div className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-semibold">Admin Console</div>
            </div>

            <nav className="flex-1 px-3 space-y-1">
                {NAV_ITEMS.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                        <button
                            key={item.path}
                            onClick={() => navigate(item.path)}
                            className={cn(
                                "flex items-center w-full px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                                isActive
                                    ? "bg-blue-600 text-white shadow-sm"
                                    : "text-slate-400 hover:text-white hover:bg-slate-900"
                            )}
                        >
                            <item.icon className="w-5 h-5 mr-3" />
                            {item.label}
                        </button>
                    )
                })}
            </nav>

            <div className="p-4 border-t border-slate-800">
                <button
                    onClick={() => navigate('/admin/settings')}
                    className={cn(
                        "flex items-center w-full px-3 py-2 text-sm font-medium transition-colors hover:text-white",
                        location.pathname === '/admin/settings' ? "text-white bg-slate-900 rounded-md" : "text-slate-400"
                    )}
                >
                    <Settings className="w-5 h-5 mr-3" />
                    Settings
                </button>
                <button className="flex items-center w-full px-3 py-2 text-sm font-medium text-red-400 hover:text-red-300 transition-colors mt-1">
                    <LogOut className="w-5 h-5 mr-3" />
                    Sign Out
                </button>
            </div>
        </aside>
    )
}
