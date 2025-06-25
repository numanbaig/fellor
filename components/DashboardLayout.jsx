"use client";
import React, { useState, useEffect } from "react";
import { Sidebar } from "@/components/ui/Sidebar";
import TopBar from "@/components/ui/TopBar";

export default function DashboardLayout({ children }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSidebarCollapsed(true);
      } else {
        setSidebarCollapsed(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex min-h-screen">
      <aside
        className={`h-screen bg-background border-r flex flex-col justify-between py-6 px-2 fixed top-0 left-0 z-30 transition-all duration-200 ${
          sidebarCollapsed ? '' : ''
        }`}
        // style={{ width: sidebarCollapsed ? "5rem" : "16.5rem" }}
      >
        <Sidebar collapsed={sidebarCollapsed} />
      </aside>
      <main className={`flex-1 ${sidebarCollapsed ? 'ml-20' : 'ml-64'} overflow-y-auto min-h-screen`}>
        <div className="bg-background sticky top-0 z-20">
          <TopBar onToggleSidebar={() => setSidebarCollapsed((c) => !c)} />
        </div>
        {children}
      </main>
    </div>
  );
} 