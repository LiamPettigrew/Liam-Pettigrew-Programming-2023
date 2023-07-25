// COMMIT 6 - Quiz Functionality

// COMMIT 6 - Array to store the trivia quizQuestions and answers
// COMMIT 10 - Three levels of difficulty questions and answers per category.

// COMMIT 11 - Added quiz questions and answers.
var trivia = {
  1: [
    {
      quizQuestionNumber: "Question 1 of 10",
      quizQuestion: "What continent is Turkey in?",
      quizOptions: ["A) Asia", "B) Asia and Europe", "C) Europe", "D) Africa"],
      answer: 1
    },
    {
      quizQuestionNumber: "Question 2 of 10",
      quizQuestion: "What continent is Afghanistan in?",
      quizOptions: ["A) Asia", "B) Asia and Europe", "C) Europe", "D) South America"],
      answer: 0
    },
    {
      quizQuestionNumber: "Question 3 of 10",
      quizQuestion: "What continent is Madagascar in?",
      quizOptions: ["A) Asia", "B) Africa", "C) Oceania", "D) South America"],
      answer: 1
    },
    {
      quizQuestionNumber: "Question 4 of 10",
      quizQuestion: "What continent is Costa Rica in?",
      quizOptions: ["A) Africa", "B) Oceania", "C) South America", "D) North America"],
      answer: 3
    },
    {
      quizQuestionNumber: "Question 5 of 10",
      quizQuestion: "What continent is Slovakia in?",
      quizOptions: ["A) Africa", "B) Asia", "C) Europe", "D) South America"],
      answer: 2
    },
    {
      quizQuestionNumber: "Question 6 of 10",
      quizQuestion: "What is the capital city of Australia?",
      quizOptions: ["A) Sydney", "B) Canberra", "C) Brisbane", "D) Melbourne"],
      answer: 1
    },
    {
      quizQuestionNumber: "Question 7 of 10",
      quizQuestion: "What is the capital city of Germany?",
      quizOptions: ["A) Hamburg", "B) Frankfurt", "C) Amsterdam", "D) Berlin"],
      answer: 3
    },
    {
      quizQuestionNumber: "Question 8 of 10",
      quizQuestion: "What is the capital city of Taiwan?",
      quizOptions: ["A) Taipei", "B) Shanghai", "C) Hong Kong", "D) Beijing"],
      answer: 0
    },
    {
      quizQuestionNumber: "Question 9 of 10",
      quizQuestion: "What is the capital city of Canada?",
      quizOptions: ["A) Montreal", "B) Ottawa", "C) Toronto", "D) Vancouver"],
      answer: 1
    },
    {
      quizQuestionNumber: "Question 10 of 10",
      quizQuestion: "What is the capital city of Sweden?",
      quizOptions: ["A) Gothenburg", "B) Helsinki", "C) Stockholm", "D) Oslo"],
      answer: 2
    },
  ],
  2: [
    {
      quizQuestionNumber: "Question 1 of 10",
      quizQuestion: "What continent is Liberia in?",
      quizOptions: ["A) Oceania", "B) Europe", "C) South America", "D) Africa"],
      answer: 3
    },
    {
      quizQuestionNumber: "Question 2 of 10",
      quizQuestion: "What continent is Uruguay in?",
      quizOptions: ["A) Europe", "B) Asia", "C) South America", "D) Africa"],
      answer: 2
    },
    {
      quizQuestionNumber: "Question 3 of 10",
      quizQuestion: "What continent is Brunei in?",
      quizOptions: ["A) Europe", "B) Asia", "C) South America", "D) Africa"],
      answer: 1
    },
    {
      quizQuestionNumber: "Question 4 of 10",
      quizQuestion: "What state in the U.S.A. is Chicago in?",
      quizOptions: ["A) Michigan", "B) Ohio", "C) Minnesota", "D) Illinois"],
      answer: 3
    },
    {
      quizQuestionNumber: "Question 5 of 10",
      quizQuestion: "What state in the U.S.A. is New Orleans in?",
      quizOptions: ["A) Louisiana", "B) Texas", "C) Arkansas", "D) Oklahoma"],
      answer: 0
    },
    {
      quizQuestionNumber: "Question 6 of 10",
      quizQuestion: "What state in the U.S.A. is Kansas City in?",
      quizOptions: ["A) Missouri", "B) Iowa", "C) Kansas", "D) Nebraska"],
      answer: 0
    },
    {
      quizQuestionNumber: "Question 7 of 10",
      quizQuestion: "British Columbia is a district/provence in which country?",
      quizOptions: ["A) Columbia", "B) England", "C) Canada", "D) Australia"],
      answer: 2
    },
    {
      quizQuestionNumber: "Question 8 of 10",
      quizQuestion: "What is the capital city of Vietnam?",
      quizOptions: ["A) Bangkok", "B) Hanoi", "C) Ho Chi Minh City", "D) Vientiane"],
      answer: 1
    },
    {
      quizQuestionNumber: "Question 9 of 10",
      quizQuestion: "Kathmandu is the capital city of which country?",
      quizOptions: ["A) Bangladesh", "B) Mongolia", "C) Kazakhstan", "D) Nepal"],
      answer: 3
    },
    {
      quizQuestionNumber: "Question 10 of 10",
      quizQuestion: "Which one of these ISN'T a capital city of South Africa?",
      quizOptions: ["A) Pretoria", "B) Cape Town", "C) Gaborone", "D) Bloemfontein"],
      answer: 2
    },
  ],
  3: [
    {
      quizQuestionNumber: "Question 1 of 10",
      quizQuestion: "Which country has the longest coastline?",
      quizOptions: ["A) Canada", "B) Brazi", "C) Russia", "D) Chile"],
      answer: 0
    },
    {
      quizQuestionNumber: "Question 2 of 10",
      quizQuestion: "Which one of the following countries is not on the Baltic sea?",
      quizOptions: ["A) Germany", "B) Latvia", "C) Lithuania", "D) Belarus"],
      answer: 3
    },
    {
      quizQuestionNumber: "Question 3 of 10",
      quizQuestion: "In which country can you find the islands of Saaremaa and Hiiumaa?",
      quizOptions: ["A) Norway", "B) Finland", "C) Estonia", "D) Denmark"],
      answer: 2
    },
    {
      quizQuestionNumber: "Question 4 of 10",
      quizQuestion: "Little Havana and Little Haiti are districts of which city?",
      quizOptions: ["A) Los Angeles", "B) Miami", "C) New York", "D) San Francisco"],
      answer: 1
    },
    {
      quizQuestionNumber: "Question 5 of 10",
      quizQuestion: "What are two countries that Brazil does NOT share a border with.",
      quizOptions: ["A) Ecuador and Peru", "B) Guyana and Venezuela", "C) Uruguay and Argentina", "D) Chile and Ecuador"],
      answer: 3
    },
    {
      quizQuestionNumber: "Question 6 of 10",
      quizQuestion: "Which is the world's deepest lake?",
      quizOptions: ["A) Vostok (Antartica)", "B) Baikal (Russia)", "C) Issyk-Kul (Kyrgyzstan)", "D) Tanganyika (Africa)"],
      answer: 1
    },
    {
      quizQuestionNumber: "Question 7 of 10",
      quizQuestion: "Which is the world's largest inland body of water?",
      quizOptions: ["A) Caspian Sea", "B) Gulf of Mexico", "C) Black Sea", "D) Lake Superior"],
      answer: 0
    },
    {
      quizQuestionNumber: "Question 8 of 10",
      quizQuestion: "The ancient city Byblos is located in which country?",
      quizOptions: ["A) Jordan", "B) Greece", "C) Lebanon", "D) Egypt"],
      answer: 2
    },
    {
      quizQuestionNumber: "Question 9 of 10",
      quizQuestion: "How many time zones does Australia have?",
      quizOptions: ["A) One", "B) Three", "C) Five", "D) Eight"],
      answer: 1
    },
    {
      quizQuestionNumber: "Question 10 of 10",
      quizQuestion: "What is the least populated U.S. state?",
      quizOptions: ["A) Wyoming", "B) Alaska", "C) Utah", "D) Rhode Island"],
      answer: 0
    },
  ],
};

