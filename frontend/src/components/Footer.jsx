import {
  ArrowUp,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

const ZOMATO_URL = "https://www.zomato.com/";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Our Chefs", href: "#chefs" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B241B] text-[#F8F4EA]">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">

            <a
              href="#home"
              className="inline-block"
            >
              <span className="block font-serif text-3xl font-semibold tracking-[0.12em]">
                THE CLASSICAL
              </span>

              <span className="mt-1 block text-[10px] font-medium tracking-[0.45em] text-[#C6A15B]">
                RESTAURANT
              </span>
            </a>

            <p className="mt-6 max-w-md text-sm leading-7 text-[#F8F4EA]/55">
              A celebration of authentic Indian flavours, thoughtful
              hospitality, and memorable moments shared around the table.
            </p>

            {/* Social */}
            <div className="mt-7 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F8F4EA]/15 transition-colors hover:border-[#C6A15B] hover:text-[#C6A15B]"
              >
                <FaInstagram size={17} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#F8F4EA]/15 transition-colors hover:border-[#C6A15B] hover:text-[#C6A15B]"
              >
                <FaFacebookF size={17} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C6A15B]">
              Explore
            </h3>

            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-[#F8F4EA]/60 transition-colors hover:text-[#C6A15B]"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C6A15B]">
              Contact
            </h3>

            <div className="mt-6 space-y-4">

              <div className="flex gap-3">
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-[#C6A15B]"
                />

                <p className="text-sm leading-6 text-[#F8F4EA]/60">
                  123 MG Road,
                  <br />
                  Pune, Maharashtra
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={17}
                  className="shrink-0 text-[#C6A15B]"
                />

                <a
                  href="tel:+919876543210"
                  className="text-sm text-[#F8F4EA]/60 transition-colors hover:text-[#C6A15B]"
                >
                  +91 98765 43210
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={17}
                  className="shrink-0 text-[#C6A15B]"
                />

                <a
                  href="mailto:hello@theclassicalrestaurant.com"
                  className="break-all text-sm text-[#F8F4EA]/60 transition-colors hover:text-[#C6A15B]"
                >
                  hello@theclassicalrestaurant.com
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Zomato CTA */}
        <div className="mt-14 flex flex-col justify-between gap-5 border-t border-[#F8F4EA]/10 pt-8 sm:flex-row sm:items-center">

          <div>
            <p className="font-serif text-2xl text-[#F8F4EA]">
              Craving something delicious?
            </p>

            <p className="mt-1 text-sm text-[#F8F4EA]/45">
              Order your favourites online.
            </p>
          </div>

          <a
            href={ZOMATO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#C6A15B] px-6 py-3 text-sm font-semibold text-[#12372A] transition-colors hover:bg-[#D8BA78]"
          >
            Order on Zomato
          </a>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#F8F4EA]/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-[#F8F4EA]/40 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">

          <p>
            © {new Date().getFullYear()} The Classical Restaurant. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#"
              className="transition-colors hover:text-[#C6A15B]"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition-colors hover:text-[#C6A15B]"
            >
              Terms
            </a>

            <a
              href="#home"
              aria-label="Back to top"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#F8F4EA]/15 transition-colors hover:border-[#C6A15B] hover:text-[#C6A15B]"
            >
              <ArrowUp size={14} />
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
}