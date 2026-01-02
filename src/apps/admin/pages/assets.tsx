import { MoreHorizontal, Plus, Search } from 'lucide-react';
import { Card, CardContent } from '@/core/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/core/ui/table';
import { Badge } from '@/core/ui/badge';
import { Button } from '@/core/ui/button';
import { Input } from '@/core/ui/input';
import { MOCK_ASSETS } from '@/core/data/mock-assets';

export default function AssetManager() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold tracking-tight">Asset Management</h1>
                <Button><Plus className="w-4 h-4 mr-2" /> Add Asset</Button>
            </div>

            <div className="flex items-center gap-4 mb-2">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search assets..." className="pl-9" />
                </div>
            </div>

            <Card>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Asset Name</TableHead>
                                <TableHead>Location</TableHead>
                                <TableHead>Capacity</TableHead>
                                <TableHead>Health Score</TableHead>
                                <TableHead>Last Inspection</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {MOCK_ASSETS.map((asset) => (
                                <TableRow key={asset.id}>
                                    <TableCell className="font-medium">{asset.name}</TableCell>
                                    <TableCell>{asset.location}</TableCell>
                                    <TableCell>{asset.capacity_mw} MW</TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            <div className="w-16 h-2 bg-secondary rounded-full overflow-hidden">
                                                <div className={`h-full rounded-full ${asset.health_score > 90 ? 'bg-success' : asset.health_score > 70 ? 'bg-warning' : 'bg-destructive'}`} style={{ width: `${asset.health_score}%` }} />
                                            </div>
                                            <span className="text-xs font-medium">{asset.health_score}%</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>{new Date(asset.last_inspection).toLocaleDateString()}</TableCell>
                                    <TableCell>
                                        <Badge variant={
                                            asset.status === 'active' ? 'success' :
                                                asset.status === 'maintenance' ? 'warning' : 'destructive'
                                        } className="capitalize">
                                            {asset.status}
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
