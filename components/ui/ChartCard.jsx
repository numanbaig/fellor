"use client";

import * as React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

// Dynamically import Recharts to avoid SSR issues with React 19
const ChartComponent = dynamic(() => import("./ChartComponent"), {
  ssr: false,
  loading: () => (
    <div className="h-56 w-full flex items-center justify-center">
      <div className="text-muted-foreground">Loading chart...</div>
    </div>
  ),
});

export function ChartCard({ title, action, children, className, chartData, timeRange, timeRangeOptions = [], onTimeRangeChange }) {
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <span className="text-base font-semibold">{title}</span>
        <div>
          <select
            className="text-xs text-muted-foreground border rounded px-2 py-1 bg-background focus:outline-none focus:ring-2 focus:ring-ring"
            value={timeRange}
            onChange={e => onTimeRangeChange && onTimeRangeChange(e.target.value)}
          >
            {timeRangeOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        {children || <ChartComponent chartData={chartData} />}
      </CardContent>
    </Card>
  );
} 