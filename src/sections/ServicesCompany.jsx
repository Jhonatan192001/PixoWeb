import Card from "../components/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const ServicesCompany = () => {
  const cards = [
    {
      image: "/Inteligencia_Artificial.jpg",
      title: "Inteligencia Artificial",
      description: "La IA al servicio de tu negocio",
    },
    {
      image: "/marketing_digital.jpg",
      title: "Marketing Digital",
      description: "Transforma tu presencia en línea",
    },
    {
      image: "/Desarrollo_software.jpg",
      title: "Desarrollo Software",
      description: "Soluciones tecnológicas a medida",
    },
    {
      image: "/Diseño_grafico.jpg",
      title: "Diseño Gráfico",
      description: "Creaciones visuales impactantes",
    },
    {
      image: "/paginas_web.jpg",
      title: "Página Web",
      description: "Tu negocio en el mundo digital",
    },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-24 mb-12 sm:mb-24">
      <div className="text-start mb-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
          PIXO te ofrece lo mejor
        </h1>
        <p className="text-lg text-white max-w-3xl">
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
