let computerNum = 0;
let gameButton = document.getElementById("game-button")
let userInput = document.getElementById("user-input")
let gameResult = document.getElementById("game-result")

gameButton.addEventListener("click" , play)


function randomNum() {
    computerNum = Math.floor(Math.random() * 100)+ 1;
    console.log("정답" , computerNum);
}

function play() {
    let userValue = userInput.value

    if (computerNum > userValue){
        gameResult.textContent = "UP!!!"
    } else if (computerNum < userValue){
        gameResult.textContent = "DOWN!!!"
    } else {
        gameResult.textContent = "맞추셨습니다!!!"
    }

}
randomNum();