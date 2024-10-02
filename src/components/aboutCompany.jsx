const AboutCompany = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-5 sm:px-10 lg:px-24 py-20">
      {/* Contenedor del texto */}
      <div className="flex flex-col justify-center">
        <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold py-6 text-center md:text-left">
          Conoce más de PIXO IA
        </h1>
        <p className="text-white leading-relaxed text-center md:text-left">
          Nuestra misión es empoderar a personas y empresas mediante soluciones
          innovadoras con inteligencia artificial, diseñadas para optimizar sus
          procesos y transformar la manera en que interactúan con la tecnología.
          Ofrecemos asesoramiento personalizado y herramientas avanzadas para
          que todos puedan aprovechar el potencial de la IA de manera fácil y
          accesible.{" "}
        </p>
      </div>

      {/* Contenedor de la imagen */}
      <div className="flex justify-center">
        <img
          src="/eyeIA.jpg"
          alt="Imagen representativa de la inteligencia artificial de PIXO"
          className="w-[607px] h-[610px] object-cover max-w-xl"
        />
      </div>
    </div>
  );
};

export default AboutCompany;
