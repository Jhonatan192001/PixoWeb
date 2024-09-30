import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Container;