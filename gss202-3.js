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
    "Q": "Any body of knowledge is kind scientific is so termed because with method of ?",
    "A": "research",
    "B": "deduction",
    "C": "experimentation",
    "D": "inquiry",
    "Ans": "D"
  },
  {
    "Q": "When it comes to philosophy, a ___ task is engaged",
    "A": "simple",
    "B": "menial",
    "C": "ordinary",
    "D": "herculean",
    "Ans": "D"
  },
  {
    "Q": "Philosophy originates from two Greek words ___ and ___",
    "A": "Logos and Ethos",
    "B": "Eidos and Techne",
    "C": "Ethos and Pathos",
    "D": "Philos and Sophia",
    "Ans": "D"
  },
  {
    "Q": "Philosophy as Metaphysics studies __?",
    "A": "ethics",
    "B": "morality",
    "C": "logic",
    "D": "reality",
    "Ans": "D"
  },
  {
    "Q": "Philosophy as Epistemology studies __?",
    "A": "human emotions",
    "B": "human knowledge",
    "C": "human behavior",
    "D": "human perception",
    "Ans": "B"
  },
  {
    "Q": "Philosophy as Axiology studies __?",
    "A": "human cognition",
    "B": "human ethics",
    "C": "human behavior",
    "D": "human values",
    "Ans": "D"
  },
  {
    "Q": "Philosophy as Logic studies __?",
    "A": "intuition",
    "B": "reasoning",
    "C": "imagination",
    "D": "creativity",
    "Ans": "B"
  },
  {
    "Q": "___ explains every reality the way it is in itself.",
    "A": "Psychology",
    "B": "Physics",
    "C": "Philosophy",
    "D": "Metaphysics",
    "Ans": "C"
  },
  {
    "Q": "The basis, foundation or ground of Philosophy is?",
    "A": "Logic",
    "B": "Epistemology",
    "C": "Axiology",
    "D": "Metaphysics",
    "Ans": "D"
  },
  {
    "Q": "Metaphysics is either",
    "A": "rationalistic or empirical",
    "B": "empirical or transcendental",
    "C": "materialistic or idealistic",
    "D": "empirical or idealistic",
    "Ans": "C"
  },
  {
    "Q": "What is concerned with things, events or occurrences that are observable",
    "A": "Logic",
    "B": "Ethics",
    "C": "Aesthetics",
    "D": "Science",
    "Ans": "D"
  },
  {
    "Q": "Observing requires a cognitive approach known as",
    "A": "priori knowledge",
    "B": "a priori reasoning",
    "C": "posteriori knowledge",
    "D": "a posteriori reasoning",
    "Ans": "C"
  },
  {
    "Q": "___ is knowledge acquired after contact with experience",
    "A": "a priori cognition",
    "B": "posteriori cognition",
    "C": "a priori knowledge",
    "D": "posteriori knowledge",
    "Ans": "B"
  },
  {
    "Q": "Speaking of human mode of cognition, science itself translates to",
    "A": "understanding",
    "B": "wisdom",
    "C": "knowledge",
    "D": "insight",
    "Ans": "C"
  },
  {
    "Q": "Science is etymologically derived from the Latin word",
    "A": "Scientificus",
    "B": "Scientia",
    "C": "Scientificum",
    "D": "Science",
    "Ans": "B"
  },
  {
    "Q": "___ emphasizes the discovery of truth",
    "A": "Metaphysics",
    "B": "Axiology",
    "C": "Epistemology",
    "D": "Logic",
    "Ans": "C"
  },
  {
    "Q": "___ is a theory of knowledge that emphasizes those aspects of scientific knowledge related to experience",
    "A": "Rationalism",
    "B": "Idealism",
    "C": "Empiricism",
    "D": "Skepticism",
    "Ans": "C"
  },
  {
    "Q": "___ avers that empiricists are philosophers who are concerned with the acquisition of knowledge",
    "A": "Immanuel Kant",
    "B": "John Locke",
    "C": "Bertrand Russell",
    "D": "Oluwafunmilayo Kehinde",
    "Ans": "D"
  },
  {
    "Q": "Who gave ground for the universal principal of determinism",
    "A": "Spinoza",
    "B": "Kant",
    "C": "Hegel",
    "D": "Plato",
    "Ans": "A"
  },
  {
    "Q": "The idea of the existence of molecules as complex particles consisting of atom was developed by a French philosopher ___",
    "A": "Jean-Paul Sartre",
    "B": "Voltaire",
    "C": "Montesquieu",
    "D": "Pierre Gassendi",
    "Ans": "D"
  },
  {
    "Q": "Who formulated the principle of inexhaustibility of matter",
    "A": "Karl Marx",
    "B": "Adam Smith",
    "C": "Lenin",
    "D": "Napoleon Bonaparte",
    "Ans": "C"
  },
  {
    "Q": "The term history originates from a Greek and Latin word __",
    "A": "Historica",
    "B": "Historios",
    "C": "Historia",
    "D": "Historicus",
    "Ans": "C"
  },
  {
    "Q": "In Latin, history means?",
    "A": "knowledge",
    "B": "story or account",
    "C": "time",
    "D": "chronicle",
    "Ans": "B"
  },
  {
    "Q": "To have a time-bound character, ___ and Okon points to Nikoloas Gysis redefinition",
    "A": "Essien",
    "B": "Smith",
    "C": "Jackson",
    "D": "Nikoloas Gysis",
    "Ans": "A"
  },
  {
    "Q": "History is a story or account acquired through ___",
    "A": "introspection",
    "B": "investigation",
    "C": "imagination",
    "D": "introspection",
    "Ans": "B"
  },
  {
    "Q": "__ is an account of past philosophic activities",
    "A": "Philosophy of History",
    "B": "Historical Philosophy",
    "C": "Philosophy of Science",
    "D": "History of Philosophy",
    "Ans": "D"
  },
  {
    "Q": "Earliest roots of science are traceable to?",
    "A": "600-400 BCE",
    "B": "1000-800 BCE",
    "C": "3000-1200 BCE",
    "D": "2000-1500 BCE",
    "Ans": "C"
  },
  {
    "Q": "The Hellenistic worldview got preserved and absorbed in the Arabic world during __?",
    "A": "Middle Ages",
    "B": "Enlightenment Period",
    "C": "Islamic Golden Age",
    "D": "Renaissance",
    "Ans": "C"
  },
  {
    "Q": "Recovery and assimilation of Greek and Islamic works into Western Europe was from?",
    "A": "4th to 6th century",
    "B": "7th to 9th century",
    "C": "10th to 13th century",
    "D": "14th to 16th century",
    "Ans": "C"
  },
  {
    "Q": "Scientific thoughts in ancient times can be traced to",
    "A": "Hippocrates and Plato",
    "B": "Pythagoras and Aristotle",
    "C": "Socrates and Euclid",
    "D": "Plato and Aristotle",
    "Ans": "D"
  },
  {
    "Q": "Who is generally recognized as the father of modern scientific method",
    "A": "Galileo Galilei",
    "B": "Isaac Newton",
    "C": "Johannes Kepler",
    "D": "Roger Bacon",
    "Ans": "D"
  },
  {
    "Q": "___ researched in optics using applied geometry",
    "A": "Isaac Newton",
    "B": "Galileo Galilei",
    "C": "Roger Bacon",
    "D": "Ibn al-Haytham",
    "Ans": "D"
  },
  {
    "Q": "Who was the author of the book Novum Organum",
    "A": "Rene Descartes",
    "B": "Francis Bacon",
    "C": "John Locke",
    "D": "Immanuel Kant",
    "Ans": "B"
  },
  {
    "Q": "Who emphasized reason over and above sense-experience",
    "A": "John Locke",
    "B": "Francis Bacon",
    "C": "Rene Descartes",
    "D": "David Hume",
    "Ans": "C"
  },
  {
    "Q": "Who articulated skepticism about the ability of science to determine causality",
    "A": "David Hume",
    "B": "Immanuel Kant",
    "C": "John Locke",
    "D": "Isaac Newton",
    "Ans": "A"
  },
  {
    "Q": "Who argued that 'hypotheses' have no place in experimental philosophy",
    "A": "Isaac Newton",
    "B": "Galileo Galilei",
    "C": "Johannes Kepler",
    "D": "Roger Bacon",
    "Ans": "A"
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


