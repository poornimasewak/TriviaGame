$('#hide').hide();
$('#btn').on('click', function() {
    $('#hide').show();
    $('#btn').hide();
    // startGame();
});
var game = {
    questions: [{
        question: "Which is the longest river in Africa?",
        options: ["amazon", "nile", "thames", "chicago"],
        correct: "nile"
    }, {
        question: "Which country in Europe has the biggest number of  inhabitants?",
        options: ["Germany", "France", "Italy", "UK"],
        correct: "Germany"
    }],
    timer: 10,

    score: 0
}

var intervalId, timeoutId, count = 0, ans, right = 0, wrong = 0;
// startGame();

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
	});

}
//Function to show next question
function nextQuestion() {
    
    count++;
    timeoutId = setTimeout(displayQuestion, 1000);

    if(count === game.questions.length)
    {
    	console.log('game over');
    	reset();
    	clearTimeout(timeoutId);
    	finalScore();
    }


}
displayQuestion();
//function to show remaining time
function timer() {
    $('#time').html('Time Remaining : ' + game.timer-- + ' seconds');
  if (game.timer < 0) {
        clearInterval(intervalId);
        $('#time').html('Time Remaining : ' + ' Times up');
        nextQuestion();
    }
    else {
    	if (game.questions[count].correct === ans) {
    	 right++;
         clearInterval(intervalId);
         game.timer = 10;
         nextQuestion();
        }

     //  if (game.questions[count].correct !== ans){
    	// wrong++;
    	// clearInterval(intervalId);
     //     game.timer = 10;
     //     nextQuestion();
     //    }
    }
    
}
function finalScore() {
      console.log(right);
}

function reset() {
	count = 0;	  
}