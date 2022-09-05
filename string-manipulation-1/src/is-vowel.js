/* exported isVowel */
function isVowel(char) {
  var vowels = ['A', 'a', 'E', 'e', 'I', 'i', 'O', 'o', 'U', 'u'];
  for (var i = 0; i < vowels.length; i++) {
    var eachVowel = vowels[i];
    if (char === eachVowel) {
      return true;
    }
  }
  return false;
}
