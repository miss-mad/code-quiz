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
      "function name + ();",
      "Pick up the phone",
      "var = function(event) {}",
      "console.log(function);",
    ],
    answerCorrect: "function name + ();",
  },
];

var timer = document.querySelector(".timer");
var totalTime = 1;
var isIncorrect = false;

function countdownTimer() {
  var countdownFunction = setInterval(function () {
    if (isIncorrect) {
      totalTime - 4;
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

// Function to create and append colorsplosion image
// function showImage() {
//   timer.textContent = " ";
//   var imgEl = document.createElement("img");
//   imgEl.setAttribute("src", "images/image_1.jpg");
//   mainEl.appendChild(imgEl);

// }
