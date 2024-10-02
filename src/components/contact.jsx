import PropTypes from "prop-types";
import { useState } from "react";
import Button from "./button";
import Modal from "./modalForm";

const Contact = ({ title = "¡Prueba el poder de Pixo hoy mismo!" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="h-auto w-full bg-white flex flex-col items-center justify-center text-center p-6 md:h-[420px]">
      <div className="flex flex-col items-center justify-center space-y-6">
        <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl mb-6">
          {title}
        </h1>
        <Button onClick={toggleModal}>COTIZA AHORA</Button>
      </div>
      {isModalOpen && <Modal isVisible={isModalOpen} onClose={toggleModal} />}
    </div>
  );
};

Contact.propTypes = {
  title: PropTypes.string
};

export default Contact;