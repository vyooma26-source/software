import { Button } from "@/core/ui/button"

export default function AssetManager() {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">Assets</h2>
                <Button>Add New Plant</Button>
            </div>

            <div className="bg-white border rounded-lg overflow-hidden">
                <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50 border-b">
                        <tr>
                            <th className="px-6 py-4 font-semibold text-slate-900">Name</th>
                            <th className="px-6 py-4 font-semibold text-slate-900">Location</th>
                            <th className="px-6 py-4 font-semibold text-slate-900">Health</th>
                            <th className="px-6 py-4 font-semibold text-slate-900">Capacity</th>
                            <th className="px-6 py-4 font-semibold text-slate-900">Last Inspection</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        <tr className="hover:bg-slate-50/50">
                            <td className="px-6 py-4 font-medium">Solar Farm Alpha</td>
                            <td className="px-6 py-4 text-slate-500">Nevada, USA</td>
                            <td className="px-6 py-4 text-green-600">98%</td>
                            <td className="px-6 py-4 text-slate-500">120 MW</td>
                            <td className="px-6 py-4">Oct 12, 2025</td>
                        </tr>
                        <tr className="hover:bg-slate-50/50">
                            <td className="px-6 py-4 font-medium">Desert Array B-12</td>
                            <td className="px-6 py-4 text-slate-500">Arizona, USA</td>
                            <td className="px-6 py-4 text-yellow-600">85%</td>
                            <td className="px-6 py-4 text-slate-500">45 MW</td>
                            <td className="px-6 py-4">Oct 11, 2025</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
