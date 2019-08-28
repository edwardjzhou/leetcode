def count_and_say(n)
    if n==1
        return "1"
    end

    answer=count_and_say(n-1)
    newanswer=""
    oldcount=0
    answer.each_char.with_index do |ele,idx|
        if ele!=answer[idx+1] 
            count=idx+1
            newanswer=newanswer+(count-oldcount).to_s+answer[idx]
            oldcount=count
        end
    end
    return newanswer
end  
            
p count_and_say(30)