import Benefits from "../../components/benefits";
import Contact from "../../components/contact";
import Container from "../../components/container";
import Hero from "../../components/Hero";
import Info from "../../components/info";

const PaginaWeb = () => {
  const paginaWebBenefits = [
    {
      image: "/experienciaUsuario.jpg",
      alt: "Experiencia de Usuario Optimizada",
      subtitle: "Experiencia de Usuario Optimizada",
    },
    {
      image: "/seo.jpg",
      alt: "Optimización para Motores de Búsqueda (SEO)",
      subtitle: "Optimización para Motores de Búsqueda (SEO)",
    },
    {
      image: "/diseñoAdaptativo.jpg",
      alt: "Diseño Adaptativo y Responsivo",
      subtitle: "Diseño Adaptativo y Responsivo",
    },
    {
      image: "/actualizacionEscalabilidad.jpg",
      alt: "Actualización y Escalabilidad Sencilla",
      subtitle: "Actualización y Escalabilidad Sencilla",
    },
  ];
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <div className="w-full">
        <Hero
          backgroundType="image"
          backgroundSrc="/paginasWeb.jpg"
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
        <div className="px-5 sm:px-10 lg:px-24 py-20">
          <Contact />
        </div>
      </Container>
    </div>
  );
};

export default PaginaWeb;
