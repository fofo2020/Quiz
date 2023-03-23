// function to start the game, and a countdown timer (maybe two funcitons?)
// when starting the game we need to hide the start instructions and display the first questions
// when we choose a correct answer for the qwuestion, we ned to have logic to display NEXT question
// when we choose a wrong answer we need to decrease time from the total time remaining
/** when we finished answering the questions, we get the value of the timer (at the end of our quiz,
 IE remaining time) and we also collect the players name  (either now or at  the start of the game)*/
// next, after submitting the score, we store it in LS so we can see all oh the higscores

var startSection = document.getElementById("start-screen");
var questionsContainer = document.getElementById("questions");
var questionsTitle = document.getElementById("question-title");
var choicesContainer = document.getElementById("choices");
var startBtn = document.getElementById("start");
var timerSpan = document.getElementById("time");
var totalTime = 60;
var questionIndex = 0;

// function to start the quiz
function startQuiz() {
  startSection.classList.add("hide");
  startTimer();
  displayQuestion();
}

// function to start timer
function startTimer() {
  timerSpan.textContent = totalTime;

  function timerTick() {
    totalTime -= 1;
    timerSpan.textContent = totalTime;

    // check to see if there's any time left
    if (totalTime === 0) {
      clearInterval(timer);
    }
  }

  var timer = setInterval(timerTick, 1000);
}

function displayQuestion() {
  questionsContainer.classList.remove("hide");
  questionsTitle.innerText = questions[questionIndex].question;
  choicesContainer.innerHTML = "";

  //for loop to check the index and to pass the answers
  for (let i = 0; i < questions[questionIndex].answers.length; i++) {
    var answer = questions[questionIndex].answers[i];

    var answerBtn = document.createElement("button");
    answerBtn.innerText = answer;
    answerBtn.setAttribute("id", i);
    answerBtn.classList.add("button");
    choicesContainer.append(answerBtn);

    //Event listnet to click button
    answerBtn.addEventListener("click", (event) => {
      if (parseInt(event.target.id, 10) === questions[questionIndex].correct) {
        questionIndex++;
        displayQuestion();
      } else {
        totalTime -= 10;
        timerSpan.textContent = totalTime;
      }
    });
  }

  console.log("Correct answer index:" + questions[questionIndex].correct);
}
function saveScore() {}

startBtn.addEventListener("click", startQuiz);
