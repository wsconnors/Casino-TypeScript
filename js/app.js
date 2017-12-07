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
var Player = (function () {
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
var Card = (function () {
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
var Deck = (function () {
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
    Deck.prototype.getDeck = function () {
        this.createFullDeck();
        return this.cards;
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
var CardPlayer = (function (_super) {
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
var CardDealer = (function (_super) {
    __extends(CardDealer, _super);
    function CardDealer() {
        return _super.call(this) || this;
    }
    return CardDealer;
}(CardPlayer));
/// <reference path="../Util/deck.ts"/>
/// <reference path="../Player/cardPlayer.ts"/>
/// <reference path="../Player/cardDealer.ts"/>
var CardGame = (function () {
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
/// <reference path="cardGame.ts"/>
var GoFish = (function (_super) {
    __extends(GoFish, _super);
    function GoFish(player) {
        var _this = _super.call(this) || this;
        _this.display = document.getElementById("display");
        _this.input = document.getElementById("text_input");
        _this.buttom = document.getElementById("submit");
        _this.player = new GoFishPlayer(player);
        _this.dealer = new GoFishPlayer(new Player("Dealer", 0, 0));
        return _this;
    }
    GoFish.prototype.init = function () {
        this.display.innerHTML = "";
        document.getElementById("header").innerHTML = "Welcome to Go Fish!";
        document.getElementById("cardGame").hidden = false;
        this.input.setAttribute("placeholder", "ASK CARD");
        this.input.value = "";
        this.buttom.setAttribute("onclick", "casino.goFish.askPlayerForCardClick()");
        this.dealCards(this.dealer, this.player, 7);
        this.playerTurn();
    };
    GoFish.prototype.playerTurn = function () {
        this.display.innerHTML += "What would you like to ask for?";
        this.player.displayHand();
        document.getElementById("userNameHand").innerHTML = "User Hand | You have " + this.player.getBookCount() + this.spelling(this.player.getBookCount());
        console.clear();
        console.log("Dealer Hand");
        this.dealer.logHand();
    };
    GoFish.prototype.spelling = function (num) {
        if (num == 1) {
            return " book";
        }
        return " books";
    };
    GoFish.prototype.dealerTurn = function () {
        var randonNum = Math.floor(Math.random() * this.dealer.getHand().length);
        var dealerAsk = this.dealer.getHand()[randonNum].getFaceValue();
        this.display.innerHTML += "<br>Dealer asks for " + dealerAsk + ".";
        this.dealerCheck(dealerAsk);
    };
    GoFish.prototype.dealerCheck = function (askCard) {
        if (this.checkInHand(askCard, this.player)) {
            this.swapCards(this.player, this.dealer, askCard);
            this.checkHandSize(this.player);
            this.display.innerHTML += "<br>Dealer got a match<br>";
            this.checkBooks(this.dealer);
            this.dealerTurn();
        }
        else {
            this.display.innerHTML += "<br>Dealer did not get a match<br>";
            _super.prototype.giveCards.call(this, this.dealer, 1);
            this.playerTurn();
        }
    };
    GoFish.prototype.askPlayerForCardClick = function () {
        var playerInput = this.input.value.toLowerCase();
        this.input.value = "";
        if (this.checkInHand(playerInput, this.dealer)) {
            this.swapCards(this.dealer, this.player, playerInput);
            this.checkHandSize(this.dealer);
            this.display.innerHTML = "You got a match<br>";
            this.checkBooks(this.player);
            this.playerTurn();
        }
        else {
            this.display.innerHTML = "No match GO FISH!<br>";
            _super.prototype.giveCards.call(this, this.player, 1);
            this.dealerTurn();
        }
    };
    GoFish.prototype.checkHandSize = function (player) {
        if (player.getHand().length == 0) {
            _super.prototype.giveCards.call(this, player, 5);
        }
    };
    GoFish.prototype.swapCards = function (fromPlayer, toPlayer, swap) {
        var newHand = [];
        for (var i = 0; i < fromPlayer.getHand().length; i++) {
            var currentCard = fromPlayer.getHand()[i];
            if (currentCard.getFaceValue().toLowerCase() == swap.toLowerCase()) {
                toPlayer.addCard(currentCard);
            }
            else {
                newHand.push(currentCard);
            }
        }
        fromPlayer.setHand(newHand);
    };
    GoFish.prototype.checkInHand = function (input, player) {
        for (var i = 0; i < player.getHand().length; i++) {
            if (input.toLowerCase() == player.getHand()[i].getFaceValue().toLowerCase()) {
                return true;
            }
        }
        return false;
    };
    GoFish.prototype.checkBooks = function (player) {
        var map = [];
        for (var i = 0; i < player.getHand().length; i++) {
            var place = player.getHand()[i].getFaceValue();
            if (map[place] == undefined) {
                map[place] = 1;
            }
            else {
                map[place] += 1;
            }
        }
        for (var key in map) {
            if (map[key] == 4) {
                console.log("Book Found");
                this.makeBook(player, key);
            }
        }
    };
    GoFish.prototype.makeBook = function (player, value) {
        var newHand = [];
        for (var i = 0; i < player.getHand().length; i++) {
            var currentCard = player.getHand()[i];
            if (currentCard.getFaceValue().toLowerCase() != value.toLowerCase()) {
                newHand.push(currentCard);
            }
        }
        player.setHand(newHand);
        player.addBook();
    };
    return GoFish;
}(CardGame));
/// <reference path="Player/player.ts"/>
/// <reference path="games/goFish.ts"/>
var Casino = (function () {
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
/// <reference path="cardPlayer.ts"/>
var GoFishPlayer = (function (_super) {
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
var casino = new Casino();
casino.init();
// var craps = new Craps();
// var deck = new Deck()
// let goFish = new GoFish(casino.getPlayer())
//goFish.init();
/// <reference path="player.ts"/>
//# sourceMappingURL=app.js.map