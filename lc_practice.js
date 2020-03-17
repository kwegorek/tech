//num of steps to reduce num 

var numberOfSteps  = function(num) {

    if(num === 0){
        return 0 
    }

    if(num%2 === 0) {
    
       return 1 + numberOfSteps(num/2)
       
    }else{
      
       return 1 + numberOfSteps(num-1)}
        
}

var defangIPaddr = function(address) {
    
    return address.split('').map(el=>{
        
        if(el === '.'){
            return '[.]'
        }else{
            return el
        }
    }).join('')
    
};

var subtractProductAndSum = function(n) {
    
    let input_n = String(n); 
    
    let n_arr = input_n.split(''); 
    
    let product = 1; 
    let sum = 0; 
    
    for(let i = 0; i < n_arr.length;   i++){
        
        product*=Number(n_arr[i]); 
    
        sum += Number(n_arr[i])
            
    }
    
    return product - sum
    
};


var findNumbers = function(nums) {
    let evenNum = 0; 
    
    for(let i = 0; i < nums.length; i++){
        
        if(String(nums[i]).length%2 === 0){
            evenNum++
        }
    }
    
    return evenNum
    
};
var getDecimalValue = function(head) {
    
    let binary = []; 
    
    let curNode = head
    
    while(true){
                
        if(curNode.next === null ){
            
             binary.push(curNode.val)
            break
            
        }else{
            
            binary.push(curNode.val)
            curNode = curNode.next 
      
            
        }
        
        
    }
     
//     let multi = 1;
//     let res =  0; 
        
//     for(let i = binary.length; i >= 0; i--){
        
//         res = res + multi*binary[i]
//         multi = multi*2
        
      
//     }
    
    return parseInt(binary.join(''), 2)
    
};

var countNegatives = function(grid) {
    
    let negativeNum = 0; 
    
    
    
    for(let i = 0; i < grid.length; i++){
        
        for(let j = 0; j < grid[i].length; j++){
            
            if(grid[i][j]+Math.abs(grid[i][j]) === 0 && grid[i][j]!==0){
                negativeNum++
            }
        }
    }
    
    return negativeNum
    
};

var maximum69Number  = function(num) {
    
    let myNum = String(num); 
    let splitted = myNum.split(''); 
    let changed = 0; 
    let newStr = []; 
    
    for(let i=0; i<splitted.length; i++){
        
        if(splitted[i]==='6' && changed === 0){
            newStr.push('9')
            changed++ 
        }else{
            newStr.push(splitted[i])
        }
    }
    
    return Number(newStr.join(''))
    
}

var rangeSumBST = function(root, L,R) {
    
 if (root === null) return 0;

    let lsum = rangeSumBST(root.left,L,R)
    let rsum = rangeSumBST(root.right,L,R)
    
    if(root.val <= R && root.val >= L){
        return lsum + rsum + root.val
    }else {
        
        return lsum + rsum 
        
    }
};

var reverseString = function(s) {

  for (let i = 0; i < Math.floor(s.length/2); i++) {
    
    let last = s[s.length - i-1]
    console.log('last', last)
    let first = s[i]

      let temp = s[s.length - i-1]
       s[i] = temp
      s[s.length - i-1] = first;
     
  }

  return s

};


var maxDepth = function(root) {
    
     if(!root){
        
        return 0
    
        
    }
    
    let heightL = root.left
    let heightR = root.right; 
    
    
    return Math.max(maxDepth(heightL), maxDepth(heightR)) +1

};

var singleNumber = function(nums) {
    
    let mySet = {}; 
    
    for(let i= 0; i < nums.length; i++){
      
       if(!mySet[nums[i]]){
            mySet[nums[i]]= 1; 

       }else{
         mySet[nums[i]]+= 1

       }
     
        
    }
    console.log(mySet)
    
    
    return Object.keys(mySet).find(key => mySet[key] === 1)
    
};

var majorityElement = function(nums) {
    
    let countElements = {}; 
    let condition = Math.floor(nums.length/2)
    console.log(condition)
    
    for(let i=0; i< nums.length; i++){
        
        if(!countElements[nums[i]]){

            countElements[nums[i]] = 1; 
        }else{
            countElements[nums[i]] += 1
        }
    }
    console.log(countElements)
    
    return Object.keys(countElements).find(key => countElements[key] > condition)
    
};

