import Benefits from "../../components/benefits";
import Container from "../../components/container";
import Hero from "../../components/Hero";
import Info from "../../components/info";

const DisenoGrafico = () => {
  const diseñoBenefits = [
    {
      image: "/public/iconos para pixo-11.jpg",
      alt: "Icono de Optimización en Tiempo Real",
      subtitle: "Diseños Personalizados y Estratégicos",
    },
    {
      image: "/public/iconos para pixo-05.jpg",
      alt: "Icono de Segmentación Precisa",
      subtitle: "Optimización con Inteligencia Artificial",
    },
    {
      image: "/public/iconos para pixo-12.jpg",
      alt: "Icono de Automatización Eficiente",
      subtitle: "Creatividad Potenciada por Tecnología",
    },
    {
      image: "/public/iconos para pixo-10.jpg",
      alt: "Icono de Mejora Constante del ROI",
      subtitle: "Entrega Rápida y Eficiente",
    },
  ];
  return (
    <div className="bg-black">
      <Hero
        backgroundType="image"
        backgroundSrc="/Diseño_grafico.jpg"
        title="Diseño Grafico"
        titleAlignment="center"
        typed={true}
      />

      <Container>
        <Benefits
          title="¿Qué obtienes con el diseño gráfico de Pixo?"
          benefits={diseñoBenefits}
        />
        <Info
          title="Soluciones a medida impulsadas por inteligencia artificial"
          description="El software que creamos está diseñado para resolver tus problemas específicos. Usamos la inteligencia artificial para construir aplicaciones que se adaptan y aprenden de tus necesidades. Desde automatizar tareas repetitivas hasta mejorar la seguridad de tus datos, nuestro software te facilita la vida y mejora la eficiencia de tu negocio. Desarrollamos herramientas que, con el tiempo, se vuelven aún más inteligentes, ayudándote a crecer sin complicaciones."
        />
      </Container>
    </div>
  );
};

export default DisenoGrafico;
