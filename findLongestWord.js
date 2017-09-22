/*Write a function findLongestWord() that takes an array of words and 
returns the length of the longest one.*/

function findLongestWord (arr) {
	var lengthWord = 0
	for (var i = 0; i < arr.length; i++){
		if (arr[i].length > lengthWord){
			lengthWord = arr[i].length
		}
	}
	return lengthWord
}
findLongestWord(['paco', 'emilio', 'coche', 'motor'])


/*.....................................................
 como 
*/



function valueLongstWord (findLongestWord(arr)){
	var valueLongs = arr[findLongestWord (arr)]
	return valueLongs
}
valueLongstWord(findLongestWord(['paco', 'emilio', 'coche', 'motor']))