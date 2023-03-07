
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

function showendPage() {
  landingPage.style.display = "none";
  quizPage.style.display = "none";
  endPage.style.display = "flex";
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
    var questions = document.querySelector("h2");
    var answers = document.querySelector("#answer-options");
    var current = quizQuestions[currentQuestion];
  
    questions.textContent = current.question;   
  answers.innerHTML = "";

for (var i = 0; i < current.options.length; i++) {
  var option = current.options[i];
  //var radio = document.createElement("input");
    //  radio.type = "radio";
      //radio.name = "answer";
      //radio.value = option;
      
      var label = document.createElement("label");
      label.textContent = option;
    
      console.log(option);
      var button = document.createElement("button");
      //li.appendChild(radio);
      //li.appendChild(label);
      button.setAttribute("value", option);
      button.setAttribute("class", "button");


      answers.appendChild(button);

      radio.addEventListener("click", function() {
        radio.click();
      });

      li.addEventListener("click", function() {
        if (this.value === current.options[current.correctOptionIndex]) {
          li.classList.add("correct");
        } else {
          li.classList.add("incorrect");
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
  var totalQuestions = 25;
  var questonCounter = document.getElementById("question-counter");
  var curQues = currentQuestion + 1;
  questonCounter.textContent = "Question " + curQues + " of " + totalQuestions;
}
  showQuestion();
  timerInterval = setInterval(function() {
    timeLeft--;
    timerElement.textContent = timeLeft + " Earth seconds remaining";
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
});
var currentQuestion = 0;
var quizQuestions = [
    {
      question: "Why is console.log important?",
      options: ["To help debug code", "To test code as you write it", "To help other developers understand your code", "All of the above"],
      correctOptionIndex: 3
    },
    {
      question: "To declare a variable that will later store a value of favorite food which of the following is correct?",
      options: ["var = favFood", "var favFood;", "var favFood", "favFood;"],
      correctOptionIndex: 1
    },
    {
        question: "Which of following is not a primitive data type?",
        options: ["Boolean", "Function", "String", "Number"],
        correctOptionIndex: 1
      },
      {
        question: "Which of the following compares variable using regular equality?",
        options: ["a = b", "a == b", "a === b", "a != b"],
        correctOptionIndex: 1
      },{
        question: "What does strict equality compare?",
        options: ["Equality & Type", "Logical & Non-Logical", "Interger & Remainder", "Equality & Condition"],
        correctOptionIndex: 0
      },
      {
        question: "When evaluating expressions and all must equal to return true, which of the following would you use?",
        options: ["&&", "!!", "!&", "||"],
        correctOptionIndex: 0
      },{
        question: "When evaluating expressions and only one must return true which of the following would you use?",
        options: ["!!", "&&", "!|", "||"],
        correctOptionIndex: 3
      },
      {
        question: "'If' statements do what?",
        options: ["Check to see if code is working", "Checks to see if a condition is true and executes code based off that", "Creates a variable if a HTML element exists", "Checks to see if a styling condition exists in css"],
        correctOptionIndex: 1
      },{
        question: "x = 5.  If (x > 7) {console.log('cat');} else {console.log('dog');}  What will this log?",
        options: ["x < 7", "dog", "cat", "undefined"],
        correctOptionIndex: 1
      },
      {
        question: "var madrid = [ Vinicius, Benzema, Richarlison, Rodrygo, Alaba ];  What name would console.log(madrid[3]); return?",
        options: ["Benzema", "Alaba", "Rodrygo", "Vinicius"],
        correctOptionIndex: 2
      },{
        question: "var madrid = [ Kroos, Modric, Camavinga, Tchouameni, Cellabos ];  Casemiro is back!  How would you replace Tchouameni in the array with Casemiro?",
        options: ["madrid[3] = Casemiro", "madrid.tchouameni = casemiro", "madrid[casemiro] = [3]", "Tchouameni = Casemiro"],
        correctOptionIndex: 0
      },
      {
        question: "Why are 'for' loops useful?",
        options: ["They link HTML and css sheets to javascript", "Replaces HTML for javascript", "For linking javascript sheet to HTML", "Executes code more than once"],
        correctOptionIndex: 3
      },{
        question: "For '(var = i; i < 10; i++) {console.log('dog')'; what does 'i++' do?",
        options: ["Increases the value by 2 each loop", "Increases the value of i by 1 each loop", "Adds an undefined number of loops", "Console.logs 'dog' 10 times"],
        correctOptionIndex: 1
      },
      {
        question: "What are functions?",
        options: ["Ordered lists of things variables can do", "Reusable blocks of code that perform a specific task", "A result of a script element being used", "Actions exclusive to jquery"],
        correctOptionIndex: 0
      },{
        question: "What do function parameters do?",
        options: ["Creates an array of css elements", "Creates an array of HTML elements", "Gives a name to the data to be passed into the function", "Gives a child element a parent element"],
        correctOptionIndex: 2
      },
      {
        question: "What is the scope of a variable declared within a function?",
        options: ["That variable has a global scope", "That variable is only available within that function", "It's scope is only applied to css styling", "It's scope is only applied to HTML elements"],
        correctOptionIndex: 1
      },{
        question: "What does the method '.push' do?",
        options: ["Adds elements to the beginning of an array", "Pushes elements to a newly created array", "Sorts the data within the array", "Adds elements to the end of an array"],
        correctOptionIndex: 3
      },
      {
        question: "When using the '.slice' method what two parameters does it take?",
        options: ["Position where the extraction should begin and end", "Cumlative value and difference of an array", "The first and last value of an array", "Value of the old and the new array"],
        correctOptionIndex: 0
      },{
        question: "Objects are a collection of properties.  These properties must be _______?",
        options: ["Key-value pairs", "Css elements", "HTML elements", "console.log data"],
        correctOptionIndex: 0
      },
      {
        question: "Which of the following can objects not store?",
        options: ["Arrays", "Boolean values", "Functions", "Primitive values directly"],
        correctOptionIndex: 3
      },{
        question: "What does 'else if' allow you to do?",
        options: ["Test more than one condition", "Debug your code", "Declare more than one variable", "Create a function"],
        correctOptionIndex: 0
      },
      {
        question: "In a browser, what is the global object?",
        options: ["The head element", "The body element", "The console", "The window"],
        correctOptionIndex: 3
      },{
        question: "If the keyword 'this' is used within an object, what does 'this' belong to?",
        options: ["A newly created object", "A newly created variable", "That object", "That variable"],
        correctOptionIndex: 2
      },
      {
        question: "For loops are often used to iterate over _______?",
        options: ["console.log", "Integers", "Arrays", "Strings"],
        correctOptionIndex: 0
      }, {
        question: "Which team has won the most European titles?",
        options: ["Liverpool", "Barcelona", "Real Madrid", "Manchester United"],
        correctOptionIndex: 2
      },
     ];

    



     
     
    
  