
import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";

const Index = () => {
  const heartRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    instagram: "",
    email: "",
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <img
              src="/lovable-uploads/1a1b7730-c753-4b25-a1ce-4eeb76a6e24f.png"
              alt="Hearts"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
        </div>
        
        <div className="container mx-auto px-4 z-10">
          <div className="text-center">
            <h1 className="font-gothic text-4xl md:text-5xl mb-6 animate-fade-in italic">
              From the heart
            </h1>
            <p className="font-inter text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 animate-fade-in-delay">
              Crafting emotions into art, one piece at a time
            </p>
          </div>
        </div>
      </section>

      {/* Hearts Section */}
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
            <div ref={heartRef} className="relative grid grid-cols-2 gap-8">
              <img
                src="/lovable-uploads/5009b84b-7627-498d-a0be-ea2cd5ffac1b.png"
                alt="Artistic Hearts"
                className="col-span-2 w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-playfair text-3xl md:text-5xl mb-16">
            ¿CREAMOS ARTE JUNTOS?
          </h2>
          <p className="text-xl mb-2">EST. 2020</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-12">
            <div className="space-y-8">
              <div>
                <p className="text-xl mb-2">mdinnnna@gmail.com</p>
                <h3 className="text-lg mb-4">Social:</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <a href="#" className="block hover:text-primary transition-colors">instagram</a>
                    <a href="#" className="block hover:text-primary transition-colors">thread</a>
                  </div>
                  <div>
                    <a href="#" className="block hover:text-primary transition-colors">behance</a>
                    <a href="#" className="block hover:text-primary transition-colors">linkedIn</a>
                  </div>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="[Tu nombre]"
                  className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-white/40 transition-colors"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="[Tu instagram]"
                  className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-white/40 transition-colors"
                  value={formData.instagram}
                  onChange={(e) => setFormData({...formData, instagram: e.target.value})}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="[Tu mail]"
                  className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-white/40 transition-colors"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
