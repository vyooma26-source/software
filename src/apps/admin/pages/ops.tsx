import { MoreHorizontal, Filter, Plus } from 'lucide-react';
import { Card, CardContent } from '@/core/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/core/ui/table';
import { Badge } from '@/core/ui/badge';
import { Button } from '@/core/ui/button';
import { MOCK_INSPECTIONS } from '@/core/data/mock-inspections';

export default function OpsDashboard() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold tracking-tight">Inspection Queue</h1>
                <div className="flex gap-2">
                    <Button variant="outline"><Filter className="w-4 h-4 mr-2" /> Filter</Button>
                    <Button><Plus className="w-4 h-4 mr-2" /> New Mission</Button>
                </div>
            </div>

            <Card>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">ID</TableHead>
                                <TableHead>Asset</TableHead>
                                <TableHead>Date</TableHead>
                                <TableHead>Assigned Pilot</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {MOCK_INSPECTIONS.map((inspection) => (
                                <TableRow key={inspection.id}>
                                    <TableCell className="font-mono text-xs">{inspection.id}</TableCell>
                                    <TableCell className="font-medium">Asset {inspection.asset_id}</TableCell>
                                    <TableCell>{inspection.date}</TableCell>
                                    <TableCell>{inspection.pilot_name || <span className="text-muted-foreground italic">Unassigned</span>}</TableCell>
                                    <TableCell>
                                        <Badge variant={
                                            inspection.status === 'completed' ? 'success' :
                                                inspection.status === 'processing' ? 'info' :
                                                    inspection.status === 'scheduled' ? 'secondary' : 'destructive'
                                        } className="capitalize">
                                            {inspection.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="ghost" size="icon">
                                            <MoreHorizontal className="w-4 h-4" />
                                        </Button>
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
