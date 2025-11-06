import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Users,
  TrendingUp,
  Zap,
  Shield,
  Target,
  Calendar,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              FundTogether
            </div>
            <nav className="flex items-center gap-4">
              <Button variant="ghost" asChild>
                <Link to="/dashboard">Dashboard</Link>
              </Button>
              <Button variant="default" asChild>
                <Link to="/create-fund">Create Fund</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Save Together,
              <br />
              Grow Together
            </h1>
            <p className="text-xl lg:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
              Pool money with friends, family, or community. Watch your shared goals grow through
              smart investments and collaborative savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg">
                <Link to="/create-fund">
                  Start Your First Fund
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg border-white text-white hover:bg-white/10">
                <Link to="/dashboard">View Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Create, contribute, and achieve your shared financial goals in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center bg-gradient-card shadow-soft hover:shadow-medium transition-all">
              <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-4">
                <Target className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">1. Set Your Goal</h3>
              <p className="text-muted-foreground">
                Create a fund for any shared goal - vacations, weddings, gifts, or projects. Set your
                target amount and date.
              </p>
            </Card>

            <Card className="p-8 text-center bg-gradient-card shadow-soft hover:shadow-medium transition-all">
              <div className="inline-flex p-4 bg-secondary/10 rounded-2xl mb-4">
                <Users className="h-10 w-10 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">2. Invite & Contribute</h3>
              <p className="text-muted-foreground">
                Invite members to join. Set up recurring payments or enable round-up savings to
                automate contributions.
              </p>
            </Card>

            <Card className="p-8 text-center bg-gradient-card shadow-soft hover:shadow-medium transition-all">
              <div className="inline-flex p-4 bg-accent/10 rounded-2xl mb-4">
                <TrendingUp className="h-10 w-10 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">3. Watch It Grow</h3>
              <p className="text-muted-foreground">
                Your pooled funds are invested securely. Track progress, earn returns, and withdraw
                when ready.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need for successful collaborative savings
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Zap,
                title: "Auto Round-Ups",
                description: "Every purchase rounds up to ₹100. Difference goes to your fund automatically.",
                color: "secondary",
              },
              {
                icon: Calendar,
                title: "Recurring Contributions",
                description: "Set it and forget it. Daily, weekly, or monthly auto-debits keep you on track.",
                color: "primary",
              },
              {
                icon: TrendingUp,
                title: "Smart Investments",
                description: "Funds invested in low-risk instruments to maximize growth and returns.",
                color: "secondary",
              },
              {
                icon: Shield,
                title: "Bank-Grade Security",
                description: "KYC verified, encrypted, and fully compliant with financial regulations.",
                color: "accent",
              },
              {
                icon: Users,
                title: "Full Transparency",
                description: "Every member sees contributions, returns, and progress in real-time.",
                color: "primary",
              },
              {
                icon: Target,
                title: "Milestone Tracking",
                description: "Celebrate progress with milestone markers and group notifications.",
                color: "accent",
              },
            ].map((feature, index) => (
              <Card key={index} className="p-6 bg-gradient-card shadow-soft hover:shadow-medium transition-all">
                <div className={`inline-flex p-3 bg-${feature.color}/10 rounded-xl mb-4`}>
                  <feature.icon className={`h-6 w-6 text-${feature.color}`} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-success text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Ready to achieve your goals together?
                </h2>
                <ul className="space-y-4 mb-8">
                  {[
                    "Create unlimited funds for any goal",
                    "No hidden fees or charges",
                    "Withdraw anytime with group consensus",
                    "Track returns and progress in real-time",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="h-6 w-6 flex-shrink-0" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button size="lg" variant="secondary" asChild className="text-lg">
                  <Link to="/create-fund">
                    Create Your First Fund
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <Card className="p-8 bg-white/10 border-white/20 backdrop-blur-sm">
                <div className="space-y-6">
                  <div>
                    <p className="text-sm opacity-75 mb-1">Average Returns</p>
                    <p className="text-4xl font-bold">8.2%</p>
                  </div>
                  <div>
                    <p className="text-sm opacity-75 mb-1">Active Funds</p>
                    <p className="text-4xl font-bold">10,000+</p>
                  </div>
                  <div>
                    <p className="text-sm opacity-75 mb-1">Total Saved</p>
                    <p className="text-4xl font-bold">₹50Cr+</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent mb-4">
              FundTogether
            </div>
            <p className="text-muted-foreground mb-4">
              Collaborative savings and investments made simple
            </p>
            <p className="text-sm text-muted-foreground">
              © 2025 FundTogether. Bank-grade security. Fully regulated.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
