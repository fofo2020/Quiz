var scores = JSON.parse(localStorage.getItem("highScores")) || [];

// getting elements from highscores
var highscores = document.getElementById("highscores");
var clearScores = document.getElementById("clear");

// for loop to append the scores using iterats.
for (i=0; i<scores.length; i++){
    var score = document.createElement("li")
    score.textContent = ` user: ${scores[i].initials} score: ${scores[i].score}`
highscores.appendChild(score)
}

// function to clear scores
function removeScores(){
    localStorage.removeItem("highScores")
    window.location.reload();
}
//event listenet to call clear scores function when clicking cleas btn
clearScores.addEventListener("click", removeScores)