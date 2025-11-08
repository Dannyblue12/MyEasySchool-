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
    "Q": "Application software programs are created to facilitate a variety of functions including?",
    "A": "Manipulating information, data, constructing visuals, coordinating resources, and calculating figures",
    "B": "Operating systems",
    "C": "Database management",
    "D": "Network management",
    "Ans": "A"
  },
  {
    "Q": "Common examples of web applications include?",
    "A": "Operating systems",
    "B": "Database software",
    "C": "Web-based email, social media platforms, wikis, and online auctions",
    "D": "Office applications",
    "Ans": "C"
  },
  {
    "Q": "___ is a piece of software designed for a single purpose or function?",
    "A": "An app",
    "B": "An application",
    "C": "A system software",
    "D": "A utility",
    "Ans": "A"
  },
  {
    "Q": "___ is a piece of software that performs a variety of related functions?",
    "A": "An app",
    "B": "An operating system",
    "C": "An application",
    "D": "A tool",
    "Ans": "C"
  },
  {
    "Q": "_____ provide high utility to the user and the system?",
    "A": "System software",
    "B": "Application software",
    "C": "Utility software",
    "D": "Apps",
    "Ans": "C"
  },
  {
    "Q": "The three popular applications are?",
    "A": "Database management, network management, and system utilities",
    "B": "Word processing, spreadsheet, and database",
    "C": "Operating systems, device drivers, and BIOS",
    "D": "Email, web browser, and word processor",
    "Ans": "B"
  },
  {
    "Q": "CAL stands for?",
    "A": "Computer Assisted Language",
    "B": "Computer Aided Learning",
    "C": "Computer Algorithm Language",
    "D": "Computer Application Lab",
    "Ans": "B"
  },
  {
    "Q": "One of the challenges of application software is?",
    "A": "They are smaller in size",
    "B": "They require more CPU power",
    "C": "They are bigger in size and require large storage facilities",
    "D": "They cannot run on all systems",
    "Ans": "C"
  },
  {
    "Q": "DOC, PPC are examples of?",
    "A": "Software programs",
    "B": "File extensions",
    "C": "Programming languages",
    "D": "Document types",
    "Ans": "B"
  },
  {
    "Q": "The general default font style in any computer system is?",
    "A": "Arial",
    "B": "Times New Roman",
    "C": "Calibri",
    "D": "Verdana",
    "Ans": "C"
  },
  {
    "Q": "The default font number for line margin on the right is 2.54 and on the left is?",
    "A": "2.34",
    "B": "2.54",
    "C": "2.64",
    "D": "2.44",
    "Ans": "C"
  },
  {
    "Q": "A folder that stores all the files and folders deleted from Windows temporarily, which can be restored again if needed is called?",
    "A": "Recycle bin",
    "B": "Trash",
    "C": "Temporary folder",
    "D": "Backup folder",
    "Ans": "A"
  },
  {
    "Q": "_____ is a small image that represents a file, folder, or program?",
    "A": "Icon",
    "B": "Shortcut",
    "C": "Thumbnail",
    "D": "Link",
    "Ans": "A"
  },
  {
    "Q": "When we rest the mouse pointer on an icon, a rectangular box appears, this is referred to as?",
    "A": "Help text",
    "B": "Pop-up",
    "C": "Tool tip",
    "D": "Info box",
    "Ans": "C"
  },
  {
    "Q": "____ displays a list of commands that can be used to perform various tasks?",
    "A": "Tool bar",
    "B": "Status bar",
    "C": "Menu bar",
    "D": "Control bar",
    "Ans": "C"
  },
  {
    "Q": "____ contains a set of buttons for frequently used commands?",
    "A": "Menu bar",
    "B": "Tool bar",
    "C": "Status bar",
    "D": "Taskbar",
    "Ans": "B"
  },
  {
    "Q": "_____ appears at the very bottom of the window and provides information such as the cursor position, current page number, and word count?",
    "A": "Menu bar",
    "B": "Tool bar",
    "C": "Status bar",
    "D": "Taskbar",
    "Ans": "C"
  },
  {
    "Q": "____ is an application that provides detailed information about your files, folders, and drives?",
    "A": "Control Panel",
    "B": "Task Manager",
    "C": "Windows Explorer",
    "D": "Settings",
    "Ans": "C"
  },
  {
    "Q": "_____ displays the contents of the entire system in a hierarchical manner?",
    "A": "Taskbar",
    "B": "Desktop",
    "C": "File Explorer",
    "D": "Windows Explorer",
    "Ans": "D"
  },
  {
    "Q": "To open Windows Explorer, click?",
    "A": "Start > All Programs > Accessories > Windows Explorer",
    "B": "Start > Settings > Windows Explorer",
    "C": "Start > Control Panel > Windows Explorer",
    "D": "Start > Programs > File Explorer",
    "Ans": "A"
  },
  {
    "Q": "Windows Explorer is divided into two panes namely?",
    "A": "Top pane and bottom pane",
    "B": "Main pane and side pane",
    "C": "Left pane and right pane",
    "D": "Front pane and back pane",
    "Ans": "C"
  },
  {
    "Q": "The left pane displays the list of drives and folders on the computer, while the right pane?",
    "A": "Displays system information",
    "B": "Displays the contents of the selected drive or folder",
    "C": "Shows recent files",
    "D": "Shows shortcuts",
    "Ans": "B"
  },
  {
    "Q": "____ is the common storage unit in a computer?",
    "A": "Folder",
    "B": "File",
    "C": "Drive",
    "D": "Directory",
    "Ans": "B"
  },
  {
    "Q": "_____ is the virtual location for applications, documents, data, or other sub-folders?",
    "A": "Folder",
    "B": "Drive",
    "C": "File",
    "D": "Directory",
    "Ans": "A"
  },
  {
    "Q": "Folders are also called?",
    "A": "Partitions",
    "B": "Directories",
    "C": "Files",
    "D": "Documents",
    "Ans": "B"
  },
  {
    "Q": "To select consecutive files, use?",
    "A": "Ctrl key + arrow key",
    "B": "Shift key + arrow key",
    "C": "Alt key + arrow key",
    "D": "Tab key + arrow key",
    "Ans": "B"
  },
  {
    "Q": "To delete a file permanently without moving it to the recycle bin, select the file and press?",
    "A": "Ctrl + Del",
    "B": "Shift + Del",
    "C": "Alt + Del",
    "D": "Shift + Backspace",
    "Ans": "B"
  },
  {
    "Q": "______ is a software package that enables you to create, edit, print, and save documents for future retrieval and reference?",
    "A": "Spreadsheet software",
    "B": "Word processor",
    "C": "Database software",
    "D": "Presentation software",
    "Ans": "B"
  },
  {
    "Q": "The most recent version of MS Word is?",
    "A": "Version 15 MS Word 2016",
    "B": "Version 16 MS Word 2019",
    "C": "Version 14 MS Word 2013",
    "D": "Version 17 MS Word 2020",
    "Ans": "B"
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


