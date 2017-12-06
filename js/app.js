<<<<<<< HEAD
var Person = /** @class */ (function () {
=======
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
>>>>>>> df8e847eb79d170b4c4bbc4ea52511050bb05dc9
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
<<<<<<< HEAD
var Craps = /** @class */ (function () {
=======
var CrapsPlayer = (function (_super) {
    __extends(CrapsPlayer, _super);
    function CrapsPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CrapsPlayer;
}(Person));
/// <reference path="../Person/crapsPerson.ts"/>
var Craps = (function () {
>>>>>>> df8e847eb79d170b4c4bbc4ea52511050bb05dc9
    function Craps() {
        this.displayEle = document.getElementById("display");
        this.buttonEle = document.getElementById("submit");
    }
    Craps.prototype.init = function () {
<<<<<<< HEAD
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
=======
        this.displayEle = "Welcome to craps!";
    };
    return Craps;
}());
var Card = (function () {
>>>>>>> df8e847eb79d170b4c4bbc4ea52511050bb05dc9
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
<<<<<<< HEAD
/// <reference path="suit.ts"/>
var Deck = /** @class */ (function () {
=======
var Deck = (function () {
>>>>>>> df8e847eb79d170b4c4bbc4ea52511050bb05dc9
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