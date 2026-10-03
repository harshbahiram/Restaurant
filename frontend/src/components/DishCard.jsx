import { ArrowUpRight } from "lucide-react";

export default function DishCard({ dish }) {
  return (
    <article className="group overflow-hidden rounded-sm bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">

      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={dish.image}
          alt={dish.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B241B]/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Category */}
        <span className="absolute left-4 top-4 rounded-full bg-[#F8F4EA]/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#12372A]">
          {dish.category}
        </span>

        {/* Vegetarian indicator */}
        {dish.vegetarian && (
          <span className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full border border-green-700 bg-white">
            <span className="h-2.5 w-2.5 rounded-full bg-green-700" />
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-2xl font-semibold text-[#12372A]">
            {dish.name}
          </h3>

          <span className="shrink-0 text-base font-semibold text-[#9A783B]">
            {dish.price}
          </span>
        </div>

        <p className="mt-3 text-sm leading-6 text-[#68736C]">
          {dish.description}
        </p>

        <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#12372A]">
          Discover dish

          <ArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </div>
      </div>
    </article>
  );
}