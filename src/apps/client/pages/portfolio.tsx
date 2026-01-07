import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Battery, Calendar, Plus } from 'lucide-react';
import { MOCK_ASSETS } from '@/core/data/mock-assets';
import { Button } from '@/core/ui/button';
import { Card, CardContent } from '@/core/ui/card';
import { Badge } from '@/core/ui/badge';
import { EmptyState } from '@/core/components/empty-state';
import { GridSkeleton } from '@/core/components/skeletons';

export default function ClientPortfolio() {
    const navigate = useNavigate();
    const assets = MOCK_ASSETS;
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 800);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <GridSkeleton />;
    }

    return (
        <div className="h-full w-full">
            {/* Asset Grid */}
            {assets.length === 0 ? (
                <EmptyState title="No assets found" description="You haven't added any solar sites yet." />
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-4">
                    {assets.map((asset) => (
                        <Card
                            key={asset.id}
                            variant="default"
                            className="group cursor-pointer bg-white/95 border-[#d3ccb5]/40 hover:bg-white shadow-md hover:shadow-lg hover:translate-y-[-2px] transition-all overflow-hidden rounded-[1.5rem]"
                            onClick={() => navigate(`/client/sites/${asset.id}`)}
                        >
                            {/* Image Placeholder */}
                            <div className="h-40 w-full bg-[#f5f3ed] relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center text-[#d3ccb5]/20 font-bold text-5xl select-none">
                                    VYOOMA
                                </div>
                                {/* Status Badge */}
                                <div className="absolute top-3 right-3">
                                    <Badge variant={
                                        asset.status === 'active' ? 'success' :
                                            asset.status === 'maintenance' ? 'warning' : 'destructive'
                                    } className="capitalize shadow-lg text-[9px]">
                                        {asset.status}
                                    </Badge>
                                </div>
                                <div className="absolute inset-0 bg-[#2d3e50]/30 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                                    <Button variant="ghost" className="bg-white/90 border-[#d3ccb5] text-[#2a261c] font-bold hover:bg-white">View Details</Button>
                                </div>
                            </div>

                            <CardContent className="p-4">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="font-black text-base leading-tight text-[#2a261c] group-hover:text-[#1a2332] transition-colors">{asset.name}</h3>
                                        <div className="flex items-center text-[#8c8570] text-xs mt-1">
                                            <MapPin size={12} className="mr-1" />
                                            {asset.location}
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3 mt-3 py-3 border-t border-[#d3ccb5]/30">
                                    <div>
                                        <p className="text-[9px] uppercase tracking-widest text-[#8c8570] font-bold">Capacity</p>
                                        <div className="flex items-center mt-1">
                                            <Battery size={13} className="mr-1.5 text-[#2a261c]" />
                                            <span className="font-black text-sm text-[#2a261c]">{asset.capacity_mw} MW</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-[9px] uppercase tracking-widest text-[#8c8570] font-bold">Health</p>
                                        <div className="flex items-center mt-1">
                                            <div className="h-2 w-full bg-[#e5dec9] rounded-full overflow-hidden mr-2">
                                                <div
                                                    className="h-full bg-green-600 rounded-full"
                                                    style={{ width: `${asset.health_score}%` }}
                                                />
                                            </div>
                                            <span className="font-black text-sm text-green-600">{asset.health_score}%</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-[#f5f3ed] rounded-lg p-2.5 flex items-center justify-between text-[10px] text-[#8c8570] mt-2 border border-[#d3ccb5]/20">
                                    <div className="flex items-center">
                                        <Calendar size={12} className="mr-1.5 text-[#2a261c]" />
                                        Last Inspection
                                    </div>
                                    <span className="font-bold text-[#2a261c]">{new Date(asset.last_inspection).toLocaleDateString()}</span>
                                </div>
                            </CardContent>
                        </Card>
                    ))}

                    {/* Add New Asset Hero CTA */}
                    <Button
                        variant="secondary"
                        className="flex flex-col items-center justify-center h-auto py-12 border-dashed border-2 border-[#d3ccb5] bg-[#f5f3ed] hover:bg-[#e5dec9] transition-all group rounded-[1.5rem] shadow-md hover:shadow-lg hover:translate-y-[-2px]"
                        onClick={() => navigate('/client/booking')}
                    >
                        <div className="w-14 h-14 rounded-full bg-[#2a261c] flex items-center justify-center mb-4 group-hover:scale-110 transition-all shadow-lg text-white">
                            <Plus size={28} />
                        </div>
                        <h3 className="text-lg font-black text-[#2a261c] mb-1">Add New Asset</h3>
                        <p className="text-[9px] text-[#8c8570] uppercase tracking-widest font-black">Register a new site</p>
                    </Button>
                </div>
            )}
        </div>
    );
}
