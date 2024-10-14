import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const FooterLink = ({ to, children }) => {
  const handleClick = () => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  return (
    <Link
      to={to}
      className="hover:underline hover:text-blue-500"
      onClick={handleClick}
    >
      {children}
    </Link>
  );
};

FooterLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default FooterLink;