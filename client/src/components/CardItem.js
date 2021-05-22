import React from 'react';

const CardItem = ({ card }) => {
    return (
        <>
            <div class="card">
                <div class="card__inner">
                    <div class="card__face card__face--front">
                        <h2>Top Trumps</h2>
                    </div>
                    <div class="card__face card__face--back">
                        <div class="card__content">
                            <div class="card__header">
                                <img src="pp.jpg" alt="" class="pp" />
                                <h2>{card.name}</h2>
                            </div>
                            <div class="card__body">
                                <div>
                                    <p>Most Lovable: {card.most_lovable} </p>
                                    <p>Smartest: {card.smartest} </p>
                                    <p>Fattest: {card.fattest} </p>
                                    <p>Biggest Nerd: {card.biggest_nerd} </p>
                                    <p>Greatest Anarchist: {card.greatest_anarchist}</p>
                                    <p>Walk of Fame Rating: {card.walk_of_fame}</p>
                                </div>
                                <div>
                                    
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
        </>
    )
};

export default CardItem;