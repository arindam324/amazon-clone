import {faStar as solidStar, faStarHalfAlt as halfStar, faStarOfLife as emptyStar} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import React from 'react';

interface Props {
    rating: number;
}

const StarRating: React.FC<Props> = ({rating}) => {
    const numStars = Math.floor(rating);
    const hasHalfStar = rating - numStars >= 0.5;

    const stars = [];

    for (let i = 0; i < numStars; i++) {
        stars.push(<FontAwesomeIcon className={"h-4"} key={`star-${i}`} icon={solidStar}/>);
    }

    if (hasHalfStar) {
        stars.push(<FontAwesomeIcon key="half-star" className={"h-4"} icon={halfStar}/>);
    }

    // for (let i = stars.length; i < 5; i++) {
    //     stars.push(<FontAwesomeIcon className={"h-4"} key={`empty-star-${i}`} icon={emptyStar}/>);
    // }

    return <div className="star-rating flex items-center space-x-2">{stars}</div>;
};

export default StarRating;
