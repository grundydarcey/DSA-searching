/* eslint-disable no-console */
/* eslint-disable eqeqeq */
function binarySearch(array, value, start, end) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;
  if (start > end) {
    return -1;
  }
  const index = Math.floor((start + end) / 2);
  const item = array[index];
  console.log(start, end);
  if (item == value) {
    return index;
  } else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  } else if (item > value) {
    return binarySearch(array, value, start, index - 1);
  }
}
 
const newArray = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18]; 
console.log(binarySearch(newArray, 8));
console.log(binarySearch(newArray, 16));

//dfs
class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right - null;
  }

  dfs(values=[]) {
    if (this.left) {
      values = this.left.dfs(values);
    }
    values.push(this.value);
    if (this.right) {
      values = this.right.dfs(values);
    }
    return values;
  }


}

//problem 1a - 0,10 0,4 3,4 3
//problem 1b - 0,10 6,10 6,7 7,7 -1
