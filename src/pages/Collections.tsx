
import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import { ArrowRight, Image } from "lucide-react";
import { Link } from "react-router-dom";

const Collections = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.collection-card');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
        if (isInView) {
          card.classList.add('opacity-100');
          card.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once to check initial view
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      {/* Header */}
      <section className="py-32 md:py-40 px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl mb-8 tracking-wide">Colecciones</h1>
          <p className="text-lg md:text-xl max-w-2xl text-gray-300 font-light">
            Explora el espacio donde la emoción se encuentra con el arte. Cada colección es una narrativa visual que trasciende lo ordinario.
          </p>
        </div>
      </section>
      
      {/* Collections Grid */}
      <section className="px-4 pb-32" ref={containerRef}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {collections.map((collection, index) => (
              <Link 
                to={`/collections/${collection.slug}`}
                key={collection.id}
                className="collection-card group opacity-0 translate-y-8 transition-all duration-700 ease-out"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden mb-6">
                  <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900">
                    <img
                      src={collection.image}
                      alt={collection.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl md:text-2xl font-playfair mb-1">{collection.title}</h3>
                    <p className="text-gray-400 text-sm">{collection.year}</p>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-24 bg-neutral-900">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="font-playfair text-3xl md:text-4xl mb-12 tracking-wide">Proceso artístico</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-12 h-12 flex items-center justify-center border border-white/20 mb-6">
                <Image className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-playfair">Concepto</h3>
              <p className="text-gray-400">Cada obra nace de una emoción o experiencia, transformada en concepto visual.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 flex items-center justify-center border border-white/20 mb-6">
                <span className="text-lg">✦</span>
              </div>
              <h3 className="text-xl font-playfair">Creación</h3>
              <p className="text-gray-400">El proceso de materializar la idea combina técnicas tradicionales y digitales.</p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 flex items-center justify-center border border-white/20 mb-6">
                <span className="text-lg">◎</span>
              </div>
              <h3 className="text-xl font-playfair">Conexión</h3>
              <p className="text-gray-400">Cada pieza busca establecer un diálogo íntimo con quien la contempla.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Sample collections data
const collections = [
  {
    id: 1,
    title: "ETHEREAL",
    slug: "ethereal",
    year: "2023",
    image: "/lovable-uploads/5009b84b-7627-498d-a0be-ea2cd5ffac1b.png",
    description: "Una exploración de la luz y la forma a través del lenguaje visual minimalista."
  },
  {
    id: 2,
    title: "REMINISCENCIA",
    slug: "reminiscencia",
    year: "2022",
    image: "/lovable-uploads/eff30163-d912-4adb-b0d9-7a277f2ba848.png",
    description: "Serie que evoca la nostalgia y los recuerdos a través de técnicas mixtas."
  },
  {
    id: 3,
    title: "CHRONOS",
    slug: "chronos",
    year: "2022",
    image: "/lovable-uploads/1a1b7730-c753-4b25-a1ce-4eeb76a6e24f.png",
    description: "Estudio visual del tiempo y su impacto en nuestra percepción de la realidad."
  },
  {
    id: 4,
    title: "ESENCIA",
    slug: "esencia",
    year: "2021",
    image: "/lovable-uploads/5009b84b-7627-498d-a0be-ea2cd5ffac1b.png",
    description: "Colección que explora la simplicidad y pureza de las formas fundamentales."
  }
];

export default Collections;
