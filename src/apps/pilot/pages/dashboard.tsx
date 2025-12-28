import { useNavigate } from "react-router-dom"
import { InspectionCard } from "../components/inspection-card"
import { MOCK_INSPECTIONS } from "../data/mock"

export default function PilotDashboard() {
    const navigate = useNavigate();

    const handleStart = (id: string) => {
        navigate(`/pilot/jobs/${id}`)
    }

    // Grouping logic (simplified)
    const active = MOCK_INSPECTIONS.filter(i => ['scheduled', 'in_progress'].includes(i.status));
    const history = MOCK_INSPECTIONS.filter(i => !['scheduled', 'in_progress'].includes(i.status));

    return (
        <div className="max-w-md mx-auto pb-20">
            <section className="mb-8">
                <h2 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-4">Active Missions</h2>
                <div className="space-y-4">
                    {active.map(inspection => (
                        <InspectionCard
                            key={inspection.id}
                            id={inspection.id}
                            assetName={inspection.asset_name}
                            assetLocation={inspection.location}
                            date={inspection.scheduled_date}
                            status={inspection.status}
                            onStart={handleStart}
                        />
                    ))}
                    {active.length === 0 && (
                        <div className="text-gray-600 text-center py-8 bg-gray-900/50 rounded-lg border border-gray-800">
                            No active missions assigned.
                        </div>
                    )}
                </div>
            </section>

            <section>
                <h2 className="text-gray-400 text-sm font-medium uppercase tracking-wider mb-4">Recent History</h2>
                <div className="space-y-4 opacity-75">
                    {history.map(inspection => (
                        <InspectionCard
                            key={inspection.id}
                            id={inspection.id}
                            assetName={inspection.asset_name}
                            assetLocation={inspection.location}
                            date={inspection.scheduled_date}
                            status={inspection.status}
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}
