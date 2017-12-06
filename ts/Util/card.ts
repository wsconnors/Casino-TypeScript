
class Card{
  private suit: string;
  private value: string;

  constructor(suit:string,value: string){
    this.suit = suit;
    this.value = value;
  }
  getSuit(): string{
    return this.suit;
  }
  getValue(): string{
    return this.value;
  }

  toString():string{
    return "Suit: "+this.suit+"/Value: "+this.value;
  }
}
