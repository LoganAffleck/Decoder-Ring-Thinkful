// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("subsitution()", () => {
	const alphabetKey = "igwdsvcqnfktoabjyxurephmzl";

    //PREREQUISITES
    //--------------------------------
    
	it("keeps spaces", () => {
	expect(substitution("a b c", alphabetKey)).to.equal("i g w");
	});

	it("ignores capitals", () => {
	expect(substitution("ABC", alphabetKey)).to.equal("igw");
	});

	it("can use symbols as letters", () => {
	expect(substitution("acdefghi", "@gwdsvc%nfkto$bjyxurephmzl")).to.equal("@wdsvc%n");
	});

	it("returns false if the alphabet is too short", () => {
	expect(substitution("message", "defg")).to.equal(false);
	});

	it("returns false if a letter is repeated", () => {
	expect(substitution("message", "abcdefghijklmnopqrstuvwxyy")).to.equal(false);
	});

    //TESTING IF OUTPUT AS DESIRED
    //-------------------

    it("encodes", () => {
    expect(substitution("big dreams", alphabetKey)).to.equal("gnc dxsiou");
    });
    
    it("decodes", () => {
    expect(substitution("gnc dxsiou", alphabetKey, false)).to.equal("big dreams");
    });
});