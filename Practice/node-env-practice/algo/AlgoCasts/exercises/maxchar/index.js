// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    totals = {};
    max = [];
    maxChar = '';

    for(let i of str){
        totals[i] = totals[i] + 1 || 1;
    }

    for(let i in totals ){
       if(totals[i] > max){
           max = totals[i];
           maxChar = i;
       }
    }

    return maxChar;
}

module.exports = maxChar;
