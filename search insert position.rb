def search_insert(nums, target)
    nums.each_with_index do |ele,idx|
        if ele==target
            return idx
        end
        if ele>target
            return idx
        end
    end
    
    if nums[nums.length-1]<target
        return nums.length
    end
    
end