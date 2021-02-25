const func = require("./numFunc");

describe("Testing the dividing function", () => {
  const mockCallback = jest.fn(func);

  test("Arguments should be numbers", () => {
    return mockCallback(4, 2).then((result) => {
      expect(typeof mockCallback.mock.calls[0][0]).toBe("number");
      expect(typeof mockCallback.mock.calls[0][1]).toBe("number");
    });
  });

  test("Should return only a number", () => {
    return mockCallback(0.001, 200).then((result) => {
      expect(result).toBe(0.000005);
      expect(typeof result).toBe("number");
      expect(result).not.toBe(NaN);
      expect(result).toBeGreaterThanOrEqual(0);
      expect(result).not.toBe(Infinity);
    });
  });
});
