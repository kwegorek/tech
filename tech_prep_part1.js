

function makeNode(data, value, next=null){

    return {
      data, 
      value, 
      next
    }
  }
  
  class PriorityQueue{
  
      constructor(){
          this.root = null
      }
  
      insert(data, priority){

        let newNode = makeNode(data, priority)
  
        if(!this.root || this.root.priority < priority){
          
            newNode.next = this.root
            this.root = newNode

        }else{

          let cur = this.root
          
          while(cur.next && cur.next.priority >= priority ){
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

const pq = new PriorityQueue();

pq.insert('Jill concussion', 7);
pq.insert('John stomach pain', 5);
pq.insert('John stomach pain', 6);



console.log(pq)