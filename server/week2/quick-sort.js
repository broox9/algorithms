module.exports = quickSort;

var recursionCount = 0;
var comparisonTotal = 0;

function quickSort(arr, left, right) {
  if ((right - left) <= 1 || right >= arr.length) {
    return arr;
  }

  if (recursionCount > 0 ) {
    comparisonTotal += right - left;
  }

  recursionCount++;

  //LEFT
  // var pivot = choosePivotLeft(left, right);
  // var new_left = partition(arr, pivot, right);
  // quickSort(arr, new_left, right);
  // quickSort(arr, left, new_left - 1);

  //RIGHT
  // swap(arr, left, right);
  // var new_left = partitionR(arr, left, right);
  // quickSort(arr, left, new_left - 1);
  // quickSort(arr, new_left, right);

  // RANDOMIZED
  var pivot = choosePivotMedian(left, right, arr);
  swap(arr, left, pivot);
  var new_left = partition(arr, left, right);
  quickSort(arr, left, new_left - 1);
  quickSort(arr, new_left, right);

  console.log('Comparisons: %d -> %d ', comparisonTotal, recursionCount);
  return arr;
}

function choosePivotLeft (l,r) {
  return l;
}

function  choosePivotMedian (l, r, arr) {
  var left = l;
  var leftCounter = l;
  var right = r;
  var medianIndex = l; //Will overright
  var medianIndexArray = [];

  while (leftCounter <= right && arr[leftCounter] != undefined) {
    medianIndexArray.push({
      index: leftCounter,
      value: arr[leftCounter]
    });

    leftCounter++;
  }

  var len = medianIndexArray.length;

  if (len %2) {
    medianIndex = (len - 1) / 2
  } else if (len == 2) {
    medianIndex = 0;
  } else {
    medianIndex = (len/2) - 1
  }

  return getMeanOf3([
    medianIndexArray[0],
    medianIndexArray[medianIndex],
    medianIndexArray[len-1]
  ]);
}


function partition(arr, left, right) {
  var pivotValue = arr[left];
  var i = left + 1;

  for (var j = left + 1; j <= right; j++) {
    if (arr[j] < pivotValue) {
      swap(arr, i, j);
      i++;
    }
  }

  swap(arr, left, (i - 1));
  return i;
}


// function partition(arr, left, right) {
//   var pivotValue = arr[left];
//   var i = left + 1;
//   var j = left + 1;

//   while (j <= right) {
//     if (arr[j] && arr[j] < pivotValue) {
//       swap(arr, i, j);
//       i++;
//     }
//     j++;
//   }

//   swap(arr, left, (i - 1));
//   return i;
// }

function partitionR(arr, left, right) {
  var pivotValue = arr[left];
  var i = left + 1;
  var j = left + 1;

  while (j <= right) {
    if (arr[j] && arr[j] < pivotValue) {
      swap(arr, i, j);
      i++;
    }
    j++;
  }

  swap(arr, left, (i - 1));
  return i - 1;
}


function getMeanOf3(idxArr) {
  idxArr.sort(function(a, b) { return a.value - b.value});
  return idxArr[1].index;
}

function swap(arr, a, b) {
  var c = arr[a];
  arr[a] = arr[b];
  arr[b] = c;
}
