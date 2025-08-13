import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ImageIcon, Sparkles, Zap } from "lucide-react";

const Generate = () => {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    // TODO: Implement image generation logic
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ai-gradient text-white font-medium shadow-ai-glow">
          <Sparkles className="h-4 w-4" />
          AI Image Generator
        </div>
        <h1 className="text-4xl font-bold bg-ai-gradient bg-clip-text text-transparent">
          Create Stunning Ad Visuals
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Transform your ideas into professional advertising images with the power of AI
        </p>
      </div>

      {/* Generation Form */}
      <Card className="border-0 shadow-ai-glow bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ImageIcon className="h-5 w-5" />
            Describe Your Vision
          </CardTitle>
          <CardDescription>
            Be specific about what you want to create. Include details about style, colors, mood, and composition.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Textarea
              placeholder="A modern smartphone floating in mid-air with colorful light trails, professional product photography, clean white background, dramatic lighting..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="min-h-[120px] resize-none border-muted focus:border-primary"
            />
            <div className="flex justify-between items-center text-sm text-muted-foreground">
              <span>{prompt.length}/500 characters</span>
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                <Zap className="h-3 w-3 mr-1" />
                10 credits available
              </Badge>
            </div>
          </div>

          <Button
            onClick={handleGenerate}
            disabled={!prompt.trim() || isGenerating}
            className="w-full h-12 bg-ai-gradient hover:shadow-ai-glow-strong transition-all duration-300 font-medium"
            size="lg"
          >
            {isGenerating ? (
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Generating your image...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Generate Image (1 credit)
              </div>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Generation Progress/Result */}
      {isGenerating && (
        <Card className="border-0 shadow-ai-glow bg-card/80 backdrop-blur-sm">
          <CardContent className="py-12">
            <div className="text-center space-y-4">
              <div className="h-16 w-16 mx-auto rounded-full bg-ai-gradient flex items-center justify-center animate-pulse-glow">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold">Creating your masterpiece...</h3>
              <p className="text-muted-foreground">This usually takes 10-30 seconds</p>
              <div className="w-full max-w-xs mx-auto bg-muted rounded-full h-2">
                <div className="bg-ai-gradient h-2 rounded-full animate-pulse" style={{ width: '65%' }} />
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Quick Tips */}
      <Card className="border-0 bg-muted/50">
        <CardHeader>
          <CardTitle className="text-lg">💡 Pro Tips</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-sm text-muted-foreground">• Be specific about style: "photorealistic", "illustration", "minimalist"</p>
          <p className="text-sm text-muted-foreground">• Mention lighting: "soft lighting", "dramatic shadows", "golden hour"</p>
          <p className="text-sm text-muted-foreground">• Include composition details: "centered", "close-up", "wide angle"</p>
          <p className="text-sm text-muted-foreground">• Specify colors and mood: "vibrant colors", "monochrome", "warm tones"</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Generate;