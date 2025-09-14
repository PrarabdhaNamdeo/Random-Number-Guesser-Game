let secretNumber;
let Lives ;
let maxLives = 20 ;
let range = 100;

function startGame() {

    range = Number(document.getElementById("difficulty").value);

    secretNumber = Math.floor(Math.random() * range) + 1;
    Lives = 0;

    document.getElementById("message").innerText = "";
    document.getElementById("Lives").innerText = `❤️ Lives left: ${maxLives}`;
    document.getElementById("guessInput").value = "";
    document.getElementById("guessInput").disabled = false;
    document.getElementById("guessBtn").disabled = false;
    document.getElementById("restartBtn").style.display = "none";
}

document.getElementById("guessBtn").addEventListener("click", () => {
    const guess = Number(document.getElementById("guessInput").value);
    Lives++;

    if (!guess || guess < 1 || guess > range) {
        document.getElementById("message").innerText = `⚠️ Enter a valid number between (1-${range})`;
        Lives--;
        return;
    }

    if (guess === secretNumber) {
        document.getElementById("message").innerText = `🎉 Correct! The Number was ${secretNumber}`;
        endgame();
        return ;

    } else if (guess > secretNumber) {
        document.getElementById("message").innerText = "📉 Too high! Try again.";

    } else {
        document.getElementById("message").innerText = "📈 Too low! Try again.";
    }

if(Lives >= maxLives){
    document.getElementById("message").innerText = `💀 Game Over! The Number was : ${secretNumber}`;
    endgame();
    }
else{
    document.getElementById("Lives").innerText = `❤️ Lives Left : ${maxLives - Lives}`;
    }
});
function endgame(){
    document.getElementById("guessInput").disabled = true;
    document.getElementById("guessBtn").disabled = true;
    document.getElementById("restartBtn").style.display = "inline-block";
    document.getElementById("Lives").innerText = `Total Lives Used: ${Lives}`;
}
document.getElementById("restartBtn").addEventListener("click", startGame);

document.getElementById("difficulty").addEventListener("change", startGame);

startGame();
