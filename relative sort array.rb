# Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

# Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.  Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.

 

# Example 1:

# Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
# Output: [2,2,2,1,4,3,3,9,6,7,19]
 

# Constraints:

# arr1.length, arr2.length <= 1000
# 0 <= arr1[i], arr2[i] <= 1000
# Each arr2[i] is distinct.
# Each arr2[i] is in arr1.


def relative_sort_array(arr1, arr2)
     #magnetized to like arr2's eles
    hash=Hash.new(0)
    arr1.each_with_index do |ele,idx|
        hash[ele]+=1
    end
    
    
    answer=[]
        hash[ele].times do
            answer.unshift(ele)
            hash[ele] = hash[ele]-1
        end
        
        
    end
    
    hash.sort_by{|k,v| k}.each do |ele|

        if ele[1] > 0
            ele[1].times do
                answer.push(ele[0])
            end
        end
        
    end
    

    return answer
end

p relative_sort_array(
[2,21,43,38,0,42,33,7,24,13,12,27,12,24,5,23,29,48,30,31],[2,42,38,0,43,21])