import { FileText, Download, Filter } from 'lucide-react';
import { PageHeader } from '@/core/components/page-header';
import { Card, CardContent } from '@/core/ui/card';
import { Button } from '@/core/ui/button';
import { Badge } from '@/core/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/core/ui/table';
import { MOCK_INSPECTIONS } from '@/core/data/mock-inspections';

export default function ClientReports() {
    return (
        <div className="h-full w-full flex flex-col gap-3">
            <PageHeader
                title="Inspection Reports"
                description="View and download operational reports"
                actions={
                    <Button variant="outline">
                        <Filter className="mr-2 h-4 w-4" /> Filter
                    </Button>
                }
            />

            <Card>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Report Name</TableHead>
                                <TableHead>Asset</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Defects</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {MOCK_INSPECTIONS.map((inspection) => (
                                <TableRow key={inspection.id}>
                                    <TableCell className="font-bold">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                                <FileText size={18} />
                                            </div>
                                            <span>Flight Analysis_{inspection.id.split('-')[1]}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>Asset {inspection.asset_id}</TableCell>
                                    <TableCell>{new Date(inspection.date).toLocaleDateString()}</TableCell>
                                    <TableCell>
                                        <Badge variant={
                                            inspection.status === 'completed' ? 'success' :
                                                inspection.status === 'processing' ? 'info' : 'secondary'
                                        } className="capitalize">
                                            {inspection.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        {inspection.defects_found > 0 ? (
                                            <Badge variant="destructive">{inspection.defects_found} Found</Badge>
                                        ) : (
                                            <span className="text-muted-foreground">-</span>
                                        )}
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {inspection.status === 'completed' ? (
                                            <Button variant="ghost" size="sm" className="text-primary hover:text-primary font-bold">
                                                <Download className="mr-2 h-4 w-4" /> Export PDF
                                            </Button>
                                        ) : (
                                            <div className="flex items-center justify-end gap-2 text-[10px] text-muted-foreground uppercase tracking-widest font-bold pr-4">
                                                <div className="w-1 h-1 bg-primary animate-ping rounded-full" />
                                                Processing
                                            </div>
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
