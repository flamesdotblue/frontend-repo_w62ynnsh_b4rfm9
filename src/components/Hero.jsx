import { motion } from "framer-motion";
import { Wind, Shield, Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Ambient gradient glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-10 h-[28rem] w-[28rem] rounded-full bg-blue-600/20 blur-3xl" />
      </div>

      {/* Navigation */}
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/20">
            <Wind className="h-6 w-6" />
          </div>
          <div className="leading-tight">
            <p className="text-sm text-cyan-300">Dhiya Air</p>
            <p className="text-base font-semibold tracking-tight">Power Enterprises</p>
          </div>
        </div>
        <div className="hidden gap-6 text-sm text-slate-300 md:flex">
          <a href="#features" className="hover:text-white">Solutions</a>
          <a href="#products" className="hover:text-white">Products</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
        <a href="#contact" className="group hidden items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20 md:flex">
          Get a quote
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </a>
      </div>

      {/* Hero content */}
      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-10 md:pt-16 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 backdrop-blur">
            <Sparkles className="h-4 w-4 text-cyan-300" /> Premium Air Quality Solutions
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Breathe better with precision-engineered air purification
          </h1>
          <p className="mt-5 max-w-2xl text-slate-300">
            Dhiya Air Power Enterprises delivers high‑performance air purifiers and integrated clean‑air systems for homes, offices, and industrial spaces. Quiet, efficient, and built to last.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 transition hover:brightness-110"
            >
              Explore products
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
            >
              Speak to an expert <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-cyan-300" /> 5‑stage filtration
            </div>
            <div className="flex items-center gap-2">
              <Wind className="h-4 w-4 text-cyan-300" /> Whisper‑quiet motors
            </div>
          </div>
        </motion.div>

        {/* Decorative card grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:absolute lg:right-6 lg:top-1/2 lg:w-[40%] lg:-translate-y-1/2 lg:grid-cols-1"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <p className="text-sm text-slate-300">
              Advanced HEPA H13 + activated carbon + UV‑C sterilization. Real‑time AQI monitoring with smart home integration.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 p-5">
            <p className="text-sm text-slate-200">
              Trusted by healthcare, hospitality, and manufacturing to keep environments safe and compliant.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
