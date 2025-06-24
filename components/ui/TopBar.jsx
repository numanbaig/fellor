import React from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/button";
import NotificationButton from "@/components/ui/NotificationButton";
import Avatar from "@/components/ui/Avatar";
import { userData } from "@/lib/data";

export default function TopBar() {
  return (
    <div className="flex items-center justify-between gap-4 mb-4">
      <div className="flex items-center gap-6">
        <span className="font-bold text-xl tracking-tight">FELLOR</span>
        <span className="text-muted-foreground font-medium text-base">Home</span>
      </div>
      <div className="flex-1 max-w-md mx-8">
        <Input placeholder="Search..." className="w-full" />
      </div>
      <div className="flex items-center gap-4">
        <NotificationButton />
        <Avatar name={userData.avatar} />
        <Button variant="outline" className="h-10 px-4">Quick Actions</Button>
      </div>
    </div>
  );
} 