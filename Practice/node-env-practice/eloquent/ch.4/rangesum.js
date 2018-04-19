//takes a range of numbers and adds them all up.

//specifies the range, skipping steps is optional
const range = (start, end, step = 1) => {
  rangeArr = [];
  for (let i = start; i <= end; i += step) {
    rangeArr.push(i);
  }
  return rangeArr;
};

//add the range array up
const sum = numArr => {
  let total = 0;
  for (let i of numArr) {
    total += i;
  }
  return total;
};

console.log(sum(range(1, 10, 2)));
