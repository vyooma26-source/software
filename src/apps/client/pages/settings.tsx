import { Bell, Lock, Globe, Moon, ChevronRight, ToggleRight, ToggleLeft } from 'lucide-react';
import { useState } from 'react';

export default function ClientSettings() {
    return (
        <div className="p-8 h-full w-full overflow-hidden flex flex-col theme-client-premium">
            <h1 className="text-3xl font-bold text-white mb-8">Settings</h1>

            <div className="flex gap-8 h-full">
                {/* Sidebar Navigation */}
                <div className="w-64 flex flex-col space-y-2">
                    <button className="flex items-center space-x-3 px-6 py-4 bg-white text-black rounded-2xl font-medium">
                        <Globe size={20} />
                        <span>General</span>
                    </button>
                    <button className="flex items-center space-x-3 px-6 py-4 text-gray-400 hover:text-white hover:bg-white/5 rounded-2xl transition-all">
                        <Bell size={20} />
                        <span>Notifications</span>
                    </button>
                    <button className="flex items-center space-x-3 px-6 py-4 text-gray-400 hover:text-white hover:bg-white/5 rounded-2xl transition-all">
                        <Lock size={20} />
                        <span>Security</span>
                    </button>
                </div>

                {/* Content Area */}
                <div className="flex-1 bg-card rounded-[2.5rem] p-8 border border-white/5 overflow-y-auto">
                    {/* General Settings Section */}

                    <div className="space-y-8 max-w-2xl">
                        <div>
                            <h2 className="text-xl font-medium text-white mb-6">Preferences</h2>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
                                    <div className="flex items-center space-x-4">
                                        <div className="p-2 bg-secondary rounded-lg">
                                            <Moon size={20} className="text-white" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium">Dark Mode</p>
                                            <p className="text-sm text-gray-500">Use high contrast dark theme</p>
                                        </div>
                                    </div>
                                    <ToggleRight size={32} className="text-white cursor-pointer" />
                                </div>

                                <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5">
                                    <div className="flex items-center space-x-4">
                                        <div className="p-2 bg-secondary rounded-lg">
                                            <Globe size={20} className="text-white" />
                                        </div>
                                        <div>
                                            <p className="text-white font-medium">Language</p>
                                            <p className="text-sm text-gray-500">English (US)</p>
                                        </div>
                                    </div>
                                    <ChevronRight className="text-gray-500" />
                                </div>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-white/10">
                            <h2 className="text-xl font-medium text-white mb-6">Account Actions</h2>
                            <div className="space-y-4">
                                <button className="w-full text-left p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-500 hover:bg-red-500/20 transition-colors">
                                    <p className="font-medium">Sign Out</p>
                                </button>
                                <button className="w-full text-left p-4 rounded-2xl hover:bg-white/5 transition-colors text-gray-400 hover:text-white">
                                    <p>Request Account Deletion</p>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
