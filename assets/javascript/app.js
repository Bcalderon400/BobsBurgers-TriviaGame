var counter = 30;
var currentQuestion = 0;
var score = 0;
var lost = 0;
var timer;


function loadQuestion() {

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
        result += `<p classs="choice" data-answer="${choices[i]}">${choices[i]}</p>`;


    }
    return result;
}
loadQuestion();