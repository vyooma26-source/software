import { Lock, Globe, LogOut, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { PageHeader } from '@/core/components/page-header';
import { Button } from '@/core/ui/button';
import { Card, CardContent } from '@/core/ui/card';
import { Select } from '@/core/ui/select';
import { Badge } from '@/core/ui/badge';

type SettingsTab = 'general' | 'security';

export default function ClientSettings() {
    const [activeTab, setActiveTab] = useState<SettingsTab>('general');

    return (
        <div className="h-full w-full flex flex-col gap-3">
            <PageHeader
                title="Settings"
                description="Manage application preferences and account security"
            />

            <div className="flex flex-col lg:flex-row gap-8 h-full pb-6">
                {/* Sidebar Navigation */}
                <div className="w-full lg:w-64 flex flex-col space-y-2">
                    <Button
                        variant={activeTab === 'general' ? 'default' : 'ghost'}
                        className={`justify-start h-12 ${activeTab === 'general' ? '' : 'text-muted-foreground'}`}
                        onClick={() => setActiveTab('general')}
                    >
                        <Globe size={18} className="mr-3" />
                        General
                    </Button>
                    <Button
                        variant={activeTab === 'security' ? 'default' : 'ghost'}
                        className={`justify-start h-12 ${activeTab === 'security' ? '' : 'text-muted-foreground'}`}
                        onClick={() => setActiveTab('security')}
                    >
                        <Lock size={18} className="mr-3" />
                        Security
                    </Button>
                </div>

                {/* Content Area */}
                <div className="flex-1 overflow-y-auto">
                    <Card className="min-h-[500px]">
                        <CardContent className="p-8 space-y-4">

                            {activeTab === 'general' && (
                                <div className="space-y-6 max-w-2xl animate-in fade-in slide-in-from-right-4 duration-300">
                                    <div>
                                        <h2 className="text-xl font-bold mb-4 text-primary">Regional & Display</h2>
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between p-5 rounded-2xl border bg-primary/5 hover:bg-primary/10 transition-colors">
                                                <div className="flex items-center space-x-4">
                                                    <div className="p-3 bg-secondary rounded-xl shadow-sm border border-primary/10 text-primary">
                                                        <Globe size={22} />
                                                    </div>
                                                    <div>
                                                        <p className="font-bold">System Language</p>
                                                        <p className="text-xs text-muted-foreground">Select your preferred localization</p>
                                                    </div>
                                                </div>
                                                <div className="w-44">
                                                    <Select defaultValue="en-us">
                                                        <option value="en-us">English (US)</option>
                                                        <option value="es">Español</option>
                                                        <option value="fr">Français</option>
                                                    </Select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t">
                                        <h2 className="text-xl font-medium mb-4">Account Actions</h2>
                                        <div className="space-y-4">
                                            <Button variant="outline" className="w-full justify-start h-12 text-destructive hover:text-destructive hover:bg-destructive/10 border-destructive/20">
                                                <LogOut size={18} className="mr-3" />
                                                Sign Out of All Devices
                                            </Button>
                                            <Button variant="ghost" className="w-full justify-start h-12 text-muted-foreground hover:text-destructive">
                                                <Trash2 size={18} className="mr-3" />
                                                Request Account Deletion
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            )}



                            {activeTab === 'security' && (
                                <div className="space-y-6 max-w-2xl animate-in fade-in slide-in-from-right-4 duration-300">
                                    <h2 className="text-xl font-medium">Security & Login</h2>
                                    <div className="flex items-center justify-between p-5 rounded-2xl border bg-primary/5 hover:bg-primary/10 transition-colors">
                                        <div>
                                            <p className="font-bold">Two-Factor Authentication</p>
                                            <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                                        </div>
                                        <Badge variant="success">Enabled</Badge>
                                    </div>
                                    <Button variant="outline">Change Password</Button>
                                </div>
                            )}

                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
