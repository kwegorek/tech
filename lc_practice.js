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
