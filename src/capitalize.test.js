import { capitalize } from "./capitalize.js";

test('First Letter is Capitalized', () => {
    const string = "string";
    expect(capitalize(string)).toBe("String");
})