import GenericIcon from "/icon.svg";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const Benefits = () => {
  const benefitsRef = useRef(null);

  useEffect(() => {
    const benefitsItems = benefitsRef.current.querySelectorAll(".benefit");

    gsap.fromTo(
      benefitsItems,
      {
        y: 100,
        scale: 0.8,
        opacity: 0,
      },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)",
        stagger: 0.2,
      }
    );
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full py-32" ref={benefitsRef}>
      <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8">
        ¿Qué obtienes con el marketing digital de Pixo?
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
        <div className="benefit rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
          <img src={GenericIcon} alt="Icono" className="w-16 h-16 mb-4" />
          <h2 className="text-lg text-center text-white font-bold">
            Optimización en Tiempo Real
          </h2>
        </div>
        <div className="benefit rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
          <img src={GenericIcon} alt="Icono" className="w-16 h-16 mb-4" />
          <h2 className="text- text-center text-white font-bold">
            Segmentación Precisa
          </h2>
        </div>
        <div className="benefit rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
          <img src={GenericIcon} alt="Icono" className="w-16 h-16 mb-4" />
          <h2 className="text-lg text-center text-white font-bold">
            Automatización Eficiente
          </h2>
        </div>
        <div className="benefit rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
          <img src={GenericIcon} alt="Icono" className="w-16 h-16 mb-4" />
          <h2 className="text-lg text-center text-white font-bold">
            Mejora Constante del Retorno de Inversión (ROI)
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
