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
    "Q": "1. The concept of 'Gestalt Switch' is associated with _________",
    "A": "Thomas kuhn",
    "B": "Popper",
    "C": "Darwin",
    "D": "Kepler",
    "Ans": "A"
  },
  {
    "Q": "2. All but one of the following is a way governments participate in scientific and technological politics",
    "A": "Regulation",
    "B": "Underwriting",
    "C": "Customer",
    "D": "Manufacturing",
    "Ans": "D"
  },
  {
    "Q": "3. One of these is not a nutrient required by the body to keep fit",
    "A": "Carbon",
    "B": "Carbohydrate",
    "C": "Protein",
    "D": "Minerals",
    "Ans": "A"
  },
  {
    "Q": "4. Extreme faith in science results in ",
    "A": "Scientia",
    "B": "Sapientia",
    "C": "Scientism",
    "D": "Scienticus",
    "Ans": "C"
  },
  {
    "Q": "5. The oath sworn by medical officers was written by ",
    "A": "Hippocrater",
    "B": "Hypocrates",
    "C": "Hypocretes",
    "D": "None",
    "Ans": "B"
  },
  {
    "Q": "6. The disease associated with rapid excessive and abnormal cell growth is ",
    "A": "Cholera",
    "B": "HiV",
    "C": "Cancer",
    "D": "Tuberculosis",
    "Ans": "C"
  },
  {
    "Q": "7. The acronym HiV means ",
    "A": "human immuno deficiency virus",
    "B": "human infectious deficiency virus",
    "C": "human infection Virus",
    "D": "None",
    "Ans": "A"
  },
  {
    "Q": "8. Which theory of origin of life emphasizes growth and developmont of organisms from simplest to the most complex? ",
    "A": "Creationism",
    "B": "Big bang",
    "C": "Evolution",
    "D": "inflation",
    "Ans": "C"
  },
  {
    "Q": "9. ..... part of Lakatos research programme must be protected ",
    "A": "negative heuristic",
    "B": "positive heuristic",
    "C": "hardcore",
    "D": "All",
    "Ans": "C"
  },
  {
    "Q": "10. The criterion for testing truth by the logical positivists is ",
    "A": "Falsifiabillity",
    "B": "Reliability",
    "C": "Verifiability",
    "D": "Feriviability",
    "Ans": "C"
  },
  {
    "Q": "11. ________ is the absence of disease or sickness ",
    "A": "Nutrition",
    "B": "Health",
    "C": "Nutrient",
    "D": "Wealth",
    "Ans": "B"
  },
  {
    "Q": "12. Theologians uphoid ",
    "A": "Geocentricism",
    "B": "Hallocentrium",
    "C": "Copernicanlsm",
    "D": "All of the above",
    "Ans": "A"
  },
  {
    "Q": "13. John William Draper is assoclated with ",
    "A": "Intelligent design",
    "B": "Non-rapprochment typology",
    "C": "Religion",
    "D": "Christianity",
    "Ans": "A"
  },
  {
    "Q": "14. All but one of these is a function of food ",
    "A": "Physiological",
    "B": "Psychologicat",
    "C": "Sociological",
    "D": "Meterological",
    "Ans": "D"
  },
  {
    "Q": "15. The logical positivists are also known as ",
    "A": "Logical empiricists",
    "B": "Quantum empiricists",
    "C": "Vienna dircle",
    "D": "Scientific circle",
    "Ans": "A"
  },
  {
    "Q": "16. The school of thought that gives scientific findings its cash value is ",
    "A": "Empiricism",
    "B": "Pragmatism",
    "C": "Realism",
    "D": "A and B",
    "Ans": "B"
  },
  {
    "Q": "17. Chemistry may be sub-divided into ",
    "A": "organic &aromatic",
    "B": "plysical & inorganic",
    "C": "organic & inorganic",
    "D": "All",
    "Ans": "C"
  },
  {
    "Q": "18. Philosophy is regarded as the 'mother of all sciences' because ",
    "A": "it is all incluslve",
    "B": "It gave birth to all other disclpline",
    "C": "it oversights other disciplines",
    "D": "All of the above",
    "Ans": "B"
  },
  {
    "Q": "19. The lowest part of the atmosphere is known as ",
    "A": "Stratosphere",
    "B": "Toposphere",
    "C": "Troposhere",
    "D": "Antarticsphere",
    "Ans": "C"
  },
  {
    "Q": "20. The branch of philosophy that emphasizes critical, rational and systematic evaluation of scientific claims and assumptions is known as ",
    "A": "Philosophy of science",
    "B": "Epistemology",
    "C": "Metaphysics",
    "D": "A and B",
    "Ans": "D"
  },
  {
    "Q": "21. Inductive leap is ",
    "A": "Critique against induction",
    "B": "Support for induction",
    "C": "Inductive argument",
    "D": "B and C",
    "Ans": "D"
  },
  {
    "Q": "22. Energy can be ",
    "A": "transferred",
    "B": "Destroyed",
    "C": "created",
    "D": "sold",
    "Ans": "A"
  },
  {
    "Q": "23. Biotic factors refer to",
    "A": "Living things",
    "B": "Non-living things",
    "C": "Beta",
    "D": "Alhpa",
    "Ans": "A"
  },
  {
    "Q": "24. As an organlsed body of knowledge, science is derived from ",
    "A": "Experience",
    "B": "Observation",
    "C": "Experimentation",
    "D": "All of the above",
    "Ans": "D"
  },
  {
    "Q": "25. Hypothetico-deductive logic is associated with ",
    "A": "Empiricists",
    "B": "Rationalists",
    "C": "Popper",
    "D": "Archimedes",
    "Ans": "C"
  },
  {
    "Q": "26. is the scientific school that emphasizes the theory of natural progression to acquire knowledge",
    "A": "Empiricism",
    "B": "Evolutionary positivism",
    "C": "Rationalism",
    "D": "Idealism",
    "Ans": "B"
  },
  {
    "Q": "27. The lowest form of coal is ",
    "A": "Liganirt",
    "B": "Anthracite",
    "C": "Peat",
    "D": "Lignite",
    "Ans": "D"
  },
  {
    "Q": "28. Who directed that all books on Metaphysics and Divinity be burnt? ",
    "A": "Arsonist",
    "B": "Satan",
    "C": "Antichrist",
    "D": "Hume",
    "Ans": "D"
  },
  {
    "Q": "29. Drugs used in the management of HIV/AIDS?",
    "A": "AIDS drugs",
    "B": "HIV drugs",
    "C": "Antiretrovinal",
    "D": "Antiretrovirals",
    "Ans": "D"
  },
  {
    "Q": "30. The vector for transmission of malaria ",
    "A": "Plasmodfum",
    "B": "mosquito",
    "C": "venom",
    "D": "mosquito coil",
    "Ans": "B"
  },
  {
    "Q": "31. _____ opines that science and myth overlap",
    "A": "Popper",
    "B": "The great Philosopher",
    "C": "Feyerabend",
    "D": "Wittgenstein",
    "Ans": "C"
  },
  {
    "Q": "32. ___ helps to regulate chemical reactions in the body ",
    "A": "Minerals",
    "B": "Vitamins",
    "C": "Proteins",
    "D": "Carbohydrates",
    "Ans": "C"
  },
  {
    "Q": "33. In African context, science and religion are",
    "A": "At ware",
    "B": "Mutually exclusive",
    "C": "Bifurcated",
    "D": "Complementary",
    "Ans": "D"
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


