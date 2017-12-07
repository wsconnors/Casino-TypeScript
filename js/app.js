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
var Player = /** @class */ (function () {
    function Player(name, age, amount) {
        this.name = name;
        this.age = age;
        this.amount = amount;
    }
    Player.prototype.getName = function () {
        return this.name;
    };
    Player.prototype.getAge = function () {
        return this.age;
    };
    Player.prototype.getAmount = function () {
        return this.amount;
    };
    Player.prototype.toString = function () {
        return "Name: " + this.name + " | Age: " + this.age + " | Amount: " + this.amount;
    };
    return Player;
}());
/// <reference path="Player/player.ts"/>
/// <reference path="games/goFish.ts"/>
var Casino = /** @class */ (function () {
    function Casino() {
        this.displayEle = document.getElementById("display");
        this.textInput = document.getElementById("text_input");
        this.submit = document.getElementById("submit");
    }
    Casino.prototype.init = function () {
        this.loginOptions();
        //this.gameOptions();
    };
    Casino.prototype.loginOptions = function () {
        this.displayEle.innerHTML = "Enter your name";
    };
    Casino.prototype.getName = function () {
        this.name = this.textInput.value;
        this.textInput.value = "";
        this.textInput.setAttribute("placeholder", "AGE");
        this.submit.setAttribute("onclick", "casino.getAge()");
        this.displayEle.innerHTML = "Enter age";
    };
    Casino.prototype.getAge = function () {
        this.age = parseInt(this.textInput.value);
        this.textInput.value = "";
        this.textInput.setAttribute("placeholder", "AMOUNT");
        this.submit.setAttribute("onclick", "casino.getAmount()");
        this.displayEle.innerHTML = "Enter amount";
    };
    Casino.prototype.getAmount = function () {
        this.amount = parseInt(this.textInput.value);
        this.textInput.value = "";
        this.player = new Player(this.name, this.age, this.amount);
        document.getElementById("userInfo").innerHTML = this.player.toString();
        document.getElementById("userInfo").hidden = false;
        this.gameOptions();
    };
    Casino.prototype.gameOptions = function () {
        this.displayEle.innerHTML = "What game would you like to play?<br>Options:<br>| BLACKJACK | GO FISH | CRAPS |";
        this.submit.setAttribute("onclick", "casino.takeOptions()");
        this.textInput.setAttribute("placeholder", "GAME");
    };
    Casino.prototype.takeOptions = function () {
        var input = this.textInput.value;
        switch (input.toLowerCase()) {
            case "go fish": {
                this.goFish = new GoFish(this.player);
                this.goFish.init();
            }
        }
    };
    Casino.prototype.nameInput = function () {
        this.displayEle.innerHTML += "<br>Enter name below";
    };
    Casino.prototype.getPlayer = function () {
        return this.player;
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
var Card = /** @class */ (function () {
    function Card(suit, numValue, faceValue) {
        this.suit = suit;
        this.numValue = numValue;
        this.faceValue = faceValue;
    }
    Card.prototype.getSuit = function () {
        return this.suit;
    };
    Card.prototype.getNumValue = function () {
        return this.numValue;
    };
    Card.prototype.getFaceValue = function () {
        return this.faceValue;
    };
    Card.prototype.toString = function () {
        return this.faceValue + " of " + this.suit;
        //return "Suit: "+this.suit+" Value: "+this.value;
    };
    return Card;
}());
/// <reference path="card.ts"/>
var Deck = /** @class */ (function () {
    function Deck() {
        this.cards = [];
        this.suits = ["HEARTS", "DIAMONDS", "CLUBS", "SPADES"];
        this.faceValues = ["ACE", "2", "3", "4", "5", "6", "7", "8", "9", "10", "JACK", "QUEEN", "KING"];
    }
    Deck.prototype.createFullDeck = function () {
        for (var _i = 0, _a = this.suits; _i < _a.length; _i++) {
            var suit = _a[_i];
            for (var i = 0; i < this.faceValues.length; i++) {
                var num = i + 1;
                if (num > 10) {
                    num = 10;
                }
                this.cards.push(new Card(suit, num, this.faceValues[i]));
            }
        }
        this.shuffle();
    };
    Deck.prototype.shuffle = function () {
        for (var i = 0; i < this.cards.length; i++) {
            var randonNum = Math.floor(Math.random() * this.cards.length);
            _a = [this.cards[randonNum], this.cards[i]], this.cards[i] = _a[0], this.cards[randonNum] = _a[1];
        }
        var _a;
    };
    return Deck;
}());
/// <reference path="player.ts"/>
var CardPlayer = /** @class */ (function (_super) {
    __extends(CardPlayer, _super);
    function CardPlayer() {
        var _this = _super.call(this, "CardPlayer", 0, 0) || this;
        _this.hand = [];
        return _this;
    }
    CardPlayer.prototype.getHand = function () {
        return this.hand;
    };
    CardPlayer.prototype.addCard = function (card) {
        this.hand.push(card);
    };
    CardPlayer.prototype.clearHand = function () {
        this.hand = [];
    };
    CardPlayer.prototype.setHand = function (hand) {
        this.hand = hand;
    };
    CardPlayer.prototype.displayHand = function () {
        var displayHand = document.getElementById("playerHand");
        displayHand.innerHTML = "";
        this.hand.sort();
        for (var i = 0; i < this.hand.length; i++) {
            var currentCard = this.hand[i];
            displayHand.innerHTML += "<img src = ././images/cards/" + currentCard.getFaceValue() + "_of_" + currentCard.getSuit() + ".png width=\"90\"height=\130\">";
        }
    };
    CardPlayer.prototype.logHand = function () {
        for (var i = 0; i < this.hand.length; i++) {
            console.log(this.hand[i].getFaceValue() + " " + this.hand[i].getSuit());
        }
    };
    return CardPlayer;
}(Player));
/// <reference path="cardPlayer.ts"/>
var GoFishPlayer = /** @class */ (function (_super) {
    __extends(GoFishPlayer, _super);
    function GoFishPlayer(player) {
        var _this = _super.call(this) || this;
        _this.bookCounter = 0;
        return _this;
    }
    GoFishPlayer.prototype.addBook = function () {
        this.bookCounter += 1;
    };
    GoFishPlayer.prototype.getBookCount = function () {
        return this.bookCounter;
    };
    return GoFishPlayer;
}(CardPlayer));
/// <reference path="casino.ts"/>
/// <reference path="games/craps.ts"/>
/// <reference path="Util/deck.ts"/>
/// <reference path="games/goFish.ts"/>
/// <reference path="Player/gofishPlayer.ts"/>
var craps = new Craps();
craps.init();
var deck = new Deck();
/// <reference path="cardPlayer.ts"/>
var CardDealer = /** @class */ (function (_super) {
    __extends(CardDealer, _super);
    function CardDealer() {
        return _super.call(this) || this;
    }
    return CardDealer;
}(CardPlayer));
/// <reference path="../Util/deck.ts"/>
/// <reference path="../Player/cardPlayer.ts"/>
/// <reference path="../Player/cardDealer.ts"/>
var CardGame = /** @class */ (function () {
    function CardGame() {
        this.deck = new Deck().getDeck();
    }
    CardGame.prototype.dealCards = function (dealer, player, amount) {
        dealer.clearHand();
        player.clearHand();
        for (var i = 0; i < amount; i++) {
            dealer.addCard(this.deck.pop());
            player.addCard(this.deck.pop());
        }
    };
    CardGame.prototype.giveCards = function (player, amount) {
        for (var i = 0; i < amount; i++) {
            player.addCard(this.deck.pop());
        }
    };
    CardGame.prototype.getDeck = function () {
        return this.deck;
    };
    return CardGame;
}());
/// <reference path="cardGame.ts" />
var Blackjack = /** @class */ (function (_super) {
    __extends(Blackjack, _super);
    // private var pot: number = 0;
    function Blackjack(player) {
        var _this = _super.call(this) || this;
        _this.display = document.getElementById("display");
        _this.input = document.getElementById("text_input");
        _this.button = document.getElementById("submit");
        _this.player = new player;
        Blackjack;
        _this.dealer = new dealer;
        Blackjack;
        return _this;
    }
    return Blackjack;
}(CardGame));
/// <reference path="player.ts"/>
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
//# sourceMappingURL=app.js.map