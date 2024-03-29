var quizQuestions = [
  {
    question: "Why is console.log important?",
    options: [
      "To help debug code",
      "To test code as you write it",
      "To help other developers understand your code",
      "All of the above",
    ],
    answer: "All of the above",
  },
  {
    question:
      "To declare a variable that will later store a value of favorite food which of the following is correct?",
    options: ["var = favFood", "var favFood;", "var favFood", "favFood;"],
    answer: "var favFood;",
  },
  {
    question: "Which of following is not a primitive data type?",
    options: ["Boolean", "Function", "String", "Number"],
    answer: "Function",
  },
  {
    question:
      "Which of the following compares variable using regular equality?",
    options: ["a = b", "a == b", "a === b", "a != b"],
    answer: "a == b",
  },
  {
    question: "What does strict equality compare?",
    options: [
      "Equality & Type",
      "Logical & Non-Logical",
      "Interger & Remainder",
      "Equality & Condition",
    ],
    answer: "Equality & Type",
  },
  {
    question:
      "When evaluating expressions and all must equal to return true, which of the following would you use?",
    options: ["&&", "!!", "!&", "||"],
    answer: "&&",
  },
  {
    question:
      "When evaluating expressions and only one must return true which of the following would you use?",
    options: ["!!", "&&", "!|", "||"],
    answer: "||",
  },
  {
    question: "'If' statements do what?",
    options: [
      "Check to see if code is working",
      "Checks to see if a condition is true and executes code based off that",
      "Creates a variable if a HTML element exists",
      "Checks to see if a styling condition exists in css",
    ],
    answer:
      "Checks to see if a condition is true and executes code based off that",
  },
  {
    question:
      "x = 5.  If (x > 7) {console.log('cat');} else {console.log('dog');}  What will this log?",
    options: ["x < 7", "dog", "cat", "undefined"],
    answer: "dog",
  },
  {
    question:
      "var madrid = [ Vinicius, Benzema, Richarlison, Rodrygo, Alaba ];  What name would console.log(madrid[3]); return?",
    options: ["Benzema", "Alaba", "Rodrygo", "Vinicius"],
    answer: "Rodrygo",
  },
  {
    question:
      "var madrid = [ Kroos, Modric, Camavinga, Tchouameni, Cellabos ];  Casemiro is back!  How would you replace Tchouameni in the array with Casemiro?",
    options: [
      "madrid[3] = Casemiro",
      "madrid.tchouameni = casemiro",
      "madrid[casemiro] = [3]",
      "Tchouameni = Casemiro",
    ],
    answer: "madrid[3] = Casemiro",
  },
  {
    question: "Why are 'for' loops useful?",
    options: [
      "They link HTML and css sheets to javascript",
      "Replaces HTML for javascript",
      "For linking javascript sheet to HTML",
      "Executes code more than once",
    ],
    answer: "Executes code more than once",
  },
  {
    question:
      "For '(var = i; i < 10; i++) {console.log('dog')'; what does 'i++' do?",
    options: [
      "Increases the value by 2 each loop",
      "Increases the value of i by 1 each loop",
      "Adds an undefined number of loops",
      "Console.logs 'dog' 10 times",
    ],
    answer: "Increases the value of i by 1 each loop",
  },
  {
    question: "What are functions?",
    options: [
      "Ordered lists of things variables can do",
      "Reusable blocks of code that perform a specific task",
      "A result of a script element being used",
      "Actions exclusive to jquery",
    ],
    answer: "Reusable blocks of code that perform a specific task",
  },
  {
    question: "What do function parameters do?",
    options: [
      "Creates an array of css elements",
      "Creates an array of HTML elements",
      "Gives a name to the data to be passed into the function",
      "Gives a child element a parent element",
    ],
    answer: "Gives a name to the data to be passed into the function",
  },
  {
    question: "What is the scope of a variable declared within a function?",
    options: [
      "That variable has a global scope",
      "That variable is only available within that function",
      "It's scope is only applied to css styling",
      "It's scope is only applied to HTML elements",
    ],
    answer: "That variable is only available within that function",
  },
  {
    question: "What does the method '.push' do?",
    options: [
      "Adds elements to the beginning of an array",
      "Pushes elements to a newly created array",
      "Sorts the data within the array",
      "Adds elements to the end of an array",
    ],
    answer: "Adds elements to the end of an array",
  },
  {
    question:
      "When using the '.slice' method what two parameters does it take?",
    options: [
      "Position where the extraction should begin and end",
      "Cumlative value and difference of an array",
      "The first and last value of an array",
      "Value of the old and the new array",
    ],
    answer: "Position where the extraction should begin and end",
  },
  {
    question:
      "Objects are a collection of properties.  These properties must be _______?",
    options: [
      "Key-value pairs",
      "Css elements",
      "HTML elements",
      "console.log data",
    ],
    answer: "Key-value pairs",
  },
  {
    question: "Which of the following can objects not store?",
    options: [
      "Arrays",
      "Boolean values",
      "Functions",
      "Primitive values directly",
    ],
    answer: "Functions",
  },
  {
    question: "What does 'else if' allow you to do?",
    options: [
      "Test more than one condition",
      "Debug your code",
      "Declare more than one variable",
      "Create a function",
    ],
    answer: "Test more than one condition",
  },
  {
    question: "In a browser, what is the global object?",
    options: [
      "The head element",
      "The body element",
      "The console",
      "The window",
    ],
    answer: "The window",
  },
  {
    question:
      "If the keyword 'this' is used within an object, what does 'this' belong to?",
    options: [
      "A newly created object",
      "A newly created variable",
      "That object",
      "That variable",
    ],
    answer: "That object",
  },
  {
    question: "For loops are often used to iterate over _______?",
    options: ["console.log", "Integers", "Arrays", "Strings"],
    answer: "console.log",
  },
  {
    question: "Which team has won the most European titles?",
    options: ["Liverpool", "Barcelona", "Real Madrid", "Manchester United"],
    answer: "Real Madrid",
  },
];

