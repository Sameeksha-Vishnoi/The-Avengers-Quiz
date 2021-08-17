var readlineSync = require('readline-sync');
var chalk = require('chalk');

var userName = readlineSync.question("Whats's your name? \n");
userName = userName.toUpperCase();

var score = 0;

console.log(chalk.cyan("Welcome ", userName, ", Let's see how much do you know about  The Avengers :) \n"))


console.log(chalk.blue.bold("Rules!!"))
console.log(chalk.yellow("1. There are total 10 questions, you have to attempt all of them."))
console.log(chalk.yellow("2. For the right answer score  increases by 2 and for wrong answer deducts by 1"))
console.log(chalk.yellow("3. Type the index value of the answer."))



function play(question, array, answer) {

  var userAnswer = readlineSync.keyInSelect(array, question);


  if (array[userAnswer] === answer) {
    console.log(chalk.green("Right!"));
    score = score + 2;
  }
  else {
    console.log(chalk.red("Wrong!"));
    score = score - 1;
  }
  console.log("current score: ", score);

  console.log("------------")
}


var questions = [{
  array: ['Tony Stark', 'Peter Parker', 'Steve Rogers', 'Buck Rogers'],
  question: "What is the real name of Iron Man? ",
  answer: "Tony Stark"
},
{
  array: ['Thor', 'Peter Perker', 'Tony Stark', 'Bruce Wayner'],
  question: "Who is Loki's adoptive brother? ",
  answer: "Thor"
},
{
  array: ['A bow & arrow', 'A Sword', 'A Catapult', 'A Hammer'],
  question: "What weapon does Thor carry? ",
  answer: "A Hammer"
},
{
  array: ['Bat Man', 'Spider Man', 'Captain America', 'Hulk'],
  question: "Peter Parker appears in Avengers: Infinity War, Who's is he better known as? ",
  answer: "Spider Man"
},
{
  array: ['Iron Man', 'Vision', 'Hulk Buster', 'Ultron'],
  question: "Whose nickname is 'Murder Bot'? ",
  answer: "Ultron"
},
{
  array: ['Frelunium', 'Stretchium', 'Verystrongium', 'Vibranium'],
  question: "What is the strongest metal in Marvel universe? ",
  answer: "Vibranium"
},
{
  array: ['Alien', 'Robot', 'Android', 'Famous Artist'],
  question: "Vision is a....What? ",
  answer: "Android"
},
{
  array: ['Nick Furry', 'Tony Stark', 'Bruce Banner', 'Diana Prince'],
  question: "Who is the leader of S.H.I.E.L.D?",
  answer: "Nick Furry"
},
{
  array: ['Iron Man', 'Hawkeye', 'Thor', 'Hulk'],
  question: "Which superhero does Bruce Banner transform into? ",
  answer: "Hulk"
},
{
  array: ['Black Panther', 'Hawkeye', 'Iron Man', 'Thor'],
  question: "What is Clint Barton's superhero name?",
  answer: "Hawkeye"
}]


for (var i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].array, questions[i].answer)
}

console.log(chalk.magenta("Congratulations! You scored: ", score));

var leaderBoard = [
  { name: 'Twinkle', score: '17' },
  { name: 'Shubham', score: '20' }
]


console.log("Leaderboard\n");
console.log("Name     Score ")


for (var i = 0; i < leaderBoard.length; i++) {
  console.log(chalk.green(leaderBoard[i].name, ' ', leaderBoard[i].score));
}


console.log(chalk.cyan.bold("\nThanks for solving the quiz, if your score is higher than the leaderboard score, Please send a screenshot to Sameeksha."));