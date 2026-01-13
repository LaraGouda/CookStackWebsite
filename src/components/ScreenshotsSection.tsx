const ScreenshotsSection = () => {
  const screenshots = [
    { src: "/images/menu.png", alt: "CookStack main menu - Start cooking" },
    { src: "/images/recipes.png", alt: "CookStack recipe list - Browse your recipes" },
    { src: "/images/recipeviewer.png", alt: "CookStack recipe viewer - Detailed recipe view" },
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-card bg-gradient-card p-3 transition-all duration-500 hover:-translate-y-2 hover:shadow-honey">
                {/* Desktop window frame effect */}
                <div className="relative rounded-2xl overflow-hidden bg-secondary/10 aspect-square">
                  <img
                    src={screenshot.src}
                    alt={screenshot.alt}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Shimmer overlay on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 animate-shimmer" />
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
