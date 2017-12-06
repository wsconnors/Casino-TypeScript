/// <reference path="Person/person.ts"/>

class Casino{
  displayEle: any;
  inputNameEle: any;
  inputAgeEle: any;
  inputCountEle: any;
  name:string;
  submit:any;

  constructor() {
    this.displayEle = document.getElementById("display");
    this.inputNameEle = document.getElementById("user_name");
    this.inputAgeEle = document.getElementById("user_age");
    this.inputCountEle = document.getElementById("user_amount");
    this.submit = document.getElementById("submit");
  }

  init():void{
    this.loginOptions();
  }

  loginOptions():void{
    this.displayEle.innerHTML += "Enter user information below";
    //this.submit.setAttribute(onclick,"casino.getLoginInput()");
  }

  getLoginInput():void{

    let person:Person = new Person(this.inputNameEle.value,parseInt(this.inputAgeEle.value),this.inputCountEle.value);
    this.displayEle.innerHTML += person.toString();
    this.submit.setAttribute("onclick","casino.differnt()")
  }

  differnt():void{
    console.log("different");
  }

  nameInput():void{
    this.displayEle.innerHTML += "<br>Enter name below";
  }

}
