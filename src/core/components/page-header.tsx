import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/core/lib/utils";
// // import { Badge } from "../ui/badge";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    description?: string;
    breadcrumbs?: BreadcrumbItem[];
    actions?: React.ReactNode;
    className?: string;
}

export function PageHeader({
    title,
    subtitle,
    description,
    breadcrumbs,
    actions,
    className
}: PageHeaderProps) {
    const displayDescription = subtitle || description;

    return (
        <div className={cn("flex flex-col gap-4 mb-4", className)}>
            {/* Breadcrumbs */}
            {breadcrumbs && breadcrumbs.length > 0 && (
                <nav className="flex items-center text-sm text-muted-foreground mb-1">
                    {breadcrumbs.map((item, index) => (
                        <div key={index} className="flex items-center">
                            {index > 0 && <ChevronRight className="h-4 w-4 mx-2" />}
                            {item.href ? (
                                <Link
                                    to={item.href}
                                    className="hover:text-foreground transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="text-foreground font-medium">{item.label}</span>
                            )}
                        </div>
                    ))}
                </nav>
            )}

            <div className="flex items-end justify-between border-b border-border/50 pb-8 mb-4">
                <div className="space-y-2">
                    <h1 className="heading-1">{title}</h1>
                    {displayDescription && (
                        <p className="text-muted-foreground font-bold uppercase tracking-widest text-xs opacity-70">{displayDescription}</p>
                    )}
                </div>
                {actions && (
                    <div className="flex items-center gap-4">
                        {actions}
                    </div>
                )}
            </div>
        </div>
    );
}
