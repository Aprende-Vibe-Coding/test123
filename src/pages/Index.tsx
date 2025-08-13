import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ImageIcon, Zap, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ai-gradient text-white font-medium shadow-ai-glow animate-pulse-glow">
          <Sparkles className="h-4 w-4" />
          AI-Powered Creative Studio
        </div>
        <h1 className="text-5xl font-bold bg-ai-gradient bg-clip-text text-transparent leading-tight">
          Create Stunning Ad Visuals<br />in Seconds
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Transform your marketing ideas into professional-quality images with our advanced AI technology. 
          No design skills required.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg" className="bg-ai-gradient hover:shadow-ai-glow-strong transition-all duration-300">
            <Link to="/generate">
              <ImageIcon className="h-5 w-5 mr-2" />
              Start Creating
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/gallery">View Gallery</Link>
          </Button>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-0 shadow-ai-glow bg-card/80 backdrop-blur-sm text-center">
          <CardContent className="pt-6 space-y-4">
            <div className="h-12 w-12 mx-auto rounded-full bg-ai-gradient flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold">AI-Powered Generation</h3>
            <p className="text-muted-foreground text-sm">
              State-of-the-art AI models create professional images from your text descriptions
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-ai-glow bg-card/80 backdrop-blur-sm text-center">
          <CardContent className="pt-6 space-y-4">
            <div className="h-12 w-12 mx-auto rounded-full bg-ai-gradient flex items-center justify-center">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold">Lightning Fast</h3>
            <p className="text-muted-foreground text-sm">
              Generate high-quality images in 10-30 seconds. Perfect for tight deadlines
            </p>
          </CardContent>
        </Card>
        
        <Card className="border-0 shadow-ai-glow bg-card/80 backdrop-blur-sm text-center">
          <CardContent className="pt-6 space-y-4">
            <div className="h-12 w-12 mx-auto rounded-full bg-ai-gradient flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold">Professional Quality</h3>
            <p className="text-muted-foreground text-sm">
              Create marketing visuals that compete with expensive design agencies
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Stats */}
      <Card className="border-0 bg-muted/50">
        <CardContent className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">10</div>
              <p className="text-sm text-muted-foreground">Free Credits</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">30s</div>
              <p className="text-sm text-muted-foreground">Average Generation</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">4K</div>
              <p className="text-sm text-muted-foreground">High Resolution</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">∞</div>
              <p className="text-sm text-muted-foreground">Creative Possibilities</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
