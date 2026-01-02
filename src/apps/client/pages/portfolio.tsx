import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, MapPin, Battery, Calendar } from 'lucide-react';
import { MOCK_ASSETS } from '@/core/data/mock-assets';
import { PageHeader } from '@/core/components/page-header';
import { Button } from '@/core/ui/button';
import { Card, CardContent } from '@/core/ui/card';
import { Badge } from '@/core/ui/badge';
import { EmptyState } from '@/core/components/empty-state';

export default function ClientPortfolio() {
    const navigate = useNavigate();
    const assets = MOCK_ASSETS; // Normally this would be fetched

    return (
        <div className="h-full w-full flex flex-col gap-4">
            <PageHeader
                title="Asset Portfolio"
                description="Manage and monitor your solar assets"
                actions={
                    <Button onClick={() => navigate('/client/booking')}>
                        Add New Asset
                    </Button>
                }
            />

            {/* Asset Grid */}
            {assets.length === 0 ? (
                <EmptyState title="No assets found" description="You haven't added any solar sites yet." />
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-6">
                    {assets.map((asset) => (
                        <Card
                            key={asset.id}
                            variant="default"
                            className="group cursor-pointer hover:border-primary/50 transition-all overflow-hidden"
                            onClick={() => navigate(`/client/sites/${asset.id}`)}
                        >
                            {/* Image Placeholder */}
                            <div className="h-48 w-full bg-primary/5 relative overflow-hidden ring-1 ring-inset ring-primary/10">
                                <div className="absolute inset-0 flex items-center justify-center text-primary/5 font-bold text-6xl select-none rotate-[-12deg]">
                                    VYOOMA
                                </div>
                                {/* Status Badge */}
                                <div className="absolute top-4 right-4">
                                    <Badge variant={
                                        asset.status === 'active' ? 'success' :
                                            asset.status === 'maintenance' ? 'warning' : 'destructive'
                                    } className="capitalize shadow-xl backdrop-blur-md">
                                        {asset.status}
                                    </Badge>
                                </div>
                                <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                                    <Button variant="glass" className="bg-white/20 border-white/40">View Insights</Button>
                                </div>
                            </div>

                            <CardContent className="p-4">
                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">{asset.name}</h3>
                                        <div className="flex items-center text-muted-foreground text-xs mt-1">
                                            <MapPin size={12} className="mr-1" />
                                            {asset.location}
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-3 mt-3 py-3 border-t border-border">
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Capacity</p>
                                        <div className="flex items-center mt-1">
                                            <Battery size={14} className="mr-1.5 text-primary" />
                                            <span className="font-bold text-sm">{asset.capacity_mw} MW</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Health</p>
                                        <div className="flex items-center mt-1">
                                            <div className="h-2 w-full bg-primary/10 rounded-full overflow-hidden mr-2">
                                                <div
                                                    className="h-full bg-secondary rounded-full"
                                                    style={{ width: `${asset.health_score}%` }}
                                                />
                                            </div>
                                            <span className="font-bold text-sm text-secondary">{asset.health_score}%</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-primary/5 rounded-lg p-2.5 flex items-center justify-between text-[11px] text-muted-foreground mt-0.5 border border-primary/5">
                                    <div className="flex items-center">
                                        <Calendar size={12} className="mr-1.5 text-primary" />
                                        Last Flight
                                    </div>
                                    <span className="font-medium">{new Date(asset.last_inspection).toLocaleDateString()}</span>
                                </div>
                            </CardContent>
                        </Card>
                    ))}

                    {/* Add New Card (Placeholder style) */}
                    <Card
                        variant="outline"
                        className="flex flex-col items-center justify-center h-[380px] border-dashed cursor-pointer hover:bg-secondary/10 transition-colors group"
                        onClick={() => navigate('/client/booking')}
                    >
                        <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            <ArrowUpRight size={24} />
                        </div>
                        <h3 className="font-medium text-lg">Add New Asset</h3>
                        <p className="text-sm text-muted-foreground mt-1">Register a new site</p>
                    </Card>
                </div>
            )}
        </div>
    );
}
