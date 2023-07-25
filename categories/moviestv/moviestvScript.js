// COMMIT 6 - Quiz Functionality

// COMMIT 6 - Array to store the trivia quizQuestions and answers
// COMMIT 10 - Three levels of difficulty questions and answers per category.

// COMMIT 11 - Added quiz questions and answers.
var trivia = {
  1: [
    {
      quizQuestionNumber: "Question 1 of 10",
      quizQuestion: "In what year was the first season of 'Seinfeld' released?",
      quizOptions: ["A) 1979", "B) 1985", "C) 1989", "D) 1993"],
      answer: 2
    },
    {
      quizQuestionNumber: "Question 2 of 10",
      quizQuestion: "Along with Jerry Seinfeld, who co-created Seinfeld?",
      quizOptions: ["A) Larry Charles", "B) Larry David", "C) Jason Alexander", "D) Ray Romano"],
      answer: 1
    },
    {
      quizQuestionNumber: "Question 3 of 10",
      quizQuestion: "As of 2023, how many seasons of The Simpsons are there?",
      quizOptions: ["A) 18", "B) 23", "C) 28", "D) 34"],
      answer: 3
    },
    {
      quizQuestionNumber: "Question 4 of 10",
      quizQuestion: "'Happy Gilmore' and 'Billy Madison' are comedy films starring which actor?",
      quizOptions: ["A) Will Ferrel", "B) Jim Carrey", "C) Adam Sandler", "D) Ben Stiller"],
      answer: 2
    },
    {
      quizQuestionNumber: "Question 5 of 10",
      quizQuestion: "Who directed the 2010 film 'Shutter Island'?",
      quizOptions: ["A) Martin Scorsese", "B) Steven Spielberg", "C) Christopher Nolan", "D) Wes Anderson"],
      answer: 0
    },
    {
      quizQuestionNumber: "Question 6 of 10",
      quizQuestion: "Which of these movies does Bill Murray NOT star in?",
      quizOptions: ["A) Groundhog Day", "B) Old School", "C) Zombieland", "D) What About Bob?"],
      answer: 1
    },
    {
      quizQuestionNumber: "Question 7 of 10",
      quizQuestion: "The American version of the sitcom 'The Office' ran from what years?",
      quizOptions: ["A) 2001-2006", "B) 2005-2013", "C) 2009-2015", "D) 2011-2016"],
      answer: 1
    },
    {
      quizQuestionNumber: "Question 8 of 10",
      quizQuestion: "The original 'Top Gun' premiered in what year?",
      quizOptions: ["A) 1983", "B) 1985", "C) 1986", "D) 1989"],
      answer: 2
    },
    {
      quizQuestionNumber: "Question 9 of 10",
      quizQuestion: "How many main cast actors are in the sitcom 'Friends'?",
      quizOptions: ["A) 3", "B) 4", "C) 5", "D) 6"],
      answer: 3
    },
    {
      quizQuestionNumber: "Question 10 of 10",
      quizQuestion: "Hank Schrader is played by which actor in the series 'Breaking Bad'?",
      quizOptions: ["A) Dean Norris", "B) Bryan Cranston", "C) Vince Gilligan", "D) Bob Odenkirk"],
      answer: 0
    },
  ],
  2: [
    {
      quizQuestionNumber: "Question 1 of 10",
      quizQuestion: "In Better Call Saul, Jimmy McGill (later Gene Takovic) worked at a Cinnabon in which state?",
      quizOptions: ["A) New Mexico", "B) Illinois", "C) Nebraska", "D) Connecticut"],
      answer: 2
    },
    {
      quizQuestionNumber: "Question 2 of 10",
      quizQuestion: "For which movie did Steven Spielberg win his first Oscar for Best Director?",
      quizOptions: ["A) Jaws", "B) Jurassic Park", "C) E.T.", "D) Schindler's List"],
      answer: 3
    },
    {
      quizQuestionNumber: "Question 3 of 10",
      quizQuestion: "'Nobody puts Baby in a corner' is a famous quote from which movie?",
      quizOptions: ["A) Back To The Future", "B) Dirty Dancing", "C) Caddyshack", "D) The Wedding Singer"],
      answer: 1
    },
    {
      quizQuestionNumber: "Question 4 of 10",
      quizQuestion: "'Toto, I've a feeling we're not in Kansas anymore' is another famous quote from which movie?",
      quizOptions: ["A) The Wizard of Oz", "B) Frankenstein", "C) Alice in Wonderland", "D) Mary Poppins"],
      answer: 0
    },
    {
      quizQuestionNumber: "Question 5 of 10",
      quizQuestion: "National Lampoon's 'Vacation' film franchise stars which lead actor?",
      quizOptions: ["A) Steve Martin", "B) Rob Schneider", "C) Eugene Levy", "D) Chevy Chase"],
      answer: 3
    },
    {
      quizQuestionNumber: "Question 6 of 10",
      quizQuestion: "Who is the only actor to receive an Oscar nomination for acting in a 'Lord of the Rings' movie?",
      quizOptions: ["A) Elijah Wood", "B) Sean Astin", "C) Ian McKellen", "D) Orlando Bloom"],
      answer: 2
    },
    {
      quizQuestionNumber: "Question 7 of 10",
      quizQuestion: "What is the highest-grossing R-rated movie of all time?",
      quizOptions: ["A) Ted", "B) Joker", "C) The Hangover", "D) Child's Play 2"],
      answer: 1
    },
    {
      quizQuestionNumber: "Question 8 of 10",
      quizQuestion: "The code in The Matrix comes from what food recipes?",
      quizOptions: ["A) Sushi", "B) Dumplings", "C) Stir-fry", "D) Pad thai"],
      answer: 0
    },
    {
      quizQuestionNumber: "Question 9 of 10",
      quizQuestion: "Which country does Forrest Gump travel to as part of the All-American Ping-Pong Team?",
      quizOptions: ["A) Vietnam", "B) China", "C) Sweden", "D) France"],
      answer: 1
    },
    {
      quizQuestionNumber: "Question 10 of 10",
      quizQuestion: "Who was the first Black person to win an Oscar?",
      quizOptions: ["A) Sidney Poitier", "B) Dorothy Dandridge", "C) James Earl Jones", "D) Hattie McDaniel"],
      answer: 3
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