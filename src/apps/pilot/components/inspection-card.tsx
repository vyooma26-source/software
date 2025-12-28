import { Calendar, MapPin, AlertCircle } from "lucide-react"
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
    scheduled: "bg-blue-900/50 text-blue-200 border-blue-800",
    in_progress: "bg-amber-900/50 text-amber-200 border-amber-800",
    processing: "bg-purple-900/50 text-purple-200 border-purple-800",
    completed: "bg-green-900/50 text-green-200 border-green-800",
    failed: "bg-red-900/50 text-red-200 border-red-800",
};

export function InspectionCard({ id, assetName, assetLocation, date, status, onStart }: InspectionCardProps) {
    return (
        <div className="rounded-lg border border-gray-800 bg-gray-950 p-5 shadow-sm hover:border-gray-700 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-lg font-semibold text-white">{assetName}</h3>
                    <div className="flex items-center text-gray-400 text-sm mt-1">
                        <MapPin className="w-3 h-3 mr-1" />
                        {assetLocation}
                    </div>
                </div>
                <span className={`px-2 py-1 rounded text-xs font-medium border ${statusColors[status]}`}>
                    {status.replace('_', ' ').toUpperCase()}
                </span>
            </div>

            <div className="flex items-center text-gray-500 text-sm mb-6">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </div>

            <div className="flex gap-2">
                {status === 'scheduled' && (
                    <Button
                        className="w-full bg-blue-600 hover:bg-blue-500 text-white"
                        onClick={() => onStart?.(id)}
                    >
                        Start Mission
                    </Button>
                )}
                {status === 'in_progress' && (
                    <Button
                        className="w-full bg-amber-600 hover:bg-amber-500 text-white"
                        onClick={() => onStart?.(id)}
                    >
                        Resume Mission
                    </Button>
                )}
                {(status === 'completed' || status === 'processing') && (
                    <Button variant="outline" className="w-full border-gray-700 text-gray-300 hover:bg-gray-800">
                        View Summary
                    </Button>
                )}
            </div>
        </div>
    )
}
