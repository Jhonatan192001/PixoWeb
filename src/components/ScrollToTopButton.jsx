import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    gsap.to(window, { 
      duration: 1, 
      scrollTo: { y: 0, autoKill: false },
      ease: "power3.inOut"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 left-5 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 ease-in-out z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default ScrollToTopButton;