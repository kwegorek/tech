//3-data-structures

function makeNode(data, value, next = null) {
  return {
    data,
    value,
    next
  }
}

class PriorityQueue {
  constructor() {
    this.root = null
  }

  insert(data, priority) {
    let newNode = makeNode(data, priority)

    if (!this.root || this.root.priority < priority) {
      newNode.next = this.root
      this.root = newNode
    } else {
      let cur = this.root

      while (cur.next && cur.next.priority >= priority) {
        //traverse until u find the node, that would be previous to the newNode
        //initialize newNode.next to cur.next, so that the cur.next would point to the
        //newNode that is updated and points to the rest of the queueMicrotask, otherwise
        //cur.next value would be lost and overwritten (cur.next = newNode x)

        cur = cur.next
      }
      newNode.next = cur.next
      cur.next = newNode
    }
  }
}

const pq = new PriorityQueue()

pq.insert('Jill concussion', 7)
pq.insert('John stomach pain', 5)
pq.insert('John stomach pain', 6)

console.log(pq)

class Heap {
  constructor() {
    this.heap = []
  }

  parentIndx(childIdx) {
    return Math.floor((childIdx - 1) / 2)
  }

  childrenIndices(parentIdx) {
    return [parentIdx * 2 + 1, parentIdx * 2 + 2]
  }

  swap(childIndx, parentIndx) {
    ;[this.heap[childIndx], this.heap[parentIndx]] = [
      this.heap[this.parentIndx],
      this.heap[childIndx]
    ]
  }

  priority(i) {
    return this.heap[i].priority
  }

  insert(data, priority) {
    this.heap.push({
      data,
      priority
    })
    this.heapifyUp()
  }

  heapifyUp() {
    let currentIdx = this.heap.length - 1

    while (
      currentIdx > 0 &&
      this.heap[currentIdx].priority >
        this.heap[this.parentIndx(currentIdx)].priority
    ) {
      this.swap(currentIdx, this.parentIndx(currentIdx))
      currentIdx = this.parentIndx(currentIdx)
    }
  }

  peek() {
    return this.heap[0].data
  }

  popMax() {
    const max = this.heap[0]

    this.heap[0] = this.heap.pop()
    this.heapifyDown()
    return max.data
  }

  heapifyDown() {
    let curElemIndx = 0
    let [left, right] = this.childrenIndices(curElemIndx)

    let larger = this.heap.length
    let stopComparing = false

    while (larger >= 0 || stopComparing) {
      if (this.heap[left].priority > this.heap[curElemIndx].priority) {
        this.swap(left, this.parentIndx(left))
        larger--
      } else if (this.heap[right].priority > this.heap[curElemIndx].priority) {
        this.swap(right, this.parentIndx(left))
        larger--
      } else {
        stopComparing = false
      }
    }
  }
}


//breadth-first 



//solve graph 

//The task is to  determines if a path exists between two vertices of a directed graph.
//Hints: account for cycles

const graph = {
    a: ['b'],
    b: ['c', 'd'],
    c: ['d'],
    d: []
  }
  
  doesPathExist(graph, 'a', 'b') // true
  doesPathExist(graph, 'b', 'a') // false
  doesPathExist(graph, 'a', 'd') // true
  doesPathExist(graph, 'a', 'a') // false

// What are the time and space complexities for their approach?
// Can you think of alternative data structures for keeping track 
// of visited nodes? (Sets and Maps are always good to know)

function doesPathExist(graph, start, target){

    if(!graph[start]){
        return false
    }



}