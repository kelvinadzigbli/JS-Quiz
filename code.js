let quizData = [
    {
        question: "In which part of your body would you find the cruciate ligament?",
        a: "Ankle",
        b: "Toe",
        c: "Elbow",
        d: "Knee",
        e: "Shoulder",
        correct: "d",
    },
    {
        question: "Name the Coffee shop in US sitcom Friends?",
        a: "Zoe Park",
        b: "Central Perk",
        c: "Royal Park",
        d: "Burnt Oak",
        e: "Oak Park",
        correct: "b",
    },
    {
        question: "How many times has England won the men’s football World Cup?",
        a: "Once",
        b: "Twice",
        c: "Five times",
        d: "Eight times",
        e: "Six times",
        correct: "a",
    },
    {
        question: "In what year did Tony Blair become British Prime Minister?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "1992",
        e: "none of the above",
        correct: "b",
    },
    {
        question: "Which language is NOT a programming language?",
        a: "JavaScript",
        b: "Python",
        c: "HTML",
        d: "Ruby",
        e: "Java",
        correct: "c",
    },
    {
        question: "What is the capital of Brazil?",
        a: "Rio de Janeiro",
        b: "Sao Paulo",
        c: "Brasilia",
        d: "Las Parmas",
        e: "Belo Horizonte",
        correct: "c",
    },
    {
        question: "When was the first World War fought?",
        a: "1914",
        b: "1915",
        c: "1916",
        d: "1917",
        e: "1918",
        correct: "a",
    },
    {
        question: "Which planet is closest to Sun?",
        a: "Jupiter",
        b: "Saturn",
        c: "Uranus",
        d: "Mars",
        e: "Mercury",
        correct: "e",
    },
    {
        question: "Ice Cube plays the lead character in which film?",
        a: "Menace II Society",
        b: "Juice",
        c: "Paid in Full",
        d: "Boyz In The Hood",
        e: "Above The Rim",
        correct: "d",
    },
    {
        question: "Which Footballer has won the Balon D'or award the most times?",
        a: "Christiano Ronaldo",
        b: "Lionel Messi",
        c: "Ronaldo",
        d: "Ronaldinho",
        e: "Thierry Henry",
        correct: "b",
    },
];

let quiz = document.getElementById("quiz");
let answerEls = document.querySelectorAll(".answer");
let questionEl = document.getElementById("question");
let a_text = document.getElementById("a_text");
let b_text = document.getElementById("b_text");
let c_text = document.getElementById("c_text");
let d_text = document.getElementById("d_text");
let e_text = document.getElementById("e_text");
let submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    let currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    e_text.innerText = currentQuizData.e;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
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
                <h2>You answered ${score}/${quizData.length} questions correctly.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});