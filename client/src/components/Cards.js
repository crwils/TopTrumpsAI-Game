import React from 'react';
import CardItem from './CardItem';



function Cards({cards}){
    const cardsNodes = cards.map(card => {
        return <CardItem card={card}/>
    })


    return (
        <section id="simpsonsCards">
            <h2>Simpsons Cards</h2>
            <div>
                {cardsNodes}
            </div>
        </section>
    )


};

export default Cards;