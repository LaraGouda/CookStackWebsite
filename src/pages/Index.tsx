import HeroSection from "@/components/HeroSection";
import DescriptionSection from "@/components/DescriptionSection";
import ScreenshotsSection from "@/components/ScreenshotsSection";
import VideoSection from "@/components/VideoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-warm">
      <HeroSection />
      <DescriptionSection />
      <ScreenshotsSection />
      <VideoSection />
      <Footer />
    </div>
  );
};

export default Index;
