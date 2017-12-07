/// <reference path="Player/player.ts"/>
/// <reference path="games/goFish.ts"/>

class Casino{
  displayEle: any;
  textInput: any;
  name:string;
  submit:any;
  age:number;
  amount:number;
  player:Player;
  public goFish;

  constructor() {
    this.displayEle = document.getElementById("display");
    this.textInput = document.getElementById("text_input");
    this.submit = document.getElementById("submit");
  }

  init():void{
    this.loginOptions();
    //this.gameOptions();
  }

  loginOptions():void{
    this.displayEle.innerHTML = "Enter name";
  }

  getName():void{
    this.name = this.textInput.value;
    this.textInput.value = "";
    this.textInput.setAttribute("placeholder","AGE");
    this.submit.setAttribute("onclick","casino.getAge()")
    this.displayEle.innerHTML = "Enter age";
  }

  getAge():void{
    this.age = parseInt(this.textInput.value);
    this.textInput.value = "";
    this.textInput.setAttribute("placeholder","AMOUNT");
    this.submit.setAttribute("onclick","casino.getAmount()")
    this.displayEle.innerHTML = "Enter amount";
  }

  getAmount():void{
    this.amount = parseInt(this.textInput.value);
    this.textInput.value = "";
    this.player = new Player(this.name,this.age,this.amount);
    document.getElementById("userInfo").innerHTML = this.player.toString();
    document.getElementById("userInfo").hidden = false;
    this.gameOptions();
  }

  gameOptions():void{
    this.displayEle.innerHTML = "What game would you like to play?<br>Options:<br>| BLACKJACK | GO FISH | CRAPS |"
    this.submit.setAttribute("onclick","casino.takeOptions()")
    this.textInput.setAttribute("placeholder","GAME")
  }

  takeOptions():void{
    let input:string = this.textInput.value;
    switch(input.toLowerCase()){
      case "go fish":{
        this.goFish = new GoFish(this.player);
        this.goFish.init();
      }
    }
  }

  nameInput():void{
    this.displayEle.innerHTML += "<br>Enter name below";
  }

  getPlayer():Player{
    return this.player;
  }

}
