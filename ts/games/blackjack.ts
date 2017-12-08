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
    this.player = new GoFishPlayer(player);
    this.dealer = new GoFishPlayer(new Player("Dealer",0,0));
  }
}
