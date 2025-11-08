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
    const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js");
    const { getAuth, signOut, onAuthStateChanged, setPersistence, browserLocalPersistence } = await import("https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js");
    const { getFirestore, doc, setDoc, getDoc } = await import("https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js");



    // Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyAf0mERQ9WiocU34BQx4Isr48Hs1VfpbDU",
        authDomain: "database-login-530f7.firebaseapp.com",
        projectId: "database-login-530f7",
        storageBucket: "database-login-530f7.appspot.com",
        messagingSenderId: "280997222442",
        appId: "1:280997222442:web:ad80301ccb4337dfb70b53"
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
    "Q": "_____ displays the name of active document",
    "A": "The menu bar",
    "B": "The ribbon",
    "C": "The status bar",
    "D": "The title bar",
    "Ans": "D"
  },
  {
    "Q": "By default, the quick access tool bar appears to the right of the word icon at the left end of the title bar, and displays the.......",
    "A": "Save, undo, and redo buttons",
    "B": "Save, close, and minimize buttons",
    "C": "New, open, and save buttons",
    "D": "Undo, redo, and close buttons",
    "Ans": "A"
  },
  {
    "Q": "_____ the houses commands or menus that can be used to perform file related operations such as: open or save files, create new documents, print a document, etc.",
    "A": "The home tab",
    "B": "The insert tab",
    "C": "The file tab",
    "D": "The view tab",
    "Ans": "C"
  },
  {
    "Q": "To save or save as press",
    "A": "Ctrl P",
    "B": "Ctrl S",
    "C": "Ctrl C",
    "D": "Ctrl N",
    "Ans": "B"
  },
  {
    "Q": "To paste a document press",
    "A": "Ctrl X",
    "B": "Ctrl V",
    "C": "Ctrl C",
    "D": "Ctrl A",
    "Ans": "B"
  },
  {
    "Q": "..... Refers to the document area",
    "A": "The status bar",
    "B": "The title bar",
    "C": "The work area",
    "D": "The ribbon",
    "Ans": "C"
  },
  {
    "Q": "The small arrow at the lower right corner of each group is known as.....",
    "A": "Group icon",
    "B": "Launcher button",
    "C": "Dialog box launcher",
    "D": "Dropdown arrow",
    "Ans": "C"
  },
  {
    "Q": "To highlight the entire document, press",
    "A": "Ctrl C",
    "B": "Ctrl A",
    "C": "Ctrl V",
    "D": "Ctrl X",
    "Ans": "B"
  },
  {
    "Q": "To bold, press",
    "A": "Ctrl U",
    "B": "Ctrl B",
    "C": "Ctrl I",
    "D": "Ctrl J",
    "Ans": "B"
  },
  {
    "Q": "To select a column of the text press",
    "A": "Ctrl + Shift + F8 and then use any of the arrow keys",
    "B": "Ctrl + Alt + F8 and then use arrow keys",
    "C": "Alt + Shift + F8 and then use any arrow keys",
    "D": "Ctrl + Shift + Arrow keys",
    "Ans": "A"
  },
  {
    "Q": "To justify a text, press",
    "A": "Ctrl E",
    "B": "Ctrl L",
    "C": "Ctrl R",
    "D": "Ctrl J",
    "Ans": "D"
  },
  {
    "Q": "To underline a text press",
    "A": "Ctrl T",
    "B": "Ctrl I",
    "C": "Ctrl U",
    "D": "Ctrl O",
    "Ans": "C"
  },
  {
    "Q": "To copy a text, press",
    "A": "Ctrl X",
    "B": "Ctrl C",
    "C": "Ctrl V",
    "D": "Ctrl P",
    "Ans": "B"
  },
  {
    "Q": "To italize a text press",
    "A": "Ctrl B",
    "B": "Ctrl I",
    "C": "Ctrl T",
    "D": "Ctrl R",
    "Ans": "B"
  },
  {
    "Q": "To launch the navigation pane press",
    "A": "Ctrl P",
    "B": "Ctrl H",
    "C": "Ctrl F",
    "D": "Ctrl D",
    "Ans": "C"
  },
  {
    "Q": "To find and replace dialog box press",
    "A": "Ctrl F",
    "B": "Ctrl H",
    "C": "Ctrl G",
    "D": "Ctrl Z",
    "Ans": "B"
  },
  {
    "Q": "To open a new document",
    "A": "Ctrl O",
    "B": "Ctrl N",
    "C": "Ctrl P",
    "D": "Ctrl T",
    "Ans": "B"
  },
  {
    "Q": "To open existing document",
    "A": "Ctrl S",
    "B": "Ctrl O",
    "C": "Ctrl F",
    "D": "Ctrl N",
    "Ans": "B"
  },
  {
    "Q": "_____ is when the size of the initial letter of the paragraph is exaggerated",
    "A": "A heading",
    "B": "A drop cap",
    "C": "A footer",
    "D": "A subheading",
    "Ans": "B"
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
