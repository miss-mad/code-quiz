var totalTime = 20;
var questionNumber = 0;
var isIncorrect = false;
var score = 0;
var gameOver = false
var questions = [
  {
    question: "Who invented JavaScript?",
    answer: 2,
    choices: ["Mickey Mouse", "Madonna", "Brandon Erlch", "Rhiannon"],
  },
  {
    question: "Which array method removes the first element from the array?",
    answer: 3,
    choices: [".split", ".push", ".pop", ".shift"],
  },
  {
    question: "How do you call a function?",
    answer: 2,
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
var scoreElement = document.getElementById("score");
var highscores = document.querySelector(".highscores");

function buildQuestion(questionObject) {
  var card = document.createElement("div");
  card.setAttribute("class", "card-body");

  var questionTitle = document.createElement("h3");
  questionTitle.append(questionObject.question);

  var olElement = document.createElement("ol");
  olElement.setAttribute("type", "a");

  questionObject.choices.forEach(function (choice, index) {
    var list = document.createElement("li");
    var btn = document.createElement("button");
    btn.setAttribute("class", "btn btn-secondary");
    btn.setAttribute("value", index);
    list.setAttribute("class", "m-2");

    btn.append(choice);

    list.append(btn);

    olElement.append(list);
  });

  card.appendChild(questionTitle);
  card.appendChild(olElement);

  console.log(card);

  return card;
}

function renderQuestionToDOM(htmlString) {
  quiz.innerHTML = "";
  quiz.appendChild(htmlString);

  var choiceBtn = document.querySelectorAll(".btn-secondary");

  console.log(choiceBtn);

  choiceBtn.forEach(function (node) {
    node.addEventListener("click", nextQuestion);
  });
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
    // if (totalTime >= 0) {
    //   console.log(totalTime);
    // }
    console.log("score: ", score);

    if (totalTime <= 0 || gameOver) {
      clearInterval(countdownFunction);
      timer.textContent = "Time is up!";
      quiz.innerHTML = "";
      quiz.append(initialsElement)
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

function checkAnswer(answer) {
  // checks answer using questionNumber value
  // if (questions[questionNumber].answer === answer) {
  //    answer is right
  //    add +1 to score
  //} else {
  //  answer is wrong and set isIncorrect to TRUE
  //}

  answer = parseInt(answer)

  console.log("answer", answer);
  console.log("questions[questionNumber]", questions[questionNumber]);
  console.log("questions[questionNumber].answer", questions[questionNumber].answer);
  console.log("questions[questionNumber].answer === answer", questions[questionNumber].answer === answer);

  if (questions[questionNumber].answer === answer) {
    score++;
  } else {
    isIncorrect = true;
  }
}

function nextQuestion(event) {
  var answer = event.target.value;
  checkAnswer(answer);
  questionNumber += 1;

  console.log(event.target.value);

  if (questionNumber >= questions.length) {
    console.log("game over");
    gameOver = true

    // game over
  } else {
    var nextQuestion = buildQuestion(questions[questionNumber]);
    renderQuestionToDOM(nextQuestion);
  }
}

function controlStartQuiz() {
  countdownTimer();
  var questionCard = buildQuestion(questions[questionNumber]);
  renderQuestionToDOM(questionCard);
}

start.addEventListener("click", controlStartQuiz);
