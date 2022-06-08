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

  pop() {
    return this.#list.pop();
  }

  peek() {
    return this.#list[this.#list.length - 1];
  }
}

class Queue {
  #list = [];
  constructor(initialList) {
    if (initialList) {
      this.#list = initialList;
    }
  }
  get readableList() {
    return this.#list.toString();
  }

  enqueue(item) {
    this.#list.push(item);
  }
  dequeue() {
    return this.#list.shift();
  }
  get hasNext() {
    return this.#list.length > 0;
  }
}

module.exports = { Stack, Queue };
