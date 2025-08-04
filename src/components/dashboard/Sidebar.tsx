'use client'

import {
  LayoutDashboard,
  Users,
  UserX,
  Search,
  ClipboardList,
  FileCheck,
  Tag,
  BarChart2,
  Dumbbell,
  Utensils,
  Puzzle,
  Medal,
  MessageSquare,
  AlertTriangle,
  ShieldCheck,
  CalendarCheck,
  Check,
  Reply,
  DollarSign,
  Cpu,
  BookOpenCheck,
  Bell,
  CalendarClock,
  Settings,
  Shield,
  LockKeyhole,
  ChevronRight,
  ChevronDown,
  Video,
  Star,
  Sword
} from 'lucide-react';


import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { cn } from '@/lib/utils';

type MenuItem = {
  label: string;
  icon: React.ElementType;
  href?: string;
  children?: MenuItem[];
};

const menu = [
  {
    label: 'TỔNG QUAN',
    icon: LayoutDashboard,
    href: '/admin'
  },
  {
    label: 'QUẢN LÝ NGƯỜI DÙNG',
    icon: Users,
    children: [
      { label: 'Người học', icon: Users, href: '/admin/users/learners' },
      { label: 'Creator & Quyền truy cập', icon: UserX, href: '/admin/users/creators' },
      { label: 'Cảnh báo vi phạm', icon: AlertTriangle, href: '/admin/users/violations' },
      { label: 'Tìm kiếm & phân loại', icon: Search, href: '/admin/users/search' }
    ]
  },
  {
    label: 'NỘI DUNG HỌC',
    icon: BookOpenCheck,
    children: [
      { label: 'Quản lý bài học AIM', icon: ClipboardList, href: '/admin/learning/units' },
      { label: 'Ngân hàng câu hỏi', icon: Dumbbell, href: '/admin/learning/questions' },
      { label: 'Import/Export nội dung', icon: FileCheck, href: '/admin/learning/import-export' },
      { label: 'Thẻ metadata', icon: Tag, href: '/admin/learning/tags' }
    ]
  },
  {
    label: 'KIỂM DUYỆT VIDEO',
    icon: Video,
    children: [
      { label: 'Duyệt video người dùng', icon: Video, href: '/admin/videos/review' },
      { label: 'Xử lý vi phạm', icon: AlertTriangle, href: '/admin/videos/violations' },
      { label: 'Thống kê tương tác', icon: BarChart2, href: '/admin/videos/stats' },
      { label: 'Đánh giá & xếp hạng', icon: Star, href: '/admin/videos/ratings' }
    ]
  },
  {
    label: 'CLAN / GUILD',
    icon: Users,
    children: [
      { label: 'Danh sách nhóm', icon: Users, href: '/admin/clans/list' },
      { label: 'Lịch sử chat', icon: MessageSquare, href: '/admin/clans/chats' },
      { label: 'Khóa nhóm vi phạm', icon: ShieldCheck, href: '/admin/clans/block' },
      { label: 'Tìm theo chủ đề', icon: Search, href: '/admin/clans/search' }
    ]
  },
  {
    label: 'TRẬN ĐẤU (BATTLE)',
    icon: Sword,
    children: [
      { label: 'Lịch sử trận', icon: CalendarCheck, href: '/admin/battles/history' },
      { label: 'Trận nghi vấn gian lận', icon: AlertTriangle, href: '/admin/battles/flags' },
      { label: 'Bộ câu hỏi battle', icon: BookOpenCheck, href: '/admin/battles/questions' },
      { label: 'Xếp hạng top', icon: Medal, href: '/admin/battles/ranking' }
    ]
  },
  {
    label: 'PHÂN TÍCH HỆ THỐNG',
    icon: BarChart2,
    children: [
      { label: 'Thống kê người học', icon: Users, href: '/admin/analytics/learners' },
      { label: 'Doanh thu & vật phẩm', icon: DollarSign, href: '/admin/analytics/revenue' },
      { label: 'So sánh thời gian', icon: CalendarClock, href: '/admin/analytics/compare' },
      { label: 'Xuất báo cáo', icon: FileCheck, href: '/admin/analytics/export' }
    ]
  },
  {
    label: 'HỖ TRỢ & BÁO CÁO',
    icon: MessageSquare,
    children: [
      { label: 'Danh sách báo cáo', icon: AlertTriangle, href: '/admin/support/reports' },
      { label: 'Trạng thái xử lý', icon: Check, href: '/admin/support/status' },
      { label: 'FAQ / Câu hỏi thường gặp', icon: BookOpenCheck, href: '/admin/support/faq' },
      { label: 'Feedback người dùng', icon: Reply, href: '/admin/support/feedback' }
    ]
  },
  {
    label: 'HỆ THỐNG & CẤU HÌNH',
    icon: Settings,
    children: [
      { label: 'Phân quyền', icon: Shield, href: '/admin/system/roles' },
      { label: 'Nhật ký hoạt động', icon: LockKeyhole, href: '/admin/system/logs' },
      { label: 'Backup & Restore', icon: Cpu, href: '/admin/system/backup' },
      { label: 'Thiết lập cảnh báo', icon: Bell, href: '/admin/system/alerts' }
    ]
  }
];


export default function AdminSidebar() {
  const pathname = usePathname();
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});

  const toggleGroup = (label: string) => {
    setOpenGroups(prev => ({ ...prev, [label]: !prev[label] }));
  };

  const isChildActive = (children: MenuItem[]) =>
    children.some(child => child.href && pathname.startsWith(child.href));

  return (
    <aside className="w-72 bg-slate-800 text-white h-screen border-r border-yellow-400 flex flex-col">
      <div className="p-6 border-b border-yellow-400">
        <div className="flex items-center gap-3">
          <div className="bg-yellow-400 text-slate-900 font-bold w-10 h-10 rounded-full flex items-center justify-center text-lg">BB</div>
          <div>
            <h1 className="text-xl font-semibold">Admin Panel</h1>
            <p className="text-sm text-yellow-200">Health System</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-2 text-sm overflow-y-auto">
        {menu.map(item => {
          const isOpen = openGroups[item.label] || (item.children && isChildActive(item.children));

          if (item.children) {
            return (
              <div key={item.label}>
                <button
                  onClick={() => toggleGroup(item.label)}
                  className="flex w-full items-center justify-between text-yellow-400 px-3 py-2 hover:bg-yellow-100 hover:text-black rounded-lg transition"
                >
                  <div className="flex items-center gap-2">
                    <item.icon className="w-5 h-5" />
                    <span className="font-semibold">{item.label}</span>
                  </div>
                  {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </button>
                {isOpen && (
                  <div className="pl-8 mt-1 space-y-1">
                    {item.children.map(child => (
                      <Link
                        key={child.label}
                        href={child.href!}
                        className={cn(
                          'flex items-center gap-2 px-2 py-1 rounded hover:bg-yellow-100 hover:text-black transition',
                          pathname === child.href && 'bg-yellow-100 text-black font-semibold'
                        )}
                      >
                        <child.icon className="w-4 h-4" />
                        <span>{child.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href!}
              className={cn(
                'flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-yellow-100 hover:text-black transition',
                pathname === item.href && 'bg-yellow-100 text-black font-semibold'
              )}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
