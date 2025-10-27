import { ShieldCheck, Wind, Leaf, Gauge } from "lucide-react";

export default function Features() {
  const items = [
    {
      icon: Wind,
      title: "Pure airflow",
      desc: "Medical‑grade HEPA filtration captures 99.97% of particles down to 0.3µm for truly clean air.",
    },
    {
      icon: ShieldCheck,
      title: "Built for reliability",
      desc: "Industrial‑grade fans and sensors deliver consistent performance with low maintenance.",
    },
    {
      icon: Gauge,
      title: "Smart control",
      desc: "Real‑time AQI, auto mode, and app connectivity to optimize comfort and efficiency.",
    },
    {
      icon: Leaf,
      title: "Energy efficient",
      desc: "Quiet operation with eco‑modes that minimize power consumption without compromise.",
    },
  ];

  return (
    <section id="features" className="relative bg-slate-950 py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Engineered for performance</h2>
          <p className="mt-3 text-slate-300">
            Every system is designed to deliver high air exchange rates, low noise, and long‑term durability.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((f, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-white shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
