
def fizz_buzz(n)
    y=(1..n).map do |ele|  
        answer=""

        if ele%3==0
            answer+="Fizz"
        end

        if ele%5==0
            answer+="Buzz"
        end

        if answer==""
            answer=ele.to_s
        end
        
        answer 
    end
end

p fizz_buzz(15)



# def fizz_buzz(n)
#     y=(1..n).map do |ele|  
    
#         if !(ele%3==0 or ele%5==0)
#             ele.to_s
#         elsif ele%3==0 and ele%5==0 
#             ele="FizzBuzz"
#         elsif ele%5==0
#             ele="Buzz"
#         else 
#             ele="Fizz"
#         end

#     end
    
# end

# def fizz_buzz(n)
#     y=(1..n).map.with_index do |ele,idx|  
    
#         if (idx+1)%3==0
#             ele="Fizz"
#             if (idx+1)%5==0
#                 ele+="Buzz"
#             end
#         elsif (idx+1)%5==0
#             ele="Buzz"
#         end

#         ele.to_s
#     end
   
# end


