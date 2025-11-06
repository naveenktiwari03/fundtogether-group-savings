import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Plus, TrendingUp, Users, DollarSign, Calendar } from "lucide-react";

const mockFunds = [
  {
    id: "1",
    name: "Summer Vacation 2026",
    goal: 50000,
    current: 32500,
    members: 5,
    endDate: "2026-06-15",
    returns: 1250,
  },
  {
    id: "2",
    name: "Wedding Gift for Sarah",
    goal: 15000,
    current: 12800,
    members: 8,
    endDate: "2025-12-20",
    returns: 420,
  },
  {
    id: "3",
    name: "Community Center Renovation",
    goal: 100000,
    current: 45000,
    members: 15,
    endDate: "2026-03-30",
    returns: 2100,
  },
];

const Dashboard = () => {
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
                <Link to="/dashboard">Dashboard</Link>
              </Button>
              <Button variant="default" asChild>
                <Link to="/create-fund">
                  <Plus className="mr-2 h-4 w-4" />
                  New Fund
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Your Funds</h1>
          <p className="text-muted-foreground">Track and manage your collaborative savings</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-gradient-card shadow-soft">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-primary/10 rounded-lg">
                <DollarSign className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Total Saved</span>
            </div>
            <p className="text-3xl font-bold">₹90,300</p>
            <p className="text-sm text-secondary mt-1">+12.5% this month</p>
          </Card>

          <Card className="p-6 bg-gradient-card shadow-soft">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-secondary/10 rounded-lg">
                <TrendingUp className="h-5 w-5 text-secondary" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Total Returns</span>
            </div>
            <p className="text-3xl font-bold">₹3,770</p>
            <p className="text-sm text-secondary mt-1">8.2% avg return</p>
          </Card>

          <Card className="p-6 bg-gradient-card shadow-soft">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-accent/10 rounded-lg">
                <Users className="h-5 w-5 text-accent" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Active Funds</span>
            </div>
            <p className="text-3xl font-bold">{mockFunds.length}</p>
            <p className="text-sm text-muted-foreground mt-1">28 total members</p>
          </Card>
        </div>

        <div className="space-y-4">
          {mockFunds.map((fund) => {
            const progress = (fund.current / fund.goal) * 100;
            const daysLeft = Math.ceil(
              (new Date(fund.endDate).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
            );

            return (
              <Link key={fund.id} to={`/fund/${fund.id}`}>
                <Card className="p-6 hover:shadow-medium transition-all duration-300 bg-gradient-card cursor-pointer">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{fund.name}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {fund.members} members
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {daysLeft} days left
                        </span>
                        <span className="flex items-center gap-1 text-secondary">
                          <TrendingUp className="h-4 w-4" />
                          +₹{fund.returns.toLocaleString()} returns
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="font-medium">
                            ₹{fund.current.toLocaleString()} / ₹{fund.goal.toLocaleString()}
                          </span>
                          <span className="text-muted-foreground">{progress.toFixed(1)}%</span>
                        </div>
                        <Progress value={progress} className="h-2" />
                      </div>
                    </div>
                    <Button variant="outline">View Details</Button>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
