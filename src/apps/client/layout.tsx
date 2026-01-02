import { useState, useEffect } from 'react';
import { Outlet, useLocation, Navigate } from 'react-router-dom';
import { ClientSidebar } from './components/sidebar';

export default function ClientLayout() {
    const location = useLocation();
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        return (localStorage.getItem('client-theme') as 'light' | 'dark') || 'light';
    });

    useEffect(() => {
        localStorage.setItem('client-theme', theme);
    }, [theme]);

    const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

    // Role Isolation Guard (UI-only)
    if (!location.pathname.startsWith('/client')) {
        return <Navigate to="/client/dashboard" replace />;
    }

    return (
        <div className={`${theme === 'light' ? 'theme-client-premium' : 'theme-client-dark'} bg-background text-foreground h-screen max-h-screen flex p-4 gap-4 overflow-hidden transition-all selection:bg-primary/20`}>
            {/* Sidebar fixed to left */}
            <ClientSidebar theme={theme} onToggleTheme={toggleTheme} />

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col h-full overflow-hidden relative">
                <div className="flex-1 overflow-y-auto overflow-x-hidden pt-2 relative">
                    {/* Content Container */}
                    <div className="animate-page-fade pb-8">
                        <Outlet />
                    </div>
                </div>
            </main>
        </div>
    );
}
