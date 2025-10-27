import { Star, CheckCircle } from "lucide-react";

const products = [
  {
    name: "AeroPure H13",
    tagline: "Home & office",
    highlights: ["HEPA H13", "UV‑C", "Quiet 24dB"],
    aqi: "AQI sensing",
  },
  {
    name: "AeroMax Pro",
    tagline: "Commercial",
    highlights: ["4‑stage", "Carbon XL", "Wi‑Fi"],
    aqi: "PM2.5 / VOC",
  },
  {
    name: "AeroGuard Industrial",
    tagline: "Heavy‑duty",
    highlights: ["Modular", "High CFM", "24/7"],
    aqi: "Compliance ready",
  },
];

export default function ProductGrid() {
  return (
    <section id="products" className="relative bg-slate-950 py-20">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Flagship products</h2>
          <p className="mt-3 text-slate-300">Curated lineup for different environments and budgets.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.name}
              className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6 text-white shadow-xl shadow-black/20 transition hover:-translate-y-1"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">{p.name}</h3>
                  <p className="text-sm text-slate-300">{p.tagline}</p>
                </div>
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="h-5 w-5 fill-amber-400/20" />
                  <Star className="h-5 w-5 fill-amber-400/20" />
                  <Star className="h-5 w-5 fill-amber-400/20" />
                  <Star className="h-5 w-5 fill-amber-400/20" />
                  <Star className="h-5 w-5 fill-amber-400/20" />
                </div>
              </div>

              <div className="mt-6 grid gap-2 text-sm">
                {p.highlights.map((h) => (
                  <div key={h} className="flex items-center gap-2 text-slate-300">
                    <CheckCircle className="h-4 w-4 text-cyan-400" /> {h}
                  </div>
                ))}
                <div className="mt-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-slate-200">
                  {p.aqi}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wide text-slate-400">EMI available</p>
                </div>
                <button className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20">
                  Request quote
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
