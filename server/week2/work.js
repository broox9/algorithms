var quickSort = require('./quick-sort');
// var test_case = [3,2,1,8,5,4,7,6];
// var test_case = [3,1,9,2,14,8,11,5,10,4,12,7,6,13];
// var test_case = [3,8,1,2,5,4,7,6];
// var test_case = [3,8,2,5,1,4,7,6];
// var test_case = [1,8,7,6,5,4,3,2];

// var test_case = require('./data/qs_array.js');
var test_case = require('./data/qs_array_10k.js');

//Left Comparisons = 168733 // 158734 // 162080
//Right Comparisons = 169879 // 152503 // 158734
//Median Comparisons = 166677 // 126960 //156678

var  sort_left = 0;
var sort_right = test_case.length - 1;

console.time('running_quick_sort');
var sorted =  quickSort(test_case, sort_left, sort_right);
console.timeEnd('running_quick_sort');

console.log('\n\nSORTED ARRAY -> 0: %d, 499: %d, 999: %d, 9999: %d', sorted[0], sorted[499], sorted[999], sorted[9999]);
// console.log("Whole Array", sorted);


