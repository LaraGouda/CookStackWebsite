const DescriptionSection = () => {
  return (
    <section className="py-10 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-card rounded-3xl p-5 md:p-6 shadow-card border border-border/50">
          <p className="text-lg md:text-xl font-body text-foreground leading-relaxed">
            Here's a warm glimpse into{" "}
            <span className="font-display font-bold text-gradient-honey">CookStack</span>
            , your cozy kitchen app for stacking all your favorite recipes{" "}
            <span className="inline-block animate-float">✨</span>
            <span className="inline-block animate-float" style={{ animationDelay: "0.3s" }}>🍯</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default DescriptionSection;
