import { ArrowDown, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const ZOMATO_URL = "https://www.zomato.com/";

export default function Hero() {
  const [showSlogan, setShowSlogan] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showRestaurantName, setShowRestaurantName] = useState(true);

  useEffect(() => {
    // Show description and buttons after the initial intro
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 1800);

    // Start changing between restaurant name and slogan
    const sloganTimer = setTimeout(() => {
      setShowSlogan(true);
      setShowRestaurantName(false);
    }, 2500);

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(sloganTimer);
    };
  }, []);

  useEffect(() => {
    if (!showSlogan) return;

    const interval = setInterval(() => {
      setShowRestaurantName((prev) => !prev);
    }, 4000);

    return () => clearInterval(interval);
  }, [showSlogan]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0B241B]"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=2000&q=85')",
        }}
      />

      {/* Dark Green Overlay */}
      <div className="absolute inset-0 bg-[#0B241B]/15" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B241B] via-[#0B241B]/80 to-[#0B241B]/30" />

      {/* Decorative Glow */}
      <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-[#C6A15B]/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-36 sm:px-8 sm:pt-40 lg:px-10 lg:pt-44">
        <div className="max-w-3xl">

          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px w-12 bg-[#C6A15B]" />

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#C6A15B]">
              Authentic Indian Cuisine
            </span>
          </div>

          {/* Animated Heading */}
          <div className="relative min-h-[150px] sm:min-h-[170px] lg:min-h-[190px]">

            {/* Restaurant Name */}
            <div
              className={`absolute inset-0 transition-all duration-1000 ${
                showRestaurantName
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-5 opacity-0"
              }`}
            >
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#C6A15B]">
                Welcome to
              </p>

              <h1 className="font-serif text-6xl font-semibold leading-[0.9] text-[#F8F4EA] sm:text-7xl lg:text-8xl">
                The Classical
                <span className="block italic text-[#C6A15B]">
                  Restaurant
                </span>
              </h1>
            </div>

            {/* Slogan */}
            <div
              className={`absolute inset-0 transition-all duration-1000 ${
                !showRestaurantName
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#C6A15B]">
                Our Philosophy
              </p>

              <h1 className="font-serif text-6xl font-semibold leading-[0.95] text-[#F8F4EA] sm:text-7xl lg:text-8xl">
                A Taste of
                <span className="block italic text-[#C6A15B]">
                  Tradition
                </span>
              </h1>
            </div>

          </div>

          {/* Description */}
          <p
            className={`mt-12 max-w-xl text-base leading-7 text-[#F8F4EA]/75 transition-all duration-1000 sm:text-lg ${
              showContent
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            Discover timeless Indian flavours, thoughtfully prepared with
            authentic ingredients, cherished recipes, and a modern touch.
          </p>

          {/* Buttons */}
          <div
            className={`mt-10 flex flex-col gap-4 transition-all duration-1000 sm:flex-row ${
              showContent
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }`}
          >
            <a
              href="#menu"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#C6A15B] px-7 py-3.5 text-sm font-semibold text-[#0B241B] transition-all duration-300 hover:bg-[#D8BA78]"
            >
              Explore Menu

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href={ZOMATO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-[#F8F4EA]/40 px-7 py-3.5 text-sm font-semibold text-[#F8F4EA] transition-all duration-300 hover:border-[#C6A15B] hover:text-[#C6A15B]"
            >
              Order Online
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[#F8F4EA]/50 transition-colors hover:text-[#C6A15B] md:flex"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">
            Discover
          </span>

          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}