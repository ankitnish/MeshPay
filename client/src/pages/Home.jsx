import LandingNavbar from "../components/LandingNavbar";import Hero from "../components/Hero";
import TrustBar from "../components/TrustBar";
import Features from "../components/Features";
import HowItWork from "../components/HowItWork";
import Stats from "../components/Stats";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="bg-slate-950 text-white overflow-x-hidden">
      <LandingNavbar />
      <Hero />
      <TrustBar />
      <Features />
      <HowItWork />
      <Stats />
      <CTA />
      <Footer />
    </div>
  );
}

export default Home;