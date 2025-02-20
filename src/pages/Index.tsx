
import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";

const Index = () => {
  const heartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heartRef.current) {
        const rect = heartRef.current.getBoundingClientRect();
        const scrollPercent = rect.top / window.innerHeight;
        heartRef.current.style.transform = `translateY(${scrollPercent * 50}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <img
              src="/lovable-uploads/eff30163-d912-4adb-b0d9-7a277f2ba848.png"
              alt="Hearts"
              className="w-full h-full object-contain opacity-20"
            />
          </div>
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="text-center">
            <h1 className="font-playfair text-5xl md:text-7xl mb-6 animate-fade-in">
              From the heart
            </h1>
            <p className="font-inter text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 animate-fade-in-delay">
              Crafting emotions into art, one piece at a time
            </p>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-playfair text-3xl md:text-4xl">
                Passion in Every Detail
              </h2>
              <p className="text-gray-300 font-inter leading-relaxed">
                Every creation is a journey through emotions, carefully crafted to touch hearts and inspire souls. Our art speaks the universal language of love and connection.
              </p>
            </div>
            <div ref={heartRef} className="relative animate-float">
              <img
                src="/lovable-uploads/eff30163-d912-4adb-b0d9-7a277f2ba848.png"
                alt="Artistic Heart"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

