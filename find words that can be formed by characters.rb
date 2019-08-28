# Input: words = ["cat","bt","hat","tree"], chars = "atach"
# Output: 6
# Explanation: 
# The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.

def count_characters(words = ["cat","bt","hat","tree"], chars = "atach")
	
	given = Hash.new(0)
	chars.each_char do |char|
		given[char]+=1
	end

	backup={}
	("a".."z").each do |ele|
		backup[ele]=given[ele]
	end

	sum=0
	words.each do |ele|
		
		("a".."z").each do |letter|
			backup[letter]=given[letter]
		end

		ele.each_char do |char|
			backup[char] = backup[char] - 1

		end
		

		if backup.select{|negatives| backup[negatives] < 0} == {}
			sum+=ele.length
		end
	end

	return sum
	
end

p count_characters()