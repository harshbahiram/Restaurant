import { useState } from 'react'
import { Menu, X, Leaf } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Our Chefs", href: "#chefs" },
  { name: "Contact", href: "#contact" },
];

const ZOMATO_URL = "https://www.zomato.com/";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const closeMenu = () => {setIsOpen(false)};

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#12372A]/95 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center gap-3"
          onClick={closeMenu}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C6A15B]/60">
            <Leaf
              size={18}
              strokeWidth={1.5}
              className="text-[#C6A15B] transition-transform duration-300 group-hover:rotate-12"
            />
          </div>

          <div className="leading-none">
            <span className="block font-serif text-xl font-semibold tracking-[0.18em] text-[#F8F4EA]">
              THE CLASSICAL
            </span>

            <span className="mt-1 block text-[9px] font-medium tracking-[0.45em] text-[#C6A15B]">
              RESTAURANT
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-sm font-medium tracking-wide text-[#F8F4EA]/85 transition-colors duration-300 hover:text-[#C6A15B]"
            >
              {link.name}

              <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#C6A15B] transition-all duration-300 hover:w-full" />
            </a>
          ))}

          <a
            href={ZOMATO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#C6A15B] bg-[#C6A15B] px-6 py-2.5 text-sm font-semibold text-[#12372A] transition-all duration-300 hover:bg-transparent hover:text-[#C6A15B]"
          >
            Order Online
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C6A15B]/50 text-[#F8F4EA] lg:hidden"
        >
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden border-t border-[#C6A15B]/10 bg-[#0B241B] transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="border-b border-[#F8F4EA]/10 py-4 text-sm font-medium tracking-wide text-[#F8F4EA]/90 transition-colors hover:text-[#C6A15B]"
            >
              {link.name}
            </a>
          ))}

          <a
            href={ZOMATO_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="mt-5 rounded-full bg-[#C6A15B] px-6 py-3 text-center text-sm font-semibold text-[#12372A]"
          >
            Order Online
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar