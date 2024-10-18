describe("String Calculator", () => {
  test("return 0 for empty string", () => {
    expect(add("")).toBe(0);
  });

  test("return the number itself for a single number", () => {
    expect(add("1")).toBe(1);
  });

  test('return sum of two numbers', () => {
    expect(add("1,5")).toBe(6);
});

});
