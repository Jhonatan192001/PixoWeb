import Info from "../../components/info";
import Container from "../../components/container";
import Hero from "../../components/Hero";
import Benefits from "../../components/benefits";

const Marketing = () => {
  const marketingBenefits = [
    {
      image: "/public/iconos para pixo-06.jpg",
      alt: "Icono de Optimización en Tiempo Real",
      subtitle: "Optimización en Tiempo Real",
    },
    {
      image: "/public/iconos para pixo-03.jpg",
      alt: "Icono de Segmentación Precisa",
      subtitle: "Segmentación Precisa",
    },
    {
      image: "/public/iconos para pixo-13.jpg",
      alt: "Icono de Automatización Eficiente",
      subtitle: "Automatización Eficiente",
    },
    {
      image: "/public/iconos para pixo-04.jpg",
      alt: "Icono de Mejora Constante del ROI",
      subtitle: "Mejora Constante del Retorno de Inversión (ROI)",
    },
  ];
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <div className="w-full">
        <Hero
          backgroundType="image"
          backgroundSrc="/marketing_digital.jpg"
          title="Marketing Digital"
          titleAlignment="center"
          typed={true}
        />
      </div>

      <Container>
        <Benefits
          title="¿Qué obtienes con el marketing digital de Pixo?"
          benefits={marketingBenefits}
        />
        <Info
          title="Transforma tu presencia en línea con inteligencia artificial"
          description="Nuestro servicio de marketing digital utiliza la inteligencia artificial para crear campañas personalizadas que alcanzan a tu público ideal en el momento justo. ¿Cómo lo hacemos? Gracias a herramientas avanzadas, analizamos los comportamientos de los usuarios en tiempo real, lo que nos permite ajustar los anuncios y estrategias para lograr mejores resultados. ¡Imagina una campaña que se optimiza sola! Así maximizamos tus conversiones y te ayudamos a destacar en el mercado digital."
        />
      </Container>
    </div>
  );
};

export default Marketing;