var isAnagram = function(s, t) {
    
    let dic =  {}
    
    if(s.length === t.length){
    
    for(let i =0; i < s.length; i++){
        
        if(!dic[s[i]]){
            dic[s[i]] = 1
        }else {
            
            dic[s[i]] = +1
        }
        
        
    }

    return dic

        
 var firstUniqChar = function(s) {
    
    let mySet = {}; 
    
    let splittedS = s.split('')
    
    for(let i = 0; i < s.length; i++){
        
        if(!mySet[s[i]]){
            
            mySet[s[i]] = 1
            
        } else {
             mySet[s[i]] += 1
            
        } 
    
    }

    console.log(mySet)
    
    let nonrepeating = Object.keys(mySet).find(el =>{
      
      if(mySet[el] === 1){
        return el

      } })

                                              
    return s.indexOf(nonrepeating)
    
    
};
    
    }}


var containsDuplicate = function(nums) {
    
    let dic = {}; 
    
    for(let i = 0; i < nums.length; i++){
        
        if(!dic[nums[i]]){
            dic[nums[i]] = 1
        }else{
             
            return true
        }
    }
  
    return false
    
};

var isPowerOfThree = function(n) {
    let curNum = 1; 
    
    if(n === 0){
        return false
    }
    
    while(true){
        
        if(curNum === n){
            return true
            break;
        }else if(curNum > n){
            return false
            break
        }
        
        curNum *=3
    }

   
};

var mergeTwoLists = function(l1, l2) {
  let l3 = new ListNode(1)
  let l3head = l3

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      l3.next = new ListNode(l1.val)
      l1 = l1.next
      l3 = l3.next
    } else {
      l3.next = new ListNode(l2.val)
      l2 = l2.next
      l3 = l3.next
    }
  }

  if (l1 === null && l2 !== null) {
    l3.next = l2
  }

  if (l1 !== null && l2 === null) {
    l3.next = l1
  }

  return l3head.next
}

var fizzBuzz = function(n) {
    let arr = [];
    
    for(let i=1; i<=n; i++){
        console.log(i)
       if(i%3===0 && i%5 === 0){
           arr.push("FizzBuzz")
       }else if(i%5 === 0){
           arr.push("Buzz")
       }else if(i%3===0){
           arr.push("Fizz")
       }else{
            arr.push(String(
i))
           
       }

            
        
       
    }
    return arr
    
    
};

var reverseList = function(head) {
    
    var node = head
    var prev = null; 
    
    while(node){
        
        var temp = node.next; 
        
        node.next = prev; 
        
        prev = node; 
        
        if(!temp){
            break;
        }
        node = temp
    }
    return node
  
};

var deleteNode = function(node) {
    
    node.val = node.next.val; 
    node.next = node.next.next

};

var getLength = function(head) {
  let temp = head

  let size = 0

  while (temp) {
    size++
    temp = temp.next
  }

  return size
}

var middleNode = function(head) {
  let listLength = getLength(head)
  let middleElement = null
  let currentHead = head

  if (listLength % 2 === 0) {
    middleElement = listLength / 2
  } else {
    middleElement = Math.floor(listLength / 2)
  }

  while (currentHead !== null) {
    for (let i = 0; i < listLength; i++) {
      if (i === middleElement) {
        return currentHead
      } else {
        currentHead = currentHead.next
      }
    }
  }
}

 */
var hasCycle = function(head) {
    
    if(head === null || head.next === null){return false}
    let currentHead = head;
    let fast = head.next

    while(currentHead!==null && fast!==null&&fast.next !==null ){
            
        if(currentHead == fast){    
            return true
        }
        currentHead = currentHead.next
        fast = fast.next.next
  

    }
    return false
};


var sortedArrayToBST = function(nums) {
    if (nums == null || !nums.length) {
        return null;
    }
    
    let mid = Math.floor(nums.length / 2);
    const node = new TreeNode(nums[mid]);
    node.left = sortedArrayToBST(nums.slice(0, mid));
    node.right = sortedArrayToBST(nums.slice(mid + 1, nums.length))
    return node;        
};

var getIntersectionNode = function(headA, headB) {
    
    let currentHeadA = headA
    let currentHeadB = headB
    
    let map = {}; 
    let count = 0; 
    
    while (currentHeadA!==null){
        
        if(currentHeadA.next === null){break}
        
        
        map[currentHeadA.val] = currentHeadA.next.val
        currentHeadA = currentHeadA.next
    }
    
    
     while (currentHeadB!==null){
        
        if(map[currentHeadB.val]){
            console.log(`Intersected at ${map[currentHeadB.val]}`)
            
            return `Intersected at ${map[currentHeadB.val]}`
           
   
        }
         currentHeadB = currentHeadB.next
         
         
      
    }
    
    
    
    
};

var detectCycle = function (head) {
  let mySet = new Set()

  while (head !== null) {
    if (mySet.has(head)) {
      return head
    } else {
      mySet.add(head)
    }

    head = head.next
  }

  return head
}
