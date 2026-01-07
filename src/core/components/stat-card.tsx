import { LucideIcon, ArrowUpRight, ArrowDownRight, Minus } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { cn } from "@/core/lib/utils";

interface StatCardProps {
    title: string;
    value: string | number;
    icon?: LucideIcon;
    trend?: {
        value: number; // percentage
        label: string;
        direction: 'up' | 'down' | 'neutral';
    };
    description?: string;
    variant?: 'default' | 'glass' | 'elevated' | 'flat';
    className?: string;
}

export function StatCard({
    title,
    value,
    icon: Icon,
    trend,
    description,
    variant = 'default',
    className
}: StatCardProps) {
    return (
        <Card variant={variant} className={cn("relative overflow-hidden group transition-all hover:bg-card/90 border-transparent rounded-lg shadow-lg hover:shadow-xl", className)}>
            <CardContent className="p-5">
                <div className="flex justify-between items-start mb-4">
                    <div className="space-y-1">
                        <p className="text-xs font-bold text-muted-foreground/70 uppercase tracking-widest">{title}</p>
                        <h4 className="text-4xl font-black tracking-tight">{value}</h4>
                    </div>
                    {Icon && (
                        <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <Icon size={24} />
                        </div>
                    )}
                </div>

                {(trend || description) && (
                    <div className="flex items-center text-xs space-x-2">
                        {trend && (
                            <div className={cn(
                                "flex items-center font-bold px-3 py-1 rounded-full",
                                trend.direction === 'up' && "text-primary bg-primary/10",
                                trend.direction === 'down' && "text-destructive bg-destructive/10",
                                trend.direction === 'neutral' && "text-muted-foreground bg-muted",
                            )}>
                                {trend.direction === 'up' && <ArrowUpRight className="w-3.5 h-3.5 mr-1" />}
                                {trend.direction === 'down' && <ArrowDownRight className="w-3.5 h-3.5 mr-1" />}
                                {trend.direction === 'neutral' && <Minus className="w-3.5 h-3.5 mr-1" />}
                                {Math.abs(trend.value)}%
                            </div>
                        )}
                        {description && (
                            <span className="text-muted-foreground/60 truncate max-w-[150px]">{description}</span>
                        )}
                    </div>
                )}
            </CardContent>

            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/2 rounded-full blur-3xl group-hover:bg-primary/5 transition-colors pointer-events-none" />
        </Card>
    );
}
