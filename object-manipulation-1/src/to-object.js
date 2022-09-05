/* exported toObject */
function toObject(keyValuePair) {
  var key = keyValuePair[0];
  var value = keyValuePair[1];
  var obj = {};
  obj[key] = value;
  return obj;
}