// Current question index
var currentQuestionIndex = 0;
// Time remaining for the quiz
var time = quizQuestions.length * 15;
// Timer interval id
var timerId;

// Page elements
var timerEl = document.getElementById("timer");
var startBtn = document.getElementById("start-btn");
var questionEl = document.getElementById("question");
var choicesEl = document.getElementById("choices");
var homePageEl = document.getElementById("home-page");
var quizPageEl = document.getElementById("quiz-page");
var endPageEl = document.getElementById("end-page");
var scoreEl = document.getElementById("score");

// Start quiz function
function startQuiz() {
  // Hide home page and show quiz page
  homePageEl.classList.remove("active-page");
  quizPageEl.classList.add("active-page");

  // Start timer
  timerId = setInterval(function () {
    time--;
    timerEl.textContent = "Time: " + time;

    // Check if time has run out
    if (time <= 0) {
      endQuiz();
    }
  }, 1000);

  // Show the first question
  showQuestion();
}

// Show question function
function showQuestion() {
  // Get the current question object
  var questionObject = quizQuestions[currentQuestionIndex];

  // Update the question element
  questionEl.textContent = questionObject.question;

  // Clear any existing choices
  choicesEl.innerHTML = "";

  // Create buttons for each choice
  for (var i = 0; i < questionObject.options.length; i++) {
    var choice = questionObject.options[i];
    var choiceBtn = document.createElement("button");
    choiceBtn.textContent = choice;
    choiceBtn.value = choice;
    choiceBtn.onclick = answerQuestion;
    choicesEl.appendChild(choiceBtn);
  }
}

// Answer question function
function answerQuestion(event) {
  // Compare the chosen answer with the correct answer
  if (event.target.value !== quizQuestions[currentQuestionIndex].answer) {
    // Subtract time for incorrect answers
    time -= 10;
    if (time < 0) {
      time = 0;
    }
    timerEl.textContent = "Time: " + time;
  }

  // Move to the next question
  currentQuestionIndex++;

  // Check if there are more questions
  if (currentQuestionIndex < quizQuestions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

// End quiz function
function endQuiz() {
  // Stop the timer
  clearInterval(timerId);

  // Show end page
  quizPageEl.classList.remove("active-page");
  endPageEl.classList.add("active-page");

  // Show final score
  scoreEl.textContent = time;
}

// Start the quiz when start button is clicked
startBtn.onclick = startQuiz;
