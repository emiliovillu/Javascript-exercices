/*Define a function called ​getFullName​ that receives a name and a surname and return 
the string "Your full name is " with the name & surname concatenated*/

function getFullName (greeting){
	return function (name){
		return function (surname) {
			return greeting + ', ' + name + ' ' + surname
		}
	}
}
getFullName('Your full name is')('Emilio')('Villuendas')