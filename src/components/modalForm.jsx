import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import PropTypes from "prop-types";
import Button from "./button";

const Modal = ({ isVisible, onClose }) => {
  const modalRef = useRef(null);
  const backdropRef = useRef(null);

  useEffect(() => {
    if (isVisible) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
      );
      gsap.to(backdropRef.current, { opacity: 0.7, duration: 0.5 });
    }
  }, [isVisible]);

  const handleModalClose = () => {
    gsap.to(modalRef.current, {
      opacity: 0,
      y: -50,
      duration: 0.5,
      ease: "power3.in",
      onComplete: () => {
        onClose();
      },
    });
    gsap.to(backdropRef.current, { opacity: 0, duration: 0.5 });
  };

  if (!isVisible) return null;

  return (
    <>
      <div
        ref={backdropRef}
        className="fixed inset-0 bg-black bg-opacity-70 z-40"
        style={{ opacity: 0 }}
        onClick={handleModalClose}
      ></div>

      <div
        ref={modalRef}
        className="fixed inset-0 z-50 flex items-center justify-center"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-4">
          <button className="absolute top-2 right-2" onClick={handleModalClose}>
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="mt-4">
            <div className="flex justify-center">
              <img src="/logoPixo.png" className="h-12 w-20" alt="" />
            </div>
            <h2 className="text-center text-2xl font-bold mb-4 uppercase">
              Cotiza Ahora
            </h2>
            <form>
              <input
                type="text"
                placeholder="Nombre"
                className="block w-full p-2 mb-4 border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                className="block w-full p-2 mb-4 border border-gray-300 rounded"
              />
              <input
                type="text"
                placeholder="Número Telefónico"
                className="block w-full p-2 mb-4 border border-gray-300 rounded"
              />
              <textarea
                placeholder="Descripción del proyecto"
                className="block w-full p-2 mb-4 border border-gray-300 rounded"
              />
              <div className="flex justify-center">
                <Button onClick="submit">Enviar</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
