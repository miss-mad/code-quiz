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

// quiz.append(questions[0]);

var totalTime = 5;
var isIncorrect = false;

function askQuestions() {
  if (start.addEventListener("click", countdownTimer) === true) {
    questions.textContent = questions[0];
    if (answerChoices === "Brandon Erlch") {
      quiz.textContent = "Correct!";
    } else {
      isIncorrect;
      quiz.textContent = "Incorrect! Minus 5 seconds";
    }
    questions.textContent = questions[1];
    if (answerChoices === ".shift") {
      quiz.textContent = "Correct!";
    } else {
      isIncorrect;
      quiz.textContent = "Incorrect! Minus 5 seconds";
    }
    questions.textContent = questions[2];
    if (answerChoices === "function name + ();") {
      quiz.textContent = "Correct!";
    } else {
      isIncorrect;
      quiz.textContent = "Incorrect! Minus 5 seconds";
    }
  }
}

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
    }
  }, 1000);
}

start.addEventListener("click", countdownTimer);

// Function to create and append colorsplosion image
// function viewHighscores() {
//   timer.textContent = " ";
//   var imgEl = document.createElement("img");
//   imgEl.setAttribute("src", "images/image_1.jpg");
//   mainEl.appendChild(imgEl);

// }
