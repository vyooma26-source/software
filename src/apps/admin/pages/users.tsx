import { MoreHorizontal, Plus, Search, Mail, Shield, ShieldAlert, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '@/core/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/core/ui/table';
import { Badge } from '@/core/ui/badge';
import { Button } from '@/core/ui/button';
import { Input } from '@/core/ui/input';
import { MOCK_USER } from '@/core/data/mock-user';

// Mock list based on single mock user
const MOCK_USERS_LIST = [
    { ...MOCK_USER, id: '1', role: 'admin', status: 'active' },
    { ...MOCK_USER, id: '2', name: 'Sarah Pilot', email: 'sarah@vyooma.com', role: 'pilot', status: 'active' },
    { ...MOCK_USER, id: '3', name: 'Client User', email: 'client@acme.com', role: 'client', status: 'inactive' },
    { ...MOCK_USER, id: '4', name: 'Ops Manager', email: 'ops@vyooma.com', role: 'admin', status: 'active' },
];

export default function UserManagement() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold tracking-tight">User Management</h1>
                <Button><Plus className="w-4 h-4 mr-2" /> Add User</Button>
            </div>

            <div className="flex items-center gap-4 mb-2">
                <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search users by name or email..." className="pl-9" />
                </div>
            </div>

            <Card>
                <CardContent className="p-0">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>User</TableHead>
                                <TableHead>Role</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Last Active</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {MOCK_USERS_LIST.map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center font-bold text-xs">
                                                {user.name.substring(0, 2).toUpperCase()}
                                            </div>
                                            <div>
                                                <div className="font-medium">{user.name}</div>
                                                <div className="text-xs text-muted-foreground flex items-center">
                                                    <Mail size={10} className="mr-1" /> {user.email}
                                                </div>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-2">
                                            {user.role === 'admin' && <ShieldAlert size={14} className="text-destructive" />}
                                            {user.role === 'pilot' && <ShieldCheck size={14} className="text-primary" />}
                                            {user.role === 'client' && <Shield size={14} className="text-info" />}
                                            <span className="capitalize">{user.role}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant={user.status === 'active' ? 'success' : 'secondary'} className="capitalize">
                                            {user.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>Today, 10:23 AM</TableCell>
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
