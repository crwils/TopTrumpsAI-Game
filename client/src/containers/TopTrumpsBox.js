import React, {useState, useEffect} from 'react';
import Games from '../components/Games';
import CreateCardComponent from '../components/CreateCardComponent';
import HeaderComponent from '../components/HeaderComponent';
import SimpsonsService, {getCard} from '../services/GamesService';
import './main-page.css';


function TopTrumpsBox(){
    const [cards, setCards] = useState([]);

    useEffect (() => {
        SimpsonsService.getCard()
            .then(cards => setCards(cards));
        
    }, []);

  

    

    return(
        
        <div className="tt__box--header">
            <h1>Top Trumps Game!</h1>
            <HeaderComponent />
            <Games cards={cards} />
            <CreateCardComponent />
        </div>

    );
};

export default TopTrumpsBox;