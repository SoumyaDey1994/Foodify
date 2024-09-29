export const sum = (a, b) => {
    if(isNaN(a) || isNaN(b)) {
        return new Error("Arguments should be numbers")
    }
    return a + b;
};

