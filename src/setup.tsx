import cat_1 from "./img/1.jpg";
import cat_2 from "./img/2.jpg";
import cat_3 from "./img/3.jpg";
import cat_4 from "./img/4.jpg";
import cat_5 from "./img/5.jpg";
import cat_6 from "./img/6.jpg";
import cat_7 from "./img/7.jpg";
import cat_8 from "./img/8.jpg";
import cat_9 from "./img/9.jpg";
import cat_10 from "./img/010.jpg";
import cat_11 from "./img/011.jpg";
import cat_12 from "./img/012.jpg";
import cat_13 from "./img/013.jpg";
import cat_14 from "./img/014.jpg";



import cardBack from "./img/card_back.jpg";

export type CardType = {
  id: string;
  flipped: boolean;
  backImage: string;
  frontImage: string;
  clickable: boolean;
  matchingCardId: string;
};

const cards: string[] = [
  cat_1,
  cat_2,
  cat_3,
  cat_4,
  cat_5,
  cat_6,
  cat_7,
  cat_8,
  cat_9,
  cat_10,
  cat_11,
  cat_12,
  cat_13,
  cat_14
];

export const createBoard = (): CardType[] =>
  [...cards, ...cards].map((card, i) => ({
    id: `card${i}`,
    flipped: false,
    backImage: cardBack,
    frontImage: card,
    clickable: true,
    matchingCardId:
      i < cards.length ? `card${i + cards.length}` : `card${i - cards.length}`,
  }));
