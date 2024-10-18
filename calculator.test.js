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
    expect(add("1,2,3,4,5")).toBe(15);
  });

  test("handle new line delimiter", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test("handle different delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test("throw an error for negative numbers", () => {
    expect(() => add("-1,5")).toThrow("negative numbers not allowed -1");
    expect(() => add("1,-5")).toThrow("negative numbers not allowed -5");
    expect(() => add("-1,-5")).toThrow("negative numbers not allowed -1, -5");
    expect(() => add("-1\n2,3")).toThrow("negative numbers not allowed -1");
    expect(() => add("1\n-2,3")).toThrow("negative numbers not allowed -2");
    expect(() => add("1\n2,-3")).toThrow("negative numbers not allowed -3");
    expect(() => add("-1\n-2,3")).toThrow("negative numbers not allowed -1, -2");
    expect(() => add("1\n-2,-3")).toThrow("negative numbers not allowed -2, -3");
    expect(() => add("-1\n2,-3")).toThrow("negative numbers not allowed -1, -3");
    expect(() => add("-1\n-2,-3")).toThrow("negative numbers not allowed -1, -2, -3");
  });

});
