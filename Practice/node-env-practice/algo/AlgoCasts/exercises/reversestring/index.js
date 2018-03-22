// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

const reverse = str => {
    let rev = '';

    str.split('').map((char) => rev = char + rev );

    return rev
};

module.exports = reverse;
