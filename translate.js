/* Write a function translate() that will translate a text into "rövarspråket".
That is, double every consonant and place an occurrence of "o" in between.
For example, translate("this is fun") should return the string "tothohisos isos fofunon". */

function translate (message) {
  var vowels = ['a', 'e', 'i', 'o', 'u', '']
  var aMessage = message.split('')
  var aTranslate = aMessage.map(function (letter) {
    var isVowel = vowels.some(function (vowel) {
      return letter === vowel
    })
    if (isVowel) {
      return letter
    }

    return letter + 'o' + letter
  })
  return aTranslate.join('')
}

console.log(
  translate('this is fun')
)
// ---------------------------------------------------------
// EL MISMO EJERCICIO PERO UTILIZANDO UNA EXPRESION REGULAR
// ---------------------------------------------------------
function translate (message) { 
  return message.replace(/[b-df-hj-np-tv-z]/g, '$&o$&')
}
translate('this is fun')
