import { Bell, Shield, Clock } from 'lucide-react';
import { MOCK_NOTIFICATIONS } from '@/core/data/mock-user';
import { PageHeader } from '@/core/components/page-header';
import { Card, CardContent } from '@/core/ui/card';
import { Button } from '@/core/ui/button';

export default function ClientNotifications() {
    return (
        <div className="h-full w-full flex flex-col gap-4">
            <PageHeader
                title="Notifications"
                description="Manage your alert preferences and view recent activity"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 flex-1 min-h-0">
                {/* Notification Settings */}
                <div className="lg:col-span-4 space-y-4">
                    <Card>
                        <CardContent className="p-6">
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <Bell size={18} className="text-primary" />
                                Preferences
                            </h3>
                            <div className="space-y-3">
                                {['Email Digests', 'Real-time Alerts', 'Mission Updates', 'Marketing'].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 rounded-xl border bg-primary/5">
                                        <span className="text-sm font-bold">{item}</span>
                                        <div className="w-10 h-5 rounded-full bg-primary p-1 cursor-pointer">
                                            <div className="w-3 h-3 rounded-full bg-white translate-x-5" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Button className="w-full mt-6">Save Preferences</Button>
                        </CardContent>
                    </Card>

                    <Card className="bg-primary/5 border-dashed border-primary/20">
                        <CardContent className="p-6 text-center">
                            <Shield className="mx-auto mb-3 text-primary opacity-50" size={32} />
                            <h4 className="font-bold text-sm">Security Alerts</h4>
                            <p className="text-xs text-muted-foreground mt-1">High-priority security notifications cannot be disabled.</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Notification History */}
                <Card className="lg:col-span-8 flex flex-col min-h-0">
                    <CardContent className="p-6 flex flex-col h-full">
                        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                            <Clock size={18} className="text-primary" />
                            Recent Activity
                        </h3>

                        <div className="flex-1 overflow-y-auto space-y-3 pr-2">
                            {MOCK_NOTIFICATIONS.map((notif) => (
                                <div key={notif.id} className="p-4 rounded-2xl border bg-card hover:bg-primary/5 transition-colors group relative">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                            <Bell size={20} />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-start mb-1">
                                                <p className="font-bold text-sm leading-tight">{notif.message}</p>
                                                <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-tighter">{notif.time}</span>
                                            </div>
                                            <p className="text-xs text-muted-foreground line-clamp-2">Detailed inspection data for {notif.message.toLowerCase()} is now available for review in your reports dashboard.</p>
                                        </div>
                                    </div>
                                    {/* Unread Indicator */}
                                    <div className="absolute top-4 right-4 w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform" />
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
