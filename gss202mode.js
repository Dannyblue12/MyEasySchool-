const loader = document.getElementById('loader');
        const content = document.getElementById('content');
        const unauthorized = document.getElementById('unauthorized');

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
  },
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
  },
    {
    "Q": "Any body of knowledge is kind scientific is so termed because with method of ?",
    "A": "research",
    "B": "deduction",
    "C": "experimentation",
    "D": "inquiry",
    "Ans": "D"
  },
  {
    "Q": "When it comes to philosophy, a ___ task is engaged",
    "A": "simple",
    "B": "menial",
    "C": "ordinary",
    "D": "herculean",
    "Ans": "D"
  },
  {
    "Q": "Philosophy originates from two Greek words ___ and ___",
    "A": "Logos and Ethos",
    "B": "Eidos and Techne",
    "C": "Ethos and Pathos",
    "D": "Philos and Sophia",
    "Ans": "D"
  },
  {
    "Q": "Philosophy as Metaphysics studies __?",
    "A": "ethics",
    "B": "morality",
    "C": "logic",
    "D": "reality",
    "Ans": "D"
  },
  {
    "Q": "Philosophy as Epistemology studies __?",
    "A": "human emotions",
    "B": "human knowledge",
    "C": "human behavior",
    "D": "human perception",
    "Ans": "B"
  },
  {
    "Q": "Philosophy as Axiology studies __?",
    "A": "human cognition",
    "B": "human ethics",
    "C": "human behavior",
    "D": "human values",
    "Ans": "D"
  },
  {
    "Q": "Philosophy as Logic studies __?",
    "A": "intuition",
    "B": "reasoning",
    "C": "imagination",
    "D": "creativity",
    "Ans": "B"
  },
  {
    "Q": "___ explains every reality the way it is in itself.",
    "A": "Psychology",
    "B": "Physics",
    "C": "Philosophy",
    "D": "Metaphysics",
    "Ans": "C"
  },
  {
    "Q": "The basis, foundation or ground of Philosophy is?",
    "A": "Logic",
    "B": "Epistemology",
    "C": "Axiology",
    "D": "Metaphysics",
    "Ans": "D"
  },
  {
    "Q": "Metaphysics is either",
    "A": "rationalistic or empirical",
    "B": "empirical or transcendental",
    "C": "materialistic or idealistic",
    "D": "empirical or idealistic",
    "Ans": "C"
  },
  {
    "Q": "What is concerned with things, events or occurrences that are observable",
    "A": "Logic",
    "B": "Ethics",
    "C": "Aesthetics",
    "D": "Science",
    "Ans": "D"
  },
  {
    "Q": "Observing requires a cognitive approach known as",
    "A": "priori knowledge",
    "B": "a priori reasoning",
    "C": "posteriori knowledge",
    "D": "a posteriori reasoning",
    "Ans": "C"
  },
  {
    "Q": "___ is knowledge acquired after contact with experience",
    "A": "a priori cognition",
    "B": "posteriori cognition",
    "C": "a priori knowledge",
    "D": "posteriori knowledge",
    "Ans": "B"
  },
  {
    "Q": "Speaking of human mode of cognition, science itself translates to",
    "A": "understanding",
    "B": "wisdom",
    "C": "knowledge",
    "D": "insight",
    "Ans": "C"
  },
  {
    "Q": "Science is etymologically derived from the Latin word",
    "A": "Scientificus",
    "B": "Scientia",
    "C": "Scientificum",
    "D": "Science",
    "Ans": "B"
  },
  {
    "Q": "___ emphasizes the discovery of truth",
    "A": "Metaphysics",
    "B": "Axiology",
    "C": "Epistemology",
    "D": "Logic",
    "Ans": "C"
  },
  {
    "Q": "___ is a theory of knowledge that emphasizes those aspects of scientific knowledge related to experience",
    "A": "Rationalism",
    "B": "Idealism",
    "C": "Empiricism",
    "D": "Skepticism",
    "Ans": "C"
  },
  {
    "Q": "___ avers that empiricists are philosophers who are concerned with the acquisition of knowledge",
    "A": "Immanuel Kant",
    "B": "John Locke",
    "C": "Bertrand Russell",
    "D": "Oluwafunmilayo Kehinde",
    "Ans": "D"
  },
  {
    "Q": "Who gave ground for the universal principal of determinism",
    "A": "Spinoza",
    "B": "Kant",
    "C": "Hegel",
    "D": "Plato",
    "Ans": "A"
  },
  {
    "Q": "The idea of the existence of molecules as complex particles consisting of atom was developed by a French philosopher ___",
    "A": "Jean-Paul Sartre",
    "B": "Voltaire",
    "C": "Montesquieu",
    "D": "Pierre Gassendi",
    "Ans": "D"
  },
  {
    "Q": "Who formulated the principle of inexhaustibility of matter",
    "A": "Karl Marx",
    "B": "Adam Smith",
    "C": "Lenin",
    "D": "Napoleon Bonaparte",
    "Ans": "C"
  },
  {
    "Q": "The term history originates from a Greek and Latin word __",
    "A": "Historica",
    "B": "Historios",
    "C": "Historia",
    "D": "Historicus",
    "Ans": "C"
  },
  {
    "Q": "In Latin, history means?",
    "A": "knowledge",
    "B": "story or account",
    "C": "time",
    "D": "chronicle",
    "Ans": "B"
  },
  {
    "Q": "To have a time-bound character, ___ and Okon points to Nikoloas Gysis redefinition",
    "A": "Essien",
    "B": "Smith",
    "C": "Jackson",
    "D": "Nikoloas Gysis",
    "Ans": "A"
  },
  {
    "Q": "History is a story or account acquired through ___",
    "A": "introspection",
    "B": "investigation",
    "C": "imagination",
    "D": "introspection",
    "Ans": "B"
  },
  {
    "Q": "__ is an account of past philosophic activities",
    "A": "Philosophy of History",
    "B": "Historical Philosophy",
    "C": "Philosophy of Science",
    "D": "History of Philosophy",
    "Ans": "D"
  },
  {
    "Q": "Earliest roots of science are traceable to?",
    "A": "600-400 BCE",
    "B": "1000-800 BCE",
    "C": "3000-1200 BCE",
    "D": "2000-1500 BCE",
    "Ans": "C"
  },
  {
    "Q": "The Hellenistic worldview got preserved and absorbed in the Arabic world during __?",
    "A": "Middle Ages",
    "B": "Enlightenment Period",
    "C": "Islamic Golden Age",
    "D": "Renaissance",
    "Ans": "C"
  },
  {
    "Q": "Recovery and assimilation of Greek and Islamic works into Western Europe was from?",
    "A": "4th to 6th century",
    "B": "7th to 9th century",
    "C": "10th to 13th century",
    "D": "14th to 16th century",
    "Ans": "C"
  },
  {
    "Q": "Scientific thoughts in ancient times can be traced to",
    "A": "Hippocrates and Plato",
    "B": "Pythagoras and Aristotle",
    "C": "Socrates and Euclid",
    "D": "Plato and Aristotle",
    "Ans": "D"
  },
  {
    "Q": "Who is generally recognized as the father of modern scientific method",
    "A": "Galileo Galilei",
    "B": "Isaac Newton",
    "C": "Johannes Kepler",
    "D": "Roger Bacon",
    "Ans": "D"
  },
  {
    "Q": "___ researched in optics using applied geometry",
    "A": "Isaac Newton",
    "B": "Galileo Galilei",
    "C": "Roger Bacon",
    "D": "Ibn al-Haytham",
    "Ans": "D"
  },
  {
    "Q": "Who was the author of the book Novum Organum",
    "A": "Rene Descartes",
    "B": "Francis Bacon",
    "C": "John Locke",
    "D": "Immanuel Kant",
    "Ans": "B"
  },
  {
    "Q": "Who emphasized reason over and above sense-experience",
    "A": "John Locke",
    "B": "Francis Bacon",
    "C": "Rene Descartes",
    "D": "David Hume",
    "Ans": "C"
  },
  {
    "Q": "Who articulated skepticism about the ability of science to determine causality",
    "A": "David Hume",
    "B": "Immanuel Kant",
    "C": "John Locke",
    "D": "Isaac Newton",
    "Ans": "A"
  },
  {
    "Q": "Who argued that 'hypotheses' have no place in experimental philosophy",
    "A": "Isaac Newton",
    "B": "Galileo Galilei",
    "C": "Johannes Kepler",
    "D": "Roger Bacon",
    "Ans": "A"
  },
    {
    "Q": "___ are scientists who maintain that society can be understood and explained",
    "A": "Social Observer",
    "B": "Cultural Positivist",
    "C": "Behavioral Analyst",
    "D": "Social Positivist",
    "Ans": "D"
  },
  {
    "Q": "___ is concerned with the setting out of the necessary and sufficient conditions",
    "A": "Analytical Positivist",
    "B": "Logical Positivist",
    "C": "Rational Positivist",
    "D": "Empirical Positivist",
    "Ans": "B"
  },
  {
    "Q": "Social realism is often associated with the philosophy of?",
    "A": "Adam Smith",
    "B": "John Stuart Mill",
    "C": "Karl Marx",
    "D": "Jeremy Bentham",
    "Ans": "C"
  },
  {
    "Q": "Representative realism is the shade of realism developed by?",
    "A": "Immanuel Kant",
    "B": "John Locke",
    "C": "David Hume",
    "D": "George Berkeley",
    "Ans": "B"
  },
  {
    "Q": "___ is the view that the outside world or the object out there does not have independent existence",
    "A": "Anti-materialism",
    "B": "Non-objectivism",
    "C": "Antirealism",
    "D": "Subjectivism",
    "Ans": "C"
  },
  {
    "Q": "According to ___, science refers to the body of reliable knowledge, especially those types of knowledge that can be justified logically",
    "A": "Socrates",
    "B": "Plato",
    "C": "Aristotle",
    "D": "Pythagoras",
    "Ans": "C"
  },
  {
    "Q": "There are two schools of thought known as Empiricism and __",
    "A": "Idealism",
    "B": "Rationalism",
    "C": "Skepticism",
    "D": "Materialism",
    "Ans": "B"
  },
  {
    "Q": "___ is the bedrock and logic upon which scientific findings build its magnificent edifice on",
    "A": "Deduction",
    "B": "Hypothesis",
    "C": "Induction",
    "D": "Abduction",
    "Ans": "C"
  },
  {
    "Q": "__ is also known as common sense",
    "A": "Philosophical Realism",
    "B": "Naive Realism",
    "C": "Everyday Realism",
    "D": "Common Realism",
    "Ans": "B"
  },
  {
    "Q": "__ school maintains that God created the world",
    "A": "Theological",
    "B": "Creationist",
    "C": "Teleological",
    "D": "Scholastic",
    "Ans": "B"
  },
  {
    "Q": "___ studied the activities of stars without probing into their physical composition",
    "A": "Copernicus",
    "B": "Galileo",
    "C": "Kepler",
    "D": "Newton",
    "Ans": "B"
  },
  {
    "Q": "__ is a school of thought in philosophy that believes in the superiority of reason",
    "A": "Empiricism",
    "B": "Positivism",
    "C": "Skepticism",
    "D": "Rationalism",
    "Ans": "D"
  },
  {
    "Q": "In ___ view, idealism is the structure or mental principle through which we formulate our conception of the external world",
    "A": "Hegel's",
    "B": "Kant's",
    "C": "Locke's",
    "D": "Descartes's",
    "Ans": "B"
  },
  {
    "Q": "The ___ believed that the material world is merely a collection of mental sensations.",
    "A": "Materialists",
    "B": "Realists",
    "C": "Empiricists",
    "D": "Idealists",
    "Ans": "D"
  },
  {
    "Q": "___ as a school of thought focuses on giving scientific findings cash value",
    "A": "Utilitarianism",
    "B": "Pragmatism",
    "C": "Existentialism",
    "D": "Humanism",
    "Ans": "B"
  },
   {
    "Q": "Who argued that vision of health is based on determinism but disavows the metaphysical",
    "A": "Plato",
    "B": "Aristotle",
    "C": "Socrates",
    "D": "Justice Ekennia",
    "Ans": "D"
  },
  {
    "Q": "A better definition of health was offered by WHO in?",
    "A": "1945",
    "B": "1950",
    "C": "1930",
    "D": "1946",
    "Ans": "D"
  },
  {
    "Q": "Who conceived health as a dynamic process, determined subjectively and objectively?",
    "A": "Immanuel Kant",
    "B": "Lindberg and Hunter",
    "C": "Hippocrates",
    "D": "Aristotle",
    "Ans": "B"
  },
  {
    "Q": "The Hebrew word SHALOM is also translated as",
    "A": "Harmony",
    "B": "Serenity",
    "C": "peace",
    "D": "Tranquility",
    "Ans": "C"
  },
  {
    "Q": "kedu ka idi in Igbo means?",
    "A": "Welcome",
    "B": "Goodbye",
    "C": "How are you",
    "D": "Thank you",
    "Ans": "C"
  },
  {
    "Q": "Who defined nutrition as the study of how organisms process food in order to enhance healthy living.",
    "A": "Plato",
    "B": "Umotong and Udoh",
    "C": "Aristotle",
    "D": "Socrates",
    "Ans": "B"
  },
  {
    "Q": "Change of weight, form, sizes and shapes refers to",
    "A": "Growth",
    "B": "Development",
    "C": "Adaptation",
    "D": "Change",
    "Ans": "A"
  },
  {
    "Q": "___ studies the process of breaking food down(catabolism), repairing and creating cells and tissues (anabolism).",
    "A": "Health Science",
    "B": "Nutritional science",
    "C": "Biomedical Science",
    "D": "Dietetics",
    "Ans": "B"
  },
  {
    "Q": "Carbohydrates is divided into two, simple and",
    "A": "elaborate",
    "B": "intricate",
    "C": "complex",
    "D": "compound",
    "Ans": "C"
  },
  {
    "Q": "Due to protein, Africans have increased protection to?",
    "A": "Malaria",
    "B": "Osteoporosis",
    "C": "Influenza",
    "D": "Heart Disease",
    "Ans": "B"
  },
  {
    "Q": "There are __ vitamins",
    "A": "12",
    "B": "10",
    "C": "13",
    "D": "15",
    "Ans": "C"
  },
  {
    "Q": "__ is needed for our red blood cells to transport oxygen",
    "A": "Calcium",
    "B": "iron",
    "C": "Vitamin C",
    "D": "Potassium",
    "Ans": "B"
  },
  {
    "Q": "__ is present in raw egg white and chelates biotin",
    "A": "Biotinase",
    "B": "Proteinase",
    "C": "Lipase",
    "D": "Avidin",
    "Ans": "D"
  },
  {
    "Q": "Water constitutes __% of the total body weight",
    "A": "50",
    "B": "60",
    "C": "70",
    "D": "80",
    "Ans": "C"
  },
  {
    "Q": "___ is a deficiency of protein",
    "A": "Marasmus",
    "B": "Kwashiorkor",
    "C": "Anemia",
    "D": "Rickets",
    "Ans": "B"
  },
  {
    "Q": "___ is a deficiency in glucose regulatory hormones",
    "A": "Insulin Resistance",
    "B": "Hypoglycemia",
    "C": "Hyperglycemia",
    "D": "Diabetes",
    "Ans": "D"
  },
  {
    "Q": "___ is caused by contaminated drinking water",
    "A": "Typhoid",
    "B": "cholera",
    "C": "Hepatitis",
    "D": "Dysentery",
    "Ans": "B"
  },
  {
    "Q": "__ is a disease of the lung that causes chest pain and cough",
    "A": "Pneumonia",
    "B": "Asthma",
    "C": "Tuberculosis",
    "D": "Bronchitis",
    "Ans": "C"
  },
  {
    "Q": "Who opined that science was not discovered by man but was invented by him in order to understand nature and himself",
    "A": "Plato",
    "B": "Aristotle",
    "C": "Socrates",
    "D": "David Alman",
    "Ans": "D"
  },
  {
    "Q": "___ maintained that the aim of science is to improve the living conditions of men",
    "A": "John Dewey",
    "B": "Karl Popper",
    "C": "Isaac Newton",
    "D": "Galileo Galilei",
    "Ans": "A"
  },
  {
    "Q": "According to ___, the work of the technologist is not value-free or value-neutral",
    "A": "Obioha",
    "B": "John Stuart Mill",
    "C": "Immanuel Kant",
    "D": "Friedrich Nietzsche",
    "Ans": "A"
  },
  {
    "Q": "Who helped build the atomic bomb",
    "A": "Niels Bohr",
    "B": "Albert Einstein",
    "C": "Marie Curie",
    "D": "Erwin Schrödinger",
    "Ans": "B"
  },
  {
    "Q": "The consumer of technology product must need prudence is referred to as",
    "A": "recta ratio agibilium",
    "B": "prudentia in agendis",
    "C": "cautio in eligendis",
    "D": "recta ratio agibilium",
    "Ans": "D"
  },
  {
    "Q": "Who said 'physics have known sin, and this is a knowledge which they cannot lose'",
    "A": "Stephen Hawking",
    "B": "Richard Feynman",
    "C": "Robert Oppenheimer",
    "D": "Max Planck",
    "Ans": "C"
  },
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
