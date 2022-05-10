var readlineSync = require('readline-sync');
var score = 0;

function welcome(){
  var userName = readlineSync.question('May I have your name? ');
  console.log('Welcome ' + userName + "! to 'DO YOU KNOW' Sahit? Quiz");
}
welcome();

var questions = [
  {
    question : "Where do Sahit live? \nType Your Answer Here: ",
    answer : "Rayagada"
  },{
    question : "Who is Sahit's favorite actor? \nType Your Answer Here: ",
    answer : "Dhanush"
  },{
    question : "Who is Sahit's favorite Superhero? \nType Your Answer Here: ",
    answer : "Batman"
  }
];

function play(question,answer){
  var currentQuestion = readlineSync.question(question);
  if (currentQuestion.toUpperCase() === answer.toUpperCase()){
    console.log("Right Answer");
    score++;
  }else{
    console.log("Wrong Answer");
  }
}

function game(){
  for (var i=0; i<questions.length; i++) {
    
    play(questions[i].question, questions[i].answer)
  }
}

function showScores() {
  console.log("YAY! You SCORED: ", score);
}
game();
showScores();