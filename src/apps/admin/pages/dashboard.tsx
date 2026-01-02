import { Activity, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/core/ui/card';
import { StatCard } from '@/core/components/stat-card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/core/ui/table';
import { Badge } from '@/core/ui/badge';

export default function AdminDashboard() {
    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-bold tracking-tight">System Overview</h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <StatCard
                    title="Total Assets"
                    value="42"
                    icon={Activity}
                    trend={{ value: 4, label: 'onboarded this month', direction: 'up' }}
                />
                <StatCard
                    title="Active Missions"
                    value="3"
                    icon={Clock}
                    className="border-primary/50 bg-primary/5"
                />
                <StatCard
                    title="Critical Defects"
                    value="12"
                    icon={AlertTriangle}
                    trend={{ value: 2, label: 'new today', direction: 'down' }} // 'down' for bad even if number went up? Or 'down' meaning negative trend. Usually down is red/bad for revenue, but here increase in defects is bad. Direction logic in StatCard handles color. up=green. So down=red. 12 defects is bad? Wait.. trend arrow. Let's assume 'down' means "Worse". Actually my StatCard logic maps 'down' to red. A rise in defects is bad, but usually up arrow. Let's stick to simple "up" = number went up.
                />
                <StatCard
                    title="System Health"
                    value="99.9%"
                    icon={CheckCircle}
                    trend={{ value: 0, label: 'stable', direction: 'neutral' }}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Recent System Alerts</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-start gap-3 p-3 rounded-lg border bg-muted/20">
                                    <AlertTriangle className="w-5 h-5 text-warning shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-sm font-medium">High latency detected in Region US-West</p>
                                        <p className="text-xs text-muted-foreground">20 minutes ago • Service: Ingestion API</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Pilot Activity</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Pilot</TableHead>
                                    <TableHead>Mission</TableHead>
                                    <TableHead>Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell className="font-medium">Sarah Connor</TableCell>
                                    <TableCell>Nevada Inspect</TableCell>
                                    <TableCell><Badge variant="success">Online</Badge></TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell className="font-medium">John Doe</TableCell>
                                    <TableCell>Site Mapping</TableCell>
                                    <TableCell><Badge variant="secondary">Idle</Badge></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
