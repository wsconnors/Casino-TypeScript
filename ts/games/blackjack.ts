/// <reference path="../Player/blackjackPlayer.ts"/>

class Blackjack extends CardGame{
  player:BlackjackPlayer;
  dealer:BlackjackDealer;
  display:any;
  input:any;
  buttom:any;
  constructor(player:Player){
    super();
    this.display = document.getElementById("display");
    this.input = document.getElementById("text_input");
    this.buttom = document.getElementById("submit");
    this.player = new BlackjackPlayer(player);
    this.dealer = new BlackjackDealer();
  }

  init():void{
    document.getElementById("blackjack").hidden = false;
  }
}
