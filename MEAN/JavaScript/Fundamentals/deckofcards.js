function DeckConstructor() {
    var suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    var values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    var deck;

    var generateDeck = function() {
        deck = [];
        for(var i = 0; i < suits.length; i++){
            for(var j = 0; j < values.length; j++){

                var card = {
                    suit: suits[i],
                    value: values[j],
                };

                deck.push(card);
            }
        }
    }
    generateDeck();

    this.shuffle = function() {
        var numShuffles = Math.floor((Math.random() * 100) + 50);
        for(var x = 0; x <= numShuffles; x++){
            var randomInt1 = Math.floor(Math.random() * deck.length);
            var randomInt2 = Math.floor(Math.random() * deck.length);
            var temp = deck[randomInt1];
            deck[randomInt1] = deck[randomInt2];
            deck[randomInt2] = temp;
        }
        return this;
    }

    this.reset = generateDeck;

    this.getDeck = function(){
        return deck;
    }

    this.show = function() {
        console.log(deck);
        console.log(deck.length);
    }

}

DeckConstructor.prototype.deal = function() {
    return this.getDeck().pop();
}

var myDeck = new DeckConstructor();

myDeck.shuffle();

myDeck.show();
// function CardContructor(suit, value) {
//     this.suit = suit;
//     this.value = value;
// }

console.log(myDeck.deal());

console.log(myDeck.show());