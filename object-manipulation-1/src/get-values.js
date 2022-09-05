/* exported getValues */
function getValues(object) {
  var outPut = [];
  for (var values in object) {
    outPut.push(object[values]);
  }
  return outPut;
}
