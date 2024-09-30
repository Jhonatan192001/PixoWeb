import PropTypes from 'prop-types';

const Button = ({ 
    children, 
    onClick = () => {},
    className = '', 
    variant = 'primary', 
    size = 'md', 
    disabled = false 
}) => {
    const baseStyles = 'font-bold rounded-full transition-all duration-300 ease-in-out transform hover:translate-y-1';

    const variantStyles = {
        primary: 'bg-blue-500 text-white border-blue-500 hover:bg-blue-700',
        secondary: 'bg-gray-500 text-white border-gray-500 hover:bg-gray-700',
        transparent: 'bg-transparent text-blue-500 border-blue-500 hover:bg-blue-500 hover:text-white',
    };

    const sizeStyles = {
        sm: 'py-1 px-3 text-sm',
        md: 'py-2 px-12 text-base',
        lg: 'py-3 px-16 text-xl',
    };

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`} 
            disabled={disabled}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired, 
    onClick: PropTypes.func,
    className: PropTypes.string, 
    variant: PropTypes.oneOf(['primary', 'secondary', 'transparent']), 
    size: PropTypes.oneOf(['sm', 'md', 'lg']), 
    disabled: PropTypes.bool, 
};

export default Button;
