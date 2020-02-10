
function decodeMorse(morseCode){

let alphabet = MORSE_CODE

let splitted = morseCode.split(' ')
let spaceCalled = 0; 

let word = '' 

for(let i = 0; i < splitted.length; i++){

  if(alphabet[splitted[i]]){

    word+=alphabet[splitted[i]]; 
    spaceCalled = 0; 

  }else if(alphabet[splitted[i]] === undefined) {


    if(spaceCalled === 0){
      word+= ' '; 
      spaceCalled++
    }
    
   
  }


}

return word.trim()



}
