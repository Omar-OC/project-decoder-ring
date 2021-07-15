// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // validate the shift value
    if (!shift || shift == 0 || shift < -25 || shift > 25) {
      return false
    }
    
    if (encode === false) { 
      shift = shift * (-1); 
    }

    // begin to decipher
    let deciphered = ""
    let inputLower = input.toLowerCase()
    
    for (let i = 0; i < inputLower.length; i++) {
      let acsiiNumber = inputLower[i].charCodeAt()
      if (acsiiNumber === 32) {
        deciphered += String.fromCharCode(acsiiNumber)
      }
      else if (acsiiNumber > 33 && acsiiNumber < 96){
        deciphered += String.fromCharCode(acsiiNumber)
      }
      else if (acsiiNumber >= 97 && acsiiNumber <=122) {
        let decipheredLetter = acsiiNumber + shift;
        if(decipheredLetter < 97){
          decipheredLetter += 26;
        } else if (decipheredLetter > 122){
          decipheredLetter -= 26;
        }
        deciphered += String.fromCharCode(decipheredLetter)
      }
    }
    return deciphered
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
