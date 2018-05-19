// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'


//



// const pyramid = (n, row=0, pyr='') => {
//     for(let line = '#'; line.length < n; line += '#'){
//         console.log(line)
//     }
// }  // no space version!








// const midpoint = Math.floor((2 * n - 1) / 2 );

//     for (let i = 0; i < n; i++){
//         let pyr = ''
//         for (let j = 0; j < n * 2 - 1; j++){
//             if (midpoint - i <= j && midpoint + i >= j){
//                 pyr += '#';
//             } else { pyr += ' ' }
//         }
//         console.log(pyr);
//     }
////////////////////////////////////////////

module.exports = pyramid;