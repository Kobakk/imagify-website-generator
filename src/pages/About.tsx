
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        {/* Main content with staggered animation */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl mb-8">MDINNNA</h1>
            <div className="font-inter text-lg font-light leading-relaxed tracking-wide text-gray-300 space-y-6">
              <p>
                Exploradora de formas, colores y texturas. Me dedico a transformar lo ordinario en 
                extraordinario a través de mi arte, creando piezas que invitan a la reflexión y evocan emociones.
              </p>
              <p>
                Con base en Barcelona, mis obras son una fusión de técnicas tradicionales y experimentales,
                inspiradas en mis viajes y experiencias personales. Cada colección cuenta una historia diferente,
                pero todas comparten mi pasión por el detalle y la autenticidad.
              </p>
            </div>
          </motion.div>

          {/* Bio section with timeline */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="font-playfair text-2xl mb-6 border-b border-gray-800 pb-2">Trayectoria</h2>
            <div className="grid md:grid-cols-[1fr_3fr] gap-8">
              <div className="space-y-6">
                <div>
                  <span className="text-primary text-sm font-medium">2020 — Presente</span>
                  <p className="font-inter text-white">Artista independiente</p>
                </div>
                <div>
                  <span className="text-primary text-sm font-medium">2015 — 2019</span>
                  <p className="font-inter text-white">Estudios de Arte, Universidad de Barcelona</p>
                </div>
                <div>
                  <span className="text-primary text-sm font-medium">2012 — 2015</span>
                  <p className="font-inter text-white">Asistente en Galería Moderna</p>
                </div>
              </div>
              <div className="font-inter text-gray-300 space-y-6">
                <p>
                  Mi camino artístico comenzó formalmente en la Universidad de Barcelona, donde exploré 
                  diversas técnicas y desarrollé mi estilo distintivo. Durante mis estudios, tuve la 
                  oportunidad de participar en varias exposiciones colectivas que ampliaron mi visión 
                  del arte contemporáneo.
                </p>
                <p>
                  Tras graduarme, trabajé como asistente en una galería local, lo que me permitió 
                  sumergirme en el mundo del arte desde otra perspectiva. Esta experiencia fue 
                  fundamental para entender el ecosistema artístico y establecer conexiones valiosas.
                </p>
                <p>
                  Desde 2020, me he dedicado completamente a mi carrera como artista independiente, 
                  creando colecciones que han sido exhibidas en galerías de Barcelona, Madrid y Lisboa. 
                  Mi trabajo ha evolucionado hacia una exploración más profunda de la identidad y la 
                  memoria colectiva.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Philosophy section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-20"
          >
            <h2 className="font-playfair text-2xl mb-6 border-b border-gray-800 pb-2">Filosofía</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-black/30 backdrop-blur-sm border border-gray-800 p-6 rounded-lg">
                <h3 className="font-inter text-lg mb-4 text-primary">Autenticidad</h3>
                <p className="font-inter text-gray-300">
                  Creo firmemente que el arte debe reflejar la verdad interior del artista. Cada pieza 
                  que creo es una extensión auténtica de mis experiencias, emociones y reflexiones, sin 
                  filtros ni pretensiones.
                </p>
              </div>
              <div className="bg-black/30 backdrop-blur-sm border border-gray-800 p-6 rounded-lg">
                <h3 className="font-inter text-lg mb-4 text-primary">Experimentación</h3>
                <p className="font-inter text-gray-300">
                  La evolución constante es esencial para mi práctica artística. Me permito explorar 
                  nuevas técnicas, materiales y conceptos, dejando que cada proyecto me lleve por caminos 
                  inesperados y enriquecedores.
                </p>
              </div>
              <div className="bg-black/30 backdrop-blur-sm border border-gray-800 p-6 rounded-lg">
                <h3 className="font-inter text-lg mb-4 text-primary">Conexión</h3>
                <p className="font-inter text-gray-300">
                  El arte tiene el poder de conectar personas, culturas y épocas. Aspiro a crear obras 
                  que resuenen con el espectador a un nivel emocional y les inviten a reflexionar sobre 
                  su propia relación con el mundo.
                </p>
              </div>
              <div className="bg-black/30 backdrop-blur-sm border border-gray-800 p-6 rounded-lg">
                <h3 className="font-inter text-lg mb-4 text-primary">Sostenibilidad</h3>
                <p className="font-inter text-gray-300">
                  Mi compromiso con el planeta se refleja en mi trabajo. Utilizo materiales reciclados 
                  y procesos sostenibles siempre que es posible, buscando minimizar mi huella ecológica 
                  mientras creo belleza.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Contact information */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-10"
          >
            <h2 className="font-playfair text-2xl mb-6 border-b border-gray-800 pb-2">Contacto</h2>
            <div className="font-inter text-gray-300">
              <p className="mb-2">
                <span className="text-primary">Email:</span> info@mdinnna.com
              </p>
              <p className="mb-2">
                <span className="text-primary">Instagram:</span> @mdinnna.art
              </p>
              <p className="mb-2">
                <span className="text-primary">Estudio:</span> Carrer de Pujades 74, Barcelona
              </p>
              <p className="mt-6">
                Para consultas sobre adquisiciones, colaboraciones o visitas al estudio,
                no dudes en contactarme a través de cualquiera de estos canales.
              </p>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default About;
