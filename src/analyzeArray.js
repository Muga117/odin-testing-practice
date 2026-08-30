export const analyzeArray = (array) => {
    return {average: array.reduce((prev, curr) => prev + curr) / array.length,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length,
     }
}