export const capitalize = (string) => {
    const firstLetter = string.charAt(0).toUpperCase();
    return string.replace(string.charAt(0), firstLetter);
}