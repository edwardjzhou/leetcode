def reverse(x)
	
    if x==0 or x>2**31-1 or x<-2**31+1
        return 0
    end
    y=x.to_s
	if x>0
        digits= (Math.log10(x) +1).floor
	    n=1
	    arr=[]
	    while n<digits+1
		    arr.push(y[digits-n])
		    n+=1
	    end
        if arr.join.to_i==0 or arr.join.to_i>2**31-1
            return 0 
        end
	    return arr.join.to_i
    end
    
    if x<0
        x=x*-1
        digits= (Math.log10(x) +1).ceil
	    n=1
	    arr=[]
	    while n<digits+1
		    arr.push(y[digits-n])
		    n+=1
	    end
        if -arr.join.to_i==0 or -arr.join.to_i<-2**31+1
            return 0 
        end
	    return -arr.join.to_i
    end
    
end

