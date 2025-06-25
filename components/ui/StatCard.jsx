import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";

export default function StatCard({ title, value, change, changeClass, icon }) {
  return (
    <Card>
      <CardHeader className="pb-2 flex-row items-center justify-between">
        <span className="text-xs font-medium text-muted-foreground">{title}</span>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="text-2xl font-bold">{value}</div>
        <div className={`flex text-xs gap-0.5 mt-1 items-center ${changeClass}`}>{icon && icon} {change}</div>
      </CardContent>
    </Card>
  );
} 