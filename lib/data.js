import { CheckSquare, MessageCircle, BadgeCheck, ArrowUp, ArrowDown } from "lucide-react";

// Stat Cards Data
export const statCardsData = [
  {
    title: "Total Candidates",
    value: "1,234",
    change: "10 more than last month",
    changeClass: "text-green-600",
    icon: <ArrowUp size={10} />,
  },
  {
    title: "Active Jobs",
    value: "42",
    change: "3 more than last month",
    changeClass: "text-green-600",
    icon: <ArrowUp size={10} />,
  },
  {
    title: "Interviews This Week",
    value: "28",
    change: "5 fewer than last month",
    changeClass: "text-red-500",
    icon: <ArrowDown size={10} />,
  },
  {
    title: "Time to Hire",
    value: "18 days",
    change: "Same as last month",
    changeClass: "text-muted-foreground",
  },
];

// Upcoming Interviews Data
export const upcomingInterviewsData = [
  {
    time: "Today, 2:00 PM",
    name: "John Smith - Senior Developer",
    type: "Video interview",
    typeClass: "text-blue-600",
  },
  {
    time: "Tomorrow, 10:00 AM",
    name: "Emily Brown - UX Designer",
    type: "On-site interview",
    typeClass: "text-green-600",
  },
  {
    time: "Tomorrow, 3:30 PM",
    name: "Michael Johnson - Product Manager",
    type: "Phone interview",
    typeClass: "text-purple-600",
  }
];

// Chart Data for Hiring Insights
export const hiringInsightsChartData = {
  title: "Hiring Insights",
  timeRange: "Last 30 days",
  chartData: [
    { name: "01", applications: 0, interviews: 0, rejections: 0 },
    { name: "02", applications: 3, interviews: 2, rejections: 1 },
    { name: "03", applications: 5, interviews: 5, rejections: 3 },
    { name: "04", applications: 2, interviews: 2, rejections: 1 },
    { name: "05", applications: 25, interviews: 15, rejections: 15 },
    { name: "06", applications: 32, interviews: 18, rejections: 18 },
    { name: "07", applications: 28, interviews: 22, rejections: 12 },
    { name: "08", applications: 35, interviews: 28, rejections: 18 },
    { name: "09", applications: 42, interviews: 35, rejections: 25 },
    { name: "10", applications: 38, interviews: 42, rejections: 32 },
    { name: "11", applications: 45, interviews: 38, rejections: 28 },
    { name: "12", applications: 52, interviews: 45, rejections: 35 },
    { name: "13", applications: 48, interviews: 52, rejections: 42 },
    { name: "14", applications: 55, interviews: 48, rejections: 38 },
    { name: "15", applications: 62, interviews: 55, rejections: 45 },
    { name: "16", applications: 58, interviews: 62, rejections: 52 },
    { name: "17", applications: 65, interviews: 58, rejections: 48 },
    { name: "18", applications: 72, interviews: 65, rejections: 55 },
    { name: "19", applications: 68, interviews: 72, rejections: 62 },
    { name: "20", applications: 75, interviews: 68, rejections: 58 },
    { name: "21", applications: 82, interviews: 75, rejections: 65 },
    { name: "22", applications: 78, interviews: 82, rejections: 72 },
    { name: "23", applications: 85, interviews: 78, rejections: 68 },
  ],
  legend: [
    { label: "Application to Interview Rate", color: "#22c55e", key: "applications" },
    { label: "Offer Acceptance Rate", color: "#8b5cf6", key: "interviews" },
    { label: "Rejection Rate", color: "#f97316", key: "rejections" },
  ],
};

// Navigation Data for Sidebar
export const navigationData = [
  {
    label: "Dashboard",
    active: true,
    icon: "dashboard",
  },
  {
    label: "Job Management",
    active: false,
    icon: "job",
  },
  {
    label: "Candidates",
    active: false,
    icon: "candidates",
  },
  {
    label: "Messages",
    active: false,
    icon: "messages",
  },
  {
    label: "Settings",
    active: false,
    icon: "settings",
  },
  {
    label: "Analytics & Insights",
    active: false,
    icon: "analytics",
  },
];

// User Data
export const userData = {
  name: "Admin User",
  avatar: "A",
  email: "admin@fellor.com",
  role: "HR Manager",
};

// Recent Activity Data
export const recentActivityData = [
  {
    action: "New candidate applied",
    candidate: "Alex Thompson",
    position: "Senior Developer",
    time: "2 hours ago",
    type: "application",
  },
  {
    action: "Interview scheduled",
    candidate: "Maria Garcia",
    position: "UX Designer",
    time: "4 hours ago",
    type: "interview",
  },
  {
    action: "Offer sent",
    candidate: "David Chen",
    position: "Product Manager",
    time: "1 day ago",
    type: "offer",
  },
  {
    action: "Candidate hired",
    candidate: "Lisa Park",
    position: "Frontend Developer",
    time: "2 days ago",
    type: "hired",
  },
];

// Job Postings Data
export const jobPostingsData = [
  {
    title: "Senior Frontend Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $150k",
    status: "Active",
    applications: 45,
    posted: "3 days ago",
  },
  {
    title: "UX/UI Designer",
    company: "DesignStudio",
    location: "Remote",
    type: "Contract",
    salary: "$80k - $100k",
    status: "Active",
    applications: 32,
    posted: "1 week ago",
  },
  {
    title: "Product Manager",
    company: "StartupXYZ",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130k - $160k",
    status: "Active",
    applications: 28,
    posted: "2 weeks ago",
  },
  {
    title: "DevOps Engineer",
    company: "CloudTech",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110k - $140k",
    status: "Paused",
    applications: 19,
    posted: "3 weeks ago",
  },
];

// Top Active Jobs Data
export const topActiveJobsData = [
  {
    title: "Senior Frontend Developer",
    candidates: 32,
    pipeline: 8,
    daysOpen: 12,
    progress: 75,
  },
  {
    title: "Product Manager",
    candidates: 28,
    pipeline: 5,
    daysOpen: 8,
    progress: 50,
  },
];

// To-Do List Data
export const todoListData = [
  {
    icon: <CheckSquare size={20} />,
    label: "Job approval",
    count: 1,
    color: "text-blue-600",
  },
  {
    icon: <MessageCircle size={20} />,
    label: "Interview feedback",
    count: 1,
    color: "text-orange-500",
  },
  {
    icon: <BadgeCheck size={20} />,
    label: "Offer approval",
    count: 1,
    color: "text-green-600",
  },
]; 