// 130. Surrounded Regions
// Medium

// 1295

// 576

// Add to List

// Share
// Given a 2D board containing 'X' and 'O'(the letter O), capture all regions surrounded by 'X'.

// A region is captured by flipping all 'O's into 'X's in that surrounded region.

//     Example:

// X X X X
// X O O X
// X X O X
// X O X X
// After running your function, the board should be:

// X X X X
// X X X X
// X X X X
// X O X X
// Explanation:

// Surrounded regions shouldn’t be on the border, which means that any 'O' on the border of the board are not flipped to 'X'.Any 'O' that is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'.Two cells are connected if they are adjacent cells connected horizontally or vertically.


function solve(board) {
    if (!board.length) return board
    const idks = new Set()
    const dfs = (y, x) => {

        if ((board[y][x] === "O") && (y === height - 1 || x === width - 1 || x === 0 || y === 0)) {
            return false // false for a guaranteed toxic element
        }
        if (board[y][x] === "X") return true // true for nontoxic guaranteed
        if (board[y][x] === "Y") return "IDK"
        board[y][x] = "Y" // "Y" is we dont know yet
        const above = dfs(y - 1, x) // true
        const below = dfs(y + 1, x) // false
        const right = dfs(y, x + 1) // false // 
        const left = dfs(y, x - 1) // true

        if (!above || !below || !right || !left) {
            board[y][x] = "T" // "T" for toxic guaranteed
            return false

        } else if (above === "IDK" || below === "IDK" || right === "IDK" || left === "IDK") {
            idks.add([y, x])
            return true // fine for now guaranteed but we need to check idks later
        } else {
            board[y][x] = "X" //we are guaranteed to be a good guy
            return true // nontoxic guaranteed
        }
    };

    const height = board.length;
    const width = board[0].length;

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            dfs(i, j);
        }
    }

    // console.log(idks)
    // console.log(board)

    let finished = false
    while (!finished) {
        finished = true

        for (let idk of idks) {
            for (let [dy, dx] of [[0, 1], [1, 0], [-1, 0], [0, -1]]) {
                if (board[dy + idk[0]][dx + idk[1]] === "T") {
                    board[idk[0]][idk[1]] = "T"
                    idks.delete(idk)
                    finished = false
                }
            }
        }
    }
    // console.log(idks)

    // console.log(board)


    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (board[i][j] === "T") board[i][j] = "O"
            if (board[i][j] === "Y") board[i][j] = "X"

        }
    }



    return board

}



console.log( solve(
    [["O", "X", "O", "O", "O", "X"], ["O", "O", "X", "X", "X", "O"], ["X", "X", "X", "X", "X", "O"], ["O", "O", "O", "O", "X", "X"], ["X", "X", "O", "O", "X", "O"], ["O", "O", "X", "X", "X", "X"]]
)
)



//what it hsould be
//[["O","X","O","O","O","X"],
// ["O","O","X","X","X","O"],
// ["X","X","X","X","X","O"],
// ["O","O","O","O","X","X"],
// ["X","X","O","O","X","O"],
// ["O","O","X","X","X","X"]]
