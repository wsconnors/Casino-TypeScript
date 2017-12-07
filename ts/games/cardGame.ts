/// <reference path="../Util/deck.ts"/>
/// <reference path="../Player/cardPlayer.ts"/>
/// <reference path="../Player/cardDealer.ts"/>
class CardGame{
  deck:Card[];
  constructor(){
    this.deck = new Deck().getDeck();
  }

  dealCards(dealer:CardDealer,player:CardPlayer,amount:number){
    dealer.clearHand();
    player.clearHand();
    for (let i = 0; i <amount; i++) {
      dealer.addCard(this.deck.pop());
      player.addCard(this.deck.pop());
    }
  }

  giveCards(player:CardPlayer,amount:number){
    for (let i = 0; i < amount; i++) {
        player.addCard(this.deck.pop());
    }
  }
}
