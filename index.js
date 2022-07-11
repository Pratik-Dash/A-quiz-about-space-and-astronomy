import chalk from "chalk";
import readlinesync from 'readline-sync'

var highScore = [3,4,];

//List of Questions
function Play(highscore){
  
  var score = 0;
  console.log("Starting quiz......\n")
  var questions = [
    {
      "question":"Who is my favorite Superhero?\n",
      "answer":"The Flash"
    },
    {
      "question":"What is my all time favorite food?\n",
      "answer":"Noodles"
    },
    {
    "question":"What is my favorite thing to do while bored?\n",
    "answer":"Playing video games"
    },
    {
      "question":"What is my favorite videogame?\n",
      "answer":"Mortal Kombat"
    },
    {
    "question":"what is my favorite programming language?\n",
    "answer":"C#"
    }
];
  console.log(chalk.inverse('your current score is : '+score));

   console.log("\n");
var userAnswer;

  for(var i = 0;i<questions.length;i++)
    {
      userAnswer = readlinesync.question(questions[i].question);
      console.log("\n");
      
    if(userAnswer.toLowerCase() === questions[i].answer.toLowerCase())
      {
        
        score++;
        console.log(chalk.bgGreen('Correct Answer !')+"\n"+chalk.inverse('Your Score is : '+score));
        userAnswer = "";
      }
      else{
        console.log(chalk.bgRed('Wrong Answer')+"\n"+ chalk.inverse('your score is : '+score));
      }
    }
if(score>=4)
{
  console.log("Well done you have got  "+score+" questions correct")
}
else{
  console.log("Better Luck next time ");
}
  for(var j = 0;j<highScore.length;j++)
    {
      if(score > highScore[j])
      {
        if(score>highScore[j+1])
        {
          highscore[highScore.length-1] = score;
          console.log(chalk.bgYellowBright('Congratulatons! You have the highest score in the game\n'));
console.log("Your final score is - "+score)
        
        }
      }
    }

  
}

Play(highScore);


