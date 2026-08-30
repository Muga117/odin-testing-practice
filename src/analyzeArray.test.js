import { analyzeArray } from "./analyzeArray.js";

test("Array has been analyzed", () => {
    const array = analyzeArray([1,8,3,4,2,6]);
    expect(array).toEqual({average: 4,
   min: 1,
   max: 8,
   length: 6
})})
