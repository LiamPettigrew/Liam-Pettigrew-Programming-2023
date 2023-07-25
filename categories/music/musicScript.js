// COMMIT 6 - Quiz Functionality

// COMMIT 6 - Array to store the trivia quizQuestions and answers
// COMMIT 10 - Three levels of difficulty questions and answers per category.

// COMMIT 11 - Added quiz questions and answers.
var trivia = {
  1: [
    {
      quizQuestionNumber: "Question 1 of 10",
      quizQuestion: "When was the band 'Dire Straits' founded?",
      quizOptions: ["A) 1964", "B) 1973", "C) 1977", "D) 1984"],
      answer: 2
    },
    {
      quizQuestionNumber: "Question 2 of 10",
      quizQuestion: "Who composed the song 'Take on me'?",
      quizOptions: ["A) Rick Astley", "B) A-ha", "C) Wham!", "D) Kool & The Gang"],
      answer: 1
    },
    {
      quizQuestionNumber: "Question 3 of 10",
      quizQuestion: "Who composed the song 'The Gambler'?",
      quizOptions: ["A) Johnny Cash", "B) Elvis Presley", "C) Mark Knopler", "D) Kenny Rogers"],
      answer: 3
    },
    {
      quizQuestionNumber: "Question 4 of 10",
      quizQuestion: "What year did Michael Jackson die?",
      quizOptions: ["A) 2005", "B) 2008", "C) 2009", "D) 2011"],
      answer: 2
    },
    {
      quizQuestionNumber: "Question 5 of 10",
      quizQuestion: "Where was Elvis Presley born?",
      quizOptions: ["A) Mississippi", "B) California", "C) Nevada", "D) Texas"],
      answer: 0
    },
    {
      quizQuestionNumber: "Question 6 of 10",
      quizQuestion: "'Brothers In Arms' is a well-known album composed by which band?",
      quizOptions: ["A) The Rolling Stones", "B) Dire Straits", "C) Pink Floyd", "D) Eagles"],
      answer: 1
    },
    {
      quizQuestionNumber: "Question 7 of 10",
      quizQuestion: "Which rock'n'roll band composed the song 'I Wanna Rock'?",
      quizOptions: ["A) Primal Scream", "B) AC/DC", "C) Metallica", "D) Twisted Sister"],
      answer: 3
    },
    {
      quizQuestionNumber: "Question 8 of 10",
      quizQuestion: "What is the surname shared by the three brothers in the band 'The Bee Gees'?",
      quizOptions: ["A) Gilmoure", "B) Gordon", "C) Gibb", "D) Grant"],
      answer: 2
    },
    {
      quizQuestionNumber: "Question 9 of 10",
      quizQuestion: "Which one of The Beatles was murdered in 1970?",
      quizOptions: ["A) Pual McCartney", "B) Ringo Starr", "C) George Harrison", "D) John Lennon"],
      answer: 3
    },
    {
      quizQuestionNumber: "Question 10 of 10",
      quizQuestion: "What was Elvis Presley's first number 1 hit song in the U.S.A.?",
      quizOptions: ["A) Hound Dog", "B) Heartbreak Hotel", "C) Jailhouse Rock", "D) Love Me Tender"],
      answer: 1
    },
  ],
  2: [
    {
      quizQuestionNumber: "Question 1 of 10",
      quizQuestion: "Who was the first lead guitarist of the band 'Metallica'?",
      quizOptions: ["A)  Dave Mustaine", "B) James Hetfield", "C) Kirk Hammett", "D) David Gilmour"],
      answer: 0
    },
    {
      quizQuestionNumber: "Question 2 of 10",
      quizQuestion: "Where in New York City was Tupac Shakur born?",
      quizOptions: ["A) Bronx", "B) Brooklyn", "C) Harlem", "D) Queens"],
      answer: 2
    },
    {
      quizQuestionNumber: "Question 3 of 10",
      quizQuestion: "Who was the leader of the band 'Eagles'?",
      quizOptions: ["A) Roger Waters", "B) Jimmy Page", "C) Glenn Frey", "D) Don Henley"],
      answer: 3
    },
    {
      quizQuestionNumber: "Question 4 of 10",
      quizQuestion: "'You're The Inspiration' is a song written in 1984 by which band?",
      quizOptions: ["A) Eagles", "B) Chicago", "C) America", "D) Fleetwood Mac"],
      answer: 1
    },
    {
      quizQuestionNumber: "Question 5 of 10",
      quizQuestion: "Having sold 70 million copies, what is the world's best-selling album?",
      quizOptions: ["A) Their Greatest Hits (Eagles)", "B) Thriller (Michael Jackson)", "C) Saturday Night Fever (The Bee Gees)", "D) The Dark Side of the Moon (Pink Floyd)"],
      answer: 1
    },
    {
      quizQuestionNumber: "Question 6 of 10",
      quizQuestion: "Which of these is NOT an AC/DC song?",
      quizOptions: ["A) Whole Lotta Rosie", "B) Highway to Hell", "C) Fade To Black", "D) Rock N Roll Train"],
      answer: 2
    },
    {
      quizQuestionNumber: "Question 7 of 10",
      quizQuestion: "What was Guns N' Roses best-selling album with 30 million copies sold?",
      quizOptions: ["A) Appetite for Destruction", "B) Use Your Illusion I", "C) Use Your Illusion II", "D) Love Gun"],
      answer: 0
    },
    {
      quizQuestionNumber: "Question 8 of 10",
      quizQuestion: "Where did the band Queen originate from?",
      quizOptions: ["A) New York, U.S.", "B) Manchester, England", "C) Brisbane, Australia", "D) London, England"],
      answer: 3
    },
    {
      quizQuestionNumber: "Question 9 of 10",
      quizQuestion: "Which singer is a godmother to Elton John’s two sons?",
      quizOptions: ["A) Taylor Swift", "B) Lady Gaga", "C) Adele", "D) Beyonce"],
      answer: 1
    },
    {
      quizQuestionNumber: "Question 10 of 10",
      quizQuestion: "The Rock and Roll Hall of Fame is situated in what U.S. State?",
      quizOptions: ["A) California", "B) Miami", "C) Ohio", "D) Illinois"],
      answer: 2
    },
  ],
  3: [
    {
      quizQuestionNumber: "Question 1 of 10",
      quizQuestion: "Which classical music artist composed the song 'Canon in D'?",
      quizOptions: ["A) Mozart", "B) Pachelbel", "C) Beethoven", "D) Bach"],
      answer: 1
    },
    {
      quizQuestionNumber: "Question 2 of 10",
      quizQuestion: "Which classical music artist composed the song 'The Blue Danube'?",
      quizOptions: ["A) Johann Strauss II", "B) Bizet", "C) Chopin", "D) Wagner"],
      answer: 0
    },
    {
      quizQuestionNumber: "Question 3 of 10",
      quizQuestion: "Who is the lead singer of the 2000s band 'Smash Mouth'?",
      quizOptions: ["A) Greg Camp", "B) Michael Klooster", "C) Kurt Cobain", "D) Steven Harwell"],
      answer: 3
    },
    {
      quizQuestionNumber: "Question 4 of 10",
      quizQuestion: "On what yead did the music channel MTV make its debut?",
      quizOptions: ["A) 1969", "B) 1974", "C) 1979", "D) 1981"],
      answer: 3
    },
    {
      quizQuestionNumber: "Question 5 of 10",
      quizQuestion: "Elton John’s 1976 hit 'Don’t Go Breaking My Heart' was a duet with which vocalist?",
      quizOptions: ["A) Tina Turner", "B) Dolly Parton", "C) Kiki Dee", "D) Pat Benatar"],
      answer: 2
    },
    {
      quizQuestionNumber: "Question 6 of 10",
      quizQuestion: "Along with Dire Straits, who sung in the 1985 hit 'Money For Nothing'?",
      quizOptions: ["A) Sting", "B) George Michael", "C) David Bowie", "D) Rick Astley"],
      answer: 0
    },
    {
      quizQuestionNumber: "Question 7 of 10",
      quizQuestion: "'Round the outside' is a line repeated in which rap song by Eminem?",
      quizOptions: ["A) Mockingbird", "B) Without Me", "C) Superman", "D) My Name Is"],
      answer: 1
    },
    {
      quizQuestionNumber: "Question 8 of 10",
      quizQuestion: "What was Elvis Presley’s middle name?",
      quizOptions: ["A) Paul", "B) Roger", "C) Reginald", "D) Aaron"],
      answer: 3
    },
    {
      quizQuestionNumber: "Question 9 of 10",
      quizQuestion: "ABBA originated in which country?",
      quizOptions: ["A) England", "B) Sweden", "C) Denmark", "D) Finland"],
      answer: 1
    },
    {
      quizQuestionNumber: "Question 10 of 10",
      quizQuestion: "Ozzy Osbourne was the lead vocalist of which heavy metal band?",
      quizOptions: ["A) Led Zeppelin", "B) Iron Maiden", "C) Motörhead", "D) Black Sabbath"],
      answer: 3
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