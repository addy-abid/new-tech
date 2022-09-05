/* exported capitalize */
function capitalize(word) {
  var lowerCasedString = word.toLowerCase();
  return lowerCasedString[0].toUpperCase() + lowerCasedString.substring(1);
}
