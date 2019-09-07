 def is_power_of_three(n)
     while n > 3
         n = n.to_f/3.0
     end
    
     if n==3 or n==1
         return true
     else
         return false
     end
 end



