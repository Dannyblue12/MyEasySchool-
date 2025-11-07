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
    "Q": "34. The school of thought that takes the mind as the ultimate reality is called ",
    "A": "Realism",
    "B": "Empiricism",
    "C": "Idealism",
    "D": "A and C",
    "Ans": "C"
  },
  {
    "Q": "35. Etymologically, philosophy is derived from these Greek words, except ",
    "A": "Philas",
    "B": "Sophia",
    "C": "Philein",
    "D": "Sophos",
    "Ans": "B"
  },
  {
    "Q": "37. Killing of plant tissues is known as",
    "A": "Abscision",
    "B": "Arbscicion",
    "C": "Necrosis",
    "D": "Miasma",
    "Ans": "C"
  },
  {
    "Q": "39. Tooth decay results when _____ deficient ",
    "A": "fluoride",
    "B": "iron",
    "C": "calcium",
    "D": "copper",
    "Ans": "C"
  },
  {
    "Q": "40. Hydropower means____ ",
    "A": "Energy from water",
    "B": "Non-renewable energy",
    "C": "Sunlight energy",
    "D": "Thermal energy",
    "Ans": "A"
  },
  {
    "Q": "41. Philosophy as a careful and critical study of reality uses the following in its incuiry, except ",
    "A": "Speculation",
    "B": "A priori method",
    "C": "Intuitive method",
    "D": "Experimentition",
    "Ans": "D"
  },
  {
    "Q": "42. The search for a criterion of dermarcation between science and non-science was championed by ",
    "A": "Logical positivists",
    "B": "Philosophers",
    "C": "Existentialists",
    "D": "Metaphysicians",
    "Ans": "A"
  },
  {
    "Q": "43. Nauka is the etymoiogy of science in ",
    "A": "Latin",
    "B": "Russian",
    "C": "Chinese",
    "D": "German",
    "Ans": "B"
  },
  {
    "Q": "44. Technology simply means ",
    "A": "Application of science",
    "B": "Philosophy of science",
    "C": "Theory of science",
    "D": "None of the above",
    "Ans": "A"
  },
  {
    "Q": "45. _____designed and developed the telephone ",
    "A": "Abert Einstein",
    "B": "Perkins",
    "C": "Graham Bell",
    "D": "Robert Hooke",
    "Ans": "C"
  },
  {
    "Q": "46. To be scientific thing must be ",
    "A": "Orderly and Systematic",
    "B": "Technological and Philosophical",
    "C": "Argumentative and Mythological",
    "D": "Orderly and superstitious",
    "Ans": "A"
  },
  {
    "Q": "47. _____ is the mother of technology ",
    "A": "contractors",
    "B": "sense",
    "C": "Brain",
    "D": "science",
    "Ans": "D"
  },
  {
    "Q": "48. Stientific-research programme is linked to?",
    "A": "Newton",
    "B": "Lakatos",
    "C": "Plato",
    "D": "Thomas Kuhn",
    "Ans": "B"
  },
  {
    "Q": "49. HIV/AIDS is transmitted via ",
    "A": "sex",
    "B": "sexual intercourse with infected person",
    "C": "sexual intercourse",
    "D": "ALL",
    "Ans": "B"
  },
  {
    "Q": "50. Dropping of leaves is known as ",
    "A": "Chlorosis",
    "B": "Necrosis",
    "C": "Abscision",
    "D": "All of the above",
    "Ans": "C"
  },
  {
    "Q": "51. Who is the father of social positivism",
    "A": "John Locke",
    "B": "Einstein",
    "C": "Auguste Comte",
    "D": "David Hume",
    "Ans": "C"
  },
  {
    "Q": "52. The planting of crops in water is called ",
    "A": "Hydrocult",
    "B": "Necrosis",
    "C": "Hydrogenic",
    "D": "Hydropranics",
    "Ans": "D"
  },
  {
    "Q": "53. Karl Popper's method of scientific appraisal is ",
    "A": "Observation",
    "B": "Faisifiability",
    "C": "Falsification",
    "D": "Observation",
    "Ans": "C"
  },
  {
    "Q": "54. Heliocentricism is associated with",
    "A": "Aristatle",
    "B": "Galifeo",
    "C": "Isaac Newton",
    "D": "Copernicus",
    "Ans": "D"
  },
  {
    "Q": "55. The rule of 'anything goes' of Feyerabend implies ",
    "A": "No method",
    "B": "Some method",
    "C": "All methods",
    "D": "Any method",
    "Ans": "D"
  },
  {
    "Q": "56. The first undisputable step in every sclentific research is stage ",
    "A": "Problem",
    "B": "Hypothesis",
    "C": "Experiment",
    "D": "Theory",
    "Ans": "A"
  },
  {
    "Q": "55. Verisimilitude etymologically means ",
    "A": "Very simple",
    "B": "Truth likeness",
    "C": "Varied simitar",
    "D": "All of the above",
    "Ans": "B"
  },
  {
    "Q": "55. One of these is not a feature of Philosophy ",
    "A": "Personal commitment",
    "B": "Broad-based liberty",
    "C": "Critical mindedness",
    "D": "Sly-based commitment",
    "Ans": "D"
  },
  {
    "Q": "57. Who says that a scientific theory is corroborated when anomalles are not found? ",
    "A": "Kuhn",
    "B": "Hume",
    "C": "Lakatos",
    "D": "Popper",
    "Ans": "D"
  },
  {
    "Q": "58. The Greek etymology of 'History' is ",
    "A": "Historia",
    "B": "Historieus",
    "C": "Historiam",
    "D": "Historicity",
    "Ans": "A"
  },
  {
    "Q": "59. The theory of relativity is associated with ",
    "A": "Albert Stein",
    "B": "Albert Einstein",
    "C": "Albert Horsefall",
    "D": "None of the above",
    "Ans": "B"
  },
  {
    "Q": "60. According to Kahn, the unit of appraisal in science is ",
    "A": "Single theory",
    "B": "Maxe of theories",
    "C": "Paradigm",
    "D": "Exemplar",
    "Ans": "C"
  },
  {
    "Q": "61. One generally accepted theory of origin of life amiong scientists is ",
    "A": "Creationism",
    "B": "Big Bang",
    "C": "Evolution",
    "D": "Initation",
    "Ans": "C"
  },
  {
    "Q": "62. is the study of how organisms process food to enhance heal thy living ",
    "A": "Nutrition",
    "B": "Nutrient.",
    "C": "Neutral",
    "D": "catabolism",
    "Ans": "A"
  },
  {
    "Q": "63. Which theory of origin of life emphasizes growth and development of organisms from simpiest to the most complex? ",
    "A": "Creationism",
    "B": "Big bang",
    "C": "Evolution",
    "D": "Inflation",
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


