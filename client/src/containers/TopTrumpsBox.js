import React, {useState, useEffect} from 'react';
import Games from '../components/Games';
import CreateCardComponent from '../components/CreateCardComponent';
import HeaderComponent from '../components/HeaderComponent';
import SimpsonsService, {getCard} from '../services/GamesService';
import '../components/card.css';


function TopTrumpsBox(){
    const [cards, setCards] = useState([]);

    useEffect (() => {
        SimpsonsService.getCard()
            .then(cards => setCards(cards));
        
    }, []);

    

    return(
        <div>
            <h1>Top Trumps Box Content</h1>
            <HeaderComponent />
            <Games cards={cards}/>
            <CreateCardComponent />
        </div>

    );
};

export default TopTrumpsBox;