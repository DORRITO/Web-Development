const reverseArray = arr => {
    let newArr = [];
    for (let i of arr){
        newArr.unshift(i);
    }
    return newArr;
}

const reverseArrayInPlace = arr => {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        let old = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = old;
      }
    return arr;
}

console.log(reverseArray(['hi', 'bye', 'wut']));
console.log(reverseArrayInPlace(['hi', 'bye', 'wut']));