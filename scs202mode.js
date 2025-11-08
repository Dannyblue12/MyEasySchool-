const loader = document.getElementById('loader');
        const content = document.getElementById('content');
        const unauthorized = document.getElementById('unauthorized');

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

            // Set persistence to 'local' to remember user session
            await setPersistence(auth, browserLocalPersistence);
            
            // Check authentication state
            onAuthStateChanged(auth, (user) => {
                loader.style.display = 'none'; // Hide loader

                if (user) {
                    // User is authenticated, display content
                    console.log("User is signed in:", user);
                    content.style.display = 'block';

                    // Render the quiz content
                    content.innerHTML = `
                        <main>
                            <section id="quiz-container">
                              <div class="timer hidden">
    <span id="countdownHours">00</span>:
    <span id="countdownMinutes">00</span>:
    <span id="countdownSeconds">00</span>
  </div>
                                <p id="question"></p>
                                <ul id="choices"></ul>
                                <button id="prev-btn">Previous</button>
                                <button id="next-btn">Next</button>
                            </section>
                            <div id="result-container" style="display: none;">
                                <p>Your Score: <span id="score"></span></p>
                                  <button id="show-answers-btn">Show Answers</button>
                                <button id="restart-btn">Restart</button>
                            </div>
                        </main>
                    `;

                    // Set up quiz functionality here
                    setupQuiz();
                } else {
                    // No user is signed in
                    console.log("No user signed in.");
                    unauthorized.style.display = 'block';
                    setTimeout(() => {
                        window.location.href = 'Logineasy.html'; // Replace with your actual login page URL
                    }, 1000);
                }
            });
        }

        // Quiz setup function
        function setupQuiz() {
            const quizData = [ 
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
  },
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
  },
   {
    "Q": "_____ displays the name of active document",
    "A": "The menu bar",
    "B": "The ribbon",
    "C": "The status bar",
    "D": "The title bar",
    "Ans": "D"
  },
  {
    "Q": "By default, the quick access tool bar appears to the right of the word icon at the left end of the title bar, and displays the.......",
    "A": "Save, undo, and redo buttons",
    "B": "Save, close, and minimize buttons",
    "C": "New, open, and save buttons",
    "D": "Undo, redo, and close buttons",
    "Ans": "A"
  },
  {
    "Q": "_____ the houses commands or menus that can be used to perform file related operations such as: open or save files, create new documents, print a document, etc.",
    "A": "The home tab",
    "B": "The insert tab",
    "C": "The file tab",
    "D": "The view tab",
    "Ans": "C"
  },
  {
    "Q": "To save or save as press",
    "A": "Ctrl P",
    "B": "Ctrl S",
    "C": "Ctrl C",
    "D": "Ctrl N",
    "Ans": "B"
  },
  {
    "Q": "To paste a document press",
    "A": "Ctrl X",
    "B": "Ctrl V",
    "C": "Ctrl C",
    "D": "Ctrl A",
    "Ans": "B"
  },
  {
    "Q": "..... Refers to the document area",
    "A": "The status bar",
    "B": "The title bar",
    "C": "The work area",
    "D": "The ribbon",
    "Ans": "C"
  },
  {
    "Q": "The small arrow at the lower right corner of each group is known as.....",
    "A": "Group icon",
    "B": "Launcher button",
    "C": "Dialog box launcher",
    "D": "Dropdown arrow",
    "Ans": "C"
  },
  {
    "Q": "To highlight the entire document, press",
    "A": "Ctrl C",
    "B": "Ctrl A",
    "C": "Ctrl V",
    "D": "Ctrl X",
    "Ans": "B"
  },
  {
    "Q": "To bold, press",
    "A": "Ctrl U",
    "B": "Ctrl B",
    "C": "Ctrl I",
    "D": "Ctrl J",
    "Ans": "B"
  },
  {
    "Q": "To select a column of the text press",
    "A": "Ctrl + Shift + F8 and then use any of the arrow keys",
    "B": "Ctrl + Alt + F8 and then use arrow keys",
    "C": "Alt + Shift + F8 and then use any arrow keys",
    "D": "Ctrl + Shift + Arrow keys",
    "Ans": "A"
  },
  {
    "Q": "To justify a text, press",
    "A": "Ctrl E",
    "B": "Ctrl L",
    "C": "Ctrl R",
    "D": "Ctrl J",
    "Ans": "D"
  },
  {
    "Q": "To underline a text press",
    "A": "Ctrl T",
    "B": "Ctrl I",
    "C": "Ctrl U",
    "D": "Ctrl O",
    "Ans": "C"
  },
  {
    "Q": "To copy a text, press",
    "A": "Ctrl X",
    "B": "Ctrl C",
    "C": "Ctrl V",
    "D": "Ctrl P",
    "Ans": "B"
  },
  {
    "Q": "To italize a text press",
    "A": "Ctrl B",
    "B": "Ctrl I",
    "C": "Ctrl T",
    "D": "Ctrl R",
    "Ans": "B"
  },
  {
    "Q": "To launch the navigation pane press",
    "A": "Ctrl P",
    "B": "Ctrl H",
    "C": "Ctrl F",
    "D": "Ctrl D",
    "Ans": "C"
  },
  {
    "Q": "To find and replace dialog box press",
    "A": "Ctrl F",
    "B": "Ctrl H",
    "C": "Ctrl G",
    "D": "Ctrl Z",
    "Ans": "B"
  },
  {
    "Q": "To open a new document",
    "A": "Ctrl O",
    "B": "Ctrl N",
    "C": "Ctrl P",
    "D": "Ctrl T",
    "Ans": "B"
  },
  {
    "Q": "To open existing document",
    "A": "Ctrl S",
    "B": "Ctrl O",
    "C": "Ctrl F",
    "D": "Ctrl N",
    "Ans": "B"
  },
  {
    "Q": "_____ is when the size of the initial letter of the paragraph is exaggerated",
    "A": "A heading",
    "B": "A drop cap",
    "C": "A footer",
    "D": "A subheading",
    "Ans": "B"
  }
                          ];

            function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const numQuestions = 35;
