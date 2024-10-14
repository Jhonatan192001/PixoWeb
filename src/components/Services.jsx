import Card from "./Card";

const Services = () => {
  const cards = [
    { image: "/inteligenciaArtificial.jpg", title: "Inteligencia Artificial con Pixo", span: "col-span-full", href: "/services/ai" },
    { image: "/marketingDigital.jpg", title: "Marketing Digital", href: "/services/marketing" },
    { image: "/desarrolloSoftware.jpg", title: "Desarrollo de Software", href: "/services/software" },
    { image: "/diseñoGrafico.jpg", title: "Diseño Gráfico", href: "/services/disenografico" },
    { image: "/paginasWeb.jpg", title: "Páginas Web", href: "/services/paginaweb" },
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
            href={card.href}
          />
        </div>
      ))}
    </div>
  );
};

export default Services;
