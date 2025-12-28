import { ArrowUpRight, FileText, Map as MapIcon, MoreHorizontal, Activity, Zap } from 'lucide-react';

export default function ClientPortfolio() {
    return (
        <div className="p-8 h-full w-full overflow-hidden flex flex-col theme-client-premium">
            {/* Header / Top Row Stats */}
            <div className="grid grid-cols-12 gap-6 mb-6">
                {/* Stat Card 1 */}
                <div className="col-span-4 bg-card rounded-[2rem] p-6 border border-white/5 relative overflow-hidden group">
                    <div className="flex justify-between items-start">
                        <div className="space-y-1">
                            <span className="text-gray-400 text-sm font-medium">Total Revenue</span>
                            <h3 className="text-3xl font-bold text-white">$124,500</h3>
                        </div>
                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                            <Activity size={20} className="text-white" />
                        </div>
                    </div>
                    <div className="mt-4 h-12 w-full flex items-end space-x-1 opacity-50">
                        <div className="w-1/6 h-[40%] bg-primary rounded-t-sm" />
                        <div className="w-1/6 h-[60%] bg-primary rounded-t-sm" />
                        <div className="w-1/6 h-[30%] bg-primary rounded-t-sm" />
                        <div className="w-1/6 h-[80%] bg-primary rounded-t-sm" />
                        <div className="w-1/6 h-[50%] bg-primary rounded-t-sm" />
                        <div className="w-1/6 h-[70%] bg-primary rounded-t-sm" />
                    </div>
                </div>
                {/* Stat Card 2 */}
                <div className="col-span-4 bg-card rounded-[2rem] p-6 border border-white/5 relative overflow-hidden group">
                    <div className="flex justify-between items-start">
                        <div className="space-y-1">
                            <span className="text-gray-400 text-sm font-medium">Active Jobs</span>
                            <h3 className="text-3xl font-bold text-white">45</h3>
                        </div>
                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                            <Zap size={20} className="text-white" />
                        </div>
                    </div>
                    <div className="mt-4 h-12 w-full flex items-center space-x-2">
                        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                            <div className="h-full w-[70%] bg-secondary" />
                        </div>
                        <div className="text-xs text-white">70%</div>
                    </div>
                </div>
                {/* Stat Card 3 */}
                <div className="col-span-4 bg-card rounded-[2rem] p-6 border border-white/5 relative overflow-hidden group">
                    <div className="flex justify-between items-start">
                        <div className="space-y-1">
                            <span className="text-gray-400 text-sm font-medium">Efficiency</span>
                            <h3 className="text-3xl font-bold text-white">+24%</h3>
                        </div>
                        <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                            <ArrowUpRight size={20} className="text-green-400" />
                        </div>
                    </div>
                    <div className="mt-4 text-sm text-gray-500">
                        Compared to last month
                    </div>
                </div>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-12 gap-6 flex-1 min-h-0">

                {/* Left Column (Controls & Lists) - Spans 4 cols */}
                <div className="col-span-4 flex flex-col gap-6 h-full">
                    {/* Control Card */}
                    <div className="bg-card rounded-[2.5rem] p-6 flex-1 border border-white/5 flex flex-col justify-center items-center text-center space-y-4">
                        <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mb-2">
                            <div className="w-12 h-12 bg-secondary rounded-full" />
                        </div>
                        <div>
                            <h4 className="text-white font-medium text-lg">System Status</h4>
                            <p className="text-gray-400 text-sm">All systems normal</p>
                        </div>
                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mt-4">
                            <div className="h-full w-full bg-green-500" />
                        </div>
                    </div>

                    {/* Circular Progress Card */}
                    <div className="bg-card rounded-[2.5rem] p-6 flex-1 border border-white/5 flex flex-col items-center justify-center">
                        <div className="relative w-32 h-32 flex items-center justify-center">
                            <svg className="transform -rotate-90 w-32 h-32">
                                <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-white/10" />
                                <circle cx="64" cy="64" r="56" stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray="351.86" strokeDashoffset="100" className="text-white" />
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-2xl font-bold text-white">72%</span>
                            </div>
                        </div>
                        <h4 className="mt-4 text-white font-medium">Project Completion</h4>
                    </div>
                </div>

                {/* Center Column (Details / List) - Spans 4 cols */}
                <div className="col-span-4 flex flex-col gap-6 h-full">
                    <div className="bg-card rounded-[2.5rem] p-6 flex-[2] border border-white/5 relative overflow-hidden">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-medium text-white">Recent Activities</h3>
                            <button className="text-gray-400 hover:text-white"><MoreHorizontal /></button>
                        </div>
                        <div className="space-y-4">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="flex items-center space-x-4 p-3 hover:bg-white/5 rounded-2xl transition-colors cursor-pointer">
                                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white">
                                        <FileText size={18} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-white text-sm font-medium">Report Generated</h4>
                                        <p className="text-gray-500 text-xs">2 hours ago</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white text-black rounded-[2.5rem] p-6 flex-1 flex items-center justify-between cursor-pointer hover:bg-gray-200 transition-colors">
                        <div>
                            <h4 className="font-bold text-lg">New Project</h4>
                            <p className="text-sm opacity-70">Create new entry</p>
                        </div>
                        <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
                            <ArrowUpRight />
                        </div>
                    </div>
                </div>

                {/* Right Column (Map) - Spans 4 cols */}
                <div className="col-span-4 bg-card rounded-[2.5rem] p-4 border border-white/5 h-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gray-800">
                        {/* Map Placeholder Graphic */}
                        <div className="w-full h-full opacity-30 flex items-center justify-center relative overflow-hidden">
                            {/* Abstract Map Lines */}
                            <svg width="100%" height="100%" viewBox="0 0 400 600" preserveAspectRatio="none">
                                <path d="M50,0 Q100,200 50,600" stroke="white" strokeWidth="2" fill="none" />
                                <path d="M150,0 Q50,300 150,600" stroke="white" strokeWidth="2" fill="none" />
                                <path d="M250,0 Q350,200 250,600" stroke="white" strokeWidth="2" fill="none" />
                                <path d="M350,0 Q250,400 350,600" stroke="white" strokeWidth="2" fill="none" />

                                <path d="M0,100 Q200,50 400,100" stroke="white" strokeWidth="2" fill="none" />
                                <path d="M0,300 Q200,250 400,300" stroke="white" strokeWidth="2" fill="none" />
                                <path d="M0,500 Q200,450 400,500" stroke="white" strokeWidth="2" fill="none" />
                            </svg>

                            {/* Map Pins */}
                            <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)] animate-pulse" />
                            <div className="absolute top-1/2 left-3/4 w-4 h-4 bg-secondary rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                            <div className="absolute bottom-1/4 left-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
                        </div>
                    </div>

                    <div className="absolute top-6 left-6 right-6">
                        <div className="glass-panel p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10">
                            <div className="flex justify-between items-center">
                                <h3 className="text-white font-medium">Live Fleet</h3>
                                <MapIcon size={18} className="text-gray-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
