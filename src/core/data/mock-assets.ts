export interface Asset {
    id: string;
    name: string;
    location: string;
    capacity_mw: number;
    status: 'active' | 'maintenance' | 'offline';
    last_inspection: string; // ISO date
    health_score: number; // 0-100
    image: string; // placeholder URL
}

export const MOCK_ASSETS: Asset[] = [
    {
        id: '101',
        name: 'Nevada Solar One',
        location: 'Nevada, USA',
        capacity_mw: 64,
        status: 'active',
        last_inspection: '2025-12-10T10:00:00Z',
        health_score: 94,
        image: '/assets/solar-1.jpg'
    },
    {
        id: '102',
        name: 'Kamakura Plant',
        location: 'Kamakura, My',
        capacity_mw: 42,
        status: 'maintenance',
        last_inspection: '2025-11-20T14:30:00Z',
        health_score: 78,
        image: '/assets/solar-2.jpg'
    },
    {
        id: '103',
        name: 'Desert Sunlight',
        location: 'California, USA',
        capacity_mw: 550,
        status: 'active',
        last_inspection: '2025-12-05T09:15:00Z',
        health_score: 88,
        image: '/assets/solar-3.jpg'
    },
    {
        id: '104',
        name: 'Topaz Solar Farm',
        location: 'California, USA',
        capacity_mw: 550,
        status: 'offline',
        last_inspection: '2025-10-15T11:00:00Z',
        health_score: 45,
        image: '/assets/solar-4.jpg'
    }
];

export const MOCK_STATS = {
    totalRevenue: "$124,500",
    activeJobs: 45,
    efficiency: "+24%",
    projectCompletion: 72
};
