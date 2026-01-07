import { SidebarBase, SidebarBaseProps } from './sidebar-base';
import { SidebarItem, SidebarNavItem } from './sidebar-item';

interface SidebarIconOnlyProps extends Omit<SidebarBaseProps, 'children' | 'isExpanded'> {
    topNav: SidebarNavItem[];
    bottomNav?: SidebarNavItem[];
}

export function SidebarIconOnly({ topNav, bottomNav, ...props }: SidebarIconOnlyProps) {
    return (
        <SidebarBase {...props} isExpanded={false}>
            {/* Top Navigation */}
            <nav className="flex-1 flex flex-col space-y-3 pt-2">
                {topNav.map((item, idx) => (
                    <SidebarItem key={item.label + idx} item={item} isExpanded={false} />
                ))}
            </nav>

            {/* Bottom Navigation */}
            {bottomNav && (
                <div className="pt-4 space-y-3 pb-3">
                    {bottomNav.map((item, idx) => (
                        <SidebarItem key={item.label + idx} item={item} isExpanded={false} />
                    ))}
                </div>
            )}
        </SidebarBase>
    );
}
