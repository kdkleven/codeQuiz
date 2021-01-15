
// Setup divs for start page, quiz page, result page, and highcore page (call each one at the appropriate time)
// Questions page should include Question, with 4 answers (questions[0].question, questions[0].answers.a)
// ask 5 questions ()
// Correct/incorrect answer displys "Correct/Wrong" with audio (stretch)
// Incorrect answers decrease timer by 10 seconds
// when all questoins have been answered OR timer reaches 0, display "All Done" message
// All done message should display final score, provide a text box for the user's initials (3 char), and a submit score button
// then provide a button to either restart quiz or view high scores
// high scores screen should display user iinitials and their score, with a link to go back to the quiz start screen

// ***DECLARE QUESTIONS***
var questions = [
    {
        question: "How to write an IF statement for executing some code if \'i\' is NOT equal to 5?",
        answers: {
            a: "if i != 5 then",
            b: "if (i != 5)",
            c: "if i <> 5",
            d: "if (i <> 5)"
        },
        correctAnswer: "b"
    },
    {
        question: "How to write an IF statement in JavaScript?",
        answers: {
            a: "if (i == 5)",
            b: "if i = 5",
            c: "if i = 5 then",
            d: "if i == 5 then"
        },
        correctAnswer: "a"
    },
    {
        question: "How do you call a function named \'myFunction\'?",
        answers: {
            a: "call function myFunction()",
            b: "function(myFunction)",
            c: "call myFunction()",
            d: "myFunction()"
        },
        correctAnswer: "d"
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: {
            a: "function:myFunction()",
            b: "function myFunction()",
            c: "function = myFunction()",
            d: "function.myFunction()"
        },
        correctAnswer: "b"
    },
    {
        question: "How do you write \'Hello World\' in an alert box?",
        answers: {
            a: "msgBox(\'Hello World\')",
            b: "alertBox(\'Hello World\')",
            c: "msg(\'Hello World\')",
            d: "alert(\'Hello World\')"
        },
        correctAnswer: "d"
    },
    {
        question: "The external JavaScript file must contain the <script> tag.",
        answers: {
            a: "Neither",
            b: "True",
            c: "False",
            d: "All of the above"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the correct syntax for referring to an external script called \'xxx.js\'?",
        answers: {
            a: "<script src=\'xxx.js\'",
            b: "<script href=\'xxx.js\'",
            c: "<src script=\'xxx.js\'",
            d: "<script text=\'xxx.js\'"
        },
        correctAnswer: "a"
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        answers: {
            a: "The <meta> section",
            b: "Both the <head> section and the <body> section",
            c: "The <head> section",
            d: "The <body> section"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the correct JavaScript syntax to change the content of the HTML element? <p id=\'demo\'>This is a demonstration.</p>",
        answers: {
            a: "document.getElement(\'p\').innerHTML = \'Hello World!\'",
            b: "document.getElementById(\'demo\').innerHTML = \'Hello World!\'",
            c: "#demo.innerHTML = \'Hello World!\'",
            d: "document.getElementByName(\'p\').innerHTML = \'Hello World!\'"
        },
        correctAnswer: "b"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: {
            a: "<scrip>",
            b: "<javascript>",
            c: "<script>",
            d: "<js>"
        },
        correctAnswer: "c"
    }
];

// define a variable to represent the current question
var currentQuestion = 0;
var secondsLeft = 60;
var time;
var score = 0;
var initials = "";

quizWelcome();

// display the welcome page
function quizWelcome() {
    //console.log("quizWelcome");
    
    // load intro view
    introView();
    
    // click to view the high scores
    $('#highscoresBtn').on("click", getHighscores);
    
    // Start quiz when the button is clicked
    $("#startBtn").on("click", startQuiz);
    
}

// configure the intro view
function introView() {
    //console.log("introView");
    
    // hide quiz view, end view, and high scores view
    $('#timerText').addClass('hidden');
    $('.questionDiv').addClass('hidden');
    $('.answersDiv').addClass('hidden');
    $('.resultDiv').addClass('hidden');
    $('.endGameDiv').addClass('hidden');
    $('.highscoresDiv').addClass('hidden');
    $('#back').addClass('hidden');
}

// start the quiz
function startQuiz() {
    //console.log("startQuiz");

    stopTime();
    quizView();
    setTime();
    loadQuestions();
}

// configure quiz view
function quizView() {
    //console.log("quizView");

    // Hide highscores, intro view and end view
    $('#highscoresBtn').addClass('hidden');
    $('.quizStartDiv').addClass('hidden');

    // Show quiz view
    $('#timerText').removeClass('hidden');
    $('.questionDiv').removeClass('hidden');
    $('.answersDiv').removeClass('hidden');
    $('.resultDiv').removeClass('hidden');
    $('.score').removeClass('hidden');
    $('.initials').removeClass('hidden');
}

// start the timer
function setTime() {
    //console.log("setTime");

    var timeEl = document.querySelector('#time');
    secondsLeft = secondsLeft - 1;
    timeEl.textContent = secondsLeft;
    time = setTimeout(setTime, 1000);
}

// load questions onto the page
function loadQuestions() {
    //console.log("loadQuestions");

    $('#question').text(questions[currentQuestion].question);
    $('#a').text(questions[currentQuestion].answers.a);
    $('#b').text(questions[currentQuestion].answers.b);
    $('#c').text(questions[currentQuestion].answers.c);
    $('#d').text(questions[currentQuestion].answers.d);

    document.getElementById('a').addEventListener("click", response);
    document.getElementById('b').addEventListener("click", response);
    document.getElementById('c').addEventListener("click", response);
    document.getElementById('d').addEventListener("click", response);
}

// compare user's reponse to the correct answer
function response() {
    
    var response = $(this).attr('id');
    if (currentQuestion === 9) {
        gameOver();
    }
    else if (secondsLeft === 0) {
        secondsLeft = 0;
        gameOver();
    }
    else if (response === questions[currentQuestion].correctAnswer) {
        $('#result').html('CORRECT!');
        $('#result').fadeOut(2000, function () {
            $(this).html('').show();
        });
        currentQuestion += 1;
        loadQuestions();
    }
    else {
        $('#result').html('INCORRECT!');
        $('#result').fadeOut(2000, function () {
            $(this).html('').show();
        });
        if (secondsLeft < 10) {
            secondsLeft = 0;
            gameOver();
        }
        secondsLeft -= 10;
        currentQuestion += 1;
        loadQuestions();
    }
    // console.log(currentQuestion);
}

// stop the timer
function stopTime() {
    //console.log("stopTime");
    clearTimeout(time);
}

// End the game
function gameOver() {
    
    //console.log("gameOver");
    //console.log(secondsLeft);

    stopTime();
    endView();

    score = secondsLeft;
    $('#score').html(score);

    if (score > 0) {
        $('#initals').text("");
        $('#endText').html("CONGRATULATIONS!");
        $('#endSubText').html("You completed the quiz. Enter your initials and submit to record your Highscore.");
        $('#submit').click(function () {
            initials = $('#initials').val();

            //console.log(initials);
            if (initials.length == 0) {
                alert("Please enter your initials");
            }
            submitHighscore();
        });
    } else {
        $('#endText').html("YOU DIED");
        $('#submit').addClass('hidden');
        $('.initials').addClass('hidden');
        $('#highscoresBtn').removeClass('hidden');
    }   
    
    $('#restartBtn').on("click", restartQuiz);
}

// configure end game view
function endView() {
    //console.log("endView");

    // Hide intro view, and quizView
    $('.questionDiv').addClass('hidden');
    $('.answersDiv').addClass('hidden');
    $('.resultDiv').addClass('hidden');
    $('.timer').addClass('hidden');

    // show end view
    $('.endGameDiv').removeClass('hidden');
}

// retreive highscores for display
function getHighscores(){
    
    highScoresView();

    var getScore = localStorage.getItem("score", score);
    var getInitials = localStorage.getItem("initials", initials);

    $('#scoreDisplay').append(getScore + " " + getInitials + "<br>");

}

// view highscores
function submitHighscore () {
    // console.log("submitHighscore");             
    highScoresView();
    saveScore();
    getHighscores();
}

// configure highscores view
function highScoresView() {
    console.log("highscores view");
    $('.quizStartDiv').addClass('hidden');
    $('.endGameDiv').addClass('hidden');
    $('.highscoresDiv').removeClass('hidden');
    $('#restartBtn').removeClass('hidden');
    $('#highscoresBtn').addClass('hidden');
    $('#back').removeClass('hidden');
    $('#back').click(restartQuiz);
}

// restart the quiz and initialize variables
function restartQuiz() {
    console.log("restartQuiz");
    // Hide intro view, and quizView
    $('#highscoresBtn').removeClass('hidden');
    $('.quizStartDiv').removeClass('hidden');
    $('.endGameDiv').addClass('hidden');
    $('#submit').removeClass('hidden');
    $('.initials').removeClass('hidden');
    $('.highscoresDiv').addClass('hidden');

    currentQuestion = 0;
    secondsLeft = 60;
    score = 0;
    initials = "";

    stopTime();
    quizWelcome();
}

// save scores to local storage
function saveScore() {
    // console.log("saveScore");
    // console.log(initials);
    
    localStorage.setItem("initials", initials);
    localStorage.setItem("score", score);
}

