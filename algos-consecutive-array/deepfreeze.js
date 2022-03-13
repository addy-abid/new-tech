/* exported deepFreeze */
function deepFreeze(value) {
  Object.getOwnPropertyNames(value).forEach(function (key) {
    if (value[key] != null &&
      typeof value[key] === 'object' &&
      !Object.isFrozen(value[key])) {
      deepFreeze(value[key]);
    }
  });
  return Object.freeze(value);
}
