/// <reference path="../Person/crapsPerson.ts"/>
class Craps{
  crapsPlayer: CrapsPlayer;
  bet:number;
  displayEle:any;
  buttonEle:any;

  constructor(){
    this.displayEle = document.getElementById("display");
    this.buttonEle = document.getElementById("submit");
  }

  init():void{
    this.displayEle = "Welcome to craps!";
  }

  

}
