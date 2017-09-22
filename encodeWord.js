/* Define a function called encodeWord that receives a string and return
the codified version of that string replacing the following characters:

7 instead of T
4 instead of A
5 instead of S
0 instead of O */

function encodeWord (word) {
  var aWord = word.split('')
  var aEncodedWord = aWord.map(function (letter) {
    switch (letter) {
      case 't':
        return '7'
      case 'a':
        return '4'
      case 's':
        return '5'
      case 'o':
        return 0
      default:
        return letter
    }
  })
  return aEncodedWord.join('')
}
console.log(
  encodeWord('taso loca')
)
