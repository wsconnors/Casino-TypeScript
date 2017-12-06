/// <reference path="card.ts"/>
/// <reference path="suit.ts"/>

class Deck {

  private cards: Card[];

  constructor() {
    this.cards = [];
  }

  createFullDeck(): void{//Card[] {
    for (let suit in Suit){
      console.log(suit);

    }
  }
}
