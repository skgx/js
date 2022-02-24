const a = 2, b = 'hello';

// strict not equal operator
console.log(a !== 2); // false
console.log(a !== '2'); // true
console.log(a === 2); // true

console.log(b !== 'Hello'); // true

const x = true, y = false;
const z = 4;

// logical AND
console.log(x&& x); // true
console.log(x && y);  // false
console.log((z>2) || (z<2)); // true
console.log((z > 2) && (z < 2)); // false

console.log("Not operators:")
console.log(!a); // false
console.log(!b); // false