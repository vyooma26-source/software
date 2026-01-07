import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AlertTriangle, CheckCircle, Navigation, Battery, Wifi, Target, ArrowLeft, Play, Pause, Square } from 'lucide-react';
import { MOCK_JOBS } from '@/core/data/mock-jobs';
import { MOCK_TELEMETRY } from '@/core/data/mock-telemetry';
import { Button } from '@/core/ui/button';
import { Card } from '@/core/ui/card';
import { Badge } from '@/core/ui/badge';
// import { Progress } from '@/core/ui/progress';

export default function JobExecution() {
    const { id } = useParams();
    const navigate = useNavigate();
    const job = MOCK_JOBS.find(j => j.id === id) || MOCK_JOBS[0];
    const [status, setStatus] = useState<'preflight' | 'arming' | 'flying' | 'paused' | 'landing'>('preflight');
    const [checklistComplete, setChecklistComplete] = useState(false);

    // Telemetry Simulation (simple toggle for visual effect)
    const [telemetry, setTelemetry] = useState(MOCK_TELEMETRY);

    useEffect(() => {
        if (status === 'flying') {
            const interval = setInterval(() => {
                setTelemetry(prev => ({
                    ...prev,
                    altitude_m: prev.altitude_m + (Math.random() - 0.5),
                    battery_level: Math.max(0, prev.battery_level - 0.05),
                    current_waypoint: Math.min(prev.total_waypoints, prev.current_waypoint + (Math.random() > 0.8 ? 1 : 0))
                }));
            }, 1000);
            return () => clearInterval(interval);
        }
    }, [status]);

    return (
        <div className="h-full flex flex-col bg-background text-foreground p-4 overflow-hidden selection:bg-primary/30">
            {/* HUD Header */}
            <div className="flex justify-between items-center mb-4 bg-card/80 rounded-xl px-6 py-4 border border-border backdrop-blur-xl shadow-2xl">
                <div className="flex items-center gap-4">
                    <Button variant="outline" size="icon" onClick={() => navigate('/pilot/dashboard')} className="border-border hover:bg-accent">
                        <ArrowLeft className="w-5 h-5" />
                    </Button>
                    <div>
                        <h2 className="heading-3">{job.asset_name}</h2>
                        <span className="text-[10px] font-mono text-primary uppercase tracking-widest opacity-80">{job.id}</span>
                    </div>
                </div>

                <div className={`px-6 py-1.5 rounded-full border-2 font-black text-xs uppercase tracking-[0.2em] shadow-lg ${status === 'flying' ? 'border-primary text-primary bg-primary/5 animate-pulse' :
                    status === 'preflight' ? 'border-muted text-muted-foreground' : 'border-foreground text-foreground'
                    }`}>
                    {status}
                </div>

                <div className="flex gap-8 font-mono">
                    <div className="flex flex-col items-center">
                        <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">FLIGHT TIME</span>
                        <span className="text-2xl font-black text-foreground">12:34</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter">DISTANCE</span>
                        <span className="text-2xl font-black text-foreground">1.2km</span>
                    </div>
                </div>
            </div>

            <div className="flex-1 rounded-2xl overflow-hidden relative border border-border bg-muted/10 group shadow-inner">
                {/* Visualizer / Map Placeholder */}
                <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1473862170180-84427c485aca?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center" />

                {/* Overlay Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.05)_1px,transparent_1px)] bg-[length:40px_40px] pointer-events-none" />

                {/* Center Crosshair */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                    <Target size={48} className="text-white" strokeWidth={1} />
                </div>

                {/* Pre-flight Checklist Overlay */}
                {status === 'preflight' && (
                    <div className="absolute inset-0 bg-background/90 backdrop-blur-md flex items-center justify-center z-50">
                        <Card className="w-[500px] border-primary/30 shadow-2xl">
                            <div className="p-8 border-b border-border flex justify-between items-center">
                                <h3 className="heading-2 uppercase tracking-widest">Pre-Flight Safety Check</h3>
                                <AlertTriangle className="text-primary animate-pulse" />
                            </div>
                            <div className="p-6 space-y-3">
                                <CheckItem label="Airspace Authorization" checked={checklistComplete} />
                                <CheckItem label="Visual Inspection (Propellers/Frame)" checked={checklistComplete} />
                                <CheckItem label="Battery Voltage Check (24.5V)" checked={checklistComplete} />
                                <CheckItem label="GPS Lock (>12 Satellites)" checked={true} />
                                <CheckItem label="IMU/Compass Calibration" checked={checklistComplete} />
                            </div>
                            <div className="p-8 border-t border-border flex justify-end gap-3">
                                <Button variant="outline" className="font-bold">Abort</Button>
                                <Button
                                    className="font-bold min-w-[160px]"
                                    onClick={() => {
                                        setChecklistComplete(true);
                                        setTimeout(() => setStatus('arming'), 500);
                                    }}
                                >
                                    Confirm & Arm
                                </Button>
                            </div>
                        </Card>
                    </div>
                )}

                {/* Telemetry OSD (On Screen Display) - Top Left */}
                <div className="absolute top-4 left-4 flex flex-col gap-2 pointer-events-none">
                    <TelemetryItem icon={<Navigation className="rotate-45" size={16} />} label="ALT" value={`${telemetry.altitude_m.toFixed(1)}m`} />
                    <TelemetryItem icon={<Navigation className="rotate-90" size={16} />} label="SPD" value={`${telemetry.speed_ms}m/s`} />
                    <TelemetryItem icon={<Navigation size={16} />} label="DST" value={`${telemetry.distance_home_m}m`} />
                </div>

                {/* Telemetry OSD - Top Right (Battery/Signal) */}
                <div className="absolute top-4 right-4 flex gap-4 pointer-events-none">
                    <div className={`flex items-center gap-2 ${telemetry.battery_level < 20 ? 'text-destructive animate-pulse' : 'text-success'}`}>
                        <Battery size={20} />
                        <span className="font-black text-2xl">{telemetry.battery_level.toFixed(0)}%</span>
                    </div>
                    <div className="flex items-center gap-2 text-foreground">
                        <Wifi size={20} />
                        <span className="font-black text-2xl">{telemetry.signal_strength}%</span>
                    </div>
                </div>
            </div>

            {/* Bottom Controls */}
            <div className="h-28 bg-card border-t border-border mt-4 flex items-center justify-between px-10 shadow-lg rounded-t-2xl">
                {/* Camera / Gimbal */}
                <div className="flex gap-8">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-black mb-1.5 leading-none">Camera</span>
                        <Badge variant="secondary" className="font-mono px-3 py-1">{telemetry.camera_mode}</Badge>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-black mb-1.5 leading-none">Waypoints</span>
                        <div className="flex items-end gap-1.5 font-mono">
                            <span className="text-2xl font-black text-primary leading-none">{telemetry.current_waypoint}</span>
                            <span className="text-sm text-muted-foreground leading-none">/ {telemetry.total_waypoints}</span>
                        </div>
                    </div>
                </div>

                {/* Flight Action Buttons */}
                <div className="flex gap-4">
                    {status === 'arming' && (
                        <Button size="xl" className="w-56 font-black uppercase tracking-widest shadow-xl shadow-primary/20" onClick={() => setStatus('flying')}>
                            Takeoff
                        </Button>
                    )}
                    {status === 'flying' && (
                        <>
                            <Button size="icon" variant="outline" className="h-14 w-14 border-border rounded-full hover:bg-accent transition-all" onClick={() => setStatus('paused')}>
                                <Pause fill="currentColor" className="w-6 h-6" />
                            </Button>
                            <Button size="xl" variant="destructive" className="w-56 font-black uppercase tracking-widest animate-pulse" onClick={() => setStatus('landing')}>
                                <Square fill="currentColor" className="mr-2 h-5 w-5" /> Return home
                            </Button>
                        </>
                    )}
                    {status === 'paused' && (
                        <Button size="xl" className="w-56 font-black uppercase tracking-widest" onClick={() => setStatus('flying')}>
                            <Play fill="currentColor" className="mr-2 h-5 w-5" /> Resume
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}

function CheckItem({ label, checked }: { label: string, checked: boolean }) {
    return (
        <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 border border-border/50 cursor-pointer hover:bg-muted transition-all">
            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${checked ? 'bg-success border-success' : 'border-muted-foreground/30'}`}>
                {checked && <CheckCircle size={14} className="text-success-foreground" />}
            </div>
            <span className="text-sm font-semibold text-foreground">{label}</span>
        </div>
    )
}

function TelemetryItem({ icon, label, value }: any) {
    return (
        <div className="flex items-center gap-2 bg-black/50 backdrop-blur rounded px-3 py-1 border border-white/10 w-32">
            <span className="text-muted-foreground">{icon}</span>
            <div className="flex flex-col leading-none">
                <span className="text-[10px] text-muted-foreground font-bold">{label}</span>
                <span className="font-mono text-lg font-bold text-white">{value}</span>
            </div>
        </div>
    )
}
