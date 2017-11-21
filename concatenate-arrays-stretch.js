// merge2 arrays and sort them
function merge(array1, array2) {
  var mainList = [];

  // conditional statements to handle base cases
  // should be in separate function but lazy
  if (array1.length < 1) {
    if (array2.length < 1) {
      return mainList;
    } else {
      return array2;
    }

  } else if (array2.length < 1) {
    return array1;
  }

  else {

    for (var i = 0; i < array1.length; i++) {
      mainList.push(array1[i]);
    }

    for (var j = 0; j < array2.length; j++) {
      mainList.push(array2[j]);
    }
  }

  // console.log(mainList);

  return sortArray(mainList);
}

function sortArray(mainArray) {
  var temp = 0;
  var j = 0;

  //sort using insertion sort

  // traverse the list
  for (var currIdx = 1; currIdx < mainArray.length; currIdx++) {
    // save the current idx value
    temp = mainArray[currIdx];
    // set counter 'j' as to define the outer range to conduct sort
    j = currIdx;

    // if j reaches 0, then the comparison mainArray[j - 1] will be out of index.
    // loop will short circuit if that conditional is false
    while (j > 0 && mainArray[j - 1] > mainArray[j]) {
      // swap is performed
      mainArray[j] = mainArray[j - 1];
      mainArray[j - 1] = temp;
      j--;
    }

  }

  return mainArray;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]));
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
console.log(merge([ 9, 8, 7, 6, 5 ], [ 4, 3, 2, 1, 0 ]), "=?", [ 0, 1, 2, 3, 4, 5, 6 ,7 ,8 ,9 ]);