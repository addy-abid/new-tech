/**
 * find the area of a polygon for a given n.
 * given constraints:
 * input int: 1 <= n < 10^4
 * using pow property of math object for exponents
 */

function shapeArea(n) {
  if (n >= Math.pow(10, 4) || n < 1) {
    return false;
  }
  return (Math.pow(n, 2) + Math.pow((n - 1), 2));
}
shapeArea();
