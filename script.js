const quizData = [
  {
    question: "What is the capital of India?",
    a: "Mumbai",
    b: "Kolkata",
    c: "Delhi",
    d: "Chennai",
    correct: "c"
  },
  {
    question: "Who developed Python?",
    a: "James Gosling",
    b: "Guido van Rossum",
    c: "Dennis Ritchie",
    d: "Bjarne Stroustrup",
    correct: "b"
  },
  {
    question: "HTML stands for?",
    a: "Hyper Text Markup Language",
    b: "HighText Machine Language",
    c: "Hyper Tabular Markup Language",
    d: "None of these",
    correct: "a"
  },
  {
    question: "Which of these is not a JavaScript data type?",
    a: "String",
    b: "Boolean",
    c: "Float",
    d: "Number",
    correct: "c"
  }
];

const questionEl = document.getElementById("question");
const answersEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const quiz = document.getElementById("quiz");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const current = quizData[currentQuiz];
  questionEl.innerText = current.question;
  a_text.innerText = current.a;
  b_text.innerText = current.b;
  c_text.innerText = current.c;
  d_text.innerText = current.d;
}

function getSelected() {
  let answer;
  answersEls.forEach((el) => {
    if (el.checked) {
      answer = el.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answersEls.forEach((el) => (el.checked = false));
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly!</h2>
        <button onclick="location.reload()">Restart Quiz</button>
      `;
    }
  }
});
