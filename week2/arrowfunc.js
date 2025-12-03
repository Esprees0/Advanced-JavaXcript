const a =  5;
const b = 10;

const add = function(x, y) {
    return x + y;
}; 

const addArrow = (x, y) => x + y;

const subtract = (x, y) => {
    const result = x - y;
    return result;
};

console.log(`Addition using regular function: ${add(a, b)}`);
console.log(`Addition using arrow function: ${addArrow(a, b)}`);
console.log(`Subtraction using arrow function: ${subtract(b, a)}`);