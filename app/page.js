import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/button";
import { ChartCard } from "@/components/ui/ChartCard";
import { UpcomingListCard } from "@/components/ui/UpcomingListCard";
import TopBar from "@/components/ui/TopBar";
import StatCard from "@/components/ui/StatCard";
import { statCardsData, upcomingInterviewsData, hiringInsightsChartData, topActiveJobsData, todoListData } from "@/lib/data";
import TopActiveJobs from "@/components/ui/TopActiveJobs";
import TodoList from "@/components/ui/TodoList";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 pt-4 px-8">
      <TopBar />
      {/* Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCardsData.map((card, idx) => (
          <StatCard key={card.title} {...card} />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-2">
        {/* Hiring Insights Graph */}
        <div className="lg:col-span-2">
          <ChartCard
            title={hiringInsightsChartData.title}
            action={
              <button className="text-xs text-muted-foreground border rounded px-2 py-1">{hiringInsightsChartData.timeRange}</button>
            }
            chartData={hiringInsightsChartData.chartData}
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
