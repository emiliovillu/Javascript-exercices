function doThings() {

  calculation(sum,3,5)
  calculation(multiplication,3,5)
  calculation(function(a,b){ return a-b},3,5)
  calculation(sum)
  calculation(multiplication)

  function calculation(operation, a, b) {
    // if (a === undefined) { a = 10 }
    // if (b === undefined) { b = 10 }
    var a = a || 10
    var b = b || 10
    operation(a,b)
  }

  // function sum(a,b) { return a+b; }
  // function multiplication(a,b) { return a*b; }

  var sum = function(a,b) { return a+b; }
  var multiplication = function(a,b) { return a*b; }
  
}