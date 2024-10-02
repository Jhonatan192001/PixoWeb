import Info from "../../components/info";
import Container from "../../components/container";
import Hero from "../../components/Hero";
import Benefits from "../../components/benefits";
import Contact from "../../components/contact";

const Software = () => {
  const softwareBenefits = [
    {
      image: "/solucionPersonalizada.jpg",
      alt: "Soluciones Personalizadas",
      subtitle: "Soluciones Personalizadas",
    },
    {
      image: "/automatizacionInteligente.jpg",
      alt: "Automatización Inteligente",
      subtitle: "Automatización Inteligente",
    },
    {
      image: "/mejoraContinua.jpg",
      alt: "Mejora Continua",
      subtitle: "Mejora Continua",
    },
    {
      image: "/mayorSeguridadEscalabilidad.jpg",
      alt: "Mayor Seguridad y Escalabilidad",
      subtitle: "Mayor Seguridad y Escalabilidad",
    },
  ];

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <Hero
        backgroundType="image"
        backgroundSrc="/desarrolloSoftware.jpg"
        title="Desarrollo de Software"
        titleAlignment="center"
        typed={true}
      />

      <Container>
      <Info
          title="Soluciones a medida impulsadas por inteligencia artificial"
          description="El software que creamos está diseñado para resolver tus problemas específicos. Usamos la inteligencia artificial para construir aplicaciones que se adaptan y aprenden de tus necesidades. Desde automatizar tareas repetitivas hasta mejorar la seguridad de tus datos, nuestro software te facilita la vida y mejora la eficiencia de tu negocio. Desarrollamos herramientas que, con el tiempo, se vuelven aún más inteligentes, ayudándote a crecer sin complicaciones."
        />
        <Benefits
          title="¿Qué obtienes con el desarrollo de software de Pixo?"
          benefits={softwareBenefits}
        />
        <div className="px-5 sm:px-10 lg:px-24 py-20">
          <Contact />
        </div>
      </Container>
    </div>
  );
};

export default Software;
