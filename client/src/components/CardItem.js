import React from 'react';

const CardItem = ({ card }) => {
    return (
        <>  
            <hr></hr>
            <li>name: {card.name}</li>
            <li>most lovable: {card.most_lovable}</li>
            <li>smartest: {card.smartest}</li>
            <li>fattest: {card.fattest}</li>
            <li>biggest nerd: {card.biggest_nerd}</li>
            <li>greatest anarchist: {card.greatest_anarchist}</li>
            <li>walk of fame: {card.walk_of_fame}</li>

        </>
    )
};

export default CardItem;