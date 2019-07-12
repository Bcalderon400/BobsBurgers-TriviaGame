$(document).ready(function() {


    $("#remaining-time").hide()
    $("#start").on('click', trivia.startGame)
    $(document).on('click', 'option', trivia.guessChecker)


    var trivia = {
        correct: 0,
        incorrect: 0,
        unanswered: 0,
        currentSet: 0,
        timer: 20,
        timerOn: false,
        timerId: '',

        questions: {
            q1: 'Which fictional city is the home of Flash(Barry Allen)?'
        }
    }

































})