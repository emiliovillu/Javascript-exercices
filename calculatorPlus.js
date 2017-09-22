/*Define a function called calculator that receives an operation and several numbers 
(can be 2 or 10 or whatever) returns the result of the operation applied to the values passed as 
parameters
*/


function calculatorPlus(){
    var i, res = arguments[1];
    var operation = arguments[0]
    var number_of_params= arguments.length;
    for (i = 2; i < number_of_params; i++) {

      if(operation === 'sum') {
	       res += arguments[i];
      }

      if(operation === 'rest') {
	       res -= arguments[i];
      }

      if(operation === 'mult') {
        res *= arguments[i];
      }

      if(operation === 'div') {
	      res /= arguments[i];
      }

    }

    return res;
}
calculatorPlus ('sum', 1, 2, 3, 5)