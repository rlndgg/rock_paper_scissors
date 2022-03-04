var moveArray = ["Rock","Paper","Scissors"]

    function computerPlay(){
    
        let arrayIndex =  Math.floor(Math.random()*3);
    
        return arrayIndex
}
    
    function playRound(playerSelection,computerSelection){
        
        let result

        if (playerSelection === computerSelection) {
            result = ["You tied",0];
            return result;
        }
        else if ((playerSelection + 1) % 3  === computerSelection) {
            result = [`You lose, ${moveArray[computerSelection]} beats ${moveArray[playerSelection]}`,-1];
            return result;
        }   
        else {
            result = [`You win, ${moveArray[playerSelection]} beats ${moveArray[computerSelection]}`,1];
            return result;
        }

    }
    let computerSelection;
    let playerSelection;
    let computerScore = 0;
    let playerScore = 0;



        let resultArray = new Array(2);


            
            
            
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {

        // and for each one we add a 'click' listener
        button.addEventListener('click', (e) => {

            computerSelection = computerPlay();

            playerSelection = moveArray.indexOf(e.target.textContent);
            resultArray = playRound(playerSelection,computerSelection);

            if (resultArray[1] >= 0) {
                playerScore = playerScore + resultArray[1];
                }
            else {
                computerScore = computerScore - resultArray[1]
            }
            
            console.log(resultArray[0]);
            console.log(playerScore);
            console.log(computerScore);

        });
      });

            


          
        


