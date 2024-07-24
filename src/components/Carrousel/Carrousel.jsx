import React, { useState } from 'react'
import next from '../../assets/Next.png'
import prev from '../../assets/Prev.png'
import nextMobile from '../../assets/Next-mobile.png'
import prevMobile from '../../assets/Prev-mobile.png'

const Carrousel = ({ title, pictures }) => {

    // Cette ligne initialise l'état local "currentImageIndex" à 0
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const prevImage = () => {
        // Si l'index est à 0 (image 1), alors, ce code affichera la dernière image du tableau. Sinon il décrémente. 
        const newIndex = currentImageIndex === 0 ? pictures.length - 1 : currentImageIndex - 1
        setCurrentImageIndex(newIndex);
    };

    const nextImage = () => {
        // Si l'index actuel est égale à l'index de la dernière page, alors, ce code affichera l'image 1 (indoex 0). Sinon il incrémente. 
        const newIndex = currentImageIndex === pictures.length - 1 ? 0 : currentImageIndex + 1
        setCurrentImageIndex(newIndex)
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
                alt={`${title}`}
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
    )
}

export default Carrousel
