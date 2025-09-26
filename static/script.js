// Variables globales
let questions = JSON.parse(localStorage.getItem('studyQuestions')) || [];
let currentQuestionIndex = 0;
let studyOrder = [];

// Elementos del DOM
const questionForm = document.getElementById('questionForm');
const questionInput = document.getElementById('question');
const answerInput = document.getElementById('answer');
const questionList = document.getElementById('questionList');
const noQuestionsMessage = document.getElementById('noQuestionsMessage');
const studyArea = document.getElementById('studyArea');
const startStudyArea = document.getElementById('startStudyArea');
const startStudyBtn = document.getElementById('startStudyBtn');
const currentQuestionText = document.getElementById('currentQuestionText');
const currentAnswerText = document.getElementById('currentAnswerText');
const questionCount = document.getElementById('questionCount');
const revealBtn = document.getElementById('revealBtn');
const nextBtn = document.getElementById('nextBtn');
const resetBtn = document.getElementById('resetBtn');

// Inicializar la aplicación
function init() {
    renderQuestionList();
    updateUI();
    
    // Event listeners
    questionForm.addEventListener('submit', addQuestion);
    startStudyBtn.addEventListener('click', startStudy);
    revealBtn.addEventListener('click', revealAnswer);
    nextBtn.addEventListener('click', nextQuestion);
    resetBtn.addEventListener('click', resetStudy);
}

// Agregar una nueva pregunta
function addQuestion(e) {
    e.preventDefault();
    
    const questionText = questionInput.value.trim();
    const answerText = answerInput.value.trim();
    
    if (questionText && answerText) {
        const newQuestion = {
            id: Date.now(),
            question: questionText,
            answer: answerText
        };
        
        questions.push(newQuestion);
        saveQuestions();
        renderQuestionList();
        updateUI();
        
        // Limpiar el formulario
        questionInput.value = '';
        answerInput.value = '';
        questionInput.focus();
    }
}

// Eliminar una pregunta
function deleteQuestion(id) {
    questions = questions.filter(q => q.id !== id);
    saveQuestions();
    renderQuestionList();
    updateUI();
}

// Guardar preguntas en localStorage
function saveQuestions() {
    localStorage.setItem('studyQuestions', JSON.stringify(questions));
}

// Renderizar la lista de preguntas
function renderQuestionList() {
    if (questions.length === 0) {
        noQuestionsMessage.classList.remove('hidden');
        questionList.innerHTML = '';
        return;
    }
    
    noQuestionsMessage.classList.add('hidden');
    questionList.innerHTML = '';
    
    questions.forEach(question => {
        const questionItem = document.createElement('div');
        questionItem.className = 'question-item';
        questionItem.innerHTML = `
            <div class="question-text">${question.question}</div>
            <button class="delete-btn" data-id="${question.id}">Eliminar</button>
        `;
        questionList.appendChild(questionItem);
    });
    
    // Agregar event listeners a los botones de eliminar
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            deleteQuestion(id);
        });
    });
}

// Actualizar la interfaz según el estado
function updateUI() {
    if (questions.length === 0) {
        startStudyArea.classList.add('hidden');
    } else {
        startStudyArea.classList.remove('hidden');
    }
}

// Comenzar el modo estudio
function startStudy() {
    if (questions.length === 0) return;
    
    studyOrder = [...Array(questions.length).keys()];
    shuffleArray(studyOrder);
    
    currentQuestionIndex = 0;
    displayQuestion();
    
    studyArea.classList.remove('hidden');
    startStudyArea.classList.add('hidden');
}

// Mostrar la pregunta actual
function displayQuestion() {
    if (studyOrder.length === 0) return;
    
    const questionIndex = studyOrder[currentQuestionIndex];
    const question = questions[questionIndex];
    
    currentQuestionText.textContent = question.question;
    currentAnswerText.textContent = question.answer;
    currentAnswerText.classList.remove('revealed');
    
    questionCount.textContent = `Pregunta ${currentQuestionIndex + 1} de ${studyOrder.length}`;
}

// Revelar la respuesta
function revealAnswer() {
    currentAnswerText.classList.add('revealed');
}

// Pasar a la siguiente pregunta
function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex >= studyOrder.length) {
        currentQuestionIndex = 0;
        shuffleArray(studyOrder);
    }
    
    displayQuestion();
}

// Reiniciar el modo estudio
function resetStudy() {
    studyArea.classList.add('hidden');
    startStudyArea.classList.remove('hidden');
}

// Función para mezclar un array (algoritmo Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Inicializar la aplicación cuando se carga la página
document.addEventListener('DOMContentLoaded', init);