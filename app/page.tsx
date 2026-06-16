import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* ==================== NAVBAR ==================== */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-200">S</div>
            <span className="text-lg font-bold text-gray-900 group-hover:text-teal-600 transition-colors">SyncOps</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#features" className="hover:text-teal-600 transition-colors cursor-pointer">Features</a>
            <a href="#pricing" className="hover:text-teal-600 transition-colors cursor-pointer">Pricing</a>
            <a href="#Ai" className="hover:text-teal-600 transition-colors cursor-pointer">Ai search</a>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/login" className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors cursor-pointer">Login</Link>
            <Link href="/signup" className="px-4 py-1.5 text-sm font-semibold text-white bg-teal-600 rounded-lg hover:bg-teal-700 transition-all duration-200 shadow-md shadow-teal-200 hover:shadow-lg hover:shadow-teal-300 cursor-pointer">Start Free</Link>
          </div>
        </div>
      </nav>

      {/* ==================== 1. HERO (With Actual Dashboard) ==================== */}
      <section className="relative pt-16 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-teal-50 via-white to-blue-50"></div>
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-teal-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-100 rounded-full text-xs font-semibold text-teal-700 mb-4 cursor-pointer hover:bg-teal-200 transition-colors">
              <span className="w-1.5 h-1.5 bg-teal-600 rounded-full animate-pulse"></span>
              Your AI Operating System
            </div>
            <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-4">
              Connect everything.<br />
              <span className="text-teal-600">Know instantly.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6 max-w-md">
              Documents, meetings, projects, and knowledge in one intelligent workspace powered by AI.
            </p>
            <div className="flex gap-3">
              <Link href="/signup" className="px-6 py-2.5 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer hover:-translate-y-0.5">Start Free</Link>
              <button className="px-6 py-2.5 bg-white border border-gray-200 text-gray-900 rounded-lg font-semibold hover:border-teal-300 transition-all duration-200 cursor-pointer hover:shadow-md">Watch Demo</button>
            </div>
            <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => <div key={i} className="w-7 h-7 rounded-full bg-linear-to-br from-teal-400 to-teal-600 border-2 border-white cursor-pointer hover:scale-110 transition-transform"></div>)}
              </div>
              <span className="cursor-default">50K+ users trust SyncOps</span>
            </div>
          </div>

          {/* Actual Dashboard Preview */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-linear-to-r from-teal-400 to-blue-500 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="relative bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden cursor-pointer hover:shadow-3xl transition-all duration-300 hover:-translate-y-1">
              {/* Browser Chrome */}
              <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                <div className="flex-1 ml-4 bg-white rounded-md px-3 py-1 text-xs text-gray-400 border border-gray-200">app.syncops.ai/dashboard</div>
              </div>

              {/* Dashboard Content - Your Actual UI */}
              <div className="p-4 bg-gray-50">
                {/* Greeting */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-900">Good evening, User 👋</h3>
                  <p className="text-xs text-gray-500">What would you like to know today?</p>
                </div>

                {/* Search Box */}
                <div className="bg-white border border-gray-200 rounded-xl p-3 mb-4 shadow-sm">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    <span>Ask anything about your company...</span>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <span className="px-2 py-1 bg-teal-50 text-teal-700 text-xs rounded-md font-medium">Document</span>
                    <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-md font-medium">Voice</span>
                  </div>
                </div>

                {/* Category Cards */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { icon: '📄', label: 'Invoices', color: 'bg-red-50 text-red-600' },
                    { icon: '📁', label: 'Contracts', color: 'bg-blue-50 text-blue-600' },
                    { icon: '📅', label: 'Meetings', color: 'bg-purple-50 text-purple-600' },
                  ].map((c) => (
                    <div key={c.label} className={`${c.color} rounded-lg p-2.5 cursor-pointer hover:scale-105 transition-transform`}>
                      <div className="text-lg mb-1">{c.icon}</div>
                      <div className="text-xs font-semibold">{c.label}</div>
                    </div>
                  ))}
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white border border-gray-200 rounded-lg p-3 cursor-pointer hover:border-teal-200 hover:shadow-md transition-all">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 bg-teal-50 rounded flex items-center justify-center text-teal-600 text-xs">📈</div>
                      <span className="text-xs text-gray-500">Revenue</span>
                    </div>
                    <div className="text-sm font-bold text-gray-900">$128,540</div>
                    <span className="text-[10px] text-green-600 font-semibold">↑ 12.5%</span>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-3 cursor-pointer hover:border-amber-200 hover:shadow-md transition-all">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 bg-amber-50 rounded flex items-center justify-center text-amber-600 text-xs">⚠️</div>
                      <span className="text-xs text-gray-500">Expiring</span>
                    </div>
                    <div className="text-sm font-bold text-gray-900">3 contracts</div>
                    <span className="text-[10px] text-amber-600 font-semibold">Urgent</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Widgets */}
            <div className="absolute -top-3 -right-3 bg-white px-3 py-2 rounded-lg shadow-xl border border-gray-100 cursor-pointer hover:scale-105 transition-transform animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-teal-600">
                <span>💰</span> Revenue +12%
              </div>
            </div>
            <div className="absolute -bottom-3 -left-3 bg-white px-3 py-2 rounded-lg shadow-xl border border-gray-100 cursor-pointer hover:scale-105 transition-transform">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-900">
                <span>🧠</span> AI Ready
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 2. TRUSTED BY + METRICS ==================== */}
      <section className="py-12 border-y border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-semibold text-gray-500 uppercase tracking-widest mb-6">Trusted by teams worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8 opacity-60">
            {['Microsoft', 'Stripe', 'Shopify', 'Airbnb', 'Figma'].map((brand) => (
              <div key={brand} className="text-lg font-bold text-gray-700 cursor-pointer hover:opacity-100 hover:text-teal-600 transition-all">{brand}</div>
            ))}
          </div>
          <div className="grid grid-cols-4 gap-8 max-w-3xl mx-auto">
            {[
              { num: '50K+', label: 'Users' },
              { num: '5M+', label: 'Documents' },
              { num: '99.9%', label: 'Uptime' },
              { num: '1B+', label: 'Connections' },
            ].map((m) => (
              <div key={m.label} className="text-center cursor-pointer group">
                <div className="text-3xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">{m.num}</div>
                <div className="text-xs text-gray-500 mt-0.5">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 3. PROBLEM ==================== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Your data is everywhere.</h2>
            <p className="text-lg text-gray-600">We bring it all together.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 cursor-pointer hover:shadow-lg transition-all duration-200">
              <h3 className="font-semibold text-gray-500 mb-4 text-sm uppercase tracking-wider">Before</h3>
              <div className="grid grid-cols-3 gap-2">
                {['Gmail', 'Slack', 'Drive', 'Notion', 'Dropbox', 'CRM'].map((app) => (
                  <div key={app} className="bg-gray-50 border border-gray-100 rounded-lg p-2 text-center text-xs font-medium text-gray-600 hover:bg-gray-100 transition-colors">{app}</div>
                ))}
              </div>
            </div>
            <div className="bg-teal-600 rounded-xl p-6 text-white cursor-pointer hover:bg-teal-700 transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
              <h3 className="font-semibold text-teal-100 mb-4 text-sm uppercase tracking-wider">With SyncOps</h3>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                <div className="font-semibold mb-1">One Unified Workspace</div>
                <div className="text-sm text-teal-100">Everything connected by AI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 4. AI SEARCH DEMO ==================== */}
      <section id='Ai' className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Ask anything. Get answers.</h2>
            <p className="text-lg text-gray-600">AI searches across all your tools instantly.</p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-lg cursor-pointer hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-3 mb-3 hover:border-teal-300 transition-colors">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              <span className="text-sm text-gray-700">What contracts expire this month?</span>
            </div>
            <div className="space-y-2">
              {[
                { icon: '📄', title: 'ABC Contract 2024.pdf', meta: 'Expires in 18 days' },
                { icon: '📧', title: 'Re: Contract Renewal', meta: 'Email from Sarah' },
                { icon: '📅', title: 'Contract Review Meeting', meta: 'Jan 15, 2024' },
              ].map((r, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-lg p-3 flex items-center gap-3 hover:border-teal-200 hover:shadow-md transition-all cursor-pointer group">
                  <div className="text-lg group-hover:scale-110 transition-transform">{r.icon}</div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">{r.title}</div>
                    <div className="text-xs text-gray-500">{r.meta}</div>
                  </div>
                  <svg className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 5. FEATURES BENTO ==================== */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Everything you need</h2>
            <p className="text-lg text-gray-600">Powerful features in one platform.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-3">
            <div className="md:col-span-2 bg-linear-to-br from-teal-600 to-teal-700 rounded-xl p-6 text-white cursor-pointer hover:shadow-xl transition-all duration-200 hover:-translate-y-1 group">
              <div className="text-2xl font-bold mb-1 group-hover:scale-105 transition-transform inline-block">AI Search</div>
              <div className="text-teal-100 text-sm">Finds anything across all your tools in seconds.</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 cursor-pointer hover:border-teal-200 hover:shadow-lg transition-all duration-200">
              <div className="text-xl font-bold text-gray-900 mb-1">Knowledge Graph</div>
              <div className="text-sm text-gray-600">See connections.</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 cursor-pointer hover:border-teal-200 hover:shadow-md transition-all group">
              <div className="w-8 h-8 bg-teal-50 rounded-lg flex items-center justify-center text-teal-600 mb-2 group-hover:scale-110 transition-transform">📄</div>
              <div className="text-lg font-bold text-gray-900 mb-1">Documents</div>
              <div className="text-xs text-gray-600">Smart intelligence</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 cursor-pointer hover:border-teal-200 hover:shadow-md transition-all group">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-2 group-hover:scale-110 transition-transform">📅</div>
              <div className="text-lg font-bold text-gray-900 mb-1">Meetings</div>
              <div className="text-xs text-gray-600">Auto summaries</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-5 cursor-pointer hover:border-teal-200 hover:shadow-md transition-all group">
              <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center text-purple-600 mb-2 group-hover:scale-110 transition-transform">📊</div>
              <div className="text-lg font-bold text-gray-900 mb-1">Projects</div>
              <div className="text-xs text-gray-600">Track progress</div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 6. KNOWLEDGE GRAPH ==================== */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-2">Everything is connected</h2>
            <p className="text-lg text-gray-400">AI builds your knowledge graph automatically.</p>
          </div>
          <div className="relative h-64 bg-gray-800 rounded-xl border border-gray-700 flex items-center justify-center overflow-hidden cursor-pointer hover:border-teal-500/50 transition-colors group">
            <div className="absolute w-3 h-3 bg-teal-500 rounded-full shadow-lg shadow-teal-500/50 animate-pulse" style={{ top: '35%', left: '50%' }}></div>
            <div className="absolute w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ top: '25%', left: '35%', animationDelay: '0.5s' }}></div>
            <div className="absolute w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ top: '40%', left: '65%', animationDelay: '1s' }}></div>
            <div className="absolute w-2 h-2 bg-amber-400 rounded-full animate-pulse" style={{ top: '55%', left: '45%', animationDelay: '1.5s' }}></div>
            <svg className="absolute inset-0 w-full h-full opacity-30">
              <line x1="50%" y1="35%" x2="35%" y2="25%" stroke="#14B8A6" strokeWidth="1" />
              <line x1="50%" y1="35%" x2="65%" y2="40%" stroke="#14B8A6" strokeWidth="1" />
              <line x1="50%" y1="35%" x2="45%" y2="55%" stroke="#14B8A6" strokeWidth="1" />
            </svg>
            <div className="relative z-10 text-center group-hover:scale-105 transition-transform">
              <div className="text-4xl mb-2">🧠</div>
              <div className="text-xl font-bold">Knowledge Graph</div>
              <div className="text-sm text-gray-400 mt-1">1,247 connections</div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 7. PRICING ==================== */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">Simple pricing</h2>
            <div className="inline-flex items-center gap-1 bg-gray-100 rounded-lg p-1 mt-4 cursor-pointer">
              <button className="px-3 py-1 bg-white rounded-md text-xs font-semibold shadow-sm">Monthly</button>
              <button className="px-3 py-1 text-xs font-medium text-gray-600 hover:text-gray-900 transition-colors">Yearly</button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-3 max-w-5xl mx-auto">
            {[
              { name: 'Starter', price: '$0', features: ['50 documents', 'Basic AI', '1 user'] },
              { name: 'Professional', price: '$29', features: ['Unlimited docs', 'Advanced AI', '5 users'], popular: true },
              { name: 'Enterprise', price: 'Custom', features: ['Everything', 'SSO', 'Unlimited'], popular: false },
            ].map((p) => (
              <div key={p.name} className={`rounded-xl p-5 cursor-pointer hover:-translate-y-1 transition-all duration-200 ${p.popular ? 'bg-gray-900 text-white ring-2 ring-teal-500 hover:ring-teal-400' : 'bg-white border border-gray-200 hover:border-teal-200 hover:shadow-lg'}`}>
                {p.popular && <div className="inline-block px-2 py-0.5 bg-teal-600 text-white text-[10px] font-bold rounded mb-2">POPULAR</div>}
                <h3 className={`text-lg font-bold mb-1 ${p.popular ? 'text-white' : 'text-gray-900'}`}>{p.name}</h3>
                <div className={`text-3xl font-bold mb-3 ${p.popular ? 'text-white' : 'text-gray-900'}`}>{p.price}<span className="text-sm font-normal opacity-60">/mo</span></div>
                <ul className="space-y-1.5 mb-4">
                  {p.features.map((f) => (
                    <li key={f} className={`text-xs flex items-center gap-1.5 ${p.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                      <span className="text-teal-500">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-2 rounded-lg text-xs font-semibold transition-all ${p.popular ? 'bg-teal-600 text-white hover:bg-teal-700' : 'bg-gray-50 border border-gray-200 text-gray-900 hover:border-teal-300'}`}>Get Started</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 8. FINAL CTA ==================== */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-4">Stop Searching.<br />Start Knowing.</h2>
          <p className="text-lg text-gray-400 mb-8">Transform scattered info into AI-powered intelligence.</p>
          <div className="flex gap-3 justify-center">
            <Link href="/signup" className="px-6 py-2.5 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer hover:-translate-y-0.5">Start Free</Link>
            <button className="px-6 py-2.5 bg-white/10 backdrop-blur border border-white/20 text-white rounded-lg font-semibold hover:bg-white/20 transition-all duration-200 cursor-pointer">Book Demo</button>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-gray-900 text-gray-400 border-t border-gray-800 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-3 cursor-pointer group">
                <div className="w-7 h-7 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-xs group-hover:scale-110 transition-transform">S</div>
                <span className="text-base font-bold text-white group-hover:text-teal-400 transition-colors">SyncOps</span>
              </div>
              <p className="text-xs">Intelligent BI for modern teams.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2 text-sm">Product</h4>
              <ul className="space-y-1 text-xs">
                <li><a href="#" className="hover:text-teal-400 cursor-pointer transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-teal-400 cursor-pointer transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-teal-400 cursor-pointer transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2 text-sm">Company</h4>
              <ul className="space-y-1 text-xs">
                <li><a href="#" className="hover:text-teal-400 cursor-pointer transition-colors">About</a></li>
                <li><a href="#" className="hover:text-teal-400 cursor-pointer transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-teal-400 cursor-pointer transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2 text-sm">Legal</h4>
              <ul className="space-y-1 text-xs">
                <li><a href="#" className="hover:text-teal-400 cursor-pointer transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-teal-400 cursor-pointer transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center text-xs">
            © 2026 SyncOps. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}