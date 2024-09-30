import { useState } from "react";
import Button from "./button";
import Modal from "./modalForm";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="h-auto bg-white flex flex-col items-center justify-center text-center p-6 md:h-[420px]">
      <div className="flex flex-col items-center justify-center space-y-6">
        <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6">
          Impulsa tu negocio con Pixo: la agencia de publicidad que
          <br className="hidden md:block" />
          optimiza resultados usando inteligencia artificial
        </h1>
        <Button onClick={toggleModal}>COTIZA AHORA</Button>
      </div>
      {isModalOpen && <Modal isVisible={isModalOpen} onClose={toggleModal} />}
    </div>
  );
};

export default Contact;
