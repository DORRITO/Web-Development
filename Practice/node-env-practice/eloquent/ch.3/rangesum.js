const range = (start, end) => {
    rangeArr = [];
    for (let i = start; i <= end; i++) {
        rangeArr.push(i);
    }
    return rangeArr;
}



console.log(range(1, 10));