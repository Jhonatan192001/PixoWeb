import Benefits from "../../components/benefits";
import Contact from "../../components/contact";
import Container from "../../components/container";
import Hero from "../../components/Hero";
import Info from "../../components/info";

const DisenoGrafico = () => {
  const diseñoBenefits = [
    {
      image: "/diseñoPersonalizado.jpg",
      alt: "Icono de Optimización en Tiempo Real",
      subtitle: "Diseños Personalizados y Estratégicos",
    },
    {
      image: "/optimizacionIA.jpg",
      alt: "Icono de Segmentación Precisa",
      subtitle: "Optimización con Inteligencia Artificial",
    },
    {
      image: "/creatividadProtenciada.jpg",
      alt: "Icono de Automatización Eficiente",
      subtitle: "Creatividad Potenciada por Tecnología",
    },
    {
      image: "/entregaRapida.jpg",
      alt: "Icono de Mejora Constante del ROI",
      subtitle: "Entrega Rápida y Eficiente",
    },
  ];
  return (
    <div className="bg-black">
      <Hero
        backgroundType="image"
        backgroundSrc="/diseñoGrafico.jpg"
        title="Diseño Gráfico"
        titleAlignment="center"
        typed={true}
      />

      <Container>
        <Info
          title="Soluciones a medida impulsadas por inteligencia artificial"
          description="El software que creamos está diseñado para resolver tus problemas específicos. Usamos la inteligencia artificial para construir aplicaciones que se adaptan y aprenden de tus necesidades. Desde automatizar tareas repetitivas hasta mejorar la seguridad de tus datos, nuestro software te facilita la vida y mejora la eficiencia de tu negocio. Desarrollamos herramientas que, con el tiempo, se vuelven aún más inteligentes, ayudándote a crecer sin complicaciones."
        />
        <Benefits
          title="¿Qué obtienes con el diseño gráfico de Pixo?"
          benefits={diseñoBenefits}
        />
        <div className="px-5 sm:px-10 lg:px-24 py-20">
          <Contact />
        </div>
      </Container>
    </div>
  );
};

export default DisenoGrafico;
