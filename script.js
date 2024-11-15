const shuffleDeck = require('./utils')
class Game {
    // tracks validity and mechanisms
    constructor() {

    }
}
class Player {
    constructor(name, hand) {
        this.name = name;
        this.hand = hand;
    };
    playCard() {

    }
    drawCard() {

    }
}

class Deck {
    constructor() {
        this.cards = this.generateDeck();
    }
    generateDeck() {
        const deck = []
        for (const suit in CardSuit) {
            for (const value in CardValue) {
                deck.push(new Card(value, suit));
            }
        }
        return deck;
    }
    shuffleDeck() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
        };
    }

}

const CardColor = {
    RED: 'RED',
    BLACK: 'BLACK'
}

const CardSuit = {
    DIAMONDS: 'DIAMONDS',
    CLUBS: 'CLUBS',
    HEARTS: 'HEARTS',
    SPADES: 'SPADES'
}

const CardValue = {
    ACE: 'ACE',
    TWO: '2',
    THREE: '3',
    FOUR: '4',
    FIVE: '5',
    SIX: '6',
    SEVEN: '7',
    EIGHT: '8',
    NINE: '9',
    TEN: '10',
    JACK: 'JACK',
    QUEEN: 'QUEEN',
    KING: 'KING'
}

class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
        this.color = this.getCardColor();
    }
    getCardColor() {
        if (this.suit === CardSuit.HEARTS || this.suit === CardSuit.DIAMONDS) {
            return CardColor.RED;
        } else {
            return CardColor.BLACK;
        }
    }
}

// const aceOfSpades = new Card(CardValue.ACE, CardSuit.SPADES);
// console.log(aceOfSpades);
module.default = Card;
module.default = Deck;

const deckOne = new Deck();
console.log(deckOne)
console.log(deckOne.shuffleDeck())
console.log(deckOne)
