import React, { useState } from 'react';
import './card.css';
import pp from './images/pp.jpg';
import './test.css';

const CardItem = ({ playerWins, card, handleClick, handleClick2, isFlipped, setIsFlipped, chosenAttribute}) => {



    return (
        (!playerWins ?
        <div>
            <div className="card">
                <div id="card__inner">
                    <div className="card__face card__face--back">
                        <h2>Top Trumps</h2>
                    </div>
                    <div className="card__face card__face--front">
                        <div className="card__content">
                            <div className="card__header">
                                <img src={pp} className="pp" alt="" />
                                <h2>{card.name}</h2>
                            </div>
                            <div className="card__body">
                                <div>
                                    <p onClick={handleClick} className={chosenAttribute ==='Most Lovable' ? 'most-lovable-background-colour' : 'no-background-colour'} id='most_lovable'>Most Lovable: </p>
                                    <p onClick={handleClick} id='smartest' className={chosenAttribute ==='Smartest' ? 'most-lovable-background-colour' : 'no-background-colour'}>Smartest: </p>
                                    <p onClick={handleClick} id='fattest' className={chosenAttribute ==='Fattest' ? 'most-lovable-background-colour' : 'no-background-colour'}>Fattest: </p>
                                    <p onClick={handleClick} id='biggest_nerd' className={chosenAttribute ==='Biggest Nerd' ? 'most-lovable-background-colour' : 'no-background-colour'}>Biggest Nerd: </p>
                                    <p onClick={handleClick} id='greatest_anarchist' className={chosenAttribute ==='Greatest Anarchist' ? 'most-lovable-background-colour' : 'no-background-colour'}>Greatest Anarchist: </p>
                                    <p onClick={handleClick} id='walk_of_fame' className={chosenAttribute ==='Walk Of Fame' ? 'most-lovable-background-colour' : 'no-background-colour'}>Walk of Fame Rating: </p>
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
        </div>
        : null)
    )
};

export default CardItem;


