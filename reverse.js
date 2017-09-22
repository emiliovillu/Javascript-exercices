/* Define a function reverse() that computes the reversal of a string.
For example, reverse("jag testar") should return the string "ratset gaj". */

/*
'e-m-i-l-i-o' ==> 'o-i-l-i-m-e'
 0 1 2 3 4 5 	   0 1 2 3 4 5 

word[0] ==> word[5]
*/

function reverse (word) {
	var result = ''
	for (var i = word.length - 1; i >= 0; i--) {
		result += word[i]
	}
	return result
}
reverse('emilio')

function palindromo (word){
	var inrvestWord = reverse(word)
	var result = ''
		for (var i = 0; i < word.length; i++) {
			result += word[i]
			if (result === inrvestWord) {
				return 'ES UN PALINDORMO'
			} else {
		return 'NO ES UN PALINDORMO'
	}
	}
}
palindromo('ana')