import React from "react";
import { Bell } from "lucide-react";

export default function NotificationButton({ Icon = Bell }) {
  return (
    <button className="rounded-full p-2 hover:bg-accent">
      <Icon size={22} />
    </button>
  );
} 