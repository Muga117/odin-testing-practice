import { calculator } from "./calculator.js";
test("Calculator Object With Basic Operations Created", () => {
    const object = calculator();
    expect(object.add(1,2)).toBe(3);
    expect(object.subtract(1,2)).toBe(-1);
    expect(object.multiply(1,2)).toBe(2);
    expect(object.divide(1,2)).toBe(0.5);
})