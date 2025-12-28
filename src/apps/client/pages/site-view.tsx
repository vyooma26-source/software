import { useNavigate, useParams } from "react-router-dom"
import { ArrowLeft, Box, Download, Layers, Thermometer } from "lucide-react"
import { Button } from "@/core/ui/button"

export default function ClientSiteView() {
    const navigate = useNavigate();
    const { id } = useParams();

    return (
        <div className="h-full bg-slate-50 flex flex-col">
            <header className="bg-white border-b px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon" onClick={() => navigate('/client/dashboard')}>
                        <ArrowLeft className="w-5 h-5 text-slate-500" />
                    </Button>
                    <div>
                        <h1 className="text-xl font-bold text-slate-900">Solar Farm Alpha</h1>
                        <p className="text-sm text-slate-500">Last scanned: Oct 2025</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline">
                        <Download className="w-4 h-4 mr-2" />
                        Export Report
                    </Button>
                    <Button>
                        <Box className="w-4 h-4 mr-2" />
                        View 3D Model
                    </Button>
                </div>
            </header>

            <div className="flex-1 flex overflow-hidden">
                {/* Visualizer Panel (Left) */}
                <div className="flex-1 bg-slate-900 relative flex items-center justify-center">
                    <div className="text-center text-slate-500">
                        <Layers className="w-16 h-16 mx-auto mb-4 opacity-50" />
                        <h3 className="text-lg font-medium text-slate-300">Orthomosaic Viewer</h3>
                        <p className="text-sm">High-resolution drone imagery will render here.</p>
                    </div>
                </div>

                {/* Details Grid (Right) */}
                <div className="w-96 border-l bg-white overflow-auto p-6 space-y-8">
                    <section>
                        <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-500 mb-4">Thermal Status</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
                                <Thermometer className="w-6 h-6 text-orange-500 mb-2" />
                                <div className="text-2xl font-bold text-slate-900">42°C</div>
                                <div className="text-xs text-slate-500">Avg Temp</div>
                            </div>
                            <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                                <Thermometer className="w-6 h-6 text-green-500 mb-2" />
                                <div className="text-2xl font-bold text-slate-900">Normal</div>
                                <div className="text-xs text-slate-500">Condition</div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-500 mb-4">Detected Defects</h4>
                        <div className="space-y-3">
                            <div className="p-3 border rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
                                <div className="flex justify-between mb-1">
                                    <span className="font-medium text-sm">Hotspot (Row 4, Panel 12)</span>
                                    <span className="text-xs font-bold text-red-600">CRITICAL</span>
                                </div>
                                <div className="text-xs text-slate-500">Temp delta: +15°C</div>
                            </div>
                            <div className="p-3 border rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
                                <div className="flex justify-between mb-1">
                                    <span className="font-medium text-sm">Cracked Glass</span>
                                    <span className="text-xs font-bold text-yellow-600">MAJOR</span>
                                </div>
                                <div className="text-xs text-slate-500">Physical damage detected</div>
                            </div>
                            <div className="p-3 border rounded-lg hover:bg-slate-50 cursor-pointer transition-colors">
                                <div className="flex justify-between mb-1">
                                    <span className="font-medium text-sm">Soiling</span>
                                    <span className="text-xs font-bold text-blue-600">MINOR</span>
                                </div>
                                <div className="text-xs text-slate-500">Cleaning recommended</div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}
