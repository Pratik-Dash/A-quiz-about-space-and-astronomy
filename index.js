import chalk from "chalk";
import readlinesync from 'readline-sync'
var playerScore = 0
var playerName = ""
var newOrExistingPlayer = 0
var playerChoice = "Yes"
//0 - New Player 1 - Existing player
var highScores = [
  {
    "Name":"Pratik",
    "Score":3
  },
  {
    "Name":"Ashish",
    "Score":4
  }
]
function welcomePlayer(newOrExistingPlayer)
  {
    
    console.log("Hi Player!")
    console.log("\n")
    playerName = readlinesync.question("Please enter your name \n");
    console.log("\n")
    console.log("Welcome to a quiz about space and astronomy \n")
    console.log("checking highscores ... \n")
    for(var i = 0;i<highScores.length;i++)
      {
        if(playerName.toLowerCase() == highScores[i].Name.toLowerCase())
        {
          newOrExistingPlayer = 1
          break;
         
        
      }
        else{
          newOrExistingPlayer = 0
        }
      }
        if(newOrExistingPlayer == 1)
        {
           console.log("You already are an existing player.");
           console.log("Your highest score is "+highScores[i].Score)           
           console.log("\n")

         console.log("Please note that your score will only be updated if current score is higher than your previous high score.\n")
          var playerChoice = readlinesync.question("Would you like to continue? (Enter 'Y' or 'N')")

          if(playerChoice === "Y" )
          {
            Play(playerName,newOrExistingPlayer)
          }
          else{
            return 
          }
          
        }
        else{
          console.log("You are a new player\n")
          Play(playerName,newOrExistingPlayer)
        }
        
    
    
  }
//List of Questions
function Play(playerName,newOrExistingPlayer){
  var playerStatus = newOrExistingPlayer
  var name  = playerName
  var score = 0;
  console.log("Starting quiz...\n")
  var questions = [
    {
      "question":"Which planet is the largest in the solar system?\n",
      "answer":"Jupiter"
    },
    {
      "question":"what is the cyclonic storm in jupiter that is visible from space called?\n",
      "answer":"The Great Red Spot"
    },
    {
    "question":"In a black hole what is the point from where even light cannot escape called?\n",
    "answer":"Event Horizon"
    },
    {
      "question":"what is the term used for the planets which does not orbit around a star?\n",
      "answer":"Rogue Planets"
    },
    {
    "question":"What is the only moon in the solar system to have an Atmosphere of its own?\n",
    "answer":"Titan"
    },
    {
    "question":"Which planet is the fastest spinning planet in the solar system?\n",
    "answer":"Neptune"
    },
    {
    "question":"which moon in the solar system is the most geologically active and has frequent volcanic eruptions\n",
    "answer":"IO"
    }
]
  console.log(chalk.inverse('your current score is : '+score));
console.log("------------------")
   console.log("\n")
var userAnswer;

  for(var i = 0;i<questions.length;i++)
    {
      userAnswer = readlinesync.question(questions[i].question)
      console.log("\n")
      
    if(userAnswer.toLowerCase() === questions[i].answer.toLowerCase())
      {
        
        score++;
        console.log(chalk.bgGreen('Correct Answer !')+"\n"+chalk.inverse('Your Score is : '+score))
        console.log("------------------")
        console.log("\n")
      }
      else{
        console.log(chalk.bgRed('Wrong Answer')+"\n"+ chalk.inverse('your score is : '+score))
        console.log("------------------")
        console.log("\n")
      }
    }

  CalculateHighScore(score,name,playerStatus)
}

function CalculateHighScore(score,name,playerStatus)
  {
    if(playerStatus == 1)
    {
      for(var i = 0;i<highScores.length;i++)
      {
        if(playerName.toLowerCase() == highScores[i].Name.toLowerCase())
        {
          if(score>highScores[i].Score)
          {
            console.log("Your previous score was : "+highScores[i].Score+" Your new Score is : "+score+" Congratulations your beat your own highscore")
            highScores[i].Score = score;
          }
        }
      }
      console.log("\n")
      console.log("Top Scorers \n")
      
      for(var i = 0;i<highScores.length;i++)
        {
          console.log(highScores[i].Name+" - "+highScores[i].Score)
        }
    }
    else{
      var temp = false;
      for(var i = 0;i<highScores.length;i++)
        {
          if(score>highScores[i].Score)
          {
            temp = true
          }else{
            temp == false
          }
          
        }
      if(temp == true)
      {
        console.log("New high score detected! \n")
        console.log("Adding new high score...\n")
        highScores.push({
          "Name":playerName,
          "Score":score
          
        })
        
      }
      else{
        console.log("your final score is "+score)
      }
     

      console.log("Top Scorers")
      console.log("------------------")
      for(var i = 0;i<highScores.length;i++)
        {
          console.log(highScores[i].Name+" - "+highScores[i].Score);
        }
      
    }
    
  }


  welcomePlayer(newOrExistingPlayer)




