class Craps{
    init (){
        document.getElementById("display").innerHTML += "Welcome to Craps!"
    }
    wonRound(params:boolean) {
        var win: number = 0;
        var lose: number = 0;
        var diceValue = Dice.getRandomInt(2, 12);
        document.getElementById("display").innerHTML += diceValue;
    
        if (diceValue === 7 || diceValue === 11){
            win = 1; 
            var rollWin: string = "You rolled " + diceValue + ". You Win!";
            document.getElementById("display").innerHTML += rollWin;
        }
        else if(diceValue === 2 || diceValue === 3 || diceValue === 12){
            lose = 1;
            var rollLose: string = "You rolled " + diceValue + ". You Lose.";
            document.getElementById("display").innerHTML += rollLose;
        } 
        else {
            document.getElementById("display").innerHTML += "Keep rolling until you hit the point number.";
            var secondRoll = Dice.getRandomInt(2 , 12);
            while (secondRoll != diceValue && secondRoll != 7){
                secondRoll = Dice.getRandomInt(2, 12);
            }
            if (secondRoll === 7){
                document.getElementById("display").innerHTML += "You rolled a 7. You Lost!";
                lose = 1;
            }
            else {
                document.getElementById("display").innerHTML += "You rolled the point number " + secondRoll +"You Win!";
                win = 1;
            }
        }
        return win > lose;
    }
}
