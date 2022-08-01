var totalTime = 5;
var questionNumber = 0;
var isIncorrect = false;
var questions = [
  {
    question: "Who invented JavaScript?",
    answer: "Brandon Erlch",
    choices: ["Mickey Mouse", "Madonna", "Brandon Erlch", "Rhiannon"],
  },
  {
    question: "Which array method removes the first element from the array?",
    answer: ".shift",
    choices: [".split", ".push", ".pop", ".shift"],
  },
  {
    question: "How do you call a function?",
    answer: "function name + ();",
    choices: [
      "var call = function(event) {}",
      "console.log(function);",
      "function name + ();",
      "Pick up the phone",
    ],
  },
];

// ~ ~ ~ ~  Selectors ~ ~ ~ ~
var nav = document.querySelector(".nav");
var next = document.getElementById("next");
var quiz = document.getElementById("quiz");
var start = document.getElementById("start");
var timer = document.querySelector(".timer");
var highscores = document.querySelector(".highscores");

function buildQuestion(questionObject) {
  var card = document.createElement("div");
  card.setAttribute("class", "card-body");

  var questionTitle = document.createElement("h3");
  questionTitle.append(questionObject.question);

  var olElement = document.createElement("ol");
  olElement.setAttribute("type", "a");

  questionObject.choices.forEach((choice) => {
    var list = document.createElement("li");
    list.append(choice);
    olElement.append(list);
  });

  card.appendChild(questionTitle);
  card.appendChild(olElement);

  console.log(card);

  return card;
}

function renderQuestionToDOM(htmlString) {
  console.log(htmlString);
  quiz.appendChild(htmlString);
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

// Function to view scoreboard
function viewHighscores() {
  highscores.textContent = "";
  highscores = document.createAttribute("");
  highscores.setAttribute("", "");
  nav.appendChild(highscores);
}

function controlStartQuiz() {
  countdownTimer();
  var questionCard = buildQuestion(questions[0]);
  renderQuestionToDOM(questionCard);
}

start.addEventListener("click", controlStartQuiz);
next.addEventListener("click", nextQuestion);
