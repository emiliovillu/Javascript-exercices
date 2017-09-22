// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

/* Way 1 */
function isVowel(letter) {
  if ((letter === 'a') || (letter === 'e') || (letter === 'i') || (letter === 'o') || (letter === 'u')) {
    return true
  }
  return false
}

/* Way 2 */

function isVowel(letter) {
  var vowels = ['a', 'e', 'i', 'o', 'u']
  var matchVowel = false
  for (var i=0; i<vowels.length; i++) {
    if (letter === vowel[i]) {
      matchVowel = true
    }
  }
  return matchVowel
}

/* Way 3 */

function isVowel(letter) {
  var vowels = ['a', 'e', 'i', 'o', 'u']
  if (vowels.indexOf(letter) === -1) {
    return false
  }
  return true

}

/* Way 4 */

function isVowel(letter) {
  return 'aeiou'.indexOf(letter) !== -1
}


/* Way 5 */

function isVowel(letter) {
  return /[aeiou]/.test(letter)
}

/* Way 6 */

function isVowel(letter) {
  return 'aeiou'.includes(letter)
}







