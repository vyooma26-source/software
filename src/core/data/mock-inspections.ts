export interface Inspection {
    id: string;
    asset_id: string;
    date: string;
    status: 'completed' | 'processing' | 'scheduled' | 'failed';
    defects_found: number;
    pilot_name?: string;
    report_url?: string;
}

export const MOCK_INSPECTIONS: Inspection[] = [
    {
        id: 'INS-001',
        asset_id: '101',
        date: '2025-12-10',
        status: 'completed',
        defects_found: 3,
        pilot_name: 'John Doe',
        report_url: '#'
    },
    {
        id: 'INS-002',
        asset_id: '103',
        date: '2025-12-05',
        status: 'completed',
        defects_found: 0,
        pilot_name: 'Sarah Connor',
        report_url: '#'
    },
    {
        id: 'INS-003',
        asset_id: '102',
        date: '2025-12-28',
        status: 'processing',
        defects_found: 0,
        pilot_name: 'System',
    },
    {
        id: 'INS-004',
        asset_id: '104',
        date: '2026-01-15',
        status: 'scheduled',
        defects_found: 0,
    }
];
