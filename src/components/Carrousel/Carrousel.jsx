import React, { useState } from 'react';
import next from '../../assets/Next.png'
import prev from '../../assets/Prev.png'
import nextMobile from '../../assets/Next-mobile.png'
import prevMobile from '../../assets/Prev-mobile.png'

const Carrousel = ({ title, pictures }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const prevImage = () => {
        // Si on est à la première image, on passe à la dernière image
        const newIndex = currentImageIndex === 0 ? pictures.length - 1 : currentImageIndex - 1;
        setCurrentImageIndex(newIndex);
    };

    const nextImage = () => {
        // Si on est à la dernière image, on passe à la première image
        const newIndex = currentImageIndex === pictures.length - 1 ? 0 : currentImageIndex + 1;
        setCurrentImageIndex(newIndex);
    };

    return (
        <section className="carrousel">
            <button className='carrousel__button carrousel__button--prev' onClick={prevImage}>
                <img src={prev} alt="Précédent" />
            </button>
            <button className='carrousel__button-mobile carrousel__button-mobile--prev' onClick={prevImage}>
                <img src={prevMobile} alt="Précédent" />
            </button>
            <img
                className="carrousel__img"
                src={pictures[currentImageIndex]}
                alt={`${title} ${currentImageIndex + 1}`}
            />
            <button className='carrousel__button carrousel__button--next' onClick={nextImage}>
                <img src={next} alt="Suivant" />
            </button>
            <button className='carrousel__button-mobile carrousel__button-mobile--next' onClick={nextImage}>
                <img src={nextMobile} alt="Suivant" />
            </button>
            {pictures.length > 1 && 
                <p className="carrousel__number">
                    {currentImageIndex + 1}/{pictures.length}
                </p>}
        </section>
    );
};

export default Carrousel;
