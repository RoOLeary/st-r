import { Link } from "next-view-transitions";

export default function Login() {
  return (
    <main className="flex min-h-screen flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:px-8 bg-black">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href={`/`}>
          <h1 className="mt-6 text-center text-5xl font-black tracking-tight text-white">
            STÖR
          </h1>
        </Link>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md md:max-w-lg lg:max-w-xl">
        <div className="bg-white px-6 py-12 shadow-sm rounded-md sm:px-12">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 border border-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-2 text-base border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex gap-3 items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label htmlFor="remember-me" className="text-sm text-gray-900">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </a>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-black px-4 py-2 text-white font-semibold shadow hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              >
                Sign in
              </button>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-slate-500 px-4 py-2 text-white font-semibold shadow hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              >
                Register
              </button>
            </div>
            
            <div className="flex gap-3 items-start">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                required
              />
              <label htmlFor="terms" className="text-sm text-gray-900">
                I have read and accepted the terms and conditions, privacy, and cookie statements.
              </label>
            </div>
          </form>
        </div>

        <p className="mt-10 text-center text-sm text-white">
          Not a member?{' '}
          <a href="#" className="font-semibold text-yellow-400 hover:text-slate-200">
            Start a 14-day free trial
          </a>
        </p>
      </div>
    </main>
  );
}
