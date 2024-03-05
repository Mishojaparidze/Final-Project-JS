//თამაში : Hangman

const words = ["ჯავასკრიპტი", "აიტი", "პროგრამირება", "კომპიუტერი", "დეველოპერი"];

const randomWord = words[Math.floor(Math.random() * words.length)];
let hiddenWord = Array.from(randomWord, () => "_");

let remainingLetters = randomWord.length;

function displayWord() {
  console.log(hiddenWord.join(" "));
}


function guessLetter(letter) {
  let found = false;
  for (let i = 0; i < randomWord.length; i++) {
    if (randomWord[i] === letter && hiddenWord[i] === "_") {
      hiddenWord[i] = letter;
      found = true;
      remainingLetters--;
    }
  }
  return found;
}

while (remainingLetters > 0) {
  displayWord();
  const userGuess = prompt("შეიყვანე ასო:");
  
  if (!userGuess) {
    break;
  }ა
  
  const isGuessCorrect = guessLetter(userGuess.toLowerCase());

  if (!isGuessCorrect) {
    console.log("ასო არ არის სწორი.");
  }
}

displayWord();
console.log("თამაში დასრულდა!");

