"use strict";

// Function to generate a random Number
let number = document.querySelector(".number");
let secretNumber;
function numGenerator() {
  secretNumber = Math.floor(Math.random() * 20) + 1;
}

numGenerator(); 

// Defining variables to further use
let score = 20;
let highScore = 0;
let btn = document.querySelector(".check");
let message = document.querySelector(".message");
let btnAgain = document.querySelector(".again");


// Event listener for click on the button
btn.addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  //For no number guess
  if (!guess) {
    message.textContent = " No secretNumber!!";

  }else if(guess !== secretNumber){
      if (score > 0) {
      message.textContent = guess > secretNumber ? "📈 Too High":"📉 Too Low"; 
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "💥Game Over";
    }

  //   // For guessed number is greater than the secretNumber {for high}
  // } else if (guess > secretNumber) {
    

  // // For guessed number is smaller than the secretNumber {for small}
  // } else if (guess < secretNumber) {
  //   if (score > 0) {
  //     message.textContent = ;
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     message.textContent = "💥Game Over";
  //   }

    // If the guess is equal to the secretNumbera {for win}
  } else if (guess === secretNumber) {

    // highScore logic
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    
    message.textContent = "✅ Correct Number";
    
    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";

    document.querySelector(".number").textContent = secretNumber;

    
  }
});


// Again button
btnAgain.addEventListener("click", function (){

  score = 20
  numGenerator();;
  document.querySelector(".score").textContent = score;
  
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".message").textContent = "Start guessing..."
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".number").style.width = "15rem";
}
);