'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function LandingPage() {
  // 👇 Pricing toggle ke liye state
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly');
  const isYearly = billing === 'yearly';

  // 👇 Plans ka data — ek jagah, easy to maintain
  const plans = [
    {
      name: 'Starter',
      desc: 'Perfect for individuals',
      monthlyPrice: 0,
      features: [
        'Up to 50 documents',
        'Basic AI search',
        '1 user',
        'Community support',
        '7-day activity history',
      ],
      cta: 'Get Started Free',
      popular: false,
    },
    {
      name: 'Professional',
      desc: 'For growing teams',
      monthlyPrice: 29,
      features: [
        'Unlimited documents',
        'Advanced AI with GPT-4',
        'Up to 10 users',
        'Priority support',
        'Knowledge graph',
        'Custom integrations',
        '90-day history',
      ],
      cta: 'Start 14-Day Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      desc: 'For large organizations',
      monthlyPrice: null,
      features: [
        'Everything in Professional',
        'Unlimited users',
        'SSO & SAML',
        'Dedicated support',
        'Custom AI models',
        'Advanced security',
        'SLA guarantee',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  // 👇 Price calculate karo — yearly me 20% off
  const getPrice = (monthlyPrice: number | null) => {
    if (monthlyPrice === null) return null;
    if (monthlyPrice === 0) return 0;
    return isYearly ? Math.round(monthlyPrice * 0.8) : monthlyPrice;
  };

  return (
    <div className="min-h-screen bg-[#FAFBFC] text-gray-900 selection:bg-teal-200 selection:text-teal-900 antialiased overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className="absolute -top-40 -right-40 w-150 h-150 bg-teal-200/30 rounded-full blur-[120px] animate-pulse"
          style={{ animationDuration: '4s' }}
        />
        <div
          className="absolute top-1/3 -left-40 w-125 h-125 bg-blue-200/20 rounded-full blur-[120px] animate-pulse"
          style={{ animationDuration: '5s', animationDelay: '1s' }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-100 h-100 bg-purple-200/20 rounded-full blur-[100px] animate-pulse"
          style={{ animationDuration: '6s', animationDelay: '2s' }}
        />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 cursor-pointer group"
          >
            <div className="relative w-9 h-9 bg-linear-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-teal-600/30 group-hover:shadow-xl group-hover:shadow-teal-600/40 transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
              <span className="relative z-10">S</span>
              <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-xl font-bold bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:from-teal-700 group-hover:to-teal-600 transition-all duration-300">
              SyncOps
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1 bg-gray-100/80 backdrop-blur rounded-full p-1">
            {['Features', 'Pricing', 'Customers'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-4 py-1.5 text-sm font-medium text-gray-600 hover:text-teal-700 hover:bg-white rounded-full transition-all cursor-pointer hover:scale-105"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/login"
              className="hidden sm:block px-4 py-2 text-sm font-medium text-gray-700 hover:text-teal-700 transition-colors cursor-pointer"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="relative px-5 py-2 text-sm font-semibold text-white bg-linear-to-r from-teal-600 to-teal-700 rounded-full hover:from-teal-700 hover:to-teal-800 transition-all duration-300 shadow-lg shadow-teal-600/30 hover:shadow-xl hover:shadow-teal-600/40 cursor-pointer hover:-translate-y-0.5 overflow-hidden group"
            >
              <span className="relative z-10">Start Free →</span>
              <div className="absolute inset-0 bg-linear-to-r from-teal-500 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-28 pb-32 overflow-hidden z-10">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="relative">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-700 mb-6 backdrop-blur hover:border-teal-300 hover:shadow-md transition-all cursor-pointer group shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600" />
                </span>
                <span>New: AI Knowledge Graph v2.0</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.05] mb-6 tracking-tighter">
                Your team's
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10 bg-linear-to-r from-teal-600 via-teal-500 to-blue-600 bg-clip-text text-transparent">
                    second brain
                  </span>
                  <svg
                    className="absolute -bottom-3 left-0 w-full"
                    viewBox="0 0 400 12"
                    fill="none"
                  >
                    <path
                      d="M2 10C80 4 200 2 300 2C350 2 380 4 398 10"
                      stroke="url(#grad-hero)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="grad-hero" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0D9488" />
                        <stop offset="100%" stopColor="#2563EB" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <br />
                <span className="text-gray-500">powered by AI.</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
                Connect every document, meeting, and conversation. Ask anything
                in natural language. Get instant, accurate answers from your
                entire workspace.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link
                  href="/signup"
                  className="group relative px-7 py-3.5 bg-teal-600 text-white rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  Start Free — No Card
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <button className="group px-7 py-3.5 bg-white border-2 border-gray-200 text-gray-900 rounded-full font-semibold hover:border-teal-400 hover:bg-teal-50/50 transition-all duration-300 cursor-pointer hover:shadow-lg flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                  Watch Demo
                </button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-white shadow-sm hover:scale-110 transition-transform cursor-pointer"
                        style={{
                          backgroundImage: `linear-gradient(135deg, hsl(${170 + i * 15}, 70%, 50%), hsl(${180 + i * 15}, 70%, 40%))`,
                        }}
                      />
                    ))}
                  </div>
                  <span className="font-semibold text-gray-900">50,000+</span>
                  <span>teams</span>
                </div>
              </div>
            </div>

            {/* Right - Dashboard Mockup */}
            <div className="relative lg:pl-8">
              <div className="relative" style={{ perspective: '1500px' }}>
                <div
                  className="relative transform rotate-y-[-8deg] rotate-x-[5deg] hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className="absolute -inset-8 bg-linear-to-r from-teal-400/20 via-blue-400/20 to-purple-400/20 rounded-3xl blur-3xl opacity-60" />

                  <div className="relative bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-2xl shadow-gray-900/10">
                    <div className="bg-linear-to-b from-gray-50 to-gray-100 px-4 py-3 border-b border-gray-200 flex items-center gap-3">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400/80" />
                        <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                        <div className="w-3 h-3 rounded-full bg-green-400/80" />
                      </div>
                      <div className="flex-1 flex justify-center">
                        <div className="bg-white rounded-md px-4 py-1 text-xs text-gray-500 border border-gray-200 shadow-sm">
                          app.syncops.ai
                        </div>
                      </div>
                    </div>

                    <div className="p-5 space-y-4">
                      <div className="bg-white border border-gray-200 rounded-xl p-4 hover:border-teal-300 hover:shadow-md transition-all">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-teal-500 to-teal-700 flex items-center justify-center shadow-md shadow-teal-600/30 animate-pulse">
                            <span className="text-white text-sm">✨</span>
                          </div>
                          <span className="text-sm text-gray-400">Ask anything...</span>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                          {['Summarize meeting', 'Find contracts', 'Who owns X?'].map((suggestion, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 bg-gray-50 border border-gray-200 text-xs text-gray-600 rounded-full hover:bg-teal-50 hover:border-teal-200 hover:text-teal-700 transition-all cursor-pointer"
                            >
                              {suggestion}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { label: 'Projects', value: '12', color: 'teal' },
                          { label: 'Tasks', value: '28', color: 'amber' },
                          { label: 'Updates', value: '156', color: 'blue' },
                        ].map((stat, i) => (
                          <div
                            key={i}
                            className="bg-white border border-gray-200 rounded-xl p-3 hover:border-teal-300 hover:shadow-md transition-all cursor-pointer"
                          >
                            <div className="text-2xl font-bold text-gray-900 mb-0.5">{stat.value}</div>
                            <div className="text-xs text-gray-500">{stat.label}</div>
                          </div>
                        ))}
                      </div>

                      <div className="bg-white border border-gray-200 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-sm font-bold text-gray-900">Recent Activity</h4>
                          <span className="text-xs text-teal-600 font-semibold">View all</span>
                        </div>
                        <div className="space-y-2">
                          {[
                            { icon: '📄', title: 'Q4 Report.pdf', action: '2m ago' },
                            { icon: '📅', title: 'Product Review', action: '30 min' },
                            { icon: '💬', title: 'Comment on Alpha', action: '1h ago' },
                          ].map((activity, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                            >
                              <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-sm">
                                {activity.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-medium text-gray-900 truncate">{activity.title}</div>
                                <div className="text-xs text-gray-500">{activity.action}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="absolute -top-4 -right-4 bg-white px-4 py-3 rounded-xl shadow-2xl border border-gray-100 hidden md:block animate-bounce"
                    style={{ animationDuration: '4s' }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-linear-to-br from-green-400 to-emerald-600 flex items-center justify-center text-white text-sm shadow-md">
                        ✓
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-900">AI Analysis</div>
                        <div className="text-[10px] text-gray-500">247 docs processed</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-5xl font-black text-teal-600">70%</h3>
              <p className="text-gray-600 mt-2">Less Time Searching</p>
            </div>
            <div>
              <h3 className="text-5xl font-black text-teal-600">10x</h3>
              <p className="text-gray-600 mt-2">Faster Onboarding</p>
            </div>
            <div>
              <h3 className="text-5xl font-black text-teal-600">50K+</h3>
              <p className="text-gray-600 mt-2">Teams</p>
            </div>
            <div>
              <h3 className="text-5xl font-black text-teal-600">99.9%</h3>
              <p className="text-gray-600 mt-2">Availability</p>
            </div>
          </div>
        </div>
      </section>

      {/* How SyncOps Works */}
      <section className="py-24 bg-linear-to-b from-white via-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-teal-50 border border-teal-200 rounded-full text-xs font-semibold text-teal-700 mb-4 tracking-wider">
              HOW IT WORKS
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              Three steps to
              <span className="bg-linear-to-r from-teal-600 via-teal-500 to-blue-600 bg-clip-text text-transparent"> instant intelligence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get up and running in minutes. No complex setup required.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 relative">
            <div className="hidden md:block absolute top-16 left-[16.66%] right-[16.66%] h-0.5 bg-linear-to-r from-teal-300 via-blue-300 to-purple-300 opacity-40" />

            {/* Step 1 */}
            <div className="group relative">
              <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-teal-400 hover:shadow-2xl hover:shadow-teal-600/10 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-teal-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-teal-500 to-teal-700 flex items-center justify-center shadow-lg shadow-teal-600/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>
                    <div className="text-6xl font-black text-gray-100 group-hover:text-teal-100 transition-colors">01</div>
                  </div>
                  <h3 className="font-bold text-2xl mb-3 text-gray-900">Connect Your Tools</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Link Slack, Notion, Drive, Jira, Zoom and 50+ other apps in seconds.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Slack', 'Notion', 'Drive', 'Jira'].map((app) => (
                      <span key={app} className="px-3 py-1 bg-gray-50 border border-gray-200 text-xs font-semibold text-gray-600 rounded-full group-hover:bg-teal-50 group-hover:border-teal-200 group-hover:text-teal-700 transition-all">
                        {app}
                      </span>
                    ))}
                    <span className="px-3 py-1 bg-teal-50 border border-teal-200 text-xs font-semibold text-teal-700 rounded-full">+50 more</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="group relative">
              <div className="bg-linear-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 text-white shadow-2xl shadow-gray-900/20 hover:shadow-gray-900/40 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl -mr-32 -mt-32 group-hover:scale-125 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -ml-32 -mb-32 group-hover:scale-125 transition-transform duration-700" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div className="text-6xl font-black text-white/10 group-hover:text-white/20 transition-colors">02</div>
                  </div>
                  <h3 className="font-bold text-2xl mb-3">Ask Naturally</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Just type your question like you're asking a colleague. No commands needed.
                  </p>
                  <div className="space-y-2">
                    {["What did we decide in Monday's meeting?", 'Show me Q4 revenue numbers'].map((q, i) => (
                      <div key={i} className="flex items-center gap-2 px-3 py-2 bg-white/5 backdrop-blur border border-white/10 rounded-xl text-xs text-gray-200 group-hover:bg-white/10 transition-all">
                        <span className="text-teal-400">›</span>
                        <span className="truncate">{q}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="group relative">
              <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-600/10 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-teal-600 flex items-center justify-center shadow-lg shadow-blue-600/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="text-6xl font-black text-gray-100 group-hover:text-blue-100 transition-colors">03</div>
                  </div>
                  <h3 className="font-bold text-2xl mb-3 text-gray-900">Get Instant Answers</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Receive accurate answers with source citations in seconds.
                  </p>
                  <div className="bg-linear-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-xs font-bold text-gray-900">Answer ready</span>
                    </div>
                    <div className="h-2 bg-white rounded-full w-full" />
                    <div className="h-2 bg-white rounded-full w-4/5" />
                    <div className="flex items-center gap-1 pt-1">
                      <span className="text-[10px] font-semibold text-teal-600">📎 3 sources cited</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-gray-500 mb-4">
              Average setup time: <span className="font-bold text-gray-900">under 5 minutes</span>
            </p>
          </div>
        </div>
      </section>

      {/* Features Bento */}
      <section id="features" className="py-24 z-10 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-teal-50 border border-teal-200 rounded-full text-xs font-semibold text-teal-700 mb-4">
              FEATURES
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              Everything you need,
              <br />
              <span className="bg-linear-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                nothing you don't
              </span>
            </h2>
            <p className="text-xl text-gray-600">Powerful features designed for modern teams.</p>
          </div>

          <div className="grid md:grid-cols-6 gap-4 max-w-6xl mx-auto">
            <div className="md:col-span-4 relative bg-linear-to-br from-teal-600 via-teal-700 to-teal-800 rounded-2xl p-8 text-white cursor-pointer hover:shadow-2xl hover:shadow-teal-600/30 transition-all duration-300 hover:-translate-y-1 group overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48 group-hover:scale-110 transition-transform duration-700" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform">✨</div>
                  <div className="px-3 py-1 bg-white/20 backdrop-blur border border-white/30 rounded-full text-xs font-bold">NEW</div>
                </div>
                <h3 className="text-3xl font-black mb-2">AI-Powered Search</h3>
                <p className="text-teal-100 text-lg mb-6 max-w-md">
                  Find anything across all your tools in seconds. Natural language queries with instant, accurate answers.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Natural Language', 'Semantic Search', 'Source Citations', 'Real-time'].map((tag, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white/10 backdrop-blur border border-white/20 rounded-lg text-xs font-semibold hover:bg-white/20 transition-all">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-2 bg-linear-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-teal-500/0 to-blue-500/0 group-hover:from-teal-500/10 group-hover:to-blue-500/10 transition-all duration-500" />
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-teal-600 flex items-center justify-center text-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform">🧠</div>
                <h3 className="text-xl font-bold mb-2">Knowledge Graph</h3>
                <p className="text-gray-400 text-sm mb-4 flex-1">
                  See how everything connects. AI builds relationships automatically.
                </p>
                <div className="text-xs font-semibold text-teal-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                  Explore
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 bg-white border-2 border-gray-200 rounded-2xl p-6 cursor-pointer hover:border-teal-300 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-red-50 to-red-100 border border-red-200 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-sm">📄</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Documents</h3>
              <p className="text-sm text-gray-600 mb-4">AI-powered document intelligence with auto-tagging.</p>
              <div className="flex items-center gap-2 text-xs font-semibold text-teal-600 group-hover:gap-3 transition-all">
                Learn more
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            <div className="md:col-span-2 bg-white border-2 border-gray-200 rounded-2xl p-6 cursor-pointer hover:border-blue-300 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-50 to-blue-100 border border-blue-200 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-sm">📅</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Meeting Intelligence</h3>
              <p className="text-sm text-gray-600 mb-4">Auto-summaries and searchable transcripts from every call.</p>
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 group-hover:gap-3 transition-all">
                Learn more
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            <div className="md:col-span-2 bg-white border-2 border-gray-200 rounded-2xl p-6 cursor-pointer hover:border-purple-300 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-purple-50 to-purple-100 border border-purple-200 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-sm">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Project Tracking</h3>
              <p className="text-sm text-gray-600 mb-4">Unified view with AI-powered progress insights.</p>
              <div className="flex items-center gap-2 text-xs font-semibold text-purple-600 group-hover:gap-3 transition-all">
                Learn more
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="customers" className="py-24 z-10 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-amber-50 border border-amber-200 rounded-full text-xs font-semibold text-amber-700 mb-4">
              TESTIMONIALS
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              Loved by teams{' '}
              <span className="bg-linear-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">worldwide</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                quote: "SyncOps cut our meeting prep time by 70%. The AI search is genuinely magical.",
                name: 'Sarah Chen',
                role: 'VP of Operations',
                company: 'TechFlow',
                gradient: 'from-teal-500 to-teal-700',
              },
              {
                quote: "Finally, a single source of truth. Our team stopped asking 'where is that doc?'",
                name: 'Marcus Johnson',
                role: 'Head of Product',
                company: 'ScaleUp',
                gradient: 'from-blue-500 to-blue-700',
              },
              {
                quote: "The knowledge graph feature is a game-changer. We discovered connections we'd missed.",
                name: 'Priya Patel',
                role: 'Engineering Lead',
                company: 'DataCore',
                gradient: 'from-purple-500 to-purple-700',
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-teal-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className={`w-10 h-10 rounded-full bg-linear-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.role} · {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ PRICING — YE HAI MAIN FIX */}
      <section
        id="pricing"
        className="py-24 bg-linear-to-b from-white via-gray-50/50 to-white z-10 relative"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-amber-50 border border-amber-200 rounded-full text-xs font-semibold text-amber-700 mb-4">
              PRICING
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Start free. Upgrade when you're ready.
            </p>

            {/* 👇 Toggle — ab functional hai */}
            <div className="inline-flex items-center gap-1 bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setBilling('monthly')}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${!isYearly
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling('yearly')}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${isYearly
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                Yearly <span className="text-xs text-teal-600 font-bold">-20%</span>
              </button>
            </div>
          </div>

          {/* 👇 Plans — dynamic prices ke saath */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan) => {
              const price = getPrice(plan.monthlyPrice);
              const isPopular = plan.popular;

              return (
                <div
                  key={plan.name}
                  className={`relative rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:-translate-y-1 ${isPopular
                    ? 'bg-linear-to-br from-teal-600 via-teal-700 to-teal-800 text-white shadow-2xl shadow-teal-600/30 ring-2 ring-teal-500 hover:shadow-teal-600/40'
                    : 'bg-white border-2 border-gray-200 hover:border-gray-300 hover:shadow-xl'
                    }`}
                >
                  {isPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-linear-to-r from-teal-500 to-teal-600 text-white text-xs font-black rounded-full shadow-lg shadow-teal-600/50">
                      MOST POPULAR
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <p className={`text-sm ${isPopular ? 'text-teal-100' : 'text-gray-600'}`}>
                      {plan.desc}
                    </p>
                  </div>

                  <div className="mb-6">
                    {price === null ? (
                      <>
                        <div className="flex items-baseline gap-1">
                          <span className={`text-5xl font-black ${isPopular ? '' : 'text-gray-900'}`}>
                            Custom
                          </span>
                        </div>
                        <div className={`text-xs font-semibold mt-1 ${isPopular ? 'text-teal-200' : 'text-gray-500'}`}>
                          Tailored to your needs
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-baseline gap-1">
                          <span className={`text-5xl font-black ${isPopular ? '' : 'text-gray-900'}`}>
                            ${price}
                          </span>
                          <span className={isPopular ? 'text-teal-100' : 'text-gray-500'}>/month</span>
                        </div>
                        {isYearly && price > 0 && (
                          <div className={`text-xs font-semibold mt-1 ${isPopular ? 'text-teal-200' : 'text-gray-500'}`}>
                            per user, billed annually (${price * 12}/yr)
                          </div>
                        )}
                        {!isYearly && price > 0 && (
                          <div className={`text-xs font-semibold mt-1 ${isPopular ? 'text-teal-200' : 'text-gray-500'}`}>
                            per user, billed monthly
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f, i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-3 text-sm ${isPopular ? 'text-teal-50' : 'text-gray-700'}`}
                      >
                        <svg
                          className={`w-5 h-5 shrink-0 mt-0.5 ${isPopular ? 'text-teal-300' : 'text-teal-600'}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 rounded-xl text-sm font-bold transition-all cursor-pointer ${isPopular
                      ? 'bg-white text-teal-700 hover:bg-gray-50 shadow-lg'
                      : 'bg-gray-50 border-2 border-gray-200 text-gray-900 hover:border-teal-300 hover:bg-teal-50'
                      }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 z-10 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative bg-linear-to-br from-teal-600 via-teal-700 to-teal-800 rounded-3xl p-12 md:p-16 text-center text-white shadow-2xl shadow-teal-600/30 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl -ml-48 -mb-48" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                Stop searching.
                <br />
                <span className="bg-linear-to-r from-white to-teal-100 bg-clip-text text-transparent">
                  Start knowing.
                </span>
              </h2>
              <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
                Join 50,000+ teams transforming scattered information into AI-powered intelligence.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <Link
                  href="/signup"
                  className="group px-8 py-4 bg-white text-teal-700 rounded-full font-bold hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer hover:-translate-y-0.5 flex items-center gap-2"
                >
                  Start Free — No Card Required
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <button className="px-8 py-4 bg-white/10 backdrop-blur border-2 border-white/30 text-white rounded-full font-bold hover:bg-white/20 transition-all duration-300 cursor-pointer">
                  Book a Demo
                </button>
              </div>

              <div className="mt-8 flex items-center justify-center gap-6 text-sm text-teal-100 flex-wrap">
                {['Free 14-day trial', 'No credit card required', 'Cancel anytime'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-linear-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -translate-y-1/2" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-amber-50 border border-amber-200 rounded-full text-xs font-semibold text-amber-700 mb-4 tracking-wider">
              FAQ
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              Frequently Asked
              <span className="bg-linear-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent"> Questions</span>
            </h2>
            <p className="text-xl text-gray-600">Everything you need to know about SyncOps.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              { q: 'How does SyncOps work?', a: "SyncOps uses advanced AI to connect all your tools and build a knowledge graph of your company's information. Ask questions in natural language and get instant, accurate answers with source citations.", icon: '⚡', color: 'teal' },
              { q: 'Which integrations are supported?', a: 'We support 50+ integrations including Slack, Notion, Google Drive, Jira, Confluence, Zoom, GitHub, Linear, and many more. New integrations are added regularly.', icon: '🔗', color: 'blue' },
              { q: 'Is my data secure?', a: 'Absolutely. We use enterprise-grade encryption (AES-256), SOC 2 Type II compliance, and never use your data to train our models. Your information stays private and secure.', icon: '🔒', color: 'purple' },
              { q: 'Do you offer enterprise plans?', a: 'Yes! Our Enterprise plan includes unlimited users, SSO/SAML, dedicated support, custom AI models, advanced security features, and SLA guarantees. Contact our sales team for details.', icon: '🏢', color: 'amber' },
              { q: 'Can I use my own AI model?', a: 'Yes, Enterprise customers can bring their own AI models or use private deployments. We support OpenAI, Anthropic, and custom fine-tuned models.', icon: '🤖', color: 'teal' },
              { q: 'How long does setup take?', a: "Most teams are up and running in under 5 minutes. Simply connect your tools, and our AI starts building your knowledge graph automatically. No technical setup required.", icon: '⏱️', color: 'blue' },
            ].map((faq, i) => (
              <div
                key={i}
                className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-teal-300 hover:shadow-xl hover:shadow-teal-600/5 transition-all duration-300 cursor-pointer hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${faq.color === 'teal' ? 'from-teal-50 to-teal-100 border-teal-200' :
                    faq.color === 'blue' ? 'from-blue-50 to-blue-100 border-blue-200' :
                      faq.color === 'purple' ? 'from-purple-50 to-purple-100 border-purple-200' :
                        'from-amber-50 to-amber-100 border-amber-200'
                    } border flex items-center justify-center text-2xl shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm`}>
                    {faq.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-bold text-gray-900 text-base leading-snug">{faq.q}</h3>
                      <div className="w-6 h-6 rounded-full bg-gray-100 group-hover:bg-teal-100 flex items-center justify-center shrink-0 transition-colors">
                        <svg className="w-3 h-3 text-gray-600 group-hover:text-teal-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-4 bg-white border-2 border-gray-200 rounded-2xl shadow-sm">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white shadow-md">💬</div>
              <div className="text-left">
                <p className="text-sm font-bold text-gray-900">Still have questions?</p>
                <p className="text-xs text-gray-500">Our team is here to help 24/7</p>
              </div>
              <Link
                href="/contact"
                className="ml-4 px-4 py-2 bg-teal-600 text-white text-sm font-bold rounded-full hover:bg-teal-700 transition-colors shadow-md hover:shadow-lg"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 border-t border-gray-800 py-16 z-10 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5 mb-4 cursor-pointer group">
                <div className="w-9 h-9 bg-linear-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-teal-600/30 group-hover:scale-110 transition-transform">
                  S
                </div>
                <span className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">SyncOps</span>
              </div>
              <p className="text-sm leading-relaxed mb-4 max-w-xs">
                Your company's second brain. Connect everything, know instantly.
              </p>
              <div className="flex gap-3">
                {/* Twitter / X */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-teal-600 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-teal-600/30 group"
                  aria-label="Twitter"
                >
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-teal-600 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-teal-600/30 group"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-teal-600 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-teal-600/30 group"
                  aria-label="GitHub"
                >
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
              </div>
            </div>

            {[
              { title: 'Product', links: ['Features', 'Pricing', 'Integrations', 'Changelog'] },
              { title: 'Company', links: ['About', 'Blog', 'Careers', 'Contact'] },
              { title: 'Resources', links: ['Documentation', 'Help Center', 'Community', 'API'] },
            ].map((col, i) => (
              <div key={i}>
                <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">{col.title}</h4>
                <ul className="space-y-2.5">
                  {col.links.map((link, j) => (
                    <li key={j}>
                      <a href="#" className="text-sm hover:text-teal-400 cursor-pointer transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm">© 2026 SyncOps. All rights reserved.</div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-teal-400 cursor-pointer transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-teal-400 cursor-pointer transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-teal-400 cursor-pointer transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}