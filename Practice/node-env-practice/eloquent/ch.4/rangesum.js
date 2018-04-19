const range = (start, end) => {
    rangeArr = [];
    for (let i = start; i <= end; i++) {
        rangeArr.push(i);
    }
    return rangeArr;
}

const sum = numArr => {
    let total = 0;
    for (let i of numArr){
        total += i;
    }
    return total;
}

console.log(sum(range(1, 10)));