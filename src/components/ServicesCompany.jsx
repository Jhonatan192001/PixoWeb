import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const ServicesCompany = () => {
  const cards = [
    {
      image: "/inteligenciaArtificial.jpg",
      title: "Inteligencia Artificial",
      description: "La IA al servicio de tu negocio",
    },
    {
      image: "/marketingDigital.jpg",
      title: "Marketing Digital",
      description: "Transforma tu presencia en línea",
    },
    {
      image: "/desarrolloSoftware.jpg",
      title: "Desarrollo Software",
      description: "Soluciones tecnológicas a medida",
    },
    {
      image: "/diseñoGrafico.jpg",
      title: "Diseño Gráfico",
      description: "Creaciones visuales impactantes",
    },
    {
      image: "/paginasWeb.jpg",
      title: "Página Web",
      description: "Tu negocio en el mundo digital",
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-24 py-20">
      <div className="text-start">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 text-white">
          PIXO te ofrece lo mejor
        </h1>
        <p className="text-xl text-white max-w-xl">
          Descubre cómo los servicios de Pixo IA pueden transformar tu negocio
          con soluciones personalizadas
        </p>
      </div>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center h-full">
              <Card
                image={card.image}
                title={card.title}
                description={card.description}
                className="h-64 md:h-[580px] md:w-96 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform scale-90 hover:scale-100"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServicesCompany;
