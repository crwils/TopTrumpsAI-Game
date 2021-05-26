import React from 'react';
import './card.css';
import simpsons from './images/simpsonslogo.png';
// import './test.css';

const Player2CardItem = ({ setClicked, player1Turn, card, handleClick, isFlipped, flip, setFlip, chosenAttribute, clicked}) => { 
    
    return (

                <div className="card">
                    <div 
                    className="card__inner"
                    flip={flip}
                    onAnimationEnd={() => {
                        setFlip(0)
                        setClicked(false)}}>
                        <div className={!player1Turn ? 'card__face card__face--front-selected': 'card__face card__face--front'}>
                            {/* <h2>Top Trumps</h2> */}
                            <img className="card__logo" src={simpsons} alt="" />
                        </div>
                        <div className={!player1Turn ? 'card__face card__face--back-selected': 'card__face card__face--back'}>
                            <div className="card__content">
                                <div className="card__header">
                                    <img src={card.image} className="pp" alt="" />
                                    <h2 className="char-name">{card.name}</h2>
                                </div>
                                <div className="card__body">
                                    <div>
                                        <p id='most_lovable' className={chosenAttribute ==='Most Lovable' ? 'most-lovable-background-colour' : 'no-background-colour'}>Most Lovable: </p>
                                        <p  id='smartest' className={chosenAttribute ==='Smartest' ? 'most-lovable-background-colour' : 'no-background-colour'}>Smartest: </p>
                                        <p id='fattest' className={chosenAttribute ==='Fattest' ? 'most-lovable-background-colour' : 'no-background-colour'}>Fattest: </p>
                                        <p id='biggest_nerd' className={chosenAttribute ==='Biggest Nerd' ? 'most-lovable-background-colour' : 'no-background-colour'}>Biggest Nerd: </p>
                                        <p id='greatest_anarchist' className={chosenAttribute ==='Greatest Anarchist' ? 'most-lovable-background-colour' : 'no-background-colour'}>Greatest Anarchist: </p>
                                        <p id='walk_of_fame' className={chosenAttribute ==='Walk Of Fame' ? 'most-lovable-background-colour' : 'no-background-colour'}>Walk of Fame Rating: </p>
                                    </div>
                                    <div>
                                        <p id='most_lovable'>{card.most_lovable}%</p>
                                        <p id='smartest'>{card.smartest}%</p>
                                        <p id='fattest'>{card.fattest}%</p>
                                        <p id='biggest_nerd'>{card.biggest_nerd}%</p>
                                        <p id='greatest_anarchist'>{card.greatest_anarchist}%</p>
                                        <p id='walk_of_fame'>{card.walk_of_fame}%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
};

export default Player2CardItem;