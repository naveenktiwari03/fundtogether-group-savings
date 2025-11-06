import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  ArrowLeft,
  Plus,
  TrendingUp,
  Users,
  Calendar,
  DollarSign,
  Target,
  Zap,
} from "lucide-react";

const mockFundData = {
  id: "1",
  name: "Summer Vacation 2026",
  goal: 50000,
  current: 32500,
  members: 5,
  endDate: "2026-06-15",
  returns: 1250,
  description: "Saving together for an amazing summer trip to Goa!",
  riskLevel: "Conservative",
  contributors: [
    { name: "Rahul K", amount: 8500, percentage: 26.2, avatar: "RK" },
    { name: "Priya S", amount: 7200, percentage: 22.2, avatar: "PS" },
    { name: "Amit M", amount: 6800, percentage: 20.9, avatar: "AM" },
    { name: "Sneha R", amount: 5500, percentage: 16.9, avatar: "SR" },
    { name: "Vikram P", amount: 4500, percentage: 13.8, avatar: "VP" },
  ],
  recentActivity: [
    { type: "contribution", user: "Priya S", amount: 1000, date: "2 hours ago" },
    { type: "roundup", user: "Rahul K", amount: 47, date: "5 hours ago" },
    { type: "contribution", user: "Amit M", amount: 2000, date: "1 day ago" },
    { type: "milestone", text: "50% milestone reached!", date: "2 days ago" },
  ],
};

const FundDetail = () => {
  const { id } = useParams();
  const fund = mockFundData;
  const progress = (fund.current / fund.goal) * 100;
  const daysLeft = Math.ceil(
    (new Date(fund.endDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              FundTogether
            </Link>
            <nav className="flex items-center gap-4">
              <Button variant="ghost" asChild>
                <Link to="/dashboard">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{fund.name}</h1>
          <p className="text-muted-foreground">{fund.description}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6 bg-gradient-card shadow-medium">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold">Fund Progress</h2>
                <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                  {fund.riskLevel}
                </span>
              </div>

              <div className="grid md:grid-cols-4 gap-4 mb-6">
                <div className="p-4 bg-primary/5 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <DollarSign className="h-4 w-4 text-primary" />
                    <span className="text-xs text-muted-foreground">Current</span>
                  </div>
                  <p className="text-xl font-bold">₹{fund.current.toLocaleString()}</p>
                </div>

                <div className="p-4 bg-accent/5 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Target className="h-4 w-4 text-accent" />
                    <span className="text-xs text-muted-foreground">Goal</span>
                  </div>
                  <p className="text-xl font-bold">₹{fund.goal.toLocaleString()}</p>
                </div>

                <div className="p-4 bg-secondary/5 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="h-4 w-4 text-secondary" />
                    <span className="text-xs text-muted-foreground">Returns</span>
                  </div>
                  <p className="text-xl font-bold">₹{fund.returns.toLocaleString()}</p>
                </div>

                <div className="p-4 bg-muted rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="h-4 w-4 text-foreground" />
                    <span className="text-xs text-muted-foreground">Days Left</span>
                  </div>
                  <p className="text-xl font-bold">{daysLeft}</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium">{progress.toFixed(1)}% Complete</span>
                  <span className="text-muted-foreground">
                    ₹{(fund.goal - fund.current).toLocaleString()} remaining
                  </span>
                </div>
                <Progress value={progress} className="h-3" />
              </div>

              <div className="flex gap-3 mt-6">
                <Button className="flex-1 bg-gradient-hero">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Contribution
                </Button>
                <Button variant="outline" className="flex-1">
                  <Zap className="mr-2 h-4 w-4" />
                  Setup Auto-Debit
                </Button>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card shadow-soft">
              <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
              <div className="space-y-3">
                {fund.recentActivity.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      {activity.type === "milestone" ? (
                        <div className="p-2 bg-accent/10 rounded-full">
                          <Target className="h-4 w-4 text-accent" />
                        </div>
                      ) : activity.type === "roundup" ? (
                        <div className="p-2 bg-secondary/10 rounded-full">
                          <Zap className="h-4 w-4 text-secondary" />
                        </div>
                      ) : (
                        <div className="p-2 bg-primary/10 rounded-full">
                          <Plus className="h-4 w-4 text-primary" />
                        </div>
                      )}
                      <div>
                        <p className="font-medium text-sm">
                          {activity.type === "milestone"
                            ? activity.text
                            : `${activity.user} ${
                                activity.type === "roundup" ? "round-up" : "contributed"
                              }`}
                        </p>
                        <p className="text-xs text-muted-foreground">{activity.date}</p>
                      </div>
                    </div>
                    {activity.amount && (
                      <span className="font-semibold text-secondary">
                        +₹{activity.amount.toLocaleString()}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-gradient-card shadow-soft">
              <div className="flex items-center gap-2 mb-4">
                <Users className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Contributors ({fund.members})</h2>
              </div>
              <div className="space-y-3">
                {fund.contributors.map((contributor, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                          {contributor.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-sm">{contributor.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {contributor.percentage.toFixed(1)}% share
                        </p>
                      </div>
                    </div>
                    <span className="font-semibold">₹{contributor.amount.toLocaleString()}</span>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                <Plus className="mr-2 h-4 w-4" />
                Invite Member
              </Button>
            </Card>

            <Card className="p-6 bg-gradient-success shadow-soft text-white">
              <h3 className="font-semibold mb-2">Investment Returns</h3>
              <p className="text-3xl font-bold mb-1">₹{fund.returns.toLocaleString()}</p>
              <p className="text-sm opacity-90">8.2% annualized return</p>
              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-xs opacity-75">
                  Your funds are invested in low-risk instruments to maximize growth while
                  maintaining liquidity.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FundDetail;
