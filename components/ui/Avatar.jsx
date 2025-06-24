import React from "react";

export default function Avatar({ name }) {
  return (
    <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-muted text-muted-foreground font-semibold">
      {name}
    </span>
  );
} 