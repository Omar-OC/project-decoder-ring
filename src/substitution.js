// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const alphabetInput = "abcdefghijklmnopqrstuvwxyz"

  function substitution(input, alphabet, encode = true) {
    // taking care of the error handling
    if (!alphabet || alphabet.length !== 26 || typeof(alphabet)!== 'string') {
      return false
    }
  
  // let's encode the message
  let subAlphabet = {}
  let result = []
  const lowerCaseInput = input.toLowerCase();
 
  for (let char in alphabet) { 
    const character = alphabet[char] 
    if (alphabet.slice(char + 1).includes(character)) { 
      return false; 
    } else { subAlphabet[alphabetInput[char]] = character; } }
  
  for (let value in lowerCaseInput) { 
    const character = lowerCaseInput[value]; 
    character in subAlphabet ? result.push(subAlphabet[character]) : result.push(character);
  }
  
  if (encode === false) {
      let decodingAlph = [];
      let decodeResult = [];

      //Use a for in loop to go thourgh the alphabet
      for (let letter in alphabet) {
        const character = alphabet[letter];
        decodingAlph[character] = alphabetInput[letter]; 
      }
    
      for (let letter in lowerCaseInput) {
        const character = lowerCaseInput[letter];
        character in decodingAlph ? decodeResult.push(decodingAlph[character]) : decodeResult.push(character);
      }
      return decodeResult.join('');
    }
    return result.join('');
  }
 

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };