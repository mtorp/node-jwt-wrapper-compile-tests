"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const jwt = require("jsonwebtoken");
require("mocha");
const MissingKeyIdError_1 = require("./MissingKeyIdError");
const { expect } = chai;
function throwMissingKeyIdError() {
    throw new MissingKeyIdError_1.MissingKeyIdError();
}
describe("MissingKeyIdError", () => {
    it("a new instance should have the appropriate properties", () => {
        try {
            throwMissingKeyIdError();
        }
        catch (err) {
            expect(err.name).to.equal("MissingKeyIdError");
            expect(err instanceof jwt.JsonWebTokenError).to.equal(true);
            expect(err instanceof Error).to.equal(true);
            expect(err.stack).to.not.equal(null);
            expect(err.stack).to.not.equal(undefined);
            expect(err.toString()).to.equal(`MissingKeyIdError: missing key id`);
            expect(err.stack.split("\n")[0]).to.equal(`MissingKeyIdError: missing key id`);
            expect(err.stack.split("\n")[1].indexOf("throwMissingKeyIdError")).to.equal(7);
        }
    });
});
//# sourceMappingURL=MissingIdErrorSpec.spec.js.map