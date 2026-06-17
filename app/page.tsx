import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FAFBFC] text-gray-900 selection:bg-teal-200 selection:text-teal-900 antialiased overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-150 h-150 bg-teal-200/30 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-1/3 -left-40 w-125 h-125 bg-blue-200/20 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
        <div className="absolute bottom-0 right-1/4 w-100 h-100 bg-purple-200/20 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-200/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2.5 cursor-pointer group">
            <div className="relative w-9 h-9 bg-linear-to-br from-teal-500 to-teal-700 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-teal-600/30 group-hover:shadow-xl group-hover:shadow-teal-600/40 transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
              <span className="relative z-10">S</span>
              <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-xl font-bold bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent group-hover:from-teal-700 group-hover:to-teal-600 transition-all duration-300">
              SyncOps
            </span>
          </div>

          <div className="hidden md:flex items-center gap-1 bg-gray-100/80 backdrop-blur rounded-full p-1">
            {['Features', 'Pricing', 'AI Search', 'Customers', 'Docs'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="px-4 py-1.5 text-sm font-medium text-gray-600 hover:text-teal-700 hover:bg-white rounded-full transition-all cursor-pointer hover:scale-105"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link href="/login" className="hidden sm:block px-4 py-2 text-sm font-medium text-gray-700 hover:text-teal-700 transition-colors cursor-pointer">
              Login
            </Link>
            <Link
              href="/signup"
              className="relative px-5 py-2 text-sm font-semibold text-white bg-linear-to-r from-teal-600 to-teal-700 rounded-full hover:from-teal-700 hover:to-teal-800 transition-all duration-300 shadow-lg shadow-teal-600/30 hover:shadow-xl hover:shadow-teal-600/40 cursor-pointer hover:-translate-y-0.5 overflow-hidden group"
            >
              <span className="relative z-10">Start Free</span>
              <div className="absolute inset-0 bg-linear-to-r from-teal-500 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden z-10">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-700 mb-6 cursor-pointer hover:border-teal-300 hover:shadow-md transition-all duration-300 shadow-sm animate-bounce" style={{ animationDuration: '3s' }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600" />
              </span>
              <span>New: AI-powered Knowledge Graph is live</span>
              <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-[1.02] mb-6 tracking-tighter">
              Your company's
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 bg-linear-to-r from-teal-600 via-teal-500 to-blue-600 bg-clip-text text-transparent">
                  second brain
                </span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 400 12" fill="none">
                  <path
                    d="M2 10C80 4 200 2 300 2C350 2 380 4 398 10"
                    stroke="url(#grad)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0D9488" />
                      <stop offset="100%" stopColor="#2563EB" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed font-light">
              Connect every document, meeting, and conversation.
              <br className="hidden md:block" />
              Ask anything in natural language. Get instant answers.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-10">
              <Link
                href="/signup"
                className="group relative px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 shadow-xl hover:shadow-2xl cursor-pointer hover:-translate-y-0.5 flex items-center gap-2"
              >
                Start Free — No Card Required
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <button className="group px-8 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-full font-semibold hover:border-teal-400 hover:bg-teal-50/50 transition-all duration-300 cursor-pointer hover:shadow-lg flex items-center gap-2">
                <svg className="w-4 h-4 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Watch 2-min Demo
              </button>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
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
                <span className="font-semibold text-gray-700">50,000+</span>
                <span>teams</span>
              </div>
              <div className="hidden sm:flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-1 font-semibold">4.9/5</span>
                <span className="text-gray-400">· 2,400+ reviews</span>
              </div>
            </div>
          </div>

          {/* Advanced Dashboard Preview */}
          <div className="relative max-w-6xl mx-auto group">
            <div className="absolute -inset-10 bg-linear-to-r from-teal-400/20 via-blue-400/20 to-purple-400/20 rounded-3xl blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-700" />

            <div className="relative bg-white rounded-2xl shadow-2xl shadow-gray-900/10 border border-gray-200 overflow-hidden">
              {/* Browser Chrome */}
              <div className="bg-linear-to-b from-gray-50 to-gray-100 px-5 py-3 border-b border-gray-200 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-white rounded-md px-4 py-1 text-xs text-gray-500 border border-gray-200 flex items-center gap-2 shadow-sm">
                    <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    app.syncops.ai
                  </div>
                </div>
                <div className="w-12" />
              </div>

              {/* Dashboard Content */}
              <div className="grid grid-cols-12 gap-0 min-h-130">
                {/* Sidebar */}
                <div className="col-span-3 bg-linear-to-b from-gray-50 to-white border-r border-gray-200 p-4 hidden md:block">
                  <div className="mb-6">
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Workspace</div>
                    <div className="space-y-1">
                      {[
                        { icon: '🏠', label: 'Home', active: true },
                        { icon: '🔍', label: 'AI Search' },
                        { icon: '📄', label: 'Documents' },
                        { icon: '📅', label: 'Meetings' },
                        { icon: '📊', label: 'Projects' },
                        { icon: '🧠', label: 'Knowledge Graph' },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm cursor-pointer transition-all hover:scale-105 ${item.active
                            ? 'bg-teal-50 text-teal-700 font-semibold border border-teal-200'
                            : 'text-gray-600 hover:bg-gray-100'
                            }`}
                        >
                          <span className="text-base">{item.icon}</span>
                          <span>{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Recent</div>
                    <div className="space-y-1">
                      {['Q4 Report.pdf', 'Team Sync', 'Contract v2', 'Design Specs'].map((doc, i) => (
                        <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs text-gray-600 hover:bg-gray-100 cursor-pointer transition-all hover:scale-105">
                          <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                          <span className="truncate">{doc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="col-span-12 md:col-span-9 p-6 bg-linear-to-br from-white to-gray-50/50">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Good morning, Alex 👋</h3>
                        <p className="text-sm text-gray-500">Here's what's happening today</p>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center cursor-pointer hover:border-teal-300 transition-colors hover:scale-110">
                          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* AI Search Bar */}
                    <div className="bg-white border-2 border-gray-200 rounded-xl p-4 shadow-sm hover:border-teal-300 hover:shadow-md transition-all cursor-text group">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-linear-to-br from-teal-500 to-teal-700 flex items-center justify-center shadow-md shadow-teal-600/30 animate-pulse" style={{ animationDuration: '2s' }}>
                          <span className="text-white text-sm">✨</span>
                        </div>
                        <span className="text-sm text-gray-400 group-hover:text-gray-600 transition-colors">
                          Ask anything about your workspace...
                        </span>
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        {['Summarize last meeting', 'Find Q4 contracts', 'Who owns project X?'].map((suggestion, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-50 border border-gray-200 text-xs text-gray-600 rounded-full hover:bg-teal-50 hover:border-teal-200 hover:text-teal-700 transition-all cursor-pointer hover:scale-105"
                          >
                            {suggestion}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {[
                      { label: 'Active Projects', value: '12', change: '+2', color: 'teal', icon: '📊' },
                      { label: 'Pending Tasks', value: '28', change: '-5', color: 'amber', icon: '⚡' },
                      { label: 'Team Updates', value: '156', change: '+23', color: 'blue', icon: '💬' },
                    ].map((stat, i) => (
                      <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-teal-300 hover:shadow-md transition-all cursor-pointer group hover:-translate-y-1">
                        <div className="flex items-center justify-between mb-2">
                          <div className={`w-8 h-8 rounded-lg bg-${stat.color}-50 flex items-center justify-center text-base group-hover:scale-110 transition-transform`}>
                            {stat.icon}
                          </div>
                          <span className={`text-xs font-semibold text-${stat.color}-600 bg-${stat.color}-50 px-2 py-0.5 rounded-full`}>
                            {stat.change}
                          </span>
                        </div>
                        <div className="text-2xl font-bold text-gray-900 mb-0.5">{stat.value}</div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Activity Feed */}
                  <div className="bg-white border border-gray-200 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-sm font-bold text-gray-900">Recent Activity</h4>
                      <span className="text-xs text-teal-600 font-semibold cursor-pointer hover:underline">View all</span>
                    </div>
                    <div className="space-y-2">
                      {[
                        { icon: '📄', title: 'Q4 Financial Report.pdf', action: 'was updated', time: '2m ago' },
                        { icon: '📅', title: 'Product Review Meeting', action: 'starts in 30 min', time: 'soon' },
                        { icon: '💬', title: 'New comment on Project Alpha', action: 'by Mike', time: '1h ago' },
                      ].map((activity, i) => (
                        <div key={i} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer hover:scale-[1.02]">
                          <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-sm">{activity.icon}</div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-gray-900 truncate">{activity.title}</div>
                            <div className="text-xs text-gray-500">
                              {activity.action} · {activity.time}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div
              className="absolute -top-6 -right-6 bg-white px-4 py-3 rounded-xl shadow-2xl border border-gray-100 cursor-pointer hover:scale-110 transition-all duration-300 hidden md:block animate-bounce"
              style={{ animationDuration: '3s' }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-linear-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-sm shadow-md">
                  ✓
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900">AI Analysis Complete</div>
                  <div className="text-[10px] text-gray-500">247 documents processed</div>
                </div>
              </div>
            </div>

            <div
              className="absolute -bottom-6 -left-6 bg-white px-4 py-3 rounded-xl shadow-2xl border border-gray-100 cursor-pointer hover:scale-110 transition-all duration-300 hidden md:block animate-bounce"
              style={{ animationDuration: '3s', animationDelay: '1.5s' }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-linear-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white text-sm shadow-md">
                  🧠
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900">Knowledge Graph</div>
                  <div className="text-[10px] text-gray-500">1,247 connections found</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 border-y border-gray-200/60 bg-white/50 backdrop-blur-sm z-10 relative">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-8">
            Trusted by 50,000+ teams at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {['Microsoft', 'Stripe', 'Shopify', 'Airbnb', 'Figma', 'Notion'].map((brand) => (
              <div key={brand} className="text-2xl font-bold text-gray-300 cursor-pointer hover:text-teal-600 transition-all duration-300 hover:scale-110">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 z-10 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '15h+', label: 'Saved weekly per team', icon: '⏱️' },
              { value: '2.4M+', label: 'Documents indexed', icon: '📄' },
              { value: '99.9%', label: 'Uptime guaranteed', icon: '🛡️' },
              { value: '<2s', label: 'Average search time', icon: '⚡' },
            ].map((stat, i) => (
              <div key={i} className="text-center group cursor-pointer hover:scale-105 transition-transform">
                <div className="inline-flex w-14 h-14 rounded-2xl bg-linear-to-br from-teal-50 to-blue-50 border border-teal-100 items-center justify-center text-2xl mb-3 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-black text-gray-900 mb-1 tracking-tight">{stat.value}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-24 z-10 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-teal-50 border border-teal-200 rounded-full text-xs font-semibold text-teal-700 mb-4">
              THE PROBLEM
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              Your knowledge is <span className="line-through decoration-red-400 decoration-4">scattered</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Teams waste 3+ hours daily searching for information across disconnected tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Before */}
            <div className="relative bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <div className="absolute top-4 right-4 px-3 py-1 bg-red-50 border border-red-200 rounded-full text-xs font-bold text-red-600">
                BEFORE
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center">😵</span>
                Information Chaos
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {['Gmail', 'Slack', 'Drive', 'Notion', 'Dropbox', 'CRM', 'Zoom', 'Teams', 'Docs'].map((app, i) => (
                  <div key={i} className="bg-gray-50 border-2 border-gray-100 rounded-xl p-3 text-center text-xs font-semibold text-gray-600 hover:bg-gray-100 transition-all cursor-pointer hover:scale-105">
                    <div className="text-lg mb-1">📦</div>
                    {app}
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center gap-2 text-sm text-red-600 font-semibold">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  3+ hours lost daily
                </div>
              </div>
            </div>

            {/* After */}
            <div className="relative bg-linear-to-br from-teal-600 via-teal-700 to-teal-800 rounded-2xl p-8 text-white shadow-2xl shadow-teal-600/30 hover:shadow-teal-600/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-400/20 rounded-full blur-3xl -ml-32 -mb-32" />

              <div className="absolute top-4 right-4 px-3 py-1 bg-white/20 backdrop-blur border border-white/30 rounded-full text-xs font-bold text-white">
                AFTER
              </div>

              <h3 className="text-lg font-bold mb-6 flex items-center gap-2 relative z-10">
                <span className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center">✨</span>
                Unified Intelligence
              </h3>

              <div className="bg-white/10 backdrop-blur-xl rounded-xl p-5 border border-white/20 relative z-10 mb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center text-xl">🧠</div>
                  <div>
                    <div className="font-bold">SyncOps AI</div>
                    <div className="text-xs text-teal-100">One intelligent workspace</div>
                  </div>
                </div>
                <div className="text-sm text-teal-50">All your tools, connected and searchable in seconds.</div>
              </div>

              <div className="grid grid-cols-3 gap-2 relative z-10">
                {['✓ Instant search', '✓ AI answers', '✓ Zero switching'].map((item, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur rounded-lg p-2 text-center text-xs font-semibold border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/20 relative z-10">
                <div className="flex items-center gap-2 text-sm text-teal-100 font-semibold">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Save 15+ hours weekly
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Search Demo */}
      <section id="ai-search" className="py-24 bg-linear-to-b from-white via-gray-50/50 to-white z-10 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-xs font-semibold text-blue-700 mb-4">
              AI SEARCH
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              Ask in plain English.
              <br />
              <span className="bg-linear-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                Get instant answers.
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Our AI searches across all your connected tools and delivers precise answers with sources.
            </p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-2xl shadow-gray-900/5 hover:shadow-gray-900/10 transition-shadow">
            <div className="flex items-center gap-3 bg-linear-to-r from-gray-50 to-white border-2 border-gray-200 rounded-xl px-5 py-4 mb-6 hover:border-teal-300 transition-colors group cursor-text">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-teal-500 to-teal-700 flex items-center justify-center shadow-lg shadow-teal-600/30">
                <span className="text-white text-lg">✨</span>
              </div>
              <div className="flex-1">
                <div className="text-sm font-semibold text-gray-900">What contracts expire this month?</div>
                <div className="text-xs text-gray-500 mt-0.5">Searching across 5,247 documents...</div>
              </div>
              <div className="hidden sm:flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-md text-xs text-gray-500 font-mono">
                ⌘K
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-1 h-4 bg-linear-to-b from-teal-500 to-blue-500 rounded-full" />
                <span className="text-xs font-bold text-gray-700 uppercase tracking-wider">3 results found</span>
              </div>

              {[
                { icon: '📄', title: 'ABC Corp Contract 2024.pdf', meta: 'Expires in 18 days · Legal folder', source: 'Google Drive', confidence: 98 },
                { icon: '📧', title: 'Re: Contract Renewal - Action Required', meta: 'From Sarah Chen · 2 days ago', source: 'Gmail', confidence: 95 },
                { icon: '📅', title: 'Contract Review Meeting', meta: 'Jan 15, 2024 · 2:00 PM', source: 'Calendar', confidence: 92 },
              ].map((r, i) => (
                <div
                  key={i}
                  className="bg-linear-to-r from-white to-gray-50/50 border border-gray-200 rounded-xl p-4 flex items-center gap-4 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-600/5 transition-all cursor-pointer group hover:-translate-y-0.5"
                >
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-teal-50 to-blue-50 border border-teal-200/50 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform shadow-sm">
                    {r.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="text-sm font-bold text-gray-900 group-hover:text-teal-700 transition-colors truncate">
                        {r.title}
                      </div>
                      <span className="px-2 py-0.5 bg-green-50 border border-green-200 text-green-700 text-[10px] font-bold rounded-full">
                        {r.confidence}% match
                      </span>
                    </div>
                    <div className="text-xs text-gray-600 mb-1">{r.meta}</div>
                    <div className="flex items-center gap-1.5 text-[10px] text-gray-400 font-semibold uppercase tracking-wider">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                      {r.source}
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-teal-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Bento */}
      <section id="features" className="py-24 z-10 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-purple-50 border border-purple-200 rounded-full text-xs font-semibold text-purple-700 mb-4">
              FEATURES
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              Everything you need,
              <br />
              nothing you don't
            </h2>
            <p className="text-xl text-gray-600">Powerful features designed for modern teams.</p>
          </div>

          <div className="grid md:grid-cols-6 gap-4 max-w-6xl mx-auto">
            <div className="md:col-span-4 relative bg-linear-to-br from-teal-600 via-teal-700 to-teal-800 rounded-2xl p-8 text-white cursor-pointer hover:shadow-2xl hover:shadow-teal-600/30 transition-all duration-300 hover:-translate-y-1 group overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48 group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-400/20 rounded-full blur-3xl -ml-32 -mb-32" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform">
                    ✨
                  </div>
                  <div className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs font-bold border border-white/30">
                    NEW
                  </div>
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
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-teal-500 to-blue-600 flex items-center justify-center text-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  🧠
                </div>
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
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-red-50 to-red-100 border border-red-200 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-sm">
                📄
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Documents</h3>
              <p className="text-sm text-gray-600 mb-4">
                AI-powered document intelligence with auto-tagging and smart search.
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-teal-600 group-hover:gap-3 transition-all">
                Learn more
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            <div className="md:col-span-2 bg-white border-2 border-gray-200 rounded-2xl p-6 cursor-pointer hover:border-blue-300 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-50 to-blue-100 border border-blue-200 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-sm">
                📅
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Meeting Intelligence</h3>
              <p className="text-sm text-gray-600 mb-4">
                Auto-summaries, action items, and searchable transcripts from every call.
              </p>
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 group-hover:gap-3 transition-all">
                Learn more
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            <div className="md:col-span-2 bg-white border-2 border-gray-200 rounded-2xl p-6 cursor-pointer hover:border-purple-300 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-purple-50 to-purple-100 border border-purple-200 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-sm">
                📊
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Project Tracking</h3>
              <p className="text-sm text-gray-600 mb-4">
                Unified view of all projects with AI-powered progress insights.
              </p>
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

      {/* Knowledge Graph Visualization */}
      <section className="py-24 bg-linear-to-b from-gray-900 via-gray-900 to-gray-950 text-white z-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.1),transparent_50%)]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 bg-teal-500/10 border border-teal-500/30 rounded-full text-xs font-semibold text-teal-400 mb-4">
              KNOWLEDGE GRAPH
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
              See how everything <span className="bg-linear-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">connects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our AI automatically builds a knowledge graph of your entire workspace, revealing hidden relationships.
            </p>
          </div>

          <div className="relative h-125 bg-linear-to-br from-gray-800/50 to-gray-900/50 backdrop-blur rounded-3xl border border-gray-700/50 overflow-hidden group hover:border-teal-500/30 transition-colors">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(20,184,166,0.3) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />

            <div className="absolute w-4 h-4 bg-teal-500 rounded-full shadow-lg shadow-teal-500/50 animate-pulse" style={{ top: '30%', left: '50%' }} />
            <div className="absolute w-3 h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50 animate-pulse" style={{ top: '20%', left: '30%', animationDelay: '0.5s' }} />
            <div className="absolute w-3 h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50 animate-pulse" style={{ top: '40%', left: '70%', animationDelay: '1s' }} />
            <div className="absolute w-3 h-3 bg-amber-400 rounded-full shadow-lg shadow-amber-400/50 animate-pulse" style={{ top: '60%', left: '40%', animationDelay: '1.5s' }} />
            <div className="absolute w-2 h-2 bg-pink-400 rounded-full shadow-lg shadow-pink-400/50 animate-pulse" style={{ top: '50%', left: '20%', animationDelay: '2s' }} />
            <div className="absolute w-2 h-2 bg-green-400 rounded-full shadow-lg shadow-green-400/50 animate-pulse" style={{ top: '70%', left: '65%', animationDelay: '2.5s' }} />
            <div className="absolute w-2 h-2 bg-indigo-400 rounded-full shadow-lg shadow-indigo-400/50 animate-pulse" style={{ top: '25%', left: '60%', animationDelay: '3s' }} />

            <svg className="absolute inset-0 w-full h-full">
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.6" />
                </linearGradient>
              </defs>
              <line x1="50%" y1="30%" x2="30%" y2="20%" stroke="url(#lineGrad)" strokeWidth="1.5" opacity="0.4" />
              <line x1="50%" y1="30%" x2="70%" y2="40%" stroke="url(#lineGrad)" strokeWidth="1.5" opacity="0.4" />
              <line x1="50%" y1="30%" x2="40%" y2="60%" stroke="url(#lineGrad)" strokeWidth="1.5" opacity="0.4" />
              <line x1="30%" y1="20%" x2="20%" y2="50%" stroke="url(#lineGrad)" strokeWidth="1" opacity="0.3" />
              <line x1="70%" y1="40%" x2="65%" y2="70%" stroke="url(#lineGrad)" strokeWidth="1" opacity="0.3" />
              <line x1="60%" y1="25%" x2="70%" y2="40%" stroke="url(#lineGrad)" strokeWidth="1" opacity="0.3" />
            </svg>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-linear-to-br from-gray-900 to-gray-800 border-2 border-teal-500/50 rounded-2xl p-6 shadow-2xl shadow-teal-500/20 backdrop-blur group-hover:scale-105 transition-transform duration-500">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-teal-500 to-blue-600 flex items-center justify-center text-2xl shadow-lg">
                  🧠
                </div>
                <div>
                  <div className="text-lg font-bold">Knowledge Graph</div>
                  <div className="text-xs text-teal-400 font-semibold">Auto-generated</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3 text-center">
                <div>
                  <div className="text-2xl font-black text-teal-400">1,247</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider">Nodes</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-blue-400">3,892</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider">Connections</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-purple-400">24</div>
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider">Clusters</div>
                </div>
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
              Loved by teams <span className="bg-linear-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">worldwide</span>
            </h2>
            <p className="text-xl text-gray-600">See why 50,000+ teams trust SyncOps.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                quote: "SyncOps cut our meeting prep time by 70%. The AI search is genuinely magical — it finds things we didn't even know we had.",
                name: 'Sarah Chen',
                role: 'VP of Operations',
                company: 'TechFlow',
                gradient: 'from-teal-500 to-teal-700',
              },
              {
                quote: "Finally, a single source of truth. Our team stopped asking 'where is that doc?' and started actually shipping faster.",
                name: 'Marcus Johnson',
                role: 'Head of Product',
                company: 'ScaleUp',
                gradient: 'from-blue-500 to-blue-700',
              },
              {
                quote: "The knowledge graph feature is a game-changer. We discovered connections between projects we'd completely missed for months.",
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
                    <div className="text-xs text-gray-500">
                      {t.role} · {t.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-linear-to-b from-white via-gray-50/50 to-white z-10 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-amber-50 border border-amber-200 rounded-full text-xs font-semibold text-amber-700 mb-4">
              PRICING
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-600 mb-8">Start free. Upgrade when you're ready.</p>

            <div className="inline-flex items-center gap-1 bg-gray-100 rounded-full p-1">
              <button className="px-5 py-2 bg-white rounded-full text-sm font-bold shadow-sm text-gray-900">Monthly</button>
              <button className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors rounded-full">
                Yearly <span className="text-xs text-teal-600 font-bold">-20%</span>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 cursor-pointer hover:border-gray-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Starter</h3>
                <p className="text-sm text-gray-600">Perfect for individuals</p>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black text-gray-900">$0</span>
                  <span className="text-gray-500">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {['Up to 50 documents', 'Basic AI search', '1 user', 'Community support', '7-day activity history'].map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <svg className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 bg-gray-50 border-2 border-gray-200 text-gray-900 rounded-xl text-sm font-bold hover:border-teal-300 hover:bg-teal-50 transition-all cursor-pointer">
                Get Started Free
              </button>
            </div>

            <div className="relative bg-linear-to-br from-gray-900 via-gray-900 to-gray-800 text-white rounded-2xl p-8 shadow-2xl shadow-gray-900/20 cursor-pointer hover:shadow-gray-900/30 transition-all duration-300 hover:-translate-y-1 ring-2 ring-teal-500">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-linear-to-r from-teal-500 to-teal-600 text-white text-xs font-black rounded-full shadow-lg shadow-teal-600/50">
                MOST POPULAR
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">Professional</h3>
                <p className="text-sm text-gray-400">For growing teams</p>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black">$29</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <div className="text-xs text-teal-400 font-semibold mt-1">per user, billed annually</div>
              </div>
              <ul className="space-y-3 mb-8">
                {['Unlimited documents', 'Advanced AI with GPT-4', 'Up to 10 users', 'Priority support', 'Knowledge graph', 'Custom integrations', '90-day history'].map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <svg className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 bg-linear-to-r from-teal-500 to-teal-600 text-white rounded-xl text-sm font-bold hover:from-teal-600 hover:to-teal-700 transition-all cursor-pointer shadow-lg shadow-teal-600/30 hover:shadow-xl hover:shadow-teal-600/40">
                Start 14-Day Trial
              </button>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 cursor-pointer hover:border-gray-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <p className="text-sm text-gray-600">For large organizations</p>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-black text-gray-900">Custom</span>
                </div>
                <div className="text-xs text-gray-500 font-semibold mt-1">Tailored to your needs</div>
              </div>
              <ul className="space-y-3 mb-8">
                {['Everything in Professional', 'Unlimited users', 'SSO & SAML', 'Dedicated support', 'Custom AI models', 'Advanced security', 'SLA guarantee'].map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <svg className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 bg-gray-50 border-2 border-gray-200 text-gray-900 rounded-xl text-sm font-bold hover:border-teal-300 hover:bg-teal-50 transition-all cursor-pointer">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 z-10 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-xs font-semibold text-blue-700 mb-4">
              FAQ
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
              Frequently asked questions
            </h2>
            <p className="text-xl text-gray-600">Everything you need to know about SyncOps.</p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: 'How does SyncOps connect to my existing tools?',
                a: 'SyncOps integrates with 50+ tools including Google Workspace, Microsoft 365, Slack, Notion, and more. Setup takes less than 2 minutes with our one-click OAuth flow.',
              },
              {
                q: 'Is my data secure?',
                a: 'Absolutely. We use AES-256 encryption at rest, TLS 1.3 in transit, and are SOC 2 Type II certified. Your data is never used to train AI models.',
              },
              {
                q: 'Can I cancel anytime?',
                a: 'Yes, you can cancel your subscription at any time with no penalties. Your data remains accessible for 30 days after cancellation.',
              },
              {
                q: 'Do you offer a free trial?',
                a: 'Yes! Our Professional plan comes with a 14-day free trial. No credit card required to start.',
              },
              {
                q: 'What AI models do you use?',
                a: 'We use a combination of GPT-4, Claude, and our own fine-tuned models optimized for enterprise search and knowledge retrieval.',
              },
            ].map((item, i) => (
              <details
                key={i}
                className="group bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-teal-300 transition-colors"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="text-base font-bold text-gray-900">{item.q}</span>
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-gray-600 leading-relaxed">{item.a}</div>
              </details>
            ))}
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
              <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur border border-white/30 rounded-full text-xs font-bold mb-6">
                READY TO START?
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                Stop searching.
                <br />
                <span className="bg-linear-to-r from-white to-teal-100 bg-clip-text text-transparent">Start knowing.</span>
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
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
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
                {['𝕏', 'in', 'gh'].map((social, i) => (
                  <div key={i} className="w-8 h-8 rounded-lg bg-gray-800 hover:bg-teal-600 flex items-center justify-center text-xs font-bold cursor-pointer transition-colors">
                    {social}
                  </div>
                ))}
              </div>
            </div>

            {[
              { title: 'Product', links: ['Features', 'Pricing', 'Integrations', 'Changelog', 'Roadmap'] },
              { title: 'Company', links: ['About', 'Blog', 'Careers', 'Press', 'Contact'] },
              { title: 'Resources', links: ['Documentation', 'Help Center', 'Community', 'API Reference', 'Status'] },
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