const selectedQuestions = shuffle(quizData).slice(0, numQuestions);

const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const nextButton = document.getElementById('next-btn');
const prevButton = document.getElementById('prev-btn');
const showAnswersButton = document.getElementById('show-answers-btn');
const answerContainer = document.getElementById('answer-container');
let answersShown = false;
let currentQuestionIndex = 0;
let selectedAnswers = [];
let allowProceedWithoutSelection = true;

function displayQuestion() {
  const currentQuestion = selectedQuestions[currentQuestionIndex];
  questionElement.innerHTML = currentQuestion.Q;
  choicesElement.innerHTML = '';

  ['A', 'B', 'C', 'D'].forEach((option) => {
    const choice = document.createElement('li');
    choice.innerHTML = `
      <input type="radio" name="answer" value="${option}" ${selectedAnswers[currentQuestionIndex] === option ? 'checked' : ''}>
      ${currentQuestion[option]}
    `;
    choicesElement.appendChild(choice);
  });

  prevButton.disabled = currentQuestionIndex === 0;
    nextButton.textContent = currentQuestionIndex === selectedQuestions.length - 1 ? 'Finish' : 'Next';
}

displayQuestion();
let score = 0;

nextButton.addEventListener('click', () => {
    const selectedAnswerElement = document.querySelector('input[name="answer"]:checked');

    if (selectedAnswerElement || allowProceedWithoutSelection) {
        if (selectedAnswerElement) {
            const selectedAnswerText = selectedAnswerElement.value;
            selectedAnswers[currentQuestionIndex] = selectedAnswerText;
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < selectedQuestions.length) {
            displayQuestion();
        } else {
            calculateScore();
        }
    }
});

const countdownContainer = document.querySelector('.timer');
const countdownHoursElement = document.getElementById('countdownHours');
const countdownMinutesElement = document.getElementById('countdownMinutes');
const countdownSecondsElement = document.getElementById('countdownSeconds');

let countdownInterval;
let countdownDuration = 15 * 60 * 1000;

function startCountdown() {
    countdownContainer.classList.remove('hidden');
    countdownInterval = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    countdownDuration -= 1000;

    if (countdownDuration <= 0) {
        clearInterval(countdownInterval);
        calculateScore();
        return;
    }

    const hours = Math.floor((countdownDuration / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((countdownDuration / (1000 * 60)) % 60);
    const seconds = Math.floor((countdownDuration / 1000) % 60);

    countdownHoursElement.textContent = formatTime(hours);
    countdownMinutesElement.textContent = formatTime(minutes);
    countdownSecondsElement.textContent = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

startCountdown();

prevButton.addEventListener('click', () => {
    currentQuestionIndex--;

    if (currentQuestionIndex < 0) {
        currentQuestionIndex = 0;
    }

    displayQuestion();
});

const resultContainer = document.getElementById('result-container');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-btn');

function calculateScore() {
    score = 0;
    for (let i = 0; i < selectedQuestions.length; i++) {
        if (selectedAnswers[i] !== undefined && selectedQuestions[i].Ans === selectedAnswers[i]) {
            score++;
        }
    }
    quizContainer.style.display = 'none';
    displayResults();
}

showAnswersButton.addEventListener('click', () => {
    resultContainer.innerHTML = '';

    selectedQuestions.forEach((questionData, index) => {
        const questionResult = document.createElement('div');

        const isCorrect = selectedAnswers[index] !== undefined && questionData.Ans === selectedAnswers[index];
        questionResult.style.color = isCorrect ? 'green' : 'red';

        questionResult.innerHTML = `
    <p>${index + 1}. ${questionData.Q}</p>
    <ul>
        ${['A', 'B', 'C', 'D'].map((option) => {
            const isUserSelected = selectedAnswers[index] === option;
            const isCorrectAnswer = questionData.Ans === option;
            const textColor = isUserSelected ? (isCorrectAnswer ? 'green' : 'red') : '';
            return `<li style="color: ${textColor};">${questionData[option]} ${isCorrectAnswer ? '(Correct Answer)' : ''}</li>`;
        }).join('')}
    </ul>
                <p>Explanation: ${questionData.Solution}</p> `;

        resultContainer.appendChild(questionResult);
    });
});

function displayResults() {
    resultContainer.style.display = 'block';
    scoreElement.textContent = score + '/ 35';
}

restartButton.addEventListener('click', () => {
    // Reset the quiz and start over
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswers = [];
    resultContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    startCountdown();
    displayQuestion();
});
    }
        document.addEventListener("DOMContentLoaded", () => {
            loader.style.display = 'block'; // Show loader initially
            loadFirebaseModules();
        });
