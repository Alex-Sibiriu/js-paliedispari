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
  const reverseWord =  word.split('').reverse().join('');

    if (word.length < 2) {
      return elHTML.innerHTML = 'Inserisci una parola di almeno tre lettere';
    }

  return elHTML.innerHTML = word === reverseWord ? 'Palindromo' : 'Non è palindromo';
}

/***********************
      ODD OR EVEN
***********************/