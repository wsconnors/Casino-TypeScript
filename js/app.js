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
        this.submit.setAttribute("onclick", "casino.differnt()");
    };
    Casino.prototype.differnt = function () {
        console.log("different");
    };
    Casino.prototype.nameInput = function () {
        this.displayEle.innerHTML += "<br>Enter name below";
    };
    return Casino;
}());
var Craps = (function () {
    function Craps() {
    }
    return Craps;
}());
var Suit;
(function (Suit) {
    Suit[Suit["CLUBS"] = 0] = "CLUBS";
    Suit[Suit["DIAMONDS"] = 1] = "DIAMONDS";
    Suit[Suit["HEART"] = 2] = "HEART";
    Suit[Suit["SPADE"] = 3] = "SPADE";
})(Suit || (Suit = {}));
/// <reference path="suit.ts"/>
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
    return Card;
}());
/// <reference path="card.ts"/>
/// <reference path="suit.ts"/>
var Deck = (function () {
    function Deck() {
        this.cards = [];
    }
    Deck.prototype.createFullDeck = function () {
        for (var suit in Suit) {
            console.log(suit);
        }
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