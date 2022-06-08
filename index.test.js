const { Stack } = require("./index.js");

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
