// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

const reverse = str => {
  let arr = [];
  for (let i in str){
    arr.push(str[i]);
  }
  arr = arr.reverse().join('');

  return arr;
};

module.exports = reverse;
