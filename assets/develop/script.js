var questions = [
  {
    question: "Who invented JavaScript?",
    answerChoices: ["Mickey Mouse", "Madonna", "Brandon Erlch", "Rhiannon"],
    answerCorrect: "Brandon Erlch",
  },
  {
    question: "Which array method removes the first element from the array?",
    answerChoices: [".split", ".push", ".pop", ".shift"],
    answerCorrect: ".shift",
  },
  {
    question: "How do you call a function?",
    answerChoices: [
      "var call = function(event) {}",
      "console.log(function);",
      "function name + ();",
      "Pick up the phone",
    ],
    answerCorrect: "function name + ();",
  },
];

var nav = document.querySelector(".nav");
var highscores = document.querySelector(".highscores");
var timer = document.querySelector(".timer");
// var container = document.querySelector(".container");
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");

console.log(quiz);
var questionNumber = 0;

// quiz.append(questions[0]);

var totalTime = 5;
var isIncorrect = false;

// document.setAttribute("class", "card-body")


function buildQuestion(questionObject) {
    var card = "";
  var cardBody = 
    `<div class="card-body"><h5 class="card-title">${questionObject.question}</h5></div>`;
    card += cardBody;
    return card;
}

function controlStartQuiz () {
    countdownTimer();
    var questionCard = buildQuestion(questions[0]);
}

// function askQuestions() {
//   if (start.addEventListener("click", countdownTimer) === true) {
//     questions.textContent = questions[0];
//     if (answerChoices === "Brandon Erlch") {
//       quiz.textContent = "Correct!";
//     } else {
//       isIncorrect;
//       quiz.textContent = "Incorrect! Minus 5 seconds";
//     }
//     questions.textContent = questions[1];
//     if (answerChoices === ".shift") {
//       quiz.textContent = "Correct!";
//     } else {
//       isIncorrect;
//       quiz.textContent = "Incorrect! Minus 5 seconds";
//     }
//     questions.textContent = questions[2];
//     if (answerChoices === "function name + ();") {
//       quiz.textContent = "Correct!";
//     } else {
//       isIncorrect;
//       quiz.textContent = "Incorrect! Minus 5 seconds";
//     }
//   }
// }

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

start.addEventListener("click", controlStartQuiz);

// Function to view scoreboard
function viewHighscores() {
  highscores.textContent = "";
  highscores = document.createAttribute("");
  highscores.setAttribute("", "");
  nav.appendChild(highscores);
}
