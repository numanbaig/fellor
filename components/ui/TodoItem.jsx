import React from "react";

export default function TodoItem({ icon, label, count, color }) {
  return (
    <div className={`flex items-center gap-3 p-3 rounded-lg border bg-background cursor-pointer hover:bg-accent transition-colors`}> 
      <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${color} bg-opacity-10`}>{icon}</span>
      <div className="flex-1">
        <div className="font-medium text-sm">{label}</div>
        <div className="text-xs text-muted-foreground">{count} pending approvals</div>
      </div>
    </div>
  );
} 