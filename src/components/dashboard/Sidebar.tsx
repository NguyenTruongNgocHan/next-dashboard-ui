'use client';

import {
  LayoutDashboard, Users, UserX, Search, ClipboardList, FileCheck, Tag, BarChart2,
  Dumbbell, Utensils, Puzzle, Medal, MessageSquare, AlertTriangle, ShieldCheck,
  CalendarCheck, Check, Reply, DollarSign, Cpu, BookOpenCheck, Bell, CalendarClock,
  Settings, Shield, LockKeyhole, ChevronRight, ChevronDown, Video, Star, Sword
} from 'lucide-react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { cn } from '@/lib/utils';

type MenuItem = {
  label: string;
  icon: React.ElementType;
  href?: string;
  children?: MenuItem[];
};

const menu: MenuItem[] = [
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
  const sidebarRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(sidebarRef.current, { x: -300, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7, ease: 'power3.out' });
  }, []);

  const toggleGroup = (label: string) => {
    const isOpening = !openGroups[label];
    setOpenGroups(prev => ({ ...prev, [label]: isOpening }));

    setTimeout(() => {
      const submenu = document.querySelector(`[data-submenu="${label}"]`);
      if (submenu) {
        gsap.fromTo(
          submenu,
          { height: 0, opacity: 0 },
          {
            height: 'auto',
            opacity: 1,
            duration: 0.4,
            ease: 'power2.out'
          }
        );
      }
    }, 50);
  };

  const isChildActive = (children: MenuItem[]) =>
    children.some(child => child.href && pathname.startsWith(child.href));

  return (
    <aside
      ref={sidebarRef}
      className="w-72 bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-[#e2e8f0] h-screen border-r border-[#fbbf24] flex flex-col shadow-[0_2px_20px_rgba(251,191,36,0.15)]"
    >
      <div className="p-6 border-b border-[#fbbf24]">
        <div className="flex items-center gap-3">
          <div className="bg-[#fbbf24] text-[#0f172a] font-bold w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-md">BB</div>
          <div>
            <h1 className="text-xl font-semibold">BRAIN BATTLE</h1>
            <p className="text-sm text-[#fde68a]">Learning Language System</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-2 text-sm overflow-y-auto scrollbar-thin scrollbar-thumb-[#facc15] scrollbar-track-transparent">
        {menu.map(item => {
          const isOpen = openGroups[item.label] || (item.children && isChildActive(item.children));

          if (item.children) {
            return (
              <div key={item.label}>
                <button
                  onClick={() => toggleGroup(item.label)}
                  className="flex w-full items-center justify-between text-[#fbbf24] px-3 py-2 hover:bg-[#fbbf24]/10 hover:text-[#fde68a] rounded-lg transition"
                >
                  <div className="flex items-center gap-2">
                    <item.icon className="w-5 h-5" />
                    <span className="font-semibold text-sm">{item.label}</span>
                  </div>
                  <ChevronRight className={cn("w-4 h-4 transition-transform duration-200", isOpen && "rotate-90")} />
                </button>
                {isOpen && (
                  <div className="pl-8 mt-1 space-y-1" data-submenu={item.label}>
                    {item.children.map(child => (
                      <Link
                        key={child.label}
                        href={child.href!}
                        className={cn(
                          'flex items-center gap-2 px-2 py-1 rounded-md hover:bg-[#fbbf24]/10 hover:text-[#fde68a] transition duration-150',
                          pathname === child.href && 'bg-[#fbbf24] text-[#0f172a] font-semibold shadow-sm'
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
                'flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#fbbf24]/10 hover:text-[#fde68a] transition',
                pathname === item.href && 'bg-[#fbbf24] text-[#0f172a] font-semibold shadow-sm'
              )}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}