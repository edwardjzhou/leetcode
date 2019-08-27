# @param {String} s
# @return {Integer}
def roman_to_int(s)
    sum=0
    values={"I"=>1,"V"=>5,"X"=> 10, "L"=>50, "C"=>100, "D"=>500, "M"=>1000}
    s.each_char.with_index do |ele,idx|
        if idx+1<s.length
            if values[ele] >= values[s[idx+1]] 
                sum=sum+values[ele]
            else
                sum=sum-values[ele]
            end
        end
    end
    sum=sum+values[s[s.length-1]]
    return sum
end

p roman_to_int("XIV")
