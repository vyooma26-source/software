import { Outlet } from 'react-router-dom';
import { AdminSidebar } from './components/sidebar';

export default function AdminLayout() {
    return (
        <div className="flex h-screen bg-slate-50">
            <AdminSidebar />
            <main className="flex-1 overflow-auto bg-slate-50/50">
                <header className="h-16 border-b border-slate-200 bg-white flex items-center px-8 justify-between sticky top-0 z-10">
                    <h2 className="font-semibold text-slate-800">Console</h2>
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-slate-500">Administrator</span>
                        <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
                    </div>
                </header>
                <div className="p-8">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
