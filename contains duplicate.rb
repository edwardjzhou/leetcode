#217. Contains Duplicate

def contains_duplicate(nums)
    hash=Hash.new(0)
    nums.each do |ele|
        hash[ele]+=1
    end
    
    hash.values.each do |ele|
        if ele != 0 and ele != 1
            return true
        end
    end
        return false
         
    
end