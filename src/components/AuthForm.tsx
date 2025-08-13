import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Sparkles, Mail, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function AuthForm() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLinkSent, setIsLinkSent] = useState(false);
  const { toast } = useToast();

  const handleMagicLink = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const redirectUrl = `${window.location.origin}/`;
      
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: redirectUrl
        }
      });

      if (error) {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      } else {
        setIsLinkSent(true);
        toast({
          title: "Magic link sent!",
          description: "Check your email for the login link.",
        });
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isLinkSent) {
    return (
      <Card className="w-full max-w-md mx-auto border-0 bg-card/80 backdrop-blur-sm shadow-ai-glow">
        <CardHeader className="text-center">
          <div className="mx-auto h-12 w-12 rounded-full bg-ai-gradient flex items-center justify-center mb-4">
            <CheckCircle className="h-6 w-6 text-white" />
          </div>
          <CardTitle className="text-2xl font-bold bg-ai-gradient bg-clip-text text-transparent">
            Check Your Email
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            We've sent a magic link to <strong>{email}</strong>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground text-center">
            Click the link in your email to sign in. The link will expire in 1 hour.
          </p>
          <Button
            variant="outline"
            onClick={() => setIsLinkSent(false)}
            className="w-full"
          >
            Send Another Link
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto border-0 bg-card/80 backdrop-blur-sm shadow-ai-glow">
      <CardHeader className="text-center">
        <div className="mx-auto h-12 w-12 rounded-full bg-ai-gradient flex items-center justify-center mb-4 animate-pulse-glow">
          <Sparkles className="h-6 w-6 text-white" />
        </div>
        <CardTitle className="text-2xl font-bold bg-ai-gradient bg-clip-text text-transparent">
          Welcome to AI Ads Generator
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Sign in with your email to start creating stunning visuals
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleMagicLink} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email address
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="pl-10 h-12 border-muted focus:border-primary focus:ring-primary"
              />
            </div>
          </div>
          <Button
            type="submit"
            disabled={isLoading || !email}
            className="w-full h-12 bg-ai-gradient hover:shadow-ai-glow-strong transition-all duration-300 font-medium"
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                Sending magic link...
              </div>
            ) : (
              "Send Magic Link"
            )}
          </Button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            By signing in, you agree to our terms of service and privacy policy
          </p>
        </div>
      </CardContent>
    </Card>
  );
}