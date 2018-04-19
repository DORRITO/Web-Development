// checks if values are the same.  does a deep check if there is a object
const deepEqual = (val1, val2) => {
  if (val1 === val2) {
    if (val1 === null || val2 === null) {
      return false;
    }
    return true;
  } else if (typeof val1 === "object" && typeof val2 === "object") {
    if (val1 === null || val2 === null) {
      return false;
    }
    for (let i in val1) {
      if (val1[i] !== val2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};


const a = {a: 1, b: 2};
const b = {a: 1, b: 2};

console.log(deepEqual(a, b))