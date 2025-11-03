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
    apiKey: "AIzaSyAf0mERQ9WiocU34BQx4Isr48Hs1VfpbDU",
    authDomain: "database-login-530f7.firebaseapp.com",
    databaseURL: "https://database-login-530f7-default-rtdb.firebaseio.com",
    projectId: "database-login-530f7",
    storageBucket: "database-login-530f7.firebasestorage.app",
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
    "Q": "_____ is a planned piece of work that is designed to find information about something, to produce something new, or to improve something.",
    "A": "Research",
    "B": "Project",
    "C": "Program",
    "D": "Initiative",
    "Ans": "B"
  },
  {
    "Q": "The basic features that stand clear whenever we talk about project is referred to?",
    "A": "Project Scope",
    "B": "Project Elements",
    "C": "Project Characteristics",
    "D": "Project Components",
    "Ans": "C"
  },
  {
    "Q": "The following are characteristics of projects except:",
    "A": "Uniqueness",
    "B": "Objectives",
    "C": "Risk and Uncertainty",
    "D": "Permanence",
    "Ans": "D"
  },
  {
    "Q": "Under which principle is a project presumed not to be fully known beforehand?",
    "A": "Principle of Uncertainty",
    "B": "Principle of Succession",
    "C": "Principle of Progressive Elaboration",
    "D": "Principle of Risk Management",
    "Ans": "B"
  },
  {
    "Q": "The degree to which a given project is executed to meet its goals as well as client's expectations is called:",
    "A": "Project Efficiency",
    "B": "Project Effectiveness",
    "C": "Project Performance",
    "D": "Project Success",
    "Ans": "C"
  },
  {
    "Q": "The following are 3 major dimensions to project performance except:",
    "A": "Scope",
    "B": "Time",
    "C": "Cost",
    "D": "Resources",
    "Ans": "D"
  },
  {
    "Q": "What is the full meaning of PQT?",
    "A": "Project Quality Testing",
    "B": "Project Quantitative Tracking",
    "C": "Project Quality Triangle",
    "D": "Project Qualification Technique",
    "Ans": "C"
  },
  {
    "Q": "The following are Project Life Cycle phases except:",
    "A": "Project Initiation",
    "B": "Project Planning",
    "C": "Project Execution",
    "D": "Project Termination",
    "Ans": "D"
  },
  {
    "Q": "Nagarijan (2010) classified projects based on the following except:",
    "A": "Type of activity",
    "B": "Location of the Project",
    "C": "Ownership",
    "D": "Duration",
    "Ans": "D"
  },
  {
    "Q": "Projects that are owned by the State (Government) are:",
    "A": "Public sector projects",
    "B": "Private sector projects",
    "C": "Joint sector projects",
    "D": "Cooperative sector projects",
    "Ans": "A"
  },
  {
    "Q": "In Project Management, the following ideas are necessary:",
    "A": "Project Identification, Project Formulation, Project Implementation",
    "B": "Project Planning, Project Execution, Project Closure",
    "C": "Project Initiation, Project Control, Project Termination",
    "D": "Project Design, Project Development, Project Delivery",
    "Ans": "A"
  },
  {
    "Q": "_____ contains information on technical, commercial and personnel dimensions but in a greater detail.",
    "A": "Project Charter",
    "B": "Project Scope Statement",
    "C": "Detailed Project Report",
    "D": "Work Breakdown Structure",
    "Ans": "C"
  },
  {
    "Q": "What helps determine whether an idea or business is a viable option?",
    "A": "Market research",
    "B": "Business plan",
    "C": "Feasibility study",
    "D": "SWOT analysis",
    "Ans": "C"
  },
  {
    "Q": "The following are measures of project management control except:",
    "A": "Cost of the Project",
    "B": "Time (Duration)",
    "C": "Quality/Technical Performance",
    "D": "Team Satisfaction",
    "Ans": "D"
  },
  {
    "Q": "What is the full meaning of PERT?",
    "A": "Project Evaluation and Review Technique",
    "B": "Programme Evaluation and Review Technique",
    "C": "Project Execution and Resource Tracking",
    "D": "Performance Evaluation and Reporting Tool",
    "Ans": "B"
  },
  {
    "Q": "The longest path through the network in terms of the amount of time the entire project will take is?",
    "A": "Critical path",
    "B": "Project timeline",
    "C": "Master schedule",
    "D": "Network diagram",
    "Ans": "A"
  },
  {
    "Q": "The difference between the critical path and the sub-critical path is known as the?",
    "A": "Float",
    "B": "Slack",
    "C": "Buffer",
    "D": "Variance",
    "Ans": "B"
  },
  {
    "Q": "According to _____, management of an event encompasses all activities involved in planning to evaluation of an event.",
    "A": "Kerzner",
    "B": "Nigam",
    "C": "PMBOK",
    "D": "Turner",
    "Ans": "B"
  },
  {
    "Q": "Who is known as the first event planner in history?",
    "A": "Julius Caesar",
    "B": "Alexander the Great",
    "C": "Cleopatra",
    "D": "Queen Elizabeth I",
    "Ans": "C"
  },
  {
    "Q": "The Industrial Revolution in England was created in?",
    "A": "1600s",
    "B": "1700s",
    "C": "1800s",
    "D": "1900s",
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


