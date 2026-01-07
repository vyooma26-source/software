import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { cn } from "@/core/lib/utils";

interface TopNavProps {
    role: 'client' | 'pilot' | 'admin';
    onMenuClick?: () => void;
    actions?: React.ReactNode;
}

export function TopNav({ role, onMenuClick, actions }: TopNavProps) {
    return (
        <header className={cn(
            "h-14 flex items-center justify-between px-6 transition-all",
            role === 'admin' ? "border-b border-destructive/20 bg-background/50 backdrop-blur-md" : "bg-transparent"
        )}>
            <div className="flex items-center gap-4">
                {onMenuClick && (
                    <Button variant="ghost" size="icon" className="md:hidden" onClick={onMenuClick}>
                        <Menu size={20} />
                    </Button>
                )}
            </div>

            <div className="flex items-center gap-4">
                {actions && (
                    <div className="flex items-center gap-3">
                        {actions}
                    </div>
                )}
            </div>
        </header>
    );
}

