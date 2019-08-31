# Input: 19
# Output: true
# Explanation: 
# 12 + 92 = 82
# 82 + 22 = 68
# 62 + 82 = 100
# 12 + 02 + 02 = 1


def is_happy(n)

	sum=0

	n.to_s.each_char do |ele|
		sum+=ele.to_i**2
	end

	memo=[]

	while sum != 1 and !memo.include?(sum)
		memo.push(sum)
		n=sum
		sum=0
		n.to_s.each_char do |ele|
			sum+=ele.to_i**2
		end
		
	end

	if sum==1
		return true
    else
        return false
	end

end

#memoization 
#recursion vs loop



p is_happy(19)
