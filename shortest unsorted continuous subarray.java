// 581. Shortest Unsorted Continuous Subarray
// Easy

// 2357

// 121

// Add to List

// Share
// Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.

// You need to find the shortest such subarray and output its length.

// Example 1:
// Input: [2, 6, 4, 8, 10, 9, 15]
// Output: 5
// Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
// Note:
// Then length of the input array is in range [1, 10,000].
// The input array may contain duplicates, so ascending order here means <=.

// this is basically: how many spots were in the exact correct spot coming in from the left and right? (perfectly ordered spots stuck between bad parts are bad because this is a subarray problem)
// class Solution {
//     public int findUnsortedSubarray(int[] nums) {
//         int length = nums.length;
//         int[] sorted = nums.clone();
//         Arrays.sort(sorted);

//         int left = 0;
//         int right = length - 1;
        
//         while (left < length && nums[left] == sorted[left]) left++;
//         while (right > left && nums[right] == sorted[right]) right--;

//         // System.out.println(Arrays.toString(nums));
//         return right - left + 1;
//     }
// }


// better way is to just FIND WHERE the arrays STOPPED BEING WRONG (in absolute ordered set ordering) and thus were FINALLY GUARANTEED TO BE CORRECT 

class Solution {
    public static void main(String[] args) {
        int[] test = {2, 6, 4, 8, 10, 9, 15};
        
        System.out.println(Solution.findUnsortedSubarray(test));
        // Solution solution = new Solution();
        // System.out.println(solution.findUnsortedSubarray(test) );
    }

    public static int findUnsortedSubarray(int[] nums) {
        int max = Integer.MIN_VALUE;
        int min = Integer.MAX_VALUE;
        
        int right = 0; //last wrong index going left to right; the left = 1 is arbitrary for the case where right and left never get re-defined
        int left = 1; //last wrong index going right to left
        
        
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] < max) right = i;
            else max = nums[i];
        }
        
        for (int j = nums.length - 1; j >= 0; j--) {
            if (nums[j] > min) {
                left = j;
            } else {
                min = nums[j];
            }
        }
        // right = 5 , left = 1 
        // correct = ( lastvalididx - right ) + (left) = 2
        // wrong = length - correct = 5
        // lastvalididx = length-1 = 6
        // wrong = length - ( ( length -1 - right) + left) = 1+ right - left
        return 1 + right - left;
    }
}