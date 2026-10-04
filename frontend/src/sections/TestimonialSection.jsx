import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { testimonials } from "../data/testimonials";
import TestimonialCard from "../components/TestimonialCard";

export default function TestimonialSection() {
  const sliderRef = useRef(null);

  const scrollTestimonials = (direction) => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -340 : 340,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="testimonials"
      className="bg-[#F8F4EA] py-24 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-[#C6A15B]" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9A783B]">
              Guest Experiences
            </span>

            <span className="h-px w-10 bg-[#C6A15B]" />
          </div>

          <h2 className="font-serif text-5xl font-medium leading-none text-[#12372A] sm:text-6xl lg:text-7xl">
            Loved around
            <span className="ml-3 italic text-[#9A783B]">
              the table
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-[#68736C]">
            Good food brings people together. Here's what some of our guests
            have shared about their experience.
          </p>
        </div>

        {/* ================= MOBILE / TABLET ================= */}
        <div className="relative mt-14 lg:hidden">

          {/* Left Arrow */}
          <button
            onClick={() => scrollTestimonials("left")}
            className="absolute left-1 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#C6A15B]/30 bg-[#F8F4EA]/20 text-[#12372A]/40 shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-[#C6A15B]/60 hover:bg-[#F8F4EA]/80 hover:text-[#12372A]"
            aria-label="Previous testimonial"
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
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="w-[82vw] shrink-0 snap-center transition-all duration-500 active:scale-[0.97] sm:w-[60vw] md:w-[48vw]"
              >
                <div className="transition-transform duration-500 hover:-translate-y-2 hover:rotate-[0.4deg]">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scrollTestimonials("right")}
            className="absolute right-1 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#C6A15B]/30 bg-[#F8F4EA]/20 text-[#12372A]/40 shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-[#C6A15B]/60 hover:bg-[#F8F4EA]/80 hover:text-[#12372A]"
            aria-label="Next testimonial"
          >
            <ArrowRight size={18} />
          </button>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="mt-14 hidden lg:grid lg:grid-cols-3 lg:gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="transition-transform duration-500 hover:-translate-y-2 hover:rotate-[0.4deg]"
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}