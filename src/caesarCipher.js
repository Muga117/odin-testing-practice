export const caesarCipher = (string, key) => {
    const letterArray = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const stringArray = string.split("");
    const newString = [];
    for(let char of stringArray){
        let index = letterArray.indexOf(char);
        if(index === -1){
            // If Punctuation, do nothing
        } else {
            let newIndex = index + key;
            // Test if index is lower case
            if(index <= 25) {
                // Wrapping from z to a
                if(newIndex > 25){
                    newIndex -= 26;
                }
            // Test if index is Upper case    
            }else if(26 <= index && index <= 51){
                // Wrapping from Z to A
                if(newIndex > 51){
                    newIndex -= 26;
                }
            }
            char = letterArray[newIndex];
        }
        newString.push(char);
    }
    return newString.join("");
}

