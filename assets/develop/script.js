var timer = document.querySelector(".timer");
var totalTime = 60;

function timeRemaining() {
  var countdown = setInterval(function() {
    timer.textContent = "Time: " + totalTime;
    totalTime--;

    if(totalTime === 0) {
      clearInterval(countdown);
    //   showImage();
    }

  }, 1000);
}

// Function to create and append colorsplosion image
function showImage() {
  timer.textContent = " ";
  var imgEl = document.createElement("img");
  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);

}

timeRemaining();
