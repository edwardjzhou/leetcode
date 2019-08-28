# @param {Integer} x
# @return {Boolean}
#NO CONVERSION FROM INT TO STRING HARD MODE

def is_palindrome(x)
    if x==0
        return true
    end
    
    if x<0
        return false
    end
        
    digits=Math.log10(x).floor+1
    answer=[]
  	
  	n=digits
  	sum=x
  	while n>0
    	digit=(sum/10**(n-1)).floor
    	answer.push(digit)
    	sum=sum-digit*10**(n-1)
    	n-=1
    end
    
    i=0
    while i<answer.length
    	if answer[i]!=answer[-(1+i)]
    		return false
    	end
    	i+=1
    end
    return true
end


p is_palindrome(9)

