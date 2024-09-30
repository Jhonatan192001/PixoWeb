import Benefits from "../../components/benefits";
import Container from "../../components/container";
import Hero from "../../components/Hero";
import Info from "../../components/info";

const DisenoGrafico = () => {
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
        <div className="flex flex-col items-center justify-center min-h-full">
          <Benefits />
          <Info
            title="Soluciones a medida impulsadas por inteligencia artificial"
            description="El software que creamos está diseñado para resolver tus problemas específicos. Usamos la inteligencia artificial para construir aplicaciones que se adaptan y aprenden de tus necesidades. Desde automatizar tareas repetitivas hasta mejorar la seguridad de tus datos, nuestro software te facilita la vida y mejora la eficiencia de tu negocio. Desarrollamos herramientas que, con el tiempo, se vuelven aún más inteligentes, ayudándote a crecer sin complicaciones."
          />
        </div>
      </Container>
    </div>
  );
};

export default DisenoGrafico;