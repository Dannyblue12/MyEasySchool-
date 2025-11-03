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
    "Q": "What is the process of increasing firms' involvement in international markets?",
    "A": "Globalization",
    "B": "Internationalization",
    "C": "Market expansion",
    "D": "Foreign direct investment",
    "Ans": "B",
    "Solution": "Internationalization refers to the process by which companies increase their involvement in international markets through various strategies such as exporting, licensing, joint ventures, or establishing foreign subsidiaries. It's a gradual process of expanding business operations beyond domestic borders."
  },
  {
    "Q": "The following are 3 types of Internationalization theory except:",
    "A": "UPPSALA Internationalization Theory",
    "B": "Network Model",
    "C": "Born Global Model",
    "D": "Monopolistic Advantage Theory",
    "Ans": "D",
    "Solution": "The three main internationalization theories are the UPPSALA model (stage model), the Network model (relationship-based), and the Born Global model (rapid internationalization). The Monopolistic Advantage Theory is related to foreign direct investment rather than being classified as an internationalization theory."
  },
  {
    "Q": "_____ is also called the stage model, that states entrepreneurship starts and grows first in domestic markets.",
    "A": "Network Model",
    "B": "Born Global Model",
    "C": "UPPSALA Internationalization Theory",
    "D": "Eclectic Paradigm",
    "Ans": "C",
    "Solution": "The UPPSALA Internationalization Theory, developed by Swedish researchers, is also known as the stage model because it proposes that firms internationalize gradually in stages, beginning with operations in domestic markets before expanding internationally, typically to psychologically close markets first."
  },
  {
    "Q": "Which model has to do with establishment of relationships with independent actors?",
    "A": "Network model",
    "B": "UPPSALA model",
    "C": "Born Global model",
    "D": "Transaction Cost model",
    "Ans": "A",
    "Solution": "The Network model of internationalization focuses on how firms establish and develop relationships with independent actors in international networks. These relationships provide access to resources, knowledge, and market opportunities that facilitate international expansion."
  },
  {
    "Q": "According to _____, born global firms first attempt to develop superior routines to acquire, disseminate and integrate knowledge.",
    "A": "Knight and Cavusgil",
    "B": "Johanson and Vahlne",
    "C": "Weerawardena et al",
    "D": "Oviatt and McDougall",
    "Ans": "C",
    "Solution": "Weerawardena and colleagues emphasized that born global firms develop superior knowledge management routines early in their existence. These routines help them acquire, disseminate, and integrate knowledge about international markets, which enables their rapid internationalization."
  },
  {
    "Q": "Factors that help strategic behaviour of born global firms include the following except:",
    "A": "The speed of internationalization",
    "B": "Choice of market",
    "C": "Form of international market entry made",
    "D": "Domestic market dominance",
    "Ans": "D",
    "Solution": "The strategic behavior of born global firms is characterized by the speed of internationalization, choice of markets, and form of international market entry. Unlike traditional firms, born globals don't focus on domestic market dominance before internationalizing, which is why it's not a factor that helps their strategic behavior."
  },
  {
    "Q": "The following are distinctive characteristics of born global firms except:",
    "A": "Present Across Most Industries",
    "B": "Emphasis on Differentiation strategy",
    "C": "Emphasis on superior quality product",
    "D": "Gradual international expansion",
    "Ans": "D",
    "Solution": "Born global firms are characterized by their presence across various industries, emphasis on differentiation strategies, and focus on superior quality products. Unlike traditional internationalizing firms, they do not follow a gradual expansion approach but rather internationalize rapidly from inception."
  },
  {
    "Q": "Jumia, Amazon and Alibaba all have?",
    "A": "Strong Online Presence",
    "B": "Physical stores in every country",
    "C": "The same founder",
    "D": "Identical business models",
    "Ans": "A",
    "Solution": "Jumia, Amazon, and Alibaba are all e-commerce giants that have established strong online presences in their respective markets. While they have different origins, founders, and specific business models, their common characteristic is their robust digital platforms that enable online shopping."
  },
  {
    "Q": "_____ is the largest online shopping website in the world, founded in 1994.",
    "A": "Alibaba",
    "B": "eBay",
    "C": "Amazon",
    "D": "Walmart",
    "Ans": "C",
    "Solution": "Amazon, founded by Jeff Bezos in 1994, is recognized as the largest online shopping website in the world based on market capitalization, revenue, and global reach. It started as an online bookstore but has since diversified into virtually every product category."
  },
  {
    "Q": "Who founded Amazon?",
    "A": "Jack Ma",
    "B": "Jeff Bezos",
    "C": "Mark Zuckerberg",
    "D": "Elon Musk",
    "Ans": "B",
    "Solution": "Jeff Bezos founded Amazon in 1994, initially as an online bookstore operating from his garage in Seattle. Under his leadership, Amazon grew to become the world's largest online retailer and a dominant player in cloud computing services."
  },
  {
    "Q": "Who founded Alibaba?",
    "A": "Jack Ma",
    "B": "Pony Ma",
    "C": "Richard Liu",
    "D": "Robin Li",
    "Ans": "A",
    "Solution": "Jack Ma (Ma Yun) founded Alibaba Group in 1999 in Hangzhou, China. With his background as an English teacher, Ma built Alibaba into one of the world's largest e-commerce and technology companies, revolutionizing business-to-business commerce in China."
  },
  {
    "Q": "Which e-commerce company in the world is the 7th richest?",
    "A": "JD.com",
    "B": "eBay",
    "C": "Alibaba",
    "D": "Shopify",
    "Ans": "C",
    "Solution": "Alibaba Group has consistently ranked among the world's most valuable companies. While rankings fluctuate, Alibaba has been positioned around 7th place among global companies by market capitalization, making it one of the richest e-commerce companies worldwide."
  },
  {
    "Q": "What was Facebook known as before?",
    "A": "The Facebook",
    "B": "Facemash",
    "C": "ConnectU",
    "D": "Harvard Connection",
    "Ans": "B",
    "Solution": "Before becoming Facebook, Mark Zuckerberg created Facemash in 2003 while at Harvard. Facemash was a website that allowed users to compare two student photos side-by-side and choose who was more attractive. This controversial project preceded the creation of 'TheFacebook' in February 2004."
  },
  {
    "Q": "_____ is the 6th most successful business in the world according to 2019 rating.",
    "A": "Microsoft",
    "B": "Apple",
    "C": "Facebook",
    "D": "Amazon",
    "Ans": "C",
    "Solution": "According to 2019 ratings based on market capitalization, Facebook (now Meta Platforms) was ranked as the 6th most successful business in the world. The company's high valuation reflected its dominant position in social media and digital advertising markets."
  },
  {
    "Q": "In the list of successful business in the world, US Companies dominate the list with _____ out of the total 100 companies while Chinese company is _____.",
    "A": "54, 12",
    "B": "54, 7",
    "C": "12, 54",
    "D": "7, 54",
    "Ans": "A",
    "Solution": "In global business rankings, US companies have historically dominated, with approximately 54 companies in the top 100 global businesses. Chinese companies have been growing in prominence, with about 12 companies in the top 100, reflecting China's increasing economic influence."
  },
  {
    "Q": "The following are 3 factors to determine whether a firm will become born global except:",
    "A": "Entrepreneur-related reasons",
    "B": "Organizational reasons",
    "C": "External factors",
    "D": "Domestic market saturation",
    "Ans": "D",
    "Solution": "The three main factors that determine whether a firm will become born global are entrepreneur-related reasons (international experience, global mindset), organizational reasons (unique resources, knowledge-intensive products), and external factors (industry characteristics, global networks). Domestic market saturation is more relevant to traditional internationalization models."
  },
  {
    "Q": "What is one main difference between born global firms and traditional internationalizing firms?",
    "A": "Born globals have larger initial investments",
    "B": "Traditional firms use more technology",
    "C": "Born globals focus on niche markets",
    "D": "They do not dominate their local market first before going international",
    "Ans": "D",
    "Solution": "A key difference between born global firms and traditional internationalizing firms is that born globals do not follow the conventional path of establishing domestic market dominance before expanding internationally. Instead, they pursue international opportunities from inception or very early in their development."
  },
  {
    "Q": "SME export barriers are classified into two groups:",
    "A": "Financial barriers and non-financial barriers",
    "B": "Internal barriers and external barriers",
    "C": "Regulatory barriers and market barriers",
    "D": "Strategic barriers and operational barriers",
    "Ans": "B",
    "Solution": "Small and Medium Enterprise (SME) export barriers are typically classified into two main groups: internal barriers (firm-specific challenges like limited resources, lack of knowledge) and external barriers (environment-specific challenges like foreign regulations, currency risks, and cultural differences)."
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


