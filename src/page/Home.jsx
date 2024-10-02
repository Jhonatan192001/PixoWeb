import Brand from "../components/brand";
import Contact from "../components/contact";
import Hero from "../components/Hero";
import Services from "../sections/Services";

const images = [
  "/logoCachosToro.jpg",
  "/logoCiudadMagica.jpg",
  "/logoEmbajadas.jpg",
  "/logoFancyPark.jpg",
  "/logoOST.jpg",
  "/logoPantera.jpg",
  "/logoQFS.jpg",
];

const Home = () => {
  return (
    <div>
      <Hero
        backgroundType="video"
        backgroundSrc="/bgVideo.mp4"
        title="Somos una Agencia de Publicidad Impulsada por IA"
        paragraph="Combinamos creatividad y tecnología de vanguardia con nuestra propia inteligencia artificial, optimizando cada campaña y proyecto para maximizar tus resultados."
        titleAlignment="left"
        typed={true}
      />
      <div className="px-5 sm:px-10 lg:px-24 py-20">
        <h1 className="text-white text-2xl sm:text-4xl text-center mb-8 font-medium">
          ¡La inteligencia del futuro, hoy a tu servicio!
        </h1>
        <Services />
      </div>
      <Brand images={images} />
      <div className="px-5 sm:px-10 lg:px-24 py-20">
        <Contact title="Impulsa tu negocio con Pixo: la agencia de publicidad que optimiza resultados usando inteligencia artificial" />
      </div>
    </div>
  );
};

export default Home;
