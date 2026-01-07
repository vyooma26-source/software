import { useEffect } from 'react';

type ShortcutHandler = (e: KeyboardEvent) => void;

export function useShortcuts(shortcuts: Record<string, ShortcutHandler>) {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const key = [];
            if (e.ctrlKey || e.metaKey) key.push('mod');
            if (e.shiftKey) key.push('shift');
            if (e.altKey) key.push('alt');
            key.push(e.key.toLowerCase());

            const combo = key.join('+');
            const handler = shortcuts[combo] || shortcuts[e.key.toLowerCase()];

            if (handler) {
                // Check if target is an input
                const target = e.target as HTMLElement;
                if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
                    // Only Allow global shortcuts (like mod+k) if in input
                    if (!combo.includes('mod')) return;
                }

                e.preventDefault();
                handler(e);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [shortcuts]);
}
