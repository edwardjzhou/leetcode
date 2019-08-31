# 214. Shortest Palindrome

# Given a string s, you are allowed to convert it to a palindrome by adding characters in front of it. Find and return the shortest palindrome you can find by performing this transformation.

# Example 1:

# Input: "aacecaaa"
# Output: "aaacecaaa"
# Example 2:

# Input: "abcd"
# Output: "dcbabcd"

# FIND A POTENTIAL CENTER-- they're  surrounded by sames if it exists or nil left of center
# things to the right of the alleged best center are reversed and smacked onto the left side -- in that particular smacking, the more hits the shorter the palindrome
# index of (mid-1) for center is best since you just add 1 char to palindromize; (mid-2) for center means you add 2 char to palindromize  # worst case for center just duplicate itself with the center being the first char
# my first thought for brutality is check to each char see if it can be a center (as in its existing neighbors are mirrors or nil on left side)

#SOLVED NOTES: This was my first hard leetcode problem solved 8/31 :)


def shortest_palindrome(s="aabcaa") # "dcbabcd"
   	
   	if s.length==0
   		return ""
   	end


   	checker = 0
   	while checker <= (s.length-1)/2 and s[0+checker]==s[s.length-1-checker]
   		
   		if checker == (s.length-1)/2 #already a palindrome end asap
   			return s
   		end


   		checker+=1
   		   
   	end


   	answer=[]
    reversed=[]
    s=s.split("")
    s.reverse_each{|ele| reversed.push(ele)} 
    reversed=reversed.join("") 
    n = reversed.length/2 # index for center at n, bigger it gets the worse
    while n < reversed.length
		temp=reversed*1.0
		while temp[n]==temp[n+1] and temp[n+1]!=nil
			temp[n+1]="" 
		end

		counter=0  #n=3
		while temp[n+1-counter]==temp[n-1-counter] and n+1-counter > -1 and n-1-counter > -1 #THIS MUST SUCCEED ALL THE WAY UNTIL (the reversed) TOP SIDE STOPS HAVING LETTERS OR FAIL 
			temp[n+1-counter]=""
			temp[n-1-counter]=""
			counter+=1
			
		end

		if !(temp[n+1-counter]!=temp[n-1-counter] and temp[n+1-counter]!=nil) #if not fail palindrome center test
			
			temp[n-counter]="" #delete the  center's own letter
			answer.push(temp) #temp should be the stuff for any center to be added to its left
			return answer[0]+s.join #failed on the final challenge with 40,000 a's 1 b and 1 c the b and c were at idx 20,000 and 20,0001 so I realized that only the first pushed answer matters (since it gives shortest answer)
		end

    	n+=1

    end

     
   	add_length=answer.map{|ele| ele.length}  #last ele of answer SHOULD ALWAYS BE VALID
   	#return answer[add_length.index(add_length.min)]+s.join
end	

p  shortest_palindrome()
