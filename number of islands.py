# 200. Number of Islands
# Medium

# 4513

# 165

# Add to List

# Share
# Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

# Example 1:

# Input:
# 11110
# 11010
# 11000
# 00000

# Output: 1
# Example 2:

# Input:
# 11000
# 11000
# 00100
# 00011

# Output: 3
class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        if len(grid) == 0: 
            return 0
        self.grid = grid
        self.height = len(grid)
        self.width = len(grid[0])
        answer = 0
        for i in range(self.height):
            for j in range(self.width):
                if self.grid[i][j] == "1":
                    answer += 1
                    self.dfs(i, j)
        return answer
    
    def dfs(self, y, x): 
        if y >= self.height or y < 0 or x >= self.width or x < 0:
            return 0
        if self.grid[y][x] == "1":
            self.grid[y][x] = "0" 
            self.dfs(y+1, x)
            self.dfs(y-1, x)
            self.dfs(y, x+1)
            self.dfs(y, x-1)
            
# class Solution:
#     def numIslands(self, grid: List[List[str]]) -> int:
#         if len(grid) == 0: 
#             return 0
#         self.grid = grid
#         self.height = len(grid)
#         self.width = len(grid[0])
#         self.answer = 0
#         self.visited = [ [False for _ in range(self.width)] for _ in range(self.height)]
#         return sum(self.dfs(i, j) for i in range(self.height) for j in range(self.width) if self.visited[i][j] == False) # generators dont run unless they have a sum() kinda like sql aggregate functions group by
    
    
#     def dfs(self, y, x): 
#         if y >= self.height or y < 0 or x >= self.width or x < 0 or self.grid[y][x] == "0":
#             return 0
#         if self.grid[y][x] == "1":
#             self.grid[y][x] = "0" 
#             self.visited[y][x] = True
#             list(map(self.dfs, (y, y, y-1, y+1), (x+1, x-1, x, x) ))
#             return 1


