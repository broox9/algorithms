//Randomized Selection
function RSelect (arr, len, nth) {
  //base case
  if (len === 1) {
    return arr[0];
  }

  //choose pivot array, uniformly at random 
  //(the main point of the analysis is that random pivots work well enough)

  let new_index;  //new_index = partition arr around pivot

  let j = new_index;

  if (j == nth) {
    //jackpot
    return arr[j]
  }

  //hardest case
  if (j > nth) {
    //partition on the left of the pivot
    //still looking for nth//
    //arr length is j -1 
    RSelect(arr[0] ... arr[j-1], (j-1), nth)
  }

  if (j < nth ) {
    RSelect(arr[new_pivot] ... ar[len - 1], (len - j), (nth - j))
  }

}