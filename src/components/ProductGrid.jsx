import { CheckCircle } from "lucide-react";

const products = [
  {
    name: "AeroPure H13",
    tagline: "Home & office",
    highlights: ["HEPA H13", "UV‑C", "Quiet 24dB"],
    color: "from-sky-100 to-white",
  },
  {
    name: "AeroMax Pro",
    tagline: "Commercial",
    highlights: ["4‑stage", "Carbon XL", "Wi‑Fi"],
    color: "from-emerald-100 to-white",
  },
  {
    name: "AeroGuard Industrial",
    tagline: "Heavy‑duty",
    highlights: ["Modular", "High CFM", "24/7"],
    color: "from-violet-100 to-white",
  },
];

export default function ProductGrid() {
  return (
    <section id="products" className="relative bg-slate-50 py-20">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Flagship products</h2>
          <p className="mt-3 text-slate-600">Curated lineup for different environments and budgets.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {products.map((p) => (
            <article
              key={p.name}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className={`h-40 w-full bg-gradient-to-br ${p.color}`}>
                {/* abstract illustration */}
                <div className="h-full w-full bg-[radial-gradient(circle_at_30%_20%,rgba(2,132,199,0.15),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(16,185,129,0.12),transparent_45%)]" />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-slate-900">{p.name}</h3>
                    <p className="text-sm text-slate-600">{p.tagline}</p>
                  </div>
                </div>

                <div className="mt-5 grid gap-2 text-sm">
                  {p.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-slate-700">
                      <CheckCircle className="h-4 w-4 text-sky-500" /> {h}
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-slate-500">EMI available</p>
                  </div>
                  <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800">
                    Request quote
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
