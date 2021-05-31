function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
    //if the score results are over a certain number, show a message
    if (quiz.score >= 3) {
        alert("Good job, you're smart!");
    }
    else {
        alert("Sorry, I guess you're not smart. Try again by refreshing!"); 
    }
};
 
// create questions (it's an array, I think...) here
var questions = [
    new Question("Who invented the Internet?", ["Tim Berners-Lee", "Barack Obama","Al Gore", "Vint Cerf"], "Vint Cerf"),
    new Question("Which TV show was not created by Michael Schur?", ["The Office", "Brooklyn Nine-Nine", "Parks & Rec", "Rutherford Falls"], "The Office"),
    new Question("What is the air-speed velocity of an unladen swallow?", ["10 miles per hour", "98 kilometers per hour","Depends on the swallow", "Duh...70?"], "Depends on the swallow"),
    new Question("Is JK Rowling only making sudden changes to characters in hope of staying relevant?", ["Yes", "Yes", "Yes", "Yes"], "Yes"),
    new Question("What is the meaning of life?", ["The thing that makes us not die", "A board game", "42", "All of the above"], "All of the above")
];
 
// create quiz
var quiz = new Quiz(questions);

// score results

// display quiz
populate();
