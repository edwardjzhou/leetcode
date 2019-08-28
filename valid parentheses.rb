def is_valid(s)
	if s==""
		return true
	end

	brackets={"("=>")","["=>"]","{"=>"}"}

	innermostleftbracket=""
	innermostleftbracketpos=-1
	while s.length>0
		s.each_char.with_index do |ele,idx|
			if "({[".include?(ele)
				innermostleftbracket=ele
				innermostleftbracketpos=idx #if this doesnt have its rightbracket as right neighbor it's over
			end
		end
        
        if innermostleftbracketpos==-1
            return false
        end

		if s[innermostleftbracketpos+1]==brackets[innermostleftbracket]
			s[innermostleftbracketpos+1]=""
			s[innermostleftbracketpos]=""
		else
			return false
		end
	end
	return true
end

p is_valid("[(){}]")