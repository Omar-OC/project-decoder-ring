// Write your tests here! 
const expect = require("chai").expect;
const caesar = require("../src/caesar");


describe("caesar", () => {
    it("should return false if the shift is 0", () => {
      const expected = false
      const actual = caesar.caesar("thinkful", 0)
      expect(actual).to.equal(expected)
    })
    
    it("should return false if the shift amoutn is above 25", () => {
      const expected = false
      const actual = caesar.caesar("thinkful", 28)
      expect(actual).to.equal(expected)
    })
  
    it("should return false if the shift amount is less than negative 25", () => {
      const expected = false
      const actual = caesar.caesar("thinkful", -28)
      expect(actual).to.equal(expected)
    })
  
    it("should encode a message by shifting the letters", () => {
      const expected = "wklqnixo"
      const actual = caesar.caesar("thinkful", 3)
      expect(actual).to.equal(expected)
    })

    it("should ignore capital letters", () => {
      const expected = "wklqnixo"
      const actual = caesar.caesar("Thinkful", 3)
      expect(actual).to.equal(expected)
    })
  
    it("should appropriately handle letters at the end of the alphabet", () => {
      const expected = "afcsb"
      const actual = caesar.caesar("zebra", 1)
      expect(actual).to.equal(expected)
    })
  
    it("should allow for a negative shift that will shift to the left", () => {
      const expected = "qefkhcri"
      const actual = caesar.caesar("thinkful", -3)
      expect(actual).to.equal(expected)
    })
}) 