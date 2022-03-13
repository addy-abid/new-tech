/* exported makeArrayConsecutive */
/**
 * make array consecutive
 * for array, const arr =  [1, 2, 5], find how many integers are needed
 * to make numbers consecutive to the highest number
 *
 * steps:
 * set all integers in numerical order
 * look at each value in array
 * if int after current value = current value + 1,
 * continue
 * otherwise,
 * add 1
 */

const makeArrayConsecutive = array => {
  // const orderedArray = array.sort();
  var count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i + 1] !== array[i] + 1) {
      count++;
    }
  }
  return count;
};
