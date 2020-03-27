912. Sort an Array
Medium

293

204

Add to List

Share
Given an array of integers nums, sort the array in ascending order.

 

Example 1:

Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Example 2:

Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
 

Constraints:

1 <= nums.length <= 50000
-50000 <= nums[i] <= 50000
/**
 * @param {number[]} nums
 * @return {number[]}
 */



// function sortArray(nums){ // 7796 ms faster than 5%  39.5 mb less than 100% memory
//     return bubblesort(nums)
    
//     function bubblesort(array){ 
//         let finished = false
//         while (!finished) {
//             finished = true
//             for (let i = 0; i < array.length - 1; i++){
//                 if (array[i] > array[i+1]) {
//                     [array[i+1], array[i]] = [array[i], array[i+1]]
//                     finished = false
//                 }
//             }
//         }
//         return array
//     }
// }

// function sortArray(nums){ // 3032 ms faster than 8.85% 40.6 mb less than 100% memory
//     return insertionsort(nums)
    
//     function insertionsort(array){
//         let j
//         for (let i = 0; i < nums.length - 1; i++){
//             j = i + 1
//             while (j > 0 && array[j] < array[j-1]){
//                 [array[j], array[j-1]] = [array[j-1], array[j]]
//                 j--
//             }
//         }
//         return array
//     }
// }

// function sortArray(nums){ // 1284 ms faster than 12.07% 40.1 mb less than 100% memory
//     function selectionSort(array){
//         let min = Infinity
//         let minindex = null
//         for (let i = 0; i < array.length; i++) {
//             for (let j = i; j < array.length; j++) {
//                 if (min > array[j]) {
//                     min = array[j]
//                     minindex = j
//                 }
//             }
//             [array[i], array[minindex]] = [min, array[i]]
//             min = Infinity
//         }
//         return array
//     }
//     return selectionSort(nums)
// }

// function sortArray(nums) { // 164 ms faster than 30% 52.4 mb less than 42%
//     return mergesort(nums)
    
//     function mergesort(array){
//         if (array.length === 1) return array
//         let mid = array.length >> 1
//         let left = mergesort(array.slice(0, mid))
//         let right = mergesort(array.slice(mid))
//         return merge(left, right)
//     }
    
//     function merge(left, right){
//         let answer = []
//         while (left.length && right.length) {
//             if (left[0] < right[0]) answer.push(left.shift())
//             if (left[0] >= right[0]) answer.push(right.shift())
//         }
//         return [...answer, ...left, ...right]   
//     }
// }

// function sortArray(nums) { // 112 ms faster than 68.28% memory used 54.3 mb less than 42.86%
    
//     function quicksort(array){
//         if (array.length < 2) return array
//         let pivot = Math.floor(Math.random() * array.length)
//         let smalls=[] 
//         let larges=[]
//         let sames =[]
//         for (let i = 0; i < array.length; i++){    
//             if (array[pivot] > array[i]) {
//                 smalls.push(array[i])
//             } else if (array[pivot] < array[i]) {
//                 larges.push(array[i])
//             } else {
//                 sames.push(array[i])
//             }
//         }
//         return [...quicksort(smalls), ...sames, ...quicksort(larges)]
//     }
    
//     return quicksort(nums)
// }

// function sortArray(nums){ //108 ms faster than 74% 40.5 mb memory less than 100%
//     return heapsort(nums)
//     function heapsort(nums){
//         let length = nums.length
//         for (let i = length - 1; i >= 0; i--) {
//             heapify(nums, length, i)
//         }

//         for (let i = length - 1; i >= 0; i--) {
//             swap(nums, i, 0)
//             heapify(nums, i, 0)
//         }
//         return nums
//    }
    
//     function heapify(array, n, i){
//         let leftidx = 2*i + 1
//         let rightidx = 2*i + 2
//         let left = array[leftidx]
//         let right = array[rightidx]
//         if (leftidx >= n) left = -Infinity
//         if (rightidx >= n ) right = -Infinity
//         if (array[i] > left && array[i] > right) return
//         let swapidx
//         if (left < right) {
//             swapidx = rightidx
//         } else {
//             swapidx = leftidx
//         }
//         swap(array, i, swapidx)
//         heapify(array, n, swapidx)
//     }

//     function swap(array, i, j){
//         [array[i], array[j]] = [array[j], array[i]]
//     }
// }
 


// function sortArray(nums){ //104 ms faster than 78.16% , 55.7 mb less than 14%
//     return radixSort(nums)
//     function radixSort(arr) {
//        const maxNum = Math.max(...arr) * 10;
//        let divisor = 10;
//        while (divisor < maxNum) {
//           // Create bucket arrays for each of 0-9
//           let buckets = [...Array(10)].map(() => []);
//           // For each number, get the current significant digit and put it in the respective bucket
//           for (let num of arr) {
//               try{
//              buckets[Math.floor((num % divisor) / (divisor / 10))].push(num);
//               }
//               catch{
//                   console.log(buckets) // they put in a neg number...

//                   return quicksort(nums)
//               }
              
//           }
//           // Reconstruct the array by concatinating all sub arrays
//           arr = [].concat.apply([], buckets);
//           // Move to the next significant digit
//           divisor *= 10;
//         }
//         return arr;
//     }
    
//     function quicksort(array){
//         if (array.length < 2) return array
//         let pivot = Math.floor(Math.random() * array.length)
//         let smalls=[] 
//         let larges=[]
//         let sames =[]
//         for (let i = 0; i < array.length; i++){    
//             if (array[pivot] > array[i]) {
//                 smalls.push(array[i])
//             } else if (array[pivot] < array[i]) {
//                 larges.push(array[i])
//             } else {
//                 sames.push(array[i])
//             }
//         }
//         return [...quicksort(smalls), ...sames, ...quicksort(larges)]
//     }
// }

// function sortArray(nums){ //104 ms faster than 78.16% 41.3 mb. used less than 100%
//     return nums.sort((a,b)=> a-b)
// }


// console.time("asdf")
// console.timeEnd("asdf")
