function getComputerChoice()
{
    let rand = getRandomNumber(1,3);
    switch (rand)
        {
            case 1:
                return "ROCK";
            case 2:
                return "PAPER";
            case 3:
                return "SCISSORS";
        }
}


function getRandomNumber(startingNum,endingNum)
    {
      return Math.floor(Math.random() * endingNum) + startingNum;
    }

function GetPlayerChoice()
{
    let choiceValid = false;

    while (choiceValid===false)
    {
        let choice = prompt("Select Rock, Paper or Scissors").toUpperCase();
        if (choice==="ROCK"||choice==="PAPER"||choice==="SCISSORS")
        return choice;
    }
}



function playRound()
{
    let playerChoice = GetPlayerChoice();
    let computerChoice = getComputerChoice();

    if (playerChoice===computerChoice)
        alert (`Computer choose ${computerChoice}, Its a draw!`)

    else if ((playerChoice==="ROCK" &&  computerChoice==="SCISSORS")||(playerChoice==="PAPER" &&  computerChoice==="ROCK")||(playerChoice==="SCISSORS" &&  computerChoice==="ROCK"))
       {
        alert (`Computer choose ${computerChoice},Player wins!`)
        return true;
       } 

    else 
    {
        alert (`Computer choose ${computerChoice},Computer wins!`)
        return false;
    }
}

function startGame()
{
    alert("A game of 5 will be played, the best out of 5 wins");
    let playerScore = 0;
    let computerScore = 0;
    let gameIsActive = true;
    while (gameIsActive===true)
    {
        let playerWon = playRound();
        if (playerWon!=undefined)
        playerWon ? playerScore++ : computerScore++;
        if (playerScore>=5)
        {
            alert (`Congrats, player won the game!`)
            gameIsActive=false;
        }
        else if (computerScore>=5)
        {
            alert (`Computer won the game!`)
            gameIsActive=false;
        }
    }
}