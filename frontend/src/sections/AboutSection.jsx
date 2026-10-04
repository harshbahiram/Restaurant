import { Check, Sparkles } from "lucide-react";
import about from "../assets/images/about.avif";

const features = [
  "Authentic recipes and traditional flavours",
  "Freshly selected ingredients",
  "Warm hospitality and memorable dining",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#F8F4EA] py-24 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

          {/* Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-sm">
              <img
                src={about}
                alt="Indian cuisine"
                className="h-[500px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[600px]"
              />
            </div>

            {/* Decorative badge */}
            <div className="absolute -bottom-8 -right-3 flex h-32 w-32 flex-col items-center justify-center rounded-full border-8 border-[#F8F4EA] bg-[#12372A] text-center shadow-xl sm:-right-8">
              <Sparkles
                size={17}
                className="mb-2 text-[#C6A15B]"
              />

              <span className="font-serif text-xl italic text-[#F8F4EA]">
                Crafted
              </span>

              <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#C6A15B]">
                With Care
              </span>
            </div>

            {/* Decorative corner */}
            <div className="absolute -bottom-5 -left-5 -z-0 h-32 w-32 border-b border-l border-[#C6A15B]" />
          </div>

          {/* Content */}
          <div className="relative z-10">

            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-10 bg-[#C6A15B]" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9A783B]">
                Our Story
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-5xl font-medium leading-[1] text-[#12372A] sm:text-6xl lg:text-7xl">
              Where tradition
              <span className="block italic text-[#9A783B]">
                meets the table.
              </span>
            </h2>

            {/* Description */}
            <div className="mt-8 space-y-5 text-[15px] leading-7 text-[#68736C]">
              <p>
                At The Classical Restaurant, every dish is created to bring
                people together around the table.
              </p>

              <p>
                We celebrate the richness of Indian cuisine through
                traditional flavours, carefully selected ingredients, and a
                contemporary dining experience.
              </p>
            </div>

            {/* Features */}
            <div className="mt-8 space-y-4">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#12372A]">
                    <Check
                      size={14}
                      strokeWidth={2.5}
                      className="text-[#C6A15B]"
                    />
                  </div>

                  <span className="text-sm font-medium text-[#17231D]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Signature */}
            <div className="mt-10 border-t border-[#12372A]/10 pt-7">
              <p className="font-serif text-2xl italic text-[#12372A]">
                "Every dish tells a story."
              </p>

              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#9A783B]">
                The Classical Restaurant
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}