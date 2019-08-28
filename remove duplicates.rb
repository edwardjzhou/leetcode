# someone else's solution I learned from
# j is the hunter for a different number
# i stays at home until j is found and then nums[i+1]=nums[j]
# i moves up one too, j then looks anew for another different number from the new nums[i]
# starting from j+1

def remove_duplicates(nums)
	if nums.length==0
		return 0
	end
	
	i=0
	j=1

	while nums[i] != nums[nums.length-1]
		if nums[i] != nums[j]
			i+=1
			nums[i]=nums[j]
		end
		j+=1
	end
	return i+1
end

p remove_duplicates([-1,0,0,1,1,1,2,3])



#my slow solution that failed the last trial out of 1000 because too slow

# def remove_duplicates(nums)
# 	#return length of uniques
# 	#modify num into only the uniques at front in order
# 	i=0
# 	while i<nums.length-1
# 		while nums[i]==nums[i+1] and nums[i]!=nums[nums.length-1]
# 			nums=move_left(nums,i+1)
# 		end	

# 		i+=1
# 	end

	
# 	uniques=0
# 	nums.each.with_index do |ele,idx|
# 		if ele != nums[idx+1]
# 			uniques+=1
# 		end
# 	end
# 	return uniques

# end

# def move_left(array,idx)
# 	k=idx
# 	while k<array.length-1
# 		array[k]=array[k+1]
# 		k+=1
# 	end
# 	return array
# end


