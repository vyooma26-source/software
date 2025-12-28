import { ArrowUpRight, FileText, Image as ImageIcon } from 'lucide-react';

export function ClientDashboard() {
    return (
        <div className="p-8 h-full overflow-y-auto w-full">
            {/* Header Area */}
            <div className="flex justify-between items-center mb-8">
                <div className="flex space-x-1">
                    <div className="h-2 w-12 bg-gray-600 rounded-full skew-x-[-20deg]" />
                    <div className="h-2 w-12 bg-white rounded-full skew-x-[-20deg]" />
                    <div className="h-2 w-12 bg-gray-600 rounded-full skew-x-[-20deg]" />
                </div>
                <div className="flex items-center space-x-4">
                    <button className="h-12 px-6 rounded-full bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors">
                        Support
                    </button>
                    <div className="h-12 w-12 rounded-full bg-white text-black flex items-center justify-center font-bold">
                        JD
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-6 h-[calc(100%-80px)]">
                {/* Left Column: Overview of Analytics */}
                <div className="col-span-8 bg-card rounded-[2.5rem] p-8 relative overflow-hidden group border border-white/5">
                    <div className="absolute top-8 left-8 z-10">
                        <h2 className="text-3xl font-light text-white tracking-tight">Overview of<br />Analytics</h2>
                    </div>

                    {/* Abstract Content Placeholder for Analytics Graph */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                        <div className="w-[80%] h-[60%] border-l border-b border-white/30 flex items-end space-x-4 p-4">
                            <div className="w-8 h-[40%] bg-white/50 rounded-t-sm" />
                            <div className="w-8 h-[70%] bg-white/50 rounded-t-sm" />
                            <div className="w-8 h-[50%] bg-white/50 rounded-t-sm" />
                            <div className="w-8 h-[90%] bg-white rounded-t-sm" />
                            <div className="w-8 h-[60%] bg-white/50 rounded-t-sm" />
                        </div>
                    </div>

                    <div className="absolute bottom-8 right-8 flex space-x-2">
                        <div className="w-12 h-12 bg-white rounded-xl" />
                        <div className="w-12 h-12 bg-white/50 rounded-xl" />
                        <div className="w-12 h-12 bg-white/50 rounded-xl" />
                    </div>
                </div>

                {/* Right Column (Stats/Widgets) */}
                <div className="col-span-4 flex flex-col space-y-6">
                    {/* Top Right Widget: New Booking */}
                    <div className="bg-card rounded-[2.5rem] p-6 flex-1 relative border border-white/5 group cursor-pointer hover:bg-card/80 transition-colors">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 mb-2">Action</span>
                                <h3 className="text-xl font-medium text-white">New<br />Booking</h3>
                            </div>
                            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                                <ArrowUpRight className="text-current" size={20} />
                            </div>
                        </div>
                        <div className="absolute bottom-6 right-6 opacity-10">
                            <ImageIcon size={64} />
                        </div>
                    </div>

                    {/* Bottom Right Widget: View Report */}
                    <div className="bg-card rounded-[2.5rem] p-6 flex-1 relative border border-white/5 group cursor-pointer hover:bg-card/80 transition-colors">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-medium text-white">View<br />Report</h3>
                            <FileText className="text-gray-500 group-hover:text-white transition-colors" />
                        </div>
                        <div className="space-y-3 mt-4">
                            <div className="h-10 w-full bg-secondary/30 rounded-xl flex items-center px-4">
                                <span className="text-xs text-gray-400">Latest: Q3 Report.pdf</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
