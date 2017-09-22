//Define a function called ​isBoolean​ that receives a value and return true if the value received is a boolean

function isBoolean (bool) {
  if (typeof bool === 'boolean'){
  	return true
  } else {
  	return false
  }
}
isBoolean()