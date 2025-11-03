const loader = document.getElementById('loader');
        const content = document.getElementById('content');
        const unauthorized = document.getElementById('unauthorized');

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
  },
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
  },
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
  },
  {
    "Q": "_____ is a planned piece of work that is designed to find information about something, to produce something new, or to improve something.",
    "A": "Research",
    "B": "Project",
    "C": "Program",
    "D": "Initiative",
    "Ans": "B"
  },
  {
    "Q": "The basic features that stand clear whenever we talk about project is referred to?",
    "A": "Project Scope",
    "B": "Project Elements",
    "C": "Project Characteristics",
    "D": "Project Components",
    "Ans": "C"
  },
  {
    "Q": "The following are characteristics of projects except:",
    "A": "Uniqueness",
    "B": "Objectives",
    "C": "Risk and Uncertainty",
    "D": "Permanence",
    "Ans": "D"
  },
  {
    "Q": "Under which principle is a project presumed not to be fully known beforehand?",
    "A": "Principle of Uncertainty",
    "B": "Principle of Succession",
    "C": "Principle of Progressive Elaboration",
    "D": "Principle of Risk Management",
    "Ans": "B"
  },
  {
    "Q": "The degree to which a given project is executed to meet its goals as well as client's expectations is called:",
    "A": "Project Efficiency",
    "B": "Project Effectiveness",
    "C": "Project Performance",
    "D": "Project Success",
    "Ans": "C"
  },
  {
    "Q": "The following are 3 major dimensions to project performance except:",
    "A": "Scope",
    "B": "Time",
    "C": "Cost",
    "D": "Resources",
    "Ans": "D"
  },
  {
    "Q": "What is the full meaning of PQT?",
    "A": "Project Quality Testing",
    "B": "Project Quantitative Tracking",
    "C": "Project Quality Triangle",
    "D": "Project Qualification Technique",
    "Ans": "C"
  },
  {
    "Q": "The following are Project Life Cycle phases except:",
    "A": "Project Initiation",
    "B": "Project Planning",
    "C": "Project Execution",
    "D": "Project Termination",
    "Ans": "D"
  },
  {
    "Q": "Nagarijan (2010) classified projects based on the following except:",
    "A": "Type of activity",
    "B": "Location of the Project",
    "C": "Ownership",
    "D": "Duration",
    "Ans": "D"
  },
  {
    "Q": "Projects that are owned by the State (Government) are:",
    "A": "Public sector projects",
    "B": "Private sector projects",
    "C": "Joint sector projects",
    "D": "Cooperative sector projects",
    "Ans": "A"
  },
  {
    "Q": "In Project Management, the following ideas are necessary:",
    "A": "Project Identification, Project Formulation, Project Implementation",
    "B": "Project Planning, Project Execution, Project Closure",
    "C": "Project Initiation, Project Control, Project Termination",
    "D": "Project Design, Project Development, Project Delivery",
    "Ans": "A"
  },
  {
    "Q": "_____ contains information on technical, commercial and personnel dimensions but in a greater detail.",
    "A": "Project Charter",
    "B": "Project Scope Statement",
    "C": "Detailed Project Report",
    "D": "Work Breakdown Structure",
    "Ans": "C"
  },
  {
    "Q": "What helps determine whether an idea or business is a viable option?",
    "A": "Market research",
    "B": "Business plan",
    "C": "Feasibility study",
    "D": "SWOT analysis",
    "Ans": "C"
  },
  {
    "Q": "The following are measures of project management control except:",
    "A": "Cost of the Project",
    "B": "Time (Duration)",
    "C": "Quality/Technical Performance",
    "D": "Team Satisfaction",
    "Ans": "D"
  },
  {
    "Q": "What is the full meaning of PERT?",
    "A": "Project Evaluation and Review Technique",
    "B": "Programme Evaluation and Review Technique",
    "C": "Project Execution and Resource Tracking",
    "D": "Performance Evaluation and Reporting Tool",
    "Ans": "B"
  },
  {
    "Q": "The longest path through the network in terms of the amount of time the entire project will take is?",
    "A": "Critical path",
    "B": "Project timeline",
    "C": "Master schedule",
    "D": "Network diagram",
    "Ans": "A"
  },
  {
    "Q": "The difference between the critical path and the sub-critical path is known as the?",
    "A": "Float",
    "B": "Slack",
    "C": "Buffer",
    "D": "Variance",
    "Ans": "B"
  },
  {
    "Q": "According to _____, management of an event encompasses all activities involved in planning to evaluation of an event.",
    "A": "Kerzner",
    "B": "Nigam",
    "C": "PMBOK",
    "D": "Turner",
    "Ans": "B"
  },
  {
    "Q": "Who is known as the first event planner in history?",
    "A": "Julius Caesar",
    "B": "Alexander the Great",
    "C": "Cleopatra",
    "D": "Queen Elizabeth I",
    "Ans": "C"
  },
  {
    "Q": "The Industrial Revolution in England was created in?",
    "A": "1600s",
    "B": "1700s",
    "C": "1800s",
    "D": "1900s",
    "Ans": "B"
  },
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
  },
    {
    "Q": "____ is simply the application of scientific discoveries, and these discoveries business in a speed or inventions are changing the never envisaged through the Application by entrepreneurs.",
    "A": "Innovation",
    "B": "Technology",
    "C": "Science",
    "D": "Engineering",
    "Ans": "B"
  },
  {
    "Q": "The definition of Technology Entrepreneur was proposed by:",
    "A": "Bailetti",
    "B": "Schumpeter",
    "C": "Drucker",
    "D": "Porter",
    "Ans": "A"
  },
  {
    "Q": "The definition of Technology Entrepreneurship was based on ____ elements.",
    "A": "3",
    "B": "5",
    "C": "4",
    "D": "6",
    "Ans": "C"
  },
  {
    "Q": "Features of Technological advancement in Entrepreneurship include:",
    "A": "Low capital investment",
    "B": "Simplified management structure",
    "C": "High potential opportunity",
    "D": "Reduced market competition",
    "Ans": "C"
  },
  {
    "Q": "The physical computers and other accompanying equipment used with them are known as:",
    "A": "Computer Software",
    "B": "Computer Hardware",
    "C": "Computer Programs",
    "D": "Computer Applications",
    "Ans": "B"
  },
  {
    "Q": "____ include desktop computers, portable computers, printers and modems.",
    "A": "Computer Hardware",
    "B": "Computer Software",
    "C": "Computer Networks",
    "D": "Computer Peripherals",
    "Ans": "A"
  },
  {
    "Q": "One advantage of portable computers is:",
    "A": "They have larger screens",
    "B": "They are more powerful than desktops",
    "C": "They can be used everywhere",
    "D": "They are less expensive",
    "Ans": "C"
  },
  {
    "Q": "LaserJet, Ink Jet, Dot Matrix are examples of:",
    "A": "Scanners",
    "B": "Monitors",
    "C": "Printers",
    "D": "Modems",
    "Ans": "C"
  },
  {
    "Q": "____ is an electronic device that allows information to be transmitted over telephone lines from one computer to another.",
    "A": "Router",
    "B": "Modem",
    "C": "Switch",
    "D": "Hub",
    "Ans": "B"
  },
  {
    "Q": "____ allows you to copy a document and make it a computer file.",
    "A": "Printer",
    "B": "Copier",
    "C": "Scanner",
    "D": "Fax machine",
    "Ans": "C"
  },
  {
    "Q": "You can use ____ to send hard copies of documents to people who own a fax.",
    "A": "Email",
    "B": "Scanner",
    "C": "Printer",
    "D": "Fax machine or fax software",
    "Ans": "D"
  },
  {
    "Q": "LCD means:",
    "A": "Light Computer Display",
    "B": "Liquid Crystal Display",
    "C": "Laser Computer Display",
    "D": "Light Crystal Device",
    "Ans": "B"
  },
  {
    "Q": "The main function of LCD projector is to:",
    "A": "Display high-resolution images",
    "B": "Project your computer screen onto wall for presentation",
    "C": "Enhance color quality of images",
    "D": "Reduce eye strain during computer use",
    "Ans": "B"
  },
  {
    "Q": "In order to effectively perform any kind of function, as well as business transaction, your computer requires:",
    "A": "Hardware",
    "B": "Internet",
    "C": "Software",
    "D": "Network",
    "Ans": "C"
  },
  {
    "Q": "____ enable you to report, analyze, and come up with numerical data.",
    "A": "Word processing programs",
    "B": "Database programs",
    "C": "Spreadsheet programs",
    "D": "Presentation programs",
    "Ans": "C"
  },
  {
    "Q": "____ is a worldwide computer network that allows people to communicate with each other electronically.",
    "A": "Intranet",
    "B": "Extranet",
    "C": "Internet",
    "D": "Local Area Network",
    "Ans": "C"
  },
  {
    "Q": "To access the Internet, you will need to sign up with:",
    "A": "An Internet Service Provider",
    "B": "A computer manufacturer",
    "C": "A software company",
    "D": "A telecommunications company",
    "Ans": "A"
  },
  {
    "Q": "____ refers to the practice that aims to improve websites ranking for specific keywords in the search engine.",
    "A": "Web Development",
    "B": "Content Marketing",
    "C": "Search Engine Optimization (SEO)",
    "D": "Social Media Marketing",
    "Ans": "C"
  },
  {
    "Q": "____ is a system of reward whereby referrers are given finder's fees for every referral they make to the firm or business.",
    "A": "Network Marketing",
    "B": "Affiliate Marketing",
    "C": "Referral Marketing",
    "D": "Direct Marketing",
    "Ans": "B"
  },
  {
    "Q": "____ is an electronic store front to the world.",
    "A": "Social media page",
    "B": "Mobile application",
    "C": "Email newsletter",
    "D": "Website",
    "Ans": "D"
  },
  {
    "Q": "WWW means:",
    "A": "World Wide Web",
    "B": "World Wide Window",
    "C": "Web World Wide",
    "D": "Web Window World",
    "Ans": "A"
  },
  {
    "Q": "___ refers to business owned by one individual.",
    "A": "Sole proprietorship",
    "B": "Partnership",
    "C": "Corporation",
    "D": "Limited liability company",
    "Ans": "A"
  },
  {
    "Q": "Highly motivated individuals who take risk to attain their economic goals are:",
    "A": "Entrepreneurs",
    "B": "Sole proprietors",
    "C": "Managers",
    "D": "Investors",
    "Ans": "B"
  },
  {
    "Q": "The following are advantages of sole proprietorship except:",
    "A": "Startup Ease",
    "B": "Profits",
    "C": "Decision-making",
    "D": "Limited liability",
    "Ans": "D"
  },
  {
    "Q": "___ is defined as the association of two or more persons operating as co-owner of a business for profit.",
    "A": "Corporation",
    "B": "Joint venture",
    "C": "Partnership",
    "D": "Cooperative society",
    "Ans": "C"
  },
  {
    "Q": "The following are advantages of partnership except:",
    "A": "Ease of Formation",
    "B": "Expertise",
    "C": "Continuity",
    "D": "Limited liability",
    "Ans": "C"
  },
  {
    "Q": "The following are forms of partnership except:",
    "A": "General/Ordinary Partnership",
    "B": "Limited Partnership",
    "C": "Limited Liability Partnership",
    "D": "Sole Partnership",
    "Ans": "D"
  },
  {
    "Q": "In Nigeria, LLPs must have at least two partners known as?",
    "A": "managing partners",
    "B": "designate partners",
    "C": "executive partners",
    "D": "general partners",
    "Ans": "B"
  },
  {
    "Q": "The type of partnership business in which all partners are required to actively participate in running the business.",
    "A": "Limited Partnership",
    "B": "Ordinary Partnership",
    "C": "Silent Partnership",
    "D": "Nominal Partnership",
    "Ans": "B"
  },
  {
    "Q": "A partner who lends his name as a partner to the business but does not take part in the activity of the partnership business is?",
    "A": "Silent Partner",
    "B": "Dormant Partner",
    "C": "Nominal Partner",
    "D": "Limited Partner",
    "Ans": "C"
  },
  {
    "Q": "Someone who leaves his share capital as loan to the partnership business after resignation is what kind of partner?",
    "A": "Quasi Partner",
    "B": "Nominal Partner",
    "C": "Limited Partner",
    "D": "Dormant Partner",
    "Ans": "A"
  },
  {
    "Q": "Another name for partnership agreement is?",
    "A": "Articles of Association",
    "B": "Memorandum of Understanding",
    "C": "Partnership deed",
    "D": "Business contract",
    "Ans": "C"
  },
  {
    "Q": "Societies which pull their resources for the purpose of engaging in more than one cooperative activities beneficial for all members is:",
    "A": "Joint ventures",
    "B": "Multi-purpose Co-operative societies",
    "C": "Limited liability companies",
    "D": "General partnerships",
    "Ans": "B"
  },
  {
    "Q": "A business where two or more persons pool their resources together for the accomplishment of a business goal is?",
    "A": "Partnership",
    "B": "Corporation",
    "C": "Joint venture",
    "D": "Cooperative society",
    "Ans": "C"
  },
  {
    "Q": "A cooperative society may be registered with a minimum of ___ persons.",
    "A": "5",
    "B": "7",
    "C": "10",
    "D": "15",
    "Ans": "C"
  },
  {
    "Q": "The owners of a company are called?",
    "A": "Directors",
    "B": "Share holders",
    "C": "Stakeholders",
    "D": "Proprietors",
    "Ans": "B"
  },
  {
    "Q": "There are two types of Limited liability Company namely?",
    "A": "Public and Private Limited Liability Company",
    "B": "Domestic and Foreign Limited Liability Company",
    "C": "Open and Closed Limited Liability Company",
    "D": "General and Special Limited Liability Company",
    "Ans": "A"
  },
  {
    "Q": "The body in charge of regulating the formation and management of companies in Nigeria is?",
    "A": "Securities and Exchange Commission (SEC)",
    "B": "Nigerian Stock Exchange (NSE)",
    "C": "Federal Ministry of Commerce",
    "D": "Corporate Affairs Commission (CAC)",
    "Ans": "D"
  },
  {
    "Q": "The following are types of company except:",
    "A": "Unlimited Liability Company",
    "B": "Limited Liability by Guarantee",
    "C": "Limited Liability by Shares",
    "D": "Limited Liability by Capital",
    "Ans": "D"
  },
  {
    "Q": "Which document regulates the company's external activities and defines the constitution and scope of power of it?",
    "A": "Articles of Association",
    "B": "Certificate of Incorporation",
    "C": "Contents of Memorandum of Association",
    "D": "Business Registration Certificate",
    "Ans": "C"
  },
  {
    "Q": "The following include Contents of Memorandum of Association except:",
    "A": "Name Clause",
    "B": "Registered Office Clause",
    "C": "Capital Clause",
    "D": "Santa Clause",
    "Ans": "D"
  },
  {
    "Q": "The document that regulates the activities of the company internally is?",
    "A": "Memorandum of Association",
    "B": "Contents of Article of Association",
    "C": "Certificate of Incorporation",
    "D": "Business Plan",
    "Ans": "B"
  },
  {
    "Q": "One of this is a disadvantage of Limited Liability Company:",
    "A": "Limited liability protection",
    "B": "Perpetual existence",
    "C": "Ability to raise capital",
    "D": "The financial records of the business displayed to the public",
    "Ans": "D"
  },
    {
    "Q": "An agency that collects money from savers (lenders) and lends to borrowers at a fee is?",
    "A": "Financial Institution",
    "B": "Insurance Company",
    "C": "Investment Bank",
    "D": "Credit Union",
    "Ans": "A"
  },
  {
    "Q": "There are two types of financial institution which includes:",
    "A": "Non-bank and Bank financial Institution",
    "B": "Public and Private financial Institution",
    "C": "Local and International financial Institution",
    "D": "Formal and Informal financial Institution",
    "Ans": "A"
  },
  {
    "Q": "_____ gives loan to individuals and corporate bodies but do not accept deposits.",
    "A": "Commercial Banks",
    "B": "Microfinance Banks",
    "C": "Finance Company or House",
    "D": "Credit Unions",
    "Ans": "C"
  },
  {
    "Q": "The first insurance company in Nigeria is:",
    "A": "NICON Insurance",
    "B": "Royal Exchange Assurance Company",
    "C": "African Alliance Insurance",
    "D": "Nigerian Insurance Association",
    "Ans": "B"
  },
  {
    "Q": "Pension funds does the following except:",
    "A": "Provides retirement income insurance",
    "B": "Provides mechanism for polishing of funds",
    "C": "Provides ways to manage uncertainty",
    "D": "Provides short-term loans to businesses",
    "Ans": "D"
  },
  {
    "Q": "What is the full meaning of FEM?",
    "A": "Foreign Exchange Management",
    "B": "Foreign Exchange Market",
    "C": "Financial Exchange Market",
    "D": "Financial Exchange Management",
    "Ans": "B"
  },
  {
    "Q": "Which cooperative consist of people who contribute money and share it among themselves on market days?",
    "A": "Producer Cooperative",
    "B": "Consumer Cooperative",
    "C": "Traditional Financial Institution",
    "D": "Credit Union",
    "Ans": "C"
  },
  {
    "Q": "The following are types of bank except:",
    "A": "Development Banks",
    "B": "Merchant Banks",
    "C": "Mortgage Banks",
    "D": "Investment Clubs",
    "Ans": "D"
  },
  {
    "Q": "Specialized banks specifically established to develop sectors of the economy like agriculture, commerce etc are:",
    "A": "Commercial Banks",
    "B": "Development Banks",
    "C": "Merchant Banks",
    "D": "Microfinance Banks",
    "Ans": "B"
  },
  {
    "Q": "The following are example of development bank except:",
    "A": "NIDB",
    "B": "NBCI",
    "C": "PBN",
    "D": "UBA",
    "Ans": "D"
  },
  {
    "Q": "Specialized banks charged with the responsibility of issuance of loan for foreign trade transactions are:",
    "A": "Development Banks",
    "B": "Merchant Banks",
    "C": "Mortgage Banks",
    "D": "Commercial Banks",
    "Ans": "B"
  },
  {
    "Q": "Specialized banks charged with the responsibility of making provision for housing loans to individuals and the government are:",
    "A": "Development Banks",
    "B": "Merchant Banks",
    "C": "Mortgage Banks",
    "D": "Commercial Banks",
    "Ans": "C"
  },
  {
    "Q": "Mortgage bank was formerly called:",
    "A": "Nigeria Building Society",
    "B": "Federal Mortgage Bank",
    "C": "National Housing Fund",
    "D": "Primary Mortgage Institution",
    "Ans": "A"
  },
  {
    "Q": "Commercial banks are called:",
    "A": "Money Market Banks",
    "B": "Deposit Money Banks (DMB)",
    "C": "Retail Banking Institutions",
    "D": "Universal Banks",
    "Ans": "B"
  },
  {
    "Q": "The following are various banks account except:",
    "A": "Fixed deposit account",
    "B": "Current account",
    "C": "Domiciliary account",
    "D": "Investment account",
    "Ans": "D"
  },
  {
    "Q": "Which bank account is withdrawal in a day having no limit and loan and overdraft can be obtained?",
    "A": "Savings Account",
    "B": "Fixed Deposit Account",
    "C": "Domiciliary Account",
    "D": "Current Account",
    "Ans": "D"
  },
  {
    "Q": "In _____ account, investors cannot authorize third party to withdraw money.",
    "A": "Current Account",
    "B": "Savings Account",
    "C": "Domiciliary Account",
    "D": "Fixed Deposit Account",
    "Ans": "B"
  },
  {
    "Q": "_____ account allows customers to maintain accounts in foreign currencies.",
    "A": "Current Account",
    "B": "Savings Account",
    "C": "Domiciliary Account",
    "D": "Fixed Deposit Account",
    "Ans": "C"
  },
  {
    "Q": "The following are types of investments except:",
    "A": "Business fixed investment",
    "B": "Investment in machines",
    "C": "Residential investment",
    "D": "Liquid investment",
    "Ans": "D"
  },
  {
    "Q": "What is the full meaning of APC?",
    "A": "Average Price to Consume",
    "B": "Average Propensity to Consume",
    "C": "Average Propensity to Calculate",
    "D": "All Progressive Congress",
    "Ans": "B"
  },
  {
    "Q": "A receipt from wages or from transfers by a private individual is?",
    "A": "Personal Income (PI)",
    "B": "Disposable Income",
    "C": "National Income",
    "D": "Gross Income",
    "Ans": "A"
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
