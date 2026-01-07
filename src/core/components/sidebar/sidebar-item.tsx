import { LucideIcon } from 'lucide-react';
import { cn } from '@/core/lib/utils';

export interface SidebarNavItem {
    label: string;
    icon: LucideIcon;
    path?: string;
    onClick?: () => void;
    active?: boolean;
    variant?: 'default' | 'destructive';
}

interface SidebarItemProps {
    item: SidebarNavItem;
    isExpanded: boolean;
}

export function SidebarItem({ item, isExpanded }: SidebarItemProps) {
    const Icon = item.icon;
    const isDestructive = item.variant === 'destructive';

    return (
        <button
            onClick={item.onClick}
            title={!isExpanded ? item.label : undefined}
            className={cn(
                "group relative flex items-center w-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                isExpanded
                    ? "px-4 py-3 rounded-xl text-sm font-bold"
                    : "w-12 h-12 justify-center rounded-xl mx-auto",
                item.active
                    ? "bg-gradient-to-br from-[#2d4a7c] to-[#1e3557] text-white shadow-lg scale-105"
                    : cn(
                        "text-[#8c8570] hover:bg-[#f5f3ed] hover:text-[#2a261c] hover:scale-105",
                        isDestructive && "hover:bg-red-50 hover:text-red-600"
                    )
            )}
        >
            <Icon className={cn(
                "flex-shrink-0 transition-all",
                isExpanded ? "w-5 h-5 mr-3" : "w-5 h-5",
                item.active ? "text-white" : cn(
                    "text-[#8c8570] group-hover:text-[#2a261c]",
                    isDestructive && "group-hover:text-red-600"
                )
            )} />

            {isExpanded && <span className="truncate">{item.label}</span>}

            {/* Active Indicator */}
            {!isExpanded && item.active && (
                <div className="absolute -left-1 w-1 h-8 bg-white rounded-r-full shadow-lg" />
            )}
        </button>
    );
}
