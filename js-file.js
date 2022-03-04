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

    let won = false

    buttons.forEach((button) => {

        // and for each one we add a 'click' listener
        button.addEventListener('click', (e) => {
            
            if (won == true) {
                return 
            }

            computerSelection = computerPlay();

            playerSelection = moveArray.indexOf(e.target.textContent);
            resultArray = playRound(playerSelection,computerSelection);

            if (resultArray[1] >= 0) {
                playerScore = playerScore + resultArray[1];
                }
            else {
                computerScore = computerScore - resultArray[1];
            }

            const display = document.querySelector('#resultDisplay');

            

            display.textContent = `${resultArray[0]}`;

            if (Math.max(playerScore,computerScore)>=5) {
                    won = true;
                    const final = document.createElement('p');
                        if (playerScore>computerScore){
                            final.textContent = 'you won!';
                        }
                        else {
                            final.textContent = 'Computer wins :/';
                        }
                        
                    display.appendChild(final);                
                return
            }
            
            const content = document.createElement('p');
            content.textContent = `player score:${playerScore}`;
            display.appendChild(content);

            const contentComp = document.createElement('p');
            contentComp.textContent= `computer score:${computerScore}`;
            display.appendChild(contentComp);
         

        });
      });

            


          
        


