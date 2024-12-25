import cat_1 from './img/1.jpg'
import cat_2 from './img/2.jpg'
import cat_3 from './img/3.jpg'
import cat_4 from './img/4.jpg'
import cat_5 from './img/5.jpg'
import cat_6 from './img/6.jpg'
import cat_7 from './img/7.jpg'
import cat_8 from './img/8.jpg'

import cardBack from './img/card_back.jpg'

export type CardType = {
    id: string;
    flipped: boolean;
    backImage: string;
    frontImage: string;
    clickable: boolean;
    matchingCardId: string;
}

const cards: string[] = [cat_1, cat_2, cat_3, cat_4, cat_5, cat_6, cat_7, cat_8]

export const createBoard = (): CardType[] =>
[...cards, ...cards].map((card, i) => ({
    id: `card${i}`,
    flipped: false,
    backImage: cardBack,
    frontImage: card,
    clickable: true,
    matchingCardId: i < cards.length ? `card${i + card.length}` : `card${i - cards.length}`}))