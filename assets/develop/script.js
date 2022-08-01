var questions = [
  {
    questionOne: "Who invented JavaScript?",
    answerChoices: ["Mickey Mouse", "Madonna", "Brandon Erlch", "Rhiannon"],
    answerCorrect: "Brandon Erlch",
  },
  {
    questionTwo: "Which array method removes the first element from the array?",
    answerChoices: [".split", ".push", ".pop", ".shift"],
    answerCorrect: ".shift",
  },
  {
    questionThree: "How do you call a function?",
    answerChoices: [
      "var call = function(event) {}",
      "console.log(function);",
      "function name + ();",
      "Pick up the phone",
    ],
    answerCorrect: "function name + ();",
  },
];

var highscores = document.querySelector(".highscores");
var timer = document.querySelector(".timer");
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");

quiz.setAttribute;

var totalTime = 5;
var isIncorrect = false;


function countdownTimer() {
    var countdownFunction = setInterval(function () {
        if (isIncorrect) {
            totalTime - 4;
            isIncorrect = false;
        }
        totalTime--;
        timer.textContent = "Time: " + totalTime;
        if (totalTime >= 0) {
            console.log(totalTime);
        }
        
        if (totalTime === 0) {
            clearInterval(countdownFunction);
            timer.textContent = "Time is up!";
            //   showImage();
        }
    }, 1000);
}

countdownTimer();
start.addEventListener("click", countdownTimer);

// Function to create and append colorsplosion image
// function showImage() {
//   timer.textContent = " ";
//   var imgEl = document.createElement("img");
//   imgEl.setAttribute("src", "images/image_1.jpg");
//   mainEl.appendChild(imgEl);

// }
