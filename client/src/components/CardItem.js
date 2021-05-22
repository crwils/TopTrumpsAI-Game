import React from 'react';

const CardItem = ({ card }) => {
    return (
        <>  
            <li>{card.name}</li>
            <li>{card.most_lovable}</li>
            <li>{card.smartest}</li>
            <li>{card.fattest}</li>
            <li>{card.biggest_nerd}</li>
            <li>{card.greatest_anarchist}</li>
            <li>{card.walk_of_fame}</li>

        </>
    )
};

export default CardItem;