class Stack {
  #list = [];

  constructor(initialList) {
    if (initialList) {
      this.#list = initialList;
    }
  }
  push(item) {
    this.#list.push(item);
  }

  get readableList() {
    return this.#list.toString();
  }

  pop(item) {
    return this.#list.pop();
  }

  peek() {
    return this.#list[this.#list.length - 1];
  }
}

class Queue {}

module.exports = { Stack, Queue };

class MyDataStructure {
  #list = [];

  constructor(initialList) {
    // invoked via: new MyDataStructure()
    // not needed with private field initializers,
    // unless you need to do other work
    if (initialList) this.#list = initialList;
  }

  // methods

  addBack(item) {
    // access state, ie this.#list
    this.#list.push(item);
  }

  addFront(item) {
    // access state, ie this.#list
    this.#list.unshift(item);
  }

  // property

  get readableList() {
    // access state, ie this.#list
    return this.#list.toString();
  }

  get count() {
    // access state, ie this.#list
    return this.#list.length;
  }

  set count(count) {
    // access state, ie this.#list
    return (this.#list.length = count);
  }
}

// used like:

const myStructure = new MyDataStructure([4, 6, 8]);
// use the defined methods and properties to
// interact with this Abstract Data Structure:
myStructure.addFront(3);
myStructure.addFront(4);
myStructure.addBack(7);
myStructure.addBack(9);
console.log(myStructure.count);
// 7
console.log(myStructure.readableList);
// 4,3,4,6,8,7,9

console.log(myStructure.Stack);

const listOne = new MyDataStructure([2, 3, 4]);
// use the defined methods and properties to
// interact with this Abstract Data Structure:
listOne.addFront(3);
listOne.addFront(4);
listOne.addBack(7);
listOne.addBack(9);
console.log(listOne.count);
// 7
console.log(listOne.readableList);
// 4,3,4,6,8,7,9

console.log(listOne.Stack);
