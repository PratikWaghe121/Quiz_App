const quizData = [
    {
        question: "What part of the plant conducts photosynthesis?",
        a: "Branch",
        b: "Leaf",
        c: "Root",
        d: "Trunk",
        correct: "b",
    },
    {
        question: "What is the boiling point of water?",
        a: " 25°C",
        b: " 50°C",
        c: "75°C",
        d: "100°C",
        correct: "d",
    },
    {
        question: "____ helps pump blood through the entire body.",
        a: "Lungs",
        b: "Kidneys",
        c: "Heart",
        d: "Brain",
        correct: "c",
    },
    {
        question: "What part of the skeletal system protects the brain?",
        a: "Spine",
        b: "Thigh",
        c: "Pelvis",
        d: "Skull",
        correct: "d",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})