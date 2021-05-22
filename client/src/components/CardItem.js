import React from 'react';
import './card.css';
import pp from './pp.jpg';

const CardItem = ({ card, cardItem, event }) => {

    // const cardOne = event.target['card'].value;

    // cardOne.addEventListener('click', function () {
        // cardOne.classList.toggle('is-flipped');


    return (
        <>
            <body>
                <div className="card">
                    <div className="card__inner">
                        <div className="card__face card__face--back">
                            <h2>Top Trumps</h2>
                        </div>
                        <div className="card__face card__face--front">
                            <div className="card__content">
                                <div className="card__header">
                                    <img src={pp} alt="" className="pp" />
                                    <h2>{card.name}</h2>
                                </div>
                                <div className="card__body">
                                    <div className="card_details">
                                        <p>Most Lovable:</p>
                                        <p>Smartest: </p>
                                        <p>Fattest: </p>
                                        <p>Biggest Nerd:  </p>
                                        <p>Greatest Anarchist: </p>
                                        <p>Walk of Fame Rating: </p>
                                        <p>{cardItem}</p>
                                    </div>
                                    <div className="card_details">
                                        <p>{card.most_lovable}% </p>
                                        <p>{card.smartest}% </p>
                                        <p>{card.fattest}% </p>
                                        <p>{card.biggest_nerd}%</p>
                                        <p>{card.greatest_anarchist}%</p>
                                        <p>{card.walk_of_fame}%</p>
                                    </div>
                                </div>
                                <div className="char__bio">
                                    {/* <p>Homer Simpson is a simple man. A man who through punishing trial and error has proven that
                                    even one's loftiest goals are attainable provided you set them low enough! Homer deeply
                                    loves and is intensely devoted to his wife and kids - when it occurs to him.</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <script src="main.js"> </script>
            </body>
        </>
    )
};

export default CardItem;

/* <div>
    <p>Most Lovable: {card.most_lovable} </p>
    <p>Smartest: {card.smartest} </p>
    <p>Fattest: {card.fattest} </p>
    <p>Biggest Nerd: {card.biggest_nerd} </p>
    <p>Greatest Anarchist: {card.greatest_anarchist}</p>
    <p>Walk of Fame Rating: {card.walk_of_fame}</p>
    <p>{cardItem}</p>
</div> */