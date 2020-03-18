// 79. Word Search
// Medium

// 2887

// 148

// Add to List

// Share
// Given a 2D board and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring.The same letter cell may not be used more than once.

//     Example:

// board =
//     [
//         ['A', 'B', 'C', 'E'],
//         ['S', 'F', 'C', 'S'],
//         ['A', 'D', 'E', 'E']
//     ]

// Given word = "ABCCED", return true.
// Given word = "SEE", return true.
// Given word = "ABCB", return false.


//     Constraints:

// board and word consists only of lowercase and uppercase English letters.
// 1 <= board.length <= 200
// 1 <= board[i].length <= 200
// 1 <= word.length <= 10 ^ 3

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {

    let height = board.length
    let width = board[0].length
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (searcher(word, i, j, board) === true) return true
        }
    }

    function searcher(word, y, x, newboard) {
        if (y < 0 || x < 0 || y >= height || x >= width) return false
        if (word[0] === (newboard[y][x])) {
            if (word.length === 1) return true

            //JSON Parse and stringify was destroying my runtime
            let save = newboard[y][x]
            newboard[y][x] = null
            for ([dy, dx] of [[0, 1], [1, 0], [0, -1], [-1, 0]]) {
                if ((searcher(word.slice(1), y + dy, x + dx, newboard)) === true) return true
            }
            newboard[y][x] = save

        }

        return false
    }

    return false
};
