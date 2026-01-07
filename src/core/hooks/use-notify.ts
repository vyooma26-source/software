import { useCallback } from 'react';

// Unified Notification System (Thin wrapper over native or library toasts)
export function useNotify() {
    const notify = useCallback((message: string, type: 'success' | 'error' | 'info' | 'warning' = 'info') => {
        // For now, we use a simple styled alert or log
        // This will be replaced by a proper Toast component in the next step
        console.log(`[${type.toUpperCase()}] ${message}`);

        // Simple fallback
        if (type === 'error') {
            // we could trigger a specific UI behavior here
        }
    }, []);

    return {
        notify,
        success: (msg: string) => notify(msg, 'success'),
        error: (msg: string) => notify(msg, 'error'),
        info: (msg: string) => notify(msg, 'info'),
        warning: (msg: string) => notify(msg, 'warning')
    };
}
