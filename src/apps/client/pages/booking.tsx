import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { PageHeader } from '@/core/components/page-header';
import { Card, CardContent } from '@/core/ui/card';
import { Button } from '@/core/ui/button';
import { Input } from '@/core/ui/input';
import { Select } from '@/core/ui/select';
import { MOCK_ASSETS } from '@/core/data/mock-assets';

export default function ClientBooking() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleNext = () => {
        if (step < 3) setStep(step + 1);
        else handleSubmit();
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
        else navigate(-1);
    };

    const handleSubmit = () => {
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            navigate('/client/dashboard'); // Or success page
        }, 1500);
    };

    return (
        <div className="h-full w-full flex flex-col gap-3 max-w-4xl mx-auto pb-10">
            <Button
                variant="ghost"
                className="self-start pl-0 hover:bg-transparent hover:text-primary"
                onClick={() => navigate(-1)}
            >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
            </Button>

            <PageHeader
                title="New Inspection Booking"
                description="Schedule a drone inspection for your assets"
            />

            {/* Stepper */}
            <div className="flex items-center justify-between mb-4 px-8 relative">
                <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-border -z-10" />
                <div className="absolute top-1/2 left-8 h-0.5 bg-primary transition-all duration-500 -z-10" style={{ width: `${((step - 1) / 2) * (100 - (100 / 3))}%` }} />

                {[1, 2, 3].map((num) => (
                    <div key={num} className="flex flex-col items-center gap-2">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-300 border-4 border-background ${step >= num ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-110' : 'bg-card text-muted-foreground border-border'}`}>
                            {step > num ? <CheckCircle size={22} /> : num}
                        </div>
                        <span className={`text-[10px] uppercase tracking-widest font-bold ${step >= num ? 'text-primary' : 'text-muted-foreground'}`}>
                            {num === 1 ? 'Site' : num === 2 ? 'Schedule' : 'Finish'}
                        </span>
                    </div>
                ))}
            </div>

            <Card className="flex-1">
                <CardContent className="p-8 min-h-[400px]">
                    {step === 1 && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                            <h2 className="text-2xl font-semibold flex items-center gap-3">
                                <MapPin className="text-primary" /> Select Asset
                            </h2>
                            <p className="text-muted-foreground">Choose the solar site you want to inspect.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {MOCK_ASSETS.map((asset) => (
                                    <div
                                        key={asset.id}
                                        className="p-5 rounded-lg border-2 hover:border-primary cursor-pointer transition-all hover:bg-primary/5 active:scale-[0.98] group relative overflow-hidden"
                                    >
                                        <div className="font-bold text-lg">{asset.name}</div>
                                        <div className="text-sm text-muted-foreground flex items-center mt-1">
                                            <MapPin size={14} className="mr-1.5 text-primary" />
                                            {asset.location}
                                        </div>
                                        {/* Selection Indicator */}
                                        <div className="absolute top-4 right-4 w-6 h-6 rounded-full border-2 border-border group-hover:border-primary flex items-center justify-center bg-background">
                                            <div className="w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                            <h2 className="text-2xl font-semibold flex items-center gap-3">
                                <Calendar className="text-primary" /> Select Date & Time
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Preferred Date</label>
                                    <Input type="date" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Preferred Time</label>
                                    <Select>
                                        <option>Morning (08:00 - 12:00)</option>
                                        <option>Afternoon (12:00 - 16:00)</option>
                                    </Select>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Special Instructions</label>
                                <textarea
                                    className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="Enter any specific requirements for the pilot..."
                                />
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 text-center py-8">
                            <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle size={40} />
                            </div>
                            <h2 className="text-2xl font-semibold">Confirm Booking</h2>
                            <p className="text-muted-foreground max-w-md mx-auto">
                                Please review your request. A pilot will be assigned shortly after confirmation.
                            </p>

                            <div className="bg-primary/5 p-8 rounded-lg text-left max-w-md mx-auto space-y-4 mt-6 border border-primary/10">
                                <div className="flex justify-between border-b border-primary/5 pb-2">
                                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Planned Asset</span>
                                    <span className="font-bold text-primary">Nevada Solar One</span>
                                </div>
                                <div className="flex justify-between border-b border-primary/5 pb-2">
                                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Window Date</span>
                                    <span className="font-bold">Jan 15, 2026</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Time Preference</span>
                                    <span className="font-bold">Morning (08:00 - 12:00)</span>
                                </div>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>

            <div className="flex justify-between mt-4">
                <Button variant="outline" onClick={handleBack} disabled={isSubmitting}>
                    Back
                </Button>
                <Button onClick={handleNext} disabled={isSubmitting} isLoading={isSubmitting} className="min-w-[120px]">
                    {step === 3 ? 'Confirm Booking' : 'Next Step'}
                    {step < 3 && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
            </div>
        </div>
    );
}
