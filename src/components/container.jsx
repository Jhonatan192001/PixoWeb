import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return (
    <div className="container mx-auto">
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Container;