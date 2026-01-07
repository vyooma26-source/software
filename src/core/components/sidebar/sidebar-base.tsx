import { cn } from '@/core/lib/utils';

export interface SidebarBaseProps {
    children: React.ReactNode;
    className?: string;
    logo?: React.ReactNode;
    brandName?: string;
    subText?: string;
    isExpanded?: boolean;
}

export function SidebarBase({
    children,
    className,
    logo,
    brandName,
    subText,
    isExpanded = true
}: SidebarBaseProps) {
    return (
        <aside
            className={cn(
                "h-full flex flex-col",
                "bg-white/95 border border-[#d3ccb5]/40 rounded-lg shadow-md",
                "transition-all duration-300 z-50",
                isExpanded ? "w-sidebar" : "w-20",
                className
            )}
        >
            {/* Header / Brand */}
            {(logo || brandName || subText) && (
                <div className={cn(
                    "flex items-center px-4",
                    isExpanded ? "py-6 gap-3 mb-6" : "py-6 justify-center mb-4"
                )}>
                    {logo && <div className="flex-shrink-0">{logo}</div>}
                    {isExpanded && (brandName || subText) && (
                        <div className="flex flex-col min-w-0">
                            {brandName && <span className="font-black text-xl tracking-tighter text-foreground truncate">{brandName}</span>}
                            {subText && <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold truncate opacity-80">{subText}</span>}
                        </div>
                    )}
                </div>
            )}

            {/* Content Section (Nav Items) */}
            <div className="flex-1 flex flex-col px-3 space-y-1.5">
                {children}
            </div>
        </aside>
    );
}
