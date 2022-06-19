/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  // create a stack
  let stack = [];

  // Loop through each element in the string
  for (let i = 0; i < s.length; i++) {
    let char = stack[stack.length - 1];

    // if you encounter a starting bracket, push it onto the stack
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);

      // Pop the opening bracket off the stack if there is a corresponding closing bracket in the string
    } else if (
      (char === "(" && s[i] === ")") ||
      (char === "[" && s[i] === "]") ||
      (char === "{" && s[i] === "}")
    ) {
      stack.pop();
    } else return false;
  }

  // Check empty stack
  return stack.length ? false : true;
};