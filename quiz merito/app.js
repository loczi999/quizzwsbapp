let questions = [];
let currentQuestionIndex = 0;
let score = 0;

const loadingEl = document.getElementById('loading');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const questionText = document.getElementById('question-text');
const currentQSpan = document.getElementById('current-q');
const totalQSpan = document.getElementById('total-q');
const scoreSpan = document.getElementById('score');
const optionBtns = document.querySelectorAll('.option-btn');

// Pobieranie pytań z PHP
fetch('api.php')
    .then(res => res.json())
    .then(data => {
        questions = data;
        totalQSpan.innerText = questions.length;
        loadingEl.classList.add('hidden');
        if (questions.length > 0) {
            quizContainer.classList.remove('hidden');
            loadQuestion();
        } else {
            loadingEl.innerText = "Brak pytań w bazie.";
            loadingEl.classList.remove('hidden');
        }
    })
    .catch(err => {
        console.error(err);
        loadingEl.innerText = "Błąd pobierania danych.";
    });

function loadQuestion() {
    const currentQ = questions[currentQuestionIndex];
    questionText.innerText = currentQ.question_text;
    currentQSpan.innerText = currentQuestionIndex + 1;

    optionBtns.forEach(btn => {
        const optKey = btn.getAttribute('data-opt'); // a, b, c, d
        // Zakładamy, że kolumny w bazie nazywają się option_a, option_b itd.
        btn.innerText = currentQ[`option_${optKey}`];
        btn.classList.remove('correct', 'wrong');
        btn.disabled = false;
    });
}

optionBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const selected = e.target.getAttribute('data-opt');
        const correct = questions[currentQuestionIndex].correct_answer;

        optionBtns.forEach(b => b.disabled = true); // Blokada klikania

        if (selected === correct) {
            e.target.classList.add('correct');
            score++;
        } else {
            e.target.classList.add('wrong');
            // Pokaż poprawną odpowiedź
            document.querySelector(`button[data-opt="${correct}"]`).classList.add('correct');
        }

        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                loadQuestion();
            } else {
                showResult();
            }
        }, 1500);
    });
});

function showResult() {
    quizContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
    scoreSpan.innerText = `${score} / ${questions.length}`;
}

// Rejestracja Service Workera (PWA)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('SW zarejestrowany:', reg))
            .catch(err => console.log('SW błąd:', err));
    });
}