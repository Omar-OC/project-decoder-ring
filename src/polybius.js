// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {    
    let polibiusSquare = [
      ["a", "b", "c", "d", "e"],
      ["f", "g", "h", "(i/j)", "k"],
      ["l", "m", "n", "o", "p"],
      ["q", "r", "s", "t", "u"],
      ["v", "w", "x", "y", "z", " "],
    ];
    let result;
    if(encode) {
      let inputStringArray = input.split("");
      let replacedInputArray = inputStringArray.map((letter) => {
        let lowerCase = letter.toLowerCase();
        if (lowerCase === "i" || lowerCase === "j") {
          return "(i/j)";
        }
        return lowerCase;
      })
            // Finds X, Y coordinates
      let xCordinate = [];
      let yCordinate = replacedInputArray.map((letter) => {
        for (let i = 0; i < polibiusSquare.length; i++) {
          const row = polibiusSquare[i];
          if (row.find((alpha) => alpha === letter)) {
            // adds x-coordinate when "row" meets condition. "+1" corrects for x/y axis given in prompt
            xCordinate.push(i + 1);
            // adds Y-coordinate.  "+1" corrects for x/y axis given in prompt
            return row.indexOf(letter) + 1;
          }
        }
      });
      result = xCordinate.reduce((acc, current, index) => {
        let pair = `${yCordinate[index]}${current}`;
        // converts numeric representation of a space back to " ".
        if (pair === "65") {
          pair = " ";
        }
        acc.push(pair);
        return acc;
      }, []);
      
    } else {
    let spacesConverted = input.replace(" ", 65);
    // checks that there are an even number of characters so that all coordinate pairs are kept together
    if (spacesConverted.length % 2 !== 0) return false;
      //create the pair of items which repreesents the cordinats the below regex splpit the string to array of pair
    let coordinates = spacesConverted.match(/..?/g);
    result = coordinates.map((cordinate) => {
      let rowIndex = cordinate.split("")[1] - 1;
      let columnIndex = cordinate.split("")[0] - 1;
      return polibiusSquare[rowIndex][columnIndex];
    });
    }
    return result.join("");
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
