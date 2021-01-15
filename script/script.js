
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
            b: "myFunction()", 
            c: "call myFunction()", 
            d: "function(myFunction)"
        }, 
        correctAnswer: "b"
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
            a: "alert('Hello World')",
            b: "alertBox('Hello World')", 
            c: "msg('Hello World')", 
            d: "msgBox('Hello World')"
        }, 
        correctAnswer: "a"
    },
    {
        question: "The external JavaScript file must contain the <script> tag.",
        answers: {
            a: "False",
            b: "True", 
            c: "Neither", 
            d: "All of the above"
        }, 
        correctAnswer: "a"
    },
    {
        question: "What is the correct syntax for referring to an external script called \'xxx.js\'?",
        answers: {
            a: "<script src='xxx.js'>",
            b: "<script href='xxx.js'>", 
            c: "<src script='xxx.js'>", 
            d: "<script text='xxx.js'>"
        }, 
        correctAnswer: "a"
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        answers: {
            a: "The <body> section",
            b: "Both the <head> section and the <body> section are correct", 
            c: "The <head> section", 
            d: "The <meta> section"
        }, 
        correctAnswer: "a"
    },
    {
        question: "What is the correct JavaScript syntax to change the content of the HTML element? <p id=\'demo\'>This is a demonstration.</p>",
        answers: {
            a: "document.getElement('p').innerHTML = 'Hello World!'",
            b: "document.getElementById('demo').innerHTML = 'Hello World!'", 
            c: "#demo.innerHTML = 'Hello World!'", 
            d: "document.getElementByName('p').innerHTML = 'Hello World!'"
        }, 
        correctAnswer: "b"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: {
            a: "<script>",
            b: "<javascript>", 
            c: "<js>", 
            d: "<scripting>"
        }, 
        correctAnswer: "a"
    }
];

// define a variable to represent the current question
var currentQuestion = 0;
var timeEl = document.querySelector('#time');
var secondsLeft = 60;
var t;

//start();
initialize();

    // function to start game
    // set timer, reset currentQuestion, call loadquestions
    // need a start quiz button
function initialize() {  
    
    // Show timer, questions, answers, and response
    $('#highscoresLink').removeClass('hidden');
    $('.quizStartDiv').removeClass('hidden');

    // Hide elements
    $('#timerText').addClass('hidden');
    $('.questionDiv').addClass('hidden');
    $('.answersDiv').addClass('hidden');
    $('.endGameDiv').addClass('hidden');
    
    // clearTimeout(t);
    // secondsLeft = 60;
    $("#startBtn").on("click", startQuiz);      
}

// function to set timer
// // assign variable to the time element and set the timer to 60
// countdown until the timer is 0 or the number of questions has been answered
function setTime() {
    //
    secondsLeft = secondsLeft - 1;
    //
    timeEl.textContent = secondsLeft;
    //
    t = setTimeout(setTime, 1000);    
}

function startQuiz() {
    setTime();
    loadQuestions();
}

function loadQuestions() {
    // display question and 4 answers
    // call questions array referencing currentQuestion
    // console.log(“Load question was called”);
    
    // Show elements
    $('.timer').removeClass('hidden');
    $('.questionDiv').removeClass('hidden');
    $('.answersDiv').removeClass('hidden');
    $('#result').removeClass('hidden');
    $('#result').removeClass('hidden');

    // Hide elements
    $('.quizStartDiv').addClass('hidden');
    $('#highscoresLink').addClass('hidden');
    

    $('#question').html(questions[currentQuestion].question);
    $('#a').html(questions[currentQuestion].answers.a);
    $('#b').html(questions[currentQuestion].answers.b);
    $('#c').html(questions[currentQuestion].answers.c);
    $('#d').html(questions[currentQuestion].answers.d);
    
    document.getElementById('a').addEventListener("click", response);
    document.getElementById('b').addEventListener("click", response);
    document.getElementById('c').addEventListener("click", response);
    document.getElementById('d').addEventListener("click", response);

}

// comparing reponse to the correct answer
// display correct or incorrect
// decrement timer by -10 if incorrect answer
// increment currentQuestion 
// load result if all questions answered or time runs out
function response() {
    //
    var response = $(this).attr('id');
    var score;
    //
    if (currentQuestion === 9 || secondsLeft <= 1) {
        loadResult();   
        
    }
    else if (questions[currentQuestion].correctAnswer === response) {
//        $('#correct').text("CORRECT!");
$('#correct').removeClass('hidden');
    
$('#correct').fadeOut(1500);
        currentQuestion += 1;
    } 
    else {
        $('.result').html("INCORRECT!");
        currentQuestion += 1;
        
        if (secondsLeft <= 11) {
        secondsLeft -= 10;        
        secondsLeft = 1;
        loadResult();
        }

        
    }           
        
    jQuery('.result').fadeOut(1500); 
    setTimeout(loadQuestions, 500);
    
}


// END GAME function
// clear question page, load result page
// display high score button or restart button
// function for response onclick
// check if button pressed == questions[].currentquestion.correctAnswer
// handle correct (load next question and display CORRECT) vs incorrect answer (display incorrect -10s)
function loadResult() {
    //var resultEl = document.querySelector('#result');      
    console.log("loadResult called");
    stopTime();
    
    score = secondsLeft;
    
    // Show result, and restart and high scores buttons
    $('.result').removeClass('hidden');
    $('#restart').removeClass('hidden');
    $('#highscoresBtn').removeClass('hidden');

    // Hide elements
    $('#highscoresLnk').addClass('hidden');
    $('.question').addClass('hidden');
    $('.answers').addClass('hidden');

    $('#input');
    
    document.getElementById('a').addEventListener("click", response);
    


} 



