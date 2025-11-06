import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Target, Calendar, Shield } from "lucide-react";
import { toast } from "sonner";

const CreateFund = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    goal: "",
    endDate: "",
    riskLevel: "conservative",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Fund created successfully!", {
      description: "You can now invite members and start contributing.",
    });
    setTimeout(() => navigate("/dashboard"), 1500);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              FundTogether
            </Link>
            <Button variant="ghost" asChild>
              <Link to="/dashboard">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Create New Fund</h1>
          <p className="text-muted-foreground">
            Start a collaborative savings goal with your friends, family, or community
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Card className="p-6 bg-gradient-card shadow-medium">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Fund Name</Label>
                <Input
                  id="name"
                  placeholder="e.g., Summer Vacation 2026"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="What's this fund for? Share the goal with your group..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="goal" className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-primary" />
                    Target Amount (₹)
                  </Label>
                  <Input
                    id="goal"
                    type="number"
                    placeholder="50000"
                    value={formData.goal}
                    onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="endDate" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    Target Date
                  </Label>
                  <Input
                    id="endDate"
                    type="date"
                    value={formData.endDate}
                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="riskLevel" className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  Investment Risk Level
                </Label>
                <Select
                  value={formData.riskLevel}
                  onValueChange={(value) => setFormData({ ...formData, riskLevel: value })}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="conservative">
                      Conservative - Low risk, stable returns (4-6%)
                    </SelectItem>
                    <SelectItem value="moderate">
                      Moderate - Balanced risk and returns (6-10%)
                    </SelectItem>
                    <SelectItem value="aggressive">
                      Aggressive - Higher risk, potential high returns (10-15%)
                    </SelectItem>
                  </SelectContent>
                </Select>
                <p className="text-xs text-muted-foreground">
                  Your pooled funds will be invested based on this risk profile
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-secondary/5 border-secondary/20">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Shield className="h-5 w-5 text-secondary" />
              What happens next?
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-0.5">•</span>
                <span>Invite members to join your fund via unique link</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-0.5">•</span>
                <span>Set up recurring contributions or enable round-up savings</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-0.5">•</span>
                <span>Funds are automatically invested according to your risk profile</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary mt-0.5">•</span>
                <span>Track progress together and withdraw when goal is reached</span>
              </li>
            </ul>
          </Card>

          <div className="flex gap-3">
            <Button type="submit" className="flex-1 bg-gradient-hero" size="lg">
              Create Fund
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/dashboard")}
              size="lg"
            >
              Cancel
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default CreateFund;
