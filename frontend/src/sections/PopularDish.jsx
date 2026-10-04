import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { dishes } from "../data/dishes";
import DishCard from "../components/DishCard";

export default function PopularDishes() {
  const sliderRef = useRef(null);

  const scrollCards = (direction) => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="menu"
      className="bg-[#12372A] py-24 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-10 bg-[#C6A15B]" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A15B]">
                From Our Kitchen
              </span>
            </div>

            <h2 className="font-serif text-5xl font-medium leading-none text-[#F8F4EA] sm:text-6xl lg:text-7xl">
              Popular
              <span className="ml-3 italic text-[#C6A15B]">
                Dishes
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[#F8F4EA]/60">
            A selection of favourites crafted with authentic ingredients,
            traditional techniques, and our own modern touch.
          </p>
        </div>

        {/* ================= MOBILE / TABLET ================= */}
        <div className="relative mt-12 lg:hidden">

          {/* Left Arrow */}
          <button
            onClick={() => scrollCards("left")}
            className="absolute left-1 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#C6A15B]/30 bg-[#F8F4EA]/20 text-[#12372A] shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-[#12372A] hover:text-[#F8F4EA]"
            aria-label="Previous dish"
          >
            <ArrowLeft size={18} />
          </button>

          {/* Cards */}
          <div
            ref={sliderRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-10 pb-5"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {dishes.map((dish) => (
              <div
                key={dish.id}
                className="w-[78vw] shrink-0 snap-center transition-all duration-500 active:scale-[0.97] sm:w-[55vw] md:w-[42vw]"
              >
                <DishCard dish={dish} />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scrollCards("right")}
            className="absolute right-1 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#C6A15B]/30 bg-[#F8F4EA]/20 text-[#12372A] shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-[#12372A] hover:text-[#F8F4EA]"
            aria-label="Next dish"
          >
            <ArrowRight size={18} />
          </button>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="mt-12 hidden lg:grid lg:grid-cols-3 lg:gap-6">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="transition-transform duration-500 hover:-translate-y-2 hover:rotate-[0.4deg]"
            >
              <DishCard dish={dish} />
            </div>
          ))}
        </div>

        {/* Full Menu */}
        <div className="mt-14 flex justify-center">
          <a
            href="/menu/menu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-[#C6A15B] px-7 py-3.5 text-sm font-semibold text-[#C6A15B] transition-all duration-300 hover:bg-[#C6A15B] hover:text-[#12372A]"
          >
            View Full Menu

            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

      </div>
    </section>
  );
}