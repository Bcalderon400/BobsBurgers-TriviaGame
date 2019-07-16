var counter = 5;
var currentQuestion = 0;
var score = 0;
var lost = 0;
var timer;



function nextQuestion() {
    currentQuestion++;
    loadQuestion();
}

function timeUp() {
    clearInterval(timer);

    lost++;

    nextQuestion();
}

function countDown() {
    counter--;
    $('#time').html('Timer: ' + counter);
    if (counter === 0) {
        timeUp()
    }
}


function loadQuestion() {

    counter = 5;
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
loadQuestion();