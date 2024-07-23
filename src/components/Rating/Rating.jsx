import React from 'react';
import starColor from '../../assets/Star-color.png';
import starGrey from '../../assets/Star-grey.png';

const Rating = ({ rating }) => {
    const totalStars = 5;

    return (
        <div className="rating">
            {[...Array(totalStars)].map((_, index) => (
                <img className="rating__star"
                    key={index} 
                    src={index < rating ? starColor : starGrey} 
                    alt="star" 
                />
            ))}
        </div>
    );
};



export default Rating;
