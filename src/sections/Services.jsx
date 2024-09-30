import Card from "../components/Card";

const Services = () => {
  const cards = [
    { image: "/Inteligencia_Artificial.jpg", title: "Inteligencia Artificial con Pixo", span: "col-span-full" },
    { image: "/marketing_digital.jpg", title: "Marketing Digital" },
    { image: "/Desarrollo_software.jpg", title: "Desarrollo de Software" },
    { image: "/Diseño_grafico.jpg", title: "Diseño Gráfico" },
    { image: "/paginas_web.jpg", title: "Páginas Web" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
      {cards.map((card, index) => (
        <div key={index} className={`${index === 0 ? 'col-span-full' : ''}`}>
          <Card
            image={card.image}
            title={card.title}
            className="h-64 sm:h-80 shadow-md transition-all duration-300 ease-in-out uppercase"
            isServices={true}
          />
        </div>
      ))}
    </div>
  );
};

export default Services;