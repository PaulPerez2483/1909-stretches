const { Calculator } = require("./calculator");
describe("Calculator", () => {
  test("should have some methods", () => {
    const myCalc = new Calculator();

    expect(typeof myCalc.add).toBe("function");
    expect(typeof myCalc.subtract).toBe("function");
    expect(typeof myCalc.divide).toBe("function");
    expect(typeof myCalc.multiply).toBe("function");
    expect(typeof myCalc.clear).toBe("function");
  });

  test("should initialize a value of 0", () => {
    const myCalc = new Calculator();
    expect(myCalc.value).toBe(0);
  });

  test("should add and subtract", () => {
    const myCalc = new Calculator();
    const random = Math.ceil(Math.random() * 100);
    myCalc.add(10);
    expect(myCalc.value).toBe(10);
    myCalc.add(random);
    expect(myCalc.value).toBe(10 + random);
    myCalc.subtract(10);
    expect(myCalc.value).toBe(random);
  });

  test("should multiply and divide", () => {
    const myCalc = new Calculator();
    const random = Math.ceil(Math.random() * 10);
    myCalc.add(3);
    myCalc.multiply(22);
    expect(myCalc.value).toBe(66);
    myCalc.divide(random);
    expect(myCalc.value).toBe(66 / random);
  });

  test("should not divide by 0", () => {
    const myCalc = new Calculator();
    myCalc.add(3);
    myCalc.multiply(22);
    expect(myCalc.value).toBe(66);
    myCalc.divide(0);
    expect(myCalc.value).toBe(66);
  });

  test("should be able to clear the value", () => {
    const myCalc = new Calculator();
    myCalc.add(22);
    expect(myCalc.value).toBe(22);
    myCalc.subtract(10);
    expect(myCalc.value).toBe(12);
    myCalc.divide(3);
    expect(myCalc.value).toBe(4);
    myCalc.multiply(7);
    expect(myCalc.value).toBe(28);
    myCalc.clear();
    expect(myCalc.value).toBe(0);
  });

  test("should be chainable", () => {
    const myCalc = new Calculator();
    myCalc
      .add(22)
      .subtract(7)
      .divide(3)
      .multiply(4);
    expect(myCalc.value).toBe(20);
  });

  // EXTRA CREDIT. Pass everything above before attempting
  xtest("should not be able to change value directly", () => {
    const myCalc = new Calculator();
    myCalc
      .add(22)
      .subtract(7)
      .divide(3)
      .multiply(4);
    myCalc.value = 100;
    expect(myCalc.value).toBe(20);
  });

  xtest("should not be able to change value directly. Really.", () => {
    const myCalc = new Calculator();
    myCalc
      .add(22)
      .subtract(7)
      .divide(3)
      .multiply(4);

    for (const key in myCalc) {
      if (typeof myCalc[key] !== "function") myCalc[key] = 100;
    }
    expect(myCalc.value).toBe(20);
  });
});
