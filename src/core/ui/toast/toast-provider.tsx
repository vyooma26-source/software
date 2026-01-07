import { useState, useEffect, useCallback } from 'react';
import { cn } from '@/core/lib/utils';
import { AlertCircle, CheckCircle2, Info, X } from 'lucide-react';

export interface Toast {
    id: string;
    message: string;
    type: 'success' | 'error' | 'info' | 'warning';
}

export function ToastProvider() {
    const [toasts, setToasts] = useState<Toast[]>([]);

    // This would be replaced by a real event bus or context in a larger app
    useEffect(() => {
        const handleNotify = (e: any) => {
            const { message, type } = e.detail;
            const id = Math.random().toString(36).substr(2, 9);
            setToasts(prev => [...prev, { id, message, type }]);

            setTimeout(() => {
                setToasts(prev => prev.filter(t => t.id !== id));
            }, 5000);
        };

        window.addEventListener('vyooma-notify', handleNotify);
        return () => window.removeEventListener('vyooma-notify', handleNotify);
    }, []);

    const removeToast = (id: string) => {
        setToasts(prev => prev.filter(t => t.id !== id));
    };

    return (
        <div className="fixed top-6 right-6 z-[200] flex flex-col gap-3 w-full max-w-sm pointer-events-none">
            {toasts.map(toast => (
                <div
                    key={toast.id}
                    className={cn(
                        "pointer-events-auto p-4 rounded-lg shadow-2xl border flex items-start gap-3 animate-in slide-in-from-right-full transition-all duration-300",
                        toast.type === 'success' && "bg-success/10 border-success/30 text-success",
                        toast.type === 'error' && "bg-destructive/10 border-destructive/30 text-destructive",
                        toast.type === 'warning' && "bg-warning/10 border-warning/30 text-warning",
                        toast.type === 'info' && "bg-primary/10 border-primary/30 text-primary"
                    )}
                >
                    <div className="mt-0.5">
                        {toast.type === 'success' && <CheckCircle2 size={18} />}
                        {toast.type === 'error' && <AlertCircle size={18} />}
                        {toast.type === 'warning' && <AlertCircle size={18} />}
                        {toast.type === 'info' && <Info size={18} />}
                    </div>
                    <div className="flex-1">
                        <p className="text-sm font-bold leading-tight">{toast.message}</p>
                    </div>
                    <button onClick={() => removeToast(toast.id)} className="opacity-50 hover:opacity-100 transition-opacity">
                        <X size={16} />
                    </button>
                </div>
            ))}
        </div>
    );
}
