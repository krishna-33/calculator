describe("String Calculator", () => {
  test("return 0 for empty string", () => {
    expect(add("")).toBe(0);
  });

  test("return the number itself for a single number", () => {
    expect(add("1")).toBe(1);
  });

  test("return sum of two numbers", () => {
    expect(add("1,5")).toBe(6);
  });

  test("handle any amount of numbers", () => {
    expect(add("1,2,3,4,5,6,7,8,9,10")).toBe(55);
  });

  test("handle new lines delimiters", () => {
    expect(add("1\n2,3")).toBe(6);
  });

});
