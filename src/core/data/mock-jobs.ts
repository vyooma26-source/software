export interface Job {
    id: string;
    asset_name: string;
    location: string;
    date: string;
    status: 'assigned' | 'in-progress' | 'completed' | 'cancelled';
    type: 'inspection' | 'mapping' | 'surveillance';
    priority: 'high' | 'medium' | 'normal';
    distance_km: number;
    estimated_duration_min: number;
}

export const MOCK_JOBS: Job[] = [
    {
        id: 'JOB-2025-001',
        asset_name: 'Nevada Solar One',
        location: 'Sector 4, North Array',
        date: '2025-12-29',
        status: 'assigned',
        type: 'inspection',
        priority: 'high',
        distance_km: 12.5,
        estimated_duration_min: 45
    },
    {
        id: 'JOB-2025-002',
        asset_name: 'Desert Sunlight',
        location: 'Perimeter Check',
        date: '2025-12-30',
        status: 'assigned',
        type: 'surveillance',
        priority: 'normal',
        distance_km: 5.2,
        estimated_duration_min: 30
    },
    {
        id: 'JOB-2025-003',
        asset_name: 'Topaz Solar Farm',
        location: 'Full Site Mapping',
        date: '2025-12-28',
        status: 'completed',
        type: 'mapping',
        priority: 'medium',
        distance_km: 45.0,
        estimated_duration_min: 120
    }
];
