import { FileText, Download, Filter } from 'lucide-react';
import { Card, CardContent } from '@/core/ui/card';
import { Button } from '@/core/ui/button';
import { Badge } from '@/core/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/core/ui/table';
import { MOCK_INSPECTIONS } from '@/core/data/mock-inspections';

export default function ClientReports() {
    return (
        <div className="h-full w-full flex flex-col gap-4">
            <Card className="bg-white/95 border-[#d3ccb5]/40 rounded-[1.5rem] shadow-md">
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="font-black text-[#2a261c]">Report Name</TableHead>
                                <TableHead className="font-black text-[#2a261c]">Asset</TableHead>
                                <TableHead className="font-black text-[#2a261c]">Date</TableHead>
                                <TableHead className="font-black text-[#2a261c]">Status</TableHead>
                                <TableHead className="font-black text-[#2a261c]">Defects</TableHead>
                                <TableHead className="text-right font-black text-[#2a261c]">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {MOCK_INSPECTIONS.map((inspection) => (
                                <TableRow key={inspection.id}>
                                    <TableCell className="font-bold text-[#2a261c]">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-[#f5f3ed] rounded-lg text-[#2a261c]">
                                                <FileText size={16} />
                                            </div>
                                            <span>Inspection_{inspection.id.split('-')[1]}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-[#8c8570]">Asset {inspection.asset_id}</TableCell>
                                    <TableCell className="text-[#8c8570]">{new Date(inspection.date).toLocaleDateString()}</TableCell>
                                    <TableCell>
                                        <Badge variant={
                                            inspection.status === 'completed' ? 'success' :
                                                inspection.status === 'processing' ? 'warning' :
                                                    inspection.status === 'scheduled' ? 'outline' : 'destructive'
                                        } className="text-[9px] capitalize">
                                            {inspection.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <span className="font-black text-[#2a261c]">{inspection.defects_found}</span>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {inspection.status === 'completed' ? (
                                            <Button variant="ghost" size="sm" className="text-[#2a261c] hover:bg-[#f5f3ed]">
                                                <Download className="mr-2 h-4 w-4" /> Export PDF
                                            </Button>
                                        ) : (
                                            <div className="text-xs text-[#8c8570] font-bold">Processing</div>
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
