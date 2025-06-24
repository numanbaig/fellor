import React from "react";

export default function ActiveJobCard({ title, candidates, pipeline, daysOpen, progress }) {
  return (
    <div className="flex items-center justify-between gap-2 p-4 rounded-lg border bg-background">
      <div className="flex flex-col gap-2 w-5/12">
        <div className="font-semibold text-base">{title}</div>
        <div className="text-xs text-muted-foreground mb-1">
          {candidates} candidates • {pipeline} in pipeline
        </div>
      </div>
      <div className="flex flex-col gap-2 w-4/12">
        <div className="flex items-center justify-between text-xs mb-1">
          <span className="text-muted-foreground text-purple-700">{daysOpen} days open</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-full h-2 bg-accent rounded-full overflow-hidden">
            <div
              className="h-full bg-purple-700"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="font-medium text-primary text-xs">{progress}%</span>
        </div>
      </div>
    </div>
  );
}   