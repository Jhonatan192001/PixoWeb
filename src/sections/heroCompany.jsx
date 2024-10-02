const HeroCompany = () => {
  return (
    <div className="flex flex-col items-center justify-center px-5 sm:px-10 lg:px-24 py-20">
      <h1 className="text-white text-2xl sm:text-3xl lg:text-5xl text-center py-8 font-bold uppercase">
        Sobre PIXO
      </h1>
      <p className="text-white text-xl text-center max-w-3xl py-8">
      Somos una agencia de publicidad que implementa inteligencia artificial para optimizar tus proyectos. Nuestra misión es garantizar que la inteligencia artificial general te beneficie y maximice tus resultados.
      </p>
      <img
        src="/robotIA.jpg"
        alt="imgRobot"
        className="w-full object-cover max-w-4xl"
      />
    </div>
  );
};

export default HeroCompany;
