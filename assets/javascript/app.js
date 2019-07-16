var counter = 15;
var currentQuestion = 0;
var score = 0;
var lost = 0;
var timer;



function nextQuestion() {

    var isQuestionOver = (quizQuestions.length - 1) === currentQuestion;

    if (isQuestionOver) {

        console.log('Game is over')
        displayResult();

    } else {
        currentQuestion++;
        loadQuestion();
    }
}


function timeUp() {
    clearInterval(timer);

    lost++;

    preloadImage('lost')
    setTimeout(nextQuestion, 3 * 1000)
}

function countDown() {
    counter--;
    $('#time').html('Timer: ' + counter);
    if (counter === 0) {
        timeUp()
    }

}


function loadQuestion() {

    counter = 15;
    timer = setInterval(countDown, 1000);


    var question = quizQuestions[currentQuestion].question;
    var choices = quizQuestions[currentQuestion].choices;

    $('#time').html('Timer: ' + counter);

    $('#game').html(`
        <h4>${question}</h4>
        ${loadChoices(choices)}
    `)

}

function loadChoices(choices) {
    var result = '';

    for (var i = 0; i < choices.length; i++) {
        result += `<p class="choice" data-answer="${choices[i]}">${choices[i]}</p>`;


    }
    return result;
}

$(document).on('click', '.choice', function() {
    clearInterval(timer)

    var selectedAnswer = $(this).attr('data-answer')
    var correctAnswer = quizQuestions[currentQuestion].correctAnswer;

    if (correctAnswer === selectedAnswer) {
        score++;
        console.log('win')
        preloadImage('win')
        setTimeout(nextQuestion, 3 * 1000)

    } else {
        lost++;
        console.log('lost')
        preloadImage('lost')
        setTimeout(nextQuestion, 3 * 1000)

    }

})

function displayResult() {
    var result = `
    <p>You get ${score} question(s) right!</p>
    <p>You missed ${lost} question(s)</p>
    <p>Total questions ${quizQuestions.length} question(s) </p>
    <button class="btn btn-primary" id="reset">Reset Game</button>
    
    `;
    $('#game').html(result)
}

$(document).on('click', '#reset', function() {
    counter = 15;
    currentQuestion = 0;
    score = 0;
    lost = 0;
    timer = null;

    loadQuestion()

})

function randomImage(images) {
    var random = Math.floor(Math.random() * images.length)
    var randomImage = images[random]
    return randomImage
}

function preloadImage(status) {
    var correctAnswer = quizQuestions[currentQuestion].correctAnswer;
    if (status === 'win') {
        $('#game').html(`
<p class="preload-image">Congratulations, you picked the correct answer.</p>
<p class="preload-image">The correct answer is <b>${correctAnswer}</b> </p>
<img src="${randomImage(correctImages)}"/>
`)
    } else {
        $('#game').html(`
<p class="preload-image">The correct answer was <b>${correctAnswer}</b></p>
<p class="preload-image">You lost</p>
<img src="${randomImage(wrongImages)}"/>
`)
    }
}

$("#start").click(function() {
    $('#start').remove()
    $('#time').html(counter)
    loadQuestion()
})