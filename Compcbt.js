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
    const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js");
    const { getAuth, signOut, onAuthStateChanged, setPersistence, browserLocalPersistence } = await import("https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js");
    const { getFirestore, doc, setDoc, getDoc } = await import("https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js");



    // Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyAf0mERQ9WiocU34BQx4Isr48Hs1VfpbDU",
        authDomain: "database-login-530f7.firebaseapp.com",
        projectId: "database-login-530f7",
        storageBucket: "database-login-530f7.appspot.com",
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
    "Q": "The basic components of an application are made up of two concepts, namely?",
    "A": "Information technology and information system",
    "B": "Hardware and software",
    "C": "User interface and backend",
    "D": "Database and network",
    "Ans": "A"
  },
  {
    "Q": "____ is a set and a software is a subset?",
    "A": "A window",
    "B": "A program",
    "C": "A process",
    "D": "A file",
    "Ans": "B"
  },
  {
    "Q": "_____ is a set of programs designed to perform a well-defined function?",
    "A": "A software",
    "B": "A hardware",
    "C": "An interface",
    "D": "A system",
    "Ans": "A"
  },
  {
    "Q": "Depending on its use and area of implementation, software can be divided into 3 major types, namely?",
    "A": "System software, application software, and utility software",
    "B": "Desktop software, mobile software, and web software",
    "C": "Basic software, advanced software, and interactive software",
    "D": "User software, developer software, and service software",
    "Ans": "A"
  },
  {
    "Q": "_____ is a graphical interface used to display the content of an application for the user to view and interact with it?",
    "A": "A browser",
    "B": "A window",
    "C": "An icon",
    "D": "A taskbar",
    "Ans": "B"
  },
  {
    "Q": "Windows was first produced by Microsoft in?",
    "A": "1980",
    "B": "1985",
    "C": "1990",
    "D": "1995",
    "Ans": "B"
  },
  {
    "Q": "_____ is the on-screen area on which windows, icons, menus, dialog boxes, and open applications appear?",
    "A": "A desktop",
    "B": "A taskbar",
    "C": "A folder",
    "D": "A panel",
    "Ans": "A"
  },
  {
    "Q": "By default, there are ___ to ___ icons on the desktop?",
    "A": "2 to 3",
    "B": "3 to 4",
    "C": "4 to 5",
    "D": "5 to 6",
    "Ans": "C"
  },
  {
    "Q": "_____ are a pictorial representation of programs?",
    "A": "Windows",
    "B": "Icons",
    "C": "Folders",
    "D": "Shortcuts",
    "Ans": "B"
  },
  {
    "Q": "Examples of icons are?",
    "A": "Recycle bin, Internet Explorer, My Documents, and Network Neighborhood",
    "B": "Control Panel, Windows Explorer, Desktop, and Taskbar",
    "C": "Start Menu, Task Manager, File Explorer, and Command Prompt",
    "D": "Paint, Calculator, Notepad, and Sticky Notes",
    "Ans": "A"
  },
  {
    "Q": "_____ are the software that directly allow the user to interact with the hardware components of a computer system?",
    "A": "Application software",
    "B": "System software",
    "C": "Device drivers",
    "D": "BIOS",
    "Ans": "B"
  },
  {
    "Q": "The system software can be called the?",
    "A": "User software",
    "B": "Secondary software",
    "C": "Main or alpha software",
    "D": "Hardware interface",
    "Ans": "C"
  },
  {
    "Q": "The system software can be further divided into ___ major types?",
    "A": "2",
    "B": "3",
    "C": "4",
    "D": "5",
    "Ans": "C"
  },
  {
    "Q": "The four types of system software are?",
    "A": "Operating system, language processor, device drivers, and BIOS",
    "B": "Word processor, spreadsheet, database, and presentation software",
    "C": "Security software, web browsers, utilities, and email clients",
    "D": "Antivirus, firewalls, VPNs, and data backup software",
    "Ans": "A"
  },
  {
    "Q": "BIOS stands for?",
    "A": "Basic Input Output System",
    "B": "Binary Input Output System",
    "C": "Boot Integrated Operating System",
    "D": "Basic Information Operating System",
    "Ans": "A"
  },
  {
    "Q": "____ is the main program that governs and maintains the inter-cooperation of the components of a computer system?",
    "A": "A window manager",
    "B": "The taskbar",
    "C": "The operating system",
    "D": "The user interface",
    "Ans": "C"
  },
  {
    "Q": "Examples of operating systems are?",
    "A": "Microsoft Windows, Linux, Mac OS",
    "B": "Photoshop, Excel, and Word",
    "C": "Firefox, Chrome, and Edge",
    "D": "Android, iOS, and Blackberry OS",
    "Ans": "A"
  },
  {
    "Q": "There are ___ types of language processors?",
    "A": "2",
    "B": "3",
    "C": "4",
    "D": "5",
    "Ans": "B"
  },
  {
    "Q": "The three types of language processors are?",
    "A": "C++, Java, Python",
    "B": "Machine-level language, assembly-level language, and high-level language",
    "C": "Interpreter, compiler, and assembler",
    "D": "Source code, byte code, and machine code",
    "Ans": "B"
  },
  {
    "Q": "The machine-level language only understands the?",
    "A": "English language",
    "B": "Mathematical instructions",
    "C": "Digital signal or binary language (0's and 1's)",
    "D": "Mnemonic code",
    "Ans": "C"
  },
  {
    "Q": "Assembly language uses mnemonics to represent low-level machine instructions or operation codes, also called?",
    "A": "Source codes",
    "B": "Binary codes",
    "C": "Op-codes",
    "D": "Micro-instructions",
    "Ans": "C"
  },
  {
    "Q": "______ are the simple English statements that humans use to program and code as it is easy to read and understand in the human world?",
    "A": "High-level languages",
    "B": "Low-level languages",
    "C": "Machine codes",
    "D": "Op-codes",
    "Ans": "A"
  },
  {
    "Q": "______ is a software program that runs on the computer, e.g., web browser, email, etc.?",
    "A": "System software",
    "B": "Utility software",
    "C": "Application software",
    "D": "Operating software",
    "Ans": "C"
  },
  {
    "Q": "_____ is a small firmware that controls the peripheral or input-output devices attached to the system?",
    "A": "BIOS",
    "B": "Drivers",
    "C": "Operating system",
    "D": "Firmware",
    "Ans": "A"
  },
  {
    "Q": "_____ is responsible for starting the operating system or initiating the booting process?",
    "A": "The device drivers",
    "B": "The application software",
    "C": "BIOS",
    "D": "The motherboard",
    "Ans": "C"
  },
  {
    "Q": "Application software includes such things as?",
    "A": "Database programs, word processors, web browsers, and spreadsheets",
    "B": "Antivirus software, firewalls, and security programs",
    "C": "Hardware drivers, firmware, and BIOS",
    "D": "Media players, photo editors, and video games",
    "Ans": "A"
  },
  {
    "Q": "Application software is divided into two types, namely?",
    "A": "Pre-installed software and custom-built software",
    "B": "General-purpose and specific-purpose application software",
    "C": "Open-source and proprietary software",
    "D": "Freeware and shareware",
    "Ans": "B"
  },
  {
    "Q": "____ are the types of application software that come in-built and ready to use?",
    "A": "General-purpose application software",
    "B": "Specific-purpose application software",
    "C": "Pre-installed application software",
    "D": "Open-source application software",
    "Ans": "A"
  },
  {
    "Q": "Examples of general-purpose application software are?",
    "A": "Google Chrome and Mozilla Firefox",
    "B": "Microsoft Excel and Adobe Photoshop",
    "C": "Notepad and WordPad",
    "D": "VLC and Windows Media Player",
    "Ans": "B"
  },
  {
    "Q": "____ are the types of software that are customizable and mostly used in real-time or business environments?",
    "A": "General-purpose software",
    "B": "Utility software",
    "C": "Specific-purpose application software",
    "D": "Operating systems",
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
                        window.location.href = 'Logincos.html'; // Replace 'login.html' with the actual path to your login page
                    }, 1000); // Redirect after 1 second
                }
            });
        })
        .catch((error) => {
            console.error("Error setting persistence:", error);
        });
}

loadFirebaseModules();


