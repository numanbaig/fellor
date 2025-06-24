import React from "react";
import { cn } from "@/lib/utils";
import { navigationData } from "@/lib/data";

function SidebarNav({ children, className }) {
  return (
    <nav className={cn("flex flex-col gap-2 mt-8", className)}>
      {children}
    </nav>
  );
}

function SidebarNavItem({ icon, label, active, ...props }) {
  return (
    <button
      className={cn(
        "flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors",
        active
          ? "bg-primary text-primary-foreground shadow"
          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
        "w-full text-left"
      )}
      {...props}
    >
      {icon && <span className="size-5 flex items-center justify-center">{icon}</span>}
      {label}
    </button>
  );
}

// Icon mapping function
function getIcon(iconName) {
  const icons = {
    dashboard: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M3 13.5V19a1 1 0 0 0 1 1h4v-5h4v5h4a1 1 0 0 0 1-1v-5.5"/><path d="M2.5 12 12 4l9.5 8"/></svg>,
    job: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/></svg>,
    candidates: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20v-1a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v1"/></svg>,
    messages: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>,
    settings: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 8.6 15a1.65 1.65 0 0 0-1.82-.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 15.4 9a1.65 1.65 0 0 0 1.82.33l.06.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 15z"/></svg>,
    analytics: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M3 3v18h18"/><rect x="7" y="13" width="2" height="5" rx="1"/><rect x="11" y="9" width="2" height="9" rx="1"/><rect x="15" y="5" width="2" height="13" rx="1"/></svg>,
    logout: <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M15.75 9V5.75A2.75 2.75 0 0 0 13 3H6.75A2.75 2.75 0 0 0 4 5.75v12.5A2.75 2.75 0 0 0 6.75 21H13a2.75 2.75 0 0 0 2.75-2.75V15"/><path d="M19 12H9"/><path d="m16 9 3 3-3 3"/></svg>,
  };
  return icons[iconName] || null;
}

export function Sidebar() {
  return (
    <aside className="h-full w-64 bg-background border-r flex flex-col justify-between py-6 px-2 min-h-screen">
      <div>
        <div className="flex items-center gap-2 px-4 mb-8">
          <span className="font-bold text-xl tracking-tight">FELLOR</span>
        </div>
        <SidebarNav>
          {navigationData.map((item) => (
            <SidebarNavItem
              key={item.label}
              label={item.label}
              active={item.active}
              icon={getIcon(item.icon)}
            />
          ))}
        </SidebarNav>
      </div>
      <div className="px-4">
        <SidebarNavItem label="Log-out" icon={getIcon("logout")} />
      </div>
    </aside>
  );
}

export { SidebarNav, SidebarNavItem }; 