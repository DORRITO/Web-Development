const recurisEven = (n) => {
     if (n === 0)  return true;
     if (n === 1)  return false;
     if (n < 0) return recur(-n);
     else return recur(n - 2);
};

console.log(recurIsEven(50));