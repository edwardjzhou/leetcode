365. Water and Jug Problem
Medium

256

682

Add to List

Share
You are given two jugs with capacities x and y litres.There is an infinite amount of water supply available.You need to determine whether it is possible to measure exactly z litres using these two jugs.

If z liters of water is measurable, you must have z liters of water contained within one or both buckets by the end.

Operations allowed:

Fill any of the jugs completely with water.
Empty any of the jugs.
Pour water from one jug into another till the other jug is completely full or the first jug itself is empty.
    Example 1: (From the famous "Die Hard" example)

Input: x = 3, y = 5, z = 4
Output: True
Example 2:

Input: x = 2, y = 6, z = 5
Output: False
/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function(x, y, z) {
    if ( z > x+y) return false
    if (!z) return true
    if (z % gcd(x,y) === 0) return true
    return false
};

// a= 2 b =6
// b =2 a = 6
//  b= 0 a= 2
let gcd = (a, b) => {
    while (b) {
        [a, b] = [b, a % b]
    }
    return a
}