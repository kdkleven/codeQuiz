
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
        question: "Q1",
        answers: {
            a: "answer 1",
            b: "answer 2", 
            c: "answer 3", 
            d: "answer 4"
        }, 
        correctAnswer: "a"
    },
    {
        question: "Q2",
        answers: {
            a: "answer 1",
            b: "answer 2", 
            c: "answer 3", 
            d: "answer 4"
        }, 
        correctAnswer: "c"
    },
    {
        question: "Q3",
        answers: {
            a: "answer 1",
            b: "answer 2", 
            c: "answer 3", 
            d: "answer 4"
        }, 
        correctAnswer: "b"
    },
    {
        question: "Q4",
        answers: {
            a: "answer 1",
            b: "answer 2", 
            c: "answer 3", 
            d: "answer 4"
        }, 
        correctAnswer: "b"
    },
    {
        question: "Q5",
        answers: {
            a: "answer 1",
            b: "answer 2", 
            c: "answer 3", 
            d: "answer 4"
        }, 
        correctAnswer: "d"
    },
    {
        question: "Q6",
        answers: {
            a: "answer 1",
            b: "answer 2", 
            c: "answer 3", 
            d: "answer 4"
        }, 
        correctAnswer: "d"
    },
    {
        question: "Q7",
        answers: {
            a: "answer 1",
            b: "answer 2", 
            c: "answer 3", 
            d: "answer 4"
        }, 
        correctAnswer: "d"
    },
    {
        question: "Q8",
        answers: {
            a: "answer 1",
            b: "answer 2", 
            c: "answer 3", 
            d: "answer 4"
        }, 
        correctAnswer: "d"
    },
    {
        question: "Q9",
        answers: {
            a: "answer 1",
            b: "answer 2", 
            c: "answer 3", 
            d: "answer 4"
        }, 
        correctAnswer: "d"
    },
    {
        question: "Q10",
        answers: {
            a: "answer 1",
            b: "answer 2", 
            c: "answer 3", 
            d: "answer 4"
        }, 
        correctAnswer: "d"
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
    $('#result').html("");

    $("#startBtn").on("click", startQuiz);      
}

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

    $('#result').html("");

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

//
function response() {
    //
    var response = $(this).attr('id');
    var score;
    //
    if (questions[currentQuestion].correctAnswer === response) {
        //
        $('#result').html("CORRECT!");
        //
        currentQuestion += 1;
    } 
    else {
        //
        $('#result').html("INCORRECT!");
        //
        secondsLeft -= 10;        
        //
        if (secondsLeft < 10) {
            secondsLeft = score;
            stopTime();
            loadResult();
        }
        //
        currentQuestion += 1;
    }   
    jQuery('#result').fadeOut(1500); 
    setTimeout(loadQuestions, 1000);
    
}



function loadResult() {
    //var resultEl = document.querySelector('#result');      
    console.log("loadResult called");
    stopTime();
    
    var score = secondsLeft;
    
    // Show result, and restart and high scores buttons
    $('.result').removeClass('hidden');
    $('#restart').removeClass('hidden');
    $('#highscoresBtn').removeClass('hidden');

    // Hide elements
    $('#highscoresLnk').addClass('hidden');
    $('.question').addClass('hidden');
    $('.answers').addClass('hidden');
    
    $('').html(questions[currentQuestion].answers.d);


} 
// END GAME function
// clear question page, load result page
// display high score button or restart button
// function for response onclick
// check if button pressed == questions[].currentquestion.correctAnswer
// handle correct (load next question and display CORRECT) vs incorrect answer (display incorrect -10s)
// if seconds < 10, end game set timer to 0
function stopTime() {
    console.log("stopTime called");
    secondsLeft = 0;
}

// function to set timer
// // assign variable to the time element and set the timer to 60






