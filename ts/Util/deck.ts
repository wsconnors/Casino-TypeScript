/// <reference path="card.ts"/>

class Deck {

  private cards: Card[];
  private suits: string[];
  private values: string[]

  constructor() {
    this.cards = [];
    this.suits = ["HEARTS","DIAMONDS","CLUBS","SPADES"];
    this.values = ["ONE","TWO","THREE","FOUR","FIVE","SIX","SEVEN","EIGHT","NINE","TEN","JACK","QUEEN","KING","ACE"]
  }

  createFullDeck(): void{//Card[] {
    for (let suit in this.suits) {
        for (let value in this.values) {
            this.cards.push(new Card(this.suits[suit],this.values[value]));
        }
    }
    this.shuffle();
    //document.getElementById("display").innerHTML += this.cards.join("<br>");
  }

  shuffle():void{
    for (let i = 0; i < this.cards.length; i++) {
        let randonNum: number = Math.floor(Math.random()*this.cards.length)+1;
        console.log(randonNum);
        [this.cards[i], this.cards[randonNum]] = [this.cards[randonNum],this.cards[i]];
    }
  }


}
