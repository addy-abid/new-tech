/**
 * find balanced brackets
 * example input: correct: '()', '[{}]',"function() { console.log() }"
 *                incorrect: '[(])'
 *
 * given a string
 * contains one or many brackets
 * check if brackets are balanced
 * if string contains opening bracket
 *  - next bracket should be of same type/closing bracket
 * otherwise return false
 * look at each character in the string
 * find where there is a "{", "(", "[", ")", "}", "]"
 * if closing (")", "}", "]") is found before opening
 *  return false
 *
 * if closing bracket is
 *
 * when you find a closing
 *
 */
// [({})] if closed bracket,

function isBalanced(string) {
  var stack = [];
  for (let i = 0; i < string.length; i++) {
    var char = string[i];
    if (isOpeningBracketr(char)) {
      stack.push(char);
    }
    if (isClosingBracket(char)) {
      var lastOpenBracket = stack.pop();
      if (!isPair(lastOpenBracket, char)) {
        return false;
      }
    }
  }
  if (stack.length) {
    return false;
  }
  return true;
}

function isOpeningBracketr(string) {
  return string === '{' || string === '(' || string === '[';
}

function isClosingBracket(string) {
  return string === '}' || string === ')' || string === ']';
}

function isPair(a, b) {
  if (a === '(') {
    return b === ')';
  } else if (a === '{') {
    return b === '}';
  } else if (a === '[') {
    return b === ']';
  } else {
    return false;
  }
}

console.log(isBalanced('[[[]]]'));
