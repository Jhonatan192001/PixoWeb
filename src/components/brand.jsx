import { useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import gsap from "gsap";

const Brand = ({ images }) => {
  const brandRef = useRef(null);

  useEffect(() => {
    const element = brandRef.current;
    gsap.to(element, {
      x: "-80%",
      repeat: -1,
      duration: 17,
      ease: "linear",
    });
  }, []);

  return (
    <div className="overflow-hidden w-full py-10 md:py-20">
      <div className="flex" ref={brandRef}>
        {images.map((image, index) => (
          <div className="flex-shrink-0 mx-10" key={index}>
            <img src={image} alt={`brand-${index}`} className="w-20 h-20 object-contain" />
          </div>
        ))}
        {images.map((image, index) => (
          <div className="flex-shrink-0 mx-10" key={index + images.length}>
            <img src={image} alt={`brand-${index}-duplicate`} className="w-20 h-20 object-contain" />
          </div>
        ))}
        {images.map((image, index) => (
          <div className="flex-shrink-0 mx-4" key={index + images.length}>
            <img src={image} alt={`brand-${index}-duplicate`} className="w-20 h-20 object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

Brand.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Brand;