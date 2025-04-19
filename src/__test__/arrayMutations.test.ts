import { describe, it } from "vitest";

const addCounter = (list) => {
  return [...list, 0];
};

const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0];

  deepFreeze(listBefore);
};

describe("counter reducer", () => {
  it("should do redux things", () => {
    expect(addCounter(listBefore)).toEqual(listAfter);
  });
});
