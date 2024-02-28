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

  let wordL = word.toLowerCase();

  elHTML.classList.remove('d-none')
  if (wordL.length < 3) {
    return elHTML.innerHTML = 'ATTENZIONE! Inserisci una parola di almeno tre lettere';
  }

  for (let i = 0; i < wordL.length/2 ; i++) {
  if (wordL[i] !== wordL[word.length - 1 - i]) {
    return elHTML.innerHTML = 'Non è palindroma';
  }}

  elHTML.innerHTML = 'È palindroma'
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
  let messageColor;

  if ((userChoice.toLowerCase() !== 'pari') && (userChoice.toLowerCase() !== 'dispari')) {

    messageColor = 'text-warning';
    gameMessage.innerHTML = 'ATTENZIONE! Inserisci "pari" o "dispari"'

  } else if ((userNumber < 1) || (userNumber > 5) || (isNaN(userNumber))) {

    messageColor = 'text-warning';
    gameMessage.innerHTML = 'ATTENZIONE! Il numero che hai inserito non è valido, inserisci un numero da 1 a 5'

  } else if (result === userChoice.toLowerCase()) {

    messageColor = 'text-success';
    gameMessage.innerHTML = 
    `
    Tu hai scelto ${userNumber} mentre il PC ha scelto ${pcNumber} <br>
    il risultato è ${sum}, ${result}.<br>
    HAI VINTO!
    `
  } else {

    messageColor = 'text-danger';
    gameMessage.innerHTML = 
    `
    Tu hai scelto ${userNumber} mentre il PC ha scelto ${pcNumber} <br>
    il risultato è ${sum}, ${result}.<br>
    HAI PERSO!
    `
  }
  
  gameMessage.classList.remove('text-success', 'text-danger', 'text-warning');
  gameMessage.classList.add(messageColor);
  gameMessage.classList.remove('d-none')
})

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function oddOrEven(number) {
  return number % 2 ? 'dispari' : 'pari';
}