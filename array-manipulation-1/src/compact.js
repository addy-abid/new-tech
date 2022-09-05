/* exported compact */
function compact(array) {
  var outPut = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      outPut.push(array[i]);
    }
  }
  return outPut;
}
