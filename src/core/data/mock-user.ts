export const MOCK_USER = {
    id: 'USR-1001',
    name: 'John Doe',
    role: 'Administrator',
    company: 'Acme Solar Corp',
    email: 'john.doe@acmesolar.com',
    phone: '+1 (415) 555-0123',
    location: 'San Francisco, CA',
    avatar_initials: 'JD',
    plan: {
        name: 'Enterprise',
        renews_on: '2025-12-31',
        usage_percent: 80
    },
    notifications: [
        { id: 1, type: 'security', message: 'New login from unknown device', time: '2 hours ago', read: false },
        { id: 2, type: 'report', message: 'Monthly inspection report generated', time: '1 day ago', read: true },
        { id: 3, type: 'system', message: 'System maintenance scheduled', time: '3 days ago', read: true },
    ]
};

export const MOCK_NOTIFICATIONS = [
    { id: 1, type: 'security', message: 'New login from unknown device', time: '2 hours ago', read: false },
    { id: 2, type: 'report', message: 'Monthly inspection report generated', time: '1 day ago', read: true },
    { id: 3, type: 'system', message: 'System maintenance scheduled', time: '3 days ago', read: true },
];

export const MOCK_SCHEDULED_MISSIONS = [
    { id: 'MIS-101', name: 'Annual Site Survey', site: 'Nevada Solar One', date: '2026-01-15T09:00:00Z', status: 'scheduled' },
    { id: 'MIS-102', name: 'Thermal Integrity Check', site: 'Desert Sunlight', date: '2026-02-10T08:30:00Z', status: 'confirmed' },
    { id: 'MIS-103', name: 'Post-Storm Inspection', site: 'Topaz Solar Farm', date: '2026-02-12T14:00:00Z', status: 'pending' },
];

export const MOCK_ANALYTICS_TRENDS = [
    { month: 'Jul', energy: 1200, efficiency: 94 },
    { month: 'Aug', energy: 1350, efficiency: 95 },
    { month: 'Sep', energy: 1100, efficiency: 92 },
    { month: 'Oct', energy: 1450, efficiency: 96 },
    { month: 'Nov', energy: 900, efficiency: 89 },
    { month: 'Dec', energy: 1250, efficiency: 94 },
];
