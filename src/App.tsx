const navItems = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Punjabi Chaap Specials",
    description:
      "Tandoori, malai, afghani, and masala chaap marinated in-house and grilled fresh for dine-in and takeaway.",
  },
  {
    title: "Signature Tikka Selection",
    description:
      "Smoky paneer tikka, soya tikka, and seasonal vegetarian tikkas finished on charcoal for authentic flavor.",
  },
  {
    title: "Family Combos & Group Orders",
    description:
      "High-value platter combinations for family meals, college groups, and evening gatherings in Raja Park, Jaipur.",
  },
  {
    title: "Quick Pickup & Delivery Support",
    description:
      "Fast packaging for office lunches and home dinners with direct phone and WhatsApp order assistance.",
  },
];

const reviews = [
  {
    name: "Ankit Sharma",
    text: "Best chaap in Raja Park. The tandoori chaap had proper smokiness and the service was fast even during evening rush.",
  },
  {
    name: "Ritika Jain",
    text: "Perfect place for pure veg tikka cravings. Fresh taste, clean setup, and very good portion sizes for the price.",
  },
  {
    name: "Harpreet Kaur",
    text: "I ordered for a family get-together and everything arrived hot and well packed. Everyone loved the malai chaap.",
  },
];

export default function App() {
  return (
    <div className="bg-[#111111] text-white selection:bg-amber-300 selection:text-black">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/65 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#home" className="text-lg font-semibold tracking-wide text-amber-300">
            Chaap Terminal
          </a>
          <ul className="hidden items-center gap-6 text-sm text-white/85 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a className="transition hover:text-amber-300" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="tel:+919876543210"
            className="rounded-full border border-amber-300 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-amber-300 transition hover:bg-amber-300 hover:text-black"
          >
            Call Now
          </a>
        </nav>
      </header>

      <main>
        <section
          id="home"
          className="relative flex min-h-screen items-center border-b border-white/10 pt-24"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.82), rgba(0,0,0,0.35)), url('https://images.pexels.com/photos/5835353/pexels-photo-5835353.jpeg?auto=compress&cs=tinysrgb&w=1800')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-amber-300">
              Raja Park, Jaipur
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
              Chaap Terminal - Punjabi Chaap & Tikka Crafted Fresh Every Day
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
              Premium vegetarian grills, rich Punjabi marinades, and charcoal-finished tikka made for quick cravings and family dinners in Jaipur.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:+919876543210"
                className="rounded-full bg-amber-300 px-7 py-3 text-sm font-semibold uppercase tracking-wider text-black transition hover:bg-amber-200"
              >
                Book a Table
              </a>
              <a
                href="https://wa.me/919876543210?text=Hi%20Chaap%20Terminal%2C%20I%20want%20to%20place%20an%20order."
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/80 px-7 py-3 text-sm font-semibold uppercase tracking-wider text-white transition hover:border-amber-300 hover:text-amber-300"
              >
                Order on WhatsApp
              </a>
            </div>
            <p className="mt-6 text-sm text-white/80">
              Open for dine-in, takeaway, and direct order support.
            </p>
          </div>
        </section>

        <section id="services" className="border-b border-white/10 bg-[#171717]">
          <div className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8">
            <h2 className="text-3xl font-semibold md:text-4xl">Our Services</h2>
            <p className="mt-3 max-w-2xl text-white/75">
              Built around high-demand vegetarian favorites in Jaipur, served fast without compromising flavor.
            </p>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {services.map((service) => (
                <article key={service.title} className="border-b border-white/15 pb-8">
                  <h3 className="text-xl font-medium text-amber-300">{service.title}</h3>
                  <p className="mt-3 leading-relaxed text-white/80">{service.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="border-b border-white/10 bg-[#111111]">
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-20 md:grid-cols-2 md:px-8">
            <div>
              <h2 className="text-3xl font-semibold md:text-4xl">About Chaap Terminal</h2>
              <p className="mt-5 leading-relaxed text-white/80">
                Chaap Terminal started with one clear promise: serve truly flavorful vegetarian Punjabi chaap and tikka in Raja Park without shortcuts. Every batch is marinated in-house, grilled to order, and plated for a consistent experience guests can trust.
              </p>
              <p className="mt-4 leading-relaxed text-white/80">
                From students and office professionals to family diners, our kitchen is built for quality, speed, and repeat-worthy taste. That focus has made us a preferred chaap destination in Jaipur for evening snacks and full meals.
              </p>
            </div>
            <div
              className="min-h-[320px] w-full rounded-sm border border-white/10"
              style={{
                backgroundImage:
                  "url('https://images.pexels.com/photos/4553111/pexels-photo-4553111.jpeg?auto=compress&cs=tinysrgb&w=1200')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              aria-label="Punjabi vegetarian platter"
            />
          </div>
        </section>

        <section id="testimonials" className="border-b border-white/10 bg-[#171717]">
          <div className="mx-auto w-full max-w-6xl px-5 py-20 md:px-8">
            <h2 className="text-3xl font-semibold md:text-4xl">What Guests Say</h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {reviews.map((review) => (
                <blockquote key={review.name} className="space-y-4 border-l-2 border-amber-300 pl-5">
                  <p className="leading-relaxed text-white/85">"{review.text}"</p>
                  <footer className="text-sm font-semibold uppercase tracking-wide text-amber-300">
                    {review.name}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-white/10 bg-[#111111]">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-8 px-5 py-20 md:flex-row md:items-center md:px-8">
            <div>
              <h2 className="text-3xl font-semibold md:text-4xl">Reserve Your Table or Place Your Order</h2>
              <p className="mt-3 max-w-2xl text-white/75">
                Peak evening slots fill quickly in Raja Park. Call now for faster confirmation and fresh preparation.
              </p>
            </div>
            <a
              href="tel:+919876543210"
              className="rounded-full bg-amber-300 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-black transition hover:bg-amber-200"
            >
              Book Now
            </a>
          </div>
        </section>

        <section id="contact" className="bg-[#171717]">
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-20 md:grid-cols-2 md:px-8">
            <div>
              <h2 className="text-3xl font-semibold md:text-4xl">Visit Us in Raja Park</h2>
              <p className="mt-4 text-white/80">
                Call, message on WhatsApp, or send a quick request form and our team will get back to you.
              </p>
              <div className="mt-8 space-y-3 text-white/85">
                <p>
                  <span className="font-semibold text-amber-300">Phone:</span> +91 98765 43210
                </p>
                <p>
                  <span className="font-semibold text-amber-300">WhatsApp:</span> +91 98765 43210
                </p>
                <p>
                  <span className="font-semibold text-amber-300">Address:</span> Raja Park, Jaipur, Rajasthan
                </p>
              </div>
              <form className="mt-8 space-y-4">
                <input
                  className="w-full border border-white/20 bg-transparent px-4 py-3 text-sm outline-none transition placeholder:text-white/45 focus:border-amber-300"
                  placeholder="Your Name"
                  type="text"
                />
                <input
                  className="w-full border border-white/20 bg-transparent px-4 py-3 text-sm outline-none transition placeholder:text-white/45 focus:border-amber-300"
                  placeholder="Phone Number"
                  type="tel"
                />
                <textarea
                  className="h-32 w-full border border-white/20 bg-transparent px-4 py-3 text-sm outline-none transition placeholder:text-white/45 focus:border-amber-300"
                  placeholder="Tell us what you would like to order"
                />
                <button
                  type="button"
                  className="rounded-full bg-amber-300 px-7 py-3 text-sm font-semibold uppercase tracking-wider text-black transition hover:bg-amber-200"
                >
                  Submit Request
                </button>
              </form>
            </div>

            <div>
              <h3 className="text-xl font-medium text-amber-300">Find Us</h3>
              <div className="mt-4 overflow-hidden border border-white/15">
                <iframe
                  title="Chaap Terminal Map"
                  src="https://www.google.com/maps?q=Chaap+Terminal+Punjabi+Chaap+%26+Tikka+Raja+Park+Jaipur&output=embed"
                  className="h-[420px] w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto flex w-full max-w-6xl flex-col justify-between gap-5 px-5 py-8 text-sm text-white/70 md:flex-row md:items-center md:px-8">
          <p>Chaap Terminal - Punjabi Chaap & Tikka | Vegetarian Restaurant | Raja Park, Jaipur</p>
          <div className="flex gap-5">
            <a href="#home" className="transition hover:text-amber-300">
              Home
            </a>
            <a href="#services" className="transition hover:text-amber-300">
              Services
            </a>
            <a href="#contact" className="transition hover:text-amber-300">
              Contact
            </a>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/911234567890?text=Hi%20Chaap%20Terminal%2C%20I%20want%20to%20know%20more."
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="whatsapp-float fixed bottom-5 right-5 z-[9999] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg"
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7 fill-current" aria-hidden="true">
          <path d="M19.11 17.21c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.31.2-.59.07-.28-.14-1.16-.43-2.2-1.38-.81-.72-1.35-1.61-1.51-1.89-.16-.28-.02-.43.12-.57.12-.12.28-.31.41-.46.14-.16.18-.28.27-.47.09-.18.05-.35-.02-.49-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.47.07-.71.35-.25.28-.96.94-.96 2.29 0 1.35.99 2.65 1.13 2.83.14.18 1.95 2.98 4.73 4.18.66.29 1.18.46 1.58.59.66.21 1.26.18 1.74.11.53-.08 1.65-.67 1.88-1.31.23-.64.23-1.19.16-1.31-.07-.12-.25-.18-.52-.32zM16.03 3.2c-7.05 0-12.77 5.7-12.77 12.73 0 2.24.59 4.42 1.71 6.35L3.2 28.8l6.71-1.75a12.8 12.8 0 0 0 6.12 1.56h.01c7.04 0 12.76-5.7 12.76-12.73 0-3.4-1.33-6.6-3.73-9-2.4-2.4-5.6-3.68-9.04-3.68zm0 23.26h-.01a10.6 10.6 0 0 1-5.41-1.49l-.39-.23-3.98 1.04 1.06-3.88-.25-.4a10.57 10.57 0 0 1-1.63-5.57c0-5.86 4.77-10.62 10.64-10.62 2.84 0 5.5 1.1 7.5 3.1a10.5 10.5 0 0 1 3.12 7.49c0 5.86-4.78 10.63-10.65 10.63z" />
        </svg>
      </a>
    </div>
  );
}
