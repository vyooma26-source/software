// import { useNavigate, useParams } from "react-router-dom"
import { Box, Download, Layers, Thermometer } from "lucide-react"
import { Button } from "@/core/ui/button"
import { PageHeader } from "@/core/components/page-header"
import { Badge } from "@/core/ui/badge"
import { Card } from "@/core/ui/card"

export default function ClientSiteView() {
    // const navigate = useNavigate();
    // const { id } = useParams();

    return (
        <div className="h-full flex flex-col gap-6">
            <PageHeader
                title="Solar Farm Alpha"
                description="Asset ID: #101 • Location: Nevada, USA"
                breadcrumbs={[
                    { label: "Portfolio", href: "/client/portfolio" },
                    { label: "Solar Farm Alpha" }
                ]}
                actions={
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
                }
            />

            <div className="flex-1 flex gap-6 overflow-hidden min-h-[500px]">
                {/* Visualizer Panel (Left) */}
                <Card className="flex-1 bg-black/90 border-border/50 relative flex items-center justify-center overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=3264&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-50 transition-opacity" />

                    <div className="relative z-10 text-center text-slate-300 bg-black/50 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                        <Layers className="w-16 h-16 mx-auto mb-4 text-primary" />
                        <h3 className="text-xl font-medium text-white mb-2">Orthomosaic Viewer</h3>
                        <p className="text-sm max-w-xs mx-auto text-slate-400">
                            High-resolution drone imagery and thermal layers are ready for analysis.
                        </p>
                        <Button className="mt-6" variant="glass">Launch Viewer</Button>
                    </div>

                    {/* Overlay Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                        <Badge variant="glass">RGB Layer</Badge>
                        <Badge variant="glass" className="opacity-50">Thermal</Badge>
                    </div>
                </Card>

                {/* Details Grid (Right) */}
                <div className="w-96 flex flex-col gap-6 overflow-y-auto pr-1">
                    <Card className="p-6">
                        <h4 className="font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-4">Thermal Status</h4>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-warning/10 rounded-lg border border-warning/20">
                                <Thermometer className="w-6 h-6 text-warning mb-2" />
                                <div className="text-2xl font-bold">42°C</div>
                                <div className="text-xs text-muted-foreground">Avg Temp</div>
                            </div>
                            <div className="p-4 bg-success/10 rounded-lg border border-success/20">
                                <Thermometer className="w-6 h-6 text-success mb-2" />
                                <div className="text-2xl font-bold">Normal</div>
                                <div className="text-xs text-muted-foreground">Condition</div>
                            </div>
                        </div>
                    </Card>

                    <Card className="p-6 flex-1">
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="font-semibold text-xs uppercase tracking-wider text-muted-foreground">Detected Defects</h4>
                            <Button variant="ghost" size="sm" className="h-6 text-xs">View All</Button>
                        </div>

                        <div className="space-y-3">
                            <div className="p-3 border rounded-lg hover:bg-secondary/50 cursor-pointer transition-colors">
                                <div className="flex justify-between mb-1">
                                    <span className="font-medium text-sm">Hotspot (Row 4, Panel 12)</span>
                                    <Badge variant="destructive" className="text-[10px] px-1.5 py-0 h-5">CRITICAL</Badge>
                                </div>
                                <div className="text-xs text-muted-foreground">Temp delta: +15°C</div>
                            </div>
                            <div className="p-3 border rounded-lg hover:bg-secondary/50 cursor-pointer transition-colors">
                                <div className="flex justify-between mb-1">
                                    <span className="font-medium text-sm">Cracked Glass</span>
                                    <Badge variant="warning" className="text-[10px] px-1.5 py-0 h-5">MAJOR</Badge>
                                </div>
                                <div className="text-xs text-muted-foreground">Physical damage detected</div>
                            </div>
                            <div className="p-3 border rounded-lg hover:bg-secondary/50 cursor-pointer transition-colors">
                                <div className="flex justify-between mb-1">
                                    <span className="font-medium text-sm">Soiling</span>
                                    <Badge variant="info" className="text-[10px] px-1.5 py-0 h-5">MINOR</Badge>
                                </div>
                                <div className="text-xs text-muted-foreground">Cleaning recommended</div>
                            </div>
                            <div className="p-3 border rounded-lg hover:bg-secondary/50 cursor-pointer transition-colors opacity-60">
                                <div className="flex justify-between mb-1">
                                    <span className="font-medium text-sm">Vegetation</span>
                                    <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-5">IGNORE</Badge>
                                </div>
                                <div className="text-xs text-muted-foreground">Encroachment on east perimeter</div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}
