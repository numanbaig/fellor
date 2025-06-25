'use client'
import React from "react";
import { cn } from "@/lib/utils";
import { navigationData } from "@/lib/data";
import {
  LayoutDashboard,
  Briefcase,
  Users,
  MessageSquare,
  Settings,
  BarChart2,
  LogOut,
} from "lucide-react";

function SidebarNav({ children, className }) {
  return (
    <nav className={cn("flex flex-col gap-2 mt-8", className)}>
      {children}
    </nav>
  );
}

function SidebarNavItem({ icon, label, active, collapsed, ...props }) {
  return (
    <button
      className={cn(
        "flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
        active
          ? "bg-[#c1baffa4] shadow"
          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
        "w-full text-left",
        collapsed && "w-13"
      )}
      {...props}
    >
      {icon && (
        <span className="size-5 flex items-center justify-center text-[#f5c43f]">{icon}</span>
      )}
      {!collapsed && label}
    </button>
  );
}

// Icon mapping function
function getIcon(iconName) {
  const icons = {
    dashboard: <LayoutDashboard size={20} />,
    job: <Briefcase size={20} />,
    candidates: <Users size={20} />,
    messages: <MessageSquare size={20} />,
    settings: <Settings size={20} />,
    analytics: <BarChart2 size={20} />,
    logout: <LogOut size={20} />,
  };
  return icons[iconName] || null;
}

export function Sidebar({ collapsed }) {
  return (
    <aside
      className={cn(
        "h-full bg-background flex flex-col justify-between min-h-screen pb-10 transition-all duration-300"
      )}
      style={{ width: collapsed ? "4rem" : "16rem" }}
    >
      <div>
        <div className="flex items-center gap-2 px-4 mb-8">
          <span className="font-bold text-xl tracking-tight">
            {collapsed ? "FR" : "FELLOR"}
          </span>
        </div>
        <SidebarNav>
          {navigationData.map((item) => (
            <SidebarNavItem
              key={item.label}
              label={item.label}
              active={item.active}
              icon={getIcon(item.icon)}
              collapsed={collapsed}
            />
          ))}
        </SidebarNav>
      </div>
      <div className="px-4">
        <SidebarNavItem label="Log-out" icon={getIcon("logout")} collapsed={collapsed} />
      </div>
    </aside>
  );
}

export { SidebarNav, SidebarNavItem }; 