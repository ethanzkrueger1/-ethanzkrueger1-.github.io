(function(){

  let currentSlide = 0; // Put this at the beginning now, as it'll be a global variable

  // Functions
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    currentSlide++;
  }

  function showPreviousSlide() {
    currentSlide--;
  }

  // Variables
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "Who invented the Internet?",
      answers: {
        a: "Tim Berners-Lee",
        b: "Al Gore",
        c: "Vint Cerf",
        d: "Charlie Sheen"
      },
      correctAnswer: "c"
    },
    {
      question: "What is not a video title in 'Important Videos,' the greatest YouTube compilation of all time?",
      answers: {
        a: "Yee",
        b: "It's Prom!",
        c: "Flea Market Montgomery",
        d: "WWMii: Resolving Global Politics Through Super Smash Bros.",
      },
      correctAnswer: "d"
    },
    {
      question: "What should not be able to fly according to all known laws of aviation?",
      answers: {
        a: "A human",
        b: "A bee",
        c: "A pig",
        d: "An airplane",
      },
      correctAnswer: "b"
    },
    {
      question: "Which boy band had their music included in Brooklyn Nine-Nine's most iconic cold open?",
      answers: {
        a: "The Backstreet Boys",
        b: "*NSYNC",
        c: "One Direction",
        d: "BTS"
      },
      correctAnswer: "a"
    },
    {
      question: "What is the meaning of life?",
      answers: {
        a: "Something that distinguishes living from non-living things",
        b: "A scientific journal published by MDPI",
        c: "A board game simulating a person's travels",
        d: "42"
      },
      correctAnswer: "d"
    }
  ];

  // Kick things off
  buildQuiz();

  // Pagination
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener('click', showPreviousSlide);
  nextButton.addEventListener('click', showNextSlide);
})
();
