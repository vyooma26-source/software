import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "../ui/button";

interface ErrorStateProps {
    title?: string;
    message?: string;
    onRetry?: () => void;
}

export function ErrorState({
    title = "Something went wrong",
    message = "We couldn't load the data. Please try again.",
    onRetry
}: ErrorStateProps) {
    return (
        <div className="flex flex-col items-center justify-center p-8 text-center h-full min-h-[300px] bg-destructive/5 rounded-lg border border-destructive/20">
            <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center mb-4 text-destructive">
                <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-medium text-destructive">{title}</h3>
            <p className="text-sm text-muted-foreground mt-1 max-w-sm mb-6">{message}</p>

            {onRetry && (
                <Button onClick={onRetry} variant="outline" className="border-destructive/20 text-destructive hover:bg-destructive/10">
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Try Again
                </Button>
            )}
        </div>
    );
}
