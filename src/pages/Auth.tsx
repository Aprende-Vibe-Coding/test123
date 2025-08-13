import { AuthForm } from "@/components/AuthForm";

const Auth = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-ai-gradient-subtle" />
      
      {/* Floating orbs for visual appeal */}
      <div className="absolute top-20 left-20 h-32 w-32 rounded-full bg-primary/20 blur-xl animate-float" />
      <div className="absolute bottom-20 right-20 h-40 w-40 rounded-full bg-accent/20 blur-xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-24 w-24 rounded-full bg-secondary/20 blur-xl animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Main content */}
      <div className="relative z-10 w-full max-w-md mx-auto px-4">
        <AuthForm />
      </div>
    </div>
  );
};

export default Auth;