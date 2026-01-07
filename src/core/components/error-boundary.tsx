import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertCircle, RefreshCcw, Home } from 'lucide-react';
import { Button } from '@/core/ui/button';
import { Card } from '@/core/ui/card';

interface Props {
    children?: ReactNode;
    fallback?: ReactNode;
    onReset?: () => void;
    name?: string;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error(`Error in ${this.props.name || 'Component'}:`, error, errorInfo);
    }

    private handleReset = () => {
        this.setState({ hasError: false, error: null });
        this.props.onReset?.();
    };

    private handleReload = () => {
        window.location.reload();
    };

    private handleGoHome = () => {
        window.location.href = '/';
    };

    public render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <div className="min-h-[400px] w-full flex items-center justify-center p-6 animate-in fade-in zoom-in duration-300">
                    <Card className="max-w-md w-full border-destructive/20 shadow-2xl overflow-hidden">
                        <div className="h-2 bg-destructive" />
                        <div className="p-8 flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mb-6">
                                <AlertCircle className="w-8 h-8 text-destructive" />
                            </div>

                            <h2 className="text-2xl font-black tracking-tight mb-2">Operational Interruption</h2>
                            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                                An unexpected error occurred while loading this view. Our team has been notified.
                                {this.state.error && (
                                    <span className="block mt-2 font-mono text-[10px] bg-muted p-2 rounded border border-border tracking-tighter overflow-hidden text-ellipsis whitespace-nowrap">
                                        {this.state.error.message}
                                    </span>
                                )}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 w-full capitalize">
                                <Button
                                    onClick={this.handleReset}
                                    variant="outline"
                                    className="flex-1 font-bold tracking-tight"
                                >
                                    <RefreshCcw size={16} className="mr-2" />
                                    Try Again
                                </Button>
                                <Button
                                    onClick={this.handleReload}
                                    className="flex-1 bg-destructive hover:bg-destructive/90 text-white font-bold tracking-tight"
                                >
                                    Hard Reload
                                </Button>
                            </div>

                            <button
                                onClick={this.handleGoHome}
                                className="mt-6 text-xs text-muted-foreground hover:text-foreground underline underline-offset-4 flex items-center transition-colors"
                                id="error-return-home"
                            >
                                <Home size={12} className="mr-1.5" />
                                Return to Command Center
                            </button>
                        </div>
                    </Card>
                </div>
            );
        }

        return this.props.children;
    }
}
