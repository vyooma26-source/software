import { Activity, AlertTriangle, CheckCircle, Clock } from "lucide-react"
import { StatsCard } from "../components/stats-card"

export default function AdminDashboard() {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900">Dashboard</h2>
                <p className="text-slate-500">Overview of system health and active inspections.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatsCard
                    title="Active Missions"
                    value="12"
                    icon={Activity}
                    trend="+2 since last hour"
                    trendUp={true}
                />
                <StatsCard
                    title="Pending Review"
                    value="45"
                    icon={Clock}
                />
                <StatsCard
                    title="Critical Defects"
                    value="3"
                    icon={AlertTriangle}
                    trend="Needs attention"
                    trendUp={false}
                />
                <StatsCard
                    title="Completed Today"
                    value="8"
                    icon={CheckCircle}
                />
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                {/* Placeholder for Chart */}
                <div className="col-span-4 rounded-xl border border-slate-200 bg-white shadow-sm p-6 h-[400px]">
                    <h3 className="font-semibold mb-4">Inspection Velocity</h3>
                    <div className="h-full w-full bg-slate-50 rounded border border-dashed flex items-center justify-center text-slate-400">
                        Chart Placeholder
                    </div>
                </div>

                {/* Placeholder for Recent Activity */}
                <div className="col-span-3 rounded-xl border border-slate-200 bg-white shadow-sm p-6 h-[400px]">
                    <h3 className="font-semibold mb-4">Recent Activity</h3>
                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map(i => (
                            <div key={i} className="flex items-center gap-4 text-sm">
                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                <div>
                                    <p className="font-medium text-slate-900">Mission #10{i} completed</p>
                                    <p className="text-slate-500 text-xs">2 mins ago by Pilot Dave</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
