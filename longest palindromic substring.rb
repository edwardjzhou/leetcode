# Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

# Example 1:

# Input: "babad"
# Output: "bab"
# Note: "aba" is also a valid answer.


# NOT: LONGEST SHARED SUBSTRING BETWEEN s AND s REVERSED 
# IS: telescoping sames while spreading out to check for mirroreds
def longest_palindrome(s="ac")
	answers=[] #array of palindromes with center = char
	
	if s==""
		return ""
	end

	s.each_char.with_index do |char, idx|
		chopme=s*1.0 # "babad"
		answer=""
		while char==chopme[idx+1]
			answer+=chopme[idx+1]
			chopme[idx+1]=""
			
		end

		if answer.length > s.length/2 
			answers.push(char+answer)
			break
		end
		

		answer=answer.split("")
		answer.unshift(char)

		n=0
		while chopme[idx-1-n]==chopme[idx+1+n] and chopme[idx-1-n]!= nil and chopme[idx+1+n]!=nil and idx-1-n>-1 and idx+1+n<chopme.length
			answer.push(chopme[idx+1+n])
			answer.unshift(chopme[idx-1-n])
			n+=1
		end

		answer=answer.join("")
		answers.push(answer)
	end

	return answers[answers.map{|ele| ele.length}.index(answers.map{|ele| ele.length}.max)]
end

p longest_palindrome("nbnnnnnnbn")

			


	# 	#telescope it, NEIGHBOR HAS TO BE ME or a mirrored sequence so keep deleting same things that touch



