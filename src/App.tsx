import { useEffect, useState } from 'react';
import Card from './components/Card';
import { createBoard } from './setup';
import { shuffleArray } from './utils';
import { CardType } from './setup';
import { Grid } from './App.styles';
import './App.css'
import GameOverlay from './components/GameOverlay';


const App = () => {
  const [cards, setCards] = useState<CardType[]>(shuffleArray(createBoard()));
  const [gameWon, setGameWon] = useState(false);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [clickedCard, setClickedCard] = useState<undefined | CardType>(undefined);
  const [attempts, setAttempts] = useState<number>(0);

    useEffect(() => {
    if (matchedPairs === cards.length / 2) {
      console.log('Game Won!', gameWon);
      setGameWon(true);


    }
  }, [matchedPairs]);

  const handleCardClick = (currentClickedCard: CardType) => {

    setCards(prev =>
      prev.map(card => (card.id === currentClickedCard.id ? { ...card, flipped: true, clickable: false } : card))
    );
    if (!clickedCard) {
      setClickedCard({ ...currentClickedCard });
      return;
    }

    if (clickedCard.matchingCardId === currentClickedCard.id) {
      setMatchedPairs(prev => prev + 1);
      setCards(prev =>
        prev.map(card =>
          card.id === clickedCard.id || card.id === currentClickedCard.id ? { ...card, clickable: false } : card
        )
      );
      setClickedCard(undefined);
      return;
    }

    setAttempts(prev => prev + 1);

    setTimeout(() => {
      setCards(prev =>
        prev.map(card =>
          card.id === clickedCard.id || card.id === currentClickedCard.id
            ? { ...card, flipped: false, clickable: true }
            : card
        )
      );
    }, 1000);

    setClickedCard(undefined);
  };

  const handlePlayAgain = () => {
    setCards(shuffleArray(createBoard()));
    setMatchedPairs(0);
    setGameWon(false);
    setAttempts(0);
  };

  return (
    <div>
      <div className='header'>
        <h1>Cute Cat Memory</h1>
        <p>Current attempts: {attempts}</p>
      </div>
      <Grid>
        {cards.map(card => (
          <Card key={card.id} card={card} callback={handleCardClick} />
        ))}
      </Grid>
      <GameOverlay gameWon={gameWon} onPlayAgain={handlePlayAgain} attempts={attempts} />
    </div>
  );
};

export default App;