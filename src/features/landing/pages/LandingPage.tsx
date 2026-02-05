import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import {
  Sparkles,
  Rocket,
  Brain,
  Target,
  Zap,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  FileText,
  TrendingUp,
  Phone,
  PhoneCall,
  BarChart3,
  Star,
  Clock,
  ThumbsUp,
  Palette,
  Globe,
  Code2,
  Megaphone,
  PiggyBank,
  Database,
  Shield,
  Mail,
  Users,
  LineChart,
  Bot,
  Workflow,
  Lock,
  Eye
} from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-lg tracking-tight">Virtual Co-founder</span>
          </Link>

          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                Sign in
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="btn-primary">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 constellation">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              <span className="text-sm text-muted-foreground">AI-powered startup companion</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6"
            >
              Your AI co-founder for{' '}
              <span className="text-primary text-glow">turning ideas</span>{' '}
              into reality
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeInUp}
              className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            >
              From napkin sketch to product launch. Get strategic guidance,
              market validation, and actionable plans—all from an AI that
              thinks like a seasoned entrepreneur.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/signup">
                <Button size="lg" className="btn-primary text-lg px-8 py-6">
                  Start Building Free
                  <Rocket className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-white/10 hover:bg-white/5">
                  Watch Demo
                </Button>
              </Link>
            </motion.div>

            {/* Social proof */}
            <motion.div
              variants={fadeInUp}
              className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>5 minute setup</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Cancel anytime</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 relative"
          >
            <div className="relative max-w-5xl mx-auto">
              {/* Glow effect behind */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-primary/5 to-transparent blur-3xl -z-10" />

              {/* Dashboard mockup */}
              <div className="glass rounded-2xl p-1 glow-amber-subtle">
                <div className="bg-card rounded-xl overflow-hidden">
                  {/* Fake browser chrome */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <div className="flex-1 flex justify-center">
                      <div className="px-4 py-1 rounded-md bg-secondary/50 text-xs text-muted-foreground">
                        app.virtualcofounder.ai
                      </div>
                    </div>
                  </div>

                  {/* Dashboard content */}
                  <div className="p-6 min-h-[400px] grid grid-cols-3 gap-4">
                    {/* Sidebar */}
                    <div className="col-span-1 space-y-3">
                      <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                        <div className="flex items-center gap-2 text-primary">
                          <MessageSquare className="w-4 h-4" />
                          <span className="text-sm font-medium">Chat</span>
                        </div>
                      </div>
                      <div className="p-3 rounded-lg hover:bg-white/5 transition-colors">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <FileText className="w-4 h-4" />
                          <span className="text-sm">Business Plan</span>
                        </div>
                      </div>
                      <div className="p-3 rounded-lg hover:bg-white/5 transition-colors">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Target className="w-4 h-4" />
                          <span className="text-sm">Market Analysis</span>
                        </div>
                      </div>
                      <div className="p-3 rounded-lg hover:bg-white/5 transition-colors">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <TrendingUp className="w-4 h-4" />
                          <span className="text-sm">Roadmap</span>
                        </div>
                      </div>
                    </div>

                    {/* Chat area */}
                    <div className="col-span-2 space-y-4">
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                          <Sparkles className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex-1 p-4 rounded-lg bg-secondary/30">
                          <p className="text-sm">
                            Based on your SaaS idea, I've identified 3 key market segments
                            with strong growth potential. Let's analyze the competitive
                            landscape for each...
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3 justify-end">
                        <div className="p-4 rounded-lg bg-primary/10 border border-primary/20 max-w-md">
                          <p className="text-sm">
                            That's helpful! Can you also suggest pricing strategies
                            for the SMB segment?
                          </p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                          <span className="text-xs font-medium">TK</span>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                          <Sparkles className="w-4 h-4 text-primary" />
                        </div>
                        <div className="flex-1 p-4 rounded-lg bg-secondary/30">
                          <div className="flex items-center gap-2 text-primary text-sm mb-2">
                            <Zap className="w-4 h-4" />
                            <span>Generating pricing analysis...</span>
                          </div>
                          <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                            <div className="h-full w-2/3 bg-primary rounded-full animate-pulse" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Value Props */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Not a tool.{' '}
              <span className="text-primary">A partner.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your AI co-founder doesn't just give advice—it actually does the work.
              Building, deploying, marketing, all while you steer.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Bot,
                title: 'Does the Work',
                description: 'Not just planning—actually builds code, creates content, deploys products, and runs campaigns.',
                gradient: 'from-blue-500/20 to-purple-500/20'
              },
              {
                icon: Database,
                title: 'Remembers Everything',
                description: 'Every decision, preference, and context is stored. Your AI never asks the same question twice.',
                gradient: 'from-primary/20 to-orange-500/20'
              },
              {
                icon: Shield,
                title: 'Asks Permission',
                description: 'Sensitive actions like spending money or public posts always require your approval first.',
                gradient: 'from-green-500/20 to-teal-500/20'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="glass glass-hover rounded-2xl p-8 h-full group">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-7 h-7 text-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Feature Grid */}
      <section className="py-24 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Everything to go from{' '}
              <span className="text-primary">idea to revenue</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each phase of your startup journey, handled by AI that actually executes.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Brain,
                title: 'Discovery',
                description: 'Define your problem, audience, and scope through natural conversation. Get positioning that fits.',
                tag: 'Phase 1'
              },
              {
                icon: Palette,
                title: 'Branding',
                description: 'Name exploration with domain checking, visual direction, colors, typography, and voice guidelines.',
                tag: 'Phase 2'
              },
              {
                icon: Globe,
                title: 'Landing Page',
                description: 'AI generates and deploys your landing page with waitlist. Validate demand before building.',
                tag: 'Phase 3'
              },
              {
                icon: Code2,
                title: 'Development',
                description: 'AI writes code, tests first (TDD), deploys to preview. You review and approve each feature.',
                tag: 'Phase 4'
              },
              {
                icon: Megaphone,
                title: 'Marketing',
                description: 'Automated outreach, ad creation, A/B testing, and campaign optimization across all channels.',
                tag: 'Phase 5'
              },
              {
                icon: PiggyBank,
                title: 'Fundraising',
                description: 'Pitch decks, investor targeting, outreach automation, and term sheet analysis.',
                tag: 'Optional'
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="glass glass-hover rounded-2xl p-6 h-full group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground bg-secondary/50 px-2 py-1 rounded-full">
                      {feature.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Automation Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
                <Megaphone className="w-4 h-4" />
                <span>Marketing Automation</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Automated outreach that{' '}
                <span className="text-primary">actually converts</span>
              </h2>

              <p className="text-lg text-muted-foreground mb-8">
                Connect your accounts and let AI handle the heavy lifting—from ad creation
                to email sequences to social posting. You set the automation level.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Mail, text: 'Cold email sequences with personalization' },
                  { icon: Users, text: 'LinkedIn outreach and follow-ups' },
                  { icon: LineChart, text: 'Ad creation with A/B testing' },
                  { icon: Workflow, text: 'CRM setup and lead scoring' },
                ].map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Automation levels */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="glass rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-6">Choose your automation level</h3>
                <div className="space-y-4">
                  {[
                    {
                      level: 'Manual',
                      desc: 'AI drafts everything, you execute',
                      icon: Eye,
                      color: 'text-blue-400 bg-blue-500/10'
                    },
                    {
                      level: 'Supervised',
                      desc: 'AI queues actions, you approve in batches',
                      icon: CheckCircle2,
                      color: 'text-primary bg-primary/10'
                    },
                    {
                      level: 'Autonomous',
                      desc: 'AI executes with spend limits, you review after',
                      icon: Zap,
                      color: 'text-green-400 bg-green-500/10'
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={item.level}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors"
                    >
                      <div className={`w-10 h-10 rounded-lg ${item.color} flex items-center justify-center flex-shrink-0`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium">{item.level}</p>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4 flex items-center gap-2">
                  <Lock className="w-3 h-3" />
                  Spending money and public posts always require approval
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Development Section */}
      <section className="py-24 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Code mockup */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="glass rounded-2xl overflow-hidden">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                  </div>
                  <span className="text-xs text-muted-foreground ml-2">PLAN.md</span>
                </div>
                {/* Plan content */}
                <div className="p-4 font-mono text-sm space-y-2">
                  <p className="text-green-400">## Task 1: Setup database schema [DONE]</p>
                  <p className="text-green-400">## Task 2: Implement auth flow [DONE]</p>
                  <p className="text-green-400">## Task 3: User dashboard [DONE]</p>
                  <p className="text-primary">## Task 4: Payment integration ← Building...</p>
                  <p className="text-muted-foreground">## Task 5: Email notifications</p>
                  <p className="text-muted-foreground">## Task 6: Admin panel</p>
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <p className="text-muted-foreground text-xs">Preview: https://your-app-preview.vercel.app</p>
                    <p className="text-green-400 text-xs mt-1">✓ 12 tests passing</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-6">
                <Code2 className="w-4 h-4" />
                <span>Development Pipeline</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                AI that actually{' '}
                <span className="text-primary">builds your product</span>
              </h2>

              <p className="text-lg text-muted-foreground mb-8">
                Not just wireframes and specs—real code, tested and deployed.
                You review each feature in a preview environment before it goes live.
              </p>

              <div className="space-y-4">
                {[
                  'Tests written first (TDD methodology)',
                  'Preview URLs for every feature',
                  'You approve before production deploy',
                  'Full git history, you own the code',
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fundraising Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-6">
                <PiggyBank className="w-4 h-4" />
                <span>Fundraising Support</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Raise capital with{' '}
                <span className="text-primary">AI in your corner</span>
              </h2>

              <p className="text-lg text-muted-foreground mb-8">
                From deciding IF you should raise to closing the deal.
                Get pitch decks, investor targeting, and negotiation support.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Pitch Deck', desc: 'Tailored to your audience' },
                  { label: 'Investor List', desc: 'Matched to your space' },
                  { label: 'Data Room', desc: 'Organized and ready' },
                  { label: 'Term Analysis', desc: 'Flag bad terms' },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-xl bg-secondary/30"
                  >
                    <p className="font-medium text-primary">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Funding paths */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="glass rounded-2xl p-6">
                <h3 className="text-lg font-semibold mb-2">AI recommends your path</h3>
                <p className="text-sm text-muted-foreground mb-6">Based on your stage, market, and goals</p>
                <div className="space-y-3">
                  {[
                    { path: 'Bootstrap', when: 'Profitable unit economics' },
                    { path: 'Angels', when: 'Early, need mentorship' },
                    { path: 'Accelerator', when: 'Have MVP, need to scale' },
                    { path: 'Venture', when: 'Proven traction, big market' },
                  ].map((item) => (
                    <div
                      key={item.path}
                      className="flex items-center justify-between p-3 rounded-lg bg-secondary/30"
                    >
                      <span className="font-medium">{item.path}</span>
                      <span className="text-xs text-muted-foreground">{item.when}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              From idea to launch in{' '}
              <span className="text-primary">4 phases</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { phase: '01', title: 'Discovery', desc: 'Share your idea and vision' },
              { phase: '02', title: 'Validation', desc: 'Test assumptions with data' },
              { phase: '03', title: 'Planning', desc: 'Build your roadmap' },
              { phase: '04', title: 'Execution', desc: 'Launch and iterate' },
            ].map((step, index) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-primary/20 mb-4">{step.phase}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pitch Training Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium mb-6">
                <Phone className="w-4 h-4" />
                <span>Pitch Training Mode</span>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Practice your pitch with{' '}
                <span className="text-primary text-glow">AI investors & clients</span>
              </h2>

              <p className="text-lg text-muted-foreground mb-8">
                Get real phone calls from AI acting as skeptical investors or potential customers.
                Twice a day, you'll have to convince them your startup is worth their time and money.
                No scripts. No do-overs. Just like the real thing.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { icon: PhoneCall, text: 'Receive up to 2 surprise calls daily' },
                  { icon: Brain, text: 'AI adapts to your industry and stage' },
                  { icon: BarChart3, text: 'Detailed performance analytics after each call' },
                  { icon: ThumbsUp, text: 'Get a "likelihood to invest/buy" score' },
                ].map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-foreground">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <Link to="/signup">
                <Button className="btn-primary">
                  Start Training
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>

            {/* Right side - Call mockup */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Glow behind */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-primary/10 to-transparent blur-3xl -z-10" />

              {/* Phone mockup */}
              <div className="glass rounded-3xl p-6 max-w-sm mx-auto">
                {/* Incoming call UI */}
                <div className="text-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-green-500/30 flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                    <PhoneCall className="w-10 h-10 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">Incoming Call</p>
                  <h3 className="text-xl font-semibold">AI Investor</h3>
                  <p className="text-sm text-muted-foreground">Series A Partner @ Sequoia</p>
                </div>

                {/* Call stats preview */}
                <div className="glass rounded-xl p-4 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-muted-foreground">Last Call Summary</span>
                    <span className="text-xs text-muted-foreground">2h ago</span>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span>Investment Likelihood</span>
                        <span className="text-primary font-medium">72%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full w-[72%] bg-gradient-to-r from-primary to-green-500 rounded-full" />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="p-2 rounded-lg bg-secondary/50">
                        <Clock className="w-4 h-4 mx-auto mb-1 text-muted-foreground" />
                        <p className="text-xs text-muted-foreground">Duration</p>
                        <p className="text-sm font-medium">4:32</p>
                      </div>
                      <div className="p-2 rounded-lg bg-secondary/50">
                        <TrendingUp className="w-4 h-4 mx-auto mb-1 text-green-400" />
                        <p className="text-xs text-muted-foreground">Clarity</p>
                        <p className="text-sm font-medium text-green-400">+15%</p>
                      </div>
                      <div className="p-2 rounded-lg bg-secondary/50">
                        <Star className="w-4 h-4 mx-auto mb-1 text-primary" />
                        <p className="text-xs text-muted-foreground">Score</p>
                        <p className="text-sm font-medium">8.4</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Improvement tips */}
                <div className="space-y-2">
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Areas to improve</p>
                  <div className="flex flex-wrap gap-2">
                    {['Market size', 'Revenue model', 'Competition'].map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12 text-center relative overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 pointer-events-none" />

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to build something amazing?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                Join thousands of founders using AI to accelerate their startup journey.
              </p>
              <Link to="/signup">
                <Button size="lg" className="btn-primary text-lg px-8 py-6">
                  Start Free Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-primary-foreground" />
            </div>
            <span className="text-sm text-muted-foreground">
              © 2024 Virtual Co-founder. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="link-hover hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="link-hover hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="link-hover hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
