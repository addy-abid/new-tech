/* exported getKeys */
function getKeys(object) {
  var outPut = [];
  for (var keys in object) {
    outPut.push(keys);
  }
  return outPut;
}
