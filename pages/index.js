import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Gallery from "../components/Gallery";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-primary">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <FAQ />
      <Footer />
    </div>
  );
}
