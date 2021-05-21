import React from 'react';
import CardItem from './CardItem';

const Cards = ({cards}) => {
    const cardItems = cards.map((card, index) => {
        return <CardItem card={card} key={index}/>
    })

    return (
        <div>
            <ul>
                <p>{cardItems}</p>
            </ul>
        </div>
    )
}



export default Cards;