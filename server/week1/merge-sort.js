var recursionCount = 0;
var inversions = []

function mergeSort(example) {
  if (example.length < 2) {
    return example;
  }
  
  recursionCount++;
  
  var len = example.length;
  var midpoint = Math.ceil( len/2 );
  var one = example.slice(0, midpoint);
  var two = example.slice(midpoint);

  // console.log(one, two);
  // console.log('recursive steps:', recursionCount);
  // console.log("\n\Recursive Count: %d, array length [%d, %d]",
  //   recursionCount, one.length, two.length
  // );
  var recursedOne = mergeSort(one);
  var recursedTwo = mergeSort(two);

  return merge(recursedOne, recursedTwo);
}

function merge (one, two) {
  var i = 0, j = 0, k = 0;
  var output = [];

  while(one[i] !== undefined && two[j] !== undefined) {
    if (one[i] <= two[j]) {
      output[k] = one[i];
      i++;
    } else {
      output[k] = two[j];
      j++;
    }
    k++;
  }

  while(one[i] !== undefined) {
    output[k] = one[i];
    i++;
    k++;
  }

  while(two[j] !== undefined) {
    output[k] = two[j];
    j++;
    k++;
  }

  return output;
}

module.exports = mergeSort;
