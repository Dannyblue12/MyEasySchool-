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
    "Q": "____ is simply the application of scientific discoveries, and these discoveries business in a speed or inventions are changing the never envisaged through the Application by entrepreneurs.",
    "A": "Innovation",
    "B": "Technology",
    "C": "Science",
    "D": "Engineering",
    "Ans": "B"
  },
  {
    "Q": "The definition of Technology Entrepreneur was proposed by:",
    "A": "Bailetti",
    "B": "Schumpeter",
    "C": "Drucker",
    "D": "Porter",
    "Ans": "A"
  },
  {
    "Q": "The definition of Technology Entrepreneurship was based on ____ elements.",
    "A": "3",
    "B": "5",
    "C": "4",
    "D": "6",
    "Ans": "C"
  },
  {
    "Q": "Features of Technological advancement in Entrepreneurship include:",
    "A": "Low capital investment",
    "B": "Simplified management structure",
    "C": "High potential opportunity",
    "D": "Reduced market competition",
    "Ans": "C"
  },
  {
    "Q": "The physical computers and other accompanying equipment used with them are known as:",
    "A": "Computer Software",
    "B": "Computer Hardware",
    "C": "Computer Programs",
    "D": "Computer Applications",
    "Ans": "B"
  },
  {
    "Q": "____ include desktop computers, portable computers, printers and modems.",
    "A": "Computer Hardware",
    "B": "Computer Software",
    "C": "Computer Networks",
    "D": "Computer Peripherals",
    "Ans": "A"
  },
  {
    "Q": "One advantage of portable computers is:",
    "A": "They have larger screens",
    "B": "They are more powerful than desktops",
    "C": "They can be used everywhere",
    "D": "They are less expensive",
    "Ans": "C"
  },
  {
    "Q": "LaserJet, Ink Jet, Dot Matrix are examples of:",
    "A": "Scanners",
    "B": "Monitors",
    "C": "Printers",
    "D": "Modems",
    "Ans": "C"
  },
  {
    "Q": "____ is an electronic device that allows information to be transmitted over telephone lines from one computer to another.",
    "A": "Router",
    "B": "Modem",
    "C": "Switch",
    "D": "Hub",
    "Ans": "B"
  },
  {
    "Q": "____ allows you to copy a document and make it a computer file.",
    "A": "Printer",
    "B": "Copier",
    "C": "Scanner",
    "D": "Fax machine",
    "Ans": "C"
  },
  {
    "Q": "You can use ____ to send hard copies of documents to people who own a fax.",
    "A": "Email",
    "B": "Scanner",
    "C": "Printer",
    "D": "Fax machine or fax software",
    "Ans": "D"
  },
  {
    "Q": "LCD means:",
    "A": "Light Computer Display",
    "B": "Liquid Crystal Display",
    "C": "Laser Computer Display",
    "D": "Light Crystal Device",
    "Ans": "B"
  },
  {
    "Q": "The main function of LCD projector is to:",
    "A": "Display high-resolution images",
    "B": "Project your computer screen onto wall for presentation",
    "C": "Enhance color quality of images",
    "D": "Reduce eye strain during computer use",
    "Ans": "B"
  },
  {
    "Q": "In order to effectively perform any kind of function, as well as business transaction, your computer requires:",
    "A": "Hardware",
    "B": "Internet",
    "C": "Software",
    "D": "Network",
    "Ans": "C"
  },
  {
    "Q": "____ enable you to report, analyze, and come up with numerical data.",
    "A": "Word processing programs",
    "B": "Database programs",
    "C": "Spreadsheet programs",
    "D": "Presentation programs",
    "Ans": "C"
  },
  {
    "Q": "____ is a worldwide computer network that allows people to communicate with each other electronically.",
    "A": "Intranet",
    "B": "Extranet",
    "C": "Internet",
    "D": "Local Area Network",
    "Ans": "C"
  },
  {
    "Q": "To access the Internet, you will need to sign up with:",
    "A": "An Internet Service Provider",
    "B": "A computer manufacturer",
    "C": "A software company",
    "D": "A telecommunications company",
    "Ans": "A"
  },
  {
    "Q": "____ refers to the practice that aims to improve websites ranking for specific keywords in the search engine.",
    "A": "Web Development",
    "B": "Content Marketing",
    "C": "Search Engine Optimization (SEO)",
    "D": "Social Media Marketing",
    "Ans": "C"
  },
  {
    "Q": "____ is a system of reward whereby referrers are given finder's fees for every referral they make to the firm or business.",
    "A": "Network Marketing",
    "B": "Affiliate Marketing",
    "C": "Referral Marketing",
    "D": "Direct Marketing",
    "Ans": "B"
  },
  {
    "Q": "____ is an electronic store front to the world.",
    "A": "Social media page",
    "B": "Mobile application",
    "C": "Email newsletter",
    "D": "Website",
    "Ans": "D"
  },
  {
    "Q": "WWW means:",
    "A": "World Wide Web",
    "B": "World Wide Window",
    "C": "Web World Wide",
    "D": "Web Window World",
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


