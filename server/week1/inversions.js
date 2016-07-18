var example = require('./_data/big_array');
// var example = [0,3,5,2,4,8]; // 3 inversions
// var example = [1,2,8,4,5,3,9] //5 inversions
// var example = ['k', 'a', 'e', 'i', 'o', 'u', 'y']; // 3 inversions
var mergeSort = require('./merge-sort');
var countAndSort = require('./count-and-sort').countAndSort;
var getInversions = require('./count-and-sort').getInversions;

console.time('merge_sort_time');
var output = mergeSort(example);
console.timeEnd('merge_sort_time');
var len = output.length;

console.log("\n\n\nArray", 
output.length, 
'--',
output[0], 
output[1], 
'...',
output[Math.ceil(len /2)],
'...',
output[len - 1]
);

console.time('inversions_time');
var inversions = countAndSort(example);
console.timeEnd('inversions_time');

console.log('\n\n\nInversions: ', getInversions());
