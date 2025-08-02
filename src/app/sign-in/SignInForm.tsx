'use client';

import Link from 'next/link';

export default function SignUpPage() {
  return (
    <main className="flex min-h-screen w-full">
      {/* Left side: Signup Form */}
      <section className="flex flex-col justify-center items-center w-full lg:w-1/2 px-4 sm:px-6">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Đăng ký</h1>
          <p className="text-sm text-gray-500 mb-6">Tạo tài khoản mới để bắt đầu học!</p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Họ tên"
              className="w-full px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="password"
              placeholder="Mật khẩu"
              className="w-full px-4 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white font-semibold py-2 px-4 rounded hover:bg-yellow-600 transition"
            >
              Đăng ký
            </button>
            <p className="text-sm text-center">
              Đã có tài khoản?{' '}
              <Link href="/sign-in" className="text-yellow-500 hover:underline">
                Đăng nhập
              </Link>
            </p>
          </form>
        </div>
      </section>

      {/* Right side: Branding area */}
      <section className="hidden lg:flex w-1/2 min-h-screen bg-yellow-400 flex-col justify-center items-center relative">
        <div className="absolute inset-0 bg-[url('/images/london.png')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 text-center">
          <div className="w-20 h-20 bg-black text-white flex items-center justify-center rounded-[15%_15%_15%_15%/30%_30%_30%_30%] mx-auto mb-4 text-2xl font-bold">
            B
          </div>
          <h2 className="text-3xl font-extrabold text-white drop-shadow">BrainBattle</h2>
          <p className="text-white text-sm mt-2 opacity-90">Nền tảng học tiếng Anh giao tiếp, vui như game!</p>
        </div>
      </section>
    </main>
  );
}
