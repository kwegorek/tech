decoderMorse = function(morseCode) {
  //your code here
  var alphabet = MORSE_CODE

  let stringToArr = morseCode.split(' ')

  return stringToArr
    .map(char => {
      if (char in alphabet) {
        char = alphabet[char]

        return char
      } else {
        return (char = ' ')
      }
    })
    .join('')
}

//
