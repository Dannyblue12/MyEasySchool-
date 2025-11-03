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
    "Q": "An agency that collects money from savers (lenders) and lends to borrowers at a fee is?",
    "A": "Financial Institution",
    "B": "Insurance Company",
    "C": "Investment Bank",
    "D": "Credit Union",
    "Ans": "A"
  },
  {
    "Q": "There are two types of financial institution which includes:",
    "A": "Non-bank and Bank financial Institution",
    "B": "Public and Private financial Institution",
    "C": "Local and International financial Institution",
    "D": "Formal and Informal financial Institution",
    "Ans": "A"
  },
  {
    "Q": "_____ gives loan to individuals and corporate bodies but do not accept deposits.",
    "A": "Commercial Banks",
    "B": "Microfinance Banks",
    "C": "Finance Company or House",
    "D": "Credit Unions",
    "Ans": "C"
  },
  {
    "Q": "The first insurance company in Nigeria is:",
    "A": "NICON Insurance",
    "B": "Royal Exchange Assurance Company",
    "C": "African Alliance Insurance",
    "D": "Nigerian Insurance Association",
    "Ans": "B"
  },
  {
    "Q": "Pension funds does the following except:",
    "A": "Provides retirement income insurance",
    "B": "Provides mechanism for polishing of funds",
    "C": "Provides ways to manage uncertainty",
    "D": "Provides short-term loans to businesses",
    "Ans": "D"
  },
  {
    "Q": "What is the full meaning of FEM?",
    "A": "Foreign Exchange Management",
    "B": "Foreign Exchange Market",
    "C": "Financial Exchange Market",
    "D": "Financial Exchange Management",
    "Ans": "B"
  },
  {
    "Q": "Which cooperative consist of people who contribute money and share it among themselves on market days?",
    "A": "Producer Cooperative",
    "B": "Consumer Cooperative",
    "C": "Traditional Financial Institution",
    "D": "Credit Union",
    "Ans": "C"
  },
  {
    "Q": "The following are types of bank except:",
    "A": "Development Banks",
    "B": "Merchant Banks",
    "C": "Mortgage Banks",
    "D": "Investment Clubs",
    "Ans": "D"
  },
  {
    "Q": "Specialized banks specifically established to develop sectors of the economy like agriculture, commerce etc are:",
    "A": "Commercial Banks",
    "B": "Development Banks",
    "C": "Merchant Banks",
    "D": "Microfinance Banks",
    "Ans": "B"
  },
  {
    "Q": "The following are example of development bank except:",
    "A": "NIDB",
    "B": "NBCI",
    "C": "PBN",
    "D": "UBA",
    "Ans": "D"
  },
  {
    "Q": "Specialized banks charged with the responsibility of issuance of loan for foreign trade transactions are:",
    "A": "Development Banks",
    "B": "Merchant Banks",
    "C": "Mortgage Banks",
    "D": "Commercial Banks",
    "Ans": "B"
  },
  {
    "Q": "Specialized banks charged with the responsibility of making provision for housing loans to individuals and the government are:",
    "A": "Development Banks",
    "B": "Merchant Banks",
    "C": "Mortgage Banks",
    "D": "Commercial Banks",
    "Ans": "C"
  },
  {
    "Q": "Mortgage bank was formerly called:",
    "A": "Nigeria Building Society",
    "B": "Federal Mortgage Bank",
    "C": "National Housing Fund",
    "D": "Primary Mortgage Institution",
    "Ans": "A"
  },
  {
    "Q": "Commercial banks are called:",
    "A": "Money Market Banks",
    "B": "Deposit Money Banks (DMB)",
    "C": "Retail Banking Institutions",
    "D": "Universal Banks",
    "Ans": "B"
  },
  {
    "Q": "The following are various banks account except:",
    "A": "Fixed deposit account",
    "B": "Current account",
    "C": "Domiciliary account",
    "D": "Investment account",
    "Ans": "D"
  },
  {
    "Q": "Which bank account is withdrawal in a day having no limit and loan and overdraft can be obtained?",
    "A": "Savings Account",
    "B": "Fixed Deposit Account",
    "C": "Domiciliary Account",
    "D": "Current Account",
    "Ans": "D"
  },
  {
    "Q": "In _____ account, investors cannot authorize third party to withdraw money.",
    "A": "Current Account",
    "B": "Savings Account",
    "C": "Domiciliary Account",
    "D": "Fixed Deposit Account",
    "Ans": "B"
  },
  {
    "Q": "_____ account allows customers to maintain accounts in foreign currencies.",
    "A": "Current Account",
    "B": "Savings Account",
    "C": "Domiciliary Account",
    "D": "Fixed Deposit Account",
    "Ans": "C"
  },
  {
    "Q": "The following are types of investments except:",
    "A": "Business fixed investment",
    "B": "Investment in machines",
    "C": "Residential investment",
    "D": "Liquid investment",
    "Ans": "D"
  },
  {
    "Q": "What is the full meaning of APC?",
    "A": "Average Price to Consume",
    "B": "Average Propensity to Consume",
    "C": "Average Propensity to Calculate",
    "D": "All Progressive Congress",
    "Ans": "B"
  },
  {
    "Q": "A receipt from wages or from transfers by a private individual is?",
    "A": "Personal Income (PI)",
    "B": "Disposable Income",
    "C": "National Income",
    "D": "Gross Income",
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


