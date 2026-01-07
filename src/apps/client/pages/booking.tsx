import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
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
        setTimeout(() => {
            setIsSubmitting(false);
            navigate('/client/dashboard');
        }, 1500);
    };

    return (
        <div className="h-full w-full flex flex-col gap-3 max-w-4xl mx-auto">
            <Button
                variant="ghost"
                className="self-start pl-0 hover:bg-transparent text-[#8c8570] hover:text-[#2a261c] font-bold"
                onClick={() => navigate(-1)}
            >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
            </Button>

            {/* Stepper */}
            <div className="flex items-center justify-between mb-4 px-8 relative">
                <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-[#d3ccb5] -z-10" />
                <div className="absolute top-1/2 left-8 h-0.5 bg-[#2a261c] transition-all duration-500 -z-10" style={{ width: `${((step - 1) / 2) * (100 - (100 / 3))}%` }} />

                {[1, 2, 3].map((num) => (
                    <div key={num} className="flex flex-col items-center gap-2">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black transition-all duration-300 border-4 border-[#e5dec9] ${step >= num ? 'bg-[#2a261c] text-white shadow-lg scale-110' : 'bg-white text-[#8c8570]'}`}>
                            {step > num ? <CheckCircle size={20} /> : num}
                        </div>
                        <span className={`text-[9px] uppercase tracking-widest font-black ${step >= num ? 'text-[#2a261c]' : 'text-[#8c8570]'}`}>
                            {num === 1 ? 'Site' : num === 2 ? 'Schedule' : 'Finish'}
                        </span>
                    </div>
                ))}
            </div>

            <Card className="flex-1 bg-white/95 border-[#d3ccb5]/40 rounded-[1.5rem] shadow-md">
                <CardContent className="p-6 min-h-[350px]">
                    {step === 1 && (
                        <div className="space-y-5 animate-in fade-in slide-in-from-right-4">
                            <h2 className="text-xl font-black flex items-center gap-3 text-[#2a261c]">
                                <MapPin className="text-[#2a261c]" size={20} /> Select Asset
                            </h2>
                            <p className="text-[#8c8570]">Choose the solar site you want to inspect.</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {MOCK_ASSETS.map((asset) => (
                                    <div
                                        key={asset.id}
                                        className="p-4 rounded-[1rem] border-2 border-[#d3ccb5]/40 hover:border-[#2a261c] cursor-pointer transition-all hover:bg-[#f5f3ed] active:scale-[0.98] group relative overflow-hidden"
                                    >
                                        <div className="font-black text-base text-[#2a261c]">{asset.name}</div>
                                        <div className="text-sm text-[#8c8570] flex items-center mt-1">
                                            <MapPin size={13} className="mr-1.5 text-[#2a261c]" />
                                            {asset.location}
                                        </div>
                                        <div className="absolute top-3 right-3 w-5 h-5 rounded-full border-2 border-[#d3ccb5] group-hover:border-[#2a261c] flex items-center justify-center bg-white">
                                            <div className="w-2.5 h-2.5 bg-[#2a261c] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="space-y-5 animate-in fade-in slide-in-from-right-4">
                            <h2 className="text-xl font-black flex items-center gap-3 text-[#2a261c]">
                                <Calendar className="text-[#2a261c]" size={20} /> Select Date & Time
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[#2a261c]">Preferred Date</label>
                                    <Input type="date" className="border-[#d3ccb5]" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[#2a261c]">Preferred Time</label>
                                    <Select>
                                        <option>Morning (08:00 - 12:00)</option>
                                        <option>Afternoon (12:00 - 16:00)</option>
                                    </Select>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-[#2a261c]">Special Instructions</label>
                                <textarea
                                    className="w-full min-h-[90px] rounded-lg border border-[#d3ccb5] bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-[#8c8570] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2a261c] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="Enter any specific requirements for the pilot..."
                                />
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="space-y-5 animate-in fade-in slide-in-from-right-4 text-center py-6">
                            <div className="w-16 h-16 bg-[#f5f3ed] text-[#2a261c] rounded-full flex items-center justify-center mx-auto mb-3">
                                <CheckCircle size={32} />
                            </div>
                            <h2 className="text-xl font-black text-[#2a261c]">Confirm Booking</h2>
                            <p className="text-[#8c8570] max-w-md mx-auto">
                                Please review your request. A pilot will be assigned shortly after confirmation.
                            </p>

                            <div className="bg-[#f5f3ed] p-6 rounded-[1rem] text-left max-w-md mx-auto space-y-3 mt-5 border border-[#d3ccb5]/40">
                                <div className="flex justify-between border-b border-[#d3ccb5]/30 pb-2">
                                    <span className="text-[9px] uppercase tracking-widest text-[#8c8570] font-black">Planned Asset</span>
                                    <span className="font-black text-[#2a261c]">Nevada Solar One</span>
                                </div>
                                <div className="flex justify-between border-b border-[#d3ccb5]/30 pb-2">
                                    <span className="text-[9px] uppercase tracking-widest text-[#8c8570] font-black">Window Date</span>
                                    <span className="font-black text-[#2a261c]">Jan 15, 2026</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-[9px] uppercase tracking-widest text-[#8c8570] font-black">Time Preference</span>
                                    <span className="font-black text-[#2a261c]">Morning (08:00 - 12:00)</span>
                                </div>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>

            <div className="flex justify-between mt-3">
                <Button variant="outline" onClick={handleBack} disabled={isSubmitting} className="border-[#d3ccb5] text-[#2a261c] hover:bg-[#f5f3ed] font-bold">
                    Back
                </Button>
                <Button onClick={handleNext} disabled={isSubmitting} isLoading={isSubmitting} className="min-w-[120px] bg-[#2a261c] hover:bg-[#1a2332] text-white font-bold">
                    {step === 3 ? 'Confirm Booking' : 'Next Step'}
                    {step < 3 && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
            </div>
        </div>
    );
}
