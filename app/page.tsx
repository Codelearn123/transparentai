import Navigation from '@/src/components/Navigation';
import Hero from '@/src/components/Hero';
import Features from '@/src/components/Features';
import HowItWorks from '@/src/components/HowItWorks';
import Models from '@/src/components/Models';
import Pricing from '@/src/components/Pricing';
import FAQ from '@/src/components/FAQ';
import Footer from '@/src/components/Footer';

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <Models />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
