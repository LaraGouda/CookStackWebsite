import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section id="walkthrough" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Watch the Full Walkthrough
          </h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Play className="w-5 h-5 text-primary" />
            <span className="font-body">See CookStack in action</span>
          </div>
        </div>
        
        {/* Video Container */}
        <div className="relative group">
          {/* Decorative background */}
          <div className="absolute -inset-4 bg-gradient-honey rounded-[2rem] opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500" />
          
          {/* Video wrapper */}
          <div className="relative bg-gradient-card rounded-3xl p-4 shadow-card border border-border/50 overflow-hidden">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-secondary/20">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/zymodGWREro"
                title="CookStack Project Video Walkthrough"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
          
          {/* Corner decorations */}
          <div className="absolute -top-3 -left-3 text-3xl animate-float">🍪</div>
          <div className="absolute -bottom-3 -right-3 text-3xl animate-float" style={{ animationDelay: "0.5s" }}>🧁</div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
