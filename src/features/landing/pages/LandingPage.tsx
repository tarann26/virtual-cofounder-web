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
  ThumbsUp
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

      {/* Features Section */}
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
              Everything you need to{' '}
              <span className="text-primary">launch</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your AI co-founder guides you through every stage of building a startup,
              from initial concept to growth strategy.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Brain,
                title: 'Strategic Thinking',
                description: 'Get advice grounded in startup methodology. From lean canvas to growth frameworks.',
                gradient: 'from-blue-500/20 to-purple-500/20'
              },
              {
                icon: Target,
                title: 'Market Validation',
                description: 'Identify your target market, analyze competitors, and validate product-market fit.',
                gradient: 'from-primary/20 to-orange-500/20'
              },
              {
                icon: Rocket,
                title: 'Launch Planning',
                description: 'Build actionable roadmaps with milestones, resource planning, and go-to-market strategy.',
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
