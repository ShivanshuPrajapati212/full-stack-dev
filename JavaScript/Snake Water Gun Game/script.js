let choices = ["Snake", "Water", "Gun"];

const randomChoice = () => {
  return Math.floor(Math.random() * choices.length);
};

let wins = 0;
let games = 1;
do {
  const computerChoice = choices[randomChoice()];

  const userChoice = prompt("Enter your Choice (Snake, Water, Gun) : ");

  if (userChoice == computerChoice) {
    alert(`Game tied. You both selected same.`);
  } else if (userChoice == "Snake" && computerChoice == "Water") {
    alert(`You Won Computer Choose ${computerChoice}`);
    wins++;
} else if (userChoice == "Snake" && computerChoice == "Gun") {
    alert(`You Lose, Computer Choose ${computerChoice}`);
} else if (userChoice == "Water" && computerChoice == "Snake") {
    alert(`You Lose, Computer Choose ${computerChoice}`);
} else if (userChoice == "Water" && computerChoice == "Gun") {
    alert(`You Won, Computer Choose ${computerChoice}`);
    wins++;
} else if (userChoice == "Gun" && computerChoice == "Snake") {
    alert(`You Won, Computer Choose ${computerChoice}`);
    wins++;
  } else if (userChoice == "Gun" && computerChoice == "Water") {
    alert(`You Lose, Computer Choose ${computerChoice}`);
  }
  games++;
} while (games <= 5);

alert(`You won ${wins} games out of 5`)