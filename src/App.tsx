import { useEffect, useState } from "react";
import Card from "./components/Card";
import { createBoard } from "./setup";
import { shuffleArray } from "./utils";
import { CardType } from "./setup";
import { Grid } from "./App.styles";
import './App.css'
const App = () => {
  const [cards, setCards] = useState<CardType[]>(shuffleArray(createBoard()));
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [gameWon, setGameWon] = useState(false);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [clickedCard, setClickedCard] = useState<undefined | CardType>(
    undefined
  );

  useEffect(() => {
    if (matchedPairs === cards.length / 2) {
      console.log("Game Won!");
      console.log(gameWon)
      setGameWon(true);
    }
  }, [matchedPairs]);

  const handleCardClick = (currentClickedCard: CardType) => {
    setCards((prev) =>
      prev.map((card) =>
        card.id === currentClickedCard.id
          ? { ...card, flipped: true, clickable: false }
          : card
      )
    );
    if (!clickedCard) {
      setClickedCard({ ...currentClickedCard });
      return;
    }
    if (clickedCard.matchingCardId === currentClickedCard.id) {
      setMatchedPairs((prev) => prev + 1);
      setCards((prev) =>
        prev.map((card) =>
          card.id === clickedCard.id || card.id === currentClickedCard.id
            ? { ...card, clickable: false }
            : card
        )
      );
      setClickedCard(undefined);
      return;
    }
    setTimeout(() => {
      setCards((prev) =>
        prev.map((card) =>
          card.id === clickedCard.id || card.id === currentClickedCard.id
            ? { ...card, flipped: false, clickable: true }
            : card
        )
      );
    }, 1000);

    setClickedCard(undefined);
  };

  return (
    <div>
      <div className="header"><h1>Memory</h1></div>
      <Grid>
        {cards.map((card) => (
          <Card key={card.id} card={card} callback={handleCardClick} />
        ))}
      </Grid>
    </div>
  );
};

export default App;
