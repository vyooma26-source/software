import { useState, useEffect } from 'react';
import { WifiOff, RefreshCw, CheckCircle } from 'lucide-react';

export function OfflineIndicator() {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    if (isOnline) return null;

    return (
        <div className="fixed bottom-6 right-6 z-[100] animate-in fade-in slide-in-from-bottom-4">
            <div className="bg-destructive text-destructive-foreground px-6 py-3 rounded-lg shadow-2xl flex items-center gap-3 border border-white/10">
                <WifiOff size={18} className="animate-pulse" />
                <div className="flex flex-col">
                    <span className="text-sm font-black uppercase tracking-widest">Offline Mode</span>
                    <span className="text-[10px] opacity-80 font-bold">Telemetry queued for sync</span>
                </div>
            </div>
        </div>
    );
}

import { useNotify } from '@/core/hooks/use-notify';

export function SyncStatus({ lastSync }: { lastSync?: Date }) {
    const [syncing, setSyncing] = useState(false);
    const { success } = useNotify();

    // Mock sync animation
    useEffect(() => {
        const interval = setInterval(() => {
            setSyncing(true);
            setTimeout(() => {
                setSyncing(false);
                success("Telemetry synced successfully");
            }, 2000);
        }, 30000);
        return () => clearInterval(interval);
    }, [success]);

    const timeString = lastSync ? lastSync.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Never';

    return (
        <div className="flex items-center gap-2 text-muted-foreground">
            {syncing ? (
                <RefreshCw size={14} className="animate-spin text-primary" />
            ) : (
                <CheckCircle size={14} className="text-success" />
            )}
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-70">
                {syncing ? 'Syncing...' : `Last Sync: ${timeString}`}
            </span>
        </div>
    );
}
