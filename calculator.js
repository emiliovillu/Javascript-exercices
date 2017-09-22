/*Define a function called calculator that receives an operation and two numbers and returns 
  the result of the operation applied to the values passed as parameters*/

function calculator (operation, a, b) {
	if (operation === 'suma') {
	  return a + b
	}
	if (operation === 'resta') {
	  return a - b
	}
	if (operation === 'multiplicacion') {
	  return a * b
	}
	if (operation === 'division') {
	  return a / b
	}
}
calculator('suma', 3, 5)

/* ......................................... */
    // CALCULADORA USANDO UN CLOUSER
 /* .......................................... */

function calculator(num1){
return function numbers2(num2){
	return function operation(operation){
		if (operation === 'sum'){
			return num1 + num2
		}
		if (operation === 'rest'){
			return num1 - num2
		}
		if (operation === 'multi'){
			return num1 * num2
		}
		if (operation === 'div') {
			return num1 / num2
		}
	}
}
}
calculator(num1)(num2)(operation)