// Complete the below questions using this array:
const array = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  
  ];
  
  //Create an array using forEach that has all the usernames with a "!" to each of the usernames
    //   let meow = () => {
    //     let arr = [];
    //     array.forEach((item) => {
    //       arr.push(item.username + '!')
    //     })
    //     console.log(arr)
    //     return arr
    //   }
  
    //   meow() 
  
  //Create an array using map that has all the usernames with a "? to each of the usernames
    // const arr = array.map((item) => {
    //     return item.username + '?'
    // })
                                                // //another version
                                                // let arr = []
                                                // for (let i of array){
                                                //     arr.push(i.username + '?')
                                                // }
    // console.log(arr)
  
  //Filter the array to only include users who are on team: red
    // const filtered = array.filter((item) => {
    //     return item.team === 'red';
    // })
    // console.log(filtered)
  
  
  //Find out the total score of all users using reduce
  const score = array.reduce((total, i) => {
    return  total + i.score
  }, 0)

  console.log(score);


  // (1), what is the value of i?
  // (2), Make this map function pure:
  const arrayNum = [1, 2, 4, 5, 8, 9];
//   const newArray = arrayNum.map((num, i) => {
//   	console.log(num, i);
//   	alert(num);
//   	return num * 2;
//   })
  
  //BONUS: create a new list with all user information, but add "!" to the end of each items they own.
  