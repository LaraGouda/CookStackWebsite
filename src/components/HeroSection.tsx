import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 overflow-hidden">
      {/* Decorative honey drips */}
      <div className="absolute top-0 left-1/4 w-4 h-20 bg-gradient-honey rounded-b-full opacity-60 animate-drip" />
      <div className="absolute top-0 left-1/3 w-3 h-16 bg-gradient-honey rounded-b-full opacity-40 animate-drip" style={{ animationDelay: "0.5s" }} />
      <div className="absolute top-0 right-1/4 w-5 h-24 bg-gradient-honey rounded-b-full opacity-50 animate-drip" style={{ animationDelay: "1s" }} />
      <div className="absolute top-0 right-1/3 w-3 h-14 bg-gradient-honey rounded-b-full opacity-30 animate-drip" style={{ animationDelay: "1.5s" }} />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 text-6xl animate-float opacity-70">🍯</div>
      <div className="absolute top-40 right-16 text-5xl animate-float" style={{ animationDelay: "1s" }}>🥞</div>
      <div className="absolute bottom-32 left-20 text-4xl animate-float" style={{ animationDelay: "0.5s" }}>🐝</div>
      <div className="absolute bottom-20 right-24 text-5xl animate-float" style={{ animationDelay: "1.5s" }}>🍳</div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <img 
            src="/images/logo.png" 
            alt="CookStack Logo - Pancake stack with chef hat" 
            className="w-40 h-40 md:w-52 md:h-52 object-contain animate-float drop-shadow-lg"
          />
        </div>
        
        {/* Title */}
        <div className="mb-4">
          <span className="inline-block text-6xl md:text-7xl lg:text-8xl font-display font-bold text-gradient-honey tracking-tight">
            CookStack
          </span>
        </div>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground font-body mb-12">
          Made by <span className="font-semibold text-foreground">Lara Gouda</span>
        </p>
        
        {/* CTA Button */}
        <div className="flex justify-center">
          <Button variant="honey" size="xl" asChild>
            <a href="https://github.com/LaraGouda/CookStack" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="w-8 h-12 rounded-full border-2 border-pancake-dark/30 flex items-start justify-center p-2 animate-bounce">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
