
/*The array of question and answers are created here */
let questions = [
    {
        question: "Inside which HTML element do we put the JavaScript ?",
        answers: [
            { text: "<js>", correct: false },
            { text: "<scripting>", correct: false },
            { text: "<script>", correct: true },
            { text: "<javascript>", correct: false },
        ]
    },

    {
        question: 'Where is the correct place to insert javascript?',
        answers: [
            { text: "The <head> section", correct: false },
            { text: "The <body> section", correct: false },
            { text: "Both the <head> and <body> sections", correct: true },
            { text: "None of the above", correct: false },
        ]

    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        answers: [
            { text: "alert('Hello World!');", correct: true },
            { text: "alertBox('Hello World!');", correct: false },
            { text: "msg('Hello World!');", correct: false },
            { text: "msgBox('Hello World!');", correct: false },
        ]

    },
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        answers: [
            { text: "<script name='xxx.js>'", correct: false },
            { text: "<script src ='xxx.js>'", correct: true },
            { text: "<script href ='xxx.js>'", correct: false },
            { text: "None of the above", correct: false },
        ]
    },
    {
        question: 'How to create a javascript function?',
        answers: [
            { text: "function = myFunction;", correct: false },
            { text: "function myFunction();", correct: true },
            { text: "function:myFunction;", correct: false },
            { text: "myfunction();", correct: false },

        ]
    },
    {
        question: 'How do you call a function named myFunction?',
        answers: [
            { text: "myFunction();", correct: true },
            { text: "call myFunction ()", correct: false },
            { text: "call myFunction", correct: false },
            { text: "callfunc myFunction", correct: false },
        ]
    },
    {
        question: 'How to write a comment in javascript?',
        answers: [
            { text: '"This is comment', correct: false },
            { text: '//This is a comment', correct: false },
            { text: '/*This is a comment*/', correct: true },
            { text: '$This is a comment', correct: false },
        ]
    },
    {
        question: 'How to write an array in javascript?',
        answers: [
            { text: 'var colors = red ,blue ,green', correct: false },
            { text: 'var colors = 1=red , 2=blue , 3=green', correct: false },
            { text: 'var colors = ["red" , "blue" , "green"]', correct: true },
            { text: 'var colors = 1:red , 2:blue , 3:green', correct: false },
        ]
    },
    {
        question: 'How to generate a random number in javascript?',
        answers: [
            { text: 'math.random ();', correct: false },
            { text: 'Math.rnd ()', correct: false },
            { text: 'Math.random ();', correct: true },
            { text: 'random();', correct: false },
        ]
    },
    {
        question: 'Which event occurs when a user clicks on an HTML element?',
        answers: [
            { text: 'onchange', correct: false },
            { text: 'onmousehover', correct: false },
            { text: 'onmouseclick', correct: false },
            { text: 'onclick', correct: true },
        ]
    },
    {
        question: 'console.log(typeof NaN); will result in..',
        answers: [
            { text: 'number', correct: true },
            { text: 'NaN', correct: false },
            { text: 'undefined', correct: false },
            { text: 'null', correct: false },
        ]
    },
    {
        question: 'console.log(typeof typeof 1); will result in..',
        answers: [
            { text: 'number', correct: false },
            { text: 'string', correct: true },
            { text: '1', correct: false },
            { text: 'true', correct: false },
        ]
    },
    {
        question: 'console.log(false == "0"); will result in..',
        answers: [
            { text: 'false', correct: false },
            { text: 'true', correct: true },
            { text: 'Nan', correct: false },
            { text: 'none of the above', correct: false },
        ]
    },
    {
        question: "console.log(('b' + 'a' + + 'a').toLowerCase());); will result in..",
        answers: [
            { text: 'baaa', correct: false },
            { text: 'banana', correct: true },
            { text: 'Banana', correct: false },
            { text: 'Baaa', correct: false },
        ]
    },
    {
        question: "console.log(3 > 2 > 1); will result in..",
        answers: [
            { text: 'true', correct: false },
            { text: 'NaN', correct: false },
            { text: 'false', correct: true },
            { text: 'None of above', correct: false },
        ]
    },
    {
        question: "console.log(1+'2'+'2'); will result in..",
        answers: [
            { text: '24', correct: false },
            { text: '32', correct: false },
            { text: '14', correct: false },
            { text: '122', correct: true },
        ]
    },
    {
        question: "How does the while loop begins ?",
        answers: [
            { text: 'while(i<10)', correct: true },
            { text: 'while i<10', correct: false },
            { text: 'while {i<10}', correct: false },
            { text: 'all of the above', correct: false },
        ]
    },
    {
        question: "Two arrays can be merged using which method ?",
        answers: [
            { text: 'cancate()', correct: false },
            { text: 'concat()', correct: true },
            { text: 'merge', correct: false },
            { text: 'join()', correct: false },
        ]
    },
    {
        question: "How to return a number as a String?",
        answers: [
            { text: 'valueOf()', correct: false },
            { text: 'concat()', correct: false },
            { text: 'toString()', correct: true },
            { text: 'String()', correct: false },
        ]
    },
    {
        question: "How to get current date and time ?",
        answers: [
            { text: 'date new()', correct: false },
            { text: 'new Date()', correct: true },
            { text: 'Date()', correct: false },
            { text: 'date()', correct: false },
        ]
    },


];


