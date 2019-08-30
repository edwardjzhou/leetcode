# Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

# Examples:

# s = "leetcode"
# return 0.

# s = "loveleetcode",
# return 2.

def first_uniq_char(s)
    hash=Hash.new(0)

    n=0
    while n < s.length
    	hash[s[n]]+=1
    	n+=1
    end

    hash.select{|ele,ele2|hash[ele]==1}.each{|key,val| return s.index(key)}
    return -1
    #p (hash.select{|ele,ele2|hash[ele]==1}).keys.map{|ele| s.index(ele)}[0]
   
end

p first_uniq_char("ddfffaw")

