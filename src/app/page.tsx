'use client'

import { TrendingUp, Shield, Zap, BarChart3, Coins, Lock, ArrowRight, ChevronRight } from 'lucide-react'

const investments = [
  {
    title: 'LUX Staking',
    description: 'Stake LUX tokens and earn rewards while securing the network',
    apy: '8-12%',
    icon: Coins,
    color: 'from-purple-500 to-indigo-600',
  },
  {
    title: 'Validator Nodes',
    description: 'Run a validator node and participate in network consensus',
    apy: '12-18%',
    icon: Shield,
    color: 'from-blue-500 to-cyan-600',
  },
  {
    title: 'DeFi Protocols',
    description: 'Access yield farming, liquidity pools, and lending markets',
    apy: '5-25%',
    icon: BarChart3,
    color: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Bridge Liquidity',
    description: 'Provide liquidity for cross-chain bridges and earn fees',
    apy: '10-20%',
    icon: Zap,
    color: 'from-orange-500 to-amber-600',
  },
]

const features = [
  {
    title: 'Quantum-Secure',
    description: 'Post-quantum cryptography protects your investments against future threats',
    icon: Lock,
  },
  {
    title: 'Sub-Second Finality',
    description: 'Quasar consensus delivers instant transaction finality',
    icon: Zap,
  },
  {
    title: 'Multi-Chain',
    description: 'Invest across the entire Lux multi-chain ecosystem',
    icon: TrendingUp,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Lux Invest</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#investments" className="text-white/70 hover:text-white transition-colors">Investments</a>
            <a href="#features" className="text-white/70 hover:text-white transition-colors">Features</a>
            <a href="https://lux.network" className="text-white/70 hover:text-white transition-colors">Network</a>
          </nav>
          <a
            href="https://app.lux.network"
            className="px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-white/90 transition-colors"
          >
            Launch App
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Invest in the{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
                Future of Finance
              </span>
            </h1>
            <p className="text-xl text-white/60 mb-10 max-w-2xl">
              Access institutional-grade investment opportunities in the Lux Network ecosystem.
              Stake, yield farm, and grow your portfolio with quantum-secure infrastructure.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://app.lux.network"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-white/90 transition-colors"
              >
                Start Investing
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://docs.lux.network"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-lg font-medium hover:bg-white/5 transition-colors"
              >
                Learn More
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
              $2.4B+
            </div>
            <div className="text-white/60 mt-2">Total Value Locked</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              15,000+
            </div>
            <div className="text-white/60 mt-2">Active Investors</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
              12.5%
            </div>
            <div className="text-white/60 mt-2">Average APY</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
              6
            </div>
            <div className="text-white/60 mt-2">Chains Supported</div>
          </div>
        </div>
      </section>

      {/* Investment Options */}
      <section id="investments" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Investment Opportunities</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Choose from a range of investment products designed for both beginners and experienced investors
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {investments.map((investment) => (
              <div
                key={investment.title}
                className="group relative p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all cursor-pointer"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${investment.color} mb-6`}>
                  <investment.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{investment.title}</h3>
                <p className="text-white/60 mb-4">{investment.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-white/40">Expected APY</span>
                    <div className="text-2xl font-bold text-emerald-400">{investment.apy}</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Lux Invest</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Built on the most advanced blockchain technology for secure, fast, and efficient investing
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="inline-flex p-4 rounded-2xl bg-white/5 mb-6">
                  <feature.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Building Your Portfolio Today
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of investors already growing their wealth in the Lux ecosystem.
            Connect your wallet and start investing in minutes.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://app.lux.network"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl font-medium hover:opacity-90 transition-opacity"
            >
              Connect Wallet
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="https://docs.lux.network/invest"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/20 rounded-xl font-medium hover:bg-white/5 transition-colors"
            >
              Read Documentation
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold">Lux Invest</span>
          </div>
          <div className="flex items-center gap-6 text-white/60 text-sm">
            <a href="https://lux.network" className="hover:text-white transition-colors">Network</a>
            <a href="https://docs.lux.network" className="hover:text-white transition-colors">Docs</a>
            <a href="https://github.com/luxfi" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://discord.gg/luxnetwork" className="hover:text-white transition-colors">Discord</a>
          </div>
          <div className="text-white/40 text-sm">
            2024 Lux Partners Limited
          </div>
        </div>
      </footer>
    </div>
  )
}
