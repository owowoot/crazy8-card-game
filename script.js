class Player {
    constructor(name, hand) {
        this.name = name;
        this.hand = hand;
    };
}

class Deck {
    constructor(cards) {
        this.cards = cards;
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

const aceOfSpades = new Card(CardValue.ACE, CardSuit.SPADES)
console.log(aceOfSpades)
// module.exports = Card;
