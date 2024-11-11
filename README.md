# crazy8-card-game

## Requirements
```
A deck of cards
    Suits (clubs, spades, hearts, diamonds), Numbers (2-10), Letters (A, J, Q, K), color (red, black)
Game components
    Game start
        the deck will be shuffled
        when game starts, every player will be dealt 8 cards from the deck

Different Cards have different effects
    8 - wild card
        must select next suit to play
    J - Skip turn
    Q - reverse turn order
    A - draw 4
    2 - draw 2
```
Game is over when one player is out of cards
Logic to select which card to play
    Can put down multiple cards if suit or number matches
    Can only play card if suit or value matches
    Can choose to not play and draw from deck


### Milestones
1. basic terminal interface versus computer
2. two player
3. web ui
4. web socket for multi client game play
5. multiplayer?