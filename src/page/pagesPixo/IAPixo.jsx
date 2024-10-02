import Info from "../../components/info";
import Container from "../../components/container";
import Hero from "../../components/Hero";
import Contact from "../../components/contact";

const IAPixo = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
      <div className="w-full">
        <Hero
          backgroundType="image"
          backgroundSrc="/inteligenciaArtificial.jpg"
          title="Inteligencia Artificial PIXO"
          titleAlignment="center"
          typed={true}
        />
      </div>

      <Container>
        <Info
          title="La inteligencia artificial a tu servicio"
          description="La inteligencia artificial (IA) no es solo para grandes corporaciones. Nosotros la ponemos a tu alcance para que puedas aprovechar su poder en tu día a día. Con IA, analizamos enormes cantidades de información para ofrecerte soluciones rápidas y precisas. Desde asistentes virtuales que responden preguntas automáticas, hasta sistemas predictivos que te ayudan a tomar mejores decisiones, la IA puede hacer que tu empresa sea más eficiente, productiva y rentable."
        />
        <div className="px-5 sm:px-10 lg:px-24 py-20">
          <Contact />
        </div>
      </Container>
    </div>
  );
};

export default IAPixo;
