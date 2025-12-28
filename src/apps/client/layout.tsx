import { Outlet } from 'react-router-dom';
import { ClientSidebar } from './components/sidebar';

export default function ClientLayout() {
    return (
        <div className="theme-client-premium bg-background text-foreground min-h-screen flex p-4 font-sans overflow-hidden">
            <ClientSidebar />
            <main className="flex-1 ml-4 h-[calc(100vh-2rem)] rounded-[2rem] overflow-hidden relative">
                <Outlet />
            </main>
        </div>
    );
}
