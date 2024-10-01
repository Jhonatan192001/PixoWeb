import Info from "../../components/info";
import Container from "../../components/container";
import Hero from "../../components/Hero";
import Benefits from "../../components/benefits"; 

const Software = () => {
  const softwareBenefits = [
    {
      image: "/public/iconos para pixo_Mesa de trabajo 1.jpg",
      alt: "Icono de Optimización en Tiempo Real",
      subtitle: "Soluciones Personalizadas",
    },
    {
      image: "/public/iconos para pixo-13.jpg",
      alt: "Icono de Segmentación Precisa",
      subtitle: "Automatización Inteligente",
    },
    {
      image: "/public/iconos para pixo-08.jpg",
      alt: "Icono de Automatización Eficiente",
      subtitle: "Mejora Continua",
    },
    {
      image: "/public/iconos para pixo-02.jpg",
      alt: "Icono de Mejora Constante del ROI",
      subtitle: "Mayor Seguridad y Escalabilidad",
    },
  ];

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <Hero
        backgroundType="image"
        backgroundSrc="/Desarrollo_software.jpg"
        title="Desarrollo de Software"
        titleAlignment="center"
        typed={true}
      />

      <Container>
        <Benefits
          title="¿Qué obtienes con el desarrollo de software de Pixo?"
          benefits={softwareBenefits}
        />
        <Info
          title="Soluciones a medida impulsadas por inteligencia artificial"
          description="El software que creamos está diseñado para resolver tus problemas específicos. Usamos la inteligencia artificial para construir aplicaciones que se adaptan y aprenden de tus necesidades. Desde automatizar tareas repetitivas hasta mejorar la seguridad de tus datos, nuestro software te facilita la vida y mejora la eficiencia de tu negocio. Desarrollamos herramientas que, con el tiempo, se vuelven aún más inteligentes, ayudándote a crecer sin complicaciones."
        />
      </Container>
    </div>
  );
};

export default Software;
