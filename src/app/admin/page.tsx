'use client'

import StatCard from '@/components/dashboard/StatCard';
import { Eye, Target, Award, MessageCircle } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Grid thống kê */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatCard
          icon={Eye}
          label="Visibility Score"
          value="8.4"
          change="+12.5%"
          changeType="increase"
        />
        <StatCard
          icon={Target}
          label="Presence Score"
          value="74%"
          change="+8.2%"
          changeType="increase"
        />
        <StatCard
          icon={Award}
          label="Average Rank"
          value="2.3"
          change="-0.4"
          changeType="decrease"
        />
        <StatCard
          icon={MessageCircle}
          label="Mentions"
          value="1,247"
          change="+23.1%"
          changeType="increase"
        />
      </div>

      {/* Placeholder cho chart và donut */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2 bg-black rounded-xl p-6 border border-yellow-400 h-[300px]">
          <h2 className="text-lg text-yellow-300 font-semibold mb-4">
            Visibility & Presence Trends
          </h2>
          <p className="text-sm text-gray-300 mb-2">
            Track your brand’s performance across AI models over the last 7 days
          </p>
          <div className="bg-gray-800 rounded-lg h-full flex items-center justify-center text-yellow-200">
            📈 Line Chart Placeholder
          </div>
        </div>

        <div className="bg-black rounded-xl p-6 border border-yellow-400">
          <h2 className="text-lg text-yellow-300 font-semibold mb-4">
            Site Optimization Score
          </h2>
          <p className="text-sm text-gray-300 mb-4">
            LLM visibility optimization status
          </p>
          <div className="w-full h-48 flex items-center justify-center bg-gray-800 rounded-lg text-yellow-200">
            🥯 Donut Chart Placeholder
          </div>
        </div>
      </div>
    </div>
  );
}
