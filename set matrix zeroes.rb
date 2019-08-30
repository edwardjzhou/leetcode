#must be in-place
# Input: 
# [
#   [1,1,1],
#   [1,0,1],
#   [1,1,1]
# ]
# Output: 
# [
#   [1,0,1],
#   [0,0,0],
#   [1,0,1]
# ]


	
# #slow but work will redo later
def set_zeroes(matrix)
	 

	i=0
	rows=matrix.length
	columns=matrix[0].length
	rowsafeties=[]
	while i < rows
		sum=1
		matrix[i].each{|ele| sum=sum*ele}
	 	rowsafeties.push(sum) #any 1=everything in index-th row was 1; [1,0,1 ]
	 	i+=1
	end


	i=0
	
	columnsafeties=[]
	while i < columns
		sum=1
		godown=0
			while godown < rows 
		 		sum=matrix[godown][i]*sum
		 		godown+=1
		 	end
		 	columnsafeties.push(sum)
		i+=1
	end


	j=0
	while j <  rows
		k=0
		while k < columns
			if rowsafeties[j]==0 or columnsafeties[k] ==0
				matrix[j][k]=0
			end
			k+=1
		end
	j+=1
	end
	return matrix
end


p  set_zeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]])

# still really slow got confused
# def set_zeroes(matrix)
# 	i=0
# 	rows=matrix.length
# 	columns=matrix[0].length
# 	rowsafeties=[]
# 	while i < rows
# 		sum=1
# 		matrix[i].each{|ele| sum=sum*ele}
# 	 	rowsafeties.push(sum) #any 1=everything in index-th row was 1; [1,0,1 ]
# 	 	i+=1
# 	end


# 	i=0
	
# 	previous_column_needs_deleting=false

# 	while i < columns

# 		godown=0
# 		sum=1
# 		while godown < rows 
# 			if previous_column_needs_deleting==true
# 				matrix[godown][i-1]=0
# 			end

# 		 	sum=matrix[godown][i]*sum
		 		
		 	
# 		 	if rowsafeties[godown]==0
# 		 		matrix[godown][i]=0
# 		 	end
		 	
# 		 	godown+=1

# 		end

# 		previous_column_needs_deleting=false
		 	
# 		if sum==0
# 		 	previous_column_needs_deleting=true
# 		end	

# 		i+=1

		

# 	end
# 		if previous_column_needs_deleting
# 			(0..rows-1).each {|x|matrix[x][columns-1]=0}
# 		end

# 	return matrix
# end

# p set_zeroes([
#   [1,1,1],
#   [1,0,1],
#   [1,1,1]
# ])




