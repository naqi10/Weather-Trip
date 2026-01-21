import Hero from "./components/Hero";
import NewsSection from "./components/NewsSection";
import NewsHero from "./components/NewsHero";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <Hero />
      <NewsHero />
      <NewsSection />
      <AboutSection />
      <Footer />
    </>
  );
}
