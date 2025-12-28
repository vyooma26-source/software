import { MapPin, Navigation } from "lucide-react"

export default function OpsDashboard() {
    return (
        <div className="h-[calc(100vh-8rem)] bg-slate-100 rounded-xl relative overflow-hidden border border-slate-300">

            {/* Placeholder Map Background */}
            <div className="absolute inset-0 bg-[#e5e7eb] flex items-center justify-center">
                <div className="text-center text-slate-400">
                    <MapPin className="w-16 h-16 mx-auto mb-2 opacity-20" />
                    <p>Interactive Map Module</p>
                    <p className="text-xs mt-1">Install 'leaflet' for live view</p>
                </div>
            </div>

            {/* Floating Overlay Panel */}
            <div className="absolute top-4 left-4 w-80 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-white/50 p-4">
                <h3 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                    <Navigation className="w-4 h-4 text-blue-600" />
                    Live Fleet (3 Active)
                </h3>
                <div className="space-y-3">
                    <div className="flex items-center gap-3 p-2 bg-white rounded border border-slate-200">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <div className="flex-1">
                            <div className="text-sm font-medium">Drone X1</div>
                            <div className="text-xs text-slate-500">Mission #1 • 85% Battery</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-2 bg-white rounded border border-slate-200">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <div className="flex-1">
                            <div className="text-sm font-medium">Drone Z9</div>
                            <div className="text-xs text-slate-500">Mission #4 • 40% Battery</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
