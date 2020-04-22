// 95. Find Median from Data Stream
// Hard

// 2180

// 42

// Add to List

// Share
// Median is the middle value in an ordered integer list.If the size of the list is even, there is no middle value.So the median is the mean of the two middle value.

// For example,
//     [2, 3, 4], the median is 3

//     [2, 3], the median is(2 + 3) / 2 = 2.5

// Design a data structure that supports the following two operations:

// void addNum(int num) - Add a integer number from the data stream to the data structure.
// double findMedian() - Return the median of all elements so far.


//     Example:

// addNum(1)
// addNum(2)
// findMedian() -> 1.5
// addNum(3)
// findMedian() -> 2


// Follow up:

// If all integer numbers from the stream are between 0 and 100, how would you optimize it ?
//     If 99 % of all integer numbers from the stream are between 0 and 100, how would you optimize it ?

class MedianFinder {
    constructor() {
        this.maxHeap = []
        this.minHeap = []
    }

    addNum(num) {
        // add new num to maxheap then pop off largest number in maxheap and give it to minheap so remove top of minheap and give to maxheap
        this.maxHeap.push(num)
        this.maxbubbleup(this.maxHeap.length - 1)
        MedianFinder.swap(this.maxHeap, 0, this.maxHeap.length - 1)
        let popped = this.maxHeap.pop()
        this.maxbubbledown(0)
        this.minHeap.push(popped)
        this.minbubbleup(this.minHeap.length - 1)
        if (this.minHeap.length > this.maxHeap.length) {
            MedianFinder.swap(this.minHeap, 0, this.minHeap.length - 1)
            popped = this.minHeap.pop()
            this.minbubbledown(0)
            this.maxHeap.push(popped)
            this.maxbubbleup(this.maxHeap.length - 1)
        }

    }

    maxbubbleup(child) {
        let parent = this.findparent(child)
        if (parent !== -1 && this.maxHeap[child] > this.maxHeap[parent]) {
            MedianFinder.swap(this.maxHeap, child, parent)
            this.maxbubbleup(parent)
        } else {
            return 0
        }
    }

    maxbubbledown(parent) {
        let children = this.findchildren(parent, this.maxHeap)
        if (!children.length) return 0
        if (children.length === 1) {
            if (this.maxHeap[parent] < this.maxHeap[children[0]]) {
                MedianFinder.swap(this.maxHeap, children[0], parent)
                this.maxbubbledown(children[0])
            }
        }
        if (children.length === 2) {
            let largestchild = children.reduce((acc, childidx) => {
                return this.maxHeap[acc] > this.maxHeap[childidx] ? acc : childidx
            })
            if (this.maxHeap[parent] < this.maxHeap[largestchild]) {
                MedianFinder.swap(this.maxHeap, largestchild, parent)
                this.maxbubbledown(largestchild)
            }
        }

        return 0
    }

    minbubbleup(child) {
        let parent = this.findparent(child)
        if (parent != -1 && this.minHeap[child] < this.minHeap[parent]) {
            MedianFinder.swap(this.minHeap, child, parent)
            this.minbubbleup(parent)
        } else {
            return 0
        }
    }

    minbubbledown(parent) {
        let children = this.findchildren(parent, this.minHeap)
        if (!children.length) return 0
        if (children.length === 1) {
            if (this.minHeap[parent] > this.minHeap[children[0]]) {
                MedianFinder.swap(this.minHeap, children[0], parent)
                this.minbubbledown(children[0])
            }
        }
        if (children.length === 2) {
            let smallestchild = children.reduce((acc, childidx) => {
                return this.minHeap[acc] < this.minHeap[childidx] ? acc : childidx
            })
            if (this.minHeap[parent] > this.minHeap[smallestchild]) {
                MedianFinder.swap(this.minHeap, smallestchild, parent)
                this.minbubbledown(smallestchild)
            }
        }

        return 0
    }

    findparent(child) {
        let parent = (child % 2 === 0) ? (child - 2) / 2 : (child - 1) / 2
        if (parent < 0) return -1
        else return parent
    }

    findchildren(parent, array) {
        let length = array.length
        let children = []
        let child1 = parent * 2 + 1
        let child2 = parent * 2 + 2
        if (child1 < length) children.push(child1)
        if (child2 < length) children.push(child2)
        return children

    }

    static swap(array, one, two) {
        [array[one], array[two]] = [array[two], array[one]]
    }

    findMedian() {
        // console.log(this.maxHeap, this.minHeap)
        if (this.maxHeap.length > this.minHeap.length) return this.maxHeap[0]
        else return (this.maxHeap[0] + this.minHeap[0]) / 2
    }

}