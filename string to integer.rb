# @param {String} str
# @return {Integer}
def my_atoi(str)
    negative=1
    i=0
    while str[i]==" " #destroy whitespace
        str[i]=""
    end
    
    if str==nil or str==""
        return 0
    end
    
    if !"1234567890-+".include?(str[i])
        return 0
    elsif str[i]=="-"
        negative=-1
        str[i]=""
    elsif str[i]=="+"
        str[i]=""
    end
    
    answer=""
    while i<str.length && "1234567890".include?(str[i])
        answer=answer+str[i]
        i+=1
        
    end
    
    answer=answer.to_i*negative
    
    if answer< 2147483648 and answer > -2147483648
        return answer
    end
    
    if answer >= 2147483648 
        return 2147483647
    end
    
    if answer <= -2147483648
        return -2147483648
    end
end