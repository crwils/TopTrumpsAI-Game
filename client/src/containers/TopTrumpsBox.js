import React, {useState, useEffect} from 'react';
import Games from '../components/Games';
import CreateCardComponent from '../components/CreateCardComponent';
import HeaderComponent from '../components/HeaderComponent';
// import SimpsonsService from '../services/GamesService';
import Cards from '../components/Cards';

function TopTrumpsBox(){
    const [cards, setCards] = useState([]);

    useEffect (() => {
        // SimpsonsService.getCard()
        //     .then(cards => setCards(cards));
        getCards();
    }, []);

    const getCards = function(){
        fetch('http://localhost:5000/api/simpsons')
            .then(results => results.json())
            .then(cards => setCards(cards))
    }

    return(
        <div>
            <h1>Top Trumps Box Content</h1>
            <HeaderComponent />
            <Games/>
            <CreateCardComponent />
            <Cards cards={cards}/> 
        </div>

    );
};

export default TopTrumpsBox;