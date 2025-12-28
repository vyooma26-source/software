import { User, Mail, Phone, MapPin, CreditCard, Clock, Shield } from 'lucide-react';

export default function ClientProfile() {
    return (
        <div className="p-8 h-full w-full overflow-y-auto flex flex-col theme-client-premium">
            {/* Header */}
            <div className="bg-card rounded-[2.5rem] p-8 border border-white/5 mb-6 flex items-center justify-between">
                <div className="flex items-center space-x-6">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-black text-3xl font-bold">
                        JD
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-white">John Doe</h1>
                        <p className="text-gray-400">Senior Operations Manager • Acme Corp</p>
                    </div>
                </div>
                <button className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors">
                    Edit Profile
                </button>
            </div>

            <div className="grid grid-cols-12 gap-6 flex-1">
                {/* Left Col: Contact & Personal Info */}
                <div className="col-span-8 flex flex-col gap-6">
                    <div className="bg-card rounded-[2.5rem] p-8 border border-white/5 flex-1">
                        <h3 className="text-xl font-medium text-white mb-6">Personal and Contact Information</h3>
                        <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-white/5 rounded-xl text-white">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <label className="text-xs text-gray-500 uppercase tracking-wider">Email Address</label>
                                    <p className="text-white font-medium">john.doe@acmecorp.com</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-white/5 rounded-xl text-white">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <label className="text-xs text-gray-500 uppercase tracking-wider">Phone Number</label>
                                    <p className="text-white font-medium">+1 (555) 123-4567</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-white/5 rounded-xl text-white">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <label className="text-xs text-gray-500 uppercase tracking-wider">Location</label>
                                    <p className="text-white font-medium">San Francisco, CA</p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-white/5 rounded-xl text-white">
                                    <Shield size={20} />
                                </div>
                                <div>
                                    <label className="text-xs text-gray-500 uppercase tracking-wider">Account Role</label>
                                    <p className="text-white font-medium">Administrator</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Col: Subscription & Status */}
                <div className="col-span-4 flex flex-col gap-6">
                    <div className="bg-secondary rounded-[2.5rem] p-8 text-secondary-foreground relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <CreditCard size={100} />
                        </div>
                        <h3 className="text-lg font-medium mb-1">Current Plan</h3>
                        <div className="text-4xl font-bold mb-4">Enterprise</div>
                        <div className="space-y-2 mb-8">
                            <div className="flex justify-between text-sm opacity-80">
                                <span>Renews on</span>
                                <span>Dec 31, 2025</span>
                            </div>
                            <div className="w-full h-1 bg-black/20 rounded-full overflow-hidden">
                                <div className="h-full w-[80%] bg-white/50" />
                            </div>
                        </div>
                        <button className="w-full py-3 bg-black/20 hover:bg-black/30 rounded-xl transition-colors font-medium">
                            Manage Subscription
                        </button>
                    </div>

                    <div className="bg-card rounded-[2.5rem] p-6 border border-white/5 flex-1">
                        <h3 className="text-white font-medium mb-4 flex items-center gap-2">
                            <Clock size={16} /> Recent Activity
                        </h3>
                        <div className="space-y-4">
                            {[1, 2, 3].map((_, i) => (
                                <div key={i} className="flex gap-3 items-center">
                                    <div className="w-2 h-2 rounded-full bg-green-500" />
                                    <div>
                                        <p className="text-sm text-white">Logged in from New Device</p>
                                        <p className="text-xs text-gray-500">2 hours ago</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
