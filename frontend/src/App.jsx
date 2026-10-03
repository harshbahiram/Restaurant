import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import AboutSection from "./sections/AboutSection";
import PopularDishes from "./sections/PopularDish";
import GallerySection from "./sections/GallerySections";
import ChefSection from "./sections/ChefSection";

function App() {
  return (
    <div className="min-h-screen bg-[#F8F4EA]">
      <Navbar />

      <main>
        <Hero />
        <AboutSection />
        <PopularDishes />
        <GallerySection />
        <ChefSection />
      </main>
    </div>
  );
}

export default App;