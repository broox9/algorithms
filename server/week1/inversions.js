var example = require('./_data/big_array');
// var example = [0,3,5,2,4,6];
var mergeSort = require('./merge-sort');

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
