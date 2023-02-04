"use strict";

const init = require("..");

describe("@lerna2.cli", () => {
  it("test init", () => {
    expect(init()).toBe("init");
  });
});
