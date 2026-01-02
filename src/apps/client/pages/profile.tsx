import { Mail, Phone, MapPin, CreditCard, Clock, Shield, Edit2 } from 'lucide-react';
import { MOCK_USER, MOCK_NOTIFICATIONS } from '@/core/data/mock-user';
import { Button } from '@/core/ui/button';
import { Card, CardContent } from '@/core/ui/card';
import { Badge } from '@/core/ui/badge';
import { PageHeader } from '@/core/components/page-header';

export default function ClientProfile() {
    const user = MOCK_USER;

    return (
        <div className="h-full w-full flex flex-col gap-3">
            <PageHeader
                title="My Profile"
                description="Manage your account details and preferences"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 pb-6">
                {/* Main Profile Info */}
                <Card className="lg:col-span-8 p-0 overflow-hidden border-border transition-all">
                    <div className="h-40 bg-primary/10 w-full relative">
                        <div className="absolute top-6 right-6">
                            <Badge variant="glass" className="bg-primary/20 backdrop-blur-md border-primary/20 text-primary font-bold">VIP Enterprise</Badge>
                        </div>
                    </div>
                    <div className="px-10 pb-10 -mt-16">
                        <div className="flex justify-between items-end mb-6">
                            <div className="flex items-end gap-8">
                                <div className="w-32 h-32 bg-card rounded-full p-1.5 border-4 border-background shadow-xl">
                                    <div className="w-full h-full bg-secondary rounded-full flex items-center justify-center text-4xl font-black text-white">
                                        {user.avatar_initials}
                                    </div>
                                </div>
                                <div className="mb-4">
                                    <h2 className="text-3xl font-black tracking-tight">{user.name}</h2>
                                    <p className="text-muted-foreground font-medium uppercase tracking-widest text-xs flex items-center gap-2">
                                        <Shield size={14} className="text-secondary" />
                                        {user.role} • {user.company}
                                    </p>
                                </div>
                            </div>
                            <Button variant="outline" className="mb-4 font-bold border-primary/20 text-primary hover:bg-primary/5">
                                <Edit2 size={16} className="mr-2" />
                                Edit Account
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                            <div className="space-y-6">
                                <h3 className="text-lg font-medium border-b border-border/50 pb-2">Contact Information</h3>
                                <div className="space-y-4">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4 group">
                                            <div className="p-3 bg-primary/5 rounded-xl text-primary group-hover:bg-primary/10 transition-colors">
                                                <Mail size={18} />
                                            </div>
                                            <div>
                                                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Email Address</p>
                                                <p className="font-bold text-sm">{user.email}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4 group">
                                            <div className="p-3 bg-primary/5 rounded-xl text-primary group-hover:bg-primary/10 transition-colors">
                                                <Phone size={18} />
                                            </div>
                                            <div>
                                                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">Contact Number</p>
                                                <p className="font-bold text-sm">{user.phone}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-lg font-medium border-b border-border/50 pb-2">Organization</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 bg-secondary/50 rounded-lg">
                                            <MapPin size={18} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground uppercase tracking-wider">Location</p>
                                            <p className="font-medium">{user.location}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 bg-secondary/50 rounded-lg">
                                            <Shield size={18} />
                                        </div>
                                        <div>
                                            <p className="text-xs text-muted-foreground uppercase tracking-wider">Level</p>
                                            <p className="font-medium">{user.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Sidebar Column */}
                <div className="lg:col-span-4 flex flex-col gap-4">
                    {/* Subscription Card */}
                    <Card variant="default" className="bg-primary text-primary-foreground border-none overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <CreditCard size={100} />
                        </div>
                        <CardContent className="p-8 relative z-10">
                            <h3 className="text-lg font-medium mb-1 opacity-80">Current Plan</h3>
                            <div className="text-4xl font-bold mb-6">{user.plan.name}</div>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-sm opacity-80">
                                    <span>Plan Usage</span>
                                    <span>{user.plan.usage_percent}%</span>
                                </div>
                                <div className="w-full h-1 bg-black/20 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-white rounded-full"
                                        style={{ width: `${user.plan.usage_percent}%` }}
                                    />
                                </div>
                                <p className="text-xs opacity-60">Renews on {new Date(user.plan.renews_on).toLocaleDateString()}</p>
                            </div>

                            <Button variant="secondary" className="w-full bg-white/20 hover:bg-white/30 text-white border-none">
                                Manage Subscription
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Activity Feed */}
                    <Card>
                        <CardContent className="p-6">
                            <h3 className="font-medium mb-4 flex items-center gap-2">
                                <Clock size={16} /> Recent Activity
                            </h3>
                            <div className="space-y-6">
                                {MOCK_NOTIFICATIONS.map((notif) => (
                                    <div key={notif.id} className="flex gap-3 relative">
                                        <div className="flex-none mt-1.5">
                                            <div className="w-2 h-2 rounded-full bg-primary ring-4 ring-primary/20" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium leading-none mb-1">{notif.message}</p>
                                            <p className="text-xs text-muted-foreground">{notif.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
