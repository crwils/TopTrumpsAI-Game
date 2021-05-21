import React from 'react';

function CardItem({card}){

    return(
        <div>
        <h1>Card Item Content</h1>
        <p>{card.name}</p>
        </div>

    );

};

export default CardItem;