import React from "react";
import ActiveJobCard from "@/components/ui/ActiveJobCard";

export default function TopActiveJobs({ jobs }) {
  return (
    <div className="bg-background border rounded-xl p-4 flex flex-col gap-4">
      <div className="flex items-center justify-between mb-2">
        <span className="font-semibold text-base">Top Active Jobs</span>
        <button className="text-xs text-muted-foreground">See all</button>
      </div>
      <div className="flex flex-col gap-3">
        {jobs.map((job, idx) => (
          <ActiveJobCard key={job.title} {...job} />
        ))}
      </div>
    </div>
  );
} 