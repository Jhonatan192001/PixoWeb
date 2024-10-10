import AboutCompany from "../components/aboutCompany";
import Contact from "../components/contact";
import Info from "../components/info";
import HeroCompany from "../sections/heroCompany";
import ServicesCompany from "../sections/ServicesCompany";

const Company = () => {
  return (
    <div>
      <HeroCompany />
      <AboutCompany />
      <Info
        title="Con Pixo, puedes confiar en un servicio seguro y confiable que optimiza tu trabajo con inteligencia artificial, impulsando el crecimiento de tu negocio. Nuestro compromiso es brindarte estrategias efectivas que generan resultados."
        imageSrc="/office.jpg"
      />
      <ServicesCompany />
      <div className="px-5 sm:px-10 lg:px-24 py-20">
        <Contact title="Impulsa tu negocio con Pixo: la agencia de publicidad que optimiza resultados usando inteligencia artificial" />
      </div>
    </div>
  );
};

export default Company;
