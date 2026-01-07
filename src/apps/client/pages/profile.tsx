import { Mail, Phone, MapPin, CreditCard, Clock, Shield, Edit2 } from 'lucide-react';
import { MOCK_USER, MOCK_NOTIFICATIONS } from '@/core/data/mock-user';
import { Button } from '@/core/ui/button';
import { Card, CardContent } from '@/core/ui/card';
import { Badge } from '@/core/ui/badge';

export default function ClientProfile() {
    const user = MOCK_USER;

    return (
        <div className="h-full w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                {/* Main Profile Info */}
                <Card className="lg:col-span-8 p-0 overflow-hidden bg-white/95 border-[#d3ccb5]/40 rounded-[1.5rem] shadow-md">
                    <div className="h-32 bg-gradient-to-br from-[#2d4a7c] to-[#1e3557] w-full relative">
                        <div className="absolute top-4 right-4">
                            <Badge className="bg-white/20 backdrop-blur-md border-white/30 text-white font-bold text-[9px]">VIP Enterprise</Badge>
                        </div>
                    </div>
                    <div className="px-8 pb-8 -mt-16 relative z-10">
                        <div className="flex justify-between items-end mb-6">
                            <div className="flex items-end gap-6">
                                <div className="w-28 h-28 bg-white rounded-full p-1.5 border-4 border-[#e5dec9] shadow-lg">
                                    <div className="w-full h-full bg-gradient-to-br from-[#2d4a7c] to-[#1e3557] rounded-full flex items-center justify-center text-3xl font-black text-white">
                                        {user.avatar_initials}
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <h2 className="text-2xl font-black tracking-tight text-[#2a261c]">{user.name}</h2>
                                    <p className="text-[#8c8570] font-bold uppercase tracking-widest text-[10px] flex items-center gap-2">
                                        <Shield size={12} className="text-[#2a261c]" />
                                        {user.role} • {user.company}
                                    </p>
                                </div>
                            </div>
                            <Button variant="outline" className="mb-3 font-bold border-[#d3ccb5] text-[#2a261c] hover:bg-[#f5f3ed]">
                                <Edit2 size={14} className="mr-2" />
                                Edit Account
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <div className="space-y-4">
                                <h3 className="text-base font-black text-[#2a261c] border-b border-[#d3ccb5]/30 pb-2">Contact Information</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 group">
                                        <div className="p-2.5 bg-[#f5f3ed] rounded-lg text-[#2a261c] group-hover:bg-[#e5dec9] transition-colors">
                                            <Mail size={16} />
                                        </div>
                                        <div>
                                            <p className="text-[9px] text-[#8c8570] uppercase tracking-widest font-bold">Email Address</p>
                                            <p className="font-bold text-sm text-[#2a261c]">{user.email}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 group">
                                        <div className="p-2.5 bg-[#f5f3ed] rounded-lg text-[#2a261c] group-hover:bg-[#e5dec9] transition-colors">
                                            <Phone size={16} />
                                        </div>
                                        <div>
                                            <p className="text-[9px] text-[#8c8570] uppercase tracking-widest font-bold">Contact Number</p>
                                            <p className="font-bold text-sm text-[#2a261c]">{user.phone}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-base font-black text-[#2a261c] border-b border-[#d3ccb5]/30 pb-2">Organization</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-[#f5f3ed] rounded-lg text-[#2a261c]">
                                            <MapPin size={16} />
                                        </div>
                                        <div>
                                            <p className="text-[9px] text-[#8c8570] uppercase tracking-widest font-bold">Location</p>
                                            <p className="font-bold text-sm text-[#2a261c]">{user.location}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-[#f5f3ed] rounded-lg text-[#2a261c]">
                                            <Shield size={16} />
                                        </div>
                                        <div>
                                            <p className="text-[9px] text-[#8c8570] uppercase tracking-widest font-bold">Level</p>
                                            <p className="font-bold text-sm text-[#2a261c]">{user.role}</p>
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
                    <Card className="bg-gradient-to-br from-[#2d4a7c] to-[#1e3557] text-white border-none overflow-hidden relative rounded-[1.5rem] shadow-md">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <CreditCard size={80} />
                        </div>
                        <CardContent className="p-6 relative z-10">
                            <h3 className="text-sm font-bold mb-1 opacity-80 uppercase tracking-wider">Current Plan</h3>
                            <div className="text-3xl font-black mb-6">{user.plan.name}</div>

                            <div className="space-y-3 mb-6">
                                <div className="flex justify-between text-xs opacity-80">
                                    <span>Plan Usage</span>
                                    <span>{user.plan.usage_percent}%</span>
                                </div>
                                <div className="w-full h-1 bg-black/20 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-white rounded-full"
                                        style={{ width: `${user.plan.usage_percent}%` }}
                                    />
                                </div>
                                <p className="text-[10px] opacity-60">Renews on {new Date(user.plan.renews_on).toLocaleDateString()}</p>
                            </div>

                            <Button className="w-full bg-white/20 hover:bg-white/30 text-white border-none font-bold">
                                Manage Subscription
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Activity Feed */}
                    <Card className="bg-white/95 border-[#d3ccb5]/40 rounded-[1.5rem] shadow-md">
                        <CardContent className="p-5">
                            <h3 className="font-black text-sm text-[#2a261c] mb-3 flex items-center gap-2">
                                <Clock size={14} /> Recent Activity
                            </h3>
                            <div className="space-y-4">
                                {MOCK_NOTIFICATIONS.slice(0, 3).map((notif) => (
                                    <div key={notif.id} className="flex gap-2.5 relative">
                                        <div className="flex-none mt-1">
                                            <div className="w-2 h-2 rounded-full bg-[#2a261c] ring-4 ring-[#e5dec9]" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold leading-tight mb-1 text-[#2a261c]">{notif.message}</p>
                                            <p className="text-[10px] text-[#8c8570]">{notif.time}</p>
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
