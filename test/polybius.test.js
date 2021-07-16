// Write your tests here!
const expect = require("chai").expect;
const polybius = require("../src/polybius");

describe("polybius", () => {
    it("should encode a message by translating each letter to number pairs", () => {
      const expected = "4432423352125413"
      const actual = polybius.polybius("thinkful")
      expect(actual).to.equal(expected)
    })
  
    it("should translate both i and j to 42", () => {
      const expected = "42"
      const actual = polybius.polybius("j")
      expect(actual).to.equal(expected)
    })
   
   it("should leave spaces as is", () => {
     const expected = "3251131343 2543241341"
     const actual = polybius.polybius("Hello World")
     expect(actual).to.equal(expected)
   })
  
   it("should decode a message by translating each pair of numbers into a letter", () => {
     const expected = "hello world"
     const actual = polybius.polybius("3251131343 2543241341", false)
     expect(actual).to.equal(expected)
   })
  
   it("should return false if the length of all numbers is odd", () => {
     const expected = false
     const actual = polybius.polybius("44324233521254134", false)
     expect(actual).to.equal(expected)
   })
}) 