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

export function ChartCard({ title, action, children, className, chartData }) {
  return (
    <Card className={cn("w-full", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <span className="text-base font-semibold">{title}</span>
        {action && <div>{action}</div>}
      </CardHeader>
      <CardContent className="pt-0">
        {children || <ChartComponent chartData={chartData} />}
      </CardContent>
    </Card>
  );
}