import { useNavigate } from 'react-router-dom';
import { Plane, MapPin, Clock, ArrowRight, Sun, Wind, CloudRain, CheckCircle2 } from 'lucide-react';
import { MOCK_JOBS } from '@/core/data/mock-jobs';
import { Button } from '@/core/ui/button';
import { Card, CardContent } from '@/core/ui/card';
import { Badge } from '@/core/ui/badge';

export default function PilotDashboard() {
    const navigate = useNavigate();
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

    return (
        <div className="h-full p-6 flex flex-col gap-6">
            {/* Top Status Bar */}
            <div className="flex justify-between items-end border-b border-border/50 pb-6">
                <div>
                    <h1 className="text-4xl font-bold tracking-tight mb-2">MISSION CONTROL</h1>
                    <p className="text-muted-foreground uppercase tracking-wider font-medium">{today}</p>
                </div>
                <div className="flex gap-4">
                    <div className="px-4 py-2 bg-success/20 border border-success/40 rounded flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                        <span className="text-success font-bold uppercase text-sm">Online</span>
                    </div>
                    <div className="px-4 py-2 bg-primary/20 border border-primary/40 rounded flex items-center gap-2">
                        <span className="text-primary font-bold uppercase text-sm">Battery 98%</span>
                    </div>
                </div>
            </div>

            <div className="flex-1 grid grid-cols-12 gap-6 min-h-0">
                {/* Left Col: Mission List */}
                <div className="col-span-8 flex flex-col gap-4 overflow-y-auto pr-2">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-lg font-bold uppercase tracking-wider flex items-center gap-2">
                            <ListIcon className="text-primary" /> Active Missions
                        </h2>
                    </div>

                    {MOCK_JOBS.map((job) => (
                        <div
                            key={job.id}
                            className={`p-6 border-l-4 rounded-r-lg bg-card hover:bg-card/80 transition-all cursor-pointer group relative overflow-hidden ${job.status === 'assigned' ? 'border-primary' :
                                job.status === 'in-progress' ? 'border-success' : 'border-muted'
                                }`}
                            onClick={() => navigate(`/pilot/jobs/${job.id}`)}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <Badge variant={job.priority === 'high' ? 'destructive' : 'outline'} className="rounded-none uppercase tracking-wider text-[10px]">
                                            {job.priority} Priority
                                        </Badge>
                                        <span className="text-xs text-muted-foreground font-mono">{job.id}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{job.asset_name}</h3>
                                    <p className="text-muted-foreground text-sm uppercase tracking-wide">{job.type}</p>
                                </div>
                                {job.status === 'assigned' && (
                                    <Button className="font-bold uppercase tracking-wider bg-primary text-black hover:bg-primary/90">
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
                    <Card className="border-none bg-card/50">
                        <CardContent className="p-6">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">Flight Conditions</h3>
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <span className="text-4xl font-bold">24°C</span>
                                    <p className="text-sm text-muted-foreground uppercase">Clear Sky</p>
                                </div>
                                <Sun size={48} className="text-primary animate-pulse-soft" />
                            </div>

                            <div className="space-y-3">
                                <div className="flex justify-between items-center text-sm border-b border-border/20 pb-2">
                                    <span className="flex items-center gap-2 text-muted-foreground"><Wind size={14} /> Wind Speed</span>
                                    <span className="font-mono font-bold">12 km/h NE</span>
                                </div>
                                <div className="flex justify-between items-center text-sm border-b border-border/20 pb-2">
                                    <span className="flex items-center gap-2 text-muted-foreground"><CloudRain size={14} /> Precip</span>
                                    <span className="font-mono font-bold">0%</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="flex items-center gap-2 text-muted-foreground"><CheckCircle2 size={14} /> Visibility</span>
                                    <span className="font-mono font-bold">10+ km</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Quick Checklist Status */}
                    <Card className="flex-1 border-none bg-card/50">
                        <CardContent className="p-6 flex flex-col h-full bg-success/5 border border-success/10 rounded-lg">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">System Readiness</h3>

                            <div className="flex flex-1 items-center justify-center">
                                <div className="w-32 h-32 rounded-full border-4 border-success flex items-center justify-center relative">
                                    <span className="text-2xl font-bold text-success">READY</span>
                                    <div className="absolute top-0 w-full h-full border-t-4 border-transparent border-l-success rounded-full animate-spin duration-[3s]" />
                                </div>
                            </div>
                            <p className="text-center text-xs text-muted-foreground mt-4 font-mono">ALL SYSTEMS NOMINAL</p>
                        </CardContent>
                    </Card>

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
