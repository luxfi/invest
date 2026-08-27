'use client'

import { Box } from '@hanzo/ui'
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
    <Box className="min-h-screen bg-black">
      {/* Header */}
      <Box tag="header" className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <Box className="max-w-7xl mx-auto px-6 py-4 grid grid-flow-col auto-cols-auto items-center justify-between">
          <Box className="grid grid-flow-col auto-cols-auto items-center gap-3">
            <Box className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 grid grid-flow-col auto-cols-auto items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </Box>
            <Box tag="span" className="text-xl font-bold">Lux Invest</Box>
          </Box>
          <Box tag="nav" className="hidden md:grid md:grid-flow-col md:auto-cols-auto items-center gap-8">
            <Box tag="a" href="#investments" className="text-white/70 hover:text-white transition-colors">Investments</Box>
            <Box tag="a" href="#features" className="text-white/70 hover:text-white transition-colors">Features</Box>
            <Box tag="a" href="https://lux.network" className="text-white/70 hover:text-white transition-colors">Network</Box>
          </Box>
          <Box tag="a"
            href="https://app.lux.network"
            className="px-4 py-2 bg-white text-black rounded-lg font-medium hover:bg-white/90 transition-colors"
          >
            Launch App
          </Box>
        </Box>
      </Box>

      {/* Hero Section */}
      <Box tag="section" className="pt-32 pb-20 px-6">
        <Box className="max-w-7xl mx-auto">
          <Box className="max-w-4xl">
            <Box tag="h1" className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Invest in the{' '}
              <Box tag="span" className="bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
                Future of Finance
              </Box>
            </Box>
            <Box tag="p" className="text-xl text-white/60 mb-10 max-w-2xl">
              Access institutional-grade investment opportunities in the Lux Network ecosystem.
              Stake, yield farm, and grow your portfolio with quantum-secure infrastructure.
            </Box>
            <Box className="flex flex-wrap gap-4">
              <Box tag="a"
                href="https://app.lux.network"
                className="inline-grid grid-flow-col auto-cols-auto items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-white/90 transition-colors"
              >
                Start Investing
                <ArrowRight className="w-4 h-4" />
              </Box>
              <Box tag="a"
                href="https://docs.lux.network"
                className="inline-grid grid-flow-col auto-cols-auto items-center gap-2 px-6 py-3 border border-white/20 rounded-lg font-medium hover:bg-white/5 transition-colors"
              >
                Learn More
                <ChevronRight className="w-4 h-4" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Stats Section */}
      <Box tag="section" className="py-16 px-6 border-y border-white/10 bg-white/[0.02]">
        <Box className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <Box className="text-center">
            <Box className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
              $2.4B+
            </Box>
            <Box className="text-white/60 mt-2">Total Value Locked</Box>
          </Box>
          <Box className="text-center">
            <Box className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              15,000+
            </Box>
            <Box className="text-white/60 mt-2">Active Investors</Box>
          </Box>
          <Box className="text-center">
            <Box className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
              12.5%
            </Box>
            <Box className="text-white/60 mt-2">Average APY</Box>
          </Box>
          <Box className="text-center">
            <Box className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">
              6
            </Box>
            <Box className="text-white/60 mt-2">Chains Supported</Box>
          </Box>
        </Box>
      </Box>

      {/* Investment Options */}
      <Box tag="section" id="investments" className="py-20 px-6">
        <Box className="max-w-7xl mx-auto">
          <Box className="text-center mb-16">
            <Box tag="h2" className="text-4xl md:text-5xl font-bold mb-4">Investment Opportunities</Box>
            <Box tag="p" className="text-white/60 text-lg max-w-2xl mx-auto">
              Choose from a range of investment products designed for both beginners and experienced investors
            </Box>
          </Box>
          <Box className="grid md:grid-cols-2 gap-6">
            {investments.map((investment) => (
              <Box
                key={investment.title}
                className="group relative p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all cursor-pointer"
              >
                <Box className={`inline-grid grid-flow-col auto-cols-auto p-3 rounded-xl bg-gradient-to-br ${investment.color} mb-6`}>
                  <investment.icon className="w-6 h-6 text-white" />
                </Box>
                <Box tag="h3" className="text-2xl font-bold mb-2">{investment.title}</Box>
                <Box tag="p" className="text-white/60 mb-4">{investment.description}</Box>
                <Box className="grid grid-flow-col auto-cols-auto items-center justify-between">
                  <div>
                    <Box tag="span" className="text-sm text-white/40">Expected APY</Box>
                    <Box className="text-2xl font-bold text-emerald-400">{investment.apy}</Box>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Features Section */}
      <Box tag="section" id="features" className="py-20 px-6 bg-white/[0.02]">
        <Box className="max-w-7xl mx-auto">
          <Box className="text-center mb-16">
            <Box tag="h2" className="text-4xl md:text-5xl font-bold mb-4">Why Lux Invest</Box>
            <Box tag="p" className="text-white/60 text-lg max-w-2xl mx-auto">
              Built on the most advanced blockchain technology for secure, fast, and efficient investing
            </Box>
          </Box>
          <Box className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Box key={feature.title} className="text-center">
                <Box className="inline-grid grid-flow-col auto-cols-auto p-4 rounded-2xl bg-white/5 mb-6">
                  <feature.icon className="w-8 h-8 text-purple-400" />
                </Box>
                <Box tag="h3" className="text-xl font-bold mb-2">{feature.title}</Box>
                <Box tag="p" className="text-white/60">{feature.description}</Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* CTA Section */}
      <Box tag="section" className="py-20 px-6">
        <Box className="max-w-4xl mx-auto text-center">
          <Box tag="h2" className="text-4xl md:text-5xl font-bold mb-6">
            Start Building Your Portfolio Today
          </Box>
          <Box tag="p" className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of investors already growing their wealth in the Lux ecosystem.
            Connect your wallet and start investing in minutes.
          </Box>
          <Box className="flex flex-wrap justify-center gap-4">
            <Box tag="a"
              href="https://app.lux.network"
              className="inline-grid grid-flow-col auto-cols-auto items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl font-medium hover:opacity-90 transition-opacity"
            >
              Connect Wallet
              <ArrowRight className="w-5 h-5" />
            </Box>
            <Box tag="a"
              href="https://docs.lux.network/invest"
              className="inline-grid grid-flow-col auto-cols-auto items-center gap-2 px-8 py-4 border border-white/20 rounded-xl font-medium hover:bg-white/5 transition-colors"
            >
              Read Documentation
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Footer */}
      <Box tag="footer" className="py-12 px-6 border-t border-white/10">
        <Box className="max-w-7xl mx-auto grid grid-cols-1 md:grid-flow-col md:auto-cols-auto items-center justify-between gap-6">
          <Box className="grid grid-flow-col auto-cols-auto items-center gap-3">
            <Box className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 grid grid-flow-col auto-cols-auto items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </Box>
            <Box tag="span" className="font-bold">Lux Invest</Box>
          </Box>
          <Box className="grid grid-flow-col auto-cols-auto items-center gap-6 text-white/60 text-sm">
            <Box tag="a" href="https://lux.network" className="hover:text-white transition-colors">Network</Box>
            <Box tag="a" href="https://docs.lux.network" className="hover:text-white transition-colors">Docs</Box>
            <Box tag="a" href="https://github.com/luxfi" className="hover:text-white transition-colors">GitHub</Box>
            <Box tag="a" href="https://discord.gg/luxnetwork" className="hover:text-white transition-colors">Discord</Box>
          </Box>
          <Box className="text-white/40 text-sm">
            2024 Lux Partners Limited
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
