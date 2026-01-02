import { FileText, Plus, Activity, Zap, TrendingUp } from 'lucide-react';
import { MOCK_ANALYTICS_TRENDS } from '@/core/data/mock-user';
import { StatCard } from '@/core/components/stat-card';
import { useNavigate } from 'react-router-dom';

export function ClientDashboard() {
    const navigate = useNavigate();

    return (
        <div className="h-full flex flex-col gap-4">

            {/* Top Row: Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <StatCard
                    title="Fleet Health"
                    value="94%"
                    icon={Activity}
                    trend={{ value: 2.1, label: 'vs last week', direction: 'up' }}
                />
                <StatCard
                    title="Active Inspections"
                    value="12"
                    icon={Zap}
                    trend={{ value: 4, label: 'currently flying', direction: 'neutral' }}
                />
                <StatCard
                    title="Total Capacity"
                    value="1.2 GW"
                    icon={TrendingUp}
                    trend={{ value: 12, label: 'capacity increase', direction: 'up' }}
                />
                <div className="bg-primary rounded-lg p-6 flex flex-col justify-between text-primary-foreground relative overflow-hidden group cursor-pointer hover:shadow-xl hover:translate-y-[-2px] transition-all"
                    onClick={() => navigate('/client/booking')}
                >
                    <div className="relative z-10">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4 backdrop-blur-md border border-white/30">
                            <Plus size={28} />
                        </div>
                        <h3 className="text-xl font-bold">Book Flight</h3>
                        <p className="text-primary-foreground/90 text-sm mt-1">Schedule new inspection</p>
                    </div>
                    {/* Decorative */}
                    <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all" />
                </div>
            </div>

            {/* Main Content Area */}
            <div className="grid grid-cols-12 gap-4 flex-1 min-h-0">
                {/* Left Column: Analytics / Map (Placeholder) */}
                <div className="col-span-12 lg:col-span-8 bg-card rounded-lg p-6 relative overflow-hidden group border border-border/50">
                    <div className="absolute top-6 left-6 z-10">
                        <h2 className="text-2xl font-black tracking-tight text-primary uppercase">System Analytics</h2>
                        <p className="text-muted-foreground mt-0.5 text-[10px] font-medium uppercase tracking-widest">Real-time solar performance tracking</p>
                    </div>

                    {/* Simple Bar Chart Visualization */}
                    <div className="absolute inset-0 flex items-end justify-between px-8 pb-8 pt-24 gap-2">
                        {MOCK_ANALYTICS_TRENDS.map((item, i) => (
                            <div key={i} className="flex-1 flex flex-col items-center group/bar">
                                <div
                                    className="w-full bg-primary/20 rounded-t-lg group-hover/bar:bg-primary/40 transition-all relative"
                                    style={{ height: `${(item.energy / 1500) * 100}%` }}
                                >
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap">
                                        {item.energy} kWh
                                    </div>
                                </div>
                                <span className="text-[10px] mt-4 text-muted-foreground font-medium uppercase tracking-tighter">{item.month}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column (Widgets) */}
                <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
                    {/* Recent Report Widget */}
                    <div className="bg-card rounded-lg p-6 flex-1 relative group cursor-pointer hover:bg-card/80 transition-colors"
                        onClick={() => navigate('/client/reports')}
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-medium">Recent<br />Reports</h3>
                            <div className="p-2 bg-secondary rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                <FileText size={20} />
                            </div>
                        </div>
                        <div className="space-y-3 mt-4">
                            <div className="h-14 w-full bg-primary/5 rounded-lg flex items-center px-4 border border-primary/10">
                                <FileText size={18} className="mr-3 text-primary" />
                                <div>
                                    <p className="text-sm font-bold">Q3 Inspection.pdf</p>
                                    <p className="text-[10px] text-muted-foreground">Generated 2 days ago</p>
                                </div>
                            </div>
                            <div className="h-14 w-full bg-card rounded-lg flex items-center px-4 border border-border/50 opacity-60">
                                <FileText size={18} className="mr-3 text-muted-foreground" />
                                <div>
                                    <p className="text-sm font-medium">Nevada Site A.pdf</p>
                                    <p className="text-[10px] text-muted-foreground">Generated 1 week ago</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Asset Health Widget */}
                    <div className="bg-card rounded-lg p-6 flex-1 relative group cursor-pointer hover:bg-card/80 transition-colors"
                        onClick={() => navigate('/client/portfolio')}
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-medium">Fleet<br />Health</h3>
                            <div className="p-2 bg-secondary rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                <Activity size={20} />
                            </div>
                        </div>
                        <div className="mt-4 flex items-center justify-center">
                            <div className="relative w-28 h-28">
                                <svg className="transform -rotate-90 w-28 h-28">
                                    <circle cx="56" cy="56" r="48" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-primary/10" />
                                    <circle cx="56" cy="56" r="48" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="301.6" strokeDashoffset="30" className="text-secondary" />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-xl font-bold text-secondary">94%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
