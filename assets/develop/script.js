// ~ ~ ~ Initialized variables (including quiz questions) ~ ~ ~
var score = 0;
var totalTime = 20;
var quizOver = false;
var questionNumber = 0;
var isIncorrect = false;
var localScores = [];
var questions = [
  {
    question: "Who invented JavaScript?",
    answer: 2,
    choices: [
      "Yukihiro Matsumoto",
      "Tim Berners-Lee",
      "Brendan Eich",
      "Guido van Rossum",
    ],
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

// ~ ~ ~ Attribute Selector Variables ~ ~ ~
var nav = document.querySelector(".nav");
var next = document.getElementById("next");
var quiz = document.getElementById("quiz");
var start = document.getElementById("start");
var timer = document.querySelector(".timer");
var scores = document.querySelector(".scores");
var scoreElement = document.getElementById("score");

// Function to build the quiz question by creating question cards, adding the question title, and appending each answer choice in a list below question title
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

// Function that displays the question to the DOM (to the user) and also listens for the queue for the next question (when user clicks answer)
function renderQuestionToDOM(htmlString) {
  quiz.innerHTML = "";
  quiz.appendChild(htmlString);

  var choiceBtn = document.querySelectorAll(".btn-secondary");

  console.log(choiceBtn);

  choiceBtn.forEach(function (node) {
    node.addEventListener("click", nextQuestion);
  });
}

// Function to countdown the timer and subtract extra time if the answer was incorrect
function countdownTimer() {
  var countdownFunction = setInterval(function () {
    if (isIncorrect) {
      totalTime -= 4;
      isIncorrect = false;
    }
    totalTime--;
    timer.textContent = "Time: " + totalTime;

    if (totalTime <= 0 || quizOver) {
      clearInterval(countdownFunction);
      timer.textContent = "Time is up!";
      handleQuizOver();
    }
  }, 1000);
}

// Function to check user's answer to quiz questions
function checkAnswer(answer) {
  answer = parseInt(answer);

  console.log("answer", answer);
  console.log("questions[questionNumber]", questions[questionNumber]);
  console.log(
    "questions[questionNumber].answer",
    questions[questionNumber].answer
  );
  console.log(
    "questions[questionNumber].answer === answer",
    questions[questionNumber].answer === answer
  );

  if (questions[questionNumber].answer === answer) {
    score++;
  } else {
    isIncorrect = true;
  }
}

// Function to go to next question once user answers present question
function nextQuestion(event) {
  var answer = event.target.value;
  checkAnswer(answer);
  questionNumber += 1;

  console.log(event.target.value);

  if (questionNumber >= questions.length) {
    console.log("quiz over");
    quizOver = true;
  } else {
    var nextQuestion = buildQuestion(questions[questionNumber]);
    renderQuestionToDOM(nextQuestion);
  }
}

// Function to control the start of the quiz
function controlStartQuiz() {
  countdownTimer();
  var questionCard = buildQuestion(questions[questionNumber]);
  renderQuestionToDOM(questionCard);
}

// Function to handle the quiz being over, ask for user's initials, and save score to local storage
function handleQuizOver() {
  quiz.innerHTML = "";

  var inputGroup = document.createElement("div");
  inputGroup.setAttribute("class", "input-group mb-3");

  var input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Initials here");
  input.setAttribute("id", "initials");

  var initialsBtn = document.createElement("button");
  initialsBtn.setAttribute("class", "btn btn-outline-secondary");
  initialsBtn.setAttribute("type", "button");
  initialsBtn.setAttribute("id", "submit");
  initialsBtn.textContent = "Submit initials";

  inputGroup.append(input);
  inputGroup.append(initialsBtn);

  quiz.append(inputGroup);

  var submitBtn = document.getElementById("submit");
  submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    var initials = document.querySelector("#initials").value;

    console.log("initials", initials);

    var retrieveScores = localStorage.getItem("localScores");
    console.log("parse: ", JSON.parse(retrieveScores));
    retrieveScores = retrieveScores === null ? [] : JSON.parse(retrieveScores);

    console.log("RETRIEVE SCORES: ", retrieveScores);

    if (typeof retrieveScores === "object" && retrieveScores.length >= 1) {
      localScores = [...retrieveScores];
    }

    localScores.push({ initials, score });
    localStorage.setItem("localScores", JSON.stringify(localScores));

    viewScores();
  });
}

// Function to view score current and recent scores
function viewScores() {
  scores.textContent = "";

  var retrieveScores = localStorage.getItem("localScores");
  console.log("parse: ", JSON.parse(retrieveScores));
  retrieveScores = JSON.parse(retrieveScores);

  retrieveScores.forEach((item) => {
    var div = document.createElement("div");
    div.append(`Initials: ${item.initials} | Score: ${item.score}`);
    scores.append(div);
  });
}

// Click event listener to start the quiz and the timer!
start.addEventListener("click", controlStartQuiz);
