
$(document).on("click", function() {
    var score = 0;
    var timer = 0;
    var numofQuestions = 3;
    var ansArr = ['b','a','c'];
    var questions = ['q1','q2','q3'];

  for(var i = 1; i <= numofQuestions.length; i++) {
      if(response == questions[i].answer) {
        score++;
      }
      var score = document.getElementById('score');
      results.innerHTML= score
  }
});
//create an array with question and answers in an object as an array
//create empty variable var score=0; and var timer=15;

//On start button click show timer countdown and show questions and answers

//Create a function for the timer to countdow from 15 to 0
//timer var goes down by a second
//Check and see if timer 0<, if =0 top timer and check answers

//function working with an array that includes questions and answers, loop through array to dynamicly create questions and radio buttons

//Button to end game: stop timer, check answers

//We need a function to check answers, linked to var score, if correct increment by 1+
//if value of radio button= correct answer +1 (need to figure out how to get value of radio button selected)
//Show final div with how many right