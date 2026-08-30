import { reverseString } from "./reverseString.js";

test('String is Reversed', () => {
    const string = "string";
    expect(reverseString(string)).toBe("gnirts");
})