import { Lock, Globe, LogOut, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/core/ui/button';
import { Card, CardContent } from '@/core/ui/card';
import { Select } from '@/core/ui/select';
import { Badge } from '@/core/ui/badge';

type SettingsTab = 'general' | 'security';

export default function ClientSettings() {
    const [activeTab, setActiveTab] = useState<SettingsTab>('general');

    return (
        <div className="h-full w-full flex flex-col lg:flex-row gap-6">
            {/* Sidebar Navigation */}
            <div className="w-full lg:w-56 flex flex-col space-y-2">
                <Button
                    variant={activeTab === 'general' ? 'default' : 'ghost'}
                    className={`justify-start h-11 font-bold ${activeTab === 'general' ? 'bg-[#2a261c] text-white' : 'text-[#8c8570] hover:bg-[#f5f3ed]'}`}
                    onClick={() => setActiveTab('general')}
                >
                    <Globe size={16} className="mr-3" />
                    General
                </Button>
                <Button
                    variant={activeTab === 'security' ? 'default' : 'ghost'}
                    className={`justify-start h-11 font-bold ${activeTab === 'security' ? 'bg-[#2a261c] text-white' : 'text-[#8c8570] hover:bg-[#f5f3ed]'}`}
                    onClick={() => setActiveTab('security')}
                >
                    <Lock size={16} className="mr-3" />
                    Security
                </Button>
            </div>

            {/* Content Area */}
            <div className="flex-1">
                <Card className="bg-white/95 border-[#d3ccb5]/40 rounded-[1.5rem] shadow-md h-full">
                    <CardContent className="p-6 space-y-4">

                        {activeTab === 'general' && (
                            <div className="space-y-6 max-w-2xl animate-in fade-in slide-in-from-right-4 duration-300">
                                <div>
                                    <h2 className="text-xl font-black mb-4 text-[#2a261c]">Regional & Display</h2>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between p-4 rounded-[1rem] border border-[#d3ccb5]/40 bg-[#f5f3ed] hover:bg-[#e5dec9] transition-colors">
                                            <div className="flex items-center space-x-3">
                                                <div className="p-2.5 bg-white rounded-lg shadow-sm border border-[#d3ccb5]/30 text-[#2a261c]">
                                                    <Globe size={18} />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-[#2a261c]">System Language</p>
                                                    <p className="text-xs text-[#8c8570]">Select your preferred localization</p>
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

                                <div className="pt-6 border-t border-[#d3ccb5]/30">
                                    <h2 className="text-xl font-black mb-4 text-[#2a261c]">Account Actions</h2>
                                    <div className="space-y-3">
                                        <Button variant="outline" className="w-full justify-start h-11 text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200 font-bold">
                                            <LogOut size={16} className="mr-3" />
                                            Sign Out of All Devices
                                        </Button>
                                        <Button variant="ghost" className="w-full justify-start h-11 text-[#8c8570] hover:text-red-600 font-bold">
                                            <Trash2 size={16} className="mr-3" />
                                            Request Account Deletion
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'security' && (
                            <div className="space-y-6 max-w-2xl animate-in fade-in slide-in-from-right-4 duration-300">
                                <h2 className="text-xl font-black text-[#2a261c]">Security & Login</h2>
                                <div className="flex items-center justify-between p-4 rounded-[1rem] border border-[#d3ccb5]/40 bg-[#f5f3ed] hover:bg-[#e5dec9] transition-colors">
                                    <div>
                                        <p className="font-bold text-[#2a261c]">Two-Factor Authentication</p>
                                        <p className="text-sm text-[#8c8570]">Add an extra layer of security</p>
                                    </div>
                                    <Badge variant="success" className="text-[9px]">Enabled</Badge>
                                </div>
                                <Button variant="outline" className="border-[#d3ccb5] text-[#2a261c] hover:bg-[#f5f3ed] font-bold">Change Password</Button>
                            </div>
                        )}

                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
