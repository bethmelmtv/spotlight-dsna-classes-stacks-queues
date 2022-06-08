const { Stack, Queue } = require("./index.js");

describe("Stack Class", () => {
  it("#peek should return the top item without modifying ", () => {
    const stack = new Stack([1]);
    stack.push(2);
    expect(stack.peek()).toEqual(2);
    expect(stack.readableList).toEqual("1,2");
  });

  it("#should initialize with  an existing list", () => {
    const stack = new Stack([1, 2, 3]);
    expect(stack.readableList).toEqual("1,2,3");
  });

  it("#push should add a new item to the stack", () => {
    const stack = new Stack([1]);
    stack.push(2);
    expect(stack.readableList).toEqual("1,2");
  });

  it("#pop should add a new item to the stack", () => {
    const stack = new Stack([1]);
    stack.push(2);
    expect(stack.pop()).toEqual(2);
    expect(stack.readableList).toEqual("1");
  });
});

describe("Queue class", () => {
  it("should initialize with an empty list", () => {
    const queue = new Queue();
    expect(queue.readableList).toEqual("");
  });

  it("should initialize with an existing list", () => {
    const queue = new Queue([1, 2, 3]);
    expect(queue.readableList).toEqual("1,2,3");
  });

  it("#enqueue should add and item to the back of the queue", () => {
    const queue = new Queue([1, 2, 3]);
    queue.enqueue(4);
    expect(queue.readableList).toEqual("1,2,3,4");
  });

  it("#dequeue should remove an item from thr from of the current list", () => {
    const queue = new Queue([1, 2, 3]);
    expect(queue.dequeue()).toEqual(1);
    expect(queue.readableList).toEqual("2,3");
  });

  it("#hasNext should return true if there is something waiting", () => {
    const queue = new Queue([1, 2, 3]);
    expect(queue.hasNext).toEqual(true);
  });

  it("#hasNext should return false if there is nothing waiting", () => {
    const queue = new Queue();
    expect(queue.hasNext).toEqual(false);
  });
});
