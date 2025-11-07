const themeCheckbox = document.getElementById('theme-checkbox');
const currentTheme = localStorage.getItem('theme') || 'light';

// Apply the saved theme on page load
if (currentTheme === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    themeCheckbox.checked = true;
}

themeCheckbox.addEventListener('change', () => {
    if (themeCheckbox.checked) {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
});
const loader = document.getElementById('loader');
const content = document.getElementById('content');
const unauthorized = document.getElementById('unauthorized');


loader.style.display = 'block';

// Lazy load Firebase modules
async function loadFirebaseModules() {
    const { initializeApp } = await import("https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js");
    const { getAuth, signOut, onAuthStateChanged, setPersistence, browserLocalPersistence } = await import("https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js");
    const { getFirestore, doc, setDoc, getDoc } = await import("https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js");



    // Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyANnOu-JCTXB94LnHQsDT6SyzwrfOcRxpc",
    authDomain: "cbtmode-c26b8.firebaseapp.com",
    projectId: "cbtmode-c26b8",
    storageBucket: "cbtmode-c26b8.firebasestorage.app",
    messagingSenderId: "168190959417",
    appId: "1:168190959417:web:95407e394c2ad3b7b992e8"
  };


    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);

    // Set persistence to 'local' to ensure user session is remembered even when the browser is closed
    setPersistence(auth, browserLocalPersistence)
        .then(() => {
            // Check if user is authenticated
            onAuthStateChanged(auth, (user) => {
                loader.style.display = 'none'; // Hide loader

                if (user) {
                    // Log the user object to check if it’s being detected
                    console.log("User is signed in:", user);
                    // User is signed in, render the protected content
                    content.innerHTML = `
                     <div class="container">
    <div class="question-section">
<div id="question"></div>
<div id="options"></div>
<button id="solutionButton">Show Solution</button>
<img id="solutionImage" class="show-solution-img" src="eye.png" alt="Show Solution">
<div id="solution" style="display:none;"></div>
</div>
</div>`;
 

                    content.style.display = 'block'; // Ensure content is visible

                    // Logout function
                    document.getElementById('logout-button').addEventListener('click', () => {
                        signOut(auth)
                            .then(() => {
                                console.log("User signed out.");
                                window.location.href = 'login.html'; // Redirect to login page after logout
                            })
                            .catch((error) => {
                                console.error("Error signing out:", error);
                                alert("Logout failed: " + error.message);
                            });
                    });

const questions = [
  {
    "Q": "Who argued that vision of health is based on determinism but disavows the metaphysical",
    "A": "Plato",
    "B": "Aristotle",
    "C": "Socrates",
    "D": "Justice Ekennia",
    "Ans": "D"
  },
  {
    "Q": "A better definition of health was offered by WHO in?",
    "A": "1945",
    "B": "1950",
    "C": "1930",
    "D": "1946",
    "Ans": "D"
  },
  {
    "Q": "Who conceived health as a dynamic process, determined subjectively and objectively?",
    "A": "Immanuel Kant",
    "B": "Lindberg and Hunter",
    "C": "Hippocrates",
    "D": "Aristotle",
    "Ans": "B"
  },
  {
    "Q": "The Hebrew word SHALOM is also translated as",
    "A": "Harmony",
    "B": "Serenity",
    "C": "peace",
    "D": "Tranquility",
    "Ans": "C"
  },
  {
    "Q": "kedu ka idi in Igbo means?",
    "A": "Welcome",
    "B": "Goodbye",
    "C": "How are you",
    "D": "Thank you",
    "Ans": "C"
  },
  {
    "Q": "Who defined nutrition as the study of how organisms process food in order to enhance healthy living.",
    "A": "Plato",
    "B": "Umotong and Udoh",
    "C": "Aristotle",
    "D": "Socrates",
    "Ans": "B"
  },
  {
    "Q": "Change of weight, form, sizes and shapes refers to",
    "A": "Growth",
    "B": "Development",
    "C": "Adaptation",
    "D": "Change",
    "Ans": "A"
  },
  {
    "Q": "___ studies the process of breaking food down(catabolism), repairing and creating cells and tissues (anabolism).",
    "A": "Health Science",
    "B": "Nutritional science",
    "C": "Biomedical Science",
    "D": "Dietetics",
    "Ans": "B"
  },
  {
    "Q": "Carbohydrates is divided into two, simple and",
    "A": "elaborate",
    "B": "intricate",
    "C": "complex",
    "D": "compound",
    "Ans": "C"
  },
  {
    "Q": "Due to protein, Africans have increased protection to?",
    "A": "Malaria",
    "B": "Osteoporosis",
    "C": "Influenza",
    "D": "Heart Disease",
    "Ans": "B"
  },
  {
    "Q": "There are __ vitamins",
    "A": "12",
    "B": "10",
    "C": "13",
    "D": "15",
    "Ans": "C"
  },
  {
    "Q": "__ is needed for our red blood cells to transport oxygen",
    "A": "Calcium",
    "B": "iron",
    "C": "Vitamin C",
    "D": "Potassium",
    "Ans": "B"
  },
  {
    "Q": "__ is present in raw egg white and chelates biotin",
    "A": "Biotinase",
    "B": "Proteinase",
    "C": "Lipase",
    "D": "Avidin",
    "Ans": "D"
  },
  {
    "Q": "Water constitutes __% of the total body weight",
    "A": "50",
    "B": "60",
    "C": "70",
    "D": "80",
    "Ans": "C"
  },
  {
    "Q": "___ is a deficiency of protein",
    "A": "Marasmus",
    "B": "Kwashiorkor",
    "C": "Anemia",
    "D": "Rickets",
    "Ans": "B"
  },
  {
    "Q": "___ is a deficiency in glucose regulatory hormones",
    "A": "Insulin Resistance",
    "B": "Hypoglycemia",
    "C": "Hyperglycemia",
    "D": "Diabetes",
    "Ans": "D"
  },
  {
    "Q": "___ is caused by contaminated drinking water",
    "A": "Typhoid",
    "B": "cholera",
    "C": "Hepatitis",
    "D": "Dysentery",
    "Ans": "B"
  },
  {
    "Q": "__ is a disease of the lung that causes chest pain and cough",
    "A": "Pneumonia",
    "B": "Asthma",
    "C": "Tuberculosis",
    "D": "Bronchitis",
    "Ans": "C"
  },
  {
    "Q": "Who opined that science was not discovered by man but was invented by him in order to understand nature and himself",
    "A": "Plato",
    "B": "Aristotle",
    "C": "Socrates",
    "D": "David Alman",
    "Ans": "D"
  },
  {
    "Q": "___ maintained that the aim of science is to improve the living conditions of men",
    "A": "John Dewey",
    "B": "Karl Popper",
    "C": "Isaac Newton",
    "D": "Galileo Galilei",
    "Ans": "A"
  },
  {
    "Q": "According to ___, the work of the technologist is not value-free or value-neutral",
    "A": "Obioha",
    "B": "John Stuart Mill",
    "C": "Immanuel Kant",
    "D": "Friedrich Nietzsche",
    "Ans": "A"
  },
  {
    "Q": "Who helped build the atomic bomb",
    "A": "Niels Bohr",
    "B": "Albert Einstein",
    "C": "Marie Curie",
    "D": "Erwin Schrödinger",
    "Ans": "B"
  },
  {
    "Q": "The consumer of technology product must need prudence is referred to as",
    "A": "recta ratio agibilium",
    "B": "prudentia in agendis",
    "C": "cautio in eligendis",
    "D": "recta ratio agibilium",
    "Ans": "D"
  },
  {
    "Q": "Who said 'physics have known sin, and this is a knowledge which they cannot lose'",
    "A": "Stephen Hawking",
    "B": "Richard Feynman",
    "C": "Robert Oppenheimer",
    "D": "Max Planck",
    "Ans": "C"
  }
];

let score = 0;
let askedQuestions = [];
let currentQuestionIndex = 0;
let currentQuestion = null;

let userAnswers = [];
const questionContainer = document.getElementById('question');
        const optionsContainer = document.getElementById('options');
function getSequentialQuestion() {
    const question = questions[currentQuestionIndex];
    currentQuestionIndex++; // Move to the next question for future calls
    return question;
}

function renderQuestion() {
    const questionContainer = document.getElementById('question');
    const optionsContainer = document.getElementById('options');
    currentQuestion = getSequentialQuestion(); // Get the next question in sequence

    // Render question text
    questionContainer.innerHTML = currentQuestion.Q;
    renderMathInElement(questionContainer, {
        throwOnError: false
    });


    // Render options
    optionsContainer.innerHTML = '';
    for (let option in currentQuestion) {
        if (option !== 'Q' && option !== 'Ans' && option !== 'Solution') {
            const btn = document.createElement('div');
            btn.className = 'btn';
            btn.dataset.option = option;
            const letterSpan = document.createElement('span');
            letterSpan.className = 'option-letter';
            letterSpan.textContent = option;
            btn.appendChild(letterSpan);
            const textSpan = document.createElement('span');
            textSpan.innerHTML = currentQuestion[option];
            btn.appendChild(textSpan);
            optionsContainer.appendChild(btn);
            renderMathInElement(textSpan, {
                throwOnError: false
            });
            btn.addEventListener('click', function() {
                checkAnswer(option, currentQuestion.Ans);
            });
        }
    }

    // Show solution button if there is a solution
    const solutionButton = document.getElementById('solutionButton');
    if (currentQuestion.Solution) {
        solutionButton.style.display = 'block';
    } else {
        solutionButton.style.display = 'none';
    }
}

function checkAnswer(selectedOption, correctAnswer) {
    const optionsText = {};
    for (let option in currentQuestion) {
        if (option !== 'Q' && option !== 'Ans' && option !== 'Solution') {
            optionsText[option] = currentQuestion[option];
        }
    }

    userAnswers.push({
        question: currentQuestion.Q,
        correctAnswer: correctAnswer,
        userAnswer: selectedOption,
        optionsText: optionsText
    });

    if (selectedOption === correctAnswer) {
        score++;
        document.getElementById('score').textContent = 'Score: ' + score;
    }

    // Mark the selected option and the correct option
    markOptions(selectedOption, correctAnswer);

if (currentQuestionIndex < questions.length) {
        setTimeout(renderQuestion, 2000); // Move to the next question after 2 seconds
    } else {
        setTimeout(showPopup, 2000); // Show the popup after the last question
    }
}


function markOptions(selectedOption, correctAnswer) {
    // Find and mark the selected option
    const selectedBtn = document.querySelector(`.btn[data-option="${selectedOption}"]`);
    selectedBtn.style.backgroundColor = selectedOption === correctAnswer ? 'green' : 'red';

    // Find and mark the correct option
    const correctBtn = document.querySelector(`.btn[data-option="${correctAnswer}"]`);
    correctBtn.style.backgroundColor = 'green';

    // Disable all buttons
    const options = document.querySelectorAll('.btn');
    options.forEach(option => {
        option.style.pointerEvents = 'none';
    });
}

function showSolution() {
    const solutionContainer = document.getElementById('solution');
    const solutionButton = document.getElementById('solutionButton');
    const solutionImage = document.querySelector('.show-solution-img');

    if (solutionContainer.style.display === 'none' || solutionContainer.style.display === '') {
        solutionContainer.style.display = 'block';
        solutionContainer.innerHTML = currentQuestion.Solution;
        renderMathInElement(solutionContainer, {
            throwOnError: false
        });
        solutionButton.textContent = 'Hide Solution';
        solutionImage.src = 'see.png'; // Change to a new image URL for 'Hide Solution'
    } else {
        solutionContainer.style.display = 'none';
        solutionButton.textContent = 'Show Solution';
        solutionImage.src = 'eye.png'; // Change back to the original image URL
    }
}

// Initial render of the first question
function showPopup() {
    const overlay = document.getElementById('overlay');
    const popup = document.getElementById('popup');
    const finalScore = document.getElementById('finalScore');

    finalScore.textContent = `You scored ${score*2} out of ${questions.length}!`;
    overlay.style.display = 'block';
    popup.style.display = 'block';
}

function closePopup() {
    const overlay = document.getElementById('overlay');
    const popup = document.getElementById('popup');

    overlay.style.display = 'none';
    popup.style.display = 'none';
}

document.getElementById('solutionButton').addEventListener('click', showSolution);

function tryAgain() {
        score = 0;
        askedQuestions = [];
        userAnswers = [];
        document.getElementById('score').textContent = 'Score: ' + score;
        document.getElementById('assessment').style.display = 'none';
        closePopup();
        renderQuestion();
    }

    function showAssessment() {
    const assessmentContainer = document.getElementById('assessment');
    assessmentContainer.innerHTML = '';

    userAnswers.forEach(answer => {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `<strong>Question:</strong> ${answer.question}`;
        
        const userAnswerText = answer.optionsText[answer.userAnswer];
        const correctAnswerText = answer.optionsText[answer.correctAnswer];

        const answerDiv = document.createElement('div');
        answerDiv.innerHTML = `<strong>Your Answer:</strong> <span class="${answer.userAnswer === answer.correctAnswer ? 'correct' : 'incorrect'}">${userAnswerText}</span>`;
        
        const correctAnswerDiv = document.createElement('div');
        correctAnswerDiv.innerHTML = `<strong>Correct Answer:</strong> ${correctAnswerText} <br><br>`;
        correctAnswerDiv.style.color = 'green';

        questionDiv.appendChild(answerDiv);
        questionDiv.appendChild(correctAnswerDiv);
        assessmentContainer.appendChild(questionDiv);
    });

    questionContainer.style.display = 'none';
    optionsContainer.style.display = 'none';
    assessmentContainer.style.display = 'block';
    closePopup();
}
    // Ensure functions are globally accessible
    window.tryAgain = tryAgain;
    window.showAssessment = showAssessment;
console.log(questions.length);
// Initialize the first question

        renderQuestion();
                } else {
                    // Log the lack of user authentication
                    console.log("No user signed in.");
                    
                    // No user is signed in, show unauthorized message and redirect
                    unauthorized.style.display = 'block';
                    setTimeout(() => {
                        window.location.href = 'Logineasy.html'; // Replace 'login.html' with the actual path to your login page
                    }, 1000); // Redirect after 1 second
                }
            });
        })
        .catch((error) => {
            console.error("Error setting persistence:", error);
        });
}

loadFirebaseModules();


