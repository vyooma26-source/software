import React from 'react';
import { AlertCircle } from 'lucide-react';
import { cn } from '@/core/lib/utils';

export type UserRole = 'admin' | 'pilot' | 'client' | 'demo';

interface PermissionGateProps {
    children: React.ReactNode;
    allowedRoles: UserRole[];
    currentRole: UserRole;
    fallback?: React.ReactNode;
    className?: string;
    showWarning?: boolean;
}

export function PermissionGate({
    children,
    allowedRoles,
    currentRole,
    fallback,
    className,
    showWarning = true
}: PermissionGateProps) {
    const hasPermission = allowedRoles.includes(currentRole);

    if (hasPermission) {
        return <>{children}</>;
    }

    if (fallback) {
        return <>{fallback}</>;
    }

    if (currentRole === 'demo' && showWarning) {
        return (
            <div className={cn(
                "p-4 border border-warning/30 bg-warning/5 rounded-lg flex items-center gap-3 text-warning text-xs font-bold uppercase tracking-widest",
                className
            )}>
                <AlertCircle size={16} />
                <span>Action restricted in Demo Mode</span>
            </div>
        );
    }

    return null;
}
