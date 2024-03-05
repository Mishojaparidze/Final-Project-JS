// თამაში : გამოიცანით რიცხვი

function guessNumberGame() {

  const targetNumber = Math.floor(Math.random() * 100) + 1;

  let userGuess = parseInt(prompt(" შემოიყვანეთ რიცხვი 1-დან 100-მდე:"));

  while (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
      alert("შემოიყვანეთ სწორი რიცხვი 1-დან 100-მდე.");
      userGuess = parseInt(prompt("შემოიყვანეთ რიცხვი 1-დან 100-მდე:"));
  }

  let attempts = 1;

  while (userGuess !== targetNumber) {
      userGuess = parseInt(prompt("არასწორია, სცადეთ თავიდან. შემოიყვანეთ რიცხვი 1-დან 100-მდე:"));

    
      while (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
          alert("შემოიყვანეთ სწორი რიცხვი 1-დან 100-მდე.");
          userGuess = parseInt(prompt("შემოიყვანეთ რიცხვი 1-დან 100-მდე:"));
      }

     
      attempts++;
  }


  alert(`გილოცავთ! თქვენ სწორად გამოიცანით რიცხვი ${attempts} ცდაზე.`);
}


guessNumberGame();
