import { useState } from "react";
import PropTypes from "prop-types";
import Modal from "./modalForm";

const Info = ({ title, description, imageSrc }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className="flex flex-col items-center justify-center w-full py-20">
      <div className="max-w-full w-full px-4 sm:px-6 lg:px-16">
        <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8">
          {title}
        </h1>

        {description && (
          <p className="text-white text-lg text-center py-8">{description}</p>
        )}
        <div className="flex justify-center">
        </div>

        {imageSrc && (
          <div className="pt-10 flex justify-center">
            <img
              src={imageSrc}
              alt="Info"
              className="w-full max-w-md sm:max-w-lg lg:max-w-[1034px] lg:h-[653px] rounded-lg shadow-lg"
            />
          </div>
        )}
      </div>
      {isModalOpen && <Modal isVisible={isModalOpen} onClose={toggleModal} />}
    </div>
  );
};

Info.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  imageSrc: PropTypes.string,
};

export default Info;
