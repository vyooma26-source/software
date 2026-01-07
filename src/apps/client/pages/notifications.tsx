import { Bell, Shield, Clock } from 'lucide-react';
import { MOCK_NOTIFICATIONS } from '@/core/data/mock-user';
import { Card, CardContent } from '@/core/ui/card';
import { Button } from '@/core/ui/button';

export default function ClientNotifications() {
    return (
        <div className="h-full w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-full">
                {/* Notification Settings */}
                <div className="lg:col-span-4 space-y-4">
                    <Card className="bg-white/95 border-[#d3ccb5]/40 rounded-[1.5rem] shadow-md">
                        <CardContent className="p-5">
                            <h3 className="text-base font-black mb-4 flex items-center gap-2 text-[#2a261c]">
                                <Bell size={16} />
                                Preferences
                            </h3>
                            <div className="space-y-2.5">
                                {['Email Digests', 'Real-time Alerts', 'Mission Updates', 'Marketing'].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-[#d3ccb5]/40 bg-[#f5f3ed]">
                                        <span className="text-xs font-bold text-[#2a261c]">{item}</span>
                                        <div className="w-10 h-5 rounded-full bg-gradient-to-r from-[#2d4a7c] to-[#1e3557] p-1 cursor-pointer">
                                            <div className="w-3 h-3 rounded-full bg-white translate-x-5" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Button className="w-full mt-5 bg-gradient-to-r from-[#2d4a7c] to-[#1e3557] hover:from-[#1e3557] hover:to-[#2d4a7c] text-white font-bold">Save Preferences</Button>
                        </CardContent>
                    </Card>

                    <Card className="bg-[#f5f3ed] border-dashed border-2 border-[#d3ccb5] rounded-[1.5rem]">
                        <CardContent className="p-5 text-center">
                            <Shield className="mx-auto mb-2 text-[#2a261c] opacity-40" size={28} />
                            <h4 className="font-black text-xs text-[#2a261c]">Security Alerts</h4>
                            <p className="text-[10px] text-[#8c8570] mt-1">High-priority security notifications cannot be disabled.</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Notification History */}
                <Card className="lg:col-span-8 flex flex-col bg-white/95 border-[#d3ccb5]/40 rounded-[1.5rem] shadow-md">
                    <CardContent className="p-5 flex flex-col h-full">
                        <h3 className="text-base font-black mb-5 flex items-center gap-2 text-[#2a261c]">
                            <Clock size={16} />
                            Recent Activity
                        </h3>

                        <div className="flex-1 overflow-y-auto space-y-3 pr-2">
                            {MOCK_NOTIFICATIONS.map((notif) => (
                                <div key={notif.id} className="p-4 rounded-[1rem] border border-[#d3ccb5]/40 bg-[#f5f3ed] hover:bg-[#e5dec9] transition-colors group relative">
                                    <div className="flex items-start gap-3">
                                        <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#2a261c] group-hover:bg-gradient-to-br group-hover:from-[#2d4a7c] group-hover:to-[#1e3557] group-hover:text-white transition-all">
                                            <Bell size={16} />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start mb-1">
                                                <p className="font-bold text-sm leading-tight text-[#2a261c]">{notif.message}</p>
                                                <span className="text-[9px] text-[#8c8570] font-bold uppercase tracking-wider">{notif.time}</span>
                                            </div>
                                            <p className="text-xs text-[#8c8570] line-clamp-2">Detailed inspection data for {notif.message.toLowerCase()} is now available for review in your reports dashboard.</p>
                                        </div>
                                    </div>
                                    {/* Unread Indicator */}
                                    <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-br from-[#2d4a7c] to-[#1e3557] rounded-full group-hover:scale-125 transition-transform" />
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
