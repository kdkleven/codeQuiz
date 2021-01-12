// Main content "Coding Quiz Challenge with description"
// Questions page should include Question, with 4 answers
// ask 5 questions
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
        correctAnswer: "a"
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
    }
];

// function to build quiz
var output = [];

for (var i = 0; i < questions.length; i++) {
    
}

// function to display result




// function to set timer
// // assign variable to the time element and set the timer to 60
var timeEl = document.querySelector(".time");
var secondsLeft = 60;

// countdown until the timer is 0 or the number of questions has been answered
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
        console.log(secondsLeft);

        // IF QUESTIONS = 0, end game and display remaining timer as score

        // ELSE if timer is 0, end game and display "NO SCORE RECORDED"
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            alert("Time's up");
            // END GAME
            // MESSAGE PLAYER
        }
    }, 1000);
}

setTime();
