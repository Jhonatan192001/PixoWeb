import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavItem = ({ label, to, onClick, className = "", children }) => {
  const content = (
    <span
      className={`cursor-pointer hover:text-blue-500 transition duration-300 ${className}`}
      onClick={onClick}
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
