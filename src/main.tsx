import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import { ErrorBoundary } from '@/core/components/error-boundary'
import './index.css'

import { SkipToContent } from '@/core/components/skip-link'

// Layouts (Lazy)
const PilotLayout = React.lazy(() => import('@/apps/pilot/layout'))
const ClientLayout = React.lazy(() => import('@/apps/client/layout'))
const AdminLayout = React.lazy(() => import('@/apps/admin/layout'))

// Pages (Lazy)
const PilotDashboard = React.lazy(() => import('@/apps/pilot/pages/dashboard'))
const JobExecution = React.lazy(() => import('@/apps/pilot/pages/job-execution'))
const AdminDashboard = React.lazy(() => import('@/apps/admin/pages/dashboard'))
const OpsDashboard = React.lazy(() => import('@/apps/admin/pages/ops'))
const UserManagement = React.lazy(() => import('@/apps/admin/pages/users'))
const AssetManager = React.lazy(() => import('@/apps/admin/pages/assets'))
const AdminSettings = React.lazy(() => import('@/apps/admin/pages/settings'))
const ClientPortfolio = React.lazy(() => import('@/apps/client/pages/portfolio'))
const ClientSiteView = React.lazy(() => import('@/apps/client/pages/site-view'))
const ClientProfile = React.lazy(() => import('@/apps/client/pages/profile'))
const ClientSettings = React.lazy(() => import('@/apps/client/pages/settings'))
const ClientBooking = React.lazy(() => import('@/apps/client/pages/booking'))
const ClientReports = React.lazy(() => import('@/apps/client/pages/reports'))
const ClientNotifications = React.lazy(() => import('@/apps/client/pages/notifications'))
const ErrorPage = React.lazy(() => import('@/core/components/error-page'))

// Named export lazy loading helper
const ClientDashboard = React.lazy(() => import('@/apps/client/components/dashboard').then(m => ({ default: m.ClientDashboard })))

const LoadingFallback = () => (
    <div className="h-screen w-full flex items-center justify-center bg-background">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
)

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div className="p-10 font-sans">
                <SkipToContent />
                <h1 className="text-4xl font-black mb-4 tracking-tighter">Vyooma Core</h1>
                <p className="text-muted-foreground mb-8">Select Portal Gateway:</p>
                <div className="flex gap-4">
                    <a href="/pilot" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold shadow-xl">Pilot Portal</a>
                    <a href="/client" className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-bold shadow-xl">Client Hub</a>
                    <a href="/admin" className="px-6 py-3 bg-accent text-accent-foreground border border-border rounded-lg font-bold shadow-xl">Global Admin</a>
                </div>
            </div>
        ),
        errorElement: <React.Suspense fallback={<LoadingFallback />}><ErrorPage /></React.Suspense>
    },
    {
        path: "/pilot",
        element: <React.Suspense fallback={<LoadingFallback />}><PilotLayout /></React.Suspense>,
        children: [
            { index: true, element: <Navigate to="/pilot/dashboard" replace /> },
            { path: "dashboard", element: <PilotDashboard /> },
            { path: "jobs/:id", element: <JobExecution /> }
        ]
    },
    {
        path: "/client",
        element: <React.Suspense fallback={<LoadingFallback />}><ClientLayout /></React.Suspense>,
        children: [
            { index: true, element: <Navigate to="/client/dashboard" replace /> },
            { path: "dashboard", element: <React.Suspense fallback={<LoadingFallback />}><ClientDashboard /></React.Suspense> },
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
        element: <React.Suspense fallback={<LoadingFallback />}><AdminLayout /></React.Suspense>,
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
        <ErrorBoundary name="Global App Shell">
            <RouterProvider router={router} />
        </ErrorBoundary>
    </React.StrictMode>,
)
