import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import AboutSection from "./sections/AboutSection";

function App() {
  return (
    <div className="min-h-screen bg-[#F8F4EA]">
      <Navbar />

      <main>
        <Hero />
        <AboutSection />
      </main>
    </div>
  );
}

export default App;