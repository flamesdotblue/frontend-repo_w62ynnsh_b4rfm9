import { Phone, Mail, MapPin, Wind } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-slate-950 py-16">
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-3">
          <div className="col-span-1 flex items-start gap-3 text-white">
            <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600">
              <Wind className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Dhiya Air Power Enterprises</h3>
              <p className="mt-1 text-sm text-slate-300">
                Premium air purification and clean‑air systems for residential, commercial, and industrial needs.
              </p>
            </div>
          </div>

          <div className="space-y-3 text-sm text-slate-300">
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-cyan-400" /> +91 00000 00000
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-cyan-400" /> hello@dhiyaairpower.com
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 text-cyan-400" />
              <span>
                1st Floor, Business Park,
                <br /> Technocity, India
              </span>
            </div>
          </div>

          <form className="space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <p className="text-sm font-medium text-white">Request a consultation</p>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Full name"
                className="rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>
            <input
              type="text"
              placeholder="Phone"
              className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <textarea
              rows={3}
              placeholder="Tell us about your space and needs"
              className="w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button type="button" className="w-full rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 transition hover:brightness-110">
              Send request
            </button>
            <p className="text-xs text-slate-400">By sending, you agree to be contacted about our products and services.</p>
          </form>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} Dhiya Air Power Enterprises. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
