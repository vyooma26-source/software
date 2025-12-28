export type Inspection = {
    id: string;
    asset_name: string;
    location: string;
    scheduled_date: string;
    status: 'scheduled' | 'in_progress' | 'processing' | 'completed' | 'failed';
}

export const MOCK_INSPECTIONS: Inspection[] = [
    {
        id: '1',
        asset_name: 'Solar Farm Alpha',
        location: 'Nevada, USA',
        scheduled_date: '2025-10-15T09:00:00Z',
        status: 'in_progress'
    },
    {
        id: '2',
        asset_name: 'Desert Array B-12',
        location: 'Arizona, USA',
        scheduled_date: '2025-10-16T10:30:00Z',
        status: 'scheduled'
    },
    {
        id: '3',
        asset_name: 'Roof Cluster 9',
        location: 'California, USA',
        scheduled_date: '2025-10-14T14:00:00Z',
        status: 'completed'
    }
]
