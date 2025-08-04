'use client'

import { Bell } from 'lucide-react';

export default function DashboardHeader() {
  return (
    <header className="w-full px-6 py-4 border-b border-yellow-400 bg-black flex items-center justify-between">
      {/* Left: Title */}
      <div>
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="text-sm text-yellow-200">
          Monitor your brand's visibility across AI models
        </p>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">

        <div className="w-10 h-10 rounded-full bg-yellow-400 text-black flex items-center justify-center font-bold text-lg">
          BB
        </div>
      </div>
    </header>
  );
}
