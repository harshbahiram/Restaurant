import {
  Clock3,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";

const ZOMATO_URL = "https://www.zomato.com/";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    text: "123 MG Road, Pune, Maharashtra",
  },
  {
    icon: Phone,
    title: "Call Us",
    text: "+91 98765 43210",
  },
  {
    icon: Mail,
    title: "Email Us",
    text: "hello@theclassicalrestaurant.com",
  },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-[#12372A] py-24 sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mb-14">
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px w-10 bg-[#C6A15B]" />

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C6A15B]">
              Come Visit Us
            </span>
          </div>

          <h2 className="max-w-3xl font-serif text-5xl font-medium leading-none text-[#F8F4EA] sm:text-6xl lg:text-7xl">
            We'd love to welcome you
            <span className="block italic text-[#C6A15B]">
              to our table.
            </span>
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Left */}
          <div>

            {/* Contact Details */}
            <div className="space-y-5">
              {contactInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-center gap-5 border-b border-[#F8F4EA]/10 pb-5"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#C6A15B]/40">
                      <Icon
                        size={19}
                        strokeWidth={1.5}
                        className="text-[#C6A15B]"
                      />
                    </div>

                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C6A15B]">
                        {item.title}
                      </p>

                      <p className="mt-1 text-sm text-[#F8F4EA]/75">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Opening Hours */}
            <div className="mt-10 rounded-sm border border-[#F8F4EA]/10 bg-[#0B241B]/40 p-7">
              <div className="flex items-center gap-3">
                <Clock3
                  size={20}
                  className="text-[#C6A15B]"
                />

                <h3 className="font-serif text-2xl text-[#F8F4EA]">
                  Opening Hours
                </h3>
              </div>

              <div className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between gap-4 text-[#F8F4EA]/70">
                  <span>Monday – Friday</span>
                  <span>11:00 AM – 11:00 PM</span>
                </div>

                <div className="flex justify-between gap-4 text-[#F8F4EA]/70">
                  <span>Saturday – Sunday</span>
                  <span>11:00 AM – 12:00 AM</span>
                </div>
              </div>
            </div>

            {/* Order CTA */}
            <a
              href={ZOMATO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#C6A15B] px-7 py-3.5 text-sm font-semibold text-[#12372A] transition-all duration-300 hover:bg-[#D8BA78]"
            >
              Order Online on Zomato

              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Right — Contact Form */}
          <div className="rounded-sm bg-[#F8F4EA] p-7 sm:p-9">

            <div className="mb-7">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9A783B]">
                Get In Touch
              </p>

              <h3 className="mt-2 font-serif text-3xl text-[#12372A]">
                Send us a message
              </h3>
            </div>

            <form className="space-y-5">

              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#68736C]"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full border-b border-[#12372A]/20 bg-transparent px-0 py-3 text-sm text-[#12372A] outline-none transition-colors placeholder:text-[#68736C]/60 focus:border-[#C6A15B]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#68736C]"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="w-full border-b border-[#12372A]/20 bg-transparent px-0 py-3 text-sm text-[#12372A] outline-none transition-colors placeholder:text-[#68736C]/60 focus:border-[#C6A15B]"
                  />
                </div>

              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#68736C]"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  placeholder="How can we help?"
                  className="w-full border-b border-[#12372A]/20 bg-transparent px-0 py-3 text-sm text-[#12372A] outline-none transition-colors placeholder:text-[#68736C]/60 focus:border-[#C6A15B]"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-[#68736C]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full resize-none border-b border-[#12372A]/20 bg-transparent px-0 py-3 text-sm text-[#12372A] outline-none transition-colors placeholder:text-[#68736C]/60 focus:border-[#C6A15B]"
                />
              </div>

              <button
                type="submit"
                className="group mt-2 inline-flex items-center gap-3 rounded-full bg-[#12372A] px-7 py-3.5 text-sm font-semibold text-[#F8F4EA] transition-all duration-300 hover:bg-[#0B241B]"
              >
                Send Message

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}