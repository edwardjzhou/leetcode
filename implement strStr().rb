

def str_str(haystack, needle)
	if needle.length==0 or haystack==needle
		return 0
	end



     if haystack.split(needle).length > 1
         return haystack.split(needle)[0].length
     elsif haystack.index(needle) != nil
     	return haystack.index(needle)
     else
     	return -1
     end
   
end




p str_str("aaa","a")
