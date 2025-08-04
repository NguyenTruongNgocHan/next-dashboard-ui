'use client';

import { usePathname } from 'next/navigation';

const pageInfo: Record<string, { title: string; description: string }> = {
  '/admin': {
    title: 'Dashboard',
    description: "Monitor your brand's visibility across AI models",
  },
  '/admin/users/learners': {
    title: 'Danh sách người dùng',
    description: 'Quản lý thông tin học viên trong hệ thống',
  },
  '/admin/users': {
    title: 'Quản lý người dùng',
    description: 'Thống kê và kiểm soát người dùng hệ thống',
  },
  '/admin/users/creators': {
    title: 'Creator & Quyền truy cập',
    description: 'Quản lý creator và phân quyền nâng cao',
  },
  // Thêm các route khác tùy bạn...
};

export default function Header() {
  const pathname = usePathname();
  const current = pageInfo[pathname] || {
    title: 'Trang không xác định',
    description: '',
  };

  return (
    <header className="w-full px-6 py-4 border-b border-yellow-400 bg-black flex items-center justify-between">
      {/* Left: Title */}
      <div>
        <h1 className="text-2xl font-bold text-white">{current.title}</h1>
        <p className="text-sm text-yellow-200">{current.description}</p>
      </div>

      {/* Right: Avatar */}
      <div className="w-10 h-10 rounded-full bg-yellow-400 text-black flex items-center justify-center font-bold text-lg">
        BB
      </div>
    </header>
  );
}
