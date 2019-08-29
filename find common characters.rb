# Example 1:

# Input: ["bella","label","roller"]
# Output: ["e","l","l"]
# @param {String[]} a
# @return {String[]}

def common_chars(a)
	i=0
	array=[]
	while i < a.length
		answer=Hash.new(0)
		a[i].each_char do |char|
			answer[char]+=1
		end	
		array.push(answer)
		i+=1
	end
	
	n=1
	


	final_keys=array[0].keys
	final_values=array[0].values
	while n < array.length
		z=0
		while z < final_keys.length
			if array[n][final_keys[z]] < final_values[z]
				final_values[z]=array[n][final_keys[z]]
			end

			z+=1
		end
		n+=1
		
	end
	count=0


	almostdone=final_keys.map{|key| key * final_values[final_keys.index(key)]}.select{|ele| ele!=""}
		
	almostdone.each do |ele,idx|

		if ele.length > 1
			(ele.length).times {almostdone.push(ele[0])}
			
		end
	end

	return almostdone.select{|ele| ele.length==1}

end

p common_chars(["bella","label","roller"])
  
	#where count is a hash
  # count.each do |char, num|
  #   if num > 2
  #     frequents << char
  #   end

