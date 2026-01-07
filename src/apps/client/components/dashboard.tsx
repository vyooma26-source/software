import { Activity, AlertTriangle, CheckCircle, FileText, TrendingUp, Sun, Shield } from 'lucide-react';
import { Card } from '@/core/ui/card';
import { Badge } from '@/core/ui/badge';
import { useNavigate } from 'react-router-dom';

export function ClientDashboard() {
    const navigate = useNavigate();

    return (
        <div className="h-full overflow-hidden">
            {/* DASHBOARD CONTENT - Baseline aligned layout */}
            <div className="grid grid-cols-12 gap-4 h-full">

                {/* LEFT COLUMN - 8 cols */}
                <div className="col-span-8 grid grid-rows-[120px_auto_1fr] gap-4 h-full">

                    {/* ROW 1: Hero */}
                    <div className="relative bg-white/95 rounded-[2rem] overflow-hidden shadow-lg border border-[#d3ccb5]/40">
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40" />

                        <div className="relative h-full flex items-center justify-between px-6">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <Sun className="w-4 h-4 text-yellow-600" />
                                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#8c8570]">Solar Portfolio</span>
                                </div>
                                <h2 className="text-2xl font-black tracking-tight text-[#2a261c] mb-1">
                                    Plant Health Dashboard
                                </h2>
                                <p className="text-xs text-[#8c8570]">Real-time inspection results</p>
                            </div>

                            <div className="flex items-center gap-8">
                                <div className="flex flex-col items-center">
                                    <span className="text-2xl font-black text-[#2a261c]">4</span>
                                    <span className="text-[9px] text-[#8c8570] font-bold uppercase tracking-wider">Sites</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-2xl font-black text-green-600">847 MW</span>
                                    <span className="text-[9px] text-[#8c8570] font-bold uppercase tracking-wider">Capacity</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <span className="text-2xl font-black text-[#2a261c]">94.2%</span>
                                    <span className="text-[9px] text-[#8c8570] font-bold uppercase tracking-wider">Health</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ROW 2: Vyooma Benefits + Monthly Trend */}
                    <div className="grid grid-cols-2 gap-4">
                        {/* Vyooma Benefits - BLUE HIGHLIGHT */}
                        <Card className="bg-gradient-to-br from-[#2d4a7c] to-[#1e3557] border-blue-900/20 rounded-[1.5rem] p-4 shadow-lg text-white">
                            <div className="flex items-center gap-2 mb-3">
                                <TrendingUp className="w-4 h-4 text-blue-300" />
                                <h4 className="text-sm font-black">Benefits with Vyooma</h4>
                            </div>
                            <div className="grid grid-cols-3 gap-2.5">
                                <div className="text-center bg-white/15 rounded-lg p-2 hover:bg-white/20 transition-colors cursor-pointer">
                                    <div className="text-base font-black text-green-300">₹12.4L</div>
                                    <div className="text-[7px] text-blue-100 font-bold uppercase tracking-wider mt-0.5">Saved</div>
                                </div>
                                <div className="text-center bg-white/15 rounded-lg p-2 hover:bg-white/20 transition-colors cursor-pointer">
                                    <div className="text-base font-black text-white">₹2.4L</div>
                                    <div className="text-[7px] text-blue-100 font-bold uppercase tracking-wider mt-0.5">Per MW</div>
                                </div>
                                <div className="text-center bg-white/15 rounded-lg p-2 hover:bg-white/20 transition-colors cursor-pointer">
                                    <div className="text-base font-black text-blue-300">18.7%</div>
                                    <div className="text-[7px] text-blue-100 font-bold uppercase tracking-wider mt-0.5">Gain</div>
                                </div>
                                <div className="text-center bg-white/15 rounded-lg p-2 hover:bg-white/20 transition-colors cursor-pointer">
                                    <div className="text-base font-black text-yellow-300">&lt;48hr</div>
                                    <div className="text-[7px] text-blue-100 font-bold uppercase tracking-wider mt-0.5">Reports</div>
                                </div>
                                <div className="text-center bg-white/15 rounded-lg p-2 hover:bg-white/20 transition-colors cursor-pointer">
                                    <div className="text-base font-black text-white">127h</div>
                                    <div className="text-[7px] text-blue-100 font-bold uppercase tracking-wider mt-0.5">Flight</div>
                                </div>
                                <div className="text-center bg-white/15 rounded-lg p-2 hover:bg-white/20 transition-colors cursor-pointer">
                                    <div className="text-base font-black text-red-300">342</div>
                                    <div className="text-[7px] text-blue-100 font-bold uppercase tracking-wider mt-0.5">Defects</div>
                                </div>
                            </div>
                        </Card>

                        {/* Monthly Savings Trend */}
                        <Card className="bg-white/95 border-[#d3ccb5]/40 rounded-[1.5rem] p-4 shadow-md">
                            <div className="flex items-center justify-between mb-3">
                                <h4 className="text-sm font-black text-[#2a261c]">Monthly Savings</h4>
                                <Badge className="text-[7px] bg-green-100 text-green-700 border-green-200">+24%</Badge>
                            </div>
                            <div className="h-28 flex items-end justify-between gap-2">
                                {[
                                    { month: 'Jan', value: 60, label: '₹1.8L', height: 48 },
                                    { month: 'Feb', value: 75, label: '₹2.2L', height: 60 },
                                    { month: 'Mar', value: 55, label: '₹1.8L', height: 44 },
                                    { month: 'Apr', value: 85, label: '₹2.5L', height: 68 },
                                    { month: 'May', value: 90, label: '₹2.7L', height: 72 },
                                    { month: 'Jun', value: 100, label: '₹3.0L', height: 80 }
                                ].map((bar, i) => (
                                    <div key={i} className="flex-1 flex flex-col items-center gap-1.5 group cursor-pointer">
                                        <div className="relative w-full flex flex-col items-center">
                                            <div
                                                className="w-full bg-gradient-to-t from-[#2d4a7c] to-[#4a6fa8] rounded-t-md transition-all hover:from-[#1e3557] hover:to-[#2d4a7c] shadow-sm"
                                                style={{ height: `${bar.height}px` }}
                                            />
                                            <div className="absolute -top-7 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#2a261c] text-white text-[7px] font-bold px-2 py-1 rounded whitespace-nowrap z-10 shadow-lg">
                                                {bar.label}
                                            </div>
                                        </div>
                                        <span className="text-[8px] font-bold text-[#8c8570]">{bar.month}</span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>

                    {/* ROW 3: Plant Health Overview */}
                    <Card className="bg-white/95 border-[#d3ccb5]/40 rounded-[1.5rem] p-4 shadow-md">
                        <div className="flex items-start justify-between mb-3">
                            <div>
                                <h3 className="text-sm font-black text-[#2a261c]">Plant Health Overview</h3>
                                <p className="text-[8px] text-[#8c8570] font-bold uppercase tracking-wider">Latest Results</p>
                            </div>
                            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-green-100 rounded-full">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                <span className="text-[8px] font-bold text-green-700">All Monitored</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-5 gap-2.5">
                            <div className="flex flex-col items-center p-2 bg-white/60 rounded-lg hover:bg-white transition-colors cursor-pointer">
                                <CheckCircle className="w-4 h-4 text-green-600 mb-1" />
                                <span className="text-xl font-black text-[#2a261c]">3</span>
                                <span className="text-[7px] text-[#8c8570] font-bold uppercase tracking-wider text-center">Healthy</span>
                            </div>

                            <div className="flex flex-col items-center p-2 bg-white/60 rounded-lg hover:bg-white transition-colors cursor-pointer">
                                <AlertTriangle className="w-4 h-4 text-orange-600 mb-1" />
                                <span className="text-xl font-black text-[#2a261c]">1</span>
                                <span className="text-[7px] text-[#8c8570] font-bold uppercase tracking-wider text-center">Attention</span>
                            </div>

                            <div className="flex flex-col items-center p-2 bg-white/60 rounded-lg hover:bg-white transition-colors cursor-pointer" onClick={() => navigate('/client/reports')}>
                                <FileText className="w-4 h-4 text-blue-600 mb-1" />
                                <span className="text-xl font-black text-[#2a261c]">12</span>
                                <span className="text-[7px] text-[#8c8570] font-bold uppercase tracking-wider text-center">Inspections</span>
                            </div>

                            <div className="flex flex-col items-center p-2 bg-white/60 rounded-lg hover:bg-white transition-colors cursor-pointer">
                                <AlertTriangle className="w-4 h-4 text-red-600 mb-1" />
                                <span className="text-xl font-black text-[#2a261c]">8</span>
                                <span className="text-[7px] text-[#8c8570] font-bold uppercase tracking-wider text-center">Defect Types</span>
                            </div>

                            <div className="flex flex-col items-center p-2 bg-white/60 rounded-lg hover:bg-white transition-colors cursor-pointer" onClick={() => navigate('/client/reports')}>
                                <Shield className="w-4 h-4 text-purple-600 mb-1" />
                                <span className="text-xl font-black text-[#2a261c]">342</span>
                                <span className="text-[7px] text-[#8c8570] font-bold uppercase tracking-wider text-center">Panels</span>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* RIGHT COLUMN - 4 cols */}
                <div className="col-span-4 grid grid-rows-[1fr_auto] gap-4 h-full">

                    {/* Site Performance */}
                    <Card className="bg-white/95 border-[#d3ccb5]/40 rounded-[1.5rem] p-4 shadow-md">
                        <h3 className="text-sm font-black text-[#2a261c] mb-3">Site Performance</h3>

                        <div className="space-y-2.5">
                            <div className="p-2.5 bg-white/60 rounded-lg cursor-pointer hover:bg-white transition-colors" onClick={() => navigate('/client/sites/101')}>
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-[10px] font-bold text-[#2a261c]">Nevada Solar One</span>
                                    <Badge variant="success" className="text-[7px] px-1.5 py-0">Healthy</Badge>
                                </div>
                                <div className="flex items-center justify-between mb-0.5">
                                    <span className="text-[8px] text-[#8c8570] font-bold uppercase tracking-wider">Health</span>
                                    <span className="text-xs font-black text-[#2a261c]">94%</span>
                                </div>
                                <div className="w-full h-1 bg-white rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full" style={{ width: '94%' }} />
                                </div>
                            </div>

                            <div className="p-2.5 bg-white/60 rounded-lg cursor-pointer hover:bg-white transition-colors" onClick={() => navigate('/client/sites/103')}>
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-[10px] font-bold text-[#2a261c]">Desert Sunlight</span>
                                    <Badge variant="success" className="text-[7px] px-1.5 py-0">Healthy</Badge>
                                </div>
                                <div className="flex items-center justify-between mb-0.5">
                                    <span className="text-[8px] text-[#8c8570] font-bold uppercase tracking-wider">Health</span>
                                    <span className="text-xs font-black text-[#2a261c]">88%</span>
                                </div>
                                <div className="w-full h-1 bg-white rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full" style={{ width: '88%' }} />
                                </div>
                            </div>

                            <div className="p-2.5 bg-white/60 rounded-lg cursor-pointer hover:bg-white transition-colors" onClick={() => navigate('/client/sites/102')}>
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-[10px] font-bold text-[#2a261c]">Kamakura Plant</span>
                                    <Badge variant="warning" className="text-[7px] px-1.5 py-0">Attention</Badge>
                                </div>
                                <div className="flex items-center justify-between mb-0.5">
                                    <span className="text-[8px] text-[#8c8570] font-bold uppercase tracking-wider">Health</span>
                                    <span className="text-xs font-black text-[#2a261c]">78%</span>
                                </div>
                                <div className="w-full h-1 bg-white rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full" style={{ width: '78%' }} />
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Quick Actions */}
                    <Card className="bg-white/95 border-[#d3ccb5]/40 rounded-[1.5rem] p-4 shadow-md">
                        <h3 className="text-sm font-black text-[#2a261c] mb-3">Quick Actions</h3>
                        <div className="space-y-2">
                            <button onClick={() => navigate('/client/reports')} className="w-full p-2.5 bg-white/60 hover:bg-white rounded-lg text-left transition-colors group">
                                <div className="flex items-center gap-2.5">
                                    <FileText className="w-3.5 h-3.5 text-[#8c8570] group-hover:text-[#2a261c]" />
                                    <div className="flex-1">
                                        <div className="text-xs font-black text-[#2a261c]">View Reports</div>
                                        <div className="text-[8px] text-[#8c8570] font-bold">12 available</div>
                                    </div>
                                </div>
                            </button>
                            <button onClick={() => navigate('/client/portfolio')} className="w-full p-2.5 bg-white/60 hover:bg-white rounded-lg text-left transition-colors group">
                                <div className="flex items-center gap-2.5">
                                    <Sun className="w-3.5 h-3.5 text-[#8c8570] group-hover:text-[#2a261c]" />
                                    <div className="flex-1">
                                        <div className="text-xs font-black text-[#2a261c]">Plant Portfolio</div>
                                        <div className="text-[8px] text-[#8c8570] font-bold">4 active sites</div>
                                    </div>
                                </div>
                            </button>
                            <button onClick={() => navigate('/client/booking')} className="w-full p-2.5 bg-white/60 hover:bg-white rounded-lg text-left transition-colors group">
                                <div className="flex items-center gap-2.5">
                                    <Activity className="w-3.5 h-3.5 text-[#8c8570] group-hover:text-[#2a261c]" />
                                    <div className="flex-1">
                                        <div className="text-xs font-black text-[#2a261c]">Book Inspection</div>
                                        <div className="text-[8px] text-[#8c8570] font-bold">Schedule new</div>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