// COMMIT 6 - Variables

var selectedDifficulty;

var currentQuestion = 0;
var score = 0;
var timerEnabled = false;
var timerInterval;

var quizQuestionNumberElement = document.getElementById("quizQuestionNumber")
var quizQuestionElement = document.getElementById("quizQuestion");
var quizOptionsElement = document.getElementById("quizOptions");
var quizResultElement = document.getElementById("quizResult");
var quizNextButton = document.getElementById("quizNextButton");

// COMMIT 8 - Timer variables + start screen and restart button
var startScreen = document.getElementById("startScreen");
var timerYesButton = document.getElementById("timerYes");
var timerNoButton = document.getElementById("timerNo");
var timerElement = document.getElementById("timer");
var timerCountElement = document.getElementById("timerCount");
var restartButton = document.getElementById("restartBtn");
var timerIcon = document.getElementById("timerIcon");

// COMMIT 10 - Difficulty selection
var difficultyLevelSelect = document.getElementById("difficultyLevel");

// COMMIT 8 - Show start screen

function showStartScreen() {
  quizQuestionElement.style.display = "none";
  timerElement.style.display = "none";
  quizNextButton.style.display = "none";
  quizQuestionNumberElement.style.display = "none";
  startScreen.style.display = "block";
  quizResultElement.style.display = "none";
  restartButton.style.display = "none";
  timerIcon.style.display = "none";
}

function startGame() {
  
  startScreen.style.display = "none";
  timerElement.style.display = "block";
  quizNextButton.style.display = "initial";
  quizQuestionNumberElement.style.display = "block";
  quizQuestionElement.style.display = "block";
  timerIcon.style.display = "block";
  loadQuestion();
}

// COMMIT 6 - Quiz panel UI

