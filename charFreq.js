/* Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it.
Represent the frequency listing as a Javascript object.
Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab"). */

function charFreq (message) {
  var aMessage = message.split('')
    var nFreq = aMessage.reduce(function (acc, vowel) {
      if (!acc[vowel]) {
        acc[vowel] = 1
      } else {
        acc[vowel] += 1
      }
      return acc
    }, {})
  return nFreq
}

console.log(
  charFreq('abbabcbdbabdbdbabababcbcbab')
)
