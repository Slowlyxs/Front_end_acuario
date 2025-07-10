import React from 'react';

interface CalificacionProps {
    rating: number;
}

const Calificacion: React.FC<CalificacionProps> = ({ rating }) => {
    // Función para obtener el texto según el rating
    const getRatingText = (rating: number): string => {
        switch (rating) {
            case 1:
                return "Poco cotizado";
            case 2:
                return "Algo cotizado";
            case 3:
                return "Moderadamente cotizado";
            case 4:
                return "Muy cotizado";
            case 5:
                return "Altamente cotizado";
            default:
                return "Sin calificación";
        }
    };

    return (
        <div className="flex items-center gap-2">
            <div className="rating rating-sm">
                {[1, 2, 3, 4, 5].map((star) => (
                    <input
                        key={star}
                        type="radio"
                        name={`rating-${Math.random()}`} // Unique name for each instance
                        className={`mask mask-star-2 ${star <= rating ? 'bg-orange-400' : 'bg-gray-300'}`}
                        disabled
                    />
                ))}
            </div>
            <span className="text-sm text-gray-500">({getRatingText(rating)})</span>
        </div>
    );
};

export default Calificacion;