/*The question container,options container and next button are taken from DOM 
the next button is not displayed*/
const question = document.getElementById("question-container");
const qNo = document.getElementsByTagName("span");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-btn");



/*The question number and score is set to zero. */
let currentQuestionNumber = 0;
let score = 0;


/**This function is called when the user wants to continue playing the game after finishing the first chance.
 * It sets the question number and score back to zero.
 */
function startQuiz() {
    document.getElementById("progressDone").style.width = "0%";
    document.getElementById("progressDone").innerHTML = "0%";
    document.getElementById("back-btn").textContent = "Login Page";

    currentQuestionNumber = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    displayQuestion();
}

displayQuestion();
/** this function displays the questions according to the question number from the array provided 
 * It also displays the option buttons with the text key as its text content from the answer object of the questions array
*/
function displayQuestion() {
    resetStatus();


    let currentQuestion = questions[currentQuestionNumber];
    let questionNumber = currentQuestionNumber + 1;
    qNo.innerHTML = questionNumber;
    question.textContent = qNo.innerHTML + ". " + currentQuestion.question;


    /** for each answers object of the current question a function answer is placed so that a button 
     * is created and the text key is passed as the text content of the button.
     * answer-button class is assigned to each button and designed in css.
     * Then it is appended into the options container in the DOM.
     * 
     * correct key is checked in each answer object and its content is assigned as a dataset to the button.
     * eventlistener is attached to each button and on click it calls a function checkAnswer. 
    */
    currentQuestion.answers.forEach(answer => {

        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("answer-button");
        optionsContainer.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", checkAnswer);
    });

}
/** This functions removes all the option buttons from the previous questions
 * avoids repeatition of buttons
 */
function resetStatus() {

    while (optionsContainer.firstChild) {
        optionsContainer.removeChild(optionsContainer.firstChild);
    }
}

/**This function passes the clicked button as a parameter which is the passed into variable.
 * the dataset of the clicked button is checked
 * if it is true it is assigned a class correct and a class incorrect if it is not true. 
 * the score is incremented accordingly when the answer is correct.
 */
function checkAnswer(e) {
    const selectedButton = e.target;
    console.log(selectedButton);
    const correctAnswer = selectedButton.dataset.correct === "true";
    if (correctAnswer) {
        /*
        setTimeout(()={selectedButton.classList.add("correct");
                            score++;
        },1000)*/
        selectedButton.classList.add("correct");
        score++;

    }
    else {
        selectedButton.classList.add("incorrect");
    }
    /**A copy of array of buttons is created from the options container from the DOM
     * for each button a function is assigned which checks the dataset of the button
     * if true it is assigned to the class correct.
     * class correct changes the background of that button to green.
     * the buttons are disabled to avoid multiple clicks
     * the next question button appears 
     */
    Array.from(optionsContainer.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "inline-block";

}
/** it resets all the buttons and displays the score and asks if th euser wants to play again
 */
function displayScore() {
    resetStatus();
    document.getElementById("progressDone").style.width = "100%";
    document.getElementById("progressDone").innerHTML = "100%";
    document.getElementById("back-btn").textContent = "Exit";
    question.textContent = `You Scored ${score} out of ${questions.length} !!!!`;
    nextButton.style.display = "inline-block";
    nextButton.textContent = "Start Again";

    const feedback = document.createElement("textarea");
    feedback.placeholder = "Your Feedback Here !!!";
    feedback.classList.add("feedback");
    optionsContainer.appendChild(feedback);

    const submitFeedback = document.createElement("button");
    submitFeedback.textContent = "Submit";
    submitFeedback.classList.add("submitFeedback");

    optionsContainer.appendChild(submitFeedback);
    optionsContainer.style.display = "block";
}

/**it increases the question number and displays the next question
 * if there are no more questions left it displays score 
 */
function handleNextButton() {
    currentQuestionNumber++;
    if (currentQuestionNumber < questions.length) {
        progressBar();
        displayQuestion();
    } else {
        displayScore();
        document.getElementById("progressDone").style.width = "100%";
    }
}
/**an click event listener is attached to next button which calls handlenextbutton() 
 * if the array has questions left else it begins the quiz again.
 */
nextButton.addEventListener("click", function () {
    if (currentQuestionNumber < questions.length) {
        handleNextButton();
    }
    else {
        startQuiz();
    }

});
function progressBar() {
    const progressBar = document.getElementById("progressDone");

    let progress = qNo.innerHTML;
    let finalValue = questions.length;

    progressBar.style.width = `${((progress / finalValue) * 100)}%`;
    progressBar.innerHTML = `${(Math.round((progress / finalValue) * 100))}%`;


}