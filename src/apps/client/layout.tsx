import { useState, useRef, useLayoutEffect } from 'react';
import { Outlet, useLocation, Navigate, useNavigate } from 'react-router-dom';
import { ClientSidebar } from './components/sidebar';
import { ErrorBoundary } from '@/core/components/error-boundary';
import { Plane, FileText, TrendingUp } from 'lucide-react';
import { Button } from '@/core/ui/button';

// --- GEOMETRIC CONSTANTS ---
const R = 56.5; // 3.5rem corner radius + 0.5px overdraw
const NOTCH_WIDTH = 360; // Top-right notch width  
const NOTCH_DEPTH = 90; // Top-right step depth
const SVG_BLEED = 1; // 1px bleed on all sides

// --- SIMPLIFIED PATH GENERATOR ---
const generateMachinedPath = (w: number, h: number): string => {
    if (w < 300 || h < 200) return "";

    const notchX = w - NOTCH_WIDTH;

    return [
        `M 0,${R}`,
        `Q 0,0 ${R},0`,
        `L ${notchX - R},0`,
        `Q ${notchX},0 ${notchX},${R}`,
        `L ${notchX},${NOTCH_DEPTH - R}`,
        `Q ${notchX},${NOTCH_DEPTH} ${notchX + R},${NOTCH_DEPTH}`,
        `L ${w - R},${NOTCH_DEPTH}`,
        `Q ${w},${NOTCH_DEPTH} ${w},${NOTCH_DEPTH + R}`,
        `L ${w},${h - R}`,
        `Q ${w},${h} ${w - R},${h}`,
        `L ${R},${h}`,
        `Q 0,${h} 0,${h - R}`,
        `Z`
    ].join(" ");
};

// Helper to get page title based on route
const getPageTitle = (pathname: string): { title: string; subtitle: string } => {
    if (pathname.includes('/dashboard')) return { title: 'Dashboard', subtitle: 'Plant Health Monitoring' };
    if (pathname.includes('/portfolio')) return { title: 'Portfolio', subtitle: 'Solar Plant Overview' };
    if (pathname.includes('/reports')) return { title: 'Reports', subtitle: 'Inspection Results' };
    if (pathname.includes('/booking')) return { title: 'Book Inspection', subtitle: 'Schedule New Mission' };
    if (pathname.includes('/profile')) return { title: 'Profile', subtitle: 'Account Settings' };
    if (pathname.includes('/settings')) return { title: 'Settings', subtitle: 'System Configuration' };
    if (pathname.includes('/notifications')) return { title: 'Notifications', subtitle: 'Activity Feed' };
    if (pathname.includes('/sites')) return { title: 'Site Details', subtitle: 'Plant Analysis' };
    return { title: 'Dashboard', subtitle: 'Plant Health Monitoring' };
};

