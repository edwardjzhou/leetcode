#easy mode with recursion/loops
def add_digits(num)
    
    while num > 9
        num=num.to_s
        sum=0 
        num.each_char do |ele|
            sum+=ele.to_i
        end
        num=sum
    end
    return num
end