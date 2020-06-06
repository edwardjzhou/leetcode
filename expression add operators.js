// 282. Expression Add Operators
// Hard

// 1158

// 184

// Add to List

// Share
// Given a string that contains only digits 0-9 and a target value, return all possibilities to add binary operators (not unary) +, -, or * between the digits so they evaluate to the target value.

// Example 1:

// Input: num = "123", target = 6
// Output: ["1+2+3", "1*2*3"] 
// Example 2:

// Input: num = "232", target = 8
// Output: ["2*3+2", "2+3*2"]
// Example 3:

// Input: num = "105", target = 5
// Output: ["1*0+5","10-5"]
// Example 4:

// Input: num = "00", target = 0
// Output: ["0+0", "0-0", "0*0"]
// Example 5:

// Input: num = "3456237490", target = 9191
// Output: []
/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */


// this one dealt with DFS blowing up 4^N and with teh fact that a new * would finish off any previosu with a new value
// however concating to something that was multiplied was difficult to deal with and i did it bruteforcedly
//O(4^N)  4 operations per element that give rise to 4 each on and on
//concat if its not a "00", +, -, *
// eval is too slow

// faster than 25% less than 8% memory

var addOperators = function(num, target) {
    const answer = []
    const length = num.length 
    
    var dfs = function (combo, index, total, previous, lastoperator) {
        if (index === length ) {
            total === target && answer.push(combo)
            return
        }
        
        const current = num[index]
        const int = parseInt(current)
    

        if (!combo.length) {
            dfs(current, index+1, int, int)  
            
        } else {  
            if (previous !== 0) {
                if (lastoperator === "*") {
                    let factor = combo.split(`*`)
                    let oldNum = parseInt(factor[factor.length-1])
                    let newNum = parseInt(oldNum + current)
                    // how to deal with concatting to a number that was multiplied? like 5*4 then going to 5*43 ? couldnt figure out a better way
                    dfs(combo+current, index+1, total - previous + previous*(newNum/oldNum) ,previous*(newNum/oldNum), "*")
                    // dfs(combo+current, index+1, total - previous + (previous*10+int)*previous , (previous*10+int)*previous, "*")
                }
                else { 
                    let factor = parseInt(previous + current) // parseInt( 4 + "5") = 45
                    dfs(combo+current, index+1, total - previous + factor , factor)
                }
            }
            dfs(combo+"+"+current, index+1, total+int, int)
            dfs(combo+"-"+current, index+1, total-int, -int)
            dfs(combo+"*"+current, index+1,  total-previous+(int*previous), previous*int, "*")
        
        }
    }
    
    dfs("", 0)    
    return answer
}