export default function ClientLayout() {
    const location = useLocation();
    const navigate = useNavigate();


    const containerRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        if (!containerRef.current) return;

        const updateDimensions = () => {
            if (containerRef.current) {
                setDimensions({
                    width: containerRef.current.offsetWidth,
                    height: containerRef.current.offsetHeight
                });
            }
        };

        updateDimensions();

        const resizeObserver = new ResizeObserver(updateDimensions);
        resizeObserver.observe(containerRef.current);

        return () => resizeObserver.disconnect();
    }, []);

    if (!location.pathname.startsWith('/client')) {
        return <Navigate to="/client/dashboard" replace />;
    }

    const pathData = dimensions.width > 0 ? generateMachinedPath(dimensions.width, dimensions.height) : "";
    const { title, subtitle } = getPageTitle(location.pathname);

    return (
        <div className="theme-client-premium bg-[#050505] text-foreground h-screen max-h-screen flex flex-col md:flex-row p-0 md:p-4 gap-0 md:gap-4 overflow-hidden">
            {/* Sidebar */}
            <div className="hidden md:block h-full z-10 w-20 shrink-0">
                <ClientSidebar />
            </div>

            {/* MAIN CONTAINER */}
            <div ref={containerRef} className="flex-1 relative h-full w-full isolate">

                {/* SVG BACKGROUND */}
                <svg
                    width="100%"
                    height="100%"
                    viewBox={`${-SVG_BLEED} ${-SVG_BLEED} ${dimensions.width + SVG_BLEED * 2} ${dimensions.height + SVG_BLEED * 2}`}
                    className="absolute z-0 pointer-events-none"
                    style={{
                        filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))',
                        shapeRendering: 'geometricPrecision',
                        left: `-${SVG_BLEED}px`,
                        top: `-${SVG_BLEED}px`,
                        width: `calc(100% + ${SVG_BLEED * 2}px)`,
                        height: `calc(100% + ${SVG_BLEED * 2}px)`
                    }}
                >
                    <defs>
                        <filter id="notchDepth" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                            <feOffset dx="0" dy="2" result="offsetblur" />
                            <feComponentTransfer>
                                <feFuncA type="linear" slope="0.15" />
                            </feComponentTransfer>
                            <feMerge>
                                <feMergeNode />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    <path d={pathData} fill="#e5dec9" />
                </svg>

                {/* NOTCH SLOT CONTAINER - Geometry-driven positioning */}
                <div
                    className="absolute z-50 flex items-center justify-between gap-3"
                    style={{
                        top: 0,
                        left: 0,
                        right: 0,
                        height: `${NOTCH_DEPTH}px`
                    }}
                >
                    {/* LEFT: Page Header */}
                    <div className="flex flex-col justify-center px-8">
                        <h1 className="text-3xl font-black tracking-tight text-[#2a261c]">{title}</h1>
                        <p className="text-xs text-[#8c8570] font-bold uppercase tracking-wider mt-0.5">{subtitle}</p>
                    </div>

                    {/* RIGHT: Action Pills */}
                    <div className="flex items-center gap-3 pr-4">
                        {/* ₹2.4L Pill - Exact surface as Monthly Savings */}
                        <div className="group flex flex-col items-center justify-center bg-white/95 border border-[#d3ccb5]/40 rounded-[1.5rem] p-3 shadow-md hover:shadow-lg w-[90px] h-[60px] transition-all hover:scale-105 cursor-pointer">
                            <div className="flex items-baseline gap-1">
                                <TrendingUp className="w-3 h-3 text-green-600 group-hover:text-green-700 transition-colors" />
                                <span className="text-[10px] font-black text-[#2a261c]">₹2.4L</span>
                            </div>
                            <span className="text-[7px] text-[#8c8570] font-black uppercase tracking-wider">per MW</span>
                        </div>

                        {/* <48hrs Pill - Exact surface as Monthly Savings */}
                        <div className="group flex flex-col items-center justify-center bg-white/95 border border-[#d3ccb5]/40 rounded-[1.5rem] p-3 shadow-md hover:shadow-lg w-[90px] h-[60px] transition-all hover:scale-105 cursor-pointer" onClick={() => navigate('/client/reports')}>
                            <div className="flex items-baseline gap-1">
                                <FileText className="w-3 h-3 text-blue-600 group-hover:text-blue-700 transition-colors" />
                                <span className="text-[10px] font-black text-[#2a261c]">&lt;48hrs</span>
                            </div>
                            <span className="text-[7px] text-[#8c8570] font-black uppercase tracking-wider">Reports</span>
                        </div>

                        <Button
                            onClick={() => navigate('/client/booking')}
                            className="h-[60px] w-[110px] bg-gradient-to-br from-[#2d4a7c] to-[#1e3557] hover:from-[#1e3557] hover:to-[#2d4a7c] text-white font-bold text-[11px] rounded-[1rem] shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-1.5 group"
                        >
                            <Plane size={14} className="group-hover:rotate-12 transition-transform" />
                            <span>Book Now</span>
                        </Button>
                    </div>
                </div>

                {/* PAGE CONTENT SLOT */}
                <div
                    className="absolute z-10"
                    style={{
                        left: '2rem',
                        right: '2rem',
                        top: `${NOTCH_DEPTH + 16}px`,
                        bottom: '2rem'
                    }}
                >
                    <main className="h-full overflow-y-auto scrollbar-none pr-2">
                        <ErrorBoundary name="Client Portal View">
                            <Outlet />
                        </ErrorBoundary>
                    </main>
                </div>
            </div>
        </div>
    );
}
