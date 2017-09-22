/* Write a function filterLongWords() that takes an array of words and
an integer i and returns the array of words that are longer than i. */

function filterLongWords (arr, maxLength) {
  var aFilter = arr.filter(function (word) {
    return word.length > maxLength
  })
  return aFilter
}
console.log(
  filterLongWords(['paco', 'emilio', 'coche', 'motor'], 5)
)

/* function fliterLongWords (arr, i) {
  var nNumsWorld = arr.length
  var aLongerWord = []
  for (var i = 0; i < nNumsWorld; i ++) {
    if (arr[i] > i) {
      aLongerWord.push(arr[i])
    }
  }
  return aLongerWord
}
fliterLongWords(['paco', 'emilio', 'coche', 'motor'], 1) */
