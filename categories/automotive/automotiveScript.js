// COMMIT 6 - Quiz Functionality

// COMMIT 6 - Array to store the trivia quizQuestions and answers
// COMMIT 10 - Three levels of difficulty questions and answers per category.

// COMMIT 11 - Added quiz questions and answers.
var trivia = {
  1: [
    {
      quizQuestionNumber: "Question 1 of 10",
      quizQuestion: "The Sentra, Altima, and Pathfinder are all car models made by what maker?",
      quizOptions: ["A) Ford", "B) Honda", "C) Nissan", "D) Toyota"],
      answer: 2
    },
    {
      quizQuestionNumber: "Question 2 of 10",
      quizQuestion: "Lexus is a luxury car brand owned by which parent maker",
      quizOptions: ["A) Toyota", "B) Honda", "C) Hyaundai", "D) Mazda"],
      answer: 0
    },
    {
      quizQuestionNumber: "Question 3 of 10",
      quizQuestion: "The Impreza is a car model made by what maker?",
      quizOptions: ["A) Toyota", "B) Subaru", "C) Holden", "D) Kia"],
      answer: 1
    },
    {
      quizQuestionNumber: "Question 4 of 10",
      quizQuestion: "What country are Tesla cars mainly manufactured in?",
      quizOptions: ["A) Japan", "B) China", "C) United Kingdom", "D) United States"],
      answer: 3
    },
    {
      quizQuestionNumber: "Question 5 of 10",
      quizQuestion: "Where does Volkswagen originate from?",
      quizOptions: ["A) United Kingdom", "B) France", "C) Germany", "D) Italy"],
      answer: 2
    },
    {
      quizQuestionNumber: "Question 6 of 10",
      quizQuestion: "Acura is a car brand manufactured by which parent maker?",
      quizOptions: ["A) Nissan", "B) Honda", "C) BMW", "D) Audi"],
      answer: 1
    },
    {
      quizQuestionNumber: "Question 7 of 10",
      quizQuestion: "What is the name of the motorway system in Germany?",
      quizOptions: ["A) Autobahn", "B) Germany Carriageway", "C) Westschnellweg", "D) Industrieweg"],
      answer: 0
    },
    {
      quizQuestionNumber: "Question 8 of 10",
      quizQuestion: "What is the speed limit of the Autobahn?",
      quizOptions: ["A) 100km/h", "B) 130km/h", "C) 150km/h", "D) No limit"],
      answer: 3
    },
    {
      quizQuestionNumber: "Question 9 of 10",
      quizQuestion: "What is the world’s all-time best selling car?",
      quizOptions: ["A) Volkswagen Beetle", "B) Toyota Corolla", "C) Honda Accord", "D) Ford Model T"],
      answer: 1
    },
    {
      quizQuestionNumber: "Question 10 of 10",
      quizQuestion: "In which year did Henry Ford establish the Ford Motor Company?",
      quizOptions: ["A) 1886", "B) 1896", "C) 1903", "D) 1911"],
      answer: 2
    },
  ],
  2: [
    {
      quizQuestionNumber: "Question 1 of 10",
      quizQuestion: "What does BMW stand for?",
      quizOptions: ["A) Berlin Motor Wagons", "B) Bielefeld Motor Wagons", "C) Berlin Mobile Works", "D) Bavarian Motor Works"],
      answer: 3
    },
    {
      quizQuestionNumber: "Question 2 of 10",
      quizQuestion: "Founded in 1883, what is the oldest car company still in business today?",
      quizOptions: ["A) Mitsubishi Motors", "B) Mercedes-Benz", "C) BMW", "D) Cadillac"],
      answer: 1
    },
    {
      quizQuestionNumber: "Question 3 of 10",
      quizQuestion: "Who bought Rolls Royce in 1998?",
      quizOptions: ["A) Audi", "B) General Motors", "C) BMW", "D) Ferrari"],
      answer: 2
    },
    {
      quizQuestionNumber: "Question 4 of 10",
      quizQuestion: "Which is NOT a brand within the General Motors car company?",
      quizOptions: ["A) Ford", "B) Chevrolet", "C) Cadillac", "D) Buick"],
      answer: 0
    },
    {
      quizQuestionNumber: "Question 5 of 10",
      quizQuestion: "What is the most popular car color?",
      quizOptions: ["A) Grey", "B) Black", "C) White", "D) Silver"],
      answer: 2
    },
    {
      quizQuestionNumber: "Question 6 of 10",
      quizQuestion: "Dodge’s logo is of what animal?",
      quizOptions: ["A) Bull", "B) Horse", "C) Pony", "D) Ram"],
      answer: 3
    },
    {
      quizQuestionNumber: "Question 7 of 10",
      quizQuestion: "What was the first American-produced Japanese car?",
      quizOptions: ["A) Toyota Corolla", "B) Honda Accord", "C) Nissan Qashqai", "D) Mitsubishi Lancer"],
      answer: 1
    },
    {
      quizQuestionNumber: "Question 8 of 10",
      quizQuestion: "What country is Kia based in?",
      quizOptions: ["A) South Korea", "B) Japan", "C) China", "D) Vietnam"],
      answer: 0
    },
    {
      quizQuestionNumber: "Question 9 of 10",
      quizQuestion: "What luxury car brand has a “Spirit of Ecstacy” hood ornament?",
      quizOptions: ["A) Ferrari", "B) Mercedes-Benz", "C) Audi", "D) Rolls Royce"],
      answer: 3
    },
    {
      quizQuestionNumber: "Question 10 of 10",
      quizQuestion: "The world’s first electric traffic light was installed in 1914 in which U.S. city?",
      quizOptions: ["A) Chicago", "B) San Francisco", "C) Cleveland", "D) Kansas City"],
      answer: 2
    },
  ],
  3: [
    {
      quizQuestionNumber: "Question 1 of 10",
      quizQuestion: "Quiz question l3",
      quizOptions: ["A", "B", "C", "D"],
      answer: 0
    },
    {
      quizQuestionNumber: "Question 2 of 10",
      quizQuestion: "Quiz question3l2",
      quizOptions: ["A", "B", "C", "D"],
      answer: 0
    },
    {
      quizQuestionNumber: "Question 3 of 10",
      quizQuestion: "Quiz questionl33",
      quizOptions: ["A", "B", "C", "D"],
      answer: 0
    },
    {
      quizQuestionNumber: "Question 4 of 10",
      quizQuestion: "Quiz question",
      quizOptions: ["A", "B", "C", "D"],
      answer: 0
    },
    {
      quizQuestionNumber: "Question 5 of 10",
      quizQuestion: "Quiz question",
      quizOptions: ["A", "B", "C", "D"],
      answer: 0
    },
    {
      quizQuestionNumber: "Question 6 of 10",
      quizQuestion: "Quiz question",
      quizOptions: ["A", "B", "C", "D"],
      answer: 0
    },
    {
      quizQuestionNumber: "Question 7 of 10",
      quizQuestion: "Quiz question",
      quizOptions: ["A", "B", "C", "D"],
      answer: 0
    },
    {
      quizQuestionNumber: "Question 8 of 10",
      quizQuestion: "Quiz question",
      quizOptions: ["A", "B", "C", "D"],
      answer: 0
    },
    {
      quizQuestionNumber: "Question 9 of 10",
      quizQuestion: "Quiz question",
      quizOptions: ["A", "B", "C", "D"],
      answer: 0
    },
    {
      quizQuestionNumber: "Question 10 of 10",
      quizQuestion: "Quiz question",
      quizOptions: ["A", "B", "C", "D"],
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