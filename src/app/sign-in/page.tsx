'use client';

import Link from 'next/link';

export default function SignInPage() {
  return (
    <main className="flex w-screen min-h-screen">
      {/* Form Sign In */}
      <section className="flex flex-col justify-center items-center w-full lg:w-1/2 px-4 sm:px-6 bg-white">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Đăng nhập</h1>
          <p className="text-sm text-gray-500 mb-6">Chào mừng bạn quay lại!</p>

          <form className="space-y-4">
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
              Đăng nhập
            </button>
            <p className="text-sm text-center">
              Chưa có tài khoản?{' '}
              <Link href="/sign-up" className="text-yellow-500 hover:underline">
                Đăng ký
              </Link>
            </p>
          </form>
        </div>
      </section>

      {/* Branding / Logo */}
      <section className="hidden lg:flex w-1/2 min-h-screen bg-yellow-400 relative items-center justify-center">
        {/* Nền mờ + overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/london.jpg')] bg-cover bg-center brightness-110 contrast-110"></div>
          <div className="absolute inset-0 bg-yellow-400 opacity-70"></div>
        </div>

        {/* Nội dung branding */}
        <div className="relative z-10 text-center">
          <div className="flex justify-center mb-4">
            <div className="rotate-315 shadow-lg">
  <div className="w-20 h-20 bg-black text-white flex items-center justify-center text-3xl font-extrabold clip-soft-hexagon">
    B
  </div>
</div>


          </div>
          <h2 className="text-3xl font-extrabold text-white drop-shadow">BrainBattle</h2>
          <p className="text-white text-sm mt-2 opacity-90">Nền tảng học tiếng Anh giao tiếp, vui như game!</p>
        </div>
      </section>
    </main>
  );
}
