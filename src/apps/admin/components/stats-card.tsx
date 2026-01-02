import { LucideIcon } from "lucide-react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/core/ui/card"

interface StatsCardProps {
    title: string;
    value: string; // or number
    icon: LucideIcon;
    trend?: string;
    trendUp?: boolean;
}

export function StatsCard({ title, value, icon: Icon, trend, trendUp }: StatsCardProps) {
    return (
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between pb-2">
                <h3 className="tracking-tight text-sm font-medium text-slate-500">{title}</h3>
                <Icon className="h-4 w-4 text-slate-500" />
            </div>
            <div className="flex items-baseline gap-2">
                <div className="text-2xl font-bold text-slate-900">{value}</div>
                {trend && (
                    <span className={`text-xs font-medium ${trendUp ? 'text-green-600' : 'text-red-600'}`}>
                        {trend}
                    </span>
                )}
            </div>
        </div>
    )
}
