import { Skeleton } from "./loading-state";

export function DashboardSkeleton() {
    return (
        <div className="flex flex-col gap-6 w-full h-full animate-in fade-in duration-500">
            <div className="flex flex-col gap-2">
                <Skeleton className="h-8 w-64" />
                <Skeleton className="h-4 w-96" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map(i => (
                    <Skeleton key={i} className="h-32 w-full rounded-xl" />
                ))}
            </div>

            <div className="grid grid-cols-12 gap-6 flex-1 min-h-[400px]">
                <Skeleton className="col-span-12 lg:col-span-8 h-full rounded-xl" />
                <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
                    <Skeleton className="flex-1 rounded-xl" />
                    <Skeleton className="flex-1 rounded-xl" />
                </div>
            </div>
        </div>
    );
}

export function GridSkeleton() {
    return (
        <div className="flex flex-col gap-6 w-full animate-in fade-in duration-500">
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-2">
                    <Skeleton className="h-10 w-48" />
                    <Skeleton className="h-4 w-72" />
                </div>
                <Skeleton className="h-10 w-32" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                    <div key={i} className="flex flex-col gap-3">
                        <Skeleton className="h-48 w-full rounded-xl" />
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                        <div className="flex gap-2 mt-2">
                            <Skeleton className="h-8 flex-1" />
                            <Skeleton className="h-8 flex-1" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
