var landingPage = document.querySelector(".landing-page"); 
var quizPage = document.querySelector(".quiz-page");
var endPage = document.querySelector(".final-page");
var startButton = document.querySelector(".start-button");
var submitName = document.querySelector(".submit-name");
var userScore = document.querySelector(".score");
var userNameInput = document.querySelector(".name-input");
var highScores = document.querySelector(".high-scores");

function initQuiz() {
  landingPage.style.display = "flex";
  quizPage.style.display = "none";
  endPage.style.display = "none";
  highScores.style.display = "none";
}



window.onload = initQuiz;

var timerElement = document.getElementById('timer');
let timeLeft = 250;
let timerInterval;

startButton.addEventListener("click", function () {
  landingPage.style.display = "none";
  quizPage.style.display = "block";
  
function showQuestion() {
    var questions = document.getElementById("literal-question");
    var answers = document.getElementById("answer-options");
    var current = quizQuestions[currentQuestion];
  
    questions.textContent = current.question;   
    answers.innerHTML = "";

      for (var i = 0; i < current.options.length; i++) {
      var option = current.options[i];
        
      var label = document.createElement("label");
      label.textContent = option;
    
      console.log(option);
      var button = document.createElement("button");
      button.setAttribute("value", option);
      button.setAttribute("class", "button");
      button.textContent = option;
      answers.appendChild(button);

      button.addEventListener("click", function() {
        var current = quizQuestions[currentQuestion]
        if (this.value === current.options[current.correctOptionIndex]) {
          this.classList.add("correct");
        } else {
          this.classList.add("incorrect");
        }       
    
        for (var j = 0; j < answers.children.length; j++) {
        answers.children[j].removeEventListener("click", arguments.callee);
        }

        currentQuestion++;
        if (currentQuestion < quizQuestions.length) {
          showQuestion();
        } else {
          showendPage();
        }
          });
        }
  
 
}
var totalQuestions = 25;
var questonCounter = document.getElementById("question-counter");
var curQues = currentQuestion + 1;
questonCounter.textContent = "Question " + curQues + " of " + totalQuestions;

  timerInterval = setInterval(function() {
    timeLeft--;
    timerElement.textContent = timeLeft + " seconds remaining";
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
});
var currentQuestion = 0;

    



     
     
    
  