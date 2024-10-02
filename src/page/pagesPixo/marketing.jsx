import Info from "../../components/info";
import Container from "../../components/container";
import Hero from "../../components/Hero";
import Benefits from "../../components/benefits";
import Contact from "../../components/contact";

const Marketing = () => {
  const marketingBenefits = [
    {
      image: "/optimizacionTR.jpg",
      alt: "Optimización en Tiempo Real",
      subtitle: "Optimización en Tiempo Real",
    },
    {
      image: "/segmentacionPrecisa.jpg",
      alt: "Segmentación Precisa",
      subtitle: "Segmentación Precisa",
    },
    {
      image: "/automatizacionInteligente.jpg",
      alt: "Automatización Eficiente",
      subtitle: "Automatización Eficiente",
    },
    {
      image: "/roi.jpg",
      alt: "Mejora Constante del Retorno de Inversión (ROI)",
      subtitle: "Mejora Constante del Retorno de Inversión (ROI)",
    },
  ];
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <div className="w-full">
        <Hero
          backgroundType="image"
          backgroundSrc="/marketingDigital.jpg"
          title="Marketing Digital"
          titleAlignment="center"
          typed={true}
        />
      </div>

      <Container>
        <Info
          title="Transforma tu presencia en línea"
          description="Nuestro servicio de marketing digital utiliza la inteligencia artificial para crear campañas personalizadas que alcanzan a tu público ideal en el momento justo. ¿Cómo lo hacemos? Gracias a herramientas avanzadas, analizamos los comportamientos de los usuarios en tiempo real, lo que nos permite ajustar los anuncios y estrategias para lograr mejores resultados. ¡Imagina una campaña que se optimiza sola! Así maximizamos tus conversiones y te ayudamos a destacar en el mercado digital."
        />
        <Benefits
          title="¿Qué obtienes con el marketing digital de Pixo?"
          benefits={marketingBenefits}
        />
        <div className="px-5 sm:px-10 lg:px-24 py-20">
          <Contact />
        </div>
      </Container>
    </div>
  );
};

export default Marketing;
