function concat(array1, array2) {
  var mainList = [];

  for (var i = 0; i < array1.length; i ++) {
    mainList.push(array1[i]);
  }

  for (var j = 0; j < array2.length; j ++) {
    mainList.push(array2[j]);
  }

  return mainList;

}