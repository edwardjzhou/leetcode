// 146. LRU Cache
// Medium

// 4798

// 213

// Add to List

// Share
// Design and implement a data structure for Least Recently Used(LRU) cache.It should support the following operations: get and put.

//     get(key) - Get the value(will always be positive) of the key if the key exists in the cache, otherwise return -1.
// put(key, value) - Set or insert the value if the key is not already present.When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

// The cache is initialized with a positive capacity.

// Follow up:
// Could you do both operations in O(1) time complexity ?

//     Example :

//     LRUCache cache = new LRUCache(2 /* capacity */);

// cache.put(1, 1);
// cache.put(2, 2);
// cache.get(1);       // returns 1
// cache.put(3, 3);    // evicts key 2
// cache.get(2);       // returns -1 (not found)
// cache.put(4, 4);    // evicts key 1
// cache.get(1);       // returns -1 (not found)
// cache.get(3);       // returns 3
// cache.get(4);       // returns 4

/**
 * @param {number} capacity
 */
class Node {
    constructor(key, value) {
        this.key = key
        this.value = value
        this.previous = null
        this.next = null
    }
}

var LRUCache = function (capacity) {
    // this.cache = new Map()
    // this.capacity = capacity

    this.capacity = capacity
    this.map = new Map
    this.head = new Node(null, null)
    this.tail = new Node(null, null)
    this.head.next = this.tail
    this.tail.previous = this.head
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    // if(!this.cache.has(key)) return -1
    // const v = this.cache.get(key)
    // this.cache.delete(key)
    // this.cache.set(key,v)
    // return this.cache.get(key)


    if (!(this.map.has(key))) {
        return -1
    } else {
        let node = this.map.get(key)
        this.delete(node)
        this.add(node)
        return node.value
    }

};

LRUCache.prototype.delete = function (node) {
    //deleted node's next's previous will be nodes previous
    // node.next.previous = node.previous 
    //deleted node's previous's next will be nodes next
    // node.previous.next. = node.next
    const delPrevious = node.previous
    const delNext = node.next
    delPrevious.next = delNext
    delNext.previous = delPrevious
}


/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    // if(this.cache.has(key))this.cache.delete(key)
    // this.cache.set(key,value)
    // if(this.cache.size > this.capacity){
    //     this.cache.delete(this.cache.keys().next().value) // next returns first items key
    // }
    // if (key===4) {console.log(this.head)}
    if (this.map.has(key)) {
        this.delete(this.map.get(key))
    }
    let node = new Node(key, value)
    this.add(node)
    this.map.set(key, node)
    if (this.map.size > this.capacity) {
        // if (key===4 ) console.log("entered", this.head.next)
        let deletingnode = this.head.next
        this.delete(deletingnode)
        this.map.delete(deletingnode.key)
    }
};

// ["LRUCache","put","put","get","put","get","put","get","get","get"]
// [[2],        [1,1],[2,2],[1],  [3,3],[2], [4,4], [1],  [3],  [4]]
// headnext   head   tailnext     tail     tailprevious
// tail                                         head
//  node                                         last
//                                               node     node previous
//                                                             head
//heads next is what gets pushed off
//  former last's next used to point at tail 
//  now former last's next points at new node
//  former last's previous remains the same
LRUCache.prototype.add = function (node) {
    let previouslast = this.tail.previous
    previouslast.next = node
    this.tail.previous = node
    node.previous = previouslast
    node.next = this.tail






    // let formerlast = this.tail.previous
    // formerlast.next = node
    // this.tail.previous = node
    // node.previous = formerlast // ansy new nodes previous is head
    // node.next = this.tail // any new nodes next is tail
    // this.head.next = this.tail
    // this.tail.previous = this.head
    //1 formerlast=head
    //2 head.next = new       HEADS NEXT JUST POINTS AT the first thing added 
    //3 tail.previous = new
    //4 new.previous = head
    //5 new.next = tail
    // now theres a newnew
    //6 formerlast = new
    //7 new.next = newnew
    //8 tail.previous = newnew
    //9 newnew.previous = new
    //10 newnew.next = tail

}

