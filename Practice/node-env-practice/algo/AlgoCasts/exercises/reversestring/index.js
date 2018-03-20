// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

const reverse = str => {
  let rev = '';

  for (let i of str){
    rev = i + rev;
    console.log(rev), 'sckee le boosh';
  }

  return rev;
};

module.exports = reverse;
