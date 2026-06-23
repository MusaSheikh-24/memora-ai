'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false,
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        router.push('/dashboard');
        setIsLoading(false);
    };

    return (
        <div className="min-h-screen flex">
            {/* Left Side - Teal Background */}
            <div className="hidden lg:flex lg:w-1/2 bg-teal-600 relative overflow-hidden">
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size[3rem_3rem]" />

                {/* Glow Effects */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10 flex flex-col justify-center h-full p-12 text-white">
                    {/* Logo */}
                    <Link href="/" className="absolute top-8 left-8 flex items-center gap-2.5 group">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center font-bold text-lg border border-white/10 group-hover:bg-white/30 transition-colors">
                            S
                        </div>
                        <span className="text-2xl font-bold tracking-tight">SyncOps</span>
                    </Link>

                    {/* Main Content - Centered */}
                    <div className="space-y-6 max-w-md">
                        <div>
                            <h1 className="text-4xl font-bold leading-tight mb-3">
                                Welcome back to your <br />
                                <span className="text-teal-200">second brain.</span>
                            </h1>
                            <p className="text-teal-100 text-lg">
                                Sign in to access your AI-powered knowledge base.
                            </p>
                        </div>

                        {/* Features */}
                        <div className="space-y-3 pt-2">
                            {['Secure & encrypted', 'Fast AI responses', 'All your data synced'].map((feature, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-teal-500/30 flex items-center justify-center shrink-0 border border-teal-400/30">
                                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-teal-50 font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Enhanced Live Demo Card */}
                    <div className="mt-10 bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 shadow-xl">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                <span className="text-xs font-semibold text-teal-100">Live Demo</span>
                            </div>
                            <span className="text-xs text-teal-200/60">AI Active</span>
                        </div>

                        {/* Search Query */}
                        <div className="bg-white/10 rounded-lg p-3 mb-3 border border-white/10">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-6 h-6 rounded bg-teal-500/30 flex items-center justify-center">
                                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <span className="text-xs text-teal-50">What did we decide in Monday's meeting?</span>
                            </div>
                        </div>

                        {/* AI Response Preview */}
                        <div className="space-y-2 mb-3">
                            <div className="flex items-start gap-2">
                                <div className="w-5 h-5 rounded bg-teal-500/30 flex items-center justify-center shrink-0 mt-0.5">
                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <div className="h-1.5 bg-white/20 rounded-full w-full mb-1.5" />
                                    <div className="h-1.5 bg-white/20 rounded-full w-4/5" />
                                </div>
                            </div>
                        </div>

                        {/* Sources */}
                        <div className="flex items-center gap-2 pt-2 border-t border-white/10">
                            <svg className="w-3 h-3 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                            <span className="text-[10px] text-teal-200">3 sources cited</span>
                            <div className="flex gap-1 ml-auto">
                                <div className="h-4 bg-white/10 rounded px-2 text-[9px] flex items-center text-teal-100">📄 PDF</div>
                                <div className="h-4 bg-white/10 rounded px-2 text-[9px] flex items-center text-teal-100"> Slack</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - White Background with Form */}
            <div className="w-full lg:w-1/2 bg-white flex flex-col items-center justify-center p-6 lg:p-12 relative">

                {/* Back Arrow Button */}
                <Link
                    href="/"
                    className="absolute top-6 left-6 flex items-center gap-2 text-gray-500 hover:text-teal-600 transition-colors group"
                >
                    <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    <span className="text-sm font-medium">Back to home</span>
                </Link>

                <div className="w-full max-w-sm space-y-5 mt-8 lg:mt-0">
                    {/* Header */}
                    <div className="text-center lg:text-left">
                        <div className="lg:hidden flex items-center justify-center gap-2.5 mb-4">
                            <div className="w-9 h-9 bg-teal-600 rounded-xl flex items-center justify-center font-bold text-white">
                                S
                            </div>
                            <span className="text-xl font-bold text-gray-900">SyncOps</span>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-1">
                            Sign in to your account
                        </h2>
                        <p className="text-gray-600 text-sm">
                            Don't have an account?{' '}
                            <Link href="/signup" className="text-teal-600 font-semibold hover:text-teal-700">
                                Sign up
                            </Link>
                        </p>
                    </div>

                    {/* Social Login */}
                    <div className="space-y-2">
                        <button className="w-full cursor-pointer flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-gray-200 rounded-lg text-gray-700 font-medium hover:border-teal-300 hover:bg-teal-50/50 transition-all">
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                            </svg>
                            Continue with Google
                        </button>

                        <button className="w-full cursor-pointer flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-gray-200 rounded-lg text-gray-700 font-medium hover:border-teal-300 hover:bg-teal-50/50 transition-all">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                            </svg>
                            Continue with GitHub
                        </button>
                    </div>

                    {/* Divider */}
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">Or continue with email</span>
                        </div>
                    </div>

                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="space-y-3.5">
                        <div>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-3.5 py-2.5 border-2 border-gray-200 rounded-lg focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all outline-none text-sm text-gray-900 placeholder-gray-400"
                                placeholder="Work email"
                            />
                        </div>

                        <div>
                            <input
                                type="password"
                                required
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                className="w-full px-3.5 py-2.5 border-2 border-gray-200 rounded-lg focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all outline-none text-sm text-gray-900 placeholder-gray-400"
                                placeholder="Password"
                            />
                        </div>

                        <div className="flex items-center justify-between pt-1">
                            <div className="flex items-center gap-2">
                                <input
                                    id="rememberMe"
                                    type="checkbox"
                                    checked={formData.rememberMe}
                                    onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                                    className="w-4 h-4 border-2 border-gray-300 rounded focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all text-teal-600"
                                />
                                <label htmlFor="rememberMe" className="text-xs text-gray-600">
                                    Remember me
                                </label>
                            </div>
                            <Link href="/forgot-password" className="text-xs text-teal-600 font-medium hover:underline">
                                Forgot password?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full cursor-pointer py-2.5 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-all shadow-lg shadow-teal-600/20 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                        >
                            {isLoading ? 'Signing in...' : 'Sign in'}
                        </button>
                    </form>

                    <p className="text-center text-xs text-gray-400 pt-1">
                        Protected by reCAPTCHA and subject to our Privacy Policy.
                    </p>
                </div>
            </div>
        </div>
    );
}