import { useNavigate } from "react-router-dom"
import { ArrowLeft, Upload, CheckCircle, AlertTriangle } from "lucide-react"
import { Button } from "@/core/ui/button"

export default function JobExecution() {
    const navigate = useNavigate();

    return (
        <div className="max-w-2xl mx-auto pb-20 text-white">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
                <Button variant="ghost" size="icon" onClick={() => navigate('/pilot/dashboard')} className="text-gray-400 hover:text-white">
                    <ArrowLeft className="w-6 h-6" />
                </Button>
                <div>
                    <h1 className="text-xl font-bold">Solar Farm Alpha</h1>
                    <p className="text-gray-400 text-sm">Mission ID: #1 • In Progress</p>
                </div>
            </div>

            {/* Safety Check (Mock Step 1) */}
            <div className="mb-6 p-4 rounded-lg bg-gray-900 border border-gray-800">
                <div className="flex items-start gap-4">
                    <div className="p-2 bg-green-900/30 text-green-400 rounded-full">
                        <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">Pre-Flight Safety Check</h3>
                        <p className="text-gray-400 text-sm mt-1">
                            Verify airspace clearance and equipment integrity.
                        </p>
                    </div>
                </div>
            </div>

            {/* Upload Zone (Mock Step 2) */}
            <div className="mb-6 p-6 rounded-lg bg-gray-900 border border-dashed border-gray-700 hover:border-blue-500 transition-colors cursor-pointer text-center">
                <div className="mx-auto w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center mb-3">
                    <Upload className="w-6 h-6 text-gray-400" />
                </div>
                <h3 className="font-medium text-white">Upload Mission Data</h3>
                <p className="text-gray-500 text-sm mt-1">Drag drone logs and images here</p>
                <Button variant="secondary" className="mt-4">Select Files</Button>
            </div>

            {/* Issues Reporting (Mock Step 3) */}
            <div className="mb-6 p-4 rounded-lg bg-gray-900 border border-gray-800">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">Field Observations</h3>
                    <Button variant="outline" size="sm" className="h-8 border-gray-700 text-gray-300">
                        <AlertTriangle className="w-4 h-4 mr-2 text-amber-500" />
                        Report Hazard
                    </Button>
                </div>
                <div className="text-sm text-gray-500 italic">No notes added yet.</div>
            </div>

            <div className="flex gap-4 mt-8">
                <Button className="flex-1 bg-green-600 hover:bg-green-500" size="lg">
                    Complete Mission
                </Button>
            </div>
        </div>
    )
}
