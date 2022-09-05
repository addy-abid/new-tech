/* exported reverseWord */
function reverseWord(word) {
  var outPut = '';
  for (var i = word.length - 1; i >= 0; i--) {
    console.log(word[i]);
    outPut += word[i];
  }
  return outPut;
}
