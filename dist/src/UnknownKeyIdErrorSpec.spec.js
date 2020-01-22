"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const jwt = require("jsonwebtoken");
require("mocha");
const UnknownKeyIdError_1 = require("./UnknownKeyIdError");
const { expect } = chai;
const keyId = "keyid_1";
function throwUnknownKeyIdError() {
    throw new UnknownKeyIdError_1.UnknownKeyIdError(keyId);
}
describe("UnknownKeyIdError", () => {
    it("a new instance should have the appropriate properties", () => {
        try {
            throwUnknownKeyIdError();
        }
        catch (err) {
            expect(err.name).to.equal("UnknownKeyIdError");
            expect(err instanceof UnknownKeyIdError_1.UnknownKeyIdError).to.equal(true);
            expect(err instanceof jwt.JsonWebTokenError).to.equal(true);
            expect(err instanceof Error).to.equal(true);
            expect(err.stack).to.not.equal(null);
            expect(err.stack).to.not.equal(undefined);
            expect(err.toString()).to.equal(`UnknownKeyIdError: unknown key id: ${keyId}`);
            expect(err.keyId).to.equal(keyId);
            expect(err.message).to.equal(`unknown key id: ${keyId}`);
            expect(err.stack.split("\n")[0]).to.equal(`UnknownKeyIdError: unknown key id: ${keyId}`);
            expect(err.stack.split("\n")[1].indexOf("throwUnknownKeyIdError")).to.equal(7);
        }
    });
});
//# sourceMappingURL=UnknownKeyIdErrorSpec.spec.js.map