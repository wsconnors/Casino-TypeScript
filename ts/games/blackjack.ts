/// <reference path="cardGame.ts" />

class Blackjack extends CardGame {
    //player: any;
    player: Blackjack;
    dealer: Blackjack;
    display: any;
    input: any;
    button: any;
    // private var pot: number = 0;

    constructor(player: Player){
        super();
        this.display = document.getElementById("display");
        this.input = document.getElementById("text_input");
        this.button = document.getElementById("submit");
        this.player = new player: Blackjack;
        this.dealer = new dealer: Blackjack;
    }

}