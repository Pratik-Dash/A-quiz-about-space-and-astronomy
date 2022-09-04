import chalk from "chalk";
import readlinesync from 'readline-sync'
var highScores = [
  {
    "Name": "Asish",
    "Score": 9
  },
  {
    "Name": "Subhasish",
    "Score": 8
  },
  {
    "Name": "Vishal",
    "Score": 7
  }

]
function WelcomeScreen() {
  console.log(chalk.blue('Welcome player \n'))
  var playerName = readlinesync.question("Please enter your name \n");
  console.log(chalk.blueBright('Welcome ' + playerName))


  var playerChoice = readlinesync.question(chalk.red("Enter 1 to begin game and 2 to view current highest scores and 3 to exit the game \n"))
  if (playerChoice == 2) {
    showLeaderBoard()
  } else if (playerChoice == 1) {
    playGame(playerName)
  }
  else {
    return
  }

}
function showLeaderBoard() {
  for (var i = 0; i < highScores.length; i++) {
    console.log(chalk.magentaBright(i + 1 + " " + highScores[i].Name + " - " + highScores[i].Score))
  }
}
function playGame(playerName) {
  var score = Play()
  checkHighScores(playerName, score)


}

//List of Questions
function Play() {
  var score = 0;
  console.log("Starting quiz......\n")
  var questions = [
    {//1
      "question": "Which planet is the largest in the solar system? \n",
      "options": ["1. Jupiter", "2. Saturn", "3. Nuptune", "4. Uranus"],
      "correctAnswer": "1. Jupiter"
    },
    {//2
      "question": "what is the cyclonic storm in jupiter that is visible from space called? \n",
      "options": ["1. The Great Black spot ", "2. The Great Red Spot ", "3. Rose over Jupiter ", "4. GJ215677 "],
      "correctAnswer": "2. The Great Red Spot "
    },
    {//3
      "question": "In a black hole, what is the name of the point from where even light cannot escape? \n",
      "options": ["1. Final Point ", "2. The point of no return ", "3. Event Horizon ", "4. The center of black hole "],
      "correctAnswer": "3. Event Horizon "
    },
    {//4
      "question": "what is the term used for the planets which does not orbit around a star? \n",
      "options": ["1. Lonely Planets ", "2. Lost Planets ", "3. Wandering planets", "4. Rogue planets "],
      "correctAnswer": "4. Rogue planets "
    },
    {//5
      "question": "What is the only moon in the solar system to have an Atmosphere of its own? \n",
      "options": ["1. Phobos ", "2. Demos ", "3. Titan ", "4. Europa"],
      "correctAnswer": "3. Titan "
    },
    {//6
      "question": "Which planet is the fastest spinning planet in the solar system? \n",
      "options": ["1. Neptune ", "2. Uranus ", "3. Jupiter ", "4. Pluto"],
      "correctAnswer": "1. Neptune "
    },
    {//7
      "question": "which moon in the solar system is the most geologically active and has frequent volcanic eruptions \n",
      "options": ["1. IO ", "2. Demos ", "3. Phobos ", "4. Titan "],
      "correctAnswer": "1. IO "
    },
    {//8
      "question": "The day on which the Sun’s direct rays cross the celestial equator is called: \n",
      "options": ["1. The Equinox ", "2. The Eliptic ", "3. The Solistice ", "4. The Aphelion "],
      "correctAnswer": "1. The Equinox "
    },
    {//9
      "question": "What is the smallest planet in the solar system by mass? \n",
      "options": ["1. Mars ", "2. Mercury ", "3. Pluto ", "4. Earth "],
      "correctAnswer": "2. Mercury "
    },
    {//10
      "question": "What is the visible part of the Sun called? \n",
      "options": ["1. The Lithosphere ", "2. The Photosphere ", "3. The Ionosphere ", "4. The Stratosphere "],
      "correctAnswer": "2. The Photosphere "
    }
  ]
  console.log("Your current Score is " + score);

  for (var i = 0; i < questions.length; i++) {
    console.log(questions[i].question)
    console.log(...questions[i].options)
    console.log()
    var userAnswer = readlinesync.question("Pick between [1-4] - ")
    if (questions[i].options[userAnswer - 1] == questions[i].correctAnswer) {
      console.log()
      score++
      console.log(chalk.green("Correct Answer!"))
      console.log()
      console.log(chalk.yellowBright("Your score is " + score))
      console.log("--------------------------\n")
    }
    else {
      console.log()
      console.log(chalk.red('Wrong Answer'))
      console.log()
      console.log(chalk.yellowBright("Your score is " + score))
      console.log("--------------------------\n")
    }
  }

  return score;

}

function checkHighScores(playerName, score) {
  var [currentMaxScore, currentMaxScorerName, index] = getCurrentHighScore()

  if (score > currentMaxScore) {
    console.log(chalk.green('Congratulations!! ' + playerName + ' You beat ' + currentMaxScorerName + " to have the highest score in the game.\n"))
    highScores[index].Name = playerName
    highScores[index].Score = score
    showLeaderBoard()
    console.log(chalk.redBright("Please contact the admin to permanetly update the leaderboard with your new score.\n"))
    console.log("Thank you for playing.")
  }
  else {
    console.log(chalk.blueBright("Your final Score is " + score))
    console.log(chalk.blue("Thank you for playing."))
  }
}

function getCurrentHighScore() {
  var highscore = highScores[0].Score
  var name = highScores[0].Name
  var index = 0
  for (var i = 0; i < highScores.length; i++) {
    if (highScores[i].Score > highscore) {
      highscore = highScores[i].Score
      name = highScores[i].Name
      index = i
    }
  }
  return [highscore, name, index]
}

WelcomeScreen()















