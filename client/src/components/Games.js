import React from 'react';
import CardItem from './CardItem';


const Cards = ({ cards }) => {

    const cardDetails = cards.map((card, index) => {
        return (
            <CardItem card={card} />
        )
    })



    return (
        <>
            <div className="card__details__flex">
                {cardDetails}
            </div>
        </>
    )
}



export default Cards;