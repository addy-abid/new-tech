/* exported reverse */
function reverse(array) {
  var outPut = [];
  for (var i = array.length - 1; i >= 0; i--) {
    outPut.push(array[i]);
  }
  return outPut;
}
