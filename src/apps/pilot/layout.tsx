import { Outlet } from 'react-router-dom';

export default function PilotLayout() {
    return (
        <div className="min-h-screen bg-black text-white">
            <header className="p-4 border-b border-gray-800 flex justify-between">
                <h1 className="font-bold">PILOT OS</h1>
                <span>v1.0</span>
            </header>
            <main className="p-4">
                <Outlet />
            </main>
        </div>
    );
}
