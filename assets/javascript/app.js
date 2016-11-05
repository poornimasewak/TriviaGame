
var game = {
    questions: [{
        question: "Which is the longest river in Africa?",
        options: ["amazon", "nile", "thames", "chicago"],
        correct: "nile"
    }, {
        question: "Which country in Europe has the biggest number of  inhabitants?",
        options: ["Germany", "France", "Italy", "UK"],
        correct: "Germany"
    }, {
        question: "Which nation spends the most per capita gambling in casinos?",
        options: ["Germany", "Australia", "Italy", "USA"],
        correct: "Australia"
    }, {
        question: "What city has the oldest Zoo in the world, and still in use today?",
        options: ["London", "New York", "Delhi", "chicago"],
        correct: "London"
    }, {
        question: "The Aryan race originated in what country?",
        options: ["Germany", "France", "Italy", "India"],
        correct: "India"
    }, {
        question: "What color car is reserved for the royal family in Japan?",
        options: ["White", "Maroon", "Black", "Blue"],
        correct: "Maroon"
    }, {
        question: "Which UK city is joined with London by the Grand Union canal?",
        options: ["London", "Bristol", "Liverpool", "Birmingham"],
        correct: "Birmingham"
    }, {
        question: "What is the Capital of the Ukraine?",
        options: ["Kiev", "Sumy", "Lviv", "Odessa"],
        correct: "Kiev"
    }, {
        question: "What nation has the highest  percentage of women in their legislature?",
        options: ["India", "Cuba", "Italy", "UK"],
        correct: "Cuba"
    }, {
        question: "The northernmost point of Africa is in what country?",
        options: ["Ethiopia", "Nigeria", "Tunisia", "Kenya"],
        correct: "Tunisia"
    }],
    timer: 10,

    score: 0
}

var intervalId, timeoutId, count = 0, ans, right = 0, wrong = 0, unanswered = 0;
// startGame();

$('#hide').hide();
$('#btn').on('click', function() {
    $('#hide').show();
    $('#btn').hide();
    startGame();
});

function startGame() {
	displayQuestion();
}

function displayQuestion() {
    // for(var i = 0; i < game.questions.length; i++){
    $('#question').html(game.questions[count].question);
    $('#opt1').html('<input type="radio" name="options" value='+game.questions[count].options[0]+'>' + game.questions[count].options[0]);
    $('#opt2').html('<input type="radio" name="options" value='+game.questions[count].options[1]+'>' + game.questions[count].options[1]);
    $('#opt3').html('<input type="radio" name="options" value='+game.questions[count].options[2]+'>' + game.questions[count].options[2]);
    $('#opt4').html('<input type="radio" name="options" value='+game.questions[count].options[3]+'>' + game.questions[count].options[3]);
    
    timer();

    intervalId = setInterval(timer, 1000);

     $('input[type=radio]').click(function(){
		ans = $('input[name=options]:checked').val();
		console.log(ans);
        // else {
        if (game.questions[count].correct === ans) {
         right++;
         clearInterval(intervalId);
         game.timer = 10;
         nextQuestion();
        }
        else {
            wrong++;
            clearInterval(intervalId);
         game.timer = 10;
         nextQuestion();
        }
	});

}
//Function to show next question
function nextQuestion() {
    
    count++;
    timeoutId = setTimeout(displayQuestion, 1000);

    if(count === game.questions.length)
    {
    	
    	clearTimeout(timeoutId);
        // console.log('game over');
        finalScore();
        reset();
    }


}

//function to show remaining time
function timer() {
    $('#time').html('Time Remaining : ' + game.timer-- + ' seconds');
  if (game.timer < 0) {
       unanswered++;
        clearInterval(intervalId);
        $('#time').html('Time Remaining : ' + ' Times up');
        nextQuestion();
    }
    
}
function finalScore() {
    $('#hide').hide();
    $('#score').html('<div><img src="C:/Users/poornima/Desktop/nw_bootcamp/TriviaGame/assets/images/200w.gif" ></div><br>All Done, Heres how you did!!!<br>'+'Correct Answers : '+right+'<br>Incorrect Answers : '+wrong+'<br>Unanswered : '+unanswered);
    $('#score').append('<br><button id="btn2">Start Over</button>');

    $('#btn2').on('click', function() {
    $('#hide').show();
    $('#btn2').hide();
    $('#score').hide();
    startGame();
});

}

function reset() {
	count = 0;
    right = 0;
    wrong = 0;
    unanswered = 0;	  
}

