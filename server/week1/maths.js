var mergeSort = require('./merge-sort');

var tests = [9, 12, 32, 100, 1024]

tests.forEach(function(n) {
  mathMe(n);
})




// version 4, which i suspect is version 1
function mathMe(n) {
  
  var a = Math.sqrt(n);
  console.log('A - ', a);
  
  var b = Math.pow(10, n);
  console.log('B - ', b)
  
  var c = Math.pow(n, 1.5)
  console.log('C - ', c)

  var d = Math.pow(2, Math.sqrt(Math.log2(n)));
  console.log('D - ', d)

  var e = Math.pow(n, 2.5);
  console.log('E - ', e);

  console.log('\n---------------\n')

}

//version 3
// function mathMe(n) {
  
//   var a = Math.pow(2, Math.pow(2, n));
//   console.log('A - ', a);
  
//   var b = Math.pow(2, Math.pow(n, 2));
//   console.log('B - ', b)
  
//   var c = (Math.pow(n, 2) * Math.log2(n));
//   console.log('C - ', c)

//   var d = n;
//   console.log('D - ', d)

//   var e = Math.pow(n, Math.pow(2, n));
//   console.log('E - ', e);

//   console.log('\n---------------\n')

// }


// = version 2
// function mathMe(n) {
  
//   var a = Math.pow(2, Math.log2(n));
//   console.log('A - ', a);
  
//   var b = Math.pow(2, a);
//   console.log('B - ', b)
  
//   var c = Math.pow(n, 2.5);
//   console.log('C - ', c)

//   var d = Math.pow(2, Math.pow(n, 2));
//   console.log('D - ', d)

//   var e = Math.pow(n, 2) * Math.log2(n);
//   console.log('E - ', e);

//   console.log('\n---------------\n')

// }


