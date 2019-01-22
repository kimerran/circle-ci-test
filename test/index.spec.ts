import "mocha";
import { expect } from "chai";

import { sum } from "../src/index";

describe("suite", () => {
  it("sum should add", () => {
    const result = sum(1, 2);
    expect(result).to.equal(3);
  });
})