// თარჯიმანი
const translations = {
  "ჯავასკრიპტი": "javascript",
  "კომპიუტერი": "computer",
  "ბრაუზერი": "browser",
 
};

function translateWord(word, dictionary) {
  return dictionary[word] || "თარგმანი არ მოიძებნა";
}

function addWordToDictionary(word, translation, dictionary) {
  dictionary[word] = translation;
}

function translateUserInput() {
  const userInput = prompt("შეიყვანეთ სიტყვა :");
  const translatedWord = translateWord(userInput, translations);
  
  if (translatedWord === "თარგმანი არ მოიძებნა") {
    const newTranslation = prompt("გთხოვთ მიუთითოთ თარგმანი:");
    addWordToDictionary(userInput, newTranslation, translations);
    console.log(`სიტყვა "${userInput}" დაემატა ლექსიკონში`);
  } else {
    console.log(`თარგმანი: ${translatedWord}`);
  }
}
while (true) {
  translateUserInput();
}