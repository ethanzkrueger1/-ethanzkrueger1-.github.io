//Initializing variables.
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
//Calling the question index.
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

//If the answer chosen by the user is correct, the score goes up. 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
//Ending the quiz.
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
//Initializing the variables.
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
//Displaying answer choices on-screen.
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
//Showing the scores and questions on-screen.
function populate() {
    //If the quiz ended, replace the game with the user's score.
    if(quiz.isEnded()) {
        showScores();
    }
    //If the quiz is still going on...
    else {
        //Show the question, and...
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        //Show the answer choices.
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        //Shows how far along the user is on the quiz.
        showProgress();
    }
}
 
//Guessing button:
function guess(id, guess) {
    var button = document.getElementById(id); //Finds a button element in the HTML.
    button.onclick = function() { //When clickedm, the user's answer choice is solidified and added to the score.
        quiz.guess(guess);
        populate();
    }
}
 
 
function showProgress() { //Shows user progress at the bottom of the page.
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}
 
function showScores() { //Shows the score at the end.
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your Score: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
    //if the score results are over a certain number, show a message
    if (quiz.score >= 3) {
        alert("Good job, you're smart! You got " + quiz.score + " points!");
    }
    else {
        alert("Sorry, I guess you're not smart. You only got " + quiz.score + " points. Try again by refreshing!"); 
    }
}
 
//Create the questions as an array, I think this counts as an "array"...
var questions = [
    new Question("Who invented the Internet?", ["Tim Berners-Lee", "Barack Obama","Al Gore", "Vint Cerf"], "Vint Cerf"),
    new Question("Which TV show was not created by Michael Schur?", ["The Office", "Brooklyn Nine-Nine", "Parks & Rec", "Rutherford Falls"], "The Office"),
    new Question("What is the air-speed velocity of an unladen swallow?", ["10 miles per hour", "98 kilometers per hour","Depends on the swallow", "Duh...70?"], "Depends on the swallow"),
    new Question("Is JK Rowling only making sudden changes to characters in hope of staying relevant?", ["Yes", "Yes", "Yes", "Yes"], "Yes"),
    new Question("What is the meaning of life?", ["The thing that makes us not die", "A board game", "42", "All of the above"], "All of the above")
]
 
//Creats the quiz on the HTML page.
var quiz = new Quiz(questions);

//Displays the quiz on HTML.
populate();
