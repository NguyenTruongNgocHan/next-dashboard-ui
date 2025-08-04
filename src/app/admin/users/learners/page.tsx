'use client';

import { useEffect, useState } from 'react';
import { User } from '@/types/index';
import { UserIcon } from 'lucide-react';

export default function UserListPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Dữ liệu giả demo – sau có thể fetch từ API
    setUsers([
      { id: 'u1', name: 'Nguyễn Văn A', email: 'a@example.com', role: 'Học viên' },
      { id: 'u2', name: 'Trần Thị B', email: 'b@example.com', role: 'Creator' },
      { id: 'u3', name: 'Lê Văn C', email: 'c@example.com', role: 'Học viên' }
    ]);
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-black flex items-center gap-2">
          <UserIcon className="w-5 h-5 text-yellow-500" />
          Danh sách người dùng
        </h2>
        <button className="px-4 py-2 text-sm font-medium bg-yellow-400 text-black rounded hover:bg-yellow-300 transition">
          + Thêm người dùng
        </button>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100 text-sm font-semibold text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">Tên</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Vai trò</th>
              <th className="px-4 py-2">Thao tác</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-800">
            {users.map(user => (
              <tr key={user.id} className="border-t hover:bg-yellow-50 transition">
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.role}</td>
                <td className="px-4 py-2 text-center">
                  <button className="text-blue-500 hover:underline mr-2">Sửa</button>
                  <button className="text-red-500 hover:underline">Xóa</button>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-6 text-center text-gray-500">
                  Không có người dùng nào.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
