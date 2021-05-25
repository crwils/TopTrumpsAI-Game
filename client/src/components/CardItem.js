import React, { useState } from 'react';
import './card.css';
import pp from './images/pp.jpg';
import simpsons from './images/simpsonslogo.png';
// import './test.css';

const CardItem = ({ playerWins, card, handleClick, handleClick2, isFlipped, setIsFlipped }) => {



    return (
        <div>
            <div className="card">
                <div className="card__inner">
                <div className="card__face card__face--front">
                        <div className="card__content">
                            <div className="card__header">
                                <img src={pp} className="pp" alt="" />
                                <h2>{card.name}</h2>
                            </div>
                            <div className="card__body">
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
                    <div className="card__face card__face--back">
                        <h2>Top Trumps</h2>
                        {/* <img src={simpsons} alt="" /> */}
                    </div>
                </div>
            </div>
        </div>
     
    )
};

export default CardItem;


