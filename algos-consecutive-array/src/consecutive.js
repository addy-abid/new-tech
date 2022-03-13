/* exported makeArrayConsecutive */
/**
 * make array consecutive
 * for array, const arr =  [1, 2, 5], find how many integers are needed
 * to make numbers consecutive to the greatest number
 */

const makeArrayConsecutive = array => {
  const orderedArray = [...array];
  orderedArray.sort();
  let count = 0;
  for (let i = 0; i < orderedArray.length; i++) {
    if (orderedArray[i + 1] - orderedArray[i] > 1) {
      count += orderedArray[i + 1] - orderedArray[i] - 1;
    }
  }

  return count;

};
