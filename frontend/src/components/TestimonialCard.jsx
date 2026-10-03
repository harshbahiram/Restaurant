import { Star } from "lucide-react";

export default function TestimonialCard({ testimonial }) {

  return (
    <article className="group rounded-sm border border-[#12372A]/10 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">

      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <Star
            key={index}
            size={15}
            fill="currentColor"
            className="text-[#C6A15B]"
          />
        ))}
      </div>

      {/* Quote */}
      <div className="mt-6">
        <span className="font-serif text-5xl leading-none text-[#C6A15B]/40">
          "
        </span>

        <p className="-mt-2 text-sm leading-7 text-[#68736C]">
          {testimonial.review}
        </p>
      </div>

      {/* Customer */}
      <div className="mt-7 flex items-center gap-3 border-t border-[#12372A]/10 pt-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#12372A] font-serif text-lg text-[#C6A15B]">
          {testimonial.name.charAt(0)}
        </div>

        <div>
          <h3 className="text-sm font-semibold text-[#12372A]">
            {testimonial.name}
          </h3>

          <p className="mt-0.5 text-xs text-[#68736C]">
            {testimonial.location}
          </p>
        </div>
      </div>

    </article>
  );
}