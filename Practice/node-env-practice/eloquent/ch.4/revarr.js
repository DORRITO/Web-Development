const reverseArray = arr => {
    let newArr = [];
    for (let i of arr){
        newArr.unshift(i);
    }
    return newArr;
}

console.log(reverseArray(['hi', 'bye', 'wut']));