import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";

const Card = ({ 
    image, 
    title = null,
    description = null,
    className = "", 
    isServices = false,
    href = null
}) => {
    const cardClasses = classNames(
        'relative shadow-md rounded-lg overflow-hidden cursor-pointer',
        className,
        { 'group hover:scale-105 transition-transform duration-300': isServices }
    );

    const CardContent = (
        <div className={cardClasses}>
            {image && (
                <div className="absolute inset-0">
                    <img
                        src={image}
                        alt={title ? title : "Descripción de la imagen"}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                </div>
            )}

            <div className={`relative p-1 sm:p-4 h-full flex flex-col ${
                isServices ? 'justify-center items-center' : 'justify-between'
            }`}>
                {title && (
                    <h2 className={`sm:text-xl md:text-2xl font-medium text-white mb-2 ${
                        isServices ? 'text-center group-hover:scale-110 transition-transform duration-300' : ''
                    }`}>
                        {title}
                    </h2>
                )}

                {!isServices && description && (
                    <p className="text-white text-xs sm:text-base mt-auto">
                        {description}
                    </p>
                )}
            </div>
        </div>
    );

    return href ? (
        <Link to={href} className={cardClasses}>
            {CardContent}
        </Link>
    ) : (
        <div className={cardClasses}>
            {CardContent}
        </div>
    );
};

Card.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    className: PropTypes.string,
    isServices: PropTypes.bool,
    href: PropTypes.string,
};

export default Card;
