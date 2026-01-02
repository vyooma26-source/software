import { Button } from "../ui/button";
import { Menu } from "lucide-react";

interface TopNavProps {
    role: 'client' | 'pilot' | 'admin';
    onMenuClick?: () => void;
}

export function TopNav({ role, onMenuClick }: TopNavProps) {
    return (
        <header className="h-16 flex items-center justify-between px-2 bg-transparent sticky top-0 z-40 transition-colors">
            <div className="flex items-center gap-4">
                {onMenuClick && (
                    <Button variant="ghost" size="icon" className="md:hidden" onClick={onMenuClick}>
                        <Menu size={20} />
                    </Button>
                )}
            </div>

            <div className="flex items-center gap-4">
            </div>
        </header>
    );
}
