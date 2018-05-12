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

function pyramid(n) {
  
}

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
// if ( n === row) { return }
//     if ( pyr.length === 2 * n - 1){
//         console.log(pyr);
//         return pyramid(n, row + 1);
//     }

//     let midpoint = Math.floor((2 * n - 1) / 2 );
//     let add;
//     if(midpoint - row <= pyr.length && midpoint + row >= pyr.length){
//         add = '#';
//     } else { add = ' ' }
//     pyramid(n, row, pyr + add);

module.exports = pyramid;