import { SidebarBase, SidebarBaseProps } from './sidebar-base';
import { SidebarItem, SidebarNavItem } from './sidebar-item';

interface SidebarExpandedProps extends Omit<SidebarBaseProps, 'children' | 'isExpanded'> {
    topNav: SidebarNavItem[];
    bottomNav?: SidebarNavItem[];
}

export function SidebarExpanded({ topNav, bottomNav, ...props }: SidebarExpandedProps) {
    return (
        <SidebarBase {...props} isExpanded={true}>
            {/* Top Navigation */}
            <nav className="flex-1 flex flex-col space-y-1.5">
                {topNav.map((item, idx) => (
                    <SidebarItem key={item.label + idx} item={item} isExpanded={true} />
                ))}
            </nav>

            {/* Bottom Navigation */}
            {bottomNav && (
                <div className="pt-4 mt-4 border-t border-border/50 space-y-1.5 pb-4">
                    {bottomNav.map((item, idx) => (
                        <SidebarItem key={item.label + idx} item={item} isExpanded={true} />
                    ))}
                </div>
            )}
        </SidebarBase>
    );
}
