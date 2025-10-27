import Hero from "./components/Hero";
import Features from "./components/Features";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 antialiased">
      <Hero />
      <Features />
      <ProductGrid />
      <Footer />
    </div>
  );
}
