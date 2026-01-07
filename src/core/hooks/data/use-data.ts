import { useState, useEffect } from 'react';
import { MOCK_JOBS } from '@/core/data/mock-jobs';
import { MOCK_USER } from '@/core/data/mock-user';

/**
 * Hook to fetch missions/jobs
 */
export function useMissions() {
    const [data, setData] = useState(MOCK_JOBS);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    return { data, loading, error };
}

/**
 * Hook to fetch users/team management
 */
export function useUsers() {
    const [data, setData] = useState([
        { ...MOCK_USER, id: '1', role: 'admin', status: 'active' },
        { ...MOCK_USER, id: '2', name: 'Sarah Pilot', email: 'sarah@vyooma.com', role: 'pilot', status: 'active' },
        { ...MOCK_USER, id: '3', name: 'Client User', email: 'client@acme.com', role: 'client', status: 'inactive' },
        { ...MOCK_USER, id: '4', name: 'Ops Manager', email: 'ops@vyooma.com', role: 'admin', status: 'active' },
    ]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    return { data, loading, error };
}

/**
 * Hook to fetch assets
 */
export function useAssets() {
    const [data, setData] = useState([
        { id: '1', name: 'Vyooma-One', type: 'standard', status: 'ready', battery: 98, last_service: '2025-12-20' },
        { id: '2', name: 'Vyooma-Two', type: 'standard', status: 'in-mission', battery: 65, last_service: '2025-12-22' },
    ]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    return { data, loading, error };
}
