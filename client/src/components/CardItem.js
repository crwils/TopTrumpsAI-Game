import React from 'react';
import './card.css';
import pp from './pp.jpg';

const CardItem = ({ card }) => {


    return (
        <>
            <body>
                <div class="card">
                    <div class="card__inner">
                        <div class="card__face card__face--back">
                            <h2>Top Trumps</h2>
                        </div>
                        <div class="card__face card__face--front">
                            <div class="card__content">
                                <div class="card__header">
                                    <img src={pp} alt="" class="pp" />
                                    <h2>{card.name}</h2>
                                </div>
                                <div class="card__body">
                                    <div><b>
                                        <p>Most Lovable: </p>
                                        <p>Smartest: </p>
                                        <p>Fattest: </p>
                                        <p>Biggest Nerd: </p>
                                        <p>Greatest Anarchist: </p>
                                        <p>Walk of Fame Rating: </p>
                                        </b>
                                    </div>
                                    <div>
                                        <p>{card.most_lovable}%</p>
                                        <p>{card.smartest}%</p>
                                        <p>{card.fattest}%</p>
                                        <p>{card.biggest_nerd}%</p>
                                        <p>{card.greatest_anarchist}%</p>
                                        <p>{card.walk_of_fame}%</p>
                                    </div>
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