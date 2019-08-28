

#slow tbd: redo it smartly
def duplicate_zeros(arr)
    i=0

    while i < arr.length-1
    	if arr[i]==0
    		n=1
    		while n < arr.length-i-1
    			arr[arr.length-n]=arr[arr.length-1-n]
    			n+=1
    		end

    		arr[i+1]=0
    		i+=1
    	end
    	i+=1

    end
  	return arr
end

p duplicate_zeros([0,1,2,0,4,5,6])

