import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { FaInstagram } from "react-icons/fa";
import { chefs } from "../data/chefs";

export default function ChefSection() {
  const sliderRef = useRef(null);

  const scrollChefs = (direction) => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -340 : 340,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="chefs"
      className="bg-[#12372A] py-24 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-10 bg-[#C6A15B]" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A15B]">
                The People Behind The Plate
              </span>
            </div>

            <h2 className="font-serif text-5xl font-medium leading-none text-[#F8F4EA] sm:text-6xl lg:text-7xl">
              Meet our
              <span className="ml-3 italic text-[#C6A15B]">
                chefs
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[#F8F4EA]/60">
            Passionate culinary minds bringing together traditional recipes,
            fresh ingredients, and thoughtful presentation.
          </p>
        </div>

        {/* ================= MOBILE / TABLET ================= */}
        <div className="relative mt-14 lg:hidden">

          {/* Left Arrow */}
          <button
            onClick={() => scrollChefs("left")}
            className="absolute left-1 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#C6A15B]/30 bg-[#F8F4EA]/20 text-[#12372A] shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-[#12372A] hover:text-[#F8F4EA]"
            aria-label="Previous chef"
          >
            <ArrowLeft size={18} />
          </button>

          {/* Chef Cards */}
          <div
            ref={sliderRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-10 pb-5"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {chefs.map((chef) => (
              <div
                key={chef.id}
                className="w-[82vw] shrink-0 snap-center transition-all duration-500 active:scale-[0.97] sm:w-[60vw] md:w-[48vw]"
              >
                <ChefCard chef={chef} />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scrollChefs("right")}
            className="absolute right-1 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#C6A15B]/30 bg-[#F8F4EA]/20 text-[#12372A] shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-[#12372A] hover:text-[#F8F4EA]"
            aria-label="Next chef"
          >
            <ArrowRight size={18} />
          </button>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="mt-14 hidden lg:grid lg:grid-cols-3 lg:gap-6">
          {chefs.map((chef) => (
            <ChefCard key={chef.id} chef={chef} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ChefCard({ chef }) {
  return (
    <article className="group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:rotate-[0.4deg]">
      {/* Image */}
      <div className="relative h-[440px] overflow-hidden">
        <img
          src={chef.image}
          alt={chef.name}
          className="h-full w-full object-cover grayscale-[20%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B241B] via-transparent to-transparent" />

        {/* Social */}
        <a
          href="#"
          aria-label={`${chef.name} Instagram`}
          className="absolute right-5 top-5 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-[#F8F4EA]/90 text-[#12372A] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-[#C6A15B]"
        >
          <FaInstagram size={17} />
        </a>

        {/* Chef Info */}
        <div className="absolute bottom-0 left-0 w-full p-6">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C6A15B]">
                {chef.role}
              </p>

              <h3 className="mt-1 font-serif text-3xl text-[#F8F4EA]">
                {chef.name}
              </h3>
            </div>

            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#F8F4EA]/30 text-[#F8F4EA] transition-colors duration-300 group-hover:border-[#C6A15B] group-hover:text-[#C6A15B]">
              <ArrowUpRight size={16} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}