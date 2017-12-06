var Person = /** @class */ (function () {
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
var Casino = /** @class */ (function () {
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
var Craps = /** @class */ (function () {
    function Craps() {
    }
    Craps.prototype.init = function () {
        document.getElementById("display").innerHTML += "Welcome to Craps!";
    };
    Craps.prototype.wonRound = function (params) {
        var win = 0;
        var lose = 0;
        var diceValue = Dice.getRandomInt(2, 12);
        document.getElementById("display").innerHTML += diceValue;
        if (diceValue === 7 || diceValue === 11) {
            win = 1;
            var rollWin = "You rolled " + diceValue + ". You Win!";
            document.getElementById("display").innerHTML += rollWin;
        }
        else if (diceValue === 2 || diceValue === 3 || diceValue === 12) {
            lose = 1;
            var rollLose = "You rolled " + diceValue + ". You Lose.";
            document.getElementById("display").innerHTML += rollLose;
        }
        else {
            document.getElementById("display").innerHTML += "Keep rolling until you hit the point number.";
            var secondRoll = Dice.getRandomInt(2, 12);
            while (secondRoll != diceValue && secondRoll != 7) {
                secondRoll = Dice.getRandomInt(2, 12);
            }
            if (secondRoll === 7) {
                document.getElementById("display").innerHTML += "You rolled a 7. You Lost!";
                lose = 1;
            }
            else {
                document.getElementById("display").innerHTML += "You rolled the point number " + secondRoll + "You Win!";
                win = 1;
            }
        }
        return win > lose;
    };
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
var Card = /** @class */ (function () {
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
var Deck = /** @class */ (function () {
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
// var casino = new Casino();
// casino.init();
var craps = new Craps();
craps.init();
var deck = new Deck();
var Dice = /** @class */ (function () {
    function Dice() {
    }
    Dice.getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
    return Dice;
}());
var Value;
(function (Value) {
    Value[Value["TWO"] = 2] = "TWO";
    Value[Value["THREE"] = 3] = "THREE";
    Value[Value["FOUR"] = 4] = "FOUR";
    Value[Value["FIVE"] = 5] = "FIVE";
    Value[Value["SIX"] = 6] = "SIX";
    Value[Value["SEVEN"] = 7] = "SEVEN";
    Value[Value["EIGHT"] = 8] = "EIGHT";
    Value[Value["NINE"] = 9] = "NINE";
    Value[Value["TEN"] = 10] = "TEN";
    Value[Value["JACK"] = 10] = "JACK";
    Value[Value["QUEEN"] = 10] = "QUEEN";
    Value[Value["KING"] = 10] = "KING";
    Value[Value["ACE"] = 11] = "ACE";
    // private final int value;
    // Value(int value){
    //     this.value = value;
    // }
    // public int getValue() {
    //     return value; }
    Value[Value["private"] = value] = "private";
    Value[Value["number"] = void 0] = "number";
    Value[Value["constructor"] = function (value) {
    }] = "constructor";
})(Value || (Value = {}));
//# sourceMappingURL=app.js.map