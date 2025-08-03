'use client'

import {
  Home,
  BarChart2,
  FileText,
  Target,
  Activity,
  Users,
  Heart,
  Link2,
  ArrowRightCircle
} from 'lucide-react';


import Link from 'next/link';
import { cn } from '@/lib/utils'; // optional helper for className merging

const menuGroups = [
  {
    label: 'Main',
    items: [
      { label: 'Dashboard', icon: Home, href: '/dashboard' },
      { label: 'Reports', icon: FileText, href: '/reports' },
      { label: 'Prompts', icon: Target, href: '/prompts' },
      { label: 'Optimize', icon: BarChart2, href: '/optimize' }
    ]
  },
  {
    label: 'Insight',
    items: [
      { label: 'Intelligence', icon: Activity, href: '/insight/intelligence' },
      { label: 'Sentiment', icon: Heart, href: '/insight/sentiment' },
      { label: 'Citations', icon: Link2, href: '/insight/citations' }
    ]
  },
  {
    label: 'Analytics',
    items: [
      { label: 'Crawlers', icon: Users, href: '/analytics/crawlers' },
      { label: 'LLM Traffic', icon: BarChart2, href: '/analytics/traffic' }
    ]
  }
];

export default function DashboardSidebar() {
  return (
    <aside className="h-screen w-64 bg-black text-white flex flex-col border-r border-yellow-400 shadow-lg">
      <div className="flex items-center gap-3 px-6 py-5 border-b border-yellow-400">
        <div className="bg-yellow-400 text-black font-bold w-10 h-10 rounded-full flex items-center justify-center text-lg">BB</div>
        <div className="text-xl font-semibold">BrainBattle</div>
      </div>

      <nav className="flex-1 overflow-y-auto px-2 py-4 space-y-6 text-sm">
        {menuGroups.map(group => (
          <div key={group.label}>
            <p className="px-4 text-yellow-400 font-medium mb-2 uppercase tracking-wider text-xs">
              {group.label}
            </p>
            <div className="space-y-1">
              {group.items.map(item => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-yellow-100 hover:text-black transition-colors'
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-yellow-400">
        <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition-colors">
          Upgrade to Pro
          <ArrowRightCircle size={18} />
        </button>
      </div>
    </aside>
  );
}
