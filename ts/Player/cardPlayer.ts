/// <reference path="player.ts"/>
class CardPlayer extends Player{
  hand:Card[];
  constructor(){
    super("CardPlayer",0,0);
    this.hand = [];
  }
  getHand():Card[]{
    return this.hand;
  }
  addCard(card:Card):void{
    this.hand.push(card);
  }
  clearHand(){
    this.hand = [];
  }

  setHand(hand:Card[]):void{
    this.hand = hand;
  }

  displayHand():void{
    let displayHand = document.getElementById("playerHand");
    displayHand.innerHTML = "";
    this.hand.sort();
    for (let i = 0; i < this.hand.length; i++) {
        let currentCard: Card = this.hand[i]
        displayHand.innerHTML += "<img src = ././images/cards/"+currentCard.getFaceValue()+"_of_"+currentCard.getSuit()+".png width=\"90\"height=\130\">";
    }
  }

  logHand():void{
    for (let i = 0; i < this.hand.length; i++) {
        console.log(this.hand[i].getFaceValue()+" "+this.hand[i].getSuit());
    }
  }

}
