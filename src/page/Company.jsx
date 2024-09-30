import AboutCompany from "../components/aboutCompany";
import Info from "../components/info";
import HeroCompany from "../sections/heroCompany";
import ServicesCompany from "../sections/servicesCompany";

const Company = () => {
  return (
    <div>
      <HeroCompany />
      <AboutCompany />
      <Info
        title="Con Pixo, puedes confiar en una inteligencia artificial segura y diseñada
              para brindarte soluciones efectivas. Mejora tus procesos y bienestar
              con la tranquilidad de que estás en buenas manos.
              ¡Pruébala hoy y siente la diferencia!"
        imageSrc="/Desarrollo_software.jpg"
      />
      <ServicesCompany />
    </div>
  );
};

export default Company;
