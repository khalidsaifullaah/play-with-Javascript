const game = () => {
    let playerScore = 0;
    let computerScore = 0;

    const gameArea = () => {
        let playButton = document.querySelector(".center button");
        let introPage = document.querySelector(".introPage");
        let matchPage = document.querySelector(".matchPage");

        playButton.addEventListener("click", () => {
            introPage.classList.add("fadeOut");
            matchPage.classList.add("fadeIn");
        });
    }
    const launchGame = () => {
        let options = document.querySelectorAll(".options button");
        let computerOptions = ["rock", "paper", "scissor"];
        let playerHand = document.querySelector(".player-hand");
        let computerHand = document.querySelector(".computer-hand");
        //reset hand animations
        let hands = document.querySelectorAll(".hands img");
        hands.forEach(hand => {
            hand.addEventListener("animationend", function () {
                this.style.animation = '';
            });
        });

        options.forEach(option => {
            option.addEventListener("click", function () {
                let verdict = document.querySelector(".tempText");
                verdict.innerHTML = ``
                verdict.style.color = `#fff`;
                //set both hands
                playerHand.src = `./assets/rock.png`;
                computerHand.src = `./assets/rock.png`;
                const randomChoice = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[randomChoice];
                const playerChoice = this.textContent.toLowerCase();

                //delay for animation
                setTimeout(() => {
                    //call compare functions
                    compareHands(playerChoice, computerChoice);
                    //update images
                    playerHand.src = `./assets/${playerChoice}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000);

                //Animation
                playerHand.style.animation = 'playerHandAnimation 2s ease';
                computerHand.style.animation = 'computerHandAnimation 2s ease';
            });
        });
    }
    const updateScore = () => {
        let displayPlayerScore = document.querySelector(".player-score");
        let displayComputerScore = document.querySelector(".computer-score");
        displayPlayerScore.textContent = playerScore;
        displayComputerScore.textContent = computerScore;
    }
    const compareHands = (playerChoice, computerChoice) => {
        let verdict = document.querySelector(".tempText");
        //check for a tie
        if (playerChoice === computerChoice) {
            verdict.textContent = `It's a tie`;
            verdict.style.color = `#ab3c3c`;
            return;
        }
        //check for rock
        if (playerChoice === "rock") {
            if (computerChoice === "scissor") {
                verdict.textContent = `You Win`;
                verdict.style.color = `#ab3c3c`;
                playerScore++;
            }
            else {
                computerScore++;
                verdict.textContent = `Computer wins`;
                verdict.style.color = `#ab3c3c`;
            }
            updateScore();
            return;
        }
        //check for paper
        if (playerChoice === "paper") {
            if (computerChoice === "scissor") {
                verdict.textContent = `Computer wins`;
                verdict.style.color = `#ab3c3c`;
                computerScore++;
            }
            else {
                verdict.textContent = `You Win`;
                verdict.style.color = `#ab3c3c`;
                playerScore++;
            }
            updateScore();
            return;
        }
        //check for scissor
        if (playerChoice === "scissor") {
            if (computerChoice === "rock") {
                verdict.textContent = `Computer wins`;
                verdict.style.color = `#ab3c3c`;
                computerScore++;
            }
            else {
                verdict.textContent = `You Win`;
                verdict.style.color = `#ab3c3c`;
                playerScore++;
            }
            updateScore();
            return;
        }
    }

    //executing inner functions
    gameArea();
    launchGame();
}

//executing outer function
game();