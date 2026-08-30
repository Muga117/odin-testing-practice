import { caesarCipher } from "./caesarCipher.js";
test("String has been shifted", () => {
    expect(caesarCipher("abc", 3)).toBe("def");
    expect(caesarCipher("xyz", 3)).toBe("abc");
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
})