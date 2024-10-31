import HashMap from './hash-map.js';

const test = new HashMap();

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

console.log(test.remove('apple'));
console.log(test.has('apple'));
console.log(test.length());
console.log(test.capacity);
console.log(test.entries());

test.set('apple', 'red');
test.set('grape', 'wonka');
test.set('moon', 'silver');

console.log(test.length());
console.log(test.capacity);
console.log(test.entries());
console.log(test.get('grape'));
console.log(test.has('kite'));
console.log(test.keys());
console.log(test.values());

test.clear();
console.log(test.length());
console.log(test.capacity);
console.log(test.entries());
