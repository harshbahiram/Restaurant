import { testimonials } from "../data/testimonials";
import TestimonialCard from "../components/TestimonialCard";

export default function TestimonialSection() {
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

        {/* Testimonials */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>

      </div>
    </section>
  );
}