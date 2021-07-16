// Write your tests here!
const expect = require("chai").expect;
const substitution = require("../src/substitution");

describe("substitution", () => {
    it("should return if the substitution alphabet is missing", () => {
      const expected = false
      const actual = substitution.substitution("thinkful")
      expect(actual).to.equal(expected)
    })
    
    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
      const expected = false
      const actual = substitution.substitution("thinkful", "xoyqmcgruk")
      expect(actual).to.equal(expected)
    })

    it("should return false if the substitution alphabet does not contain unique characters", () => {
      const expected = false
      const actual = substitution.substitution("thinkful", 824234)
      expect(actual).to.equal(expected)
    })
  
   it("should encode a message by using the given substitution alphabet", () => {
      const expected = "jrufscpw"
      const actual = substitution.substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")
      expect(actual).to.equal(expected)
    })
  
   it("should work with any kind of key with unique characters", () => {
     const expected = "elp xhm xf mbymwwmfj dne"
     const actual = substitution.substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
      expect(actual).to.equal(expected)
   })
  
   it("should preserve spaces", () => {
     const expected = "elp xhm xf mbymwwmfj dne"
     const actual = substitution.substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
      expect(actual).to.equal(expected)
   })
  
   it("should decode a message by using the given substitution alphabet", () => {
     const expected = "message"
     const actual = substitution.substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)
      expect(actual).to.equal(expected)
   })
}) 