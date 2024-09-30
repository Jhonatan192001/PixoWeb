import Info from "../../components/info";
import Container from "../../components/container";
import Hero from "../../components/Hero";
import Benefits from "../../components/benefits";

const Marketing = () => {
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
        <div className="flex flex-col items-center justify-center min-h-full mb-12">
        <Benefits />
          <Info
            title="Transforma tu presencia en línea con inteligencia artificial"
            description="Nuestro servicio de marketing digital utiliza la inteligencia artificial para crear campañas personalizadas que alcanzan a tu público ideal en el momento justo. ¿Cómo lo hacemos? Gracias a herramientas avanzadas, analizamos los comportamientos de los usuarios en tiempo real, lo que nos permite ajustar los anuncios y estrategias para lograr mejores resultados. ¡Imagina una campaña que se optimiza sola! Así maximizamos tus conversiones y te ayudamos a destacar en el mercado digital."
          />
        </div>
      </Container>
    </div>
  );
};

export default Marketing;