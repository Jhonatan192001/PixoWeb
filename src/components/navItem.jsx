import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavItem = ({ label, to, onClick, className = "", children }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  const content = (
    <span
      className={`cursor-pointer hover:text-blue-500 transition duration-300 ${className}`}
      onClick={handleClick}
    >
      {label}
    </span>
  );

  return (
    <li>
      {to ? <Link to={to}>{content}</Link> : content}
      {children}
    </li>
  );
};

NavItem.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default NavItem;