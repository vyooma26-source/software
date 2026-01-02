import { Loader2 } from "lucide-react";
import { cn } from "@/core/lib/utils";

interface LoadingStateProps {
    message?: string;
    fullScreen?: boolean;
    className?: string;
}

export function LoadingState({ message = "Loading...", fullScreen = false, className }: LoadingStateProps) {
    if (fullScreen) {
        return (
            <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
                <Loader2 className="w-12 h-12 animate-spin text-primary mb-4" />
                <p className="text-muted-foreground animate-pulse font-medium">{message}</p>
            </div>
        );
    }

    return (
        <div className={cn("flex flex-col items-center justify-center p-8 h-full min-h-[200px]", className)}>
            <Loader2 className="w-8 h-8 animate-spin text-primary mb-3" />
            <p className="text-sm text-muted-foreground">{message}</p>
        </div>
    );
}

export function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn("animate-pulse rounded-md bg-muted/50", className)}
            {...props}
        />
    )
}
