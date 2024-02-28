/***********************
      PALINDROME
***********************/
const inputWord = document.getElementById('user-word');
const btnPalindrome = document.getElementById('btn-palindrome');
const palindromeResult = document.getElementById('palindrome-result');

btnPalindrome.addEventListener('click', function() {
  const userWord = inputWord.value;

  isPalindromeWord(userWord, palindromeResult);
})

function isPalindromeWord(word, elHTML) {
  
  if (word.length < 3) {
    return elHTML.innerHTML = 'ATTENZIONE! Inserisci una parola di almeno tre lettere';
  }
  
  const reverseWord =  word.split('').reverse().join('');

  return elHTML.innerHTML = word === reverseWord ? 'Palindromo' : 'Non è palindromo';
}

/***********************
      ODD OR EVEN
***********************/
const inputNumber = document.getElementById('user-number');
const inputChoice = document.getElementById('user-choice');
const btnPlay = document.getElementById('play');
const gameMessage = document.getElementById('winner');

btnPlay.addEventListener('click', function(){
  const userNumber = parseInt(inputNumber.value);
  const userChoice = inputChoice.value;
  const pcNumber = randomNumber(1, 5);
  const sum = userNumber + pcNumber;
  const result = oddOrEven(sum)

  console.log(userChoice);

  if ((userChoice.toLowerCase() !== 'pari') && (userChoice.toLowerCase() !== 'dispari')) {

    gameMessage.innerHTML = 'ATTENZIONE! Inserisci "pari" o "dispari"'

  } else if ((userNumber <= 0) || (userNumber > 5)) {

    gameMessage.innerHTML = 'ATTENZIONE! Il numero che hai inserito non è valido, inserisci un numero da 1 a 5'

  } else if (result === userChoice) {

    gameMessage.innerHTML = 
    `
    Tu hai scelto ${userNumber} mentre il PC ha scelto ${pcNumber} <br>
    il risultato è ${result} <br>
    HAI VINTO!
    `
  } else {

    gameMessage.innerHTML = 
    `
    Tu hai scelto ${userNumber} mentre il PC ha scelto ${pcNumber} <br>
    il risultato è ${result} <br>
    HAI PERSO!
    `
  }
  
})

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function oddOrEven(number) {
  return number % 2 ? 'dispari' : 'pari';
}