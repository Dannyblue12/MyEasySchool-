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
    "Q": "Who defined taxes as: 'Enforced proportional contribution from persons and property levied by the state for support of government for all public needs.'",
    "A": "Adam Smith",
    "B": "Thomas Cooley",
    "C": "David Ricardo",
    "D": "John Maynard Keynes",
    "Ans": "B",
    "Solution": "Thomas Cooley provided this classic definition of taxes, emphasizing their compulsory nature and the purpose of supporting government functions and public needs. This definition highlights the enforced contribution aspect of taxation."
  },
  {
    "Q": "Objectives and Purpose of Taxation include the following except:",
    "A": "Revenue generation",
    "B": "Management of the Economy",
    "C": "Redistribution of Income and Wealth",
    "D": "Maximizing corporate profits",
    "Ans": "D",
    "Solution": "The main objectives of taxation include revenue generation (to fund government activities), economic management (fiscal policy), and redistribution of wealth (social equity). Maximizing corporate profits is not a purpose of taxation; in fact, taxation often reduces corporate profits."
  },
  {
    "Q": "Types of taxes include the following except:",
    "A": "Proportional tax",
    "B": "Regressive tax",
    "C": "Progressive tax",
    "D": "Voluntary tax",
    "Ans": "D",
    "Solution": "The main types of tax structures are proportional (flat rate regardless of income), regressive (lower effective rate for higher incomes), and progressive (higher rate for higher incomes). Voluntary tax is not a recognized tax structure since taxes are compulsory by definition."
  },
  {
    "Q": "The measure upon which the assessment or determination of tax liability is based:",
    "A": "Tax rate",
    "B": "Tax base",
    "C": "Tax yield",
    "D": "Tax incidence",
    "Ans": "B",
    "Solution": "The tax base is the assessed value or activity upon which a tax is calculated. For income tax, the base is taxable income; for property tax, it's the assessed property value; for sales tax, it's the transaction value. The tax liability is determined by applying the tax rate to this base."
  },
  {
    "Q": "The return in form of tax revenue derived from the administration of tax on taxpayers is:",
    "A": "Tax yield",
    "B": "Tax base",
    "C": "Tax burden",
    "D": "Tax incidence",
    "Ans": "A",
    "Solution": "Tax yield refers to the total revenue collected from a specific tax. It represents the actual return or proceeds that the government receives from administering a tax, which depends on both the tax base and the effectiveness of tax collection."
  },
  {
    "Q": "The term that describes the consequences of a specific tax scenario is:",
    "A": "Tax burden",
    "B": "Tax incidence",
    "C": "Tax effect",
    "D": "Tax impact",
    "Ans": "C",
    "Solution": "Tax effect refers to the economic consequences or implications that result from a specific tax scenario or policy. It encompasses how taxes influence behavior, economic decisions, and outcomes for various stakeholders in the economy."
  },
  {
    "Q": "_____ are paid to the government in return for specific services by government to the taxpayers:",
    "A": "Taxes",
    "B": "Levies",
    "C": "Duties",
    "D": "Tariffs",
    "Ans": "B",
    "Solution": "Levies are amounts collected by the government in exchange for specific services provided to the taxpayer. Unlike general taxes that fund overall government operations, levies have a direct connection to particular services rendered to those who pay them."
  },
  {
    "Q": "_____ affirms that every taxable person should be taxed according to his ability:",
    "A": "Equity",
    "B": "Equality",
    "C": "Efficiency",
    "D": "Neutrality",
    "Ans": "A",
    "Solution": "The principle of equity in taxation affirms that individuals should be taxed according to their ability to pay. This principle supports progressive taxation systems where those with higher incomes or wealth contribute proportionally more in taxes than those with less."
  },
  {
    "Q": "What is the full meaning of TIN?",
    "A": "Tax Information Number",
    "B": "Taxpayer Identification Number",
    "C": "Tax Identification Number",
    "D": "Taxation Identity Number",
    "Ans": "C",
    "Solution": "TIN stands for Tax Identification Number. It is a unique identifier assigned to taxpayers to track their compliance with tax laws and facilitate tax administration. It helps in maintaining tax records and preventing tax evasion."
  },
  {
    "Q": "Who specified the major objective of introducing TIN?",
    "A": "Federal Inland Revenue Service",
    "B": "Ministry of Finance",
    "C": "Joint Tax Board Bulletin",
    "D": "National Tax Policy",
    "Ans": "C",
    "Solution": "The Joint Tax Board Bulletin specified the major objectives of introducing the Tax Identification Number (TIN) system. The bulletin outlined how TIN would improve tax administration, reduce evasion, and create a more comprehensive taxpayer database."
  },
  {
    "Q": "The following are notable tax legislations in Nigeria except:",
    "A": "Personal Income Tax Act",
    "B": "Companies Income Tax Act",
    "C": "Petroleum Profits Tax Act",
    "D": "National Revenue Act",
    "Ans": "D",
    "Solution": "Nigeria's tax system is governed by several key legislations including the Personal Income Tax Act, Companies Income Tax Act, and Petroleum Profits Tax Act. The 'National Revenue Act' is not a recognized tax legislation in Nigeria's tax framework."
  },
  {
    "Q": "What is the full meaning of FIRS?",
    "A": "Federal Income Revenue Service",
    "B": "Federal Inland Revenue Service",
    "C": "Federal Internal Revenue System",
    "D": "Federal Income Regulation Service",
    "Ans": "B",
    "Solution": "FIRS stands for Federal Inland Revenue Service. It is the Nigerian federal government agency responsible for assessing, collecting, and accounting for tax and other revenues accruing to the Federal Government of Nigeria."
  },
  {
    "Q": "What is the full meaning of SIRS?",
    "A": "State Income Revenue Service",
    "B": "State Internal Revenue System",
    "C": "State Inland Revenue Service",
    "D": "State Internal Revenue Service",
    "Ans": "D",
    "Solution": "SIRS stands for State Internal Revenue Service. These are agencies at the state level in Nigeria responsible for collecting and administering taxes that fall under state jurisdiction, such as personal income tax for state residents."
  },
  {
    "Q": "_____ are the native laws and customs governing the taxation of incomes within an ethnic group:",
    "A": "Traditional Laws",
    "B": "Customary Law",
    "C": "Ethnic Regulations",
    "D": "Indigenous Codes",
    "Ans": "B",
    "Solution": "Customary Law refers to the traditional rules, practices, and customs that govern various aspects of life, including taxation, within specific ethnic groups. These laws evolved over time and were recognized even before formal tax legislation was introduced."
  },
  {
    "Q": "Osusu-nkwu is applicable in the _____ part of Nigeria:",
    "A": "Northern part",
    "B": "Western part",
    "C": "Eastern part",
    "D": "Southern part",
    "Ans": "C",
    "Solution": "Osusu-nkwu is a traditional taxation or contribution system that is applicable in the Eastern part of Nigeria, particularly among Igbo communities. It represents one of the indigenous revenue collection methods that existed before modern taxation systems."
  },
  {
    "Q": "_____ is payable by adherents of the Islamic faith on their wealth:",
    "A": "Jizya",
    "B": "Zakkat",
    "C": "Sadaqah",
    "D": "Kharaj",
    "Ans": "B",
    "Solution": "Zakkat (or Zakat) is a form of almsgiving or religious tax in Islam, considered a religious obligation for all Muslims who meet the necessary criteria of wealth. It's one of the Five Pillars of Islam and serves as a mechanism for wealth redistribution."
  },
  {
    "Q": "What is the full meaning of TCC?",
    "A": "Tax Collection Certificate",
    "B": "Tax Compliance Certificate",
    "C": "Tax Clearance Certificate",
    "D": "Tax Confirmation Certificate",
    "Ans": "C",
    "Solution": "TCC stands for Tax Clearance Certificate. It is an official document issued by tax authorities confirming that a taxpayer has paid all due taxes or has no outstanding tax liabilities for a specific period, usually the preceding three years."
  },
  {
    "Q": "What is the full meaning of VAT?",
    "A": "Variable Added Tax",
    "B": "Value-Added Tax",
    "C": "Volume Assessment Tax",
    "D": "Vendor Applied Tax",
    "Ans": "B",
    "Solution": "VAT stands for Value-Added Tax. It is a consumption tax placed on a product whenever value is added at each stage of the supply chain, from production to the point of sale. The end consumer ultimately bears the VAT cost."
  },
  {
    "Q": "Sharing of VAT proceeds by government include ____ % to the Federal government, ____ % to the State Government, ____ % to the Local Government.",
    "A": "15%, 50%, 35%",
    "B": "20%, 30%, 50%",
    "C": "35%, 40%, 25%",
    "D": "25%, 45%, 30%",
    "Ans": "A",
    "Solution": "In Nigeria, VAT proceeds are distributed as follows: 15% to the Federal Government, 50% to State Governments (distributed based on derivation principles), and 35% to Local Governments. This distribution formula is designed to ensure fiscal federalism and support all levels of government."
  },
  {
    "Q": "There are 3 types of VAT except:",
    "A": "The Consumption VAT",
    "B": "The Income VAT",
    "C": "The Gross Product Type of VAT",
    "D": "The Net Product Type of VAT",
    "Ans": "B",
    "Solution": "The three recognized types of VAT are Consumption VAT (based on consumption), Gross Product VAT (no deduction for capital purchases), and Net Product VAT (allows deduction for depreciation). 'Income VAT' is not a standard classification in VAT systems."
  },
  {
    "Q": "VAT exempt items are divided into?",
    "A": "Taxable and non-taxable items",
    "B": "Goods exempt and service exempt",
    "C": "Local and imported items",
    "D": "Luxury and essential items",
    "Ans": "B",
    "Solution": "VAT exempt items are typically categorized into two main groups: goods exempt (physical products that are not subject to VAT) and services exempt (specific services that are excluded from VAT). This classification helps in administering the tax system effectively."
  },
  {
    "Q": "Which section states that the VAT shall be administered and managed by the FIRS?",
    "A": "Section 5",
    "B": "Section 6",
    "C": "Section 7",
    "D": "Section 8",
    "Ans": "C",
    "Solution": "Section 7 of the Value Added Tax Act in Nigeria explicitly states that VAT shall be administered and managed by the Federal Inland Revenue Service (FIRS). This section establishes FIRS as the authority responsible for VAT implementation and collection."
  },
  {
    "Q": "Registration for VAT include the following except:",
    "A": "Taxable person",
    "B": "Government Ministries",
    "C": "Non-resident companies",
    "D": "Non-profit organizations",
    "Ans": "D",
    "Solution": "In Nigeria, entities required to register for VAT include taxable persons (individuals or businesses making taxable supplies), government ministries and departments, and non-resident companies doing business in Nigeria. Certain non-profit organizations may be exempt from VAT registration depending on their activities."
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


