import { Phone, Mail, MapPin, Wind, Quote } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-white py-20">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-emerald-50/60 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Testimonials */}
        <section className="mx-auto grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              quote:
                "Air felt noticeably fresher within minutes. Guests compliment the calm and quiet performance.",
              name: "General Manager, Boutique Hotel",
            },
            {
              quote:
                "Sensor‑driven automation keeps our clinic at safe levels all day without manual input.",
              name: "Chief Administrator, Health Clinic",
            },
            {
              quote:
                "Aesthetic, robust, and efficient. It just blends in while doing the heavy lifting.",
              name: "Facilities Lead, Tech Campus",
            },
          ].map((t, i) => (
            <figure
              key={i}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <Quote className="h-5 w-5 text-sky-500" />
              <blockquote className="mt-3 text-sm text-slate-700">{t.quote}</blockquote>
              <figcaption className="mt-3 text-xs font-medium text-slate-600">{t.name}</figcaption>
            </figure>
          ))}
        </section>

        {/* Contact */}
        <div className="mt-12 grid grid-cols-1 items-start gap-10 md:grid-cols-3">
          <div className="col-span-1 flex items-start gap-3 text-slate-900">
            <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-cyan-500 text-white">
              <Wind className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Dhiya Air Power Enterprises</h3>
              <p className="mt-1 text-sm text-slate-600">
                Premium air purification and clean‑air systems for residential, commercial, and industrial needs.
              </p>

              <div className="mt-4 space-y-3 text-sm text-slate-700">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-sky-500" /> +91 00000 00000
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-sky-500" /> hello@dhiyaairpower.com
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-sky-500" />
                  <span>
                    1st Floor, Business Park,
                    <br /> Technocity, India
                  </span>
                </div>
              </div>
            </div>
          </div>

          <form className="col-span-2 space-y-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-sm font-medium text-slate-900">Request a consultation</p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Full name"
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>
            <input
              type="text"
              placeholder="Phone"
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            <textarea
              rows={3}
              placeholder="Tell us about your space and needs"
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            <button type="button" className="w-full rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800">
              Send request
            </button>
            <p className="text-xs text-slate-500">By sending, you agree to be contacted about our products and services.</p>
          </form>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Dhiya Air Power Enterprises. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
