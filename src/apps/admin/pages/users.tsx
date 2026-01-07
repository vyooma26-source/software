import { MoreHorizontal, Plus, Search, Mail, Shield, ShieldAlert, ShieldCheck } from 'lucide-react';
import { Card, CardContent } from '@/core/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/core/ui/table';
import { Badge } from '@/core/ui/badge';
import { Button } from '@/core/ui/button';
import { Input } from '@/core/ui/input';

import { useAuth } from "@/core/hooks/use-auth"
import { PermissionGate } from "@/core/components/auth/permission-gate"
import { PageHeader } from "@/core/components/page-header"
import { useUsers } from '@/core/hooks/data/use-data';

export default function UserManagement() {
    const { role } = useAuth();
    const { data: users, loading } = useUsers();

    return (
        <div className="flex flex-col gap-6">
            <PageHeader
                title="Team Management"
                subtitle="Manage user roles and organization access"
                actions={
                    <PermissionGate allowedRoles={['admin']} currentRole={role}>
                        <Button className="font-bold shadow-xl hover:shadow-primary/20">
                            <Plus className="w-4 h-4 mr-2" /> Add User
                        </Button>
                    </PermissionGate>
                }
            />

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
                                <TableHead className="px-6">User</TableHead>
                                <TableHead className="px-6">Role</TableHead>
                                <TableHead className="px-6">Status</TableHead>
                                <TableHead className="px-6">Last Active</TableHead>
                                <TableHead className="text-right px-6">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {loading ? (
                                <TableRow>
                                    <TableCell colSpan={5} className="text-center py-12 text-muted-foreground animate-pulse">
                                        Loading enterprise directory...
                                    </TableCell>
                                </TableRow>
                            ) : users.map((user) => (
                                <TableRow key={user.id} className="hover:bg-muted/30 transition-colors">
                                    <TableCell className="py-2 px-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center font-bold text-xs shrink-0">
                                                {user.name.substring(0, 2).toUpperCase()}
                                            </div>
                                            <div>
                                                <div className="font-medium text-sm leading-none mb-1">{user.name}</div>
                                                <div className="text-[10px] text-muted-foreground flex items-center">
                                                    <Mail size={10} className="mr-1" /> {user.email}
                                                </div>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell className="py-2 px-6">
                                        <div className="flex items-center gap-2 text-xs font-medium">
                                            {user.role === 'admin' && <ShieldAlert size={12} className="text-destructive" />}
                                            {user.role === 'pilot' && <ShieldCheck size={12} className="text-primary" />}
                                            {user.role === 'client' && <Shield size={12} className="text-info" />}
                                            <span className="capitalize">{user.role}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell className="py-2 px-6">
                                        <Badge variant={user.status === 'active' ? 'success' : 'secondary'} className="capitalize text-[10px] px-2 py-0">
                                            {user.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="py-2 px-6 text-xs text-muted-foreground">Today, 10:23 AM</TableCell>
                                    <TableCell className="py-2 px-6 text-right">
                                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-primary/10 hover:text-primary transition-colors">
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
