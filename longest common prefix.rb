def longest_common_prefix(strs)
    i=1
    checker=0
    answer=""
    if strs.length==1
        return strs[0]
    end

    if strs.length==0
        return ""
    end
    
    strs[0].each_char.with_index do |ele,idx|
        i=1
        checker=0
        while i< strs.length 
            if ele==strs[i][idx]
                checker+=1
            end
            i+=1
        end  
        
        if checker==strs.length-1
            answer= answer+ele
        else
            return answer
        end
    end
    
    return answer
end

p longest_common_prefix(["flower","flow","flight"])