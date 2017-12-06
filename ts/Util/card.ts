/// <reference path="suit.ts"/>

class Card{
  private suit: Suit;
  private value: number;

  constructor(suit:Suit,value: number){
    this.suit = suit;
    this.value = value;
  }
  getSuit(): Suit{
    return this.suit;
  }
  getValue(): number{
    return this.value;
  }
}
