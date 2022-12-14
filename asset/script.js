const startBut = document.querySelector(".start");
const setTimer = document.querySelector(".timer");
const testQuestion = document.querySelector(".question");
const buttonB1 = document.querySelector(".b1");
const buttonB2 = document.querySelector(".b2");
const buttonB3 = document.querySelector(".b3");
const buttonB4 = document.querySelector(".b4");
const corWrong = document.querySelector(".corWrong");
const storedScore = document.querySelector(".score");
let timerInterval;

//----------------------------Here is where I set the time to 120 seconds--------------------------------
let secondsLeft = 120;
function setTime() {
  timerInterval = setInterval(function () {
    secondsLeft--;
    setTimer.textContent = secondsLeft;
    if (secondsLeft <= 0) {

      clearInterval(setTime);
      window.location = "highScore.html";
    }
  }, 1000);
}

//------------------------------------here is where i put the questions------------------------------
const questions = [
  {
    query: "inside Which HTML element do we put the JavaScript?",
    answers: [
      { text: "<js>" },
      { text: "<javascript>" },
      { text: "<script>", correct: true },
      { text: "<scripting>" },
    ],
  },
  {
    query: "How do you create a function in JavaScript?",
    answers: [
      { text: "function = myFunction()" },
      { text: "function: myFunction" },
      { text: "function:my-Function" },
      { text: "function myFunction()", correct: true },
    ],
  },
  {
    query:
      "How to write an IF statement in JavaScript?",
    answers: [
      { text: "if i == 5 then" },
      { text: "if i = 5" },
      { text: "if i = 5 then" },
      { text: "if i == 5", correct: true },
    ],
  },
  {
    query:
      "Which event occurs when the user clicks on an HTML element?",
    answers: [
      { text: "onmouseclick" },
      { text: "onchange" },
      { text: "onclick", correct: true },
      { text: "onmouseover" },
    ],
  },
  {
    query: "Which operator is used to assign a value to a variable?",
    answers: [
      { text: "-" },
      { text: "x" },
      { text: "=", correct: true },
      { text: "*" },
    ],
  },
];

function handleAnswer(answer, questionIndex) {
  console.log(answer);

//--------------------------------------------------Here is where you see if the answer is correct or not-------
  const isCorrect = answer.correct === true;


//-------------------------------------Here is where it subtracts time for a wrong answer----------------------------------------
  if (isCorrect) {
    corWrong.textContent = "Correct";
  } else {
    corWrong.textContent = "Wrong";
    secondsLeft -= 10;
  }


//-----------------------------------Brings you to the next question------------------------------------------------------ 
  askQuestion(questionIndex + 1);
}

const buttons = [buttonB1, buttonB2, buttonB3, buttonB4];

//-------------------------------------------------Shows questions on the screen,shows text on the button, and clears questions so that the buttons can be used again 
function askQuestion(index) {
  const question = questions[index];
  testQuestion.textContent = question.query;
 
  buttons.forEach((button, buttonIndex) => {
  
    button.onclick = null;
  
    const answer = question.answers[buttonIndex];
  
    button.textContent = answer.text;
//----------------------------------------------------------here is where i put the event handler--------------------------------------------------------------------   
    button.addEventListener("click", (e) => {
      handleAnswer(answer, index);
    });
  });
}



setTime();
askQuestion(0);