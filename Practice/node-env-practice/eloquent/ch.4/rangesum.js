const range = (start, end) => {
    rangeArr = [];
    for (let i = start; i <= end; i++) {
        rangeArr.push(i);
    }
    return rangeArr;
}

const sum = numArr => Math.sum(numArr);

console.log(sum(range(1, 10)));