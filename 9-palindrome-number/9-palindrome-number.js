/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
let string = x.toString();
let reverse = string.split("").reverse().join("")
    if(string === reverse) {
        return true;
    } else {
        return false;
    }
};

isPalindrome(121)