import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 text-muted-foreground font-body">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
          <span>by</span>
          <span className="font-semibold text-foreground">Lara Gouda</span>
        </div>
        
        <div className="mt-4 flex items-center justify-center gap-1 text-sm text-muted-foreground">
          <span className="animate-float">🍯</span>
          <span>Stack your recipes, cook with joy</span>
          <span className="animate-float" style={{ animationDelay: "0.5s" }}>🥞</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