function loadQuestion() {
  var q = trivia[selectedDifficulty][currentQuestion];
  quizQuestionNumberElement.textContent = q.quizQuestionNumber;
  quizQuestionElement.textContent = q.quizQuestion;

  quizOptionsElement.style.display = "block";

  quizOptionsElement.innerHTML = "";
  for (var i = 0; i < q.quizOptions.length; i++) {
    var quizButton = document.createElement("button");
    quizButton.textContent = q.quizOptions[i];
    quizButton.addEventListener("click", checkAnswer);
    quizOptionsElement.appendChild(quizButton);
  }

  if (currentQuestion === trivia[selectedDifficulty].length - 1) {
    quizNextButton.textContent = "Finish";
  }

  // COMMIT 8 - Show timer

  if (timerEnabled) {
    startTimer();
  } else {
    timerElement.style.display = "none";
    timerIcon.style.display = "none";
  }
}

// COMMIT 6 - Checks if answer is correct or incorrect

function checkAnswer(event) {
  var selectedOption = event.target;
  var answerIndex = trivia[selectedDifficulty][currentQuestion].answer;
  quizResultElement.style.display = "block";
  // COMMIT 9 - Fixed bug where the quiz wouldn't tell you if you got the questions correct or incorrect.

  if (selectedOption.textContent === trivia[selectedDifficulty][currentQuestion].quizOptions[answerIndex]) {
    score++;
    quizResultElement.textContent = "Correct!";
    selectedOption.classList.add("correct");
  } else {
    quizResultElement.textContent = "Incorrect!";
    selectedOption.classList.add("incorrect");
  }

  // COMMIT 6 - Disable all buttons after answering
  // COMMIT 7 - Fixed the bug where buttons could be infinitely pressed on the same question.
  var buttons = quizOptionsElement.getElementsByTagName("button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
    if (i === answerIndex) {
      buttons[i].classList.add("correct");
    }
  }

  // COMMIT 8 - Clear timer after answering

  if (timerEnabled) {
    clearInterval(timerInterval);
  }

  currentQuestion++;

  if (currentQuestion < trivia[selectedDifficulty].length + 1) {
    quizNextButton.disabled = false;
  } else {
    showResults();
  }
}

// COMMIT 6 - Shows the results after completing quiz.
// COMMIT 7 - Quiz allows you to press "Finish" before seeing results to see if you got the question correct or incorrect.

function showResults() {
  quizQuestionElement.style.display = "none";
  quizNextButton.style.display = "none";
  quizOptionsElement.style.display = "none";
  quizQuestionNumberElement.style.display = "none";
  timerElement.style.display = "none";
  timerIcon.style.display = "none";

  // COMMIT 8 - Allows the user to restart the game after completing.

  quizResultElement.textContent = "You answered " + score + " out of " + trivia[selectedDifficulty].length + " questions correct.";
  restartButton.addEventListener("click", restartGame);
  quizResultElement.style.display = "block";
  restartButton.style.display = "block";
}

function nextQuestion() {
  if (currentQuestion < trivia[selectedDifficulty].length) {
    loadQuestion();
    quizNextButton.disabled = true;
    
    // COMMIT 6 - Enable buttons for the new quizQuestion
    var buttons = quizOptionsElement.getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].disabled = false;
      buttons[i].classList.remove("correct", "incorrect");
    }
    
    quizResultElement.textContent = "";
  } else {
    showResults();
  }
}

// COMMIT 8 - Adds ten second timer when timer mode is selected.

function startTimer() {
  var timeLeft = 10;
  timerElement.style.display = "block";
  timerCountElement.textContent = timeLeft;

  timerInterval = setInterval(function() {
    timeLeft--;
    timerCountElement.textContent = timeLeft;

    if (timeLeft <= 0) {
      // COMMIT 8 - If time runs out, you cannot answer.
      clearInterval(timerInterval);
      quizResultElement.textContent = "Time's up! Incorrect!";
      quizResultElement.style.display = "block";
      quizNextButton.disabled = false;

      var buttons = quizOptionsElement.getElementsByTagName("button");
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
        if (i === trivia[selectedDifficulty][currentQuestion].answer) {
          buttons[i].classList.add("correct");
        }
      }

      currentQuestion++;

      if (currentQuestion < trivia[selectedDifficulty].length) {
        quizNextButton.disabled = false;
      } else {
        showResults();
      }
    }
  }, 1000);
}

// COMMIT 8 - Restart the game after completing.

function restartGame() {
  currentQuestion = 0;
  score = 0;
  // COMMIT 10 - Fixed bug where timer would still be enabled after completing quiz.
  clearInterval(timerInterval);
  quizNextButton.disabled = true;
  quizNextButton.textContent = "Next";
  showStartScreen();
}


// COMMIT 8 - Timer yes or no modes.
timerYesButton.addEventListener("click", function() {
  timerEnabled = true;
  selectedDifficulty = difficultyLevelSelect.value;
  startGame();
});

timerNoButton.addEventListener("click", function() {
  timerEnabled = false;
  selectedDifficulty = difficultyLevelSelect.value;
  startGame();
});


quizNextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", restartGame);

showStartScreen();