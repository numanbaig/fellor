import React, { useState } from "react";
import { Input } from "@/components/ui/Input";
// import { Button } from "../ui/Button";
import { Menu, Bell, Search } from "lucide-react";
import NotificationButton from "@/components/ui/NotificationButton";
import Avatar from "@/components/ui/Avatar";
import { userData } from "@/lib/data";

export default function TopBar({ onToggleSidebar }) {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="flex items-center justify-between gap-4 mb-4 border-b-1 border-gray pt-4 px-8 pb-4">
      <div className="flex items-center gap-6">
        <button
          className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-accent focus:outline-none focus:ring-none md:ml-0"
          onClick={onToggleSidebar}
          aria-label="Toggle sidebar"
        >
          <Menu size={22} />
        </button>
        <span className="text-muted-foreground font-medium text-base hidden md:inline">
          Home
        </span>
      </div>
      <div className="flex-1 max-w-md mx-8">
        {showSearch ? (
          <Input
            autoFocus
            placeholder="Search..."
            className="w-full"
            onBlur={() => setShowSearch(false)}
          />
        ) : null}
      </div>
      <div className="flex items-center gap-4">
        <button
          className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring"
          onClick={() => setShowSearch((v) => !v)}
          aria-label="Show search"
        >
          <Search size={20} />
        </button>
        <NotificationButton Icon={Bell} />
        <Avatar name={userData.avatar} />
        {/* <Button
          variant="outline"
          className="h-10 px-4 text-white bg-[#000000d4] cursor-pointer"
        >
          Quick Actions
        </Button> */}
        <button
          className="h-10 px-4 text-white bg-[#000000d4] cursor-pointer rounded-md"
        >
          Quick Actions
        </button>
      </div>
    </div>
  );
} 