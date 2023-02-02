class Stack {
  constructor() {
    this.stack = [];
  }
  find(value) {
    return this.stack.includes(value);
  }
  push(value) {
    this.stack.push(value);
  }
  pop() {
    if (!this.isEmpty()) {
      return this.stack.pop();
    } else {
      return null;
    }
  }
  size() {
    return this.stack.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
}

const s = new Stack();
s.push(1);
s.push(2);
s.push(3);
console.log(s.size()); // 3
console.log(s.pop()); // 3
console.log(s.size()); // 2
console.log(s.find(2)); // true
console.log(s.isEmpty()); // false
