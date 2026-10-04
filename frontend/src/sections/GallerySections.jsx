import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const galleryImages = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
    title: "Our Dining Space",
    size: "large",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&w=900&q=85",
    title: "A Table Set",
    size: "small",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=85",
    title: "Evening Dining",
    size: "small",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=1200&q=85",
    title: "Fresh From The Kitchen",
    size: "wide",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=85",
    title: "Indian Flavours",
    size: "small",
  },
];

export default function GallerySection() {
  const sliderRef = useRef(null);

  const scrollGallery = (direction) => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -340 : 340,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="gallery"
      className="bg-[#F8F4EA] py-24 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <span className="h-px w-10 bg-[#C6A15B]" />

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#9A783B]">
                The Experience
              </span>
            </div>

            <h2 className="font-serif text-5xl font-medium leading-none text-[#12372A] sm:text-6xl lg:text-7xl">
              A glimpse into
              <span className="ml-3 italic text-[#9A783B]">
                our world
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[#68736C]">
            From our kitchen to your table, every detail is designed to make
            your dining experience memorable.
          </p>
        </div>

        {/* ================= MOBILE / TABLET ================= */}
        <div className="relative lg:hidden">

          {/* Left Arrow */}
          <button
            onClick={() => scrollGallery("left")}
            className="absolute left-1 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#C6A15B]/30 bg-[#F8F4EA]/20 text-[#12372A] shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-[#12372A] hover:text-[#F8F4EA]"
            aria-label="Previous gallery image"
          >
            <ArrowLeft size={18} />
          </button>

          {/* Gallery Cards */}
          <div
            ref={sliderRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-10 pb-5"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="w-[82vw] shrink-0 snap-center transition-all duration-500 active:scale-[0.97] sm:w-[60vw] md:w-[48vw]"
              >
                <GalleryItem image={image} />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scrollGallery("right")}
            className="absolute right-1 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#C6A15B]/30 bg-[#F8F4EA]/20 text-[#12372A] shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-[#12372A] hover:text-[#F8F4EA]"
            aria-label="Next gallery image"
          >
            <ArrowRight size={18} />
          </button>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden grid-cols-1 gap-5 md:grid md:grid-cols-12">
          {/* Large Image */}
          <GalleryItem
            image={galleryImages[0]}
            className="md:col-span-7 md:row-span-2"
          />

          {/* Small Images */}
          <GalleryItem
            image={galleryImages[1]}
            className="md:col-span-5"
          />

          <GalleryItem
            image={galleryImages[2]}
            className="md:col-span-5"
          />

          {/* Wide Image */}
          <GalleryItem
            image={galleryImages[3]}
            className="md:col-span-7"
          />

          <GalleryItem
            image={galleryImages[4]}
            className="md:col-span-5"
          />
        </div>

      </div>
    </section>
  );
}

function GalleryItem({ image, className = "" }) {
  return (
    <div
      className={`group relative min-h-[280px] overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:rotate-[0.4deg] active:scale-[0.98] ${className}`}
    >
      <img
        src={image.image}
        alt={image.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B241B]/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 flex w-full items-end justify-between p-6 opacity-0 transition-all duration-500 group-hover:opacity-100">
        <span className="font-serif text-2xl text-[#F8F4EA]">
          {image.title}
        </span>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C6A15B] text-[#12372A]">
          <ArrowUpRight size={18} />
        </div>
      </div>
    </div>
  );
}