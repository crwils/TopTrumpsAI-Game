import React from 'react';
import './card.css';
import pp from './pp.jpg';
import './test.css';

const CardItem = ({ card, handleClick }) => { 

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
                                    <div>
                                        <p onClick={handleClick} id='most_lovable'>Most Lovable: </p>
                                        <p onClick={handleClick} id='smartest'>Smartest: </p>
                                        <p onClick={handleClick} id='fattest'>Fattest: </p>
                                        <p onClick={handleClick} id='biggest_nerd'>Biggest Nerd: </p>
                                        <p onClick={handleClick} id='greatest_anarchist'>Greatest Anarchist: </p>
                                        <p onClick={handleClick} id='walk_of_fame'>Walk of Fame Rating: </p>

                                    </div>
                                    <div>
                                        <p onClick={handleClick} id='most_lovable'>{card.most_lovable}%</p>
                                        <p onClick={handleClick} id='smartest'>{card.smartest}%</p>
                                        <p onClick={handleClick} id='fattest'>{card.fattest}%</p>
                                        <p onClick={handleClick} id='biggest_nerd'>{card.biggest_nerd}%</p>
                                        <p onClick={handleClick} id='greatest_anarchist'>{card.greatest_anarchist}%</p>
                                        <p onClick={handleClick} id='walk_of_fame'>{card.walk_of_fame}%</p>
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

