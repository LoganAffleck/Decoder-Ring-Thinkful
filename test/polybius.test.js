// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius()", () => {

    //PREREQUISITE CONDITIONS
    //------------------

    it("ignores capital letters", () => {
	expect(polybius("mEssAge")).to.equal("23513434112251");
	});

    it("keeps spaces", () => {
    expect(polybius("a b")).to.equal("11 21");
    });

    it("ignores characters that aren't alphabetical", () => {
	expect(polybius("a?1@z")).to.equal("11?1@55");
	})

    it("encodes i/j correctly", () => {
	expect(polybius("ink jet")).to.equal("423352 425144");
	});

    it("decodes 42 correctly", () => {
		expect(polybius("423352 425144", false)).to.equal("i/jnk i/jet");
	});

    //TESTING IF OUTPUT IS AS DESIRED: 
    //--------------

	it("encodes as expected", () => {
    expect(polybius("a b c")).to.equal("11 21 31");
    });

    it("decodes as expected", () => {
    expect(polybius("11 21 31", false)).to.equal("a b c");
    });

});