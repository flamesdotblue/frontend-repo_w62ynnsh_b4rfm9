import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import { Wind, ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-white to-slate-50 text-slate-900">
      {/* Spline background cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Gentle overlays to improve contrast over Spline */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-white/40" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/80 to-transparent" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-slate-50/90 to-transparent" />

      {/* Navigation */}
      <div className="relative mx-auto max-w-7xl px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-cyan-500 text-white shadow-lg shadow-sky-200/70">
              <Wind className="h-6 w-6" />
            </div>
            <div className="leading-tight">
              <p className="text-xs text-sky-600">Dhiya Air</p>
              <p className="text-base font-semibold tracking-tight">Power Enterprises</p>
            </div>
          </div>
          <div className="hidden items-center gap-6 text-sm text-slate-700 md:flex">
            <a href="#features" className="hover:text-slate-900">Solutions</a>
            <a href="#products" className="hover:text-slate-900">Products</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </div>
          <a href="#contact" className="group hidden items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 md:flex">
            Get a quote
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-4 md:pt-10 lg:pt-14">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-xs text-slate-700 backdrop-blur">
            <Sparkles className="h-4 w-4 text-sky-500" /> Premium Air Quality Solutions
          </span>
          <h1 className="mt-6 font-semibold leading-[1.08] tracking-tight text-slate-900" style={{fontSize: "clamp(2rem, 6vw, 3.75rem)"}}>
            Elegantly engineered air purification for homes, offices, and industry
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-700">
            We design quiet, efficient, and beautifully crafted systems that elevate wellbeing while seamlessly blending into modern spaces.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-400 via-cyan-400 to-emerald-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200/60 transition hover:brightness-110"
            >
              Explore products
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-6 py-3 text-sm font-medium text-slate-900 backdrop-blur transition hover:bg-white"
            >
              Why Dhiya Air <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" /> Medical‑grade HEPA H13
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-sky-500" /> Ultra‑quiet 24dB motors
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-violet-500" /> Smart AQI automation
            </div>
          </div>
        </motion.div>

        {/* Accent cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:absolute lg:right-6 lg:top-1/2 lg:w-[40%] lg:-translate-y-1/2 lg:grid-cols-1"
        >
          <div className="rounded-2xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur">
            <p className="text-sm text-slate-700">
              Real‑time air insights with PM2.5 & VOC sensors. Automations adapt airflow to keep your space in the green.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-sky-50 to-emerald-50 p-5 shadow-sm">
            <p className="text-sm text-slate-800">
              Trusted by clinics, hotels, and manufacturers to meet strict safety standards without sacrificing design.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
