// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

const reverse = str => {
  let rev = str.split('').reduce((reversed, char) => {
    return char + reversed
  }, '');
  console.log(rev, 'skiddle boosh')
  return rev;
};

module.exports = reverse;
