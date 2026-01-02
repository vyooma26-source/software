import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/core/ui/card";
import { Button } from "@/core/ui/button";
import { Input } from "@/core/ui/input";
import { Label } from "@/core/ui/label";
import { Shield, Database, Key } from "lucide-react";

export default function AdminSettings() {
    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-bold tracking-tight">System Settings</h1>

            <div className="grid gap-6 max-w-4xl">
                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-2">
                            <Shield className="w-5 h-5 text-blue-500" />
                            <CardTitle>Role Management</CardTitle>
                        </div>
                        <CardDescription>Configure user roles and global permissions.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                            <div>
                                <p className="font-medium">Default User Role</p>
                                <p className="text-sm text-muted-foreground">The role assigned to new users by default.</p>
                            </div>
                            <Button variant="outline" size="sm">Pilot</Button>
                        </div>
                        <div className="flex items-center justify-between p-3 border rounded-lg">
                            <div>
                                <p className="font-medium">Strict Role Isolation</p>
                                <p className="text-sm text-muted-foreground">Prevent cross-portal access for all users.</p>
                            </div>
                            <Button variant="secondary" size="sm">Enabled</Button>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-2">
                            <Key className="w-5 h-5 text-orange-500" />
                            <CardTitle>API & Integration Keys</CardTitle>
                        </div>
                        <CardDescription>Manage keys for external services and telemetry ingestion.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="api-key">Global Telemetry Key</Label>
                            <div className="flex gap-2">
                                <Input id="api-key" value="vyooma_live_sk_827ksj827kjs..." readOnly />
                                <Button variant="outline">Rotate</Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <div className="flex items-center gap-2">
                            <Database className="w-5 h-5 text-green-500" />
                            <CardTitle>System Health & Maintenance</CardTitle>
                        </div>
                        <CardDescription>Monitor system status and manual override controls.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex gap-4">
                            <Button variant="outline">Export System Logs</Button>
                            <Button variant="destructive">Clear System Cache</Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
