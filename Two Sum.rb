# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}

def two_sum(nums, target)
    nums.each_with_index do |ele1,idx1|
        nums.each_with_index do |ele2, idx2|
            if target==ele1+ele2 && idx2 > idx1
                return [idx1,idx2]
            end
        end
    end
end