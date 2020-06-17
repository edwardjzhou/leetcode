// 1011. Capacity To Ship Packages Within D Days
// Medium

// 991

// 31

// Add to List

// Share
// A conveyor belt has packages that must be shipped from one port to another within D days.

// The i - th package on the conveyor belt has a weight of weights[i].Each day, we load the ship with packages on the conveyor belt(in the order given by weights).We may not load more weight than the maximum weight capacity of the ship.

// Return the least weight capacity of the ship that will result in all the packages on the conveyor belt being shipped within D days.



//     Example 1:

// Input: weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], D = 5
// Output: 15
// Explanation:
// A ship capacity of 15 is the minimum to ship all the packages in 5 days like this:
// 1st day: 1, 2, 3, 4, 5
// 2nd day: 6, 7
// 3rd day: 8
// 4th day: 9
// 5th day: 10

// Note that the cargo must be shipped in the order given, so using a ship of capacity 14 and splitting the packages into parts like(2, 3, 4, 5), (1, 6, 7), (8), (9), (10) is not allowed.
//     Example 2:

// Input: weights = [3, 2, 2, 4, 1, 4], D = 3
// Output: 6
// Explanation:
// A ship capacity of 6 is the minimum to ship all the packages in 3 days like this:
// 1st day: 3, 2
// 2nd day: 2, 4
// 3rd day: 1, 4
// Example 3:

// Input: weights = [1, 2, 3, 1, 1], D = 4
// Output: 3
// Explanation:
// 1st day: 1
// 2nd day: 2
// 3rd day: 3
// 4th day: 1, 1

/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */

// this is irrelvant because model solution uses binary search; thinking of it as permutations is slow:
// how many ways to divide 4 elements into 2 contiguous subarrays [1,2],[3,4]; [1],[2,3,4]; [1,2,3],[4]  2,2 3,1 1,3
// 3! /(2!1!) order matters, no replacement, 2 types？ not too sure if this is combinations or perms or the details there are number of spots w limited 2 chocies
// permutations to put in dividers. we need D-1 dividers with weights-1 positions to stick them into  [1,SPOT,2,SPOT,3]
// empty spots + placed day divider spots = weights-1
// (weights-1) ^2-ish solution? assuming that you have unlimited day divdiers to place obv
// to be preciser: (weights-1)! / ( (days-1)! * ( (weights-1) - (days-1) )! )  which should be smaller than weights^2
// that should be  larger than  O(n * (maxcap-mincap)) w bsearch
// we MINIMIZE the weight limit over D days. AKA MINIMIZE the max subarray sum in between dividers

//model solution w bsearch
var shipWithinDays = function(weights, D) {
    //we can bound our solution a little
    let minCap = Math.max(...weights) //(capacity needed if we had weights.length days)
    let maxCap = weights.reduce( (acc,ele) => acc+ele ) //(capacity needed if we only get 1 day)
    let capacity

    
    // we end up playing with a guessed capacity and see what happens as we play through loading the weights using that GUESSEd capacity OVER and OVER 
    // smartly with bsearch; this is like a bounded simulation
    
    // based off feedback we change our guess
    // days needed for this particular GUESSED CAPACITY tells us whether to reduce or increase GUESSED CAPACITY
    
    while (minCap < maxCap) {
        capacity = minCap + maxCap >> 1
        let runningsum = 0
        let days = 1
        for (const weight of weights) {
             if (runningsum + weight > capacity) {
                days++
                runningsum = 0
             }
            runningsum += weight
        }

        if (days <= D) { //reduce guessed capacity
            maxCap = capacity
        } else if (days > D) { //increase guessed capacity
            minCap = capacity + 1
        }
    }
    return maxCap // if we were too cavalier... maxcap and mincap were last guaranteed to be valid so even if recent rendition of capacity is wrong were good
    
};

// Explanation of this solution:

// The key is left = max(weights), right = sum(weights),
// which are the minimum and maximum possible weight capacity of the ship.

// Therefore the question becomes Binary Search to find the minimum weight capacity of the ship between left and right.
// We start from
// mid = (left + right) / 2 as our current weight capacity of the ship.
// need = days needed == 1
// cur = current cargo in the ship == 0

// Start put cargo into ship in order.
// when need > D, it means the current ship is too small, we modify left = mid + 1 and continue
// If all the cargo is successfully put into ships, we might have a chance to find a smaller ship, so let right = mid and continue.
// Finally, when our left == right, we reach our answer
    
    

