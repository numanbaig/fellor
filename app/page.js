'use client'
import React, { useState } from "react";
import { ChartCard } from "@/components/ui/ChartCard";
import { UpcomingListCard } from "@/components/ui/UpcomingListCard";
import StatCard from "@/components/ui/StatCard";
import { statCardsData, upcomingInterviewsData, hiringInsightsChartData, topActiveJobsData, todoListData } from "@/lib/data";
import TopActiveJobs from "@/components/ui/TopActiveJobs";
import TodoList from "@/components/ui/TodoList";

const timeRangeOptions = [
  "Last 7 days",
  "Last 14 days",
  "Last 30 days",
  "This year"
];

export default function Home() {
  const [timeRange, setTimeRange] = useState("Last 30 days");

  // For demo, always use the same data. In a real app, filter chart data based on timeRange.
  const chartData = hiringInsightsChartData.chartData;

  return (
    <div className="flex flex-col gap-8 pt-4 px-8 pb-8">
      {/* Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCardsData.map((card, idx) => (
          <StatCard key={card.title} {...card} icon={card?.icon ? card.icon : null}/>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-2">
        {/* Hiring Insights Graph */}
        <div className="lg:col-span-2">
          <ChartCard
            title={hiringInsightsChartData.title}
            timeRange={timeRange}
            timeRangeOptions={timeRangeOptions}
            onTimeRangeChange={setTimeRange}
            chartData={chartData}
          />
          <div className="mt-6">
            <TopActiveJobs jobs={topActiveJobsData} />
          </div>
        </div>
        {/* Upcoming Interviews and To-Do List */}
        <div className="flex flex-col gap-6">
          <UpcomingListCard
            title="Upcoming Interviews"
            action={<button className="text-xs text-muted-foreground">See all</button>}
          >
            <ul className="flex flex-col gap-4">
              {upcomingInterviewsData.map((item, idx) => (
                <li key={idx} className="flex flex-col gap-1 p-2 rounded hover:bg-accent border-l-4 border-purple-700">
                  <span className="text-sm font-medium">{item.time}</span>
                  <span className="text-xs text-muted-foreground">{item.name}</span>
                  <span className={`text-xs ${item.typeClass}`}>{item.type}</span>
                </li>
              ))}
            </ul>
          </UpcomingListCard>
          <TodoList todos={todoListData} />
        </div>
      </div>
    </div>
  );
}
