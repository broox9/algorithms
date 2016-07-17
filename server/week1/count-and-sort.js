var inversions = [];
var inversionCount = 0;

function countAndSort(example) {
    if (example.length < 2) {
    return example;
  }
  
  var len = example.length;
  var midpoint = Math.ceil( len/2 );
  var one = example.slice(0, midpoint);
  var two = example.slice(midpoint);
  var recursedOne = countAndSort(one);
  var recursedTwo = countAndSort(two);

  return mergeAndCount(recursedOne, recursedTwo);
}

function mergeAndCount (one, two) {
  var i = 0, j = 0, k = 0;
  var output = [];

  while(one[i] !== undefined && two[j] !== undefined) {
    if (one[i] <= two[j]) {
      output[k] = one[i];
      i++;
    } else {
      output[k] = two[j];
      gatherInversions(k, two[j], one.slice(i));
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

  if (inversions.length) {
    // console.log('- inversions -', inversions);
    // console.log('- inversions.length -', inversions.length);
  }
  return output;
}

function gatherInversions(positions, rightValue, restOfLeft) {
  // restOfLeft.forEach(function(item) {
  //   inversions.push([item, rightValue]);
  // });
  inversionCount += restOfLeft.length

}

module.exports = {
  countAndSort: countAndSort,
  getInversions: function() {
    return inversionCount;
  }
}