import React from 'react';
import CardItem from './CardItem';

const Cards = ({ cards }) => {


    const cardItem = () => {

        return (

            <body>
                <div class="card">
                    <div class="card__inner">
                        <div class="card__face card__face--front">
                            <h2>Top Trumps</h2>
                        </div>
                        <div class="card__face card__face--back">
                            <div class="card__content">
                                <div class="card__header">
                                    <img src="pp.jpg" alt="" class="pp" />
                                    <h2>Homer Simpson</h2>
                                </div>
                                <div class="card__body">
                                    <div>
                                        <p>Most Lovable: </p>
                                        <p>Smartest: </p>
                                        <p>Fattest:</p>
                                        <p>Biggest Nerd: </p>
                                        <p>Greatest Anarchist: </p>
                                        <p>Walk of Fame Rating: </p>
                                    </div>
                                    <div>
                                        <p>92%</p>
                                        <p>76%</p>
                                        <p>94%</p>
                                        <p>48%</p>
                                        <p>94%</p>
                                        <p>98%</p>
                                    </div>
                                </div>
                                <div class="char__bio">
                                    <p>Homer Simpson is a simple man. A man who through punishing trial and error has proven that
                                    even one's loftiest goals are attainable provided you set them low enough! Homer deeply
                            loves and is intensely devoted to his wife and kids - when it occurs to him.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <script src="main.js"> </script>
            </body>

        )
    }

    const cardDetails = cards.map((card, index) => {
        return <CardItem card={card} key={index} />
    })


    return (
        <>
            {cardItem}
            {cardDetails}
        </>
    )
}



export default Cards;