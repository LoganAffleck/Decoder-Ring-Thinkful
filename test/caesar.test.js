// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar()", () => {

    it("ignores capitalization", () => {
		expect(caesar("mEssAge", 5)).to.equal("rjxxflj");
	});

    it("keeps spaces and symbols", () => {
		expect(caesar("This%is a test!", 15)).to.equal("iwxh%xh p ithi!");
	});

	it("encodes a message", () => {
		expect(caesar("This is a test!", 15)).to.equal("iwxh xh p ithi!");
	});

	it("decodes a message", () => {
		expect(caesar("iwxh xh p ithi!", 15, false)).to.equal("this is a test!");
	});

	it("returns false if the shift is greater than alphabet length", () => {
		expect(caesar("message", 400)).to.equal(false);
	});

	it("handles shift at the end of the alphabet", () => {
		expect(caesar("x", 8)).to.equal("f");
	});
});