// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let charList = {}
    let mostUsed = '';
    let num = ''

    for (let i of str){
        charList.i += 1
    }

    for (let i in charList){
        if(i > num){
            num = i;
            mostUsed = charList.i
        }
    }
    return mostUsed;
}

module.exports = maxChar;
