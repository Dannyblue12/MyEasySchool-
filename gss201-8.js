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
    "Q": "According to _____, the idea of government originated at a period when man was a law unto himself, leading to a situation of war of one against all.",
    "A": "Rousseau",
    "B": "Hobbes",
    "C": "Locke",
    "D": "Montesquieu",
    "Ans": "B",
    "Solution": "Thomas Hobbes, in his work 'Leviathan' (1651), proposed that government originated from a 'state of nature' where humans lived without authority, leading to a 'war of all against all.' He argued that people formed governments by social contract to escape this dangerous state."
  },
  {
    "Q": "The machinery through which human beings maintain co-operation and orderly relationship in the society could be described as:",
    "A": "Law",
    "B": "Culture",
    "C": "Government",
    "D": "Religion",
    "Ans": "C",
    "Solution": "Government is the organized system through which societies maintain order, resolve conflicts, and facilitate cooperation. It provides the structure and authority needed for social cohesion and collective action, distinguishing it from other social institutions."
  },
  {
    "Q": "_____ prescribed that government must regulate trade and ensure its balance.",
    "A": "Smith",
    "B": "Marx",
    "C": "Keynes",
    "D": "Locke",
    "Ans": "D",
    "Solution": "John Locke, in his economic writings, advocated for government regulation of trade to ensure balance. While he supported property rights and some market freedoms, he believed government had a role in maintaining economic stability and preventing monopolies."
  },
  {
    "Q": "Entrepreneurship is more than simply starting a business. True/false?",
    "A": "True",
    "B": "False",
    "C": "Partially true",
    "D": "Depends on the context",
    "Ans": "A",
    "Solution": "Entrepreneurship encompasses more than just starting a business. It involves identifying opportunities, taking risks, innovating, creating value, and driving economic change. It's a mindset and approach that can be applied in various contexts, including within existing organizations."
  },
  {
    "Q": "_____ is simply the ability of an entrepreneur to see opportunities in the marketplace, initiate change and create value through solutions.",
    "A": "Business acumen",
    "B": "Entrepreneurial success",
    "C": "Market analysis",
    "D": "Strategic planning",
    "Ans": "B",
    "Solution": "Entrepreneurial success is defined by the entrepreneur's ability to identify market opportunities, implement changes, and create value through innovative solutions. It goes beyond just running a business to actually creating meaningful impact and sustainable value."
  },
  {
    "Q": "In business management, Entrepreneurship is regarded as:",
    "A": "A secondary function of management",
    "B": "Prime mover of a successful enterprise just as a leader in any organization must be the environmental change agent",
    "C": "Optional skill for business owners",
    "D": "Relevant only for startups, not established businesses",
    "Ans": "B",
    "Solution": "In business management, entrepreneurship is considered the prime mover or driving force behind successful enterprises. Like organizational leaders, entrepreneurs must act as agents of change, adapting to and shaping their environment to create sustainable competitive advantage."
  },
  {
    "Q": "Konothi (2009) defines entrepreneur as:",
    "A": "Someone who owns a business",
    "B": "A person who takes financial risks",
    "C": "Instigator of entrepreneurial events for as long as they occur",
    "D": "An individual who manages a company",
    "Ans": "C",
    "Solution": "Konothi's 2009 definition emphasizes the entrepreneur's role as an instigator or catalyst of entrepreneurial events throughout their occurrence. This definition focuses on the active, ongoing role entrepreneurs play in creating and sustaining entrepreneurial activities."
  },
  {
    "Q": "The role of Government in promoting Entrepreneurship includes:",
    "A": "Restricting market entry",
    "B": "Grants, loans and disbursements",
    "C": "Limiting business growth",
    "D": "Centralizing economic decisions",
    "Ans": "B",
    "Solution": "Governments promote entrepreneurship through financial support mechanisms like grants, loans, and disbursements. These financial instruments help entrepreneurs overcome capital constraints, especially in the early stages of business development when traditional financing may be difficult to obtain."
  },
  {
    "Q": "CAC means:",
    "A": "Commercial Arbitration Council",
    "B": "Corporate Affairs Commission",
    "C": "Central Administrative Committee",
    "D": "Commercial Activities Center",
    "Ans": "B",
    "Solution": "CAC stands for Corporate Affairs Commission. In Nigeria, it's the government agency responsible for the registration and regulation of companies, business names, and incorporated trustees. It ensures compliance with relevant regulations and maintains the companies registry."
  },
  {
    "Q": "One of these is a function of the CAC:",
    "A": "Providing loans to businesses",
    "B": "Regulating stock exchanges",
    "C": "Converting a private company to a public company",
    "D": "Setting interest rates for business loans",
    "Ans": "C",
    "Solution": "One of the key functions of the Corporate Affairs Commission (CAC) is facilitating the conversion of private companies to public companies. This involves ensuring compliance with additional regulatory requirements and disclosure obligations that apply to public companies."
  },
  {
    "Q": "ITF means:",
    "A": "International Trade Federation",
    "B": "Industrial Training Fund",
    "C": "Investment Trust Foundation",
    "D": "Institute of Technology and Finance",
    "Ans": "B",
    "Solution": "ITF stands for Industrial Training Fund. It's an organization established to promote and encourage the acquisition of skills in industry and commerce with a view to generating a pool of indigenous trained manpower sufficient to meet the needs of the economy."
  },
  {
    "Q": "The Students Industrial Work Experience Scheme (SIWES) was established by ITF in what year?",
    "A": "1963",
    "B": "1973",
    "C": "1983",
    "D": "1993",
    "Ans": "B",
    "Solution": "The Students Industrial Work Experience Scheme (SIWES) was established by the Industrial Training Fund (ITF) in 1973. The program was designed to give students practical exposure to real work situations they are likely to encounter after graduation."
  },
  {
    "Q": "SMES means:",
    "A": "State Managed Economic System",
    "B": "Strategic Management and Economic Services",
    "C": "Small and Medium Scale Enterprises",
    "D": "Specialized Manufacturing and Engineering Services",
    "Ans": "C",
    "Solution": "SMES stands for Small and Medium Scale Enterprises. These are businesses that maintain revenues or a number of employees below certain thresholds. They play a crucial role in economic development, job creation, and innovation in many economies."
  },
  {
    "Q": "Problems of SMEs include:",
    "A": "Too much government support",
    "B": "Excessive profitability",
    "C": "Low productivity",
    "D": "Overqualified workforce",
    "Ans": "C",
    "Solution": "Low productivity is a significant challenge facing Small and Medium Scale Enterprises (SMEs). This often results from factors such as inadequate technology, limited skills, poor management practices, and insufficient scale economies, constraining their competitiveness and growth potential."
  },
  {
    "Q": "Agencies that support business grants include all except:",
    "A": "NERFUND",
    "B": "FUSSI",
    "C": "EFCC",
    "D": "ANDE",
    "Ans": "C",
    "Solution": "The Economic and Financial Crimes Commission (EFCC) is not an agency that provides business grants. It's a law enforcement agency responsible for investigating financial crimes. The other options (NERFUND, FUSSI, and ANDE) are organizations that provide various forms of financial support to businesses."
  },
  {
    "Q": "The Nigerian Export Promotion Council was established in:",
    "A": "1966",
    "B": "1976",
    "C": "1986",
    "D": "1996",
    "Ans": "B",
    "Solution": "The Nigerian Export Promotion Council (NEPC) was established in 1976. It was created to develop and promote non-oil exports from Nigeria, diversify the country's export base, and assist Nigerian exporters in accessing international markets."
  },
  {
    "Q": "_____ Scheme is targeted at those who are either retired or are preparing to retire from paid employment and willing to maintain an economically productive life.",
    "A": "Youth Empowerment Scheme",
    "B": "Mature People Scheme",
    "C": "Graduate Employment Program",
    "D": "Rural Development Initiative",
    "Ans": "B",
    "Solution": "The Mature People Scheme is specifically designed for individuals who are approaching retirement or have already retired but wish to remain economically active. It provides support for these individuals to transition from employment to entrepreneurship, leveraging their experience and skills."
  },
  {
    "Q": "FUSSI means:",
    "A": "Fund for Small Scale Industries",
    "B": "Federal Union of Small Scale Investors",
    "C": "Foundation for Unified Small Scale Initiatives",
    "D": "Financial Undertaking for Strategic Small Investments",
    "Ans": "A",
    "Solution": "FUSSI stands for Fund for Small Scale Industries. It's a financial mechanism established to provide funding support specifically for small-scale industrial enterprises, helping them overcome capital constraints and promote industrial development."
  },
  {
    "Q": "To obtain FUSSI, the entrepreneur must first pay an un-refundable fee of:",
    "A": "₦1,000.00",
    "B": "₦500.00",
    "C": "₦2,000.00",
    "D": "₦250.00",
    "Ans": "B",
    "Solution": "To apply for funding from the Fund for Small Scale Industries (FUSSI), entrepreneurs must pay a non-refundable application fee of ₦500.00. This fee is part of the application process and is required regardless of whether the funding request is ultimately approved."
  },
  {
    "Q": "TSD means:",
    "A": "Technical Support Department",
    "B": "Trade Services Division",
    "C": "Technical Services Division",
    "D": "Technology Systems Development",
    "Ans": "C",
    "Solution": "TSD stands for Technical Services Division. This division typically provides specialized technical assistance, consulting, and support services to businesses, particularly in areas requiring specific expertise or technological knowledge."
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


