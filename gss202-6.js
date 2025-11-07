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
    "Q": "Refers to the systematic body of knowledge",
    "A": "Wisdom",
    "B": "Philosophy",
    "C": "Science",
    "D": "Intuition",
    "Ans": "C"
  },
  {
    "Q": "Sees science as the specific modality of human activity investment which consists of producing objective knowledge based on discoveries of laws",
    "A": "Karl Popper",
    "B": "S.P. Gueye",
    "C": "Thomas Kuhn",
    "D": "Imre Lakatos",
    "Ans": "B"
  },
  {
    "Q": "Is the first step of scientific inquiry while ____ is the last stage.",
    "A": "Hypothesis, Conclusion",
    "B": "Observation, Experiment",
    "C": "The Problem, Conclusion",
    "D": "Data Collection, Analysis",
    "Ans": "C"
  },
  {
    "Q": "According to, facts can be defined in two ways, first as a proposition and second as the actual states of affairs",
    "A": "Bertrand Russell",
    "B": "Ludwig Wittgenstein",
    "C": "John Hospers",
    "D": "Willard Van Orman Quine",
    "Ans": "C"
  },
  {
    "Q": "See facts as a particular which are such things, such things a little pitch of color or sounds, or momentary things",
    "A": "Bertrand Russell",
    "B": "A.J. Ayer",
    "C": "Ludwig Wittgenstein",
    "D": "Willard Van Orman Quine",
    "Ans": "A"
  },
  {
    "Q": "Science etymology is derived from Greek - episteme, Latin - Scientia; Russia - Nerits NaUKa; German - Wissenschaft",
    "A": "Episteme",
    "B": "Scientia",
    "C": "Nerits NaUKa",
    "D": "Wissenschaft",
    "Ans": "B"
  },
  {
    "Q": "Who defined history as a story or account which is the umbrella of past events?",
    "A": "Herodotus",
    "B": "Thucydides",
    "C": "Nikolas Gysis",
    "D": "Arnold J. Toynbee",
    "Ans": "C"
  },
  {
    "Q": "According to philosophy, it is difficult to define, and hence perceived difficulty springs",
    "A": "Karl Popper, Falsifiability",
    "B": "C.S. Momoh, 5 Sources",
    "C": "Jean-Jacques Rousseau, Social Contract",
    "D": "Alain Badiou, 4 Conditions",
    "Ans": "B"
  },
  {
    "Q": "In ____ Antoine Lavoisier discovered the true nature of combustion",
    "A": "1775",
    "B": "1777",
    "C": "1782",
    "D": "1785",
    "Ans": "B"
  },
  {
    "Q": "Is credited with the development of the first successful method for naming in animals and plants",
    "A": "Gregor Mendel",
    "B": "Carolus Linnaeus",
    "C": "Charles Darwin",
    "D": "Jean-Baptiste Lamarck",
    "Ans": "B"
  },
  {
    "Q": "Organized all the findings of biologists about the nervous system, the circulation of blood, respiration, and embryology",
    "A": "Charles Darwin",
    "B": "Gregor Mendel",
    "C": "Albrecht Von Heller",
    "D": "Jean-Baptiste Lamarck",
    "Ans": "C"
  },
  {
    "Q": "Discovered sound in science",
    "A": "Thomas Edison",
    "B": "Alexander Graham Bell",
    "C": "Joseph Sanveneur",
    "D": "Guglielmo Marconi",
    "Ans": "C"
  },
  {
    "Q": "Discovered current of electricity or galvani",
    "A": "Alessandro Volta",
    "B": "Alosio Galvani",
    "C": "Michael Faraday",
    "D": "Thomas Edison",
    "Ans": "B"
  },
  {
    "Q": "Discovered proof of the law of inverse square",
    "A": "Isaac Newton",
    "B": "Charles Babbage",
    "C": "Charles A. Coulomb (1736 - 1806)",
    "D": "John Dalton",
    "Ans": "C"
  },
  {
    "Q": "Discovered the measurements of heat while discovered the steam engine",
    "A": "James Watt",
    "B": "Joseph Black (1728 - 1799) and Thomas Newcomer",
    "C": "Michael Faraday",
    "D": "George Stephenson",
    "Ans": "B"
  },
  {
    "Q": "Shows that light and other energy waves are fundamentally the same",
    "A": "James Clerk Maxwell",
    "B": "Albert Einstein",
    "C": "Niels Bohr",
    "D": "Isaac Newton",
    "Ans": "A"
  },
  {
    "Q": "In the century, British geologists put forth a proof to show that the development of the earth process has been shown?",
    "A": "18th c John Hutton",
    "B": "19th c Charles Lyell",
    "C": "20th c Alfred Wegener",
    "D": "17th c Nicholas Steno",
    "Ans": "B"
  },
  {
    "Q": "In 1858 _____ put forth an evolutionary theory of the origin of plants and animals",
    "A": "Alfred Russel Wallace",
    "B": "Ernst Haeckel",
    "C": "Charles Darwin",
    "D": "Thomas Huxley",
    "Ans": "C"
  },
  {
    "Q": "Founded the first laboratory of experimental psychology in 1879",
    "A": "Wilhelm Wundt",
    "B": "John B. Watson",
    "C": "William James",
    "D": "Ivan Pavlov",
    "Ans": "A"
  },
  {
    "Q": "It was in the year that Albert Einstein extended his light energy theory",
    "A": "1903",
    "B": "1905",
    "C": "1910",
    "D": "1915",
    "Ans": "B"
  },
  {
    "Q": "Was known for his relativity theory",
    "A": "Isaac Newton",
    "B": "Niels Bohr",
    "C": "Albert Einstein",
    "D": "Stephen Hawking",
    "Ans": "C"
  },
  {
    "Q": "History of Medicine can historically be regarded to and in",
    "A": "Mesopotamia",
    "B": "Ancient Greece",
    "C": "Babylon, 2000 B.C",
    "D": "Rome",
    "Ans": "C"
  },
  {
    "Q": "___ was the father of medicine",
    "A": "Galen",
    "B": "Hippocrates",
    "C": "Avicenna",
    "D": "Aristotle",
    "Ans": "B"
  },
  {
    "Q": "The main contributions to medicine came from two notable physicians, namely ___ and ___",
    "A": "Galen and Avicenna",
    "B": "Avicenna and Aristotle",
    "C": "Hippocrates and Galen",
    "D": "Avicenna and Averroes",
    "Ans": "D"
  },
  {
    "Q": "Lord Lugard established in",
    "A": "1914",
    "B": "1915",
    "C": "1916",
    "D": "1917",
    "Ans": "A"
  },
  {
    "Q": "The Concept of nation building deals with",
    "A": "infrastructure",
    "B": "Unity",
    "C": "Building Society",
    "D": "Road Construction",
    "Ans": "B"
  },
  {
    "Q": "Non material aspect of culture is",
    "A": "Abstract",
    "B": "peoples heritage",
    "C": "material but symbolic",
    "D": "policy based",
    "Ans": "A"
  },
  {
    "Q": "National development deals with",
    "A": "good schools",
    "B": "Building Hospitals",
    "C": "providing water",
    "D": "All of the above",
    "Ans": "D"
  },
  {
    "Q": "_____ defines culture as man-made part of the environment",
    "A": "Charles Taylor",
    "B": "Edward Taylor",
    "C": "Herskovits",
    "D": "Hunter Whitteen",
    "Ans": "B"
  },
  {
    "Q": "Artifacts, symbols and values are",
    "A": "Material culture",
    "B": "non material culture",
    "C": "all of the above",
    "D": "none of the above",
    "Ans": "B"
  },
  {
    "Q": "Who formulates national cultural policies",
    "A": "national museum",
    "B": "traditional rulers council",
    "C": "the senate",
    "D": "federal department of culture",
    "Ans": "D"
  },
  {
    "Q": "Until _____, the various peoples living within the geo-political entity now called Nigeria had their separate existence.",
    "A": "1861",
    "B": "1914",
    "C": "1960",
    "D": "1884",
    "Ans": "B"
  },
  {
    "Q": "Nigeria is a highly and fractionalized nation-statc.",
    "A": "pressurized",
    "B": "populated",
    "C": "pluralized",
    "D": "problematic",
    "Ans": "C"
  },
  {
    "Q": "The hegemony of the North has created frustration that had threatened to tear the country apart, in order, to corrcet the ____ of 1914 as politicians would say.",
    "A": "amalgamation",
    "B": "unification",
    "C": "unity",
    "D": "mistake",
    "Ans": "D"
  },
  {
    "Q": "The principal causes of volence in Nigerian politics are ethnic aggrandizement",
    "A": "chavinism",
    "B": "sentimentalism",
    "C": "selfishness",
    "D": "nepotism",
    "Ans": "A"
  },
  {
    "Q": "Self-aggrandizement and ______ is a very outstanding characteristic of the Nigerian society.",
    "A": "money-politics",
    "B": "madness",
    "C": "materialism",
    "D": "mercantilism",
    "Ans": "A"
  },
  {
    "Q": "In 1504, _____ was succeeded by Oba Esigie",
    "A": "Oba Ewuare",
    "B": "Oba Uzama",
    "C": "Oba Robo was",
    "D": "Oba Aphonsus",
    "Ans": "A"
  },
  {
    "Q": "Culture can exist without the society",
    "A": "true",
    "B": "false",
    "C": "True and False",
    "D": "Not applicable",
    "Ans": "B"
  },
  {
    "Q": "The process of transmitting culture of the people to individual is referred to at",
    "A": "indigenization",
    "B": "indoctrination",
    "C": "Socialization",
    "D": "none of the above",
    "Ans": "C"
  },
  {
    "Q": "Culture is biologicaly inherited but not learnt True / False.",
    "A": "True",
    "B": "False",
    "C": "",
    "D": "",
    "Ans": "B"
  },
  {
    "Q": "The two major branches of peace and conflict studies are",
    "A": "Interpersonal and intra group",
    "B": "Irenology and Polemology",
    "C": "Re and solution",
    "D": "peace and arbitration",
    "Ans": "B"
  },
  {
    "Q": "Economic inequality theory was identified by ______  as the cause of Conflict",
    "A": "Fisher",
    "B": "Marx",
    "C": "Webber",
    "D": "Dahrendorf",
    "Ans": "B"
  },
  {
    "Q": "Social conflict theory according to ____ is a product of rivalry in political leadership",
    "A": "Wright",
    "B": "Popper",
    "C": "Marx",
    "D": "Webber",
    "Ans": "D"
  },
  {
    "Q": "A constitution is a system of fixed rules by which a country is to be",
    "A": "Partitioned",
    "B": "Governed",
    "C": "Separated",
    "D": "",
    "Ans": "B"
  },
  {
    "Q": "One of the attributes of a constitution is that",
    "A": "it is the highest law of the country",
    "B": "it must be typed and bound",
    "C": "it cannot be amended",
    "D": "a and b",
    "Ans": "A"
  },
  {
    "Q": "The general act of Berlin of 1885 authorized Europeans to",
    "A": "Stop Slave Trade",
    "B": "Occupy African territories",
    "C": "carry on illegitimate trade in Africa",
    "D": "all of the above",
    "Ans": "B"
  },
  {
    "Q": "The colony and protectorate of Lagos were amalgamated with the protectorate of the southern Nigerian in",
    "A": "1914",
    "B": "1906",
    "C": "1900",
    "D": "",
    "Ans": "B"
  },
  {
    "Q": "The southern and northern protectorates of Nigeria were amalgamated in",
    "A": "1912",
    "B": "1913",
    "C": "1914",
    "D": "none of the above",
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


