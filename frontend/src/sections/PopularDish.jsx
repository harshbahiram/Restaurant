import { ArrowRight } from "lucide-react";
import { dishes } from "../data/dishes";
import DishCard from "../components/DishCard";

export default function PopularDishes() {
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

        {/* Dishes */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish) => (
            <DishCard
              key={dish.id}
              dish={dish}
            />
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