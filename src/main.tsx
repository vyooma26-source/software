import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import './index.css'

// Layouts
import PilotLayout from '@/apps/pilot/layout'
import ClientLayout from '@/apps/client/layout'
import AdminLayout from '@/apps/admin/layout'

import PilotDashboard from '@/apps/pilot/pages/dashboard'
import JobExecution from '@/apps/pilot/pages/job-execution'
import AdminDashboard from '@/apps/admin/pages/dashboard'
import OpsDashboard from '@/apps/admin/pages/ops'
import ErrorPage from '@/core/components/error-page'
import UserManagement from '@/apps/admin/pages/users'
import AssetManager from '@/apps/admin/pages/assets'
import AdminSettings from '@/apps/admin/pages/settings'
import ClientPortfolio from '@/apps/client/pages/portfolio'

// ... existing imports ...

// ... inside router ...

import ClientSiteView from '@/apps/client/pages/site-view'
import { ClientDashboard } from '@/apps/client/components/dashboard'
import ClientProfile from '@/apps/client/pages/profile'
import ClientSettings from '@/apps/client/pages/settings'
import ClientBooking from '@/apps/client/pages/booking'
import ClientReports from '@/apps/client/pages/reports'
import ClientNotifications from '@/apps/client/pages/notifications'

// Placeholder Pages (Inlined for speed, normally separate)
// const ClientDash = () => <div>Client Dashboard (Map View)</div> // This is removed as ClientPortfolio is used instead

const router = createBrowserRouter([
    {
        path: "/",
        element: <div className="p-10"><h1>Vyooma Core</h1><p>Select Portal:</p><ul><li><a href="/pilot" className="text-blue-500 underline">Pilot</a></li><li><a href="/client" className="text-blue-500 underline">Client</a></li><li><a href="/admin" className="text-blue-500 underline">Admin</a></li></ul></div>,
        errorElement: <ErrorPage />
    },
    {
        path: "/pilot",
        element: <PilotLayout />,
        children: [
            { index: true, element: <Navigate to="/pilot/dashboard" replace /> },
            { path: "dashboard", element: <PilotDashboard /> },
            { path: "jobs/:id", element: <JobExecution /> }
        ]
    },
    {
        path: "/client",
        element: <ClientLayout />,
        children: [
            { index: true, element: <Navigate to="/client/dashboard" replace /> },
            { path: "dashboard", element: <ClientDashboard /> },
            { path: "portfolio", element: <ClientPortfolio /> },
            { path: "profile", element: <ClientProfile /> },
            { path: "settings", element: <ClientSettings /> },
            { path: "booking", element: <ClientBooking /> },
            { path: "reports", element: <ClientReports /> },
            { path: "notifications", element: <ClientNotifications /> },
            { path: "sites/:id", element: <ClientSiteView /> },
            { path: "*", element: <Navigate to="/client/dashboard" replace /> }
        ]
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            { index: true, element: <Navigate to="/admin/dashboard" replace /> },
            { path: "dashboard", element: <AdminDashboard /> },
            { path: "ops", element: <OpsDashboard /> },
            { path: "assets", element: <AssetManager /> },
            { path: "users", element: <UserManagement /> },
            { path: "settings", element: <AdminSettings /> }
        ]
    },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
