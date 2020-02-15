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
