# According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

# Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

# Any live cell with fewer than two live neighbors dies, as if caused by under-population.
# Any live cell with two or three live neighbors lives on to the next generation.
# Any live cell with more than three live neighbors dies, as if by over-population..
# Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
# Write a function to compute the next state (after one update) of the board given its current state. The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously.

# Example:

# Input: 
# [
#   [0,1,0],
#   [0,0,1],
#   [1,1,1],
#   [0,0,0]
# ]
# Output: 
# [
#   [0,0,0],
#   [1,0,1],
#   [0,1,1],
#   [0,1,0]
# ]

def game_of_life(board)

	rows=board.length
	columns=board[0].length
	i=0 #goes between rows
	dying,reviving=[],[]

	while i < rows

		j=0	 #goes between column
		while j < columns
			
			
			if board[i][j] == 1 #currently alive, need 2 or 3 living neighbors or else die
				if !(count_living_neighbors(board,i,j)==2 or count_living_neighbors(board,i,j)==3) 
					#die
					dying.push(i,j)
				end

			elsif board[i][j]==0 #currently dead,  if 3 live neighbors then revive
				if count_living_neighbors(board,i,j)==3
					#revive
					reviving.push(i,j)
				end
			end


			j+=1


		end
		
		i+=1
	end

	dying.select.each_with_index{|ele,idx| idx%2==0}.each_with_index{|ele,idx|board[ele][dying[idx*2+1]]=0}
	reviving.select.each_with_index{|ele,idx| idx%2==0}.each_with_index{|ele,idx|board[ele][reviving[idx*2+1]]=1}
	
	return board
end


def count_living_neighbors(board,i,j) 
	
	living_neighbors = 0
	[1,-1].each do |x|
		legal_indices = [[i,j+x],[i+x,j],[i+x,j+x],[i-x,j+x]].each.select{|ele1,ele2| ele1 >= 0 and ele1 < board.length and ele2 < board[0].length and ele2 >=0 }
		living_neighbors+=legal_indices.select{|ele| board[ele[0]][ele[1]]==1}.length
	end


	return living_neighbors
end

p game_of_life([[0,1,0],[0,0,1],[1,1,1],[0,0,0]])