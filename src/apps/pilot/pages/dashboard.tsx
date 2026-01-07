import { useNavigate } from 'react-router-dom';
import { Plane, MapPin, Clock, ArrowRight, Sun, Wind, CloudRain, CheckCircle2 } from 'lucide-react';
import { Button } from '@/core/ui/button';
import { Card, CardContent } from '@/core/ui/card';
import { Badge } from '@/core/ui/badge';

import { useNotify } from '@/core/hooks/use-notify';
import { useShortcuts } from '@/core/hooks/use-shortcuts';
import { useMissions } from '@/core/hooks/data/use-data';


export default function PilotDashboard() {
    const navigate = useNavigate();
    const { info, warning } = useNotify();
    const { data: missions, loading } = useMissions();


    useShortcuts({
        'mod+k': () => info("Global search activated"),
        ' ': () => info("Mission Resumed"),
        'escape': () => warning("Emergency Mission Stop Triggered")
    });

    const today = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

    return (
        <div className="h-full p-6 flex flex-col gap-6">
            {/* Top Status Bar */}
            <div className="flex justify-between items-end border-b border-border/50 pb-6">
                <div>
                    <h1 className="heading-1 mb-2">MISSION CONTROL</h1>
                    <p className="text-muted-foreground uppercase tracking-[0.2em] font-black text-xs">{today}</p>
                </div>
                <div className="flex gap-4">
                    <div className="px-6 py-3 bg-success/20 border border-success/40 rounded-lg flex items-center gap-3 shadow-lg shadow-success/10">
                        <div className="w-2.5 h-2.5 rounded-full bg-success animate-pulse" />
                        <span className="text-success font-black uppercase text-xs tracking-widest">Online</span>
                    </div>
                    <div className="px-6 py-3 bg-primary/20 border border-primary/40 rounded-lg flex items-center gap-3 shadow-lg shadow-primary/20">
                        <span className="text-primary font-black uppercase text-xs tracking-widest">Battery 98%</span>
                    </div>
                </div>
            </div>

            <div className="flex-1 grid grid-cols-12 gap-6 min-h-0">
                {/* Left Col: Mission List */}
                <div className="col-span-8 flex flex-col gap-4 overflow-y-auto pr-2">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="heading-2 uppercase flex items-center gap-3">
                            <ListIcon className="text-primary" /> Active Missions
                        </h2>
                    </div>

                    {loading ? (
                        <div className="text-center py-20 text-muted-foreground animate-pulse font-black uppercase tracking-widest text-xs">
                            Retrieving Secure Mission Data...
                        </div>
                    ) : missions.map((job) => (
                        <div
                            key={job.id}
                            className={`p-8 border-l-8 rounded-lg bg-card hover:bg-card/80 transition-all cursor-pointer group relative overflow-hidden shadow-xl hover:shadow-2xl hover:translate-y-[-2px] ${job.status === 'assigned' ? 'border-primary' :
                                job.status === 'in-progress' ? 'border-success' : 'border-muted'
                                }`}
                            onClick={() => navigate(`/pilot/jobs/${job.id}`)}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Badge variant={job.priority === 'high' ? 'destructive' : 'outline'} className="rounded-full uppercase tracking-widest text-[9px] font-black px-3 py-1">
                                            {job.priority} Priority
                                        </Badge>
                                        <span className="text-xs text-muted-foreground font-mono opacity-50">{job.id}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{job.asset_name}</h3>
                                    <p className="text-muted-foreground text-xs font-black uppercase tracking-widest mt-1">{job.type}</p>
                                </div>
                                {job.status === 'assigned' && (
                                    <Button className="font-bold uppercase tracking-wider">
                                        Start Mission <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                )}
                            </div>

                            <div className="grid grid-cols-3 gap-4 border-t border-border/20 pt-4">
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <MapPin size={16} /> {job.location}
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Plane size={16} /> {job.distance_km} km range
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Clock size={16} /> {job.estimated_duration_min} min est.
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Col: Weather & System Status */}
                <div className="col-span-4 flex flex-col gap-6">
                    {/* Weather Widget */}
                    <section className="bg-card/40 backdrop-blur-sm rounded-2xl border border-border p-6 shadow-sm">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-6">Flight Conditions</h3>
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <span className="text-5xl font-black">24°C</span>
                                <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">Clear Sky</p>
                            </div>
                            <Sun size={56} className="text-primary animate-pulse-soft" />
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center text-sm border-b border-border/10 pb-3">
                                <span className="flex items-center gap-2 text-muted-foreground"><Wind size={14} /> Wind Speed</span>
                                <span className="font-mono font-black text-foreground">12 km/h NE</span>
                            </div>
                            <div className="flex justify-between items-center text-sm border-b border-border/10 pb-3">
                                <span className="flex items-center gap-2 text-muted-foreground"><CloudRain size={14} /> Precip</span>
                                <span className="font-mono font-black text-foreground">0%</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span className="flex items-center gap-2 text-muted-foreground"><CheckCircle2 size={14} /> Visibility</span>
                                <span className="font-mono font-black text-foreground">10+ km</span>
                            </div>
                        </div>
                    </section>

                    {/* Quick Checklist Status */}
                    <section className="flex-1 bg-success/5 border border-success/20 rounded-2xl p-6 shadow-inner flex flex-col">
                        <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-success/70 mb-4">System Readiness</h3>

                        <div className="flex flex-1 items-center justify-center py-4">
                            <div className="w-32 h-32 rounded-full border-4 border-success flex items-center justify-center relative shadow-lg shadow-success/10">
                                <span className="text-2xl font-black text-success tracking-tighter">READY</span>
                                <div className="absolute top-0 w-full h-full border-t-4 border-transparent border-l-success rounded-full animate-spin duration-[3s]" />
                            </div>
                        </div>
                        <p className="text-center text-[10px] text-success/60 mt-4 font-black uppercase tracking-[0.3em] font-mono animate-pulse">ALL SYSTEMS NOMINAL</p>
                    </section>
                </div>
            </div>
        </div>
    );
}

function ListIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M8 6h13" />
            <path d="M8 12h13" />
            <path d="M8 18h13" />
            <path d="M3 6h.01" />
            <path d="M3 12h.01" />
            <path d="M3 18h.01" />
        </svg>
    )
}
