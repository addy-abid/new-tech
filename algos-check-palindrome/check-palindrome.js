/**
 * given a string - Check if it is a palindrome
 */
function checkPalindrome(string) {
  var reversedString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  if (reversedString === string) {
    return true;
  }
  return false;
}
checkPalindrome();
