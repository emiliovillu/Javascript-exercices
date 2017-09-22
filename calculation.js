// Write a program that writes in the console all the multiples of 23 less than 500 and at the end writes the sum of all of them

function calculation () {
  var numbers = ''
  var sum = 0
  for (var i = 23; i <= 500; i += 23) {
    numbers += i + ' '
    sum += i
  }
  console.log('Numbers are = ' + numbers)
  console.log('Total sum is = ' + sum)
}

calculation()
