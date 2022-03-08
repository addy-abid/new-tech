/**
 *
 * given array of integers, find the pair of elements that produce
 * the larget product and return that product
 */

function adjacentElements(array) {
  var storage = [];
  for (var i = 0; i < array.length - 1; i++) {

    storage.push(array[i] * array[i + 1]);

  }
  return Math.max(...storage);
}
adjacentElements();
