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
    "Q": "_____ is an economic activity which is widely recognized as a source of innovation that has an impact on economic development.",
    "A": "Marketing",
    "B": "Entrepreneurship",
    "C": "Finance",
    "D": "Human resource management",
    "Ans": "B",
    "Solution": "Entrepreneurship is recognized as a key economic activity that drives innovation and contributes significantly to economic development through job creation, market expansion, and technological advancement."
  },
  {
    "Q": "What is the engine for economic development and an integral part of entrepreneurship?",
    "A": "Financial management",
    "B": "Market research",
    "C": "New venture creation",
    "D": "Resource allocation",
    "Ans": "C",
    "Solution": "New venture creation is considered the engine for economic development as it generates new jobs, introduces innovative products and services, and stimulates economic growth. It's an integral part of entrepreneurship as it represents the implementation of entrepreneurial ideas."
  },
  {
    "Q": "An individual who typically has limited resources attempting to efficiently utilize it to exploit a viable business idea is?",
    "A": "Manager",
    "B": "Investor",
    "C": "Consultant",
    "D": "Entrepreneur",
    "Ans": "D",
    "Solution": "An entrepreneur is defined as someone who identifies opportunities, takes risks, and efficiently utilizes limited resources to exploit viable business ideas for profit. This resource optimization is a key characteristic that distinguishes entrepreneurs from other business roles."
  },
  {
    "Q": "According to _____, a new venture creation is the creation of new organizations through planning, organizing and establishing them.",
    "A": "Schumpeter",
    "B": "Peter Drucker",
    "C": "Metallo et al",
    "D": "Michael Porter",
    "Ans": "C",
    "Solution": "Metallo et al defined new venture creation as the process of creating new organizations through systematic planning, organizing, and establishment. This definition emphasizes the structured approach to bringing new business entities into existence."
  },
  {
    "Q": "An entrepreneur faces various facets of new venture creation such as the following except:",
    "A": "New venture ideas",
    "B": "Evaluation",
    "C": "Exploitation for value creation",
    "D": "Retirement planning",
    "Ans": "D",
    "Solution": "Entrepreneurs face three main facets in new venture creation: generating new venture ideas, evaluating those ideas, and exploiting them for value creation. Retirement planning is not a facet of new venture creation but rather a personal financial planning aspect."
  },
  {
    "Q": "Every new venture starts with an?",
    "A": "Investment",
    "B": "Idea",
    "C": "Team",
    "D": "Business plan",
    "Ans": "B",
    "Solution": "Every new venture begins with an idea - the initial concept or insight that identifies a market opportunity or a solution to a problem. This idea then gets developed, evaluated, and potentially implemented through the entrepreneurial process."
  },
  {
    "Q": "Business ventures arise newly due to factors including all except:",
    "A": "External causes",
    "B": "Voluntary Self-employment",
    "C": "Inheritance",
    "D": "Hobbies",
    "Ans": "C",
    "Solution": "Business ventures typically arise from external causes (market opportunities, economic changes), voluntary self-employment decisions, or hobbies that evolve into businesses. While inheritance might provide resources for a venture, it's not typically classified as a primary cause for new business creation."
  },
  {
    "Q": "Some examples of external causes for starting a business include the following except:",
    "A": "Accidental Discovery",
    "B": "Personal financial crisis",
    "C": "Changing Perceptions",
    "D": "Political change",
    "Ans": "B",
    "Solution": "External causes for starting a business typically include accidental discoveries (finding an opportunity by chance), changing perceptions in the market, and political changes that create new business environments. A personal financial crisis is an internal or personal factor rather than an external cause."
  },
  {
    "Q": "_____ describes the business you wish to create, the products and services you wish to provide and the market it serves.",
    "A": "Business model",
    "B": "Business plan",
    "C": "Business concept",
    "D": "Business strategy",
    "Ans": "C",
    "Solution": "A business concept is the foundational description of what your business will be, including the products/services offered and the target market. It's the initial articulation of your business idea before developing a more detailed business model or plan."
  },
  {
    "Q": "What process helps you decide whether to move forward with the business planning process?",
    "A": "Implementation process",
    "B": "Analysis process",
    "C": "Marketing process",
    "D": "Financial process",
    "Ans": "B",
    "Solution": "The analysis process helps entrepreneurs evaluate the viability of their business idea before committing significant resources to detailed planning. It involves market research, competitive analysis, and preliminary financial projections to determine if the concept merits further development."
  },
  {
    "Q": "The following are steps in coming up with a business idea for new venture except:",
    "A": "Developing your ideas, business concept",
    "B": "Business model",
    "C": "The business plan",
    "D": "Starting up new venture",
    "Ans": "D",
    "Solution": "The process of coming up with a business idea includes developing the initial concept, creating a business model, and formulating a business plan. Starting up the new venture is the implementation phase that follows after the idea development process is complete."
  },
  {
    "Q": "In business concept, the following steps guarantee a business success except:",
    "A": "Explore and assess business idea",
    "B": "Refinement and assessment of idea",
    "C": "Go/No-Go Decision",
    "D": "Business operations",
    "Ans": "D",
    "Solution": "In the business concept phase, entrepreneurs explore and assess the initial idea, refine it based on feedback, and make a go/no-go decision. Business operations come later in the implementation phase and are not part of the concept development process that guarantees success."
  },
  {
    "Q": "In business operation, the stage where the entrepreneur struggles to kick-start the business plan is?",
    "A": "Existence",
    "B": "Survival",
    "C": "Success",
    "D": "Growth",
    "Ans": "A",
    "Solution": "The existence stage is the initial phase of business operations where entrepreneurs struggle to establish the business, acquire customers, and deliver products/services. It's characterized by challenges in implementing the business plan and establishing a foothold in the market."
  },
  {
    "Q": "The key question: 'In the short run, can we generate enough cash to break even to cover the repair of capital assets as they wear out?' was said by:",
    "A": "Peter Drucker",
    "B": "Churchill and Lewis",
    "C": "Joseph Schumpeter",
    "D": "Michael Porter",
    "Ans": "B",
    "Solution": "Churchill and Lewis developed a model of small business growth that identified key questions at different stages. This particular question relates to the survival stage, where the business has demonstrated viability but must generate sufficient cash flow to maintain operations."
  },
  {
    "Q": "The stage of collecting sufficient information to determine if the business idea has merit is?",
    "A": "Idea generation",
    "B": "Business planning",
    "C": "Go/No-Go Decision",
    "D": "Market analysis",
    "Ans": "C",
    "Solution": "The Go/No-Go Decision stage is when entrepreneurs evaluate all collected information about their business idea to determine whether it has sufficient merit to proceed with implementation. It's a critical decision point based on comprehensive analysis of the concept's viability."
  },
  {
    "Q": "An outline or blueprint of how you will implement, manage and grow your business is:",
    "A": "A business plan",
    "B": "A business model",
    "C": "A business concept",
    "D": "A business strategy",
    "Ans": "A",
    "Solution": "A business plan is a comprehensive document that outlines how a business will be implemented, managed, and grown. It typically includes sections on marketing, operations, finance, and management, serving as a roadmap for the business's development."
  },
  {
    "Q": "An idea is only viable when people are willing to:",
    "A": "Acknowledge your creativity",
    "B": "Recognize your expertise",
    "C": "Pay you for what you provide",
    "D": "Provide feedback on improvements",
    "Ans": "C",
    "Solution": "The ultimate test of a business idea's viability is whether customers are willing to pay for the product or service. Without this willingness to pay, even the most creative or innovative idea cannot sustain a business financially."
  },
  {
    "Q": "The company and its owner must not stop their innovation and risk taking at which stage?",
    "A": "Growth",
    "B": "Startup",
    "C": "Survival",
    "D": "Maturity",
    "Ans": "D",
    "Solution": "At the maturity stage, businesses face the risk of stagnation or decline if they stop innovating. Continued innovation and calculated risk-taking are essential to maintain competitiveness and find new growth opportunities even when the business appears stable."
  },
  {
    "Q": "The first stage of a business plan is:",
    "A": "Concept development",
    "B": "Startup",
    "C": "Market analysis",
    "D": "Financial planning",
    "Ans": "B",
    "Solution": "The startup stage is the initial phase of implementing a business plan, where the entrepreneur begins operations, acquires initial customers, and establishes the business in the market. It's characterized by high uncertainty and the challenge of translating the plan into reality."
  },
  {
    "Q": "Abrams (2000) in her book 'The Successful Business Plan' identifies how many steps in the production of a business plan?",
    "A": "5",
    "B": "6",
    "C": "7",
    "D": "8",
    "Ans": "B",
    "Solution": "In her influential book 'The Successful Business Plan,' Rhonda Abrams identified six key steps in developing an effective business plan. These steps provide a structured approach to creating a comprehensive plan that addresses all critical aspects of the business."
  },
  {
    "Q": "How many building blocks of a business model should you address?",
    "A": "7",
    "B": "8",
    "C": "9",
    "D": "10",
    "Ans": "C",
    "Solution": "According to the Business Model Canvas developed by Alexander Osterwalder, there are nine essential building blocks that should be addressed in a comprehensive business model: customer segments, value propositions, channels, customer relationships, revenue streams, key resources, key activities, key partnerships, and cost structure."
  },
  {
    "Q": "The following are approaches in starting up a new venture except:",
    "A": "Transcendant-based approach",
    "B": "Product-based approach",
    "C": "User-based approach",
    "D": "Manufacturing-based approach",
    "Ans": "A",
    "Solution": "The common approaches to starting a new venture include product-based (focusing on product features), user-based (focusing on customer needs), and manufacturing-based (focusing on production efficiency). The transcendant-based approach is not a standard business startup methodology."
  },
  {
    "Q": "Which strategy involves introducing new products that will meet and satisfy the needs of a market?",
    "A": "User-based approach",
    "B": "Product-based approach",
    "C": "Manufacturing-based approach",
    "D": "Market-based approach",
    "Ans": "B",
    "Solution": "The product-based approach focuses on developing and introducing new products with features and benefits designed to meet identified market needs. This strategy emphasizes product innovation and development as the primary driver of business success."
  },
  {
    "Q": "The entrepreneurial process is made up of how many stages which entrepreneurs employ?",
    "A": "6",
    "B": "7",
    "C": "8",
    "D": "5",
    "Ans": "C",
    "Solution": "The comprehensive entrepreneurial process typically consists of eight stages that entrepreneurs move through: idea generation, opportunity evaluation, planning, resource gathering, implementation, growth management, harvesting, and renewal or exit. Each stage requires different skills and approaches."
  },
  {
    "Q": "One of these is not among the entrepreneurial process:",
    "A": "Growth",
    "B": "Startup",
    "C": "Harvest",
    "D": "Retirement",
    "Ans": "D",
    "Solution": "The entrepreneurial process includes stages like startup (launching the business), growth (expanding operations), and harvest (realizing value through sale or IPO). Retirement is a personal life stage for the entrepreneur, not a stage in the entrepreneurial process itself."
  },
  {
    "Q": "In order to exploit the defined opportunity, a good business plan needs to be:",
    "A": "Marketed",
    "B": "Developed",
    "C": "Financed",
    "D": "Outsourced",
    "Ans": "B",
    "Solution": "To effectively exploit a business opportunity, a comprehensive business plan must be developed that outlines the strategy, resources, and actions needed. This development process translates the opportunity into a concrete roadmap for implementation."
  },
  {
    "Q": "Factors that influence new venture business are the following except:",
    "A": "Political factors",
    "B": "Economic factors",
    "C": "Cultural factors",
    "D": "Personal hobbies",
    "Ans": "D",
    "Solution": "New ventures are influenced by external factors including political factors (regulations, policies), economic factors (market conditions, interest rates), and cultural factors (social norms, consumer preferences). Personal hobbies may inspire business ideas but are not classified as systematic external factors influencing business ventures."
  },
  {
    "Q": "_____ refers to the activities in which people are employed to generate revenue.",
    "A": "Business sector",
    "B": "Labor market",
    "C": "Economy of a country",
    "D": "Industry",
    "Ans": "C",
    "Solution": "The economy of a country encompasses all activities in which people are employed to generate revenue, including production, distribution, and consumption of goods and services. It's the comprehensive system within which businesses operate and create value."
  },
  {
    "Q": "Environmental factors include the following except:",
    "A": "The natural environment",
    "B": "Business location",
    "C": "Environmental regulations",
    "D": "Climate change",
    "Ans": "B",
    "Solution": "Environmental factors typically refer to the natural environment (physical surroundings, resources), environmental regulations (laws governing environmental impact), and phenomena like climate change. Business location is considered a strategic or operational factor rather than an environmental factor in this context."
  },
  {
    "Q": "Some legal concepts in protecting your new business idea include the following except:",
    "A": "Patent",
    "B": "Trademarks",
    "C": "Copyright",
    "D": "Business registration",
    "Ans": "D",
    "Solution": "Legal protections for business ideas include patents (for inventions), trademarks (for brands and logos), and copyrights (for creative works). Business registration is a legal requirement for operating a business but doesn't specifically protect business ideas or intellectual property."
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


