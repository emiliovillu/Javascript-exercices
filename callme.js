function getCallMe() {
  var numCalls = 0
  return function() {
    return ++numCalls
  }
}

var callMe = getCallMe()
console.log(callMe())
console.log(callMe())


/*............................
   OTRO EJEMPLO DE CLOUSER
..............................*/
var callMe = function(){
  var count = 0
  return function(){
	return ++count
  }
}
callMe()
/*...................................
   OTRA FORMA DE REALIZAR UN CLOUSER
.....................................*/

function callMe() {
    var numCalls = 0
    callMe = function() {
     return ++numCalls
    }
    return callMe()
}
callMe()

/*...........................
   EJEMPLO DE CLOUSER
...........................*/   
function f() {
  var a = 1
  function n() {
    var b = 2
    function g (){
      var c = 5
      return a + b + c
    }
    return g()
  }
  return n()
} 
f()