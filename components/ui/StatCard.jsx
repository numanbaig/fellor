import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";

export default function StatCard({ title, value, change, changeClass }) {
  return (
    <Card>
      <CardHeader className="pb-2 flex-row items-center justify-between">
        <span className="text-xs font-medium text-muted-foreground">{title}</span>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="text-2xl font-bold">{value}</div>
        <div className={`text-xs mt-1 ${changeClass}`}>{change}</div>
      </CardContent>
    </Card>
  );
} 