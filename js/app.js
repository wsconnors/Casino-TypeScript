var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = (function () {
    function Person(name, age, amount) {
        this.name = name;
        this.age = age;
        this.amount = amount;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    Person.prototype.getAmount = function () {
        return this.amount;
    };
    Person.prototype.toString = function () {
        return "<br>Name: " + this.name + "<br>Age: " + this.age + "<br>Amount: " + this.amount;
    };
    return Person;
}());
/// <reference path="Person/person.ts"/>
var Casino = (function () {
    function Casino() {
        this.displayEle = document.getElementById("display");
        this.inputNameEle = document.getElementById("user_name");
        this.inputAgeEle = document.getElementById("user_age");
        this.inputCountEle = document.getElementById("user_amount");
        this.submit = document.getElementById("submit");
    }
    Casino.prototype.init = function () {
        this.loginOptions();
    };
    Casino.prototype.loginOptions = function () {
        this.displayEle.innerHTML += "Enter user information below";
        //this.submit.setAttribute(onclick,"casino.getLoginInput()");
    };
    Casino.prototype.getLoginInput = function () {
        var person = new Person(this.inputNameEle.value, parseInt(this.inputAgeEle.value), this.inputCountEle.value);
        this.displayEle.innerHTML += person.toString();
        this.submit.setAttribute("onclick", "casino.gameOptions()");
    };
    Casino.prototype.gameOptions = function () {
        console.log("different");
    };
    Casino.prototype.nameInput = function () {
        this.displayEle.innerHTML += "<br>Enter name below";
    };
    return Casino;
}());
var CrapsPlayer = (function (_super) {
    __extends(CrapsPlayer, _super);
    function CrapsPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CrapsPlayer;
}(Person));
/// <reference path="../Person/crapsPerson.ts"/>
var Craps = (function () {
    function Craps() {
        this.displayEle = document.getElementById("display");
        this.buttonEle = document.getElementById("submit");
    }
    Craps.prototype.init = function () {
        this.displayEle = "Welcome to craps!";
    };
    return Craps;
}());
var Card = (function () {
    function Card(suit, value) {
        this.suit = suit;
        this.value = value;
    }
    Card.prototype.getSuit = function () {
        return this.suit;
    };
    Card.prototype.getValue = function () {
        return this.value;
    };
    Card.prototype.toString = function () {
        return "Suit: " + this.suit + "/Value: " + this.value;
    };
    return Card;
}());
/// <reference path="card.ts"/>
var Deck = (function () {
    function Deck() {
        this.cards = [];
        this.suits = ["HEARTS", "DIAMONDS", "CLUBS", "SPADES"];
        this.values = ["ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE", "TEN", "JACK", "QUEEN", "KING", "ACE"];
    }
    Deck.prototype.createFullDeck = function () {
        for (var suit in this.suits) {
            for (var value in this.values) {
                this.cards.push(new Card(this.suits[suit], this.values[value]));
            }
        }
        this.shuffle();
        document.getElementById("display").innerHTML += this.cards.join("<br>");
    };
    Deck.prototype.shuffle = function () {
        for (var i = 0; i < this.cards.length; i++) {
            var randonNum = Math.floor(Math.random() * this.cards.length) + 1;
            console.log(randonNum);
            _a = [this.cards[randonNum], this.cards[i]], this.cards[i] = _a[0], this.cards[randonNum] = _a[1];
        }
        var _a;
    };
    return Deck;
}());
/// <reference path="casino.ts"/>
/// <reference path="games/craps.ts"/>
/// <reference path="Util/deck.ts"/>
var casino = new Casino();
casino.init();
var craps = new Craps();
var deck = new Deck();
//# sourceMappingURL=app.js.map