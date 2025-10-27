import { ShieldCheck, Wind, Leaf, Gauge, SlidersHorizontal } from "lucide-react";

export default function Features() {
  const items = [
    {
      icon: Wind,
      title: "Pure airflow",
      desc: "HEPA H13 + activated carbon to capture 99.97% of particles down to 0.3µm.",
    },
    {
      icon: ShieldCheck,
      title: "Reliability",
      desc: "Industrial‑grade components with long‑life brushless motors.",
    },
    {
      icon: Gauge,
      title: "Live AQI",
      desc: "PM2.5, VOC and humidity sensing with adaptive auto mode.",
    },
    {
      icon: Leaf,
      title: "Eco‑efficient",
      desc: "Quiet performance at low power draw for 24/7 operation.",
    },
    {
      icon: SlidersHorizontal,
      title: "Smart control",
      desc: "App connectivity, scenes and schedules for total comfort.",
    },
  ];

  const logos = [
    "Healthcare",
    "Hospitality",
    "Manufacturing",
    "Education",
    "Corporate",
  ];

  return (
    <section id="features" className="relative bg-white py-20">
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-sky-50/60 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">Engineered for performance</h2>
          <p className="mt-3 text-slate-600">
            Designed to deliver high air exchange rates, ultra‑low noise and refined aesthetics.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((f, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm ring-1 ring-black/0 transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-cyan-500 text-white">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="text-base font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Logos strip */}
        <div className="mt-14 rounded-2xl border border-slate-200 bg-gradient-to-r from-sky-50 to-emerald-50 p-6">
          <p className="text-center text-xs font-medium uppercase tracking-wider text-slate-600">
            Trusted across sectors
          </p>
          <div className="mt-4 grid grid-cols-2 items-center justify-items-center gap-6 sm:grid-cols-3 md:grid-cols-5">
            {logos.map((name) => (
              <div key={name} className="text-sm font-medium text-slate-700 opacity-80">
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
