import { Calendar, MapPin } from "lucide-react"
import { Button } from "@/core/ui/button"

export type InspectionStatus = 'scheduled' | 'in_progress' | 'processing' | 'completed' | 'failed';

interface InspectionCardProps {
    id: string;
    assetName: string;
    assetLocation: string; // e.g., "Nevada, USA"
    date: string;
    status: InspectionStatus;
    onStart?: (id: string) => void;
}

const statusColors: Record<InspectionStatus, string> = {
    scheduled: "bg-info/10 text-info border-info/20",
    in_progress: "bg-warning/10 text-warning border-warning/20",
    processing: "bg-primary/10 text-primary border-primary/20",
    completed: "bg-success/10 text-success border-success/20",
    failed: "bg-destructive/10 text-destructive border-destructive/20",
};

export function InspectionCard({ id, assetName, assetLocation, date, status, onStart }: InspectionCardProps) {
    return (
        <div className="rounded-lg border border-border bg-card p-5 shadow-sm hover:border-primary/30 transition-all group">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="heading-3 mb-1">{assetName}</h3>
                    <div className="flex items-center text-muted-foreground text-sm">
                        <MapPin className="w-3 h-3 mr-1 text-primary" />
                        {assetLocation}
                    </div>
                </div>
                <span className={`px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider font-bold border ${statusColors[status]}`}>
                    {status.replace('_', ' ')}
                </span>
            </div>

            <div className="flex items-center text-gray-500 text-sm mb-6">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </div>

            <div className="flex gap-2">
                {status === 'scheduled' && (
                    <Button
                        className="w-full font-bold"
                        onClick={() => onStart?.(id)}
                    >
                        Start Mission
                    </Button>
                )}
                {status === 'in_progress' && (
                    <Button
                        variant="warning"
                        className="w-full font-bold"
                        onClick={() => onStart?.(id)}
                    >
                        Resume Mission
                    </Button>
                )}
                {(status === 'completed' || status === 'processing') && (
                    <Button variant="outline" className="w-full border-border text-muted-foreground hover:text-foreground">
                        View Summary
                    </Button>
                )}
            </div>
        </div>
    )
}
