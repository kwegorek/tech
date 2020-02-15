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
