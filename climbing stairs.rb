# @param {Integer} n
# @return {Integer}
def climb_stairs(n)
	answers=[0,1,2]

	if answers[n] != nil
		return answers[n]
	end

	if answers[n] == nil
		i=3
		while i <= n
			answer = answers[i-1] + answers[i-2]
			answers.push(answer)
			i+=1
		end
	end

	return answers[n-1] + answers[n-2]

  
    
end

p climb_stairs(40)