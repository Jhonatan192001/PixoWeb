import Benefits from "../../components/benefits";
import Container from "../../components/container";
import Hero from "../../components/Hero";
import Info from "../../components/info";

const PaginaWeb = () => {
  const paginaWebBenefits = [
    {
      image: "/public/iconos para pixo-09.jpg",
      alt: "Icono de Optimización en Tiempo Real",
      subtitle: "Experiencia de Usuario Optimizada",
    },
    {
      image: "/public/iconos para pixo-07.jpg",
      alt: "Icono de Segmentación Precisa",
      subtitle: "Optimización para Motores de Búsqueda (SEO)",
    },
    {
      image: "/public/iconos para pixo-14.jpg",
      alt: "Icono de Automatización Eficiente",
      subtitle: "Diseño Adaptativo y Responsivo",
    },
    {
      image: "/public/iconos para pixo-15.jpg",
      alt: "Icono de Mejora Constante del ROI",
      subtitle: "Actualización y Escalabilidad Sencilla",
    },
  ];
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <div className="w-full">
        <Hero
          backgroundType="image"
          backgroundSrc="/paginas_web.jpg"
          title="Pagina Web"
          titleAlignment="center"
          typed={true}
        />
      </div>

      <Container>
        <Benefits
            title="¿Qué obtienes con las Páginas Web de Pixo?"
            benefits={paginaWebBenefits}
          />
          <Info
            title="Soluciones a medida impulsadas por inteligencia artificial"
            description="El software que creamos está diseñado para resolver tus problemas específicos. Usamos la inteligencia artificial para construir aplicaciones que se adaptan y aprenden de tus necesidades. Desde automatizar tareas repetitivas hasta mejorar la seguridad de tus datos, nuestro software te facilita la vida y mejora la eficiencia de tu negocio. Desarrollamos herramientas que, con el tiempo, se vuelven aún más inteligentes, ayudándote a crecer sin complicaciones."
          />
      </Container>
    </div>
  );
};

export default PaginaWeb;
