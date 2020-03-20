// 208. Implement Trie(Prefix Tree)
// Medium

// 2435

// 44

// Add to List

// Share
// Implement a trie with insert, search, and startsWith methods.

//     Example:

// Trie trie = new Trie();

// trie.insert("apple");
// trie.search("apple");   // returns true
// trie.search("app");     // returns false
// trie.startsWith("app"); // returns true
// trie.insert("app");
// trie.search("app");     // returns true
// Note:

// You may assume that all inputs are consist of lowercase letters a - z.
// All inputs are guaranteed to be non - empty strings.
/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.root = {}
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root
    for (let char of word){
        if (! node[char]) node[char] = {}
        node = node[char]
    }
    node.finished = true
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.root
    for (let char of word){
        if (node[char]) node = node[char]
        else return false
    }
    if (node.finished !== true) return false
    return true
    
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.root
    for (let char of prefix){
        if(node[char]) node = node[char]
        else return false
    }
    return true
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */