import { useState, useCallback } from 'react';
import { UserRole } from '@/core/components/auth/permission-gate';

// Mock Auth Hook for Operational Clarity
export function useAuth() {
    // In a real app, this would come from a Context/Provider linked to Supabase/Auth Service
    const [role] = useState<UserRole>(() => {
        // Simple logic to infer role from path for demo purposes if no user exists
        const path = window.location.pathname;
        if (path.startsWith('/admin')) return 'admin';
        if (path.startsWith('/pilot')) return 'pilot';
        if (path.startsWith('/client')) return 'client';
        return 'demo'; // Default to demo for safety
    });

    const isAuthorized = useCallback((allowedRoles: UserRole[]) => {
        return allowedRoles.includes(role);
    }, [role]);

    return {
        role,
        isAuthorized,
        isAuthenticated: true,
        user: { name: 'Operational User', role }
    };
